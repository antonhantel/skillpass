import { router, userProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import {
  SKILLSCORE_MIN,
  SKILLSCORE_MAX,
  DEFAULT_SCORE_WEIGHTS,
  MIN_REFERENCES_FOR_SCORE,
  MIN_ASSESSMENTS_FOR_SCORE,
  PERCENTILE_OPTIONS,
} from "@skillpass/shared";

export const scoreRouter = router({
  recalculate: userProcedure.mutation(async ({ ctx }) => {
    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: ctx.user.id },
      include: {
        education: {
          include: {
            institution: true,
            courses: { select: { rigorScore: true } },
          },
        },
        references: { where: { status: "COMPLETED" } },
        assessments: { where: { completedAt: { not: null } } },
        performanceReviews: { select: { overallSentiment: true } },
        transcripts: { where: { status: "VERIFIED" }, select: { id: true } },
      },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

    // Check minimum data requirements
    const hasTranscript = profile.transcripts.length > 0;
    const completedRefs = profile.references.length;
    const completedAssessments = profile.assessments.length;

    const hasMinData =
      hasTranscript &&
      completedRefs >= MIN_REFERENCES_FOR_SCORE &&
      completedAssessments >= MIN_ASSESSMENTS_FOR_SCORE;

    if (!hasMinData) {
      return {
        calculated: false,
        missing: {
          transcript: !hasTranscript,
          references: completedRefs < MIN_REFERENCES_FOR_SCORE
            ? MIN_REFERENCES_FOR_SCORE - completedRefs
            : 0,
          assessments: completedAssessments < MIN_ASSESSMENTS_FOR_SCORE
            ? MIN_ASSESSMENTS_FOR_SCORE - completedAssessments
            : 0,
        },
      };
    }

    // --- Academic sub-score (300-850) ---
    let academicScore: number | null = null;
    if (profile.education.length > 0) {
      const eduScores: number[] = [];
      for (const edu of profile.education) {
        if (edu.gpaRaw == null) continue;
        const tierScore = edu.institution?.tierScore ?? 50;
        // Normalize GPA to 0-1 scale
        const gpaFraction = edu.gpaRaw / (edu.gpaScale || 4.0);
        // Weight by institution quality
        const calibrated = gpaFraction * (0.5 + (tierScore / 100) * 0.5);
        // Factor in course rigor if available
        const avgRigor = edu.courses.length > 0
          ? edu.courses.reduce((sum, c) => sum + (c.rigorScore ?? 50), 0) / edu.courses.length
          : 50;
        const rigorFactor = 0.9 + (avgRigor / 100) * 0.2; // 0.9 to 1.1
        eduScores.push(calibrated * rigorFactor);
      }
      if (eduScores.length > 0) {
        const avgEdu = eduScores.reduce((a, b) => a + b, 0) / eduScores.length;
        academicScore = SKILLSCORE_MIN + avgEdu * (SKILLSCORE_MAX - SKILLSCORE_MIN);
        academicScore = Math.min(SKILLSCORE_MAX, Math.max(SKILLSCORE_MIN, academicScore));
      }
    }

    // --- Peer Signal sub-score (300-850) ---
    let peerSignalScore: number | null = null;
    if (completedRefs > 0) {
      const refScores: number[] = [];
      for (const ref of profile.references) {
        if (!ref.dimensionScores) continue;
        const scores = ref.dimensionScores as Record<string, number>;
        const vals = Object.values(scores);
        if (vals.length === 0) continue;
        const avgDimension = vals.reduce((a, b) => a + b, 0) / vals.length;
        // Dimension scores are 1-5, normalize to 0-1
        const normalized = (avgDimension - 1) / 4;

        // Factor in forced choice rankings
        let choiceBoost = 0;
        if (ref.forcedChoiceRankings) {
          const rankings = ref.forcedChoiceRankings as Record<string, string>;
          const rankValues = Object.values(rankings);
          for (const rank of rankValues) {
            const option = PERCENTILE_OPTIONS.find((o) => o.value === rank);
            if (option) choiceBoost += option.numericValue;
          }
          if (rankValues.length > 0) {
            choiceBoost = (choiceBoost / rankValues.length - 25) / 75; // normalize to 0-1
          }
        }

        refScores.push(normalized * 0.6 + choiceBoost * 0.4);
      }
      if (refScores.length > 0) {
        const avgRef = refScores.reduce((a, b) => a + b, 0) / refScores.length;
        peerSignalScore = SKILLSCORE_MIN + avgRef * (SKILLSCORE_MAX - SKILLSCORE_MIN);
        peerSignalScore = Math.min(SKILLSCORE_MAX, Math.max(SKILLSCORE_MIN, peerSignalScore));
      }
    }

    // --- Performance sub-score (300-850) ---
    let performanceScore: number | null = null;
    if (profile.performanceReviews.length > 0) {
      const reviewScores: number[] = [];
      for (const review of profile.performanceReviews) {
        if (review.overallSentiment != null) {
          reviewScores.push(review.overallSentiment);
        }
      }
      if (reviewScores.length > 0) {
        const avgSentiment = reviewScores.reduce((a, b) => a + b, 0) / reviewScores.length;
        performanceScore = SKILLSCORE_MIN + avgSentiment * (SKILLSCORE_MAX - SKILLSCORE_MIN);
        performanceScore = Math.min(SKILLSCORE_MAX, Math.max(SKILLSCORE_MIN, performanceScore));
      }
    }

    // --- Assessed Ability sub-score (300-850) ---
    let assessedAbilityScore: number | null = null;
    if (completedAssessments > 0) {
      const assessScores: number[] = [];
      for (const assessment of profile.assessments) {
        if (assessment.scorePercentile != null) {
          assessScores.push(assessment.scorePercentile / 100);
        } else if (assessment.scoreRaw != null) {
          assessScores.push(assessment.scoreRaw / 100);
        }
      }
      if (assessScores.length > 0) {
        const avgAssess = assessScores.reduce((a, b) => a + b, 0) / assessScores.length;
        assessedAbilityScore = SKILLSCORE_MIN + avgAssess * (SKILLSCORE_MAX - SKILLSCORE_MIN);
        assessedAbilityScore = Math.min(SKILLSCORE_MAX, Math.max(SKILLSCORE_MIN, assessedAbilityScore));
      }
    }

    // --- Composite score ---
    const weights = DEFAULT_SCORE_WEIGHTS;
    let totalWeight = 0;
    let weightedSum = 0;

    if (academicScore != null) {
      weightedSum += academicScore * weights.academic;
      totalWeight += weights.academic;
    }
    if (performanceScore != null) {
      weightedSum += performanceScore * weights.performance;
      totalWeight += weights.performance;
    }
    if (peerSignalScore != null) {
      weightedSum += peerSignalScore * weights.peerSignal;
      totalWeight += weights.peerSignal;
    }
    if (assessedAbilityScore != null) {
      weightedSum += assessedAbilityScore * weights.assessedAbility;
      totalWeight += weights.assessedAbility;
    }

    const overallScore = totalWeight > 0 ? weightedSum / totalWeight : null;

    // --- Confidence ---
    let dataPoints = 0;
    let maxDataPoints = 4;
    if (hasTranscript) dataPoints++;
    if (completedRefs >= 2) dataPoints++;
    if (completedAssessments >= 1) dataPoints++;
    if (profile.performanceReviews.length > 0) dataPoints++;
    const confidence = dataPoints / maxDataPoints;

    // Update profile
    await ctx.db.talentProfile.update({
      where: { id: profile.id },
      data: {
        overallSkillScore: overallScore,
        academicScore,
        performanceScore,
        peerSignalScore,
        assessedAbilityScore,
        scoreConfidence: confidence,
        scoreUpdatedAt: new Date(),
      },
    });

    // Record in score history
    if (overallScore != null) {
      await ctx.db.scoreHistory.create({
        data: {
          talentProfileId: profile.id,
          overallScore,
          academicScore,
          performanceScore,
          peerSignalScore,
          assessedAbilityScore,
          confidence,
          triggerEvent: "manual_recalculation",
        },
      });
    }

    return {
      calculated: true,
      overallScore,
      academicScore,
      performanceScore,
      peerSignalScore,
      assessedAbilityScore,
      confidence,
    };
  }),
});

import {
  DEFAULT_SCORE_WEIGHTS,
  SKILLSCORE_MIN,
  SKILLSCORE_MAX,
  MIN_REFERENCES_FOR_SCORE,
  MIN_ASSESSMENTS_FOR_SCORE,
  CONFIDENCE_THIN,
  CONFIDENCE_MODERATE,
  CONFIDENCE_THICK,
  clamp,
} from "@skillpass/shared";

interface ScoreInputs {
  academicScore: number | null;
  performanceScore: number | null;
  peerSignalScore: number | null;
  assessedAbilityScore: number | null;
  referenceCount: number;
  assessmentCount: number;
  hasTranscript: boolean;
  reviewCount: number;
}

interface CompositeScoreResult {
  overallScore: number;
  confidence: number;
  subScores: {
    academic: number | null;
    performance: number | null;
    peerSignal: number | null;
    assessedAbility: number | null;
  };
  meetsMinimumData: boolean;
}

export function calculateCompositeScore(
  inputs: ScoreInputs,
  weights = DEFAULT_SCORE_WEIGHTS
): CompositeScoreResult {
  const subScores = {
    academic: inputs.academicScore,
    performance: inputs.performanceScore,
    peerSignal: inputs.peerSignalScore,
    assessedAbility: inputs.assessedAbilityScore,
  };

  // Check minimum data requirements
  const meetsMinimumData =
    inputs.hasTranscript &&
    inputs.referenceCount >= MIN_REFERENCES_FOR_SCORE &&
    inputs.assessmentCount >= MIN_ASSESSMENTS_FOR_SCORE;

  // Calculate weighted average of available scores
  let weightedSum = 0;
  let totalWeight = 0;

  if (subScores.academic != null) {
    weightedSum += subScores.academic * weights.academic;
    totalWeight += weights.academic;
  }
  if (subScores.performance != null) {
    weightedSum += subScores.performance * weights.performance;
    totalWeight += weights.performance;
  }
  if (subScores.peerSignal != null) {
    weightedSum += subScores.peerSignal * weights.peerSignal;
    totalWeight += weights.peerSignal;
  }
  if (subScores.assessedAbility != null) {
    weightedSum += subScores.assessedAbility * weights.assessedAbility;
    totalWeight += weights.assessedAbility;
  }

  // If no scores available at all, return minimum
  if (totalWeight === 0) {
    return {
      overallScore: SKILLSCORE_MIN,
      confidence: 0,
      subScores,
      meetsMinimumData: false,
    };
  }

  // Normalize by available weight
  const overallScore = clamp(
    Math.round(weightedSum / totalWeight),
    SKILLSCORE_MIN,
    SKILLSCORE_MAX
  );

  // Calculate confidence based on data completeness
  const confidence = calculateConfidence(inputs);

  return {
    overallScore,
    confidence,
    subScores,
    meetsMinimumData,
  };
}

function calculateConfidence(inputs: ScoreInputs): number {
  let dataPoints = 0;
  let maxDataPoints = 0;

  // Transcript (0 or 1)
  maxDataPoints += 1;
  if (inputs.hasTranscript) dataPoints += 1;

  // References (up to 5 for full confidence)
  maxDataPoints += 5;
  dataPoints += Math.min(inputs.referenceCount, 5);

  // Assessments (up to 3 for full confidence)
  maxDataPoints += 3;
  dataPoints += Math.min(inputs.assessmentCount, 3);

  // Performance reviews (up to 3 for full confidence)
  maxDataPoints += 3;
  dataPoints += Math.min(inputs.reviewCount, 3);

  const raw = dataPoints / maxDataPoints;

  // Map to confidence tiers
  if (raw >= 0.8) return CONFIDENCE_THICK;
  if (raw >= 0.5) return CONFIDENCE_MODERATE;
  if (raw > 0) return CONFIDENCE_THIN;
  return 0;
}

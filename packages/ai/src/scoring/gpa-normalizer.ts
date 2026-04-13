import { clamp, mapToRange } from "@skillpass/shared";
import {
  calculateInstitutionTierScore,
  calculateDepartmentModifier,
} from "./institution-tier";

interface NormalizationInput {
  gpaRaw: number;
  gpaScale: number;
  institutionData: {
    rankingUsNews: number | null;
    rankingQs: number | null;
    acceptanceRate: number | null;
    researchOutput: number | null;
    studentFacultyRatio: number | null;
    avgGpa: number | null;
  };
  departmentRankingScore: number | null;
  courseRigorScores: number[]; // Array of rigor scores for courses taken
}

interface NormalizationResult {
  gpaCalibrated: number;
  gpaPercentile: number;
  institutionTierScore: number;
  departmentModifier: number;
  rigorWeightedGpa: number;
}

export function normalizeGpa(input: NormalizationInput): NormalizationResult {
  // Step 1: Normalize raw GPA to 4.0 scale
  const gpa4 = (input.gpaRaw / input.gpaScale) * 4.0;

  // Step 2: Calculate institution tier score (0-100)
  const tierScore = calculateInstitutionTierScore(input.institutionData);

  // Step 3: Calculate department modifier (0.8-1.2)
  const deptMod = calculateDepartmentModifier(input.departmentRankingScore);

  // Step 4: Calculate rigor-weighted GPA
  // If courses have rigor scores, weight the GPA by average rigor
  let rigorFactor = 1.0;
  if (input.courseRigorScores.length > 0) {
    const avgRigor =
      input.courseRigorScores.reduce((sum, r) => sum + r, 0) /
      input.courseRigorScores.length;
    // Rigor factor: 0.9 (easy courses, avg rigor ~30) to 1.1 (hard courses, avg rigor ~90)
    rigorFactor = 0.9 + (avgRigor / 100) * 0.2;
  }

  // Step 5: Calculate calibrated GPA
  // Formula: rawGPA * (tierScore / 100) * departmentModifier * rigorFactor
  // The tier score ranges from 0-100, so dividing by 100 gives 0.0-1.0
  // For a top school (tier 90), this gives 0.9; for a lower-tier (tier 40), gives 0.4
  // We then scale back to a meaningful range (0-4.0)
  const calibrated = gpa4 * (tierScore / 100) * deptMod * rigorFactor;

  // Step 6: Convert to percentile (simplified model)
  // In production, this would compare against the distribution of all users
  const percentile = estimatePercentile(calibrated);

  return {
    gpaCalibrated: Math.round(calibrated * 100) / 100,
    gpaPercentile: Math.round(percentile * 10) / 10,
    institutionTierScore: tierScore,
    departmentModifier: Math.round(deptMod * 100) / 100,
    rigorWeightedGpa: Math.round(gpa4 * rigorFactor * 100) / 100,
  };
}

function estimatePercentile(calibratedGpa: number): number {
  // Simplified percentile model (logistic function)
  // Calibrated GPA typically ranges from 0.5 to 4.0
  // We map this to 0-100 percentile using a sigmoid-like curve
  // In production, use actual distribution from database

  // Center the sigmoid at 2.0 calibrated GPA
  const x = (calibratedGpa - 2.0) * 2;
  const sigmoid = 1 / (1 + Math.exp(-x));
  return clamp(sigmoid * 100, 1, 99.9);
}

export function calculateAcademicSubScore(
  gpaPercentile: number,
  tierScore: number
): number {
  // Map to 300-850 SkillScore range
  // Weighted: 60% GPA percentile, 40% institution tier
  const composite = gpaPercentile * 0.6 + tierScore * 0.4;
  return Math.round(mapToRange(composite, 0, 100, 300, 850));
}

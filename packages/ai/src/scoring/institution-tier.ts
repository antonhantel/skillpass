interface InstitutionData {
  rankingUsNews: number | null;
  rankingQs: number | null;
  acceptanceRate: number | null;
  researchOutput: number | null;
  studentFacultyRatio: number | null;
  avgGpa: number | null;
}

// Weights for tier score components
const WEIGHTS = {
  rankPercentile: 0.35,
  acceptanceRateInverse: 0.2,
  researchOutput: 0.15,
  facultyRatio: 0.1,
  gradeInflationPenalty: 0.2,
};

// Maximum values for normalization (approximate)
const MAX_RANK = 500;
const MAX_RESEARCH = 100;
const MAX_FACULTY_RATIO = 30;
const BASELINE_GPA = 3.0; // Average GPA considered "normal"

export function calculateInstitutionTierScore(data: InstitutionData): number {
  let score = 0;
  let totalWeight = 0;

  // Rank percentile (lower rank number = better)
  const bestRank = Math.min(
    data.rankingUsNews ?? MAX_RANK,
    data.rankingQs ?? MAX_RANK
  );
  if (bestRank < MAX_RANK) {
    const rankPercentile = (1 - bestRank / MAX_RANK) * 100;
    score += rankPercentile * WEIGHTS.rankPercentile;
    totalWeight += WEIGHTS.rankPercentile;
  }

  // Acceptance rate inverse (lower acceptance = more selective = higher score)
  if (data.acceptanceRate != null) {
    const selectivity = (1 - data.acceptanceRate) * 100;
    score += selectivity * WEIGHTS.acceptanceRateInverse;
    totalWeight += WEIGHTS.acceptanceRateInverse;
  }

  // Research output (normalized to 0-100)
  if (data.researchOutput != null) {
    const normalizedResearch = Math.min(
      (data.researchOutput / MAX_RESEARCH) * 100,
      100
    );
    score += normalizedResearch * WEIGHTS.researchOutput;
    totalWeight += WEIGHTS.researchOutput;
  }

  // Faculty-to-student ratio (lower ratio = better)
  if (data.studentFacultyRatio != null) {
    const ratioScore =
      (1 - Math.min(data.studentFacultyRatio, MAX_FACULTY_RATIO) / MAX_FACULTY_RATIO) * 100;
    score += ratioScore * WEIGHTS.facultyRatio;
    totalWeight += WEIGHTS.facultyRatio;
  }

  // Grade inflation penalty (higher avg GPA = more inflation = score penalty)
  if (data.avgGpa != null) {
    // Schools with avg GPA above baseline get penalized
    const inflationFactor = Math.max(0, data.avgGpa - BASELINE_GPA);
    const penaltyScore = Math.max(0, 100 - inflationFactor * 50);
    score += penaltyScore * WEIGHTS.gradeInflationPenalty;
    totalWeight += WEIGHTS.gradeInflationPenalty;
  }

  // Normalize: if we only have some data, scale proportionally
  if (totalWeight === 0) return 50; // No data, return middle score
  return Math.round((score / totalWeight) * 10) / 10;
}

export function calculateDepartmentModifier(
  departmentRankingScore: number | null
): number {
  if (departmentRankingScore == null) return 1.0;
  // Department score 0-100, modifier ranges from 0.8 to 1.2
  return 0.8 + (departmentRankingScore / 100) * 0.4;
}

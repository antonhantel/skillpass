// SkillScore range (echoing FICO for familiarity)
export const SKILLSCORE_MIN = 300;
export const SKILLSCORE_MAX = 850;

// Sub-score weights (default, employers can customize)
export const DEFAULT_SCORE_WEIGHTS = {
  academic: 0.25,
  performance: 0.25,
  peerSignal: 0.25,
  assessedAbility: 0.25,
} as const;

// Minimum data requirements before score generation
export const MIN_REFERENCES_FOR_SCORE = 2;
export const MIN_ASSESSMENTS_FOR_SCORE = 1;
export const REQUIRES_TRANSCRIPT = true;

// Score confidence thresholds
export const CONFIDENCE_THIN = 0.3;
export const CONFIDENCE_MODERATE = 0.6;
export const CONFIDENCE_THICK = 0.85;

// Reference dimensions
export const REFERENCE_DIMENSIONS = [
  "technical_ability",
  "leadership",
  "communication",
  "reliability",
  "creativity",
  "coachability",
  "work_ethic",
  "collaboration",
] as const;

export type ReferenceDimension = (typeof REFERENCE_DIMENSIONS)[number];

// Forced-choice percentile options
export const PERCENTILE_OPTIONS = [
  { value: "top_5_pct", label: "Top 5%", numericValue: 95 },
  { value: "top_10_pct", label: "Top 10%", numericValue: 90 },
  { value: "top_25_pct", label: "Top 25%", numericValue: 75 },
  { value: "top_50_pct", label: "Top 50%", numericValue: 50 },
  { value: "bottom_50_pct", label: "Bottom 50%", numericValue: 25 },
] as const;

// Profile completeness weights
export const PROFILE_COMPLETENESS = {
  basicInfo: 0.2,
  education: 0.2,
  workHistory: 0.2,
  transcript: 0.15,
  references: 0.15,
  assessment: 0.1,
} as const;

// Assessment retake policy (in days)
export const ASSESSMENT_RETAKE_DAYS = 180; // 6 months

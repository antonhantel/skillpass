// Letter grade to numeric GPA conversion (US 4.0 scale)
export const LETTER_TO_GPA: Record<string, number> = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
};

// Pass/fail variants
export const PASS_GRADES = new Set(["P", "PASS", "S", "CR", "SAT"]);
export const FAIL_GRADES = new Set(["F", "FAIL", "U", "NC", "UNSAT"]);

// UK grading scale
export const UK_CLASSIFICATION: Record<string, number> = {
  "First Class": 4.0,
  "Upper Second (2:1)": 3.5,
  "Lower Second (2:2)": 3.0,
  "Third Class": 2.5,
  Pass: 2.0,
  Fail: 0.0,
};

// Course code level to base rigor score (fallback when Claude unavailable)
export const COURSE_LEVEL_RIGOR: Record<string, number> = {
  "100": 30,
  "200": 50,
  "300": 70,
  "400": 80,
  "500": 90,
  "600": 95,
  "700": 95,
  "800": 95,
};

export function letterGradeToNumeric(grade: string): number | null {
  const normalized = grade.trim().toUpperCase();
  if (normalized in LETTER_TO_GPA) return LETTER_TO_GPA[normalized]!;
  if (PASS_GRADES.has(normalized)) return null; // pass/fail, no numeric
  if (FAIL_GRADES.has(normalized)) return 0.0;
  // Try parsing as numeric (e.g., "3.5")
  const parsed = parseFloat(grade);
  if (!isNaN(parsed)) return parsed;
  return null;
}

export function getCourseLevel(courseCode: string): string | null {
  const match = courseCode.match(/(\d)\d{2}/);
  return match ? `${match[1]}00` : null;
}

export function getFallbackRigorScore(courseCode: string): number {
  const level = getCourseLevel(courseCode);
  if (level && level in COURSE_LEVEL_RIGOR) return COURSE_LEVEL_RIGOR[level]!;
  return 50; // default middle rigor
}

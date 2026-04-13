export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatScore(score: number): string {
  return Math.round(score).toString();
}

export function formatPercentile(percentile: number): string {
  const rounded = Math.round(percentile);
  if (rounded >= 90) return `Top ${100 - rounded}%`;
  return `${rounded}th percentile`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mapToRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const clamped = clamp(value, inMin, inMax);
  return ((clamped - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

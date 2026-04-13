import { askClaude } from "./claude";

interface ReviewAnalysis {
  themes: string[];
  sentimentScores: Record<string, number>;
  overallSentiment: number;
  strengths: string[];
  developmentAreas: string[];
}

const SYSTEM_PROMPT = `You are a performance review analyst. You extract structured insights from performance review text.

Your analysis should include:
- Key themes (e.g., "leadership", "technical_skill", "communication", "initiative", "reliability")
- Sentiment scores per theme (0.0 = very negative, 0.5 = neutral, 1.0 = very positive)
- Overall sentiment (0.0-1.0)
- Top strengths mentioned
- Development areas mentioned

Account for company-specific rating cultures. "Meets expectations" at a high-performance company like Amazon may actually indicate strong performance.

Return your analysis as JSON.`;

export async function analyzePerformanceReview(
  reviewText: string,
  companyName?: string
): Promise<ReviewAnalysis> {
  const userPrompt = `Analyze the following performance review${companyName ? ` from ${companyName}` : ""}.

Review text:
"""
${reviewText}
"""

Return JSON with this shape:
{
  "themes": ["leadership", "technical_skill", ...],
  "sentimentScores": {"leadership": 0.85, "technical_skill": 0.9, ...},
  "overallSentiment": 0.82,
  "strengths": ["Strong communicator", ...],
  "developmentAreas": ["Could improve delegation", ...]
}`;

  return askClaude<ReviewAnalysis>(SYSTEM_PROMPT, userPrompt);
}

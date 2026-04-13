import { askClaude } from "./claude";
import { getFallbackRigorScore } from "@skillpass/shared";

interface CourseInput {
  courseCode: string | null;
  courseName: string;
  credits: number | null;
}

interface CourseRigorResult {
  courseCode: string | null;
  courseName: string;
  rigorScore: number;
  reasoning: string;
}

const SYSTEM_PROMPT = `You are an academic course rigor evaluator. You rate university courses on a 0-100 scale based on their difficulty and intellectual rigor.

Consider these factors:
- Depth of prerequisites typically required
- Mathematical/quantitative intensity
- Conceptual complexity
- Practical vs. theoretical balance
- Typical difficulty compared to other courses at similar level

Return your analysis as a JSON array.`;

export async function analyzeCourseRigor(
  courses: CourseInput[],
  institutionName: string,
  departmentName: string
): Promise<CourseRigorResult[]> {
  if (courses.length === 0) return [];

  try {
    const courseList = courses
      .map(
        (c) =>
          `${c.courseCode ? `${c.courseCode}: ` : ""}${c.courseName}${c.credits ? ` (${c.credits} credits)` : ""}`
      )
      .join("\n");

    const userPrompt = `Rate the following courses on academic rigor (0-100 scale).

Institution: ${institutionName}
Department: ${departmentName}

Courses:
${courseList}

Return a JSON array with this shape:
[{"courseCode": "CS101" | null, "courseName": "...", "rigorScore": 75, "reasoning": "..."}]`;

    return await askClaude<CourseRigorResult[]>(SYSTEM_PROMPT, userPrompt);
  } catch {
    // Fallback: assign rigor scores based on course code level
    return courses.map((c) => ({
      courseCode: c.courseCode,
      courseName: c.courseName,
      rigorScore: c.courseCode
        ? getFallbackRigorScore(c.courseCode)
        : 50,
      reasoning: "Fallback scoring based on course level",
    }));
  }
}

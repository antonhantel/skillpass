import type { Block } from "@aws-sdk/client-textract";
import { letterGradeToNumeric } from "@skillpass/shared";

export interface ParsedCourse {
  courseCode: string | null;
  courseName: string;
  grade: string | null;
  gradeNumeric: number | null;
  credits: number | null;
  semester: string | null;
}

export interface ParsedTranscript {
  courses: ParsedCourse[];
  rawText: string;
  confidence: number;
}

// Column header patterns for identification
const HEADER_PATTERNS = {
  courseCode: /\b(course\s*(code|number|no|#|id)|code|number)\b/i,
  courseName: /\b(course\s*(name|title|description)|title|description|subject)\b/i,
  grade: /\b(grade|mark|score|letter)\b/i,
  credits: /\b(credit|unit|hour|cr\.?|hrs?)\b/i,
  semester: /\b(semester|term|quarter|session|period)\b/i,
};

interface TableCell {
  rowIndex: number;
  columnIndex: number;
  text: string;
  confidence: number;
}

export function parseTextractBlocks(blocks: Block[]): ParsedTranscript {
  const tables = extractTables(blocks);
  const allCourses: ParsedCourse[] = [];
  let totalConfidence = 0;
  let cellCount = 0;

  for (const table of tables) {
    const headerRow = identifyHeaderRow(table);
    if (!headerRow) continue;

    const columnMapping = mapColumns(headerRow);
    if (!columnMapping.courseName && !columnMapping.grade) continue; // Not a course table

    const dataRows = table.filter((cell) => cell.rowIndex > headerRow[0]!.rowIndex);
    const grouped = groupByRow(dataRows);

    for (const row of grouped) {
      const course = extractCourseFromRow(row, columnMapping);
      if (course) {
        allCourses.push(course);
        row.forEach((cell) => {
          totalConfidence += cell.confidence;
          cellCount++;
        });
      }
    }
  }

  const rawText = blocks
    .filter((b) => b.BlockType === "LINE")
    .map((b) => b.Text ?? "")
    .join("\n");

  return {
    courses: allCourses,
    rawText,
    confidence: cellCount > 0 ? totalConfidence / cellCount : 0,
  };
}

function extractTables(blocks: Block[]): TableCell[][] {
  const tables: TableCell[][] = [];
  const tableBlocks = blocks.filter((b) => b.BlockType === "TABLE");

  for (const tableBlock of tableBlocks) {
    const cellIds = new Set(
      tableBlock.Relationships?.flatMap((r) => r.Ids ?? []) ?? []
    );
    const cells: TableCell[] = [];

    for (const block of blocks) {
      if (block.BlockType === "CELL" && block.Id && cellIds.has(block.Id)) {
        const wordIds =
          block.Relationships?.flatMap((r) => r.Ids ?? []) ?? [];
        const words = blocks
          .filter((b) => b.Id && wordIds.includes(b.Id))
          .map((b) => b.Text ?? "")
          .join(" ");

        cells.push({
          rowIndex: block.RowIndex ?? 0,
          columnIndex: block.ColumnIndex ?? 0,
          text: words.trim(),
          confidence: block.Confidence ?? 0,
        });
      }
    }

    if (cells.length > 0) tables.push(cells);
  }

  return tables;
}

function identifyHeaderRow(table: TableCell[]): TableCell[] | null {
  const rows = groupByRow(table);

  for (const row of rows) {
    const texts = row.map((c) => c.text.toLowerCase());
    const hasGrade = texts.some((t) => HEADER_PATTERNS.grade.test(t));
    const hasCourse =
      texts.some((t) => HEADER_PATTERNS.courseName.test(t)) ||
      texts.some((t) => HEADER_PATTERNS.courseCode.test(t));

    if (hasGrade || hasCourse) return row;
  }

  return null;
}

interface ColumnMap {
  courseCode?: number;
  courseName?: number;
  grade?: number;
  credits?: number;
  semester?: number;
}

function mapColumns(headerRow: TableCell[]): ColumnMap {
  const mapping: ColumnMap = {};

  for (const cell of headerRow) {
    const text = cell.text;
    if (HEADER_PATTERNS.courseCode.test(text)) mapping.courseCode = cell.columnIndex;
    else if (HEADER_PATTERNS.courseName.test(text)) mapping.courseName = cell.columnIndex;
    else if (HEADER_PATTERNS.grade.test(text)) mapping.grade = cell.columnIndex;
    else if (HEADER_PATTERNS.credits.test(text)) mapping.credits = cell.columnIndex;
    else if (HEADER_PATTERNS.semester.test(text)) mapping.semester = cell.columnIndex;
  }

  return mapping;
}

function groupByRow(cells: TableCell[]): TableCell[][] {
  const groups = new Map<number, TableCell[]>();
  for (const cell of cells) {
    const existing = groups.get(cell.rowIndex) ?? [];
    existing.push(cell);
    groups.set(cell.rowIndex, existing);
  }
  return Array.from(groups.values()).sort(
    (a, b) => (a[0]?.rowIndex ?? 0) - (b[0]?.rowIndex ?? 0)
  );
}

function extractCourseFromRow(
  row: TableCell[],
  mapping: ColumnMap
): ParsedCourse | null {
  const getCell = (col: number | undefined) =>
    col != null ? row.find((c) => c.columnIndex === col)?.text?.trim() ?? null : null;

  const courseName = getCell(mapping.courseName);
  if (!courseName) return null;

  const grade = getCell(mapping.grade);
  const creditsStr = getCell(mapping.credits);
  const credits = creditsStr ? parseFloat(creditsStr) : null;

  return {
    courseCode: getCell(mapping.courseCode),
    courseName,
    grade,
    gradeNumeric: grade ? letterGradeToNumeric(grade) : null,
    credits: credits && !isNaN(credits) ? credits : null,
    semester: getCell(mapping.semester),
  };
}

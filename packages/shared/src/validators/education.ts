import { z } from "zod";

export const createEducationSchema = z.object({
  institutionName: z.string().min(1).max(200),
  institutionId: z.string().uuid().optional(),
  degree: z.string().min(1).max(100),
  major: z.string().min(1).max(100),
  minor: z.string().max(100).optional(),
  gpaRaw: z.number().min(0).max(5.0).optional(),
  gpaScale: z.number().min(1).max(100).default(4.0),
  startDate: z.string().optional(), // ISO date string
  graduationYear: z.number().int().min(1950).max(2035).optional(),
});

export type CreateEducationInput = z.infer<typeof createEducationSchema>;

export const updateEducationSchema = createEducationSchema.partial().extend({
  id: z.string().uuid(),
});

export type UpdateEducationInput = z.infer<typeof updateEducationSchema>;

export const createWorkHistorySchema = z.object({
  company: z.string().min(1).max(200),
  title: z.string().min(1).max(200),
  startDate: z.string(), // ISO date string
  endDate: z.string().optional(),
  isCurrent: z.boolean().default(false),
  description: z.string().max(2000).optional(),
  location: z.string().max(100).optional(),
});

export type CreateWorkHistoryInput = z.infer<typeof createWorkHistorySchema>;

export const updateWorkHistorySchema = createWorkHistorySchema.partial().extend({
  id: z.string().uuid(),
});

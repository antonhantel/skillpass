import { z } from "zod";

export const updateProfileSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-z0-9_-]+$/, "Username can only contain lowercase letters, numbers, hyphens, and underscores")
    .optional(),
  headline: z.string().max(120).optional(),
  bio: z.string().max(2000).optional(),
  location: z.string().max(100).optional(),
  workAuth: z
    .enum(["US_CITIZEN", "GREEN_CARD", "H1B", "OPT", "OTHER", "UNDISCLOSED"])
    .optional(),
  yearsExperience: z.number().int().min(0).max(50).optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  phoneNumber: z.string().max(20).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export const setUsernameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-z0-9_-]+$/, "Username can only contain lowercase letters, numbers, hyphens, and underscores"),
});

export const addSkillSchema = z.object({
  name: z.string().min(1).max(50),
  category: z.string().max(30).optional(),
  yearsUsed: z.number().int().min(0).max(50).optional(),
});

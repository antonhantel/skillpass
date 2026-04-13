import { z } from "zod";

export const requestReferenceSchema = z.object({
  raterEmail: z.string().email(),
  raterName: z.string().min(1).max(100),
  relationshipType: z.enum([
    "MANAGER",
    "PEER",
    "DIRECT_REPORT",
    "PROFESSOR",
    "CLIENT",
    "MENTOR",
  ]),
  relationshipDuration: z.number().int().min(1).optional(), // months
});

export type RequestReferenceInput = z.infer<typeof requestReferenceSchema>;

const dimensionScoreSchema = z.record(
  z.string(),
  z.number().int().min(1).max(5)
);

const forcedChoiceSchema = z.record(
  z.string(),
  z.enum(["top_5_pct", "top_10_pct", "top_25_pct", "top_50_pct", "bottom_50_pct"])
);

const freeTextSchema = z.record(
  z.string(),
  z.string().max(200)
);

export const submitReferenceSchema = z.object({
  token: z.string(),
  dimensionScores: dimensionScoreSchema,
  forcedChoiceRankings: forcedChoiceSchema,
  freeTextResponses: freeTextSchema.optional(),
});

export type SubmitReferenceInput = z.infer<typeof submitReferenceSchema>;

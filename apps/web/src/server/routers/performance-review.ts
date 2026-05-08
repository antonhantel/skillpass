import { z } from "zod";
import { router, protectedProcedure, userProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

const createReviewSchema = z.object({
  company: z.string().min(1).max(200).optional(),
  reviewerRole: z.string().max(100).optional(),
  period: z.string().max(50).optional(),
  rawText: z.string().min(10).max(10000).optional(),
  fileUrl: z.string().url().optional(),
  anonymized: z.boolean().default(false),
});

export const performanceReviewRouter = router({
  list: userProcedure.query(async ({ ctx }) => {
    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: ctx.user.id },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

    return ctx.db.performanceReview.findMany({
      where: { talentProfileId: profile.id },
      orderBy: { createdAt: "desc" },
    });
  }),

  create: userProcedure
    .input(createReviewSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: ctx.user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      return ctx.db.performanceReview.create({
        data: {
          talentProfileId: profile.id,
          company: input.anonymized ? null : input.company,
          reviewerRole: input.reviewerRole,
          period: input.period,
          rawText: input.rawText,
          fileUrl: input.fileUrl,
          anonymized: input.anonymized,
          source: "SELF_UPLOAD",
        },
      });

      // TODO: Trigger NLP analysis via review-summarizer in background
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.performanceReview.findUnique({
        where: { id: input.id },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.performanceReview.delete({ where: { id: input.id } });
    }),
});

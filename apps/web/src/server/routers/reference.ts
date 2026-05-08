import { z } from "zod";
import { router, protectedProcedure, publicProcedure, userProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { requestReferenceSchema, submitReferenceSchema } from "@skillpass/shared";
import { randomBytes } from "crypto";

export const referenceRouter = router({
  /** List all references for the current user's talent profile */
  list: userProcedure.query(async ({ ctx }) => {
    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: ctx.user.id },
    });
    if (!profile) return [];

    return ctx.db.reference.findMany({
      where: { talentProfileId: profile.id },
      orderBy: { requestedAt: "desc" },
    });
  }),

  /** Create a reference request with a unique token */
  request: userProcedure
    .input(requestReferenceSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: ctx.user.id },
      });
      if (!profile) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You must have a talent profile to request references.",
        });
      }

      const token = randomBytes(32).toString("hex");
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30);

      const reference = await ctx.db.reference.create({
        data: {
          talentProfileId: profile.id,
          raterEmail: input.raterEmail,
          raterName: input.raterName,
          relationshipType: input.relationshipType,
          token,
          expiresAt,
        },
      });

      return reference;
    }),

  /** Get a reference request by token (public, for raters) */
  getByToken: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ ctx, input }) => {
      const reference = await ctx.db.reference.findUnique({
        where: { token: input.token },
        include: {
          talentProfile: {
            include: {
              user: {
                select: { name: true, avatarUrl: true },
              },
            },
          },
        },
      });

      if (!reference) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Reference request not found." });
      }

      if (reference.status !== "PENDING") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This reference has already been submitted",
        });
      }

      if (new Date() > reference.expiresAt) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This reference request has expired.",
        });
      }

      return {
        id: reference.id,
        candidateName: reference.talentProfile.user.name,
        raterName: reference.raterName,
        relationshipType: reference.relationshipType,
        relationshipDuration: reference.relationshipDuration,
      };
    }),

  /** Submit a reference by token (public, for raters) */
  submit: publicProcedure
    .input(submitReferenceSchema)
    .mutation(async ({ ctx, input }) => {
      const reference = await ctx.db.reference.findUnique({
        where: { token: input.token },
      });

      if (!reference) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Reference request not found." });
      }

      if (reference.status !== "PENDING") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This reference has already been submitted",
        });
      }

      if (reference.expiresAt && new Date() > reference.expiresAt) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This reference request has expired",
        });
      }

      // Update the reference with the submitted data
      await ctx.db.reference.update({
        where: { token: input.token },
        data: {
          status: "COMPLETED",
          completedAt: new Date(),
          dimensionScores: input.dimensionScores,
          forcedChoiceRankings: input.forcedChoiceRankings,
          freeTextResponses: input.freeTextResponses ?? {},
        },
      });

      // Update rater stats if linked
      if (reference.raterId) {
        await ctx.db.rater.update({
          where: { id: reference.raterId },
          data: { totalReferencesGiven: { increment: 1 } },
        });
      }

      return { success: true };
    }),

  /** Cancel a pending reference (talent only) */
  cancel: userProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: ctx.user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      const reference = await ctx.db.reference.findUnique({
        where: { id: input.id },
      });

      if (!reference || reference.talentProfileId !== profile.id) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      if (reference.status !== "PENDING") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Can only cancel pending references" });
      }

      return ctx.db.reference.delete({ where: { id: input.id } });
    }),

  /** Resend / regenerate token for a pending reference */
  resend: userProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: ctx.user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      const reference = await ctx.db.reference.findUnique({
        where: { id: input.id },
      });

      if (!reference || reference.talentProfileId !== profile.id) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      if (reference.status !== "PENDING") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Can only resend pending references" });
      }

      const newToken = randomBytes(32).toString("hex");
      const newExpiry = new Date();
      newExpiry.setDate(newExpiry.getDate() + 30);

      return ctx.db.reference.update({
        where: { id: input.id },
        data: { token: newToken, expiresAt: newExpiry },
        include: { rater: true },
      });
    }),
});

import { z } from "zod";
import { router, protectedProcedure, userProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { createEducationSchema, updateEducationSchema } from "@skillpass/shared";

export const educationRouter = router({
  list: userProcedure.query(async ({ ctx }) => {
    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: ctx.user.id },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

    return ctx.db.education.findMany({
      where: { talentProfileId: profile.id },
      include: { institution: true, courses: true },
      orderBy: { graduationYear: "desc" },
    });
  }),

  create: userProcedure
    .input(createEducationSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: ctx.user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      // Try to match institution
      let institutionId = input.institutionId;
      if (!institutionId) {
        const institution = await ctx.db.institution.findFirst({
          where: { name: { contains: input.institutionName, mode: "insensitive" } },
        });
        institutionId = institution?.id;
      }

      return ctx.db.education.create({
        data: {
          talentProfileId: profile.id,
          institutionId,
          institutionName: input.institutionName,
          degree: input.degree,
          major: input.major,
          minor: input.minor,
          gpaRaw: input.gpaRaw,
          gpaScale: input.gpaScale,
          startDate: input.startDate ? new Date(input.startDate) : undefined,
          graduationYear: input.graduationYear,
        },
        include: { institution: true },
      });
    }),

  update: protectedProcedure
    .input(updateEducationSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      // Verify ownership
      const existing = await ctx.db.education.findUnique({
        where: { id },
        include: { talentProfile: { select: { user: { select: { supabaseId: true } } } } },
      });
      if (!existing || existing.talentProfile.user.supabaseId !== ctx.userId) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }

      return ctx.db.education.update({
        where: { id },
        data: {
          ...data,
          startDate: data.startDate ? new Date(data.startDate) : undefined,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      // Verify ownership
      const existing = await ctx.db.education.findUnique({
        where: { id: input.id },
        include: { talentProfile: { select: { user: { select: { supabaseId: true } } } } },
      });
      if (!existing || existing.talentProfile.user.supabaseId !== ctx.userId) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }

      return ctx.db.education.delete({ where: { id: input.id } });
    }),

  searchInstitutions: protectedProcedure
    .input(z.object({ query: z.string().min(2) }))
    .query(async ({ ctx, input }) => {
      return ctx.db.institution.findMany({
        where: { name: { contains: input.query, mode: "insensitive" } },
        take: 10,
        orderBy: { rankingUsNews: "asc" },
      });
    }),
});

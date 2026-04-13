import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { updateProfileSchema, addSkillSchema } from "@skillpass/shared";

export const talentRouter = router({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: user.id },
      include: {
        education: {
          include: { institution: true, courses: true },
          orderBy: { graduationYear: "desc" },
        },
        workHistory: { orderBy: { startDate: "desc" } },
        skills: { orderBy: { name: "asc" } },
        transcripts: { orderBy: { createdAt: "desc" } },
        references: { orderBy: { requestedAt: "desc" } },
        assessments: true,
        scoreHistory: { orderBy: { recordedAt: "desc" }, take: 10 },
      },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND", message: "Talent profile not found" });
    return profile;
  }),

  updateProfile: protectedProcedure
    .input(updateProfileSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      // Check username uniqueness if changing
      if (input.username) {
        const existing = await ctx.db.talentProfile.findUnique({
          where: { username: input.username },
        });
        if (existing && existing.userId !== user.id) {
          throw new TRPCError({ code: "CONFLICT", message: "Username already taken" });
        }
      }

      return ctx.db.talentProfile.update({
        where: { userId: user.id },
        data: input,
      });
    }),

  addSkill: protectedProcedure
    .input(addSkillSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      return ctx.db.talentSkill.create({
        data: {
          talentProfileId: profile.id,
          name: input.name,
          category: input.category,
          yearsUsed: input.yearsUsed,
        },
      });
    }),

  removeSkill: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.talentSkill.delete({ where: { id: input.id } });
    }),
});

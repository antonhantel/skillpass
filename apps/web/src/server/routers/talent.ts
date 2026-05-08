import { z } from "zod";
import { router, userProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { updateProfileSchema, addSkillSchema } from "@skillpass/shared";

export const talentRouter = router({
  getProfile: userProcedure.query(async ({ ctx }) => {
    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: ctx.user.id },
      include: {
        education: {
          include: { institution: true },
          orderBy: { graduationYear: "desc" },
          take: 20,
        },
        workHistory: { orderBy: { startDate: "desc" }, take: 20 },
        skills: { orderBy: { name: "asc" }, take: 50 },
        transcripts: { orderBy: { createdAt: "desc" }, take: 10 },
        references: { orderBy: { requestedAt: "desc" }, take: 20 },
        assessments: true,
        scoreHistory: { orderBy: { recordedAt: "desc" }, take: 10 },
      },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND", message: "Talent profile not found" });
    return profile;
  }),

  updateProfile: userProcedure
    .input(updateProfileSchema)
    .mutation(async ({ ctx, input }) => {
      if (input.username) {
        const existing = await ctx.db.talentProfile.findUnique({
          where: { username: input.username },
        });
        if (existing && existing.userId !== ctx.user.id) {
          throw new TRPCError({ code: "CONFLICT", message: "Username already taken" });
        }
      }

      return ctx.db.talentProfile.update({
        where: { userId: ctx.user.id },
        data: input,
      });
    }),

  addSkill: userProcedure
    .input(addSkillSchema)
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: ctx.user.id },
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

  removeSkill: userProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.talentSkill.delete({ where: { id: input.id } });
    }),
});

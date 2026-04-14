import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { createWorkHistorySchema } from "@skillpass/shared";

export const workHistoryRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: user.id },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

    return ctx.db.workHistory.findMany({
      where: { talentProfileId: profile.id },
      orderBy: { startDate: "desc" },
    });
  }),

  create: protectedProcedure
    .input(createWorkHistorySchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      return ctx.db.workHistory.create({
        data: {
          talentProfileId: profile.id,
          company: input.company,
          title: input.title,
          startDate: new Date(input.startDate),
          endDate: input.endDate ? new Date(input.endDate) : null,
          isCurrent: input.isCurrent,
          description: input.description,
          location: input.location,
        },
      });
    }),

  update: protectedProcedure
    .input(
      createWorkHistorySchema.partial().extend({
        id: z.string().uuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      // Verify ownership
      const existing = await ctx.db.workHistory.findUnique({
        where: { id },
        include: { talentProfile: { select: { user: { select: { supabaseId: true } } } } },
      });
      if (!existing || existing.talentProfile.user.supabaseId !== ctx.userId) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }

      return ctx.db.workHistory.update({
        where: { id },
        data: {
          ...data,
          startDate: data.startDate ? new Date(data.startDate) : undefined,
          endDate: data.endDate ? new Date(data.endDate) : undefined,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      // Verify ownership
      const existing = await ctx.db.workHistory.findUnique({
        where: { id: input.id },
        include: { talentProfile: { select: { user: { select: { supabaseId: true } } } } },
      });
      if (!existing || existing.talentProfile.user.supabaseId !== ctx.userId) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }

      return ctx.db.workHistory.delete({ where: { id: input.id } });
    }),
});

import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { createClient } from "@/lib/supabase/server";

export const userRouter = router({
  // Check if platform has any admins (used by onboarding to show admin option for bootstrap)
  hasAdmin: publicProcedure.query(async ({ ctx }) => {
    const count = await ctx.db.user.count({ where: { type: "ADMIN" } });
    return count > 0;
  }),

  // Bootstrap first admin — only works when there are zero admins on the platform
  becomeFirstAdmin: protectedProcedure.mutation(async ({ ctx }) => {
    const adminCount = await ctx.db.user.count({ where: { type: "ADMIN" } });
    if (adminCount > 0) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Platform already has an admin. Ask an existing admin to promote you.",
      });
    }

    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const updated = await ctx.db.user.update({
      where: { id: user.id },
      data: { type: "ADMIN" },
    });

    await ctx.db.auditLog.create({
      data: {
        userId: user.id,
        action: "user.becomeFirstAdmin",
        resource: `user:${user.id}`,
        metadata: { email: user.email },
      },
    });

    return updated;
  }),
  me: protectedProcedure.query(async ({ ctx }) => {
    let user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
      include: {
        talentProfile: true,
        employerMember: { include: { company: true } },
      },
    });

    // Auto-create user if not found in DB
    if (!user) {
      const supabase = await createClient();
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (!authUser) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
      }

      const email = authUser.email ?? `${ctx.userId}@placeholder.local`;
      const name =
        authUser.user_metadata?.full_name ??
        authUser.user_metadata?.name ??
        email.split("@")[0] ??
        "User";
      const avatarUrl =
        authUser.user_metadata?.avatar_url ??
        authUser.user_metadata?.picture ??
        null;

      user = await ctx.db.user.create({
        data: {
          supabaseId: ctx.userId,
          email,
          name,
          avatarUrl,
        },
        include: {
          talentProfile: true,
          employerMember: { include: { company: true } },
        },
      });
    }

    return user;
  }),

  setType: protectedProcedure
    .input(z.object({ type: z.enum(["TALENT", "EMPLOYER"]) }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const updated = await ctx.db.user.update({
        where: { id: user.id },
        data: { type: input.type },
      });

      // If talent, create talent profile
      if (input.type === "TALENT") {
        const username =
          user.email.split("@")[0]?.replace(/[^a-z0-9_-]/g, "") ??
          `user-${Date.now()}`;
        await ctx.db.talentProfile.upsert({
          where: { userId: user.id },
          create: {
            userId: user.id,
            username,
          },
          update: {},
        });
      }

      return updated;
    }),
});

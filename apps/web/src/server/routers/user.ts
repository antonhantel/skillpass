import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { createClient } from "@/lib/supabase/server";

export const userRouter = router({
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

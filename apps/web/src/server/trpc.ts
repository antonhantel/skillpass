import { initTRPC, TRPCError } from "@trpc/server";
import { createClient } from "@/lib/supabase/server";
import { db } from "@skillpass/db";
import superjson from "superjson";

export const createTRPCContext = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(
    `[trpc] ctx userId=${user?.id ?? "null"} email=${user?.email ?? "null"}`
  );

  return { userId: user?.id ?? null, db };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

const enforceAuth = t.middleware(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { ...ctx, userId: ctx.userId } });
});

const enforceAuthWithUser = t.middleware(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const user = await ctx.db.user.findFirst({
    where: { supabaseId: ctx.userId },
  });
  if (!user) {
    throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
  }
  return next({ ctx: { ...ctx, userId: ctx.userId, user } });
});

export const protectedProcedure = t.procedure.use(enforceAuth);
export const userProcedure = t.procedure.use(enforceAuthWithUser);

import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

// Middleware: enforce ADMIN user type
const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  const user = await ctx.db.user.findFirst({
    where: { supabaseId: ctx.userId },
  });
  if (!user || user.type !== "ADMIN") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx: { ...ctx, adminUser: user } });
});

export const adminRouter = router({
  // ─── Platform Stats ────────────────────────────────────
  stats: adminProcedure.query(async ({ ctx }) => {
    const [
      totalUsers,
      talentUsers,
      employerUsers,
      adminUsers,
      totalCompanies,
      activeRoles,
      totalReferences,
      completedReferences,
      totalAssessments,
      totalTranscripts,
      recentSignups,
      recentAuditLogs,
    ] = await Promise.all([
      ctx.db.user.count(),
      ctx.db.user.count({ where: { type: "TALENT" } }),
      ctx.db.user.count({ where: { type: "EMPLOYER" } }),
      ctx.db.user.count({ where: { type: "ADMIN" } }),
      ctx.db.company.count(),
      ctx.db.role.count({ where: { status: "ACTIVE" } }),
      ctx.db.reference.count(),
      ctx.db.reference.count({ where: { status: "COMPLETED" } }),
      ctx.db.assessment.count(),
      ctx.db.transcript.count(),
      ctx.db.user.count({
        where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
      }),
      ctx.db.auditLog.count({
        where: { createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
      }),
    ]);

    return {
      totalUsers,
      talentUsers,
      employerUsers,
      adminUsers,
      totalCompanies,
      activeRoles,
      totalReferences,
      completedReferences,
      totalAssessments,
      totalTranscripts,
      recentSignups,
      recentAuditLogs,
    };
  }),

  // ─── Users ─────────────────────────────────────────────
  listUsers: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(25),
        type: z.enum(["TALENT", "EMPLOYER", "ADMIN"]).optional(),
        search: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input.type) where.type = input.type;
      if (input.search) {
        where.OR = [
          { name: { contains: input.search, mode: "insensitive" } },
          { email: { contains: input.search, mode: "insensitive" } },
        ];
      }

      const [users, total] = await Promise.all([
        ctx.db.user.findMany({
          where,
          include: {
            talentProfile: { select: { id: true, username: true, overallSkillScore: true } },
            employerMember: { include: { company: { select: { id: true, name: true } } } },
          },
          orderBy: { createdAt: "desc" },
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.user.count({ where }),
      ]);

      return { users, total, pages: Math.ceil(total / input.limit) };
    }),

  getUser: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: input.id },
        include: {
          talentProfile: {
            include: {
              education: true,
              workHistory: true,
              references: true,
              assessments: true,
              skills: true,
            },
          },
          employerMember: { include: { company: true } },
          auditLogs: { orderBy: { createdAt: "desc" }, take: 20 },
        },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });
      return user;
    }),

  updateUserType: adminProcedure
    .input(z.object({ id: z.string().uuid(), type: z.enum(["TALENT", "EMPLOYER", "ADMIN"]) }))
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.user.update({
        where: { id: input.id },
        data: { type: input.type },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.updateUserType",
          resource: `user:${input.id}`,
          metadata: { newType: input.type },
        },
      });

      return updated;
    }),

  deleteUser: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      if (input.id === ctx.adminUser.id) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Cannot delete yourself" });
      }

      const user = await ctx.db.user.findUnique({ where: { id: input.id } });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.deleteUser",
          resource: `user:${input.id}`,
          metadata: { email: user.email, name: user.name },
        },
      });

      await ctx.db.user.delete({ where: { id: input.id } });
      return { success: true };
    }),

  // ─── Companies ─────────────────────────────────────────
  listCompanies: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(25),
        search: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input.search) {
        where.OR = [
          { name: { contains: input.search, mode: "insensitive" } },
          { domain: { contains: input.search, mode: "insensitive" } },
        ];
      }

      const [companies, total] = await Promise.all([
        ctx.db.company.findMany({
          where,
          include: {
            members: { include: { user: { select: { name: true, email: true } } } },
            roles: { select: { id: true } },
            hires: { select: { id: true } },
          },
          orderBy: { createdAt: "desc" },
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.company.count({ where }),
      ]);

      return { companies, total, pages: Math.ceil(total / input.limit) };
    }),

  updateCompanyPlan: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        plan: z.enum(["FREE_TRIAL", "STARTER", "GROWTH", "ENTERPRISE"]),
        seatsTotal: z.number().min(1).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data: Record<string, unknown> = { plan: input.plan };
      if (input.seatsTotal) data.seatsTotal = input.seatsTotal;

      const updated = await ctx.db.company.update({
        where: { id: input.id },
        data,
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.updateCompanyPlan",
          resource: `company:${input.id}`,
          metadata: { plan: input.plan, seatsTotal: input.seatsTotal },
        },
      });

      return updated;
    }),

  // ─── Audit Logs ────────────────────────────────────────
  listAuditLogs: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(50),
        action: z.string().optional(),
        userId: z.string().uuid().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input.action) where.action = { contains: input.action, mode: "insensitive" };
      if (input.userId) where.userId = input.userId;

      const [logs, total] = await Promise.all([
        ctx.db.auditLog.findMany({
          where,
          include: { user: { select: { name: true, email: true } } },
          orderBy: { createdAt: "desc" },
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.auditLog.count({ where }),
      ]);

      return { logs, total, pages: Math.ceil(total / input.limit) };
    }),

  // ─── Talent Profiles ──────────────────────────────────
  listTalentProfiles: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(25),
        sortBy: z.enum(["score", "created", "name"]).default("created"),
      })
    )
    .query(async ({ ctx, input }) => {
      const orderBy =
        input.sortBy === "score"
          ? { overallSkillScore: "desc" as const }
          : input.sortBy === "name"
            ? { user: { name: "asc" as const } }
            : { createdAt: "desc" as const };

      const [profiles, total] = await Promise.all([
        ctx.db.talentProfile.findMany({
          include: {
            user: { select: { name: true, email: true, createdAt: true } },
            _count: {
              select: { education: true, workHistory: true, references: true, assessments: true },
            },
          },
          orderBy,
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.talentProfile.count(),
      ]);

      return { profiles, total, pages: Math.ceil(total / input.limit) };
    }),

  // ─── Quick Actions ─────────────────────────────────────
  promoteToAdmin: adminProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({ where: { email: input.email } });
      if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

      const updated = await ctx.db.user.update({
        where: { id: user.id },
        data: { type: "ADMIN" },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.promoteToAdmin",
          resource: `user:${user.id}`,
          metadata: { email: input.email },
        },
      });

      return updated;
    }),
});

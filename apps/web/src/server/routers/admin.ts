import { z } from "zod";
import { router, userProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

// Middleware: enforce ADMIN user type
const adminProcedure = userProcedure.use(async ({ ctx, next }) => {
  if (ctx.user.type !== "ADMIN") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  if (ctx.user.isBanned) {
    throw new TRPCError({ code: "FORBIDDEN", message: "Account suspended" });
  }
  return next({ ctx: { ...ctx, adminUser: ctx.user } });
});

export const adminRouter = router({
  // ─── Platform Stats ────────────────────────────────────
  stats: adminProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [userStats, otherStats] = await Promise.all([
      ctx.db.$queryRaw<[{
        total_users: bigint;
        talent_users: bigint;
        employer_users: bigint;
        admin_users: bigint;
        banned_users: bigint;
        recent_signups_day: bigint;
        recent_signups_week: bigint;
        recent_signups_month: bigint;
      }]>`
        SELECT
          COUNT(*)::bigint AS total_users,
          COUNT(*) FILTER (WHERE type = 'TALENT')::bigint AS talent_users,
          COUNT(*) FILTER (WHERE type = 'EMPLOYER')::bigint AS employer_users,
          COUNT(*) FILTER (WHERE type = 'ADMIN')::bigint AS admin_users,
          COUNT(*) FILTER (WHERE is_banned = true)::bigint AS banned_users,
          COUNT(*) FILTER (WHERE created_at >= ${dayAgo})::bigint AS recent_signups_day,
          COUNT(*) FILTER (WHERE created_at >= ${weekAgo})::bigint AS recent_signups_week,
          COUNT(*) FILTER (WHERE created_at >= ${monthAgo})::bigint AS recent_signups_month
        FROM users
      `,
      ctx.db.$queryRaw<[{
        total_companies: bigint;
        active_roles: bigint;
        total_references: bigint;
        completed_references: bigint;
        total_assessments: bigint;
        total_transcripts: bigint;
        total_institutions: bigint;
        total_raters: bigint;
        recent_audit_logs: bigint;
        total_hires: bigint;
        total_candidate_views: bigint;
      }]>`
        SELECT
          (SELECT COUNT(*)::bigint FROM companies) AS total_companies,
          (SELECT COUNT(*)::bigint FROM roles WHERE status = 'ACTIVE') AS active_roles,
          (SELECT COUNT(*)::bigint FROM "references") AS total_references,
          (SELECT COUNT(*)::bigint FROM "references" WHERE status = 'COMPLETED') AS completed_references,
          (SELECT COUNT(*)::bigint FROM assessments) AS total_assessments,
          (SELECT COUNT(*)::bigint FROM transcripts) AS total_transcripts,
          (SELECT COUNT(*)::bigint FROM institutions) AS total_institutions,
          (SELECT COUNT(*)::bigint FROM raters) AS total_raters,
          (SELECT COUNT(*)::bigint FROM audit_logs WHERE created_at >= ${dayAgo}) AS recent_audit_logs,
          (SELECT COUNT(*)::bigint FROM hires) AS total_hires,
          (SELECT COUNT(*)::bigint FROM candidate_views) AS total_candidate_views
      `,
    ]);

    const u = userStats[0];
    const o = otherStats[0];

    return {
      totalUsers: Number(u.total_users),
      talentUsers: Number(u.talent_users),
      employerUsers: Number(u.employer_users),
      adminUsers: Number(u.admin_users),
      bannedUsers: Number(u.banned_users),
      totalCompanies: Number(o.total_companies),
      activeRoles: Number(o.active_roles),
      totalReferences: Number(o.total_references),
      completedReferences: Number(o.completed_references),
      totalAssessments: Number(o.total_assessments),
      totalTranscripts: Number(o.total_transcripts),
      totalInstitutions: Number(o.total_institutions),
      totalRaters: Number(o.total_raters),
      recentSignupsDay: Number(u.recent_signups_day),
      recentSignupsWeek: Number(u.recent_signups_week),
      recentSignupsMonth: Number(u.recent_signups_month),
      recentAuditLogs: Number(o.recent_audit_logs),
      totalHires: Number(o.total_hires),
      totalCandidateViews: Number(o.total_candidate_views),
    };
  }),

  // ─── Time-series Analytics ─────────────────────────────
  signupsByDay: adminProcedure
    .input(z.object({ days: z.number().min(1).max(365).default(30) }))
    .query(async ({ ctx, input }) => {
      const start = new Date(Date.now() - input.days * 24 * 60 * 60 * 1000);
      const users = await ctx.db.user.findMany({
        where: { createdAt: { gte: start } },
        select: { createdAt: true, type: true },
      });

      // Group by day
      const buckets: Record<string, { date: string; talent: number; employer: number; admin: number; total: number }> = {};
      for (let i = 0; i <= input.days; i++) {
        const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
        const key = d.toISOString().slice(0, 10);
        buckets[key] = { date: key, talent: 0, employer: 0, admin: 0, total: 0 };
      }

      for (const u of users) {
        const key = u.createdAt.toISOString().slice(0, 10);
        if (!buckets[key]) continue;
        buckets[key].total++;
        if (u.type === "TALENT") buckets[key].talent++;
        else if (u.type === "EMPLOYER") buckets[key].employer++;
        else if (u.type === "ADMIN") buckets[key].admin++;
      }

      return Object.values(buckets).sort((a, b) => a.date.localeCompare(b.date));
    }),

  activityByDay: adminProcedure
    .input(z.object({ days: z.number().min(1).max(90).default(14) }))
    .query(async ({ ctx, input }) => {
      const start = new Date(Date.now() - input.days * 24 * 60 * 60 * 1000);
      const logs = await ctx.db.auditLog.findMany({
        where: { createdAt: { gte: start } },
        select: { createdAt: true, action: true },
      });

      const buckets: Record<string, { date: string; count: number }> = {};
      for (let i = 0; i <= input.days; i++) {
        const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
        const key = d.toISOString().slice(0, 10);
        buckets[key] = { date: key, count: 0 };
      }

      for (const l of logs) {
        const key = l.createdAt.toISOString().slice(0, 10);
        if (buckets[key]) buckets[key].count++;
      }

      return Object.values(buckets).sort((a, b) => a.date.localeCompare(b.date));
    }),

  topActions: adminProcedure
    .input(z.object({ days: z.number().min(1).max(90).default(7) }))
    .query(async ({ ctx, input }) => {
      const start = new Date(Date.now() - input.days * 24 * 60 * 60 * 1000);
      const grouped = await ctx.db.auditLog.groupBy({
        by: ["action"],
        where: { createdAt: { gte: start } },
        _count: true,
        orderBy: { _count: { action: "desc" } },
        take: 10,
      });
      return grouped.map((g) => ({ action: g.action, count: g._count }));
    }),

  // ─── Users ─────────────────────────────────────────────
  listUsers: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(25),
        type: z.enum(["TALENT", "EMPLOYER", "ADMIN"]).optional(),
        search: z.string().optional(),
        bannedOnly: z.boolean().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input.type) where.type = input.type;
      if (input.bannedOnly) where.isBanned = true;
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
              education: { include: { institution: true } },
              workHistory: { orderBy: { startDate: "desc" } },
              references: { orderBy: { requestedAt: "desc" }, take: 20 },
              assessments: true,
              skills: { take: 50 },
              scoreHistory: { orderBy: { recordedAt: "desc" }, take: 20 },
              transcripts: { take: 10 },
            },
          },
          employerMember: { include: { company: true } },
          auditLogs: { orderBy: { createdAt: "desc" }, take: 30 },
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

  banUser: adminProcedure
    .input(z.object({ id: z.string().uuid(), reason: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      if (input.id === ctx.adminUser.id) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Cannot ban yourself" });
      }

      const updated = await ctx.db.user.update({
        where: { id: input.id },
        data: {
          isBanned: true,
          bannedAt: new Date(),
          banReason: input.reason,
          bannedById: ctx.adminUser.id,
        },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.banUser",
          resource: `user:${input.id}`,
          metadata: { reason: input.reason },
        },
      });

      return updated;
    }),

  unbanUser: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.user.update({
        where: { id: input.id },
        data: {
          isBanned: false,
          bannedAt: null,
          banReason: null,
          bannedById: null,
        },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.unbanUser",
          resource: `user:${input.id}`,
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

  bulkUpdateType: adminProcedure
    .input(
      z.object({
        ids: z.array(z.string().uuid()).min(1).max(100),
        type: z.enum(["TALENT", "EMPLOYER", "ADMIN"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.user.updateMany({
        where: { id: { in: input.ids } },
        data: { type: input.type },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.bulkUpdateType",
          resource: "users",
          metadata: { count: result.count, type: input.type, ids: input.ids },
        },
      });

      return { count: result.count };
    }),

  exportUsersCsv: adminProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        name: true,
        type: true,
        isBanned: true,
        createdAt: true,
      },
    });

    const header = "id,email,name,type,isBanned,createdAt";
    const rows = users.map(
      (u) =>
        [
          u.id,
          `"${u.email.replace(/"/g, '""')}"`,
          `"${u.name.replace(/"/g, '""')}"`,
          u.type ?? "",
          u.isBanned,
          u.createdAt.toISOString(),
        ].join(",")
    );

    return [header, ...rows].join("\n");
  }),

  // ─── Companies ─────────────────────────────────────────
  listCompanies: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(25),
        search: z.string().optional(),
        plan: z.enum(["FREE_TRIAL", "STARTER", "GROWTH", "ENTERPRISE"]).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input.plan) where.plan = input.plan;
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

  getCompany: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const company = await ctx.db.company.findUnique({
        where: { id: input.id },
        include: {
          members: {
            include: { user: { select: { id: true, name: true, email: true, type: true } } },
          },
          roles: { orderBy: { createdAt: "desc" } },
          hires: {
            include: {
              talentProfile: {
                include: { user: { select: { name: true, email: true } } },
              },
              role: { select: { title: true } },
            },
            orderBy: { hiredAt: "desc" },
            take: 20,
          },
          candidateViews: {
            orderBy: { viewedAt: "desc" },
            take: 20,
            include: {
              talentProfile: {
                include: { user: { select: { name: true } } },
              },
            },
          },
        },
      });
      if (!company) throw new TRPCError({ code: "NOT_FOUND" });
      return company;
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

  verifyCompanyDomain: adminProcedure
    .input(z.object({ id: z.string().uuid(), verified: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.company.update({
        where: { id: input.id },
        data: { domainVerified: input.verified },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.verifyCompanyDomain",
          resource: `company:${input.id}`,
          metadata: { verified: input.verified },
        },
      });

      return updated;
    }),

  deleteCompany: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const company = await ctx.db.company.findUnique({ where: { id: input.id } });
      if (!company) throw new TRPCError({ code: "NOT_FOUND" });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.deleteCompany",
          resource: `company:${input.id}`,
          metadata: { name: company.name, domain: company.domain },
        },
      });

      await ctx.db.company.delete({ where: { id: input.id } });
      return { success: true };
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

  recentActivity: adminProcedure
    .input(z.object({ limit: z.number().min(1).max(50).default(15) }))
    .query(async ({ ctx, input }) => {
      return ctx.db.auditLog.findMany({
        include: { user: { select: { name: true, email: true } } },
        orderBy: { createdAt: "desc" },
        take: input.limit,
      });
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
            user: { select: { id: true, name: true, email: true, createdAt: true, isBanned: true } },
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

  overrideSkillScore: adminProcedure
    .input(
      z.object({
        talentProfileId: z.string().uuid(),
        overallSkillScore: z.number().min(0).max(100).nullable(),
        scoreConfidence: z.number().min(0).max(1).nullable().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.talentProfile.update({
        where: { id: input.talentProfileId },
        data: {
          overallSkillScore: input.overallSkillScore,
          scoreConfidence: input.scoreConfidence,
          scoreUpdatedAt: new Date(),
        },
      });

      await ctx.db.scoreHistory.create({
        data: {
          talentProfileId: input.talentProfileId,
          overallScore: input.overallSkillScore ?? 0,
          confidence: input.scoreConfidence,
          triggerEvent: "admin_override",
        },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.overrideSkillScore",
          resource: `talentProfile:${input.talentProfileId}`,
          metadata: { score: input.overallSkillScore, confidence: input.scoreConfidence },
        },
      });

      return updated;
    }),

  // ─── Institutions ──────────────────────────────────────
  listInstitutions: adminProcedure
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
        where.name = { contains: input.search, mode: "insensitive" };
      }

      const [institutions, total] = await Promise.all([
        ctx.db.institution.findMany({
          where,
          include: { _count: { select: { education: true, departments: true } } },
          orderBy: { rankingUsNews: "asc" },
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.institution.count({ where }),
      ]);

      return { institutions, total, pages: Math.ceil(total / input.limit) };
    }),

  createInstitution: adminProcedure
    .input(
      z.object({
        name: z.string().min(1),
        country: z.string().min(1),
        stateOrProvince: z.string().optional(),
        tierScore: z.number().min(0).max(10).optional(),
        rankingUsNews: z.number().int().optional(),
        rankingQs: z.number().int().optional(),
        acceptanceRate: z.number().min(0).max(1).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const institution = await ctx.db.institution.create({ data: input });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.createInstitution",
          resource: `institution:${institution.id}`,
          metadata: { name: input.name },
        },
      });

      return institution;
    }),

  updateInstitution: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        name: z.string().min(1).optional(),
        country: z.string().min(1).optional(),
        stateOrProvince: z.string().nullable().optional(),
        tierScore: z.number().min(0).max(10).nullable().optional(),
        rankingUsNews: z.number().int().nullable().optional(),
        rankingQs: z.number().int().nullable().optional(),
        acceptanceRate: z.number().min(0).max(1).nullable().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const updated = await ctx.db.institution.update({
        where: { id },
        data,
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.updateInstitution",
          resource: `institution:${id}`,
        },
      });

      return updated;
    }),

  deleteInstitution: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const inst = await ctx.db.institution.findUnique({ where: { id: input.id } });
      if (!inst) throw new TRPCError({ code: "NOT_FOUND" });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.deleteInstitution",
          resource: `institution:${input.id}`,
          metadata: { name: inst.name },
        },
      });

      await ctx.db.institution.delete({ where: { id: input.id } });
      return { success: true };
    }),

  // ─── Raters ────────────────────────────────────────────
  listRaters: adminProcedure
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
          { email: { contains: input.search, mode: "insensitive" } },
          { company: { contains: input.search, mode: "insensitive" } },
        ];
      }

      const [raters, total] = await Promise.all([
        ctx.db.rater.findMany({
          where,
          include: { _count: { select: { references: true } } },
          orderBy: { createdAt: "desc" },
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.rater.count({ where }),
      ]);

      return { raters, total, pages: Math.ceil(total / input.limit) };
    }),

  updateRaterVerification: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        status: z.enum(["UNVERIFIED", "PENDING", "VERIFIED", "REJECTED"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.rater.update({
        where: { id: input.id },
        data: { verificationStatus: input.status },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.updateRaterVerification",
          resource: `rater:${input.id}`,
          metadata: { status: input.status },
        },
      });

      return updated;
    }),

  // ─── Platform Settings ────────────────────────────────
  getSettings: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.platformSetting.findMany({ orderBy: { key: "asc" } });
  }),

  setSetting: adminProcedure
    .input(z.object({ key: z.string().min(1), value: z.unknown() }))
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.platformSetting.upsert({
        where: { key: input.key },
        create: {
          key: input.key,
          value: input.value as never,
          updatedBy: ctx.adminUser.id,
        },
        update: {
          value: input.value as never,
          updatedBy: ctx.adminUser.id,
        },
      });

      await ctx.db.auditLog.create({
        data: {
          userId: ctx.adminUser.id,
          action: "admin.setSetting",
          resource: `setting:${input.key}`,
          metadata: { value: input.value as never },
        },
      });

      return updated;
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

import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

const createCompanySchema = z.object({
  name: z.string().min(1).max(200),
  domain: z.string().min(3).max(100),
});

const createRoleSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  weightConfig: z.object({
    academic: z.number().min(0).max(1),
    performance: z.number().min(0).max(1),
    peerSignal: z.number().min(0).max(1),
    assessedAbility: z.number().min(0).max(1),
  }),
  autoQualifyThreshold: z.number().min(300).max(850).optional(),
  preferredLocation: z.string().optional(),
  experienceMin: z.number().int().min(0).optional(),
  experienceMax: z.number().int().min(0).optional(),
});

const searchCandidatesSchema = z.object({
  minScore: z.number().min(300).max(850).optional(),
  maxScore: z.number().min(300).max(850).optional(),
  location: z.string().optional(),
  minExperience: z.number().int().min(0).optional(),
  maxExperience: z.number().int().optional(),
  skills: z.array(z.string()).optional(),
  limit: z.number().int().min(1).max(100).default(20),
  offset: z.number().int().min(0).default(0),
});

export const employerRouter = router({
  // Get the current user's company info
  getCompany: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const member = await ctx.db.employerMember.findUnique({
      where: { userId: user.id },
      include: {
        company: {
          include: {
            members: { include: { user: { select: { name: true, email: true } } } },
            roles: { where: { status: "ACTIVE" }, orderBy: { createdAt: "desc" } },
            _count: { select: { candidateViews: true, hires: true } },
          },
        },
      },
    });

    if (!member) {
      return null; // Company not set up yet
    }

    return member.company;
  }),

  // Create a company (during employer onboarding)
  createCompany: protectedProcedure
    .input(createCompanySchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      // Check if user already has a company
      const existing = await ctx.db.employerMember.findUnique({
        where: { userId: user.id },
      });
      if (existing) {
        throw new TRPCError({ code: "CONFLICT", message: "You already belong to a company" });
      }

      // Check domain uniqueness
      const domainTaken = await ctx.db.company.findUnique({
        where: { domain: input.domain },
      });
      if (domainTaken) {
        throw new TRPCError({ code: "CONFLICT", message: "A company with this domain already exists" });
      }

      const trialEnd = new Date();
      trialEnd.setDate(trialEnd.getDate() + 30);

      const company = await ctx.db.company.create({
        data: {
          name: input.name,
          domain: input.domain,
          trialEndsAt: trialEnd,
          members: {
            create: {
              userId: user.id,
              role: "admin",
              joinedAt: new Date(),
            },
          },
        },
        include: { members: true },
      });

      return company;
    }),

  // Search candidates
  searchCandidates: protectedProcedure
    .input(searchCandidatesSchema)
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const member = await ctx.db.employerMember.findUnique({
        where: { userId: user.id },
      });
      if (!member) {
        throw new TRPCError({ code: "FORBIDDEN", message: "No company associated" });
      }

      const where: Record<string, unknown> = {
        isPublic: true,
        overallSkillScore: { not: null },
      };

      if (input.minScore || input.maxScore) {
        where.overallSkillScore = {
          ...(input.minScore && { gte: input.minScore }),
          ...(input.maxScore && { lte: input.maxScore }),
        };
      }

      if (input.location) {
        where.location = { contains: input.location, mode: "insensitive" };
      }

      if (input.minExperience != null || input.maxExperience != null) {
        where.yearsExperience = {
          ...(input.minExperience != null && { gte: input.minExperience }),
          ...(input.maxExperience != null && { lte: input.maxExperience }),
        };
      }

      const [candidates, total] = await Promise.all([
        ctx.db.talentProfile.findMany({
          where,
          include: {
            user: { select: { name: true, avatarUrl: true } },
            skills: { orderBy: { name: "asc" } },
            education: {
              include: { institution: true },
              orderBy: { graduationYear: "desc" },
              take: 1,
            },
            workHistory: { orderBy: { startDate: "desc" }, take: 1 },
          },
          orderBy: { overallSkillScore: "desc" },
          take: input.limit,
          skip: input.offset,
        }),
        ctx.db.talentProfile.count({ where }),
      ]);

      // Filter by skills if specified (post-filter since it's a relation)
      let results = candidates;
      if (input.skills && input.skills.length > 0) {
        const lowerSkills = input.skills.map((s) => s.toLowerCase());
        results = candidates.filter((c) =>
          c.skills.some((s) => lowerSkills.includes(s.name.toLowerCase()))
        );
      }

      return { candidates: results, total };
    }),

  // View a candidate profile (records the view)
  viewCandidate: protectedProcedure
    .input(z.object({ talentProfileId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const member = await ctx.db.employerMember.findUnique({
        where: { userId: user.id },
      });
      if (!member) throw new TRPCError({ code: "FORBIDDEN" });

      await ctx.db.candidateView.upsert({
        where: {
          companyId_talentProfileId: {
            companyId: member.companyId,
            talentProfileId: input.talentProfileId,
          },
        },
        create: {
          companyId: member.companyId,
          talentProfileId: input.talentProfileId,
        },
        update: {
          viewedAt: new Date(),
        },
      });

      return { success: true };
    }),

  // Shortlist / un-shortlist a candidate
  toggleShortlist: protectedProcedure
    .input(z.object({ talentProfileId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const member = await ctx.db.employerMember.findUnique({
        where: { userId: user.id },
      });
      if (!member) throw new TRPCError({ code: "FORBIDDEN" });

      const existing = await ctx.db.candidateView.findUnique({
        where: {
          companyId_talentProfileId: {
            companyId: member.companyId,
            talentProfileId: input.talentProfileId,
          },
        },
      });

      if (existing) {
        await ctx.db.candidateView.update({
          where: { id: existing.id },
          data: { shortlisted: !existing.shortlisted },
        });
        return { shortlisted: !existing.shortlisted };
      }

      await ctx.db.candidateView.create({
        data: {
          companyId: member.companyId,
          talentProfileId: input.talentProfileId,
          shortlisted: true,
        },
      });
      return { shortlisted: true };
    }),

  // Get shortlisted candidates
  getShortlist: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const member = await ctx.db.employerMember.findUnique({
      where: { userId: user.id },
    });
    if (!member) throw new TRPCError({ code: "FORBIDDEN" });

    return ctx.db.candidateView.findMany({
      where: { companyId: member.companyId, shortlisted: true },
      include: {
        talentProfile: {
          include: {
            user: { select: { name: true, avatarUrl: true } },
            skills: true,
          },
        },
      },
      orderBy: { viewedAt: "desc" },
    });
  }),

  // CRUD for roles
  createRole: protectedProcedure
    .input(createRoleSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const member = await ctx.db.employerMember.findUnique({
        where: { userId: user.id },
      });
      if (!member) throw new TRPCError({ code: "FORBIDDEN" });

      return ctx.db.role.create({
        data: {
          companyId: member.companyId,
          title: input.title,
          description: input.description,
          weightConfig: input.weightConfig,
          autoQualifyThreshold: input.autoQualifyThreshold,
          preferredLocation: input.preferredLocation,
          experienceMin: input.experienceMin,
          experienceMax: input.experienceMax,
        },
      });
    }),

  listRoles: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const member = await ctx.db.employerMember.findUnique({
      where: { userId: user.id },
    });
    if (!member) return []; // No company yet — return empty array gracefully

    return ctx.db.role.findMany({
      where: { companyId: member.companyId },
      orderBy: { createdAt: "desc" },
    });
  }),

  // Dashboard stats
  getStats: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const member = await ctx.db.employerMember.findUnique({
      where: { userId: user.id },
    });
    if (!member) return null;

    const [candidatesViewed, shortlisted, activeRoles, hires] = await Promise.all([
      ctx.db.candidateView.count({ where: { companyId: member.companyId } }),
      ctx.db.candidateView.count({ where: { companyId: member.companyId, shortlisted: true } }),
      ctx.db.role.count({ where: { companyId: member.companyId, status: "ACTIVE" } }),
      ctx.db.hire.count({ where: { companyId: member.companyId } }),
    ]);

    return { candidatesViewed, shortlisted, activeRoles, hires };
  }),
});

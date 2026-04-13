import { z } from "zod";
import { router, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const transcriptRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { supabaseId: ctx.userId },
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });

    const profile = await ctx.db.talentProfile.findUnique({
      where: { userId: user.id },
    });
    if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

    return ctx.db.transcript.findMany({
      where: { talentProfileId: profile.id },
      orderBy: { createdAt: "desc" },
    });
  }),

  get: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.transcript.findUnique({ where: { id: input.id } });
    }),

  create: protectedProcedure
    .input(
      z.object({
        fileUrl: z.string().url(),
        fileName: z.string(),
        fileType: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { supabaseId: ctx.userId },
      });
      if (!user) throw new TRPCError({ code: "NOT_FOUND" });

      const profile = await ctx.db.talentProfile.findUnique({
        where: { userId: user.id },
      });
      if (!profile) throw new TRPCError({ code: "NOT_FOUND" });

      return ctx.db.transcript.create({
        data: {
          talentProfileId: profile.id,
          fileUrl: input.fileUrl,
          fileName: input.fileName,
          fileType: input.fileType,
          status: "UPLOADED",
        },
      });
    }),

  // After OCR processes the transcript, user confirms/edits parsed courses
  confirmCourses: protectedProcedure
    .input(
      z.object({
        transcriptId: z.string().uuid(),
        educationId: z.string().uuid(),
        courses: z.array(
          z.object({
            courseCode: z.string().nullable(),
            courseName: z.string(),
            grade: z.string().nullable(),
            gradeNumeric: z.number().nullable(),
            credits: z.number().nullable(),
            semester: z.string().nullable(),
            rigorScore: z.number().nullable(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Delete existing courses for this education and recreate
      await ctx.db.course.deleteMany({
        where: { educationId: input.educationId },
      });

      const courses = await ctx.db.course.createMany({
        data: input.courses.map((c) => ({
          educationId: input.educationId,
          courseCode: c.courseCode,
          courseName: c.courseName,
          grade: c.grade,
          gradeNumeric: c.gradeNumeric,
          credits: c.credits,
          semester: c.semester,
          rigorScore: c.rigorScore,
        })),
      });

      // Update transcript status
      await ctx.db.transcript.update({
        where: { id: input.transcriptId },
        data: { status: "VERIFIED" },
      });

      return courses;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.transcript.delete({ where: { id: input.id } });
    }),
});

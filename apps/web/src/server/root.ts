import { router } from "./trpc";
import { userRouter } from "./routers/user";
import { talentRouter } from "./routers/talent";
import { educationRouter } from "./routers/education";
import { workHistoryRouter } from "./routers/work-history";
import { transcriptRouter } from "./routers/transcript";
import { referenceRouter } from "./routers/reference";
import { performanceReviewRouter } from "./routers/performance-review";
import { scoreRouter } from "./routers/score";
import { employerRouter } from "./routers/employer";

export const appRouter = router({
  user: userRouter,
  talent: talentRouter,
  education: educationRouter,
  workHistory: workHistoryRouter,
  transcript: transcriptRouter,
  reference: referenceRouter,
  performanceReview: performanceReviewRouter,
  score: scoreRouter,
  employer: employerRouter,
});

export type AppRouter = typeof appRouter;

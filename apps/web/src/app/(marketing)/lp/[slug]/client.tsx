"use client";

import {
  LPNavbar,
  LPHero,
  LPProblem,
  LPSolution,
  LPProof,
  LPHowItWorks,
  LPComparison,
  LPFAQ,
  LPCTA,
  LPFooter,
} from "@/components/landing";
import type { LandingPage } from "@/data/landing-pages/types";

export function LandingPageClient({ page }: { page: LandingPage }) {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <LPNavbar />
      <main>
        <LPHero data={page.hero} />
        <LPProblem data={page.problem} />
        {page.howItWorks && <LPHowItWorks data={page.howItWorks} />}
        <LPSolution data={page.solution} />
        {page.comparison && <LPComparison data={page.comparison} />}
        <LPProof data={page.proof} />
        {page.faq && <LPFAQ items={page.faq} />}
        <LPCTA data={page.cta} />
      </main>
      <LPFooter />
    </div>
  );
}

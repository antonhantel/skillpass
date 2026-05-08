export interface LandingPage {
  slug: string;
  category: string;
  audience: "talent" | "employer" | "academic" | "all";
  funnel: "tofu" | "mofu" | "bofu";
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge?: string;
    headline: string;
    gradientText: string;
    subheadline: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    trustLine?: string;
  };
  problem: {
    badge?: string;
    headline: string;
    gradientText?: string;
    description: string;
    stats: ProblemStat[];
  };
  solution: {
    badge?: string;
    headline: string;
    gradientText?: string;
    description: string;
    features: Feature[];
  };
  proof: {
    headline?: string;
    testimonial: Testimonial;
    stats?: ProofStat[];
  };
  cta: {
    headline: string;
    gradientText?: string;
    description: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };
  comparison?: ComparisonSection;
  howItWorks?: HowItWorksSection;
  faq?: FAQItem[];
}

export interface CTA {
  text: string;
  href: string;
}

export interface ProblemStat {
  value: string;
  label: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  detail: string;
}

export interface ProofStat {
  value: string;
  label: string;
}

export interface ComparisonSection {
  headline: string;
  competitor: string;
  rows: ComparisonRow[];
}

export interface ComparisonRow {
  feature: string;
  us: string;
  them: string;
}

export interface HowItWorksSection {
  headline: string;
  steps: HowItWorksStep[];
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

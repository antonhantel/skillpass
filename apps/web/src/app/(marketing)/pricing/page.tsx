"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";

/* ─── Fade-in wrapper ─────────────────────────────────────────── */
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Tier data ───────────────────────────────────────────────── */
const tiers = [
  {
    name: "Starter",
    price: "$299",
    period: "mo",
    description: "For small teams making 1-5 hires per month.",
    features: [
      "Up to 50 candidate views/mo",
      "Basic search & filters",
      "Side-by-side comparison (2 candidates)",
      "SkillScore visibility",
      "Email support",
    ],
    cta: "Start Free Pilot",
    popular: false,
  },
  {
    name: "Growth",
    price: "$799",
    period: "mo",
    description: "For growing teams that hire consistently.",
    features: [
      "Unlimited candidate views",
      "Advanced search & custom role weights",
      "Side-by-side comparison (4 candidates)",
      "Full sub-score breakdown",
      "ATS integrations (Greenhouse, Lever, Workday)",
      "Diversity analytics dashboard",
      "Skip-to-final-round badge",
      "Priority support",
    ],
    cta: "Start Free Pilot",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: undefined,
    description: "For large organizations with complex hiring needs.",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom API access",
      "SSO / SAML authentication",
      "SLA guarantee (99.9% uptime)",
      "On-premise deployment option",
      "Custom contract & invoicing",
      "Onboarding & training sessions",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

/* ─── Comparison table data ───────────────────────────────────── */
type FeatureValue = boolean | string;
interface ComparisonRow {
  feature: string;
  starter: FeatureValue;
  growth: FeatureValue;
  enterprise: FeatureValue;
}

const comparison: ComparisonRow[] = [
  { feature: "Candidate views / month", starter: "50", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Search & filters", starter: "Basic", growth: "Advanced", enterprise: "Advanced + API" },
  { feature: "Side-by-side comparison", starter: "2 candidates", growth: "4 candidates", enterprise: "Unlimited" },
  { feature: "SkillScore visibility", starter: true, growth: true, enterprise: true },
  { feature: "Sub-score breakdown", starter: false, growth: true, enterprise: true },
  { feature: "Custom role weights", starter: false, growth: true, enterprise: true },
  { feature: "ATS integrations", starter: false, growth: true, enterprise: true },
  { feature: "Diversity analytics", starter: false, growth: true, enterprise: true },
  { feature: "Skip-to-final-round badge", starter: false, growth: true, enterprise: true },
  { feature: "API access", starter: false, growth: false, enterprise: true },
  { feature: "SSO / SAML", starter: false, growth: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated account manager", starter: false, growth: false, enterprise: true },
  { feature: "Support", starter: "Email", growth: "Priority", enterprise: "Dedicated" },
];

function CellValue({ value }: { value: FeatureValue }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  return <span className="text-sm">{value}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-primary">
            SkillPass
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              For Talent
            </Link>
            <Link
              href="/employers"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              For Employers
            </Link>
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Free for candidates, always
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Serious results.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Candidates build profiles for free. Employers pay only when they are
            ready to search, filter, and hire the best talent.
          </motion.p>
        </div>
      </section>

      {/* ── Free for Candidates Banner ──────────────────────── */}
      <section className="border-y bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Always free for candidates</p>
                  <p className="text-sm text-muted-foreground">
                    Build your profile, get your SkillScore, and share it with
                    employers — no cost, ever.
                  </p>
                </div>
              </div>
              <Link href="/sign-up">
                <Button variant="outline" size="sm">
                  Create Free Profile
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Pricing Cards ───────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-lg",
                    tier.popular &&
                      "border-primary shadow-md ring-1 ring-primary"
                  )}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}

                  <h3 className="text-xl font-semibold">{tier.name}</h3>

                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground">
                        /{tier.period}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {tier.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/sign-up" className="mt-8 block">
                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              All employer plans include a 30-day free pilot. No credit card
              required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Feature Comparison Table ────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold">
              Compare plans in detail
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Find the plan that fits your hiring volume and feature needs.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-4 pr-4 text-sm font-medium text-muted-foreground">
                      Feature
                    </th>
                    <th className="pb-4 text-center text-sm font-medium">
                      Starter
                    </th>
                    <th className="pb-4 text-center text-sm font-medium">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                        Growth
                      </span>
                    </th>
                    <th className="pb-4 text-center text-sm font-medium">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        "border-b transition-colors hover:bg-muted/50",
                        i % 2 === 0 && "bg-muted/20"
                      )}
                    >
                      <td className="py-3.5 pr-4 text-sm">{row.feature}</td>
                      <td className="py-3.5 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="py-3.5 text-center">
                        <CellValue value={row.growth} />
                      </td>
                      <td className="py-3.5 text-center">
                        <CellValue value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold">
              Frequently asked questions
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-6">
            {[
              {
                q: "Is SkillPass really free for candidates?",
                a: "Yes, always. Candidates can create profiles, collect references, take assessments, and share their SkillScore at no cost. We make money from employers who use the platform to search and evaluate talent.",
              },
              {
                q: "What's included in the free pilot?",
                a: "Every employer plan comes with a 30-day free pilot: full platform access, up to 5 hires, no credit card required. You'll see the ROI before you pay a cent.",
              },
              {
                q: "Can I switch plans later?",
                a: "Absolutely. Upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Do you offer annual billing?",
                a: "Yes. Annual plans come with a 20% discount. Contact our sales team for details.",
              },
              {
                q: "What ATS integrations do you support?",
                a: "Growth and Enterprise plans integrate with Greenhouse, Lever, Workday, Ashby, and more. Enterprise customers also get full API access for custom integrations.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-xl border p-6">
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 py-20 text-white">
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to transform your hiring?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Start your free pilot today. 30 days, 5 hires, no credit card.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-10 text-base"
                >
                  Start Free Pilot <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/employers">
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SkillPass. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

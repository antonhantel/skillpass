"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Zap,
  BarChart3,
  Clock,
  DollarSign,
  Users,
  GitCompare,
  Cable,
  ShieldCheck,
  Star,
  Check,
  Minus,
  Plus,
} from "lucide-react";

/* ─── Animated counter hook ───────────────────────────────────── */
function useAnimatedCounter(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView || !inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, end, duration, startOnView]);

  return { count, ref };
}

/* ─── Fade-in wrapper ─────────────────────────────────────────── */
function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ROI Calculator ──────────────────────────────────────────── */
function ROICalculator() {
  const [monthlyHires, setMonthlyHires] = useState(10);
  const [costPerHire, setCostPerHire] = useState(15000);

  const currentAnnualCost = monthlyHires * 12 * costPerHire;
  const skillPassSavings = 0.4;
  const projectedSavings = Math.round(currentAnnualCost * skillPassSavings);
  const timeReduction = 60;
  const newCostPerHire = Math.round(costPerHire * (1 - skillPassSavings));

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-xl md:p-10">
      {/* Glass glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <h3 className="text-center text-2xl font-bold">ROI Calculator</h3>
      <p className="mt-2 text-center text-muted-foreground">
        See how much SkillPass saves your team
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Monthly Hires</label>
              <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {monthlyHires}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => setMonthlyHires(Math.max(1, monthlyHires - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-muted"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="range"
                min={1}
                max={100}
                value={monthlyHires}
                onChange={(e) => setMonthlyHires(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
              />
              <button
                onClick={() => setMonthlyHires(Math.min(100, monthlyHires + 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-muted"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Cost per Hire</label>
              <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                ${costPerHire.toLocaleString()}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => setCostPerHire(Math.max(1000, costPerHire - 1000))}
                className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-muted"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={costPerHire}
                onChange={(e) => setCostPerHire(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
              />
              <button
                onClick={() => setCostPerHire(Math.min(50000, costPerHire + 1000))}
                className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-muted"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/50">
            <p className="text-sm text-green-700 dark:text-green-300">
              Projected Annual Savings
            </p>
            <p className="mt-1 text-3xl font-bold text-green-700 dark:text-green-300">
              ${projectedSavings.toLocaleString()}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border p-4">
              <p className="text-xs text-muted-foreground">New Cost / Hire</p>
              <p className="mt-1 text-xl font-bold">
                ${newCostPerHire.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-xs text-muted-foreground">Time Saved</p>
              <p className="mt-1 text-xl font-bold">{timeReduction}%</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Based on average SkillPass customer data. Actual results may vary.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Stat Card ───────────────────────────────────────────────── */
function StatCard({
  value,
  suffix,
  prefix,
  label,
  icon: Icon,
  delay,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}) {
  const { count, ref } = useAnimatedCounter(value, 2000);
  return (
    <FadeIn delay={delay}>
      <div ref={ref} className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div className="mt-4 text-5xl font-bold tracking-tight">
          {prefix}
          {count}
          {suffix}
        </div>
        <div className="mt-2 text-muted-foreground">{label}</div>
      </div>
    </FadeIn>
  );
}

/* ─── Feature Bento Item ──────────────────────────────────────── */
function BentoCard({
  title,
  description,
  icon: Icon,
  className,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay} className={className}>
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
      >
        <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mt-4 font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>
    </FadeIn>
  );
}

/* ─── Pricing Tier Card ───────────────────────────────────────── */
function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
  delay,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative flex flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-lg",
          popular && "border-primary shadow-md ring-1 ring-primary"
        )}
      >
        {popular && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
        )}
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && (
            <span className="text-muted-foreground">/{period}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <Link href="/sign-up" className="mt-8 block">
          <Button
            className="w-full"
            variant={popular ? "default" : "outline"}
            size="lg"
          >
            {cta}
          </Button>
        </Link>
      </motion.div>
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function EmployersPage() {
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
              href="/pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Start Free Pilot</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              Trusted by 200+ hiring teams
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            Stop screening.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Start hiring.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            SkillPass gives you pre-vetted candidates with verified credentials,
            calibrated references, and standardized assessments. Skip the first
            three rounds. Hire better, faster, cheaper.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/sign-up">
              <Button size="lg" className="px-8 text-base">
                Start Free Pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            30 days free &middot; 5 hires &middot; No credit card required
          </motion.p>
        </div>
      </section>

      {/* ── ROI Calculator ──────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <FadeIn>
            <ROICalculator />
          </FadeIn>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Three steps to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                better hires
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Replace your entire top-of-funnel with pre-vetted, score-ranked
              candidates.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Search,
                step: "01",
                title: "Search",
                body: "Search pre-vetted candidates by SkillScore, domain, location, experience level, and specific sub-scores.",
              },
              {
                icon: SlidersHorizontal,
                step: "02",
                title: "Filter & Rank",
                body: "Define what matters for your role. Weight coding 40%, references 30%, academics 30%. Candidates auto-rank to your spec.",
              },
              {
                icon: Zap,
                step: "03",
                title: "Skip to Final Round",
                body: "Candidates above your threshold auto-qualify for final interviews. No more redundant phone screens or take-homes.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm"
                >
                  <span className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
                    {item.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              The numbers speak
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            <StatCard
              value={60}
              suffix="%"
              label="Faster time-to-hire"
              icon={Clock}
              delay={0}
            />
            <StatCard
              value={12}
              prefix="$"
              suffix="k"
              label="Average savings per hire"
              icon={DollarSign}
              delay={0.15}
            />
            <StatCard
              value={3}
              suffix="x"
              label="Better quality-of-hire"
              icon={BarChart3}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── Features Bento Grid ─────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                hire smarter
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              A complete toolkit that replaces your top-of-funnel screening stack.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <BentoCard
              icon={Search}
              title="Candidate Search"
              description="Full-text search across thousands of verified profiles. Filter by score, domain, location, experience, and education."
              delay={0}
            />
            <BentoCard
              icon={SlidersHorizontal}
              title="Custom Role Weights"
              description="Define exactly what matters for each role. Weight sub-scores to auto-rank candidates to your specifications."
              delay={0.08}
            />
            <BentoCard
              icon={GitCompare}
              title="Side-by-Side Comparison"
              description="Compare up to four candidates across every dimension. Visualize score breakdowns in radar charts."
              delay={0.16}
            />
            <BentoCard
              icon={Cable}
              title="ATS Integration"
              description="One-click export to Greenhouse, Lever, Workday, and more. Or use our API for custom integrations."
              delay={0.24}
            />
            <BentoCard
              icon={Users}
              title="Diversity Analytics"
              description="Track pipeline diversity metrics in real time. Build inclusive shortlists without compromising on quality."
              delay={0.32}
            />
            <BentoCard
              icon={ShieldCheck}
              title="Skip-to-Final-Round Badge"
              description="Set your own threshold. Candidates above it auto-qualify for final interviews — no phone screens required."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ─────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Start free, scale when you are ready. No hidden fees.
            </p>
          </FadeIn>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            <PricingCard
              name="Starter"
              price="$299"
              period="mo"
              description="For small teams making 1-5 hires/month."
              features={[
                "Up to 50 candidate views/mo",
                "Basic search & filters",
                "Side-by-side comparison",
                "Email support",
              ]}
              cta="Start Free Pilot"
              delay={0}
            />
            <PricingCard
              name="Growth"
              price="$799"
              period="mo"
              description="For growing teams that hire consistently."
              features={[
                "Unlimited candidate views",
                "Custom role weights",
                "ATS integrations",
                "Diversity analytics",
                "Priority support",
                "Skip-to-final-round badge",
              ]}
              cta="Start Free Pilot"
              popular
              delay={0.1}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large organizations with complex needs."
              features={[
                "Everything in Growth",
                "Dedicated account manager",
                "Custom API access",
                "SSO / SAML",
                "SLA guarantee",
                "On-premise option",
              ]}
              cta="Contact Sales"
              delay={0.2}
            />
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              All plans include a 30-day free pilot. No credit card required.{" "}
              <Link
                href="/pricing"
                className="text-primary underline-offset-4 hover:underline"
              >
                View full comparison &rarr;
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Social Proof ────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl border bg-card p-10 shadow-sm md:p-14">
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="mt-6 text-center text-lg font-medium leading-relaxed md:text-xl">
                &ldquo;We cut our screening time by 70% and made three
                exceptional hires in the first month. SkillPass is the most
                impactful recruiting tool we have adopted in years.&rdquo;
              </blockquote>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                VP of Engineering &mdash; Series B SaaS Company
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 py-20 text-white">
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold md:text-5xl">
              Start Your Free Pilot
            </h2>
            <p className="mt-6 text-lg text-white/80">
              30 days. 5 hires. Full platform access. No credit card.
            </p>
            <Link href="/sign-up">
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 px-10 text-base"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Set up takes under 5 minutes. Cancel anytime.
            </p>
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

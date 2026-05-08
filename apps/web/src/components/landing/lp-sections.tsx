"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Star,
  ChevronDown,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type {
  LandingPage,
  ComparisonSection,
  HowItWorksSection,
  FAQItem,
} from "@/data/landing-pages/types";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.section>
  );
}

/* ─── HERO ─── */
export function LPHero({ data }: { data: LandingPage["hero"] }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(221.2 83.2% 53.3% / 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
        {data.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm font-medium border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300"
            >
              {data.badge}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          {data.headline}{" "}
          <span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            style={{ animation: "gradient-shift 3s ease-in-out infinite" }}
          >
            {data.gradientText}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {data.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link href={data.primaryCta.href}>
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              {data.primaryCta.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          {data.secondaryCta && (
            <Link href={data.secondaryCta.href}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base border-border/60 hover:bg-accent/50"
              >
                {data.secondaryCta.text}
              </Button>
            </Link>
          )}
        </motion.div>

        {data.trustLine && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-6 text-xs text-muted-foreground/60 flex items-center gap-1.5 justify-center"
          >
            <Shield className="h-3.5 w-3.5" />
            {data.trustLine}
          </motion.p>
        )}
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
export function LPProblem({ data }: { data: LandingPage["problem"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="relative py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {data.badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-3 py-1 text-xs border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300"
              >
                {data.badge}
              </Badge>
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            {data.headline}{" "}
            {data.gradientText && (
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {data.gradientText}
              </span>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-muted-foreground text-base sm:text-lg"
          >
            {data.description}
          </motion.p>
        </div>

        <div
          className={cn(
            "grid gap-6",
            data.stats.length === 2
              ? "md:grid-cols-2 max-w-3xl mx-auto"
              : data.stats.length >= 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
          )}
        >
          {data.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease }}
              className="group bg-background rounded-2xl p-6 sm:p-8 border border-border/60 hover:border-red-200 dark:hover:border-red-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground/80">
                {stat.label}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── SOLUTION ─── */
export function LPSolution({ data }: { data: LandingPage["solution"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {data.badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-3 py-1 text-xs border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300"
              >
                {data.badge}
              </Badge>
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            {data.headline}{" "}
            {data.gradientText && (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {data.gradientText}
              </span>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-muted-foreground text-base sm:text-lg"
          >
            {data.description}
          </motion.p>
        </div>

        <div
          className={cn(
            "grid gap-5",
            data.features.length === 2
              ? "md:grid-cols-2 max-w-3xl mx-auto"
              : data.features.length === 4
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
          )}
        >
          {data.features.map((f, i) => {
            const gradients = [
              "from-blue-500 to-cyan-400",
              "from-purple-500 to-pink-400",
              "from-emerald-500 to-teal-400",
              "from-orange-500 to-amber-400",
              "from-sky-500 to-indigo-400",
              "from-rose-500 to-pink-400",
            ];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}
                className="group bg-background rounded-2xl p-6 sm:p-8 border border-border/60 hover:border-blue-200/60 dark:hover:border-blue-800/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
              >
                <div
                  className={cn(
                    "h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg mb-4",
                    gradients[i % gradients.length]
                  )}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ─── SOCIAL PROOF ─── */
export function LPProof({ data }: { data: LandingPage["proof"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="relative py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {data.headline && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl font-bold tracking-tight mb-12"
          >
            {data.headline}
          </motion.h2>
        )}

        {data.stats && data.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {data.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease }}
          className="max-w-2xl mx-auto bg-background rounded-2xl p-6 sm:p-8 border border-border/60"
        >
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, j) => (
              <Star
                key={j}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic">
            &ldquo;{data.testimonial.quote}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
              {data.testimonial.name[0]}
            </div>
            <div>
              <div className="text-sm font-semibold">
                {data.testimonial.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {data.testimonial.role} &middot; {data.testimonial.detail}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── HOW IT WORKS ─── */
export function LPHowItWorks({ data }: { data: HowItWorksSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16"
        >
          {data.headline}
        </motion.h2>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
            />
          </div>

          {data.steps.map((step, i) => {
            const gradients = [
              "from-blue-500 to-cyan-400",
              "from-purple-500 to-pink-400",
              "from-emerald-500 to-teal-400",
            ];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.7, ease }}
              >
                <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border/60 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 dark:hover:border-blue-800/40 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={cn(
                        "h-12 w-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg",
                        gradients[i % 3]
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ─── COMPARISON TABLE ─── */
export function LPComparison({ data }: { data: ComparisonSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold tracking-tight mb-12"
        >
          {data.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left font-medium text-muted-foreground">
                  Feature
                </th>
                <th className="py-4 px-4 text-center font-semibold text-foreground">
                  SkillPass
                </th>
                <th className="py-4 px-4 text-center font-medium text-muted-foreground">
                  {data.competitor}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-3.5 px-4 text-foreground/80">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {row.us === "Yes" ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                    ) : (
                      <span className="text-foreground font-medium">
                        {row.us}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">
                    {row.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── FAQ ─── */
export function LPFAQ({ items }: { items: FAQItem[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="relative py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold tracking-tight mb-12"
        >
          Common questions
        </motion.h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease }}
              className="group bg-background rounded-xl border border-border/60 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-medium hover:bg-accent/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── FINAL CTA ─── */
export function LPCTA({ data }: { data: LandingPage["cta"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {data.headline}{" "}
            {data.gradientText && (
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {data.gradientText}
              </span>
            )}
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-blue-100/60 max-w-xl mx-auto">
            {data.description}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={data.primaryCta.href}>
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-10 text-base bg-white text-slate-900 hover:bg-blue-50 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                {data.primaryCta.text}
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
            {data.secondaryCta && (
              <Link href={data.secondaryCta.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-13 px-10 text-base border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
                >
                  {data.secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOOTER (compact for landing pages) ─── */
export function LPFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-lg font-bold">SkillPass</span>
          </Link>
          <div className="flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Employers", href: "/employers" },
              { label: "Pricing", href: "/pricing" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SkillPass, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

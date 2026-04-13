"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  Shield,
  Repeat,
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  ClipboardCheck,
  MessageSquareText,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Star,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────
   UTILITY: Animated counter hook
   ────────────────────────────────────────────── */
function useAnimatedCounter(
  target: number,
  from: number,
  duration: number,
  inView: boolean
) {
  const count = useMotionValue(from);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, target, duration, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(Math.round(v));
    });
    return unsubscribe;
  }, [rounded]);

  return display;
}

/* ──────────────────────────────────────────────
   UTILITY: Section wrapper with scroll animation
   ────────────────────────────────────────────── */
function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.section>
  );
}

/* ──────────────────────────────────────────────
   FLOATING SKILL BADGES around the hero score
   ────────────────────────────────────────────── */
const floatingSkills = [
  { label: "Python", color: "from-blue-500 to-cyan-400" },
  { label: "System Design", color: "from-purple-500 to-pink-400" },
  { label: "Leadership", color: "from-emerald-500 to-teal-400" },
  { label: "React", color: "from-sky-500 to-indigo-400" },
  { label: "ML/AI", color: "from-orange-500 to-amber-400" },
  { label: "Communication", color: "from-rose-500 to-pink-400" },
];

function FloatingBadge({
  label,
  color,
  index,
  total,
}: {
  label: string;
  color: string;
  index: number;
  total: number;
}) {
  const angle = (index / total) * 360;
  const radius = 160;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: x - 40,
        y: y - 14,
      }}
      transition={{
        delay: 1.2 + index * 0.15,
        duration: 0.6,
        ease: "backOut",
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0, 6, 0],
          x: [0, 4, 0, -4, 0],
        }}
        transition={{
          duration: 4 + index * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-semibold text-white shadow-lg",
          "backdrop-blur-sm border border-white/20",
          color
        )}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   DOT GRID BACKGROUND
   ────────────────────────────────────────────── */
function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(221.2 83.2% 53.3% / 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}

/* ──────────────────────────────────────────────
   NAVBAR
   ────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            SkillPass
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
            { label: "For Employers", href: "/employers" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md shadow-blue-500/25"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4"
        >
          <div className="flex flex-col gap-2">
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Features", href: "#features" },
              { label: "For Employers", href: "/employers" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Link href="/sign-in" className="flex-1">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" className="flex-1">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const scoreDisplay = useAnimatedCounter(742, 300, 2.5, isInView);

  const subtitleWords =
    "The credit score for professional ability. Build once, share everywhere, skip redundant screening forever.".split(
      " "
    );

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background effects */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <DotGrid />
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 text-sm font-medium border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Now in Beta — Join the Waitlist
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              Your skills{" "}
              <br className="hidden sm:block" />
              should{" "}
              <span className="relative inline-block">
                <span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]"
                  style={{
                    animation: "gradient-shift 3s ease-in-out infinite",
                  }}
                >
                  follow you
                </span>
              </span>
            </motion.h1>

            {/* Subtitle — staggered word fade */}
            <div className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {subtitleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.04,
                    duration: 0.4,
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Build Your SkillPass
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base border-border/60 hover:bg-accent/50"
                >
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="mt-6 text-xs text-muted-foreground/60 flex items-center gap-1.5 justify-center lg:justify-start"
            >
              <Shield className="h-3.5 w-3.5" />
              Free for candidates. Always. No credit card required.
            </motion.p>
          </div>

          {/* Right: SkillScore visual */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110" />

              {/* Score card */}
              <div className="relative w-72 sm:w-80 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Zap className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      SkillScore
                    </span>
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px]">
                    Verified
                  </Badge>
                </div>

                {/* Score display */}
                <div className="text-center mb-6">
                  <div className="text-7xl font-bold text-white tabular-nums tracking-tight">
                    {scoreDisplay}
                  </div>
                  <div className="text-sm text-white/50 mt-1">out of 850</div>
                  {/* Score bar */}
                  <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "87%" } : {}}
                      transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-[10px] text-white/30">
                    <span>300</span>
                    <span>575</span>
                    <span>850</span>
                  </div>
                </div>

                {/* Sub-scores */}
                <div className="space-y-3">
                  {[
                    { label: "Technical", score: 92, color: "from-blue-500 to-cyan-400" },
                    { label: "Leadership", score: 78, color: "from-purple-500 to-pink-400" },
                    { label: "References", score: 88, color: "from-emerald-500 to-teal-400" },
                  ].map((item, i) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/60">{item.label}</span>
                        <span className="text-white/80 font-medium">
                          {item.score}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={
                            isInView
                              ? { width: `${item.score}%` }
                              : {}
                          }
                          transition={{
                            delay: 1.8 + i * 0.2,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                          className={cn(
                            "h-full bg-gradient-to-r rounded-full",
                            item.color
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom badges */}
                <div className="flex gap-2 mt-6">
                  {["Calibrated", "Portable"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-white/50 border border-white/10 rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block">
                {floatingSkills.map((skill, i) => (
                  <FloatingBadge
                    key={skill.label}
                    {...skill}
                    index={i}
                    total={floatingSkills.length}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* gradient-shift keyframes defined in globals.css */}
    </section>
  );
}

/* ──────────────────────────────────────────────
   PROBLEM SECTION
   ────────────────────────────────────────────── */
const problemStats = [
  {
    value: "7",
    suffix: "",
    label: "redundant coding tests per job search",
    description:
      "Candidates take the same assessment over and over for different employers, wasting hours each cycle.",
    icon: Repeat,
    direction: "left" as const,
  },
  {
    value: "300-500",
    suffix: "%",
    label: "increase in applications from AI",
    description:
      "AI-generated resumes have flooded pipelines. Employers can't separate signal from noise.",
    icon: TrendingUp,
    direction: "bottom" as const,
  },
  {
    value: "$4,000",
    suffix: "+",
    label: "average cost per hire for employers",
    description:
      "Screening, interviewing, and background checks burn time and money that could go toward building.",
    icon: BarChart3,
    direction: "right" as const,
  },
];

function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AnimatedSection className="relative py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300"
            >
              The Problem
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            The hiring process{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              is broken
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-muted-foreground text-base sm:text-lg"
          >
            Candidates waste time re-proving themselves. Employers waste money on
            screening that doesn&apos;t work. Everyone loses.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {problemStats.map((stat, i) => {
            const directionMap = {
              left: { x: -60, y: 0 },
              right: { x: 60, y: 0 },
              bottom: { x: 0, y: 60 },
            };
            const offset = directionMap[stat.direction];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, ...offset }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 0.7,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative bg-background rounded-2xl p-6 sm:p-8 border border-border/60 hover:border-red-200 dark:hover:border-red-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-500">
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {stat.value}
                  <span className="text-red-500">{stat.suffix}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-foreground/80">
                  {stat.label}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ──────────────────────────────────────────────
   HOW IT WORKS — 3-step section
   ────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Build Your Profile",
    description:
      "Upload your transcript, add work history, and invite managers and peers for structured references. It takes under 10 minutes.",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    num: "02",
    title: "Get Calibrated",
    description:
      "Our engine normalizes your GPA across institutions, calibrates references for bias, and generates your SkillScore (300-850).",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    num: "03",
    title: "Share & Get Hired",
    description:
      "One link. Every employer. High scores skip straight to final-round interviews. Your results are portable and reusable.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-400",
  },
];

function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AnimatedSection
      id="how-it-works"
      className="relative py-24 sm:py-32"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300"
            >
              How It Works
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Three steps to a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              verified profile
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.2,
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative"
            >
              <div
                className="relative bg-background rounded-2xl p-6 sm:p-8 border border-border/60 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 dark:hover:border-blue-800/40"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={cn(
                      "h-12 w-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg",
                      step.gradient
                    )}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">
                    {step.num}
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
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ──────────────────────────────────────────────
   BENTO GRID — Features
   ────────────────────────────────────────────── */
const features = [
  {
    title: "Transcript Intelligence",
    description:
      "OCR-parsed transcripts with AI course rigor scoring. We know that an A in Algorithms at MIT is not the same as an A in Intro CS elsewhere.",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-400",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Calibrated References",
    description:
      "Structured 360-degree references from managers, peers, and reports — bias-reduced and comparable.",
    icon: Users,
    gradient: "from-purple-500 to-pink-400",
    span: "md:col-span-1 md:row-span-1",
    large: false,
  },
  {
    title: "SkillScore 300–850",
    description:
      "Your professional credit score. A single number employers trust, built from calibrated data.",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-400",
    span: "md:col-span-1 md:row-span-1",
    large: false,
  },
  {
    title: "One Assessment, Every Employer",
    description:
      "Take a proctored assessment once. Share results with every company. No more redundant tests.",
    icon: ClipboardCheck,
    gradient: "from-orange-500 to-amber-400",
    span: "md:col-span-1 md:row-span-1",
    large: false,
  },
  {
    title: "Performance Review Analysis",
    description:
      "NLP-powered sentiment extraction from performance reviews. Surface your growth trajectory.",
    icon: MessageSquareText,
    gradient: "from-rose-500 to-pink-400",
    span: "md:col-span-1 md:row-span-1",
    large: false,
  },
  {
    title: "Public Profile",
    description:
      "A shareable URL like skillpass.io/you. Send one link instead of a resume, portfolio, and references.",
    icon: ExternalLink,
    gradient: "from-sky-500 to-indigo-400",
    span: "md:col-span-1 md:row-span-1",
    large: false,
  },
];

function BentoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <AnimatedSection
      id="features"
      className="relative py-24 sm:py-32 bg-muted/30"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300"
            >
              Features
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Everything you need,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              nothing you don&apos;t
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-muted-foreground text-base sm:text-lg"
          >
            Six intelligent modules that capture every dimension of your
            professional ability.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={cn("group relative", feature.span)}
            >
              <div className="relative h-full bg-background rounded-2xl p-6 sm:p-8 border border-border/60 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/60 dark:hover:border-blue-800/40">
                {/* Hover gradient glow */}
                <div
                  className={cn(
                    "absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700",
                    feature.gradient
                  )}
                />

                <div
                  className={cn(
                    "h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg mb-4",
                    feature.gradient
                  )}
                >
                  <feature.icon className="h-5 w-5" />
                </div>

                <h3
                  className={cn(
                    "font-semibold tracking-tight",
                    feature.large
                      ? "text-xl sm:text-2xl"
                      : "text-lg"
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-muted-foreground leading-relaxed",
                    feature.large ? "text-base" : "text-sm"
                  )}
                >
                  {feature.description}
                </p>

                {/* Large card extra content */}
                {feature.large && (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { label: "Institutions Supported", value: "4,000+" },
                      { label: "Course Rigor Accuracy", value: "94.7%" },
                      { label: "Transcripts Processed", value: "12K+" },
                      { label: "GPA Normalization", value: "Real-time" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-muted/50 rounded-lg p-3"
                      >
                        <div className="text-lg font-bold">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ──────────────────────────────────────────────
   SCORE VISUALIZATION SECTION
   ────────────────────────────────────────────── */
function ScoreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const subScores = [
    { label: "Academic Rigor", score: 95, color: "from-blue-500 to-cyan-400" },
    { label: "Technical Skills", score: 92, color: "from-purple-500 to-pink-400" },
    { label: "References", score: 88, color: "from-emerald-500 to-teal-400" },
    { label: "Work Experience", score: 82, color: "from-orange-500 to-amber-400" },
    { label: "Assessments", score: 90, color: "from-sky-500 to-indigo-400" },
  ];

  return (
    <AnimatedSection className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-3 py-1 text-xs border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300"
              >
                SkillScore
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              The score that{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                speaks for you
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed"
            >
              Like a credit score for your career. Your SkillScore (300-850) is
              built from calibrated, verified data sources and is universally
              comparable across institutions and employers.
            </motion.p>

            {/* Calibrated GPA highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-5 border border-blue-100 dark:border-blue-900/40"
            >
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                  <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    Calibrated GPA Example
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    A <span className="font-semibold text-foreground">3.4 GPA in MIT CS</span>{" "}
                    maps to the{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      97th percentile
                    </span>{" "}
                    nationally. Our engine understands institutional rigor so employers compare
                    apples to apples.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                { label: "Verified", icon: CheckCircle2 },
                { label: "Calibrated", icon: BarChart3 },
                { label: "Portable", icon: Globe },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1.5"
                >
                  <badge.icon className="h-3 w-3" />
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Visualized sub-scores */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border/60 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Score Breakdown</h3>
                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40">
                  Top 12%
                </Badge>
              </div>

              <div className="space-y-5">
                {subScores.map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold tabular-nums">
                        {item.score}/100
                      </span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={
                          isInView
                            ? { width: `${item.score}%` }
                            : {}
                        }
                        transition={{
                          delay: 0.6 + i * 0.12,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={cn(
                          "h-full bg-gradient-to-r rounded-full",
                          item.color
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Overall SkillScore</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      742
                    </span>
                    <span className="text-sm text-muted-foreground">
                      / 850
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ──────────────────────────────────────────────
   SOCIAL PROOF / TRUST SECTION
   ────────────────────────────────────────────── */
const institutions = [
  "MIT",
  "Stanford",
  "Carnegie Mellon",
  "Georgia Tech",
  "UC Berkeley",
  "Harvard",
  "Caltech",
  "Princeton",
];

const testimonials = [
  {
    quote:
      "I was spending 15+ hours a week on redundant coding tests. SkillPass let me take one assessment and share it everywhere. I had three final rounds within a week.",
    name: "Sarah K.",
    role: "Software Engineer",
    school: "MIT '24",
  },
  {
    quote:
      "As a hiring manager, the signal-to-noise ratio on resumes has collapsed. SkillPass gives me calibrated, verified data I can actually trust. We cut our time-to-hire by 40%.",
    name: "James L.",
    role: "VP Engineering",
    company: "Series B Startup",
  },
];

function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <AnimatedSection className="relative py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Trusted by the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              best and brightest
            </span>
          </motion.h2>
        </div>

        {/* Institution logos (text-based) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-sm text-muted-foreground mb-6">
            Candidates from top institutions
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {institutions.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                className="text-lg sm:text-xl font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Accepted by badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-background border border-border/60 rounded-full px-5 py-2.5 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-sm font-medium">
              Accepted by{" "}
              <span className="text-foreground font-semibold">50+ employers</span>{" "}
              and growing
            </span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.6 + i * 0.15,
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="bg-background rounded-2xl p-6 sm:p-8 border border-border/60"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}
                    {t.school ? ` · ${t.school}` : ""}
                    {t.company ? ` · ${t.company}` : ""}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ──────────────────────────────────────────────
   FINAL CTA SECTION
   ────────────────────────────────────────────── */
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]" />

      {/* Dot pattern overlay */}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready to build your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              SkillPass
            </span>
            ?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-blue-100/60 max-w-xl mx-auto">
            Join thousands of candidates who are taking control of their
            professional identity. Set up takes under 10 minutes.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-10 text-base bg-white text-slate-900 hover:bg-blue-50 shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
              >
                Get Started Free
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
            <Link href="/employers">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-13 px-10 text-base border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                I&apos;m an Employer
              </Button>
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-sm text-blue-200/40 flex items-center gap-1.5 justify-center"
          >
            <Shield className="h-3.5 w-3.5" />
            Free for candidates. Always. No credit card required.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────────── */
function Footer() {
  const footerLinks = [
    {
      heading: "Product",
      links: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "For Employers", href: "/employers" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-lg font-bold">SkillPass</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              The credit score for professional ability. Your skills should
              follow you.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-semibold mb-3">{group.heading}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SkillPass, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <BentoSection />
        <ScoreSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

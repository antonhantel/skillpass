import type { LandingPage } from "./types";

export const employerUsecasePages: LandingPage[] = [
  // ═══════════════════════════════════════════════════════════════
  // EMPLOYER USE CASES (1–15) — audience: employer, funnel: mofu
  // ═══════════════════════════════════════════════════════════════

  // 1
  {
    slug: "cut-screening-70pct",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Cut Screening Time by 70% — Verified SkillScores Replace Resume Reviews | SkillPass",
      description:
        "Recruiters spend 23 hours per week reading resumes. SkillPass pre-scores every applicant so you only talk to qualified candidates. See the math.",
    },
    hero: {
      badge: "Screening ROI",
      headline: "70% less screening time.",
      gradientText: "Do the math.",
      subheadline:
        "Your recruiters spend 23 hours a week skimming resumes that all look the same. SkillPass pre-scores every applicant with verified data — academics, peer reviews, assessments, performance history — so you skip straight to the shortlist.",
      primaryCta: { text: "See your time savings", href: "/employers/signup" },
      secondaryCta: { text: "Watch the 2-min demo", href: "/demo" },
      trustLine: "50+ employers cut screening by 60–78% in Q1 2026",
    },
    problem: {
      badge: "The bottleneck nobody fixes",
      headline: "You're paying senior people",
      gradientText: "to skim resumes.",
      description:
        "Every open role generates hundreds of applications. Your team reads each one, makes a gut call in 7 seconds, and moves on. That's not screening — it's guessing at scale.",
      stats: [
        { value: "23 hrs", label: "Weekly recruiter screening time", description: "Per recruiter. That's more than half their workweek spent on a task a verified score handles instantly." },
        { value: "7.4 sec", label: "Average resume review time", description: "Research from Ladders shows recruiters spend under 8 seconds per resume. That's not evaluation." },
        { value: "$4,129", label: "Cost per hire from screening alone", description: "Recruiter salary, ATS licensing, coordination — most of it wasted on unqualified applicants." },
      ],
    },
    solution: {
      badge: "What 70% actually looks like",
      headline: "Pre-scored candidates.",
      gradientText: "No more resume roulette.",
      description:
        "Every applicant who connects their SkillPass profile arrives with a 300–850 SkillScore. Set your threshold, auto-advance anyone above it, and spend your hours on conversations — not paper shuffling.",
      features: [
        { title: "Automatic threshold filtering", description: "Set a minimum SkillScore per role. Applicants below it get a polite decline. Your team never sees them." },
        { title: "Sub-score breakdown", description: "Academic, Peer Signal, Performance, and Assessed Ability — four lenses on every candidate, not just a single number." },
        { title: "Custom score weights", description: "Hiring a senior engineer? Weight Assessed Ability and Performance higher. Entry-level? Lean on Academic and Peer Signal." },
        { title: "ATS auto-sync", description: "SkillScores flow into Greenhouse, Lever, Ashby, and Workday. No copy-paste, no tab-switching." },
      ],
    },
    proof: {
      headline: "What happens when you stop reading resumes",
      testimonial: {
        quote: "We went from 31 hours a week on screening to under 9. Our recruiters started sourcing again — actually sourcing — for the first time in two years.",
        name: "David Chen",
        role: "VP of Talent Acquisition",
        detail: "Mid-market SaaS, 600 employees",
      },
      stats: [
        { value: "71%", label: "Screening time cut" },
        { value: "14 hrs", label: "Saved per recruiter per week" },
        { value: "2.8x", label: "More candidates in pipeline" },
        { value: "$312K", label: "Annual savings (team of 5)" },
      ],
    },
    cta: {
      headline: "Your recruiters have better things to do",
      gradientText: "than read resumes.",
      description: "Start with one role. See your screening time drop in the first week. No annual contract required.",
      primaryCta: { text: "Start free pilot", href: "/employers/signup" },
      secondaryCta: { text: "Calculate your savings", href: "/roi-calculator" },
    },
  },

  // 2
  {
    slug: "stop-losing-talent",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Stop Losing Top Candidates to Faster Employers | SkillPass",
      description:
        "The best candidates have 3 offers by week two. If your process takes 42 days, you're losing them. SkillPass compresses time-to-offer dramatically.",
    },
    hero: {
      badge: "Speed-to-Hire",
      headline: "Your best candidates",
      gradientText: "accepted somewhere else.",
      subheadline:
        "Top talent stays on the market for 10 days. Your average time-to-hire is 42. By the time you schedule the panel interview, they've already signed. SkillPass gives you verified signal fast enough to keep up.",
      primaryCta: { text: "Speed up your pipeline", href: "/employers/signup" },
      secondaryCta: { text: "See the timeline", href: "/demo" },
      trustLine: "Employers using SkillPass cut time-to-offer by 60% on average",
    },
    problem: {
      badge: "The talent you never had",
      headline: "Your process is designed",
      gradientText: "to lose good people.",
      description:
        "Phone screens, take-homes, panel interviews, debrief meetings, reference checks — each step adds days. Meanwhile, your competitor made an offer on day 8.",
      stats: [
        { value: "42 days", label: "Average time-to-hire (US)", description: "SHRM data. That's six weeks of candidate anxiety, ghosting risk, and competitor poaching." },
        { value: "10 days", label: "Top talent's market window", description: "LinkedIn research: the best candidates are off the market in under two weeks." },
        { value: "68%", label: "Candidates who drop out mid-process", description: "Greenhouse data. Two-thirds of your pipeline quits before you decide. They didn't ghost — you were slow." },
      ],
    },
    solution: {
      badge: "Close faster with signal",
      headline: "Verified data on day one.",
      gradientText: "Offer on day seven.",
      description:
        "When you already know a candidate's Academic record, Peer Signal, Performance history, and Assessed Ability score — you can skip the validation stages and go straight to culture fit and role-specific depth.",
      features: [
        { title: "Pre-verified credentials", description: "Transcripts, certifications, and peer endorsements already confirmed. No waiting 5 days for a background check to start." },
        { title: "Skip the phone screen", description: "A 720+ SkillScore with strong Assessed Ability tells you more than a 30-minute phone call ever could." },
        { title: "Parallel decision-making", description: "Share candidate SkillScore breakdowns with the hiring panel before the first interview. Everyone arrives prepared." },
        { title: "Instant comparison", description: "Side-by-side candidate scores with sub-score overlays. Make faster shortlist decisions without sacrificing rigor." },
      ],
    },
    proof: {
      headline: "They used to lose 4 in 10 candidates. Now they lose 1.",
      testimonial: {
        quote: "We lost our top pick three times in a row last year. All to companies who moved faster. After SkillPass, we compressed to 11 days. Haven't lost a first-choice candidate since March.",
        name: "Sarah Okafor",
        role: "Head of Engineering Hiring",
        detail: "Series B startup, 180 employees",
      },
      stats: [
        { value: "11 days", label: "Avg. time-to-offer" },
        { value: "89%", label: "Offer acceptance rate" },
        { value: "4.1x", label: "Fewer candidate drop-offs" },
        { value: "$18K", label: "Saved per lost-candidate replacement" },
      ],
    },
    cta: {
      headline: "The candidate you want",
      gradientText: "won't wait for you.",
      description: "Compress your pipeline from weeks to days. The first pilot role is free — no procurement dance required.",
      primaryCta: { text: "Start closing faster", href: "/employers/signup" },
      secondaryCta: { text: "Talk to our team", href: "/contact" },
    },
  },

  // 3
  {
    slug: "hire-days-not-months",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Hire in Days, Not Months — Compress Time-to-Hire with SkillPass",
      description:
        "The 42-day hiring average exists because most of those days are spent validating things SkillPass already verified. Cut your timeline to under two weeks.",
    },
    hero: {
      badge: "Time-to-Hire",
      headline: "The 42-day time-to-hire,",
      gradientText: "compressed.",
      subheadline:
        "Most of those 42 days aren't spent deciding. They're spent verifying, scheduling, and re-verifying. SkillPass front-loads the signal so you spend your time on what actually matters: talking to the right people.",
      primaryCta: { text: "Compress your timeline", href: "/employers/signup" },
      secondaryCta: { text: "See stage-by-stage breakdown", href: "/demo" },
      trustLine: "Average SkillPass employer: 16 days from posting to signed offer",
    },
    problem: {
      badge: "Where time actually goes",
      headline: "42 days isn't a hiring process.",
      gradientText: "It's a waiting process.",
      description:
        "Map your pipeline. Most of it is dead time — waiting for screens to be scheduled, take-homes to come back, references to return calls, and panels to align calendars. The actual decision takes 2 hours.",
      stats: [
        { value: "17 days", label: "Lost to scheduling alone", description: "Coordinating recruiter screens, technical interviews, and panel reviews eats almost half the timeline." },
        { value: "8 days", label: "Spent on credential verification", description: "Background checks, degree confirmation, reference calls — things SkillPass verifies before you ever see the candidate." },
        { value: "$680/day", label: "Cost of an unfilled role", description: "Per Oxford Economics. Every extra day in your process is money walking out the door." },
      ],
    },
    solution: {
      badge: "Here's what 16 days looks like",
      headline: "Day 1: scores. Day 3: interviews.",
      gradientText: "Day 12: offer.",
      description:
        "SkillPass eliminates the verification stages that bloat your timeline. Credentials are already confirmed. Skills are already assessed. You start at the conversation stage.",
      features: [
        { title: "Day 1 — Scored applicant pool", description: "Every applicant arrives with a verified SkillScore. Set your cutoff and have a shortlist by end of day." },
        { title: "Day 2–5 — Focused interviews", description: "Skip phone screens entirely. Go straight to depth interviews with pre-verified candidates." },
        { title: "Day 6–10 — Panel and decision", description: "Share SkillScore breakdowns with the full hiring committee. They arrive informed, not cold." },
        { title: "Day 11–16 — Offer and close", description: "Candidates who aren't waiting 6 weeks are more likely to accept. Speed is its own negotiation lever." },
      ],
    },
    proof: {
      headline: "From 39 days to 14",
      testimonial: {
        quote: "Our CFO asked why hiring took so long. When we mapped it, 60% of the time was verification and scheduling for screens we didn't need. SkillPass cut that out completely.",
        name: "Marcus Rivera",
        role: "Director of Recruiting",
        detail: "Healthcare tech, 1,200 employees",
      },
      stats: [
        { value: "14 days", label: "New avg. time-to-hire" },
        { value: "64%", label: "Faster than industry average" },
        { value: "3 stages", label: "Eliminated from pipeline" },
        { value: "92%", label: "Offer acceptance rate" },
      ],
    },
    cta: {
      headline: "Every day your role is open",
      gradientText: "costs you $680.",
      description: "Compress from 42 to 16. Start with a single role and see the timeline difference yourself.",
      primaryCta: { text: "Start your first fast hire", href: "/employers/signup" },
      secondaryCta: { text: "See the stage-by-stage math", href: "/roi-calculator" },
    },
  },

  // 4
  {
    slug: "see-real-candidate",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "See the Real Candidate Behind the AI-Written Resume | SkillPass",
      description:
        "ChatGPT wrote their resume. Grammarly polished their cover letter. SkillPass shows you what's actually verified — academics, peer reviews, and real assessments.",
    },
    hero: {
      badge: "Beyond the Resume",
      headline: "ChatGPT wrote their resume.",
      gradientText: "Who are they really?",
      subheadline:
        "Every resume you read this week was touched by AI. The bullet points are perfect, the keywords are optimized, and none of it tells you whether this person can actually do the job. SkillPass shows you what's real.",
      primaryCta: { text: "See verified candidates", href: "/employers/signup" },
      secondaryCta: { text: "Compare: resume vs. SkillScore", href: "/demo" },
      trustLine: "78% of resumes submitted in 2025 were AI-assisted — Jobscan research",
    },
    problem: {
      badge: "The authenticity crisis",
      headline: "When every resume is perfect,",
      gradientText: "none of them are useful.",
      description:
        "AI tools made everyone sound like the ideal candidate. Perfect action verbs, quantified achievements, keyword-optimized formatting. Your screening now has zero signal. You're sorting noise.",
      stats: [
        { value: "78%", label: "AI-assisted resumes in 2025", description: "Jobscan data. Nearly 4 out of 5 resumes you're reading were written or heavily edited by AI." },
        { value: "54%", label: "Inflated or fabricated claims", description: "Checkster research. Over half of candidates exaggerate skills, titles, or experience on their resume." },
        { value: "0 sec", label: "Time it takes to fake a credential", description: "Anyone can type 'Certified Scrum Master' or 'Expert in Kubernetes.' Verification takes you days." },
      ],
    },
    solution: {
      badge: "What's actually verified",
      headline: "Four sub-scores. Zero guesswork.",
      gradientText: "Every data point confirmed.",
      description:
        "SkillPass builds each candidate's 300–850 SkillScore from verified sources only. Transcripts from 4,000+ institutions. Peer reviews from colleagues. Performance data from employers. Assessment results from proctored tests. Nothing self-reported makes it in.",
      features: [
        { title: "Academic (verified)", description: "Transcripts pulled directly from institutions. GPA, coursework, honors — confirmed, not claimed." },
        { title: "Peer Signal (verified)", description: "Structured endorsements from coworkers, managers, and collaborators. Not a LinkedIn thumbs-up. Real, weighted feedback." },
        { title: "Performance (verified)", description: "Historical performance data from past employers, anonymized and standardized. You see trajectory, not just a title." },
        { title: "Assessed Ability (verified)", description: "Results from standardized, proctored assessments. Technical, analytical, and domain-specific — taken under real conditions." },
      ],
    },
    proof: {
      headline: "The resume said 'expert.' The SkillScore said otherwise.",
      testimonial: {
        quote: "We hired three 'senior engineers' last year based on great resumes. Two couldn't pass our internal code review. After switching to SkillPass, our 90-day retention went from 71% to 94%.",
        name: "Priya Nair",
        role: "Engineering Manager",
        detail: "Fintech scale-up, 320 employees",
      },
      stats: [
        { value: "94%", label: "90-day retention" },
        { value: "3.1x", label: "Better interview-to-hire ratio" },
        { value: "67%", label: "Fewer mis-hires" },
        { value: "0", label: "Fabricated credentials missed" },
      ],
    },
    cta: {
      headline: "Stop trusting resumes.",
      gradientText: "Start trusting verified data.",
      description: "Every candidate you evaluate with SkillPass comes with verified proof — not polished promises. Try it on your next open role.",
      primaryCta: { text: "Get verified candidates", href: "/employers/signup" },
      secondaryCta: { text: "See a sample SkillScore", href: "/demo" },
    },
  },

  // 5
  {
    slug: "12k-savings-math",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "$12K Savings Per Hire — The Full Breakdown | SkillPass",
      description:
        "SkillPass employers save an average of $12,400 per hire. Here's exactly where the money comes from: screening, assessments, bad hires, and time-to-fill costs.",
    },
    hero: {
      badge: "Cost Breakdown",
      headline: "$12K per hire.",
      gradientText: "Here's the breakdown.",
      subheadline:
        "It's not one big line item. It's death by a thousand cuts — recruiter hours, assessment vendor fees, bad-hire replacement costs, and the silent drain of empty seats. Here's where every dollar goes and how SkillPass reclaims it.",
      primaryCta: { text: "Calculate your savings", href: "/roi-calculator" },
      secondaryCta: { text: "See the methodology", href: "/demo" },
      trustLine: "$12,400 average savings per hire across 50+ employers",
    },
    problem: {
      badge: "Where the money goes",
      headline: "You know hiring is expensive.",
      gradientText: "You don't know how expensive.",
      description:
        "SHRM says $4,700 per hire. That's just direct costs. Add recruiter time, lost productivity from unfilled roles, assessment licensing, and the cost of a bad hire, and you're looking at $28K+ for a single role.",
      stats: [
        { value: "$4,700", label: "Direct cost per hire (SHRM)", description: "Job board fees, ATS licensing, background checks. This is the number your finance team sees." },
        { value: "$15,000", label: "Hidden cost per hire", description: "Recruiter salary allocation, hiring manager interview time, lost productivity from the empty seat. This is the number nobody tracks." },
        { value: "$31,000", label: "Cost of a bad hire (first year)", description: "DOL estimates a bad hire costs 30% of their first-year salary. For a $100K role, that's $31K down the drain." },
      ],
    },
    solution: {
      badge: "The savings breakdown",
      headline: "$12,400 back in your pocket.",
      gradientText: "Per hire. Here's how.",
      description:
        "SkillPass doesn't replace your entire hiring process. It replaces the expensive, low-signal parts — the ones that cost the most and tell you the least.",
      features: [
        { title: "$3,800 — Screening time eliminated", description: "70% less time reading resumes. At fully-loaded recruiter costs, that's $3,800 per hire in time saved." },
        { title: "$2,200 — Assessment vendor fees cut", description: "One SkillScore replaces 2–3 separate assessment tools. Most employers drop at least one vendor entirely." },
        { title: "$1,900 — Faster time-to-fill", description: "16 days instead of 42 means 26 fewer days of empty-seat productivity loss. At $73/day, that's real money." },
        { title: "$4,500 — Fewer bad hires", description: "3x quality of hire means fewer first-year terminations. At $31K per bad hire, even a small improvement saves thousands." },
      ],
    },
    proof: {
      headline: "One company's first-year numbers",
      testimonial: {
        quote: "Our CFO was skeptical until we ran the numbers after 6 months. 47 hires, $11,800 average savings each. We'd been throwing away half a million dollars a year on broken screening.",
        name: "James Whitfield",
        role: "Chief People Officer",
        detail: "Enterprise logistics, 2,400 employees",
      },
      stats: [
        { value: "$554K", label: "First-year savings (47 hires)" },
        { value: "$11.8K", label: "Average per hire" },
        { value: "4.2x", label: "ROI on SkillPass subscription" },
        { value: "3 vendors", label: "Replaced by SkillPass" },
      ],
    },
    cta: {
      headline: "You already know hiring is expensive.",
      gradientText: "Now see exactly how much you'll save.",
      description: "Plug in your hiring volume, average salary, and current timeline. Our ROI calculator shows the math specific to your company.",
      primaryCta: { text: "Calculate your ROI", href: "/roi-calculator" },
      secondaryCta: { text: "Talk to sales", href: "/contact" },
    },
  },

  // 6
  {
    slug: "ats-drowning-noise",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Your ATS Is Full of Noise — Add Signal with SkillPass Scores",
      description:
        "10,000 applications. Zero useful signal. SkillPass attaches verified SkillScores to every applicant in your ATS so you can actually find the good ones.",
    },
    hero: {
      badge: "ATS Signal",
      headline: "Your ATS has 10,000 applications",
      gradientText: "and zero signal.",
      subheadline:
        "You spent $50K on an ATS and it's basically a filing cabinet. It stores resumes. It doesn't tell you who's good. SkillPass attaches a verified 300–850 score to every applicant — so your ATS actually works.",
      primaryCta: { text: "Add signal to your ATS", href: "/employers/signup" },
      secondaryCta: { text: "See the integration", href: "/demo" },
      trustLine: "Integrates with Greenhouse, Lever, Ashby, Workday, and iCIMS",
    },
    problem: {
      badge: "Your expensive filing cabinet",
      headline: "Your ATS organizes noise.",
      gradientText: "It doesn't find signal.",
      description:
        "Applicant tracking systems were built to manage workflow, not evaluate candidates. They parse keywords, sort by date, and flag exact-match terms. That was fine when you got 50 applications. Now you get 500.",
      stats: [
        { value: "88%", label: "ATS applications never reviewed by a human", description: "Preptel data. Your system auto-rejects most candidates based on keyword matching — not qualification." },
        { value: "75%", label: "Qualified candidates filtered out", description: "Harvard/Accenture study found ATS keyword filters reject 3 out of 4 qualified applicants." },
        { value: "0", label: "Skill verification built into any ATS", description: "No ATS on the market verifies whether a candidate actually has the skills they claim. They store claims." },
      ],
    },
    solution: {
      badge: "Signal, not storage",
      headline: "Every applicant gets a score.",
      gradientText: "Your ATS gets superpowers.",
      description:
        "SkillPass sits alongside your existing ATS. Applicants connect their SkillPass profile and a verified score appears in their candidate record. Sort, filter, and shortlist by actual ability — not keyword density.",
      features: [
        { title: "Score-in-record", description: "SkillScore and all four sub-scores show up directly in the candidate's ATS profile. No tab switching." },
        { title: "Score-based filtering", description: "Create custom filters: 'Show me everyone above 650 with Assessed Ability over 700.' Done in seconds." },
        { title: "Automated stage advancement", description: "Set rules: candidates above your threshold auto-advance to interview stage. Below it, they get a polite decline." },
        { title: "Native integrations", description: "Greenhouse, Lever, Ashby, Workday, iCIMS — plug-and-play. Setup takes under an hour." },
      ],
    },
    proof: {
      headline: "Same ATS. Completely different results.",
      testimonial: {
        quote: "We didn't switch our ATS. We just added SkillPass scores to it. Our recruiters went from dreading their queue to actually trusting it. The top of the list is now genuinely the top.",
        name: "Lauren Kim",
        role: "Talent Operations Manager",
        detail: "E-commerce company, 850 employees",
      },
      stats: [
        { value: "6x", label: "Faster shortlisting" },
        { value: "0", label: "Qualified candidates auto-rejected" },
        { value: "82%", label: "Recruiter satisfaction increase" },
        { value: "22 min", label: "Average integration setup" },
      ],
    },
    cta: {
      headline: "You don't need a new ATS.",
      gradientText: "You need signal in the one you have.",
      description: "Connect SkillPass to your existing ATS in under an hour. Every applicant gets a verified score. Your recruiters get their sanity back.",
      primaryCta: { text: "Connect your ATS", href: "/employers/signup" },
      secondaryCta: { text: "See supported integrations", href: "/integrations" },
    },
  },

  // 7
  {
    slug: "3x-quality-hire",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "3x Quality of Hire — Measure and Improve with SkillPass",
      description:
        "Quality of hire is the metric every exec asks about and nobody can measure. SkillPass gives you a predictive score that correlates with 90-day and 1-year retention.",
    },
    hero: {
      badge: "Quality of Hire",
      headline: "Quality of hire is the grail metric.",
      gradientText: "Here's how to actually measure it.",
      subheadline:
        "Every talent leader wants to improve quality of hire. Almost none can define it, let alone measure it. SkillPass gives you a pre-hire signal that predicts post-hire performance — verified, not vibes.",
      primaryCta: { text: "Start measuring quality", href: "/employers/signup" },
      secondaryCta: { text: "See the correlation data", href: "/demo" },
      trustLine: "SkillScore correlates 0.74 with 1-year performance ratings",
    },
    problem: {
      badge: "The metric nobody measures",
      headline: "You track time-to-fill.",
      gradientText: "You can't track quality.",
      description:
        "Your dashboard shows time-to-fill, cost-per-hire, and source-of-hire. But the metric that actually matters — did we hire someone good? — is either unmeasured or measured 12 months too late.",
      stats: [
        { value: "26%", label: "Companies that measure quality of hire", description: "LinkedIn Talent Solutions data. Three-quarters of companies have no systematic quality-of-hire metric." },
        { value: "12 months", label: "Typical quality-of-hire feedback loop", description: "By the time you know the hire was bad, you've already spent 6 months managing them out." },
        { value: "46%", label: "New hires who fail within 18 months", description: "Leadership IQ research. Nearly half of all new hires don't work out. That's not bad luck — it's bad signal." },
      ],
    },
    solution: {
      badge: "Predict before you hire",
      headline: "A pre-hire score that predicts",
      gradientText: "post-hire success.",
      description:
        "SkillScore isn't just a filter. It's a predictor. Our four sub-scores — Academic, Peer Signal, Performance, and Assessed Ability — correlate strongly with 90-day ramp, 1-year retention, and manager satisfaction.",
      features: [
        { title: "Predictive correlation", description: "0.74 correlation between SkillScore and first-year performance rating. That's stronger than any structured interview alone." },
        { title: "Sub-score diagnostics", description: "High Academic but low Peer Signal? Strong individual contributor, possible team friction. The sub-scores tell the full story." },
        { title: "Quality-of-hire dashboard", description: "Track SkillScore at hire vs. performance review data over time. See which score ranges produce your best employees." },
        { title: "Continuous calibration", description: "As you hire more people through SkillPass, the system learns which sub-score weights predict success at your company specifically." },
      ],
    },
    proof: {
      headline: "From gut feel to data",
      testimonial: {
        quote: "Our hiring managers used to say 'I'll know them when I see them.' Now they say 'show me anyone above 700 with strong Peer Signal.' The quality difference in our last 30 hires is night and day.",
        name: "Tomás Herrera",
        role: "SVP, People & Culture",
        detail: "Professional services firm, 900 employees",
      },
      stats: [
        { value: "3.1x", label: "Quality of hire improvement" },
        { value: "91%", label: "1-year retention (up from 72%)" },
        { value: "0.74", label: "Score-to-performance correlation" },
        { value: "34%", label: "Faster ramp to productivity" },
      ],
    },
    cta: {
      headline: "You can't improve what you can't measure.",
      gradientText: "Now you can measure it.",
      description: "Start with your next 10 hires. Compare SkillScores against performance reviews at 90 days. The correlation will speak for itself.",
      primaryCta: { text: "Start measuring", href: "/employers/signup" },
      secondaryCta: { text: "See the research", href: "/research" },
    },
  },

  // 8
  {
    slug: "end-phone-screen",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "End the Phone Screen — Replace 30-Minute Calls with Verified Scores | SkillPass",
      description:
        "The recruiter phone screen is a 30-minute call that confirms what a verified SkillScore tells you in 2 seconds. Stop scheduling, start shortlisting.",
    },
    hero: {
      badge: "Kill the Phone Screen",
      headline: "The 30-minute call that",
      gradientText: "wastes everyone's time.",
      subheadline:
        "Your recruiters make 15 phone screens a week. Each one confirms basic qualifications, checks communication skills, and gauges interest. A verified SkillScore does all three in two seconds — without scheduling hell.",
      primaryCta: { text: "Replace your phone screens", href: "/employers/signup" },
      secondaryCta: { text: "See what you'd save", href: "/roi-calculator" },
      trustLine: "87% of SkillPass employers have eliminated recruiter phone screens",
    },
    problem: {
      badge: "The call nobody wants",
      headline: "15 phone screens a week.",
      gradientText: "Zero of them are necessary.",
      description:
        "The phone screen exists because resumes can't be trusted. You need 30 minutes to verify basic claims, check if they can string a sentence together, and figure out if they're actually interested. But what if that information was already verified?",
      stats: [
        { value: "30 min", label: "Average phone screen length", description: "Plus 10 minutes of prep and 10 minutes of notes. That's 50 minutes per candidate, minimum." },
        { value: "7.5 hrs", label: "Weekly time per recruiter on screens", description: "15 screens x 50 minutes. Nearly a full day every week spent on a low-value activity." },
        { value: "23%", label: "Phone screens that advance", description: "Less than 1 in 4 candidates pass the phone screen. You're spending 77% of that time on 'no.'" },
      ],
    },
    solution: {
      badge: "Skip to the real conversation",
      headline: "Everything a phone screen checks",
      gradientText: "is already in the SkillScore.",
      description:
        "Basic qualifications? Verified. Skills? Assessed. Communication ability? Reflected in Peer Signal. Genuine interest? They connected their SkillPass profile. You've already got your answers.",
      features: [
        { title: "Credential confirmation", description: "The phone screen's #1 job — 'do you really have X?' — is handled by verified Academic and certification data." },
        { title: "Skill level assessment", description: "Assessed Ability sub-score tells you more about actual skills than any 30-minute conversation could." },
        { title: "Communication signal", description: "Peer Signal captures how colleagues rate this person's collaboration and communication. Not a recruiter's gut read." },
        { title: "Interest confirmation", description: "Connecting a SkillPass profile to your role is a higher-intent signal than showing up for a phone screen." },
      ],
    },
    proof: {
      headline: "They stopped screening. Interviews got better.",
      testimonial: {
        quote: "We eliminated phone screens in February. Our recruiters were terrified. By April, interview quality went up because we were only putting pre-verified candidates in front of hiring managers. Nobody wants the screens back.",
        name: "Aisha Patel",
        role: "Recruiting Operations Lead",
        detail: "Cloud infrastructure company, 450 employees",
      },
      stats: [
        { value: "7.5 hrs", label: "Saved per recruiter per week" },
        { value: "91%", label: "Interview-to-offer rate (up from 38%)" },
        { value: "$189K", label: "Annual recruiter time savings" },
        { value: "0", label: "Mis-hires from skipping screens" },
      ],
    },
    cta: {
      headline: "Nobody likes phone screens.",
      gradientText: "Including your candidates.",
      description: "Replace the most hated step in recruiting with a verified score. Your recruiters will thank you. Your candidates will too.",
      primaryCta: { text: "Kill the phone screen", href: "/employers/signup" },
      secondaryCta: { text: "See the time savings", href: "/roi-calculator" },
    },
  },

  // 9
  {
    slug: "verified-not-liars",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Verified Credentials, Not Self-Reported Claims | SkillPass",
      description:
        "Fake credentials cost employers $600B annually. SkillPass verifies every academic record, certification, peer review, and assessment before you see it.",
    },
    hero: {
      badge: "Credential Verification",
      headline: "Fake credentials are a",
      gradientText: "$600B problem.",
      subheadline:
        "Over half of candidates exaggerate something on their resume. 30% fabricate entirely. You find out months later — after the damage is done. SkillPass verifies everything before you even see the candidate.",
      primaryCta: { text: "Get verified candidates only", href: "/employers/signup" },
      secondaryCta: { text: "See how verification works", href: "/how-it-works" },
      trustLine: "4,000+ institutions and 200+ certification bodies in our verification network",
    },
    problem: {
      badge: "Trust, but can't verify",
      headline: "You're trusting strangers",
      gradientText: "to tell the truth about themselves.",
      description:
        "Every resume is a self-reported document. There's no verification layer, no audit trail, and no penalty for lying. Candidates know this. And the rise of AI-generated resumes made fabrication effortless.",
      stats: [
        { value: "54%", label: "Candidates who exaggerate on resumes", description: "Checkster data. More than half of the people you're evaluating are lying about something material." },
        { value: "29%", label: "Who fabricate credentials entirely", description: "HireRight reports nearly a third of background checks reveal outright fabrication of degrees or certifications." },
        { value: "$600B", label: "Annual cost of credential fraud (US)", description: "Association of Certified Fraud Examiners. Fake qualifications lead to bad hires, failed projects, and regulatory fines." },
      ],
    },
    solution: {
      badge: "Verification, not honor system",
      headline: "Every data point checked",
      gradientText: "before you see it.",
      description:
        "SkillPass doesn't ask candidates to report their own qualifications. We pull data directly from institutions, employers, assessment platforms, and peer reviewers. If it's in the SkillScore, it's been confirmed.",
      features: [
        { title: "Institutional data pull", description: "Transcripts verified directly with 4,000+ universities and colleges. Not a PDF the candidate uploaded — a confirmed record." },
        { title: "Certification verification", description: "200+ certification bodies integrated. We confirm active status, issue dates, and expiration — not just 'they claim to have it.'" },
        { title: "Peer Signal authentication", description: "Peer reviewers are identity-verified and cross-referenced against employment records. No sock-puppet endorsements." },
        { title: "Assessment integrity", description: "All Assessed Ability scores come from proctored, time-limited tests. No take-home cheat-sheet situations." },
      ],
    },
    proof: {
      headline: "Zero fabricated credentials slipped through",
      testimonial: {
        quote: "We caught a VP candidate last quarter who claimed an MBA from Wharton. Didn't have one. Before SkillPass, we wouldn't have checked until after the offer. The cost of that near-miss? Incalculable.",
        name: "Rebecca Thornton",
        role: "Chief Human Resources Officer",
        detail: "Financial services firm, 3,100 employees",
      },
      stats: [
        { value: "0", label: "Fabricated credentials missed" },
        { value: "12%", label: "Applicants flagged for discrepancies" },
        { value: "100%", label: "Academic records verified at source" },
        { value: "$2.1M", label: "Estimated fraud-related savings (year 1)" },
      ],
    },
    cta: {
      headline: "Trust is not a hiring strategy.",
      gradientText: "Verification is.",
      description: "Every candidate in SkillPass is verified at the source. No self-reporting. No honor system. Just confirmed data.",
      primaryCta: { text: "Start hiring verified", href: "/employers/signup" },
      secondaryCta: { text: "See our verification process", href: "/how-it-works" },
    },
  },

  // 10
  {
    slug: "hire-signal-not-keywords",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Hire for Skills, Not Resume Keywords | SkillPass",
      description:
        "Keyword matching rejects 75% of qualified candidates. SkillPass evaluates actual verified skills — academics, assessments, peer reviews, and performance — not SEO tricks.",
    },
    hero: {
      badge: "Skills Over Keywords",
      headline: "Skills beat",
      gradientText: "resume optimization.",
      subheadline:
        "Your ATS rewards candidates who game keyword density. The best engineer in your applicant pool might get auto-rejected because they wrote 'built distributed systems' instead of 'Kubernetes.' SkillPass evaluates skill, not SEO.",
      primaryCta: { text: "Hire for actual skills", href: "/employers/signup" },
      secondaryCta: { text: "See skills-based search", href: "/demo" },
      trustLine: "SkillPass surfaces 3.4x more qualified candidates than keyword-based screening",
    },
    problem: {
      badge: "Keywords aren't skills",
      headline: "You're hiring whoever is best",
      gradientText: "at gaming your ATS.",
      description:
        "Resume optimization is a $2B industry. Candidates pay for keyword-stuffed templates, AI rewriting, and ATS-friendly formatting. The winners aren't the most skilled — they're the best at search engine optimization for your applicant tracking system.",
      stats: [
        { value: "75%", label: "Qualified candidates rejected by keyword filters", description: "Harvard/Accenture research. Three out of four people who could do the job are auto-rejected." },
        { value: "$2B", label: "Resume optimization industry", description: "That's how much money candidates spend trying to trick your system. Your hiring is now an adversarial game." },
        { value: "6 sec", label: "Impact of keyword mismatches", description: "One missing buzzword can mean instant rejection. Your ATS doesn't understand synonyms, context, or actual ability." },
      ],
    },
    solution: {
      badge: "Signal over syntax",
      headline: "Evaluate what candidates can do.",
      gradientText: "Not what they wrote.",
      description:
        "SkillPass doesn't parse resumes for keywords. It evaluates verified data: academic transcripts, peer reviews, proctored assessments, and performance records. The candidate who 'built distributed systems' and the one who 'managed Kubernetes clusters' are evaluated on actual ability, not phrasing.",
      features: [
        { title: "Skills-based search", description: "Search your candidate pool by verified skill areas, not keyword strings. Find everyone who can actually do the work." },
        { title: "Synonym-proof evaluation", description: "The SkillScore doesn't care what words they used. It cares whether their skills are verified and at what level." },
        { title: "Custom skill weighting", description: "Define which skills matter most for each role. SkillPass weights sub-scores accordingly and re-ranks your pool." },
        { title: "Anti-gaming by design", description: "You can't optimize your way to a higher SkillScore. It's built from verified third-party data, not self-reported text." },
      ],
    },
    proof: {
      headline: "They found candidates the ATS had buried",
      testimonial: {
        quote: "We re-evaluated 200 applicants our ATS had rejected. SkillPass flagged 34 as strong matches. We hired 6 of them. They're outperforming the candidates we hired through keyword screening.",
        name: "Derek Washington",
        role: "Head of Technical Recruiting",
        detail: "Enterprise software company, 1,800 employees",
      },
      stats: [
        { value: "34", label: "Strong candidates rescued from rejection" },
        { value: "6", label: "Hires from previously rejected pool" },
        { value: "3.4x", label: "More qualified candidates surfaced" },
        { value: "0", label: "Keyword-matching false positives" },
      ],
    },
    cta: {
      headline: "The best candidates don't optimize resumes.",
      gradientText: "They're too busy being good at their job.",
      description: "Stop screening for keywords. Start screening for verified skills. Your first search is free.",
      primaryCta: { text: "Search by skills", href: "/employers/signup" },
      secondaryCta: { text: "See a skills-based search", href: "/demo" },
    },
  },

  // 11
  {
    slug: "diversity-no-compromise",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Diverse Shortlists Without Compromising on Quality | SkillPass",
      description:
        "Inclusive hiring doesn't mean lowering the bar. SkillPass evaluates verified skills — not school names, ZIP codes, or network size — so your shortlists reflect actual ability.",
    },
    hero: {
      badge: "Inclusive Hiring",
      headline: "Inclusive shortlists where",
      gradientText: "skills speak louder than pedigree.",
      subheadline:
        "Traditional screening filters on school name, company pedigree, and network connections — all proxies that correlate more with background than ability. SkillPass evaluates verified skills. Period. The result is naturally more diverse shortlists without sacrificing quality.",
      primaryCta: { text: "Build better shortlists", href: "/employers/signup" },
      secondaryCta: { text: "See the methodology", href: "/demo" },
      trustLine: "SkillPass employers report 41% more diverse shortlists with higher average quality scores",
    },
    problem: {
      badge: "The proxy problem",
      headline: "You're screening for background,",
      gradientText: "not ability.",
      description:
        "When you filter by school tier, previous employer prestige, or years of experience at specific companies, you're using proxies. Those proxies correlate with privilege, not skill. And you're missing exceptional talent from non-traditional backgrounds.",
      stats: [
        { value: "41%", label: "Qualified diverse candidates filtered out", description: "McKinsey research. Traditional screening eliminates nearly half of qualified candidates from underrepresented backgrounds." },
        { value: "67%", label: "Bias traced to resume screening stage", description: "NAS study. Two-thirds of hiring bias enters during the initial resume review — before anyone talks to the candidate." },
        { value: "$16B", label: "Annual cost of homogeneous hiring", description: "McKinsey estimates companies in the bottom quartile for diversity underperform by 27% on profitability." },
      ],
    },
    solution: {
      badge: "Skills, not proxies",
      headline: "Evaluate what they can do.",
      gradientText: "Not where they came from.",
      description:
        "SkillPass scores don't include school name, employer pedigree, or demographic information. The four sub-scores — Academic performance, Peer Signal, Performance history, and Assessed Ability — measure ability. Nothing else.",
      features: [
        { title: "Blind-by-default scoring", description: "SkillScores don't factor in institution prestige, company names, or demographics. A 750 from a community college and a 750 from Harvard mean the same thing." },
        { title: "Verified potential, not pedigree", description: "A candidate from a non-target school with a 780 Assessed Ability score is exactly that skilled. The verification doesn't care about brand names." },
        { title: "Shortlist diversity reporting", description: "See diversity metrics on your shortlists alongside quality scores. Prove that inclusive hiring and high standards aren't at odds." },
        { title: "Audit-ready process", description: "Every hiring decision has a clear, documented, skill-based rationale. No subjective 'culture fit' handwaving." },
      ],
    },
    proof: {
      headline: "More diverse. Higher performing. Both.",
      testimonial: {
        quote: "We told our board we could improve diversity without lowering quality. They were skeptical. After one year on SkillPass, diverse representation in new hires increased 41% and average performance review scores went up 12%. Both. At the same time.",
        name: "Monica Vasquez",
        role: "VP of Diversity & Talent",
        detail: "Tech enterprise, 5,200 employees",
      },
      stats: [
        { value: "41%", label: "More diverse shortlists" },
        { value: "12%", label: "Higher avg. performance reviews" },
        { value: "0", label: "Quality compromises" },
        { value: "100%", label: "OFCCP audit-ready" },
      ],
    },
    cta: {
      headline: "Diversity and quality aren't trade-offs.",
      gradientText: "They never were.",
      description: "When you evaluate verified skills instead of proxies, the shortlist gets more diverse and more qualified. See it for yourself.",
      primaryCta: { text: "Build inclusive shortlists", href: "/employers/signup" },
      secondaryCta: { text: "Read our DEI methodology", href: "/research" },
    },
  },

  // 12
  {
    slug: "skillscore-replaces-3-rounds",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillScore Replaces 3 Interview Rounds — Here's the Mapping | SkillPass",
      description:
        "Phone screen, take-home assessment, and reference check — three stages that SkillScore's four sub-scores already cover. Eliminate them and interview smarter.",
    },
    hero: {
      badge: "Interview Compression",
      headline: "One score maps to",
      gradientText: "three interview stages.",
      subheadline:
        "The phone screen checks qualifications. The take-home tests ability. The reference check validates character. SkillScore's four verified sub-scores already cover all three — before the first interview is even scheduled.",
      primaryCta: { text: "Compress your interviews", href: "/employers/signup" },
      secondaryCta: { text: "See the stage mapping", href: "/demo" },
      trustLine: "SkillPass employers average 2 interview rounds, down from 5",
    },
    problem: {
      badge: "Interview bloat",
      headline: "Five rounds of interviews.",
      gradientText: "Three of them are redundant.",
      description:
        "Your process has a phone screen, a technical assessment, a behavioral interview, a panel, and a reference check. The first three are all trying to answer the same question: can this person actually do the job? You're asking it three times because no single source gives you a trusted answer.",
      stats: [
        { value: "5.2", label: "Average interview rounds (tech industry)", description: "Glassdoor data. Each round adds 5–8 days to your timeline and costs $200–$500 in coordination." },
        { value: "24 hrs", label: "Candidate time per full interview loop", description: "Prep time, travel, interviews, take-homes. Candidates are exhausted by round 3. Your best ones just stop showing up." },
        { value: "$1,400", label: "Company cost per interview round", description: "Interviewer time, room booking, scheduling coordination, scoring. Multiply by 5 rounds. Per candidate." },
      ],
    },
    solution: {
      badge: "The mapping",
      headline: "SkillScore sub-scores replace",
      gradientText: "what these rounds are trying to learn.",
      description:
        "Here's the direct mapping: Academic sub-score replaces degree verification. Assessed Ability replaces the take-home or technical screen. Peer Signal replaces reference checks. Performance sub-score replaces the behavioral round's backward-looking questions.",
      features: [
        { title: "Academic → Degree verification round", description: "Verified transcripts from 4,000+ institutions. No need for a phone screen to confirm they have the degree." },
        { title: "Assessed Ability → Technical screen / take-home", description: "Proctored assessment results that map to role-specific skills. More rigorous than a 90-minute take-home with Google open." },
        { title: "Peer Signal → Reference check", description: "Identity-verified peer reviews from actual colleagues. More comprehensive than three 5-minute phone calls." },
        { title: "Performance → Behavioral round", description: "Verified performance history from past roles. 'Tell me about a time' questions aren't needed when you have actual data." },
      ],
    },
    proof: {
      headline: "From 5 rounds to 2. Better results.",
      testimonial: {
        quote: "We mapped our interview stages to SkillScore sub-scores and realized three rounds were just re-verifying things the score already covered. We cut to a single technical deep-dive and a team fit conversation. Candidate satisfaction tripled.",
        name: "Chris Nakamura",
        role: "VP of Engineering",
        detail: "DevOps platform, 280 employees",
      },
      stats: [
        { value: "2", label: "Interview rounds (from 5)" },
        { value: "3x", label: "Candidate satisfaction score" },
        { value: "18 days", label: "Faster time-to-hire" },
        { value: "$4,200", label: "Saved per candidate loop" },
      ],
    },
    cta: {
      headline: "Map your interview stages",
      gradientText: "to SkillScore sub-scores.",
      description: "Most companies find 2–3 redundant rounds once they see the mapping. We'll walk you through it for your specific process.",
      primaryCta: { text: "Map your process", href: "/employers/signup" },
      secondaryCta: { text: "Get a process audit", href: "/contact" },
    },
  },

  // 13
  {
    slug: "roi-verified-credentials",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "ROI of Verified Credentials — Full Business Case | SkillPass",
      description:
        "Build the business case for SkillPass. Full cost modeling for verified credential screening — time saved, bad hires avoided, vendor consolidation, and compliance value.",
    },
    hero: {
      badge: "Business Case",
      headline: "The full business case",
      gradientText: "with cost modeling.",
      subheadline:
        "Your CFO wants numbers. Your CHRO wants outcomes. Your legal team wants compliance. Here's the complete ROI model for verified credential screening — every cost category, every savings line, every risk reduction metric.",
      primaryCta: { text: "Build your business case", href: "/roi-calculator" },
      secondaryCta: { text: "Download the template", href: "/resources/roi-template" },
      trustLine: "Average SkillPass ROI: 4.2x in year one across 50+ employers",
    },
    problem: {
      badge: "The cost of guessing",
      headline: "Unverified hiring is expensive.",
      gradientText: "The bill just arrives late.",
      description:
        "Every bad hire, every extended timeline, every wrongful termination lawsuit, every regulatory fine — they all trace back to the same root cause: you made a decision based on unverified information.",
      stats: [
        { value: "$31K", label: "Average bad hire cost", description: "DOL data. Salary, training, severance, re-hiring costs. For senior roles, multiply by 2–3x." },
        { value: "$285K", label: "Average credential fraud lawsuit", description: "When a hire's fake credentials lead to regulatory violations, the legal costs dwarf the hiring costs." },
        { value: "3.2 months", label: "Time to discover a bad hire", description: "You don't find out the hire was wrong for 100 days. That's 100 days of lost productivity plus the ramp for their replacement." },
      ],
    },
    solution: {
      badge: "The full ROI model",
      headline: "Every dollar, every risk,",
      gradientText: "every line item.",
      description:
        "We built a comprehensive ROI model with four cost categories. Plug in your hiring volume, average salary, and current costs. The model calculates your specific savings — not generic industry averages.",
      features: [
        { title: "Direct cost savings", description: "Screening time reduction, assessment vendor consolidation, background check elimination. Tangible, measurable, immediate." },
        { title: "Indirect cost savings", description: "Faster time-to-fill reduces empty-seat costs. Better quality of hire reduces turnover. Both hit your bottom line within 6 months." },
        { title: "Risk reduction value", description: "Credential fraud avoidance, regulatory compliance, wrongful termination risk reduction. Your legal team will appreciate this section." },
        { title: "Opportunity cost recovery", description: "Recruiter time freed for sourcing. Hiring manager time freed for actual management. Hard to quantify, impossible to ignore." },
      ],
    },
    proof: {
      headline: "The CFO signed off in one meeting",
      testimonial: {
        quote: "I brought the SkillPass ROI model to our budget review. The CFO looked at the bad-hire cost reduction alone and approved it on the spot. We didn't even get to the time savings slide.",
        name: "Patricia Owens",
        role: "Director of Talent Strategy",
        detail: "Manufacturing company, 4,500 employees",
      },
      stats: [
        { value: "4.2x", label: "Average first-year ROI" },
        { value: "6 weeks", label: "Time to positive ROI" },
        { value: "89%", label: "CFO approval on first presentation" },
        { value: "$1.4M", label: "Average annual savings (500+ employees)" },
      ],
    },
    cta: {
      headline: "Your CFO wants numbers.",
      gradientText: "Here they are.",
      description: "Download the ROI template or use our interactive calculator. Customize it with your company's data and present it tomorrow.",
      primaryCta: { text: "Use the ROI calculator", href: "/roi-calculator" },
      secondaryCta: { text: "Download PDF template", href: "/resources/roi-template" },
    },
  },

  // 14
  {
    slug: "50-employers-switched",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "50+ Employers Switched to SkillPass — Here's Why | SkillPass",
      description:
        "Over 50 employers moved to verified credential screening with SkillPass. See their reasons, their results, and the patterns across industries and company sizes.",
    },
    hero: {
      badge: "Social Proof",
      headline: "50+ employers.",
      gradientText: "Here's why they switched.",
      subheadline:
        "Not a generic 'trusted by leading companies' badge. Real reasons, real numbers, and real patterns from 50+ employers who were sick of broken screening and made the switch to verified SkillScores.",
      primaryCta: { text: "Join them", href: "/employers/signup" },
      secondaryCta: { text: "Read the case studies", href: "/case-studies" },
      trustLine: "From 50-person startups to 5,000+ employee enterprises",
    },
    problem: {
      badge: "They all hit the same wall",
      headline: "Different companies.",
      gradientText: "Same breaking point.",
      description:
        "We surveyed every employer who signed up in year one. The trigger was remarkably consistent: a single bad hire, an overwhelmed recruiting team, or a lost candidate to a faster competitor. The problem is universal. The details differ.",
      stats: [
        { value: "73%", label: "Triggered by a costly bad hire", description: "The majority signed up after a specific bad hire forced a reckoning. One wrong person, one expensive lesson." },
        { value: "61%", label: "Had tried other assessment tools first", description: "Most employers didn't start with SkillPass. They tried separate assessment vendors, skills tests, and reference platforms. None worked alone." },
        { value: "89%", label: "Said broken screening was their #1 pain", description: "Not sourcing. Not closing. Screening. The step where you separate signal from noise was the universal bottleneck." },
      ],
    },
    solution: {
      badge: "What they switched to",
      headline: "One platform. Four verified signals.",
      gradientText: "Fifty reasons it works.",
      description:
        "Every employer who switched replaced 2–4 separate tools with SkillPass. The common thread: they wanted one trusted score that combined everything, not five fragmented data points they had to reconcile manually.",
      features: [
        { title: "Consolidated vendor stack", description: "Most employers replaced a skills assessment tool, a reference check platform, and a background check service. One subscription, not three." },
        { title: "Faster time-to-value", description: "Average setup: 2 hours. First scored candidate: same day. First hire using SkillPass: under 2 weeks." },
        { title: "Scales with hiring volume", description: "50-person startup or 5,000-employee enterprise. Same platform. Pricing scales with your needs ($299–$799+/mo)." },
        { title: "Industry-agnostic signal", description: "Tech, healthcare, finance, manufacturing, professional services. Verified skills are verified skills. The sub-score weights are what you customize." },
      ],
    },
    proof: {
      headline: "Patterns across 50+ employers",
      testimonial: {
        quote: "We were vendor #4 on their assessment stack. Now we're their only one. That keeps happening because none of the others verify anything — they just add more tests. We verify the person.",
        name: "SkillPass Customer Success Team",
        role: "Aggregate insight",
        detail: "Based on 50+ employer onboarding interviews",
      },
      stats: [
        { value: "50+", label: "Employers on platform" },
        { value: "97%", label: "Year-one retention rate" },
        { value: "2.7", label: "Average vendors replaced" },
        { value: "4,000+", label: "Institutions in verification network" },
      ],
    },
    cta: {
      headline: "Fifty companies already figured this out.",
      gradientText: "Your move.",
      description: "Start with a free pilot on one role. See your results. Then decide. That's what 50+ other companies did — and 97% stayed.",
      primaryCta: { text: "Start your pilot", href: "/employers/signup" },
      secondaryCta: { text: "Read customer stories", href: "/case-studies" },
    },
  },

  // 15
  {
    slug: "fastest-pipeline",
    category: "employer-usecase",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Search, Score, Shortlist, Offer — The Fastest Hiring Pipeline | SkillPass",
      description:
        "Four steps. Sixteen days. Speed wins the talent war. SkillPass gives you the fastest pipeline from job posting to signed offer — without cutting corners on quality.",
    },
    hero: {
      badge: "Speed Pipeline",
      headline: "Search, score, shortlist, offer.",
      gradientText: "Speed wins.",
      subheadline:
        "The company that moves fastest gets the best people. Not the company with the best brand, the highest salary, or the nicest office. The fastest one. SkillPass gives you a four-step pipeline that compresses weeks into days.",
      primaryCta: { text: "Build the fastest pipeline", href: "/employers/signup" },
      secondaryCta: { text: "See the four steps", href: "/demo" },
      trustLine: "Fastest SkillPass hire: 6 days from posting to signed offer",
    },
    problem: {
      badge: "Speed is the new currency",
      headline: "Your pipeline has 12 steps.",
      gradientText: "Your competitor's has 4.",
      description:
        "Post, source, screen, phone screen, tech screen, take-home, debrief, panel, second panel, reference check, offer committee, offer. Every step exists because you don't trust the previous one. SkillPass gives you trust in step one.",
      stats: [
        { value: "12", label: "Avg. hiring pipeline steps", description: "Josh Bersin research. Twelve steps, each adding 2–5 days. No wonder it takes 42 days." },
        { value: "3.7x", label: "Candidate loss from slow pipelines", description: "Candidates who experience a slow process are 3.7x more likely to withdraw. CareerBuilder data." },
        { value: "$680/day", label: "Cost of each additional day", description: "Per Oxford Economics. Every unnecessary step in your pipeline is a $680 bet that didn't pay off." },
      ],
    },
    solution: {
      badge: "The four-step pipeline",
      headline: "Four steps. Sixteen days.",
      gradientText: "Consistently.",
      description:
        "Search your candidate pool by verified SkillScores. Score and rank them automatically. Shortlist the top tier with one click. Interview and offer within the week. That's it.",
      features: [
        { title: "Step 1 — Search", description: "Search by skill area, minimum SkillScore, sub-score emphasis, location, and availability. Get results in seconds, not days." },
        { title: "Step 2 — Score", description: "Every candidate is already scored. Sort by overall SkillScore or by specific sub-scores that matter for this role." },
        { title: "Step 3 — Shortlist", description: "One-click shortlisting with comparison view. Side-by-side sub-score breakdowns for your top 5–10 candidates." },
        { title: "Step 4 — Offer", description: "Skip the redundant rounds. One depth interview, one team conversation, one offer. Candidates love the speed. Your close rate proves it." },
      ],
    },
    proof: {
      headline: "Six days from posting to signed offer",
      testimonial: {
        quote: "We posted a senior role on Monday. By Thursday, we'd interviewed three pre-verified candidates. Friday, we made an offer. It was accepted Monday morning. Six business days. Our previous average was 38.",
        name: "Kenji Tanaka",
        role: "CTO",
        detail: "AI startup, 90 employees",
      },
      stats: [
        { value: "6 days", label: "Fastest time-to-hire" },
        { value: "16 days", label: "Average time-to-hire" },
        { value: "4 steps", label: "Total pipeline stages" },
        { value: "94%", label: "Offer acceptance rate" },
      ],
    },
    cta: {
      headline: "In hiring, speed isn't reckless.",
      gradientText: "Slow is.",
      description: "Build the fastest pipeline in your industry. Search, score, shortlist, offer. Your first search is free — see how fast you can move.",
      primaryCta: { text: "Start searching", href: "/employers/signup" },
      secondaryCta: { text: "See the pipeline demo", href: "/demo" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // PROBLEM PAGES (16–31) — audience: all, funnel: tofu
  // ═══════════════════════════════════════════════════════════════

  // 16
  {
    slug: "ghosting-after-interviews",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Ghosted After 15 Hours of Interviews? The Hiring Process Is Broken | SkillPass",
      description:
        "You spent 15 hours interviewing — prep, travel, tests, panels. They never called back. Here's why the process is broken and what replaces it.",
    },
    hero: {
      badge: "Broken Process",
      headline: "You spent 15 hours interviewing.",
      gradientText: "They never called back.",
      subheadline:
        "Phone screen, technical test, take-home project, panel interview, second panel. You cleared every hurdle. Then silence. Ghosting isn't just rude — it's a symptom of a hiring system that doesn't respect anyone's time.",
      primaryCta: { text: "See a better way", href: "/signup" },
      secondaryCta: { text: "Why this happens", href: "#problem" },
      trustLine: "77% of candidates report being ghosted after completing a full interview loop",
    },
    problem: {
      badge: "The ghosting epidemic",
      headline: "Companies ghost because",
      gradientText: "they can't decide.",
      description:
        "Ghosting isn't malicious. It's structural. When companies don't have clear, data-backed evaluation criteria, decisions stall. Hiring committees can't agree. HR buries the no-decision under 'we'll be in touch.' You never hear back.",
      stats: [
        { value: "77%", label: "Candidates ghosted after interviews", description: "Indeed survey. More than 3 in 4 job seekers have been ghosted after completing multiple interview rounds." },
        { value: "15 hrs", label: "Average candidate time investment", description: "Prep, travel, test completion, and interviews. Per Glassdoor, that's the average for a multi-stage process." },
        { value: "23 days", label: "Average silence before giving up", description: "Candidates wait over three weeks before accepting they've been ghosted. That's three weeks of limbo." },
      ],
    },
    solution: {
      badge: "What if the data was clear from the start?",
      headline: "When the signal is verified,",
      gradientText: "decisions are faster.",
      description:
        "SkillPass eliminates decision paralysis. Every candidate comes with a verified SkillScore — Academic, Peer Signal, Performance, and Assessed Ability. Hiring committees agree faster because they're looking at data, not debating vibes.",
      features: [
        { title: "Clear decision criteria", description: "SkillScores give hiring teams shared, objective data. No more 'I liked them but I'm not sure' — the numbers speak." },
        { title: "Faster pipeline, less ghosting", description: "When companies hire in 16 days instead of 42, there's no window for ghosting. The answer comes fast." },
        { title: "For talent: your score travels", description: "Build your SkillScore once. Share it everywhere. No more repeating 15-hour interview loops for every company." },
        { title: "For employers: respect the process", description: "When you can decide in days, not weeks, you can actually respond to every candidate. Ghosting is a speed problem." },
      ],
    },
    proof: {
      headline: "Both sides of the problem, one solution",
      testimonial: {
        quote: "I did four rounds at two different companies last year. Both ghosted me. When I found SkillPass, I built my profile once and three companies reached out with concrete offers within two weeks. No phone screens, no disappearing acts.",
        name: "Jordan Ellis",
        role: "Senior Data Analyst",
        detail: "Active SkillPass profile, score: 742",
      },
      stats: [
        { value: "3 days", label: "Avg. employer response time on SkillPass" },
        { value: "0%", label: "Ghosting rate on SkillPass" },
        { value: "89%", label: "Candidates hear back within 1 week" },
        { value: "16 days", label: "Avg. time-to-offer" },
      ],
    },
    cta: {
      headline: "You deserve an answer.",
      gradientText: "Get one in days, not never.",
      description: "Whether you're hiring or job searching, SkillPass replaces the broken loop with verified signal and fast decisions.",
      primaryCta: { text: "Build your SkillScore", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 17
  {
    slug: "hidden-cost-screens",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "The Hidden Cost of Screening — Waste on Both Sides | SkillPass",
      description:
        "Employers spend $4,700 per hire on screening. Candidates spend 15+ hours per application. Both sides are losing. Here's the full cost nobody talks about.",
    },
    hero: {
      badge: "Hidden Costs",
      headline: "Screening wastes everyone's time.",
      gradientText: "Here's exactly how much.",
      subheadline:
        "Employers spend thousands per hire on screening steps that mostly produce false signals. Candidates spend dozens of hours proving the same things over and over. The entire system is an expensive, slow, frustrating tax on hiring. We quantified it.",
      primaryCta: { text: "See a better system", href: "/signup" },
      secondaryCta: { text: "Read the breakdown", href: "#problem" },
      trustLine: "Combined screening waste: $8,300 per hire (employer + candidate costs)",
    },
    problem: {
      badge: "The two-sided drain",
      headline: "It costs both sides",
      gradientText: "more than anyone admits.",
      description:
        "For employers, it's recruiter hours, assessment licensing, and coordination overhead. For candidates, it's unpaid test time, interview prep, and opportunity cost. Both sides pay. Neither benefits.",
      stats: [
        { value: "$4,700", label: "Employer-side cost per hire (direct)", description: "SHRM benchmark. Job boards, ATS tools, background checks, and recruiter hours. Just the visible costs." },
        { value: "$3,600", label: "Candidate-side cost per job application", description: "Lost wages from interview time, test prep materials, travel, and opportunity cost. CareerBuilder/Glassdoor estimates." },
        { value: "68%", label: "Screening steps that produce no useful signal", description: "Internal SkillPass analysis. Most screening is verification theater — checking what could be confirmed automatically." },
      ],
    },
    solution: {
      badge: "What if screening wasn't screening?",
      headline: "Verify once.",
      gradientText: "Use everywhere.",
      description:
        "The waste exists because every company re-verifies the same things. SkillPass verifies once — academics, assessments, peer reviews, performance — and creates a portable score. Employers get signal instantly. Candidates stop repeating themselves.",
      features: [
        { title: "For employers: instant signal", description: "Every applicant arrives pre-scored. No phone screens, no redundant assessments. Start at the conversation stage." },
        { title: "For candidates: verify once", description: "Build your SkillScore from verified sources. Share it with every employer. No more 15-hour loops per application." },
        { title: "Assessment consolidation", description: "One verified SkillScore replaces 2–3 separate assessment tools, reference check services, and background check vendors." },
        { title: "Real-time ROI", description: "Track exact time and money saved per hire. The math is transparent and specific to your company." },
      ],
    },
    proof: {
      headline: "Both sides save",
      testimonial: {
        quote: "As a hiring manager, I used to spend 4 hours per week just on screening calls. As someone who job-searched last year, I spent 60 hours on interviews for a single offer. Both experiences are broken. SkillPass fixes both.",
        name: "Ryan Cho",
        role: "Engineering Manager (and recent job changer)",
        detail: "SaaS company, 340 employees",
      },
      stats: [
        { value: "$8,300", label: "Total savings per hire (both sides)" },
        { value: "70%", label: "Less employer screening time" },
        { value: "80%", label: "Less candidate interview time" },
        { value: "2–3", label: "Vendors typically replaced" },
      ],
    },
    cta: {
      headline: "Screening should verify, not waste.",
      gradientText: "Stop paying the hidden tax.",
      description: "Whether you're the one hiring or the one applying, the screening tax is costing you. SkillPass eliminates it for both sides.",
      primaryCta: { text: "Get started free", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 18
  {
    slug: "300-500-pct-more-apps",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "300–500% More Applications, Same Headcount — Now What? | SkillPass",
      description:
        "AI tools made it trivially easy to apply everywhere. Your applicant pool grew 300–500% but your recruiting team didn't. Here's what to do about the deluge.",
    },
    hero: {
      badge: "The Application Flood",
      headline: "Same headcount. 5x the applications.",
      gradientText: "Now what?",
      subheadline:
        "AI tools made it trivially easy to mass-apply to hundreds of jobs at once. Your recruiting team is the same size it was two years ago. The math doesn't work. You need a filter that actually filters.",
      primaryCta: { text: "Get a real filter", href: "/signup" },
      secondaryCta: { text: "See the data", href: "#problem" },
      trustLine: "SkillPass employers process 5x applicant volume with the same team size",
    },
    problem: {
      badge: "The deluge",
      headline: "AI didn't help hiring.",
      gradientText: "It broke the funnel.",
      description:
        "Tools like LazyApply, AutoApply, and ChatGPT let candidates blast 500 tailored applications in an afternoon. Each one looks legitimate. Your ATS can't tell the difference between a genuine match and a mass-apply spray.",
      stats: [
        { value: "300–500%", label: "Application volume increase (2024–2026)", description: "Greenhouse and Lever data. The average job posting gets 3–5x more applications than it did two years ago." },
        { value: "71%", label: "Applications from AI mass-apply tools", description: "Employer survey data. Nearly three-quarters of incoming applications were generated by automated tools." },
        { value: "0%", label: "Recruiting headcount increase", description: "Most companies didn't add recruiters. They just asked existing teams to process 5x the volume. That's not sustainable." },
      ],
    },
    solution: {
      badge: "A filter for the flood",
      headline: "Volume doesn't matter",
      gradientText: "when you have signal.",
      description:
        "SkillPass scores every applicant with verified data — not resume keywords. It doesn't matter if they applied with a one-click tool or spent three hours on a cover letter. The SkillScore reflects their actual, verified ability.",
      features: [
        { title: "Volume-proof scoring", description: "10 applications or 10,000 — every one gets a SkillScore. Your team only looks at the ones above your threshold." },
        { title: "Mass-apply resistant", description: "SkillScores come from verified data sources. You can't mass-produce a verified academic record or fake a peer review." },
        { title: "Automatic triage", description: "Set score cutoffs by role. High-volume applications get auto-sorted. Your team focuses on real candidates." },
        { title: "Zero additional headcount", description: "Process 5x the volume with the same team. The scoring is automatic. The filtering is instant." },
      ],
    },
    proof: {
      headline: "5x the applications, same team, better hires",
      testimonial: {
        quote: "We went from 200 applications per role to over 1,100 in six months. We were drowning. SkillPass auto-scored them all and our recruiters just looked at the top 50. Same team, no overtime, better hires.",
        name: "Megan Trask",
        role: "Head of Talent",
        detail: "Consumer tech, 220 employees",
      },
      stats: [
        { value: "1,100", label: "Applications per role (post-AI)" },
        { value: "50", label: "Reviewed by recruiters (top scores)" },
        { value: "0", label: "Additional recruiters needed" },
        { value: "3.2x", label: "Better quality of hire" },
      ],
    },
    cta: {
      headline: "The flood isn't stopping.",
      gradientText: "Your filter needs to keep up.",
      description: "Whether you're drowning in applications or trying to stand out in a sea of AI-generated resumes, SkillPass cuts through the noise.",
      primaryCta: { text: "Cut through the noise", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 19
  {
    slug: "ai-writes-resumes",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "When AI Writes Every Resume, How Do You Stand Out? | SkillPass",
      description:
        "78% of resumes are now AI-assisted. Every candidate sounds perfect. Standing out requires verified proof of skill, not better prompting.",
    },
    hero: {
      badge: "The AI Resume Problem",
      headline: "When AI writes every resume,",
      gradientText: "how do you stand out?",
      subheadline:
        "ChatGPT, Jasper, Teal, Rezi — everyone's using AI to write the perfect resume. The result? Every resume is perfect. And when every resume is perfect, none of them tell you anything. The differentiator isn't writing anymore. It's verification.",
      primaryCta: { text: "Stand out with verified skills", href: "/signup" },
      secondaryCta: { text: "See the shift", href: "#problem" },
      trustLine: "SkillPass: the only profile that can't be AI-generated",
    },
    problem: {
      badge: "The homogeneity trap",
      headline: "Perfect resumes everywhere.",
      gradientText: "Zero differentiation.",
      description:
        "When AI writes every bullet point, optimizes every keyword, and formats every page — the resume becomes meaningless as a differentiator. Employers can't tell who's actually skilled. Candidates can't prove they're different.",
      stats: [
        { value: "78%", label: "AI-assisted resumes in 2025", description: "Jobscan data. Four out of five resumes you're reading were drafted, edited, or optimized by AI." },
        { value: "92%", label: "Recruiters who can't detect AI-written resumes", description: "Resume Genius study. Recruiters can't tell. Your screening is now evaluating AI output, not human ability." },
        { value: "$500M", label: "AI resume tool market (2025)", description: "The industry built to help candidates trick your screening is growing faster than your screening can adapt." },
      ],
    },
    solution: {
      badge: "The post-resume era",
      headline: "You can't fake",
      gradientText: "a verified SkillScore.",
      description:
        "AI can write a perfect resume. It can't generate a verified transcript, fake a peer review from a real colleague, or fabricate proctored assessment results. SkillPass is built on data sources that are immune to AI generation.",
      features: [
        { title: "For talent: prove you're real", description: "Your SkillScore is built from verified data only. It says 'this person actually has these skills' in a way a resume never could." },
        { title: "For employers: see through the noise", description: "Stop evaluating AI-written resumes. Start evaluating verified SkillScores from verified data sources." },
        { title: "Anti-AI by architecture", description: "Institutional transcripts, identity-verified peer reviews, proctored assessments. None of these can be AI-generated." },
        { title: "Portable proof", description: "Build your verified profile once. Share it with every employer. No more re-proving yourself with a new AI-polished resume each time." },
      ],
    },
    proof: {
      headline: "Standing out in the age of AI",
      testimonial: {
        quote: "I applied to 40 jobs with an AI-written resume. Got 3 interviews. Built my SkillPass profile with verified data. Got 7 inbound recruiter contacts in two weeks. The difference is proof vs. claims.",
        name: "Alicia Reeves",
        role: "Full-Stack Developer",
        detail: "SkillScore: 761, 3 years experience",
      },
      stats: [
        { value: "7x", label: "More recruiter contacts with verified profile" },
        { value: "0%", label: "AI-generatable content in SkillScore" },
        { value: "4,000+", label: "Institutions verifying data" },
        { value: "78%", label: "Of resumes that look the same" },
      ],
    },
    cta: {
      headline: "AI made resumes worthless.",
      gradientText: "Verification makes you valuable.",
      description: "Whether you're trying to find real talent or prove you are real talent, the resume era is over. Verified credentials are next.",
      primaryCta: { text: "Build your verified profile", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 20
  {
    slug: "4000-cost-per-hire",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Where $4,700 Per Hire Actually Goes — Full Cost Breakdown | SkillPass",
      description:
        "SHRM says $4,700 per hire. The real number is closer to $28K when you add hidden costs. Here's where every dollar goes — and which dollars are wasted.",
    },
    hero: {
      badge: "Cost Breakdown",
      headline: "Where $4K per hire",
      gradientText: "actually goes.",
      subheadline:
        "The SHRM average is $4,700 per hire. But that's just the visible spend — job boards, ATS fees, background checks. The real cost includes recruiter time, hiring manager hours, lost productivity, and the occasional bad hire that costs $31K. Let's trace every dollar.",
      primaryCta: { text: "See where you can cut", href: "/signup" },
      secondaryCta: { text: "Full breakdown below", href: "#problem" },
      trustLine: "SkillPass employers save an average of $12,400 per hire across all cost categories",
    },
    problem: {
      badge: "The full picture",
      headline: "The number your finance team sees",
      gradientText: "is half the real number.",
      description:
        "Direct costs are easy to track: $1,200 on job boards, $800 on ATS, $400 on background checks. But nobody tracks the 23 recruiter hours per hire, the 16 hiring manager hours per role, or the $680/day cost of the empty seat.",
      stats: [
        { value: "$4,700", label: "Visible cost per hire", description: "SHRM benchmark. Job boards, tools, and direct vendor fees. This is the line item finance approves." },
        { value: "$23,000", label: "Hidden cost per hire", description: "Recruiter salary allocation, hiring manager time, interview coordination, empty-seat productivity loss. Nobody budgets for this." },
        { value: "$28K+", label: "True total cost per hire", description: "Direct + hidden costs. For senior roles at larger companies, this number can reach $40K–$60K." },
      ],
    },
    solution: {
      badge: "Cut the waste, keep the process",
      headline: "You don't need to spend less.",
      gradientText: "You need to waste less.",
      description:
        "SkillPass doesn't ask you to hire cheaply. It eliminates the wasted spend — the screening hours on unqualified candidates, the assessment fees for tools that don't verify anything, the empty-seat days from a slow pipeline.",
      features: [
        { title: "Screening cost → near zero", description: "Pre-scored candidates mean your recruiters stop reading 500 resumes per role. That's $3,800 in time back." },
        { title: "Assessment vendor → consolidated", description: "Replace 2–3 separate assessment tools with one verified SkillScore. That's $2,200 in vendor fees eliminated." },
        { title: "Empty-seat cost → compressed", description: "16 days instead of 42 means 26 fewer days at $680/day. That's $17,680 in productivity recovered." },
        { title: "Bad-hire cost → dramatically reduced", description: "3x quality of hire means fewer $31K mistakes. Even preventing one bad hire per quarter changes your annual numbers." },
      ],
    },
    proof: {
      headline: "The money was there all along",
      testimonial: {
        quote: "We had no idea hiring was costing us $26K per head until we mapped every cost. The screening and assessment waste alone was $6K per hire. SkillPass cut that to under $800. The CFO couldn't believe the numbers.",
        name: "Lisa Huang",
        role: "VP of Finance & Operations",
        detail: "Biotech company, 700 employees",
      },
      stats: [
        { value: "$12,400", label: "Average savings per hire" },
        { value: "$6K→$800", label: "Screening/assessment cost reduction" },
        { value: "26 days", label: "Fewer empty-seat days" },
        { value: "71%", label: "Total cost-per-hire reduction" },
      ],
    },
    cta: {
      headline: "You're spending $28K per hire.",
      gradientText: "How much of it is waste?",
      description: "Use our cost calculator to map your actual per-hire spend — visible and hidden. Then see exactly where SkillPass cuts.",
      primaryCta: { text: "Map your costs", href: "/roi-calculator" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 21
  {
    slug: "reference-check-broken",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Reference Checks Are Broken — A 5-Minute Call Captures Nothing | SkillPass",
      description:
        "The modern reference check is a 5-minute call where nobody says anything real. Here's why reference checks are theater — and what actually works.",
    },
    hero: {
      badge: "Broken References",
      headline: "A 5-minute phone call",
      gradientText: "captures nothing useful.",
      subheadline:
        "You call three people the candidate hand-picked. They say nice things. You check the box. Nobody learns anything. Reference checks are the last piece of hiring theater we all pretend works — and everyone knows it doesn't.",
      primaryCta: { text: "Replace reference checks", href: "/signup" },
      secondaryCta: { text: "Why they're broken", href: "#problem" },
      trustLine: "SkillPass Peer Signal replaces reference checks with verified, structured peer data",
    },
    problem: {
      badge: "Performance theater",
      headline: "References are curated.",
      gradientText: "That makes them useless.",
      description:
        "Candidates pick their three biggest fans. Those fans know they're being asked. Nobody is going to say 'don't hire this person.' You're calling pre-screened advocates and treating it like objective data. It's theater.",
      stats: [
        { value: "95%", label: "Positive reference outcomes", description: "Virtually all reference checks come back positive. If 95% pass, the test isn't testing anything." },
        { value: "5 min", label: "Average reference call length", description: "Three generic questions, three generic answers. 'Yes, they're great.' Call over. Box checked." },
        { value: "0.13", label: "Correlation with job performance", description: "Meta-analysis data. Reference checks have near-zero predictive power. Less than a coin flip." },
      ],
    },
    solution: {
      badge: "What replaces the reference check",
      headline: "Peer Signal isn't a reference.",
      gradientText: "It's verified colleague data.",
      description:
        "SkillPass Peer Signal collects structured feedback from identity-verified colleagues — not three hand-picked fans. The reviews are weighted, anonymized, and cross-referenced. You get genuine peer data, not rehearsed endorsements.",
      features: [
        { title: "Not candidate-selected", description: "Peer reviewers come from verified professional connections, not a curated list. You hear from actual colleagues, not the candidate's biggest fans." },
        { title: "Structured feedback", description: "Not 'tell me about them.' Specific, calibrated questions about collaboration, skill level, reliability, and communication. Quantifiable." },
        { title: "Identity-verified reviewers", description: "Every peer reviewer is verified against employment records. No fake reviews. No sock puppets." },
        { title: "Longitudinal data", description: "Peer Signal aggregates feedback over time, not from one snapshot. You see patterns, not a single performance." },
      ],
    },
    proof: {
      headline: "Peer Signal predicts. References don't.",
      testimonial: {
        quote: "We ran both systems in parallel for 6 months. Reference checks predicted nothing. Peer Signal correlated 0.61 with first-year performance. We haven't made a reference call since August.",
        name: "Neil Gupta",
        role: "Director of People Analytics",
        detail: "Data platform company, 520 employees",
      },
      stats: [
        { value: "0.61", label: "Peer Signal–performance correlation" },
        { value: "0.13", label: "Reference check–performance correlation" },
        { value: "4.7x", label: "More predictive than references" },
        { value: "8 days", label: "Saved per hire (no reference stage)" },
      ],
    },
    cta: {
      headline: "Reference checks are theater.",
      gradientText: "Peer Signal is data.",
      description: "Replace the most useless step in your hiring process with structured, verified peer feedback that actually predicts performance.",
      primaryCta: { text: "Get Peer Signal data", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 22
  {
    slug: "talent-drops-pipeline",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Candidates Drop Out Because Your Process Takes 6 Weeks | SkillPass",
      description:
        "68% of candidates withdraw mid-process. The #1 reason? It took too long. A faster pipeline with verified signal keeps your best candidates engaged.",
    },
    hero: {
      badge: "Pipeline Drop-Off",
      headline: "They got another offer because",
      gradientText: "your process took 6 weeks.",
      subheadline:
        "Two-thirds of candidates who enter your pipeline never finish it. They don't fail. They leave. Because six weeks of scheduling, tests, and silence is six weeks of other companies making faster offers.",
      primaryCta: { text: "Fix your pipeline", href: "/signup" },
      secondaryCta: { text: "See the drop-off data", href: "#problem" },
      trustLine: "SkillPass pipelines retain 91% of candidates through to decision",
    },
    problem: {
      badge: "The leaking funnel",
      headline: "Your pipeline loses people",
      gradientText: "at every stage.",
      description:
        "Stage 1 to stage 2: 30% drop. Stage 2 to stage 3: 25% drop. By the time you reach the offer stage, you've lost most of the candidates you wanted. The survivors aren't the best — they're the most patient.",
      stats: [
        { value: "68%", label: "Candidates who withdraw mid-process", description: "Greenhouse benchmark data. Over two-thirds of your pipeline quits before you make a decision." },
        { value: "#1 reason", label: "Process took too long", description: "Robert Half survey. The single biggest reason candidates drop out is timeline length. Not comp, not role fit — speed." },
        { value: "52%", label: "Who accepted a competing offer while waiting", description: "More than half of withdrawals went to a company that moved faster. You didn't lose on salary. You lost on speed." },
      ],
    },
    solution: {
      badge: "Keep the best candidates in",
      headline: "A 16-day pipeline",
      gradientText: "doesn't have a leaking problem.",
      description:
        "When your process goes from 42 days to 16, candidates don't have time to leave. They're impressed by your speed, engaged by the efficiency, and signing before competitors finish scheduling a first call.",
      features: [
        { title: "Compression, not cutting corners", description: "You're not skipping steps. You're replacing validation stages with verified SkillScores. Same rigor, fraction of the time." },
        { title: "Candidate experience signal", description: "Fast processes feel respectful. Candidates report 3x higher satisfaction with SkillPass-powered pipelines." },
        { title: "For talent: faster answers", description: "No more waiting 6 weeks in limbo. Companies using SkillPass respond within days, not never." },
        { title: "For employers: you keep your top picks", description: "When your pipeline moves at the speed of talent, you stop losing first-choice candidates to slower-moving competitors." },
      ],
    },
    proof: {
      headline: "From 68% drop-off to 9%",
      testimonial: {
        quote: "We tracked our funnel before and after SkillPass. Before: 68% of candidates withdrew. After: 9%. The only change was speed. Candidates who get fast, clear answers stick around.",
        name: "Danielle Brooks",
        role: "VP of Talent",
        detail: "Health tech company, 430 employees",
      },
      stats: [
        { value: "9%", label: "Post-SkillPass drop-off rate" },
        { value: "68%→9%", label: "Drop-off improvement" },
        { value: "16 days", label: "New average pipeline length" },
        { value: "3x", label: "Candidate satisfaction increase" },
      ],
    },
    cta: {
      headline: "The best candidates won't wait.",
      gradientText: "So don't make them.",
      description: "Whether you're losing candidates or losing patience with slow processes, the fix is the same: verified signal that compresses timelines.",
      primaryCta: { text: "Speed up your pipeline", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 23
  {
    slug: "losing-to-faster",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "The Best Candidates Have 3 Offers by Day 14 | SkillPass",
      description:
        "Top talent doesn't wait. They have multiple offers within two weeks. If your process takes longer, you're only hiring from whoever's left.",
    },
    hero: {
      badge: "Speed Gap",
      headline: "The best candidates have 3 offers",
      gradientText: "by day 14.",
      subheadline:
        "While your hiring committee is debating whether to schedule a third-round panel, the candidate you want already has three offers. The talent war isn't won with comp packages. It's won with speed.",
      primaryCta: { text: "Move faster", href: "/signup" },
      secondaryCta: { text: "See the timeline gap", href: "#problem" },
      trustLine: "SkillPass employers make offers 60% faster than the industry average",
    },
    problem: {
      badge: "The 14-day window",
      headline: "You have two weeks.",
      gradientText: "Most processes take six.",
      description:
        "The best candidates in any talent pool are actively being recruited by 3–5 companies simultaneously. They make a decision within 14 days. Your 42-day pipeline starts them at week one and reaches them at week six — when they're already gone.",
      stats: [
        { value: "10 days", label: "Time top talent stays available", description: "LinkedIn data. The best candidates are off the market in under two weeks. After that, you're picking from leftovers." },
        { value: "3.4", label: "Average offers held by top candidates", description: "iCIMS research. Strong candidates aren't choosing between you and unemployment. They're choosing between you and three others." },
        { value: "42 days", label: "Your timeline vs. their patience", description: "SHRM average time-to-hire. By the time you reach an offer, your first-choice candidate has already started somewhere else." },
      ],
    },
    solution: {
      badge: "Close the speed gap",
      headline: "Offer in 10 days.",
      gradientText: "Not 42.",
      description:
        "SkillPass gives you verified signal on day one. No phone screens. No take-home tests. No reference check waiting. You start at the conversation, not the verification. That's how you get from application to offer in 10 days.",
      features: [
        { title: "Day 1 signal", description: "Every applicant arrives scored. You're shortlisting before competitors finish reading resumes." },
        { title: "Skip 3 stages", description: "Phone screen, tech assessment, and reference check — all replaced by verified sub-scores. Interviews start on day 2–3." },
        { title: "Faster committee decisions", description: "Share SkillScore breakdowns with the full panel before interviews. They arrive informed. Decisions happen same-day." },
        { title: "Speed as a selling point", description: "Candidates notice when you move fast. It signals organizational health. Your offer acceptance rate goes up, not just your speed." },
      ],
    },
    proof: {
      headline: "They stopped being the slow one",
      testimonial: {
        quote: "We used to hear 'I accepted another offer' constantly. After SkillPass, we started hearing 'you're the fastest process I've ever been through.' That's a competitive advantage nobody talks about.",
        name: "Andre Williams",
        role: "Head of People",
        detail: "Cybersecurity startup, 160 employees",
      },
      stats: [
        { value: "10 days", label: "Average time-to-offer" },
        { value: "0", label: "First-choice candidates lost (last quarter)" },
        { value: "96%", label: "Offer acceptance rate" },
        { value: "60%", label: "Faster than industry average" },
      ],
    },
    cta: {
      headline: "The best candidates aren't waiting for you.",
      gradientText: "They're signing with someone faster.",
      description: "Close the speed gap. Offer in days, not weeks. The first role is free — see how fast you can actually move.",
      primaryCta: { text: "Get faster today", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 24
  {
    slug: "self-reported-skills",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Everyone Claims 'Expert in Python.' Are They? | SkillPass",
      description:
        "Self-reported skills are fiction. 54% of candidates exaggerate, and there's no way to verify until they're already hired. SkillPass fixes the trust gap.",
    },
    hero: {
      badge: "The Trust Gap",
      headline: "Everyone's 'expert in Python.'",
      gradientText: "Are they really?",
      subheadline:
        "LinkedIn profiles, resumes, cover letters — they all say the same thing: 'Expert in X.' 'Proficient in Y.' 'Deep experience with Z.' But over half of candidates exaggerate, and there's no way to know until they're already on your payroll.",
      primaryCta: { text: "Verify before you hire", href: "/signup" },
      secondaryCta: { text: "See the trust gap", href: "#problem" },
      trustLine: "SkillPass verifies every skill claim against institutional and assessment data",
    },
    problem: {
      badge: "Self-reported means unverified",
      headline: "Skill claims are the honor system.",
      gradientText: "The honor system doesn't work.",
      description:
        "There's no penalty for lying about skills on a resume. No verification layer. No audit trail. Candidates know this, and the incentive is clear: claim more, get more interviews. The entire skill-signaling system is built on trust. And trust doesn't scale.",
      stats: [
        { value: "54%", label: "Candidates who exaggerate skills", description: "Checkster data. More than half of the skills on the resumes you're reading are inflated or fabricated." },
        { value: "87%", label: "Who list skills they haven't used in 2+ years", description: "Skills atrophy. But resumes don't expire. That 'Python expert' might not have touched Python since 2022." },
        { value: "$0", label: "Penalty for lying about skills", description: "There's no professional consequence for skill inflation. The worst case? They don't get the job. The incentive to exaggerate is overwhelming." },
      ],
    },
    solution: {
      badge: "Verified, not claimed",
      headline: "A skill is only real",
      gradientText: "if it's verified.",
      description:
        "SkillPass doesn't ask people what they're good at. It verifies what they can do. Academic records, proctored assessments, peer reviews, and performance data — each sub-score represents confirmed ability, not self-reported claims.",
      features: [
        { title: "For talent: prove what you know", description: "Your verified SkillScore stands out from a sea of self-reported claims. It says 'this is confirmed' — not 'this is what I wrote.'" },
        { title: "For employers: trust the data", description: "Every skill level in a SkillScore is backed by verified sources. No more discovering on day 30 that the 'expert' is a beginner." },
        { title: "Recency-weighted", description: "SkillPass weights recent assessments and performance data more heavily. Skills from 5 years ago carry less weight than current capability." },
        { title: "Specificity over labels", description: "Not 'proficient in Python.' Instead: Assessed Ability score of 724, based on a proctored technical assessment completed 3 months ago." },
      ],
    },
    proof: {
      headline: "The gap between claims and reality",
      testimonial: {
        quote: "We compared resume skill claims against SkillPass verified scores for 500 candidates. 61% had inflated at least one major skill. 23% claimed skills they'd never been assessed on at all. The trust gap is real.",
        name: "Dr. Michelle Torres",
        role: "Industrial-Organizational Psychologist",
        detail: "SkillPass research partner, Stanford University",
      },
      stats: [
        { value: "61%", label: "Skill claims inflated vs. verified data" },
        { value: "23%", label: "Skills claimed with zero verification" },
        { value: "0", label: "Unverified claims in SkillScore" },
        { value: "300–850", label: "Precise score, not vague labels" },
      ],
    },
    cta: {
      headline: "Claims are cheap.",
      gradientText: "Proof is valuable.",
      description: "Whether you're building your professional profile or evaluating candidates, verified skills are the new standard. Self-reported claims are dead.",
      primaryCta: { text: "Get verified", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 25
  {
    slug: "funnel-leaking-money",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Your Hiring Funnel Is Leaking Money at Every Stage | SkillPass",
      description:
        "Map the drop-off at each hiring stage. Every candidate who leaves = wasted spend. Here's where the money leaks and how to stop it.",
    },
    hero: {
      badge: "Funnel Economics",
      headline: "Drop-off at each stage",
      gradientText: "= wasted spend.",
      subheadline:
        "Your hiring funnel isn't just losing candidates. It's losing money. Every applicant who drops at stage 3 carries the cost of stages 1 and 2 with them. Map the leak, and you'll find you're hemorrhaging $680 per day per open role.",
      primaryCta: { text: "Plug your funnel leaks", href: "/signup" },
      secondaryCta: { text: "See the funnel math", href: "#problem" },
      trustLine: "Average SkillPass employer plugs $440K/year in funnel waste",
    },
    problem: {
      badge: "Stage-by-stage waste",
      headline: "Every drop-off carries",
      gradientText: "sunk cost with it.",
      description:
        "You spent $200 attracting the applicant. $150 on initial screening. $300 on the phone screen. $500 on the technical assessment. They drop out after the panel. That's $1,150 in sunk cost — per candidate, per stage.",
      stats: [
        { value: "$1,150", label: "Average sunk cost per late-stage drop-off", description: "Advertising, screening, assessment, and interview costs accumulated before the candidate leaves." },
        { value: "5.2x", label: "Candidates needed to make one hire", description: "Glassdoor data. You process 5 candidates all the way through to make 1 offer that gets accepted." },
        { value: "38%", label: "Drop-off at the assessment stage alone", description: "Candidates hate take-homes. Nearly 4 in 10 quit at the assessment stage. That's after you've already invested in them." },
      ],
    },
    solution: {
      badge: "Fewer stages, less leakage",
      headline: "The tightest funnel has",
      gradientText: "the fewest stages.",
      description:
        "SkillPass eliminates 2–3 stages from your funnel. Fewer stages means fewer drop-off points. Fewer drop-off points means less wasted spend. The math is simple. The impact is massive.",
      features: [
        { title: "Pre-screening elimination", description: "SkillScores replace the resume review and phone screen. Two stages, two drop-off points, gone." },
        { title: "Assessment consolidation", description: "One SkillScore replaces separate technical, behavioral, and skills assessments. One stage instead of three." },
        { title: "Reference stage removed", description: "Peer Signal provides stronger data than reference calls. One more stage — and its drop-off — eliminated." },
        { title: "Funnel analytics", description: "Track cost-per-candidate at each remaining stage. See exactly where money flows and where it leaks." },
      ],
    },
    proof: {
      headline: "Plugged the leak, saved $440K",
      testimonial: {
        quote: "We mapped our funnel before SkillPass. We were losing $1,200 per candidate who dropped after the assessment stage — and 38% were dropping there. That's $440K a year in sunk costs on a team that hires 100 people. SkillPass cut it to $60K.",
        name: "Brian Caldwell",
        role: "CFO",
        detail: "Professional services firm, 800 employees",
      },
      stats: [
        { value: "$440K", label: "Annual funnel waste (before)" },
        { value: "$60K", label: "Annual funnel waste (after)" },
        { value: "86%", label: "Waste reduction" },
        { value: "2.1x", label: "Funnel efficiency improvement" },
      ],
    },
    cta: {
      headline: "Your funnel is leaking money.",
      gradientText: "Find out how much.",
      description: "Map your funnel. Quantify the waste. Then see how many stages SkillPass eliminates — and how much money stays in your budget.",
      primaryCta: { text: "Audit your funnel", href: "/roi-calculator" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 26
  {
    slug: "ai-broke-hiring",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "AI Broke Hiring. Here's What Fixes It. | SkillPass",
      description:
        "AI mass-apply tools flooded pipelines. AI resume writers made every candidate sound perfect. The hiring system broke. SkillPass is the fix.",
    },
    hero: {
      badge: "The AI Crisis in Hiring",
      headline: "AI applications broke hiring.",
      gradientText: "SkillPass fixes it.",
      subheadline:
        "AI gave candidates the power to apply everywhere instantly with polished resumes. Great for candidates. Devastating for employers. The signal-to-noise ratio in hiring collapsed overnight. You can't fix an AI problem with more AI. You fix it with verification.",
      primaryCta: { text: "See the fix", href: "/signup" },
      secondaryCta: { text: "Read the full thesis", href: "#problem" },
      trustLine: "The only hiring platform where every data point is verified, not generated",
    },
    problem: {
      badge: "What AI did to hiring",
      headline: "AI created a",
      gradientText: "three-headed monster.",
      description:
        "First, mass-apply tools flooded pipelines (300–500% more applications). Second, AI resume writers made everyone sound identical. Third, AI interview prep tools coached candidates to perform rather than be genuine. The entire hiring signal chain is compromised.",
      stats: [
        { value: "300–500%", label: "More applications per role", description: "LazyApply, AutoApply, and similar tools let candidates spray hundreds of applications per day." },
        { value: "78%", label: "AI-assisted resumes", description: "The resume is no longer a human document. It's AI output. Your ATS is now evaluating AI against AI." },
        { value: "92%", label: "Recruiters can't detect AI resumes", description: "If your screeners can't tell the difference, your screening process is evaluating AI writing quality, not human ability." },
      ],
    },
    solution: {
      badge: "Verification beats generation",
      headline: "You can't out-AI the candidates.",
      gradientText: "You verify instead.",
      description:
        "The arms race between AI applicants and AI screening tools is a dead end. SkillPass sidesteps it entirely. Instead of analyzing AI-generated text, we verify data at the source: institutions, assessments, peers, and employers. AI can't fake any of it.",
      features: [
        { title: "Source-verified data", description: "Every SkillScore is built from institutional records, proctored assessments, and identity-verified peer reviews. None of it is AI-generatable." },
        { title: "Volume-proof evaluation", description: "AI flooding your pipeline? SkillScores handle any volume. 100 applicants or 10,000 — all scored instantly." },
        { title: "For talent: stand out without AI tricks", description: "When your SkillScore is verified, you don't need AI to polish your resume. The data speaks for itself." },
        { title: "For employers: trust restored", description: "Stop playing AI-detection whack-a-mole. Evaluate verified data instead of trying to spot AI-generated text." },
      ],
    },
    proof: {
      headline: "From AI chaos to verified clarity",
      testimonial: {
        quote: "We tried AI screening tools to fight AI applicants. It was absurd — AI reading AI about AI. SkillPass was the first solution that actually worked because it doesn't try to out-AI the candidates. It just verifies who they really are.",
        name: "Sophia Johannsen",
        role: "Chief People Officer",
        detail: "Tech company, 1,100 employees",
      },
      stats: [
        { value: "100%", label: "Data source-verified" },
        { value: "0%", label: "AI-generatable content" },
        { value: "5x", label: "Volume handled without additional staff" },
        { value: "72%", label: "Reduction in screening time" },
      ],
    },
    cta: {
      headline: "AI broke hiring.",
      gradientText: "Verification fixes it.",
      description: "The AI arms race in hiring is unwinnable. Verification sidesteps it entirely. Whether you're talent or an employer, the answer is the same: verified data beats generated text.",
      primaryCta: { text: "Join the fix", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 27
  {
    slug: "resume-is-dead",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "The Resume Was Designed in 1482. It's Time for Something Better. | SkillPass",
      description:
        "Leonardo da Vinci wrote the first resume in 1482. We're still using the same format. In the age of AI and verified data, the resume is finally obsolete.",
    },
    hero: {
      badge: "The Post-Resume Era",
      headline: "The resume was designed in 1482.",
      gradientText: "It's time.",
      subheadline:
        "Leonardo da Vinci wrote the first known resume in 1482. Five centuries later, we're still asking people to write a page about themselves and hoping it's true. The resume survived the printing press, the internet, and email. It won't survive AI.",
      primaryCta: { text: "See what replaces it", href: "/signup" },
      secondaryCta: { text: "The history below", href: "#problem" },
      trustLine: "SkillPass: the verified professional profile for the post-resume era",
    },
    problem: {
      badge: "542 years is enough",
      headline: "A self-reported document",
      gradientText: "was never a good idea.",
      description:
        "The resume is fundamentally a trust exercise: 'Here's what I say about myself. Please believe me.' That worked when hiring was local, personal, and slow. It doesn't work when AI can fabricate a perfect resume in 4 seconds for a stranger 3,000 miles away.",
      stats: [
        { value: "1482", label: "Year the resume was invented", description: "Leonardo da Vinci's letter to Ludovico Sforza. A list of self-reported capabilities with no verification." },
        { value: "0", label: "Verification mechanisms built into resumes", description: "542 years later, resumes still have no built-in way to verify anything. It's the honor system, on paper." },
        { value: "4 sec", label: "Time for AI to generate a 'perfect' resume", description: "ChatGPT, Claude, and similar tools can produce a flawless resume in seconds. The format is officially gamed." },
      ],
    },
    solution: {
      badge: "What comes next",
      headline: "A verified professional profile.",
      gradientText: "Not a wish list.",
      description:
        "The SkillPass profile isn't a resume. It's a verified record of what you can actually do, built from institutional data, peer reviews, assessments, and performance history. You don't write it. It's compiled from verified sources.",
      features: [
        { title: "For talent: your verified record", description: "Build once, share everywhere. Your SkillScore is compiled from verified data — not your writing about yourself." },
        { title: "For employers: trust what you see", description: "Every candidate profile is built from confirmed sources. No self-reported claims. No creative writing." },
        { title: "Portable across employers", description: "Your SkillPass profile travels with you. No re-building for every application. No tailoring for every ATS." },
        { title: "Living document", description: "Unlike a resume, your SkillScore updates as you earn new credentials, get new peer reviews, and complete new assessments." },
      ],
    },
    proof: {
      headline: "The transition is already happening",
      testimonial: {
        quote: "I haven't updated my resume in 8 months. My SkillPass profile auto-updated when I completed a new certification and got peer reviews from my new team. Three recruiters found me through it last month. The resume is dead. I just didn't notice.",
        name: "Tyler Washington",
        role: "Product Manager",
        detail: "SkillScore: 718, 5 years experience",
      },
      stats: [
        { value: "542 years", label: "Long enough for one format" },
        { value: "0", label: "Self-reported claims in SkillScore" },
        { value: "4,000+", label: "Institutions feeding verified data" },
        { value: "50+", label: "Employers already using SkillScores" },
      ],
    },
    cta: {
      headline: "The resume had a good run.",
      gradientText: "542 years. Time's up.",
      description: "Whether you're talent or an employer, the shift from self-reported documents to verified profiles is happening now. Be early, not late.",
      primaryCta: { text: "Build your verified profile", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 28
  {
    slug: "bias-costs-money",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Biased Hiring Isn't Just Unfair — It's Expensive | SkillPass",
      description:
        "Hiring bias costs companies billions in missed talent, turnover, lawsuits, and underperformance. Skills-based evaluation reduces bias and improves results.",
    },
    hero: {
      badge: "The Cost of Bias",
      headline: "Biased hiring isn't just unfair.",
      gradientText: "It's expensive.",
      subheadline:
        "Unconscious bias in hiring doesn't just harm candidates — it costs companies real money. Missed talent, higher turnover, legal exposure, and homogeneous teams that underperform. The moral case is clear. The business case is devastating.",
      primaryCta: { text: "Hire on skills, not bias", href: "/signup" },
      secondaryCta: { text: "See the cost data", href: "#problem" },
      trustLine: "Skills-based hiring: more diverse, more effective, more profitable",
    },
    problem: {
      badge: "Bias has a price tag",
      headline: "The financial cost of bias",
      gradientText: "is staggering.",
      description:
        "Biased resume screening means you're selecting from a narrower talent pool. Narrower pools mean worse matches. Worse matches mean higher turnover. Higher turnover means more money spent re-hiring. It's a cycle — and it starts with the resume review.",
      stats: [
        { value: "27%", label: "Profitability gap (diverse vs. non-diverse)", description: "McKinsey data. Companies in the top quartile for diversity outperform bottom-quartile by 27% on profitability." },
        { value: "67%", label: "Bias entering at resume screening", description: "NAS research. Two-thirds of hiring bias enters at the initial screen — the step SkillPass replaces." },
        { value: "$16B", label: "Annual cost of homogeneous hiring (US)", description: "Lost innovation, higher turnover, legal liability, and missed market opportunities." },
      ],
    },
    solution: {
      badge: "Remove the bias, keep the rigor",
      headline: "When you evaluate skills,",
      gradientText: "bias loses its grip.",
      description:
        "SkillPass evaluates verified ability: Academic achievement, Peer Signal, Performance, and Assessed Ability. Not school prestige, not company pedigree, not name, not ZIP code. Bias has no lever to pull when the evaluation is purely skills-based.",
      features: [
        { title: "Name-blind, school-blind scoring", description: "SkillScores don't include names, photos, or institution prestige rankings. A 740 is a 740, regardless of background." },
        { title: "For talent: get evaluated fairly", description: "Your SkillScore reflects what you can do, not where you went to school or who you know. Level playing field." },
        { title: "For employers: better results", description: "Diverse shortlists aren't a concession — they're a competitive advantage. The data is unambiguous." },
        { title: "Audit trail for compliance", description: "Every evaluation decision has a documented, skill-based rationale. No 'cultural fit' ambiguity. EEOC/OFCCP ready." },
      ],
    },
    proof: {
      headline: "More diverse. More profitable. Not a coincidence.",
      testimonial: {
        quote: "We didn't adopt SkillPass for DEI reasons. We adopted it because biased screening was costing us money — wrong hires, high turnover, lawsuit risk. The diversity improvement was a bonus. The financial improvement was the plan.",
        name: "Rashida Okonkwo",
        role: "General Counsel & CHRO (dual role)",
        detail: "Insurance company, 2,800 employees",
      },
      stats: [
        { value: "41%", label: "More diverse shortlists" },
        { value: "27%", label: "Better profitability (industry benchmark)" },
        { value: "$0", label: "EEOC complaints (12 months)" },
        { value: "19%", label: "Lower turnover" },
      ],
    },
    cta: {
      headline: "Fair hiring isn't a cost center.",
      gradientText: "It's a profit driver.",
      description: "Skills-based evaluation produces more diverse, higher-performing teams. The business case writes itself.",
      primaryCta: { text: "Start skills-based hiring", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 29
  {
    slug: "assessment-fatigue",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Assessment Fatigue — Candidates Hate 7 Tests. Employers Hate Giving Them. | SkillPass",
      description:
        "The average candidate takes 3–7 assessments per job process. They're exhausted. Employers are drowning in vendor fees. One verified score replaces them all.",
    },
    hero: {
      badge: "Assessment Overload",
      headline: "Candidates hate 7 tests.",
      gradientText: "Employers hate giving them.",
      subheadline:
        "Cognitive aptitude test. Personality assessment. Technical skills test. Situational judgment. Culture fit survey. Coding challenge. Case study. The modern hiring process has become an assessment gauntlet that exhausts candidates and costs employers thousands per role.",
      primaryCta: { text: "Replace the gauntlet", href: "/signup" },
      secondaryCta: { text: "See the fatigue data", href: "#problem" },
      trustLine: "One verified SkillScore replaces 2–4 separate assessment tools",
    },
    problem: {
      badge: "The assessment arms race",
      headline: "More tests haven't improved",
      gradientText: "quality of hire.",
      description:
        "The assessment industry convinced employers that more tests mean better signal. So companies added test after test. But quality of hire hasn't improved. Candidate satisfaction has cratered. And assessment vendor spending has tripled.",
      stats: [
        { value: "3–7", label: "Assessments per hiring process", description: "TestGorilla data. Candidates face an average of 3–7 separate assessments per job. For some companies, it's more." },
        { value: "58%", label: "Candidates who abandon due to assessments", description: "Criteria Corp research. More than half of candidates quit when faced with excessive testing." },
        { value: "$3,500", label: "Avg. annual assessment vendor spend per role", description: "Technical testing, personality profiling, culture fit — each vendor charges separately. It adds up fast." },
      ],
    },
    solution: {
      badge: "One score, all the signal",
      headline: "Four verified sub-scores",
      gradientText: "replace the entire gauntlet.",
      description:
        "SkillPass combines Academic verification, Peer Signal, Performance data, and Assessed Ability into one composite SkillScore. Candidates build their profile once. Employers see all the signal without administering a single test.",
      features: [
        { title: "For talent: test once, not seven times", description: "Your Assessed Ability score is built from proctored assessments you take once. Every employer sees the results. No re-testing." },
        { title: "For employers: drop 2–4 vendors", description: "One SkillPass subscription replaces your skills test vendor, your personality assessment, and your reference check platform." },
        { title: "Candidate experience recovery", description: "Candidates love not being tested to death. Your application completion rate recovers. Your employer brand improves." },
        { title: "Better signal, fewer tests", description: "Four verified sub-scores provide stronger predictive power than 7 unverified assessments. Less is more — when it's verified." },
      ],
    },
    proof: {
      headline: "Three vendors cancelled. Better results.",
      testimonial: {
        quote: "We were paying $47K/year across three assessment vendors. Candidate completion rates were awful — 42%. We switched to SkillPass, cancelled all three, and our completion rate went to 91%. Quality of hire went up. Budget went down.",
        name: "Catherine Park",
        role: "Director of Talent Acquisition",
        detail: "Consulting firm, 650 employees",
      },
      stats: [
        { value: "3→0", label: "Assessment vendors" },
        { value: "$47K", label: "Annual savings on vendor fees" },
        { value: "42%→91%", label: "Candidate completion rate" },
        { value: "3.1x", label: "Quality of hire improvement" },
      ],
    },
    cta: {
      headline: "Nobody wants more tests.",
      gradientText: "Everyone wants better signal.",
      description: "Replace the assessment gauntlet with one verified SkillScore. Candidates get their time back. Employers get their budget back. Quality goes up.",
      primaryCta: { text: "Simplify your assessments", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 30
  {
    slug: "speed-to-offer",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "42 Days Average. Your Best Candidates? Gone in 10. | SkillPass",
      description:
        "The gap between your 42-day process and your best candidates' 10-day decision window is where you lose the talent war. Here's how to close it.",
    },
    hero: {
      badge: "The Speed Gap",
      headline: "42 days average.",
      gradientText: "Your best candidates? Gone in 10.",
      subheadline:
        "There's a 32-day gap between how long your process takes and how long your best candidates will wait. That gap is where you lose every first-choice hire to faster companies. Closing it isn't about rushing — it's about eliminating the steps that add time without adding signal.",
      primaryCta: { text: "Close the gap", href: "/signup" },
      secondaryCta: { text: "See the speed data", href: "#problem" },
      trustLine: "SkillPass employers: 16-day average time-to-offer",
    },
    problem: {
      badge: "The math doesn't work",
      headline: "Your timeline and their patience",
      gradientText: "don't overlap.",
      description:
        "Employers think 42 days is fast. Candidates think 10 days is generous. These two realities can't coexist. Something has to give — and right now, what gives is your first-choice candidate accepting somewhere else.",
      stats: [
        { value: "42 days", label: "Average employer time-to-hire", description: "SHRM data. This is the average. Many companies take 60–90 days for technical and senior roles." },
        { value: "10 days", label: "Top candidate patience window", description: "LinkedIn talent research. After 10 days, the best candidates are either accepting elsewhere or disengaging." },
        { value: "32 days", label: "The gap where talent is lost", description: "32 days. That's the chasm between your process and your candidate's patience. Every day in that gap costs you." },
      ],
    },
    solution: {
      badge: "Mind the gap",
      headline: "From 42 to 16.",
      gradientText: "That's inside the window.",
      description:
        "SkillPass compresses the 42-day average to 16 days by eliminating stages that exist only for verification. When the data arrives pre-verified, you skip straight to the conversations that actually matter.",
      features: [
        { title: "For talent: faster answers", description: "No more 6-week black holes. Companies on SkillPass respond in days and decide in weeks, not months." },
        { title: "For employers: you're inside the window", description: "16 days is inside the 10-day top-talent window when you account for process start lag. You're competitive again." },
        { title: "Same rigor, less calendar", description: "You're not skipping evaluation. You're replacing slow verification with fast verification. The quality bar doesn't move." },
        { title: "Speed as brand", description: "Fast, respectful processes build your employer reputation. Slow, ghosting-prone processes destroy it. Speed is marketing." },
      ],
    },
    proof: {
      headline: "Inside the window. Every time.",
      testimonial: {
        quote: "We tracked our offer timing against candidate decision dates. Before SkillPass, we made offers after candidates decided 71% of the time. After, we're inside the window 94% of the time. We stopped being late to our own hires.",
        name: "Vincent Moreau",
        role: "Head of Global Recruiting",
        detail: "Supply chain SaaS, 750 employees",
      },
      stats: [
        { value: "16 days", label: "Average time-to-offer" },
        { value: "94%", label: "Offers made within candidate window" },
        { value: "26 days", label: "Cut from average pipeline" },
        { value: "91%", label: "Offer acceptance rate" },
      ],
    },
    cta: {
      headline: "Your 42 days and their 10 days",
      gradientText: "need to meet in the middle.",
      description: "Actually, they need to meet at 10. SkillPass gets you to 16. Close enough to compete. Fast enough to win.",
      primaryCta: { text: "Get faster", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },

  // 31
  {
    slug: "signal-drowning-noise",
    category: "problem",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Signal Drowning in Noise — The Core Hiring Problem, in One Page | SkillPass",
      description:
        "Every hiring problem boils down to one thing: you can't find the signal in the noise. AI amplified the noise. SkillPass amplifies the signal.",
    },
    hero: {
      badge: "The Core Problem",
      headline: "The core thesis",
      gradientText: "in one page.",
      subheadline:
        "Every broken thing about hiring — the floods of AI applications, the fake credentials, the endless interview rounds, the ghosting, the bad hires — traces back to a single root cause: there's no trusted signal. Resumes are noise. Interviews are noise. SkillPass is signal.",
      primaryCta: { text: "Get the signal", href: "/signup" },
      secondaryCta: { text: "Read the thesis", href: "#problem" },
      trustLine: "SkillPass: a credit score for professional ability (300–850)",
    },
    problem: {
      badge: "One root cause",
      headline: "Hiring broke because",
      gradientText: "trust evaporated.",
      description:
        "The hiring system was always built on trust. Trust the resume. Trust the interview performance. Trust the references. But AI made resumes untrustable. Remote work made interviews performative. References were always theater. When trust collapses, you're left with noise.",
      stats: [
        { value: "78%", label: "Resumes: untrustable (AI-written)", description: "The document you've relied on for 542 years is now generated by AI. The resume is officially noise." },
        { value: "0.13", label: "References: useless (near-zero predictive power)", description: "Meta-analysis shows reference checks predict job performance no better than chance." },
        { value: "54%", label: "Self-reported skills: fictional (majority exaggerated)", description: "Over half of skill claims on resumes are inflated or fabricated. The honor system failed." },
      ],
    },
    solution: {
      badge: "Signal, verified",
      headline: "One number. Four sub-scores.",
      gradientText: "Every data point verified.",
      description:
        "SkillPass is a credit score for professional ability. 300–850, built from four verified sub-scores: Academic (institutional records), Peer Signal (identity-verified colleague reviews), Performance (employer-confirmed history), and Assessed Ability (proctored test results). Nothing self-reported. Nothing AI-generated. Pure signal.",
      features: [
        { title: "For talent: your professional credit score", description: "Build once. Carries everywhere. Free forever. Your SkillScore is the portable proof of who you are professionally." },
        { title: "For employers: the signal you've been missing", description: "Search, rank, and shortlist by verified ability. Not keywords, not vibes, not gut reads. Data." },
        { title: "For hiring as a system: trust restored", description: "When both sides have access to verified data, the entire system works better. Faster, fairer, more accurate." },
        { title: "The architecture: anti-noise by design", description: "Institutional verification, proctored assessments, identity-confirmed peers. Every layer is designed to be immune to gaming." },
      ],
    },
    proof: {
      headline: "Signal works. The numbers prove it.",
      testimonial: {
        quote: "We've been in recruiting for 20 years. The signal-to-noise ratio has never been worse — and it fell off a cliff in 2024 when AI went mainstream. SkillPass is the first thing we've seen that actually restores trust to the process. Not with AI. With verification.",
        name: "Dr. Robert Kim",
        role: "Managing Partner",
        detail: "Executive search firm, 30 years in talent advisory",
      },
      stats: [
        { value: "300–850", label: "Verified SkillScore range" },
        { value: "4", label: "Verified sub-scores" },
        { value: "0.74", label: "Correlation with job performance" },
        { value: "50+", label: "Employers, 4,000+ institutions" },
      ],
    },
    cta: {
      headline: "Noise is the problem.",
      gradientText: "Verified signal is the answer.",
      description: "Every hiring pain point traces to a lack of trusted signal. SkillPass provides it. Whether you're talent building your profile or an employer searching for candidates — start with signal.",
      primaryCta: { text: "Build your profile (free)", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers/signup" },
    },
  },
];

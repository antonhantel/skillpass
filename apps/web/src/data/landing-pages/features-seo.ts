import type { LandingPage } from "./types";

/* ═══════════════════════════════════════════════════════════════════════════
   FEATURES + COMPARISONS + SEO  (Categories N–S, 66 pages)
   ═══════════════════════════════════════════════════════════════════════════ */

export const featureSeoPages: LandingPage[] = [

  /* ─────────────────────────────────────────────────────────────────────────
     N. FEATURE DEEP-DIVES  (14 pages, audience "all", funnel "mofu")
     ───────────────────────────────────────────────────────────────────────── */

  // 165 — how-skillscore-works
  {
    slug: "how-skillscore-works",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "How the SkillScore Works | 300–850 Professional Ability Score",
      description:
        "Your SkillScore combines calibrated academics, peer signals, performance data, and assessed ability into one 300–850 number. Here's the methodology.",
    },
    hero: {
      badge: "Feature Deep-Dive",
      headline: "One number. Four dimensions.",
      gradientText: "300 to 850.",
      subheadline:
        "Your SkillScore isn't a personality quiz or a coding puzzle. It's a composite of everything that actually predicts job performance — academics, peer perception, work output, and tested ability — weighted and calibrated across 4,000+ institutions.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See methodology", href: "/methodology" },
      trustLine: "Free for talent. Scores verified by independent audit.",
    },
    problem: {
      badge: "The Problem",
      headline: "Hiring runs on",
      gradientText: "gut feelings",
      description:
        "Resumes reward self-promotion. Interviews reward charisma. Neither reliably predicts who'll actually do the job well. That's why 46% of new hires fail within 18 months.",
      stats: [
        { value: "46%", label: "New hire failure rate", description: "Nearly half of all hires don't make it past 18 months, per Leadership IQ research." },
        { value: "23 days", label: "Average time to fill", description: "And most of that time is spent on candidates who were never going to work out." },
        { value: "$17K", label: "Cost per bad hire", description: "Direct costs. The real damage — team morale, lost clients — is harder to measure." },
      ],
    },
    solution: {
      badge: "The SkillScore",
      headline: "Four sub-scores, one",
      gradientText: "composite truth",
      description:
        "Each sub-score captures a dimension no single metric can. Together, they create the most complete picture of professional ability available anywhere.",
      features: [
        { title: "Academic (calibrated GPA + course rigor)", description: "We don't just read your GPA. We normalize it against your institution's grading distribution and weight it by course difficulty, so a 3.4 in MIT's 6.824 isn't penalized next to a 3.9 in an easier program." },
        { title: "Peer Signal (8-dimension 360-degree)", description: "Your references rank you against everyone they've ever worked with — forced-choice, top 5% to bottom 50% — across eight dimensions including reliability, creativity, and technical ability." },
        { title: "Performance (NLP review analysis)", description: "We analyze performance reviews using calibrated NLP, extracting signal from actual workplace feedback rather than self-reported accomplishments." },
        { title: "Assessed Ability (8 proctored types)", description: "Coding algorithms, system design, case consulting, data analysis, writing, GMA, Big Five personality, and situational judgment — proctored and standardized." },
      ],
    },
    proof: {
      headline: "Trusted by 50+ employers",
      testimonial: {
        quote: "We replaced our entire first-round screen with SkillScore filters. Time-to-hire dropped by 60% and our 90-day retention went from 71% to 94%.",
        name: "Rachel Torres",
        role: "VP Talent Acquisition",
        detail: "Series C fintech, 400 employees",
      },
      stats: [
        { value: "60%", label: "Faster hiring" },
        { value: "$12K", label: "Savings per hire" },
        { value: "3x", label: "Hire quality improvement" },
        { value: "50+", label: "Employers on platform" },
      ],
    },
    cta: {
      headline: "See what your",
      gradientText: "SkillScore looks like",
      description: "It takes about 30 minutes to complete your first assessment. Your score is yours forever — portable across every job application.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    faq: [
      { q: "Is the SkillScore free for job seekers?", a: "Yes. Creating your profile, completing assessments, and sharing your score with employers is 100% free. Employers pay for search and analytics tools." },
      { q: "How long does it take to get a full score?", a: "You can complete your first assessment in about 30 minutes. A complete profile — with references and transcript — typically takes 3-5 days as you wait for references to respond." },
      { q: "Can I retake assessments?", a: "You can retake most assessments after a 90-day cooling period. Your score history is visible to employers, so they can see growth over time." },
      { q: "What if my school isn't in your calibration database?", a: "We cover 4,000+ institutions globally. If yours isn't listed, you can submit your transcript and we'll add your school to the calibration set within 2 weeks." },
      { q: "Do employers see the raw sub-scores or just the composite?", a: "Both. Employers can view the composite and drill into each sub-score. They can also configure custom weightings — a quant fund might weight Assessed Ability higher, while a consulting firm might prioritize Peer Signal." },
    ],
  },

  // 166 — transcript-intelligence
  {
    slug: "transcript-intelligence",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Transcript Intelligence | Calibrated GPA Across 4,000+ Schools",
      description:
        "SkillPass normalizes GPAs across 4,000+ institutions, accounting for grade inflation, course rigor, and program difficulty. Finally, an apples-to-apples comparison.",
    },
    hero: {
      badge: "Transcript Intelligence",
      headline: "A 3.5 at one school isn't a 3.5 at",
      gradientText: "another school.",
      subheadline:
        "Grade inflation varies wildly. A 3.7 average at Yale means something different than a 3.7 at Georgia Tech's CS program. We built calibration models across 4,000+ institutions so employers can finally compare transcripts fairly.",
      primaryCta: { text: "Upload Your Transcript", href: "/signup" },
      secondaryCta: { text: "See calibration data", href: "/methodology" },
      trustLine: "Calibration data updated quarterly from registrar reports.",
    },
    problem: {
      badge: "Grade Inflation Reality",
      headline: "Raw GPAs are",
      gradientText: "meaningless for comparison",
      description:
        "The median GPA at Harvard is 3.7. At Harvey Mudd it's 3.1. Both schools produce exceptional graduates — but raw numbers punish students at harder-grading institutions.",
      stats: [
        { value: "0.6", label: "GPA gap between schools", description: "The difference in median GPA between the easiest and hardest grading institutions in our database." },
        { value: "73%", label: "Schools with inflation", description: "Nearly three-quarters of four-year colleges have experienced measurable grade inflation since 2000." },
        { value: "4,000+", label: "Institutions calibrated", description: "We maintain grading distributions for 4,000+ colleges and universities worldwide." },
      ],
    },
    solution: {
      badge: "How It Works",
      headline: "Calibrated grades,",
      gradientText: "course by course",
      description:
        "We don't just adjust for school-level inflation. We weight individual courses by difficulty, department, and level — so your advanced algorithms course counts more than an elective.",
      features: [
        { title: "Institution-level calibration", description: "We use registrar data, published grade distributions, and statistical models to create a normalization curve for every school in our database." },
        { title: "Course rigor scoring", description: "Each course gets a difficulty weight based on department averages, course level (100s vs. 400s), and whether it's a core requirement or elective." },
        { title: "Program context", description: "An engineering student's 3.3 is interpreted differently than a communications major's 3.3, because the grading norms are different." },
        { title: "Transparent methodology", description: "Candidates see exactly how their GPA was adjusted and why. No black boxes." },
      ],
    },
    proof: {
      headline: "Fairer comparisons, better outcomes",
      testimonial: {
        quote: "We used to auto-reject below 3.5 and we know we lost great candidates from tough programs. SkillPass calibrated GPAs let us see who actually earned their grades.",
        name: "David Kim",
        role: "Engineering Manager",
        detail: "FAANG company, hiring 200+ annually",
      },
      stats: [
        { value: "4,000+", label: "Schools calibrated" },
        { value: "28%", label: "More diverse pipelines" },
        { value: "Quarterly", label: "Calibration updates" },
      ],
    },
    cta: {
      headline: "Your transcript deserves",
      gradientText: "fair context",
      description: "Upload your transcript once. We'll calibrate it across your institution's actual grading norms and course difficulty.",
      primaryCta: { text: "Upload Transcript", href: "/signup" },
      secondaryCta: { text: "View Sample Report", href: "/demo" },
    },
    faq: [
      { q: "What transcript formats do you accept?", a: "Official PDF transcripts from your registrar, unofficial transcripts with course listings and grades, and digital transcripts via Parchment or National Student Clearinghouse." },
      { q: "How do you handle pass/fail courses?", a: "Pass/fail courses are excluded from the GPA calculation but still contribute to course rigor scoring — taking a hard course pass/fail still shows you took it." },
      { q: "What about graduate school transcripts?", a: "Graduate transcripts are calibrated separately with their own models. Many graduate programs grade on a narrower band (3.0-4.0), which we account for." },
      { q: "Can international transcripts be calibrated?", a: "Yes. We support percentage-based, letter-grade, and class/division systems from 50+ countries. Our models map these to a common scale." },
    ],
  },

  // 167 — calibrated-references
  {
    slug: "calibrated-references",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Calibrated References | 360-Degree Peer Signal That Actually Works",
      description:
        "Traditional references are useless — everyone says nice things. SkillPass uses forced-choice rankings across 8 dimensions for signal that predicts performance.",
    },
    hero: {
      badge: "Peer Signal",
      headline: "References that say more than",
      gradientText: "\"great team player.\"",
      subheadline:
        "Open-ended reference calls are theater. Everyone gets glowing feedback. We replaced that with forced-choice rankings across 8 specific dimensions — so references actually differentiate candidates instead of rubber-stamping them.",
      primaryCta: { text: "Request References", href: "/signup" },
      secondaryCta: { text: "See the framework", href: "/methodology" },
      trustLine: "Average 4.2 references per candidate. 82% response rate.",
    },
    problem: {
      badge: "Broken References",
      headline: "Traditional references are",
      gradientText: "performance theater",
      description:
        "Candidates hand-pick their biggest fans. References give vague praise to avoid liability. The whole ritual costs time and produces zero useful signal.",
      stats: [
        { value: "96%", label: "Positive references", description: "Nearly all traditional references are positive, making them useless for distinguishing candidates." },
        { value: "0.13", label: "Correlation to performance", description: "Unstructured reference checks have almost no statistical relationship to actual job performance." },
        { value: "3 hrs", label: "Time per reference round", description: "Scheduling, calling, and documenting reference checks eats hours of recruiter time." },
      ],
    },
    solution: {
      badge: "Forced-Choice Rankings",
      headline: "Structured signal,",
      gradientText: "no more theater",
      description:
        "Instead of asking \"Tell me about working with Sarah,\" we ask references to place candidates in a distribution: top 5%, top 10%, top 25%, top 50%, or bottom 50% — across each dimension.",
      features: [
        { title: "8 specific dimensions", description: "Technical ability, leadership, communication, reliability, creativity, coachability, work ethic, and collaboration. Each rated independently." },
        { title: "Forced distribution rankings", description: "References must place the candidate relative to everyone they've ever worked with. No more \"everyone is excellent.\"" },
        { title: "Multi-source triangulation", description: "We collect from managers, peers, and direct reports. When three sources agree someone's in the top 10% for reliability, that's real signal." },
        { title: "Reference credibility weighting", description: "A reference from someone who's provided 50 calibrated references carries more weight than a first-time respondent." },
      ],
    },
    proof: {
      headline: "Signal from structure",
      testimonial: {
        quote: "The forced-choice format was uncomfortable at first — I had to really think about where each person fell. But that's exactly why it works. I can't just default to 'excellent.'",
        name: "Marcus Chen",
        role: "Senior Engineering Lead",
        detail: "Provided 23 SkillPass references",
      },
      stats: [
        { value: "82%", label: "Response rate" },
        { value: "8", label: "Dimensions scored" },
        { value: "0.47", label: "Correlation to performance" },
        { value: "4.2", label: "Avg references per candidate" },
      ],
    },
    cta: {
      headline: "Get references that",
      gradientText: "actually mean something",
      description: "Invite your references once. They'll complete a 10-minute structured ranking. The signal stays with your profile permanently.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/methodology" },
    },
    faq: [
      { q: "Can I choose who gives my references?", a: "Yes. You invite the references you want. But because we use forced-choice rankings rather than open-ended praise, even hand-picked references produce meaningful differentiation." },
      { q: "What if a reference rates me poorly?", a: "You can see your aggregate Peer Signal score but not individual reference responses. If your overall score is lower than expected, you can add more references to provide additional data points." },
      { q: "How long does it take a reference to complete?", a: "About 10 minutes. It's a structured form with forced-choice questions, not a phone call or essay." },
      { q: "Do references need a SkillPass account?", a: "No. They receive an email link to a secure form. No account, no download, no friction." },
    ],
  },

  // 168 — 8-dimension-framework
  {
    slug: "8-dimension-framework",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "The 8-Dimension Reference Framework | SkillPass Peer Signal",
      description:
        "Why 8 dimensions? Because 'good worker' isn't specific enough. We measure technical ability, leadership, communication, reliability, creativity, coachability, work ethic, and collaboration.",
    },
    hero: {
      badge: "Reference Framework",
      headline: "Eight dimensions because 'good worker'",
      gradientText: "isn't a dimension.",
      subheadline:
        "Most reference systems ask one question: would you work with this person again? We ask eight specific questions because the engineer who's a 10 in technical ability and a 3 in communication is a very different hire from the reverse.",
      primaryCta: { text: "See Your Dimensions", href: "/signup" },
      secondaryCta: { text: "View framework details", href: "/methodology" },
    },
    problem: {
      badge: "Flat Signals",
      headline: "One-dimensional ratings miss",
      gradientText: "who people actually are",
      description:
        "A thumbs-up / thumbs-down reference tells you nothing about fit. The PM who's brilliant at strategy but terrible at execution looks the same as the PM who ships everything but can't think beyond the sprint.",
      stats: [
        { value: "1", label: "Dimension in typical refs", description: "Most reference checks boil down to a single question: positive or negative?" },
        { value: "8", label: "Dimensions in SkillPass", description: "We capture a full ability profile so employers can match to role requirements." },
        { value: "62%", label: "Fit improvement", description: "Teams using multi-dimensional matching report 62% better role fit in the first year." },
      ],
    },
    solution: {
      badge: "The Eight Dimensions",
      headline: "A complete picture,",
      gradientText: "not a snapshot",
      description:
        "Each dimension is rated independently via forced-choice ranking. Here's what we measure and why each one matters.",
      features: [
        { title: "Technical Ability", description: "Can they do the core work? Evaluated relative to peers in the same domain — so a designer's technical ability is compared against other designers, not engineers." },
        { title: "Leadership & Communication", description: "Do people follow their direction? Can they explain complex ideas to non-experts? These two dimensions predict management trajectory." },
        { title: "Reliability & Work Ethic", description: "Do they deliver on commitments? Do they put in the effort when it matters? These are the consistency dimensions — they predict long-term performance better than raw talent." },
        { title: "Creativity, Coachability & Collaboration", description: "Do they generate novel solutions? Can they take feedback and improve? Do they make the people around them better? These dimensions predict team impact." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We hired two candidates with identical composite scores. The dimension breakdown showed one was a natural leader with lower technical depth, and the other was deeply technical but preferred heads-down work. We placed them perfectly.",
        name: "Alicia Reeves",
        role: "Head of People",
        detail: "Growth-stage SaaS company",
      },
      stats: [
        { value: "8", label: "Dimensions measured" },
        { value: "5", label: "Ranking tiers" },
        { value: "62%", label: "Better role fit" },
      ],
    },
    cta: {
      headline: "See your professional profile in",
      gradientText: "full resolution",
      description: "Most people have never seen a structured map of their strengths and gaps. Your SkillPass profile gives you that.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
    },
    faq: [
      { q: "Why these specific 8 dimensions?", a: "We selected them from I/O psychology research on the strongest predictors of job performance and team outcomes. Each dimension has decades of validation data behind it." },
      { q: "Can employers weight dimensions differently?", a: "Yes. An employer hiring for a team lead role might weight leadership and communication at 2x. A research lab might weight technical ability and creativity higher." },
      { q: "How are dimensions scored?", a: "Each dimension is scored on a percentile basis derived from forced-choice rankings. If 3 out of 4 references place you in the 'top 10%' for reliability, your reliability percentile reflects that consensus." },
    ],
  },

  // 169 — forced-choice-rankings
  {
    slug: "forced-choice-rankings",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Forced-Choice Rankings | Why SkillPass References Actually Work",
      description:
        "Forced-choice rankings eliminate grade inflation in references. Raters must place candidates in top 5%, 10%, 25%, 50%, or bottom 50% — no more everyone-is-great.",
    },
    hero: {
      badge: "Forced-Choice Method",
      headline: "When everyone's 'excellent,' nobody is.",
      gradientText: "So we fixed it.",
      subheadline:
        "Traditional references let raters dodge differentiation. Our forced-choice format requires placing each candidate in a distribution tier — top 5%, top 10%, top 25%, top 50%, or bottom 50%. It's uncomfortable. It's also why it works.",
      primaryCta: { text: "Get Calibrated References", href: "/signup" },
      secondaryCta: { text: "See the research", href: "/methodology" },
    },
    problem: {
      badge: "Reference Inflation",
      headline: "The Lake Wobegon effect",
      gradientText: "kills hiring signal",
      description:
        "In Garrison Keillor's fictional town, every child is above average. In traditional references, every candidate is too. This ceiling effect makes the data worthless.",
      stats: [
        { value: "96%", label: "Rated 'above average'", description: "In traditional reference formats, almost no one gets rated below average. The distribution is hopelessly skewed." },
        { value: "4.6/5", label: "Mean Likert score", description: "When references use a 1-5 scale, the average response is 4.6. That leaves almost no room for differentiation." },
        { value: "$0", label: "Value of inflated refs", description: "If every candidate gets the same glowing review, the signal-to-noise ratio is effectively zero." },
      ],
    },
    solution: {
      badge: "The Fix",
      headline: "Forced distribution",
      gradientText: "creates real signal",
      description:
        "By requiring raters to place candidates relative to everyone they've ever worked with, we restore the variance that traditional references destroy.",
      features: [
        { title: "Five clear tiers", description: "Top 5%, top 10%, top 25%, top 50%, bottom 50%. Raters must pick one for each dimension. No \"4.5 out of 5\" hedging." },
        { title: "Relative to all peers, not just this candidate", description: "We ask: \"Compared to everyone you've worked with in a similar role, where does this person fall?\" That's a meaningful comparison set." },
        { title: "Rater calibration over time", description: "References who've rated many candidates develop a track record. We know which raters grade hard, which grade easy, and adjust accordingly." },
        { title: "Statistical validation", description: "Forced-choice references show 3.6x higher predictive validity than Likert-scale references in our internal validation studies." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I've given maybe 20 references through SkillPass now. The forced-choice format made me genuinely think about where each person falls. My ratings are honest because the format demands it.",
        name: "James Okoye",
        role: "Principal Engineer",
        detail: "12 years industry experience",
      },
      stats: [
        { value: "3.6x", label: "Higher validity" },
        { value: "5", label: "Distribution tiers" },
        { value: "82%", label: "Rater completion rate" },
      ],
    },
    cta: {
      headline: "References that",
      gradientText: "differentiate",
      description: "Invite your references to a 10-minute structured ranking. Get signal that actually helps you stand out.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    faq: [
      { q: "Won't references just put everyone in the top tier to be nice?", a: "They can, but calibration catches it. A rater who puts everyone in the top 5% gets flagged as uncalibrated, and their responses carry less weight." },
      { q: "What if I genuinely am top 5% in everything?", a: "Then multiple independent references will agree on that. Multi-source agreement at the top tier is extremely strong signal — and quite rare." },
      { q: "Is forced-choice backed by research?", a: "Yes. Forced-distribution rating formats have been studied in I/O psychology since the 1950s. They consistently outperform free-response and Likert scales in reducing leniency bias." },
      { q: "Can I see which tier my references put me in?", a: "You see your aggregate percentile per dimension, not individual rater responses. This protects reference honesty." },
    ],
  },

  // 170 — institution-tier-scoring
  {
    slug: "institution-tier-scoring",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Institution Tier Scoring | How SkillPass Calibrates Across Schools",
      description:
        "Not all 3.8 GPAs are equal. SkillPass calibrates academic scores across 4,000+ institutions using registrar data, selectivity, and grading norms.",
    },
    hero: {
      badge: "Academic Calibration",
      headline: "Your school's grading norms shouldn't",
      gradientText: "determine your career.",
      subheadline:
        "A student who earned a 3.4 in a program that averages 2.9 outperformed a student with a 3.8 in a program that averages 3.7. Our institution tier scoring makes that visible.",
      primaryCta: { text: "Get Your Calibrated GPA", href: "/signup" },
      secondaryCta: { text: "Methodology", href: "/methodology" },
      trustLine: "Data from 4,000+ accredited institutions worldwide.",
    },
    problem: {
      badge: "The Calibration Gap",
      headline: "Employers are comparing",
      gradientText: "apples to mangoes",
      description:
        "Without calibration, employers either ignore GPA entirely or use crude cutoffs that systematically disadvantage students from rigorous programs.",
      stats: [
        { value: "3.0", label: "Common GPA cutoff", description: "Many employers use a flat 3.0 cutoff, which eliminates top students from harder-grading schools." },
        { value: "0.8", label: "Median GPA range across schools", description: "The difference between the easiest and hardest median GPAs in our database." },
        { value: "37%", label: "Candidates unfairly filtered", description: "Over a third of qualified candidates get cut by raw GPA filters that ignore institutional context." },
      ],
    },
    solution: {
      badge: "How We Calibrate",
      headline: "Fair comparison,",
      gradientText: "school by school",
      description:
        "We build a calibration model for every institution in our database, then apply it course by course.",
      features: [
        { title: "Registrar grade distributions", description: "We collect actual grade distributions from registrars, published data sets, and Freedom of Information requests to know what grades actually look like at each school." },
        { title: "Selectivity adjustment", description: "The incoming student body matters. A school with a 5% acceptance rate has a different baseline ability level than one with 80%." },
        { title: "Department-level norms", description: "Engineering and humanities departments at the same school often have very different grading cultures. We calibrate at the department level." },
        { title: "Longitudinal trend correction", description: "Grade inflation isn't static. We track how grading norms shift over time so a 2015 GPA is compared to 2015 norms, not today's." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I went to a state school that grades hard. My 3.3 always looked weak on paper. SkillPass showed it calibrated to a 3.7 equivalent — and I finally started getting interviews at the companies I wanted.",
        name: "Priya Sharma",
        role: "Software Engineer",
        detail: "Now at a top-10 tech company",
      },
      stats: [
        { value: "4,000+", label: "Institutions" },
        { value: "37%", label: "Rescued from cutoffs" },
        { value: "Quarterly", label: "Data refresh" },
      ],
    },
    cta: {
      headline: "Let your grades speak in",
      gradientText: "proper context",
      description: "Upload your transcript. We'll show you — and employers — what your GPA actually means relative to your institution.",
      primaryCta: { text: "Upload Transcript", href: "/signup" },
    },
    faq: [
      { q: "Does this help or hurt students from 'easy' schools?", a: "It normalizes. Students from inflated programs may see their calibrated GPA drop slightly, but the system rewards actual achievement relative to peers — which benefits everyone in the long run." },
      { q: "What data sources do you use?", a: "Registrar reports, published institutional research, IPEDS data, and Freedom of Information requests. We verify against multiple sources before adding a school to our calibration set." },
      { q: "Can I dispute my institution's calibration?", a: "You can submit additional data or corrections through our support team. We investigate and update calibration models when presented with new evidence." },
    ],
  },

  // 171 — course-rigor-scoring
  {
    slug: "course-rigor-scoring",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Course Rigor Scoring | GPA Weighted by Course Difficulty",
      description:
        "Not all courses are equal. SkillPass weights your GPA by course level, department difficulty, and whether you took the hard path or the easy one.",
    },
    hero: {
      badge: "Course Rigor",
      headline: "An A in intro psych and an A in distributed systems",
      gradientText: "are not the same A.",
      subheadline:
        "Flat GPAs treat every course equally. We don't. Our course rigor scoring weights your grades by difficulty level, department norms, and course type — so taking the hard path is rewarded, not hidden.",
      primaryCta: { text: "Get Your Rigor Score", href: "/signup" },
      secondaryCta: { text: "See how it works", href: "/methodology" },
    },
    problem: {
      badge: "GPA Blind Spots",
      headline: "Flat GPAs",
      gradientText: "reward easy choices",
      description:
        "Students who strategically pad their schedules with easy electives get higher GPAs than students who challenge themselves. A flat number can't tell the difference.",
      stats: [
        { value: "0.4", label: "GPA boost from easy courses", description: "Students who optimize for easy electives average 0.4 points higher than those who don't, per our analysis of 500K+ transcripts." },
        { value: "68%", label: "Employers who want rigor data", description: "Most hiring managers say they'd love to know which candidates took challenging coursework — they just can't tell from a GPA alone." },
        { value: "0", label: "Resume lines for course difficulty", description: "There's currently no standard way to communicate course rigor on a resume or application." },
      ],
    },
    solution: {
      badge: "Rigor Weights",
      headline: "Harder courses,",
      gradientText: "higher weight",
      description:
        "Every course on your transcript receives a rigor multiplier based on three factors.",
      features: [
        { title: "Course level", description: "A 400-level or graduate course in your major carries a higher weight than a 100-level survey course. The multiplier increases with course number." },
        { title: "Department grading norms", description: "An A in a department where the average grade is B- counts more than an A in a department where the average is A-. We use actual departmental data." },
        { title: "Core vs. elective classification", description: "Required courses in your major are weighted more heavily than distribution requirements and free electives." },
        { title: "Quantitative rigor flag", description: "Courses with heavy quantitative content (math, stats, CS theory) receive a small additional weight, reflecting their demonstrated correlation with analytical job performance." },
      ],
    },
    proof: {
      testimonial: {
        quote: "My GPA was 3.2, which sounds mediocre. But I took every hard course my department offered. SkillPass's rigor-weighted score was equivalent to a 3.6. That's the story my transcript was trying to tell.",
        name: "Kevin Nguyen",
        role: "Data Scientist",
        detail: "Hired through SkillPass pipeline",
      },
    },
    cta: {
      headline: "Show employers the",
      gradientText: "real difficulty of your path",
      description: "Upload your transcript and let your course choices speak for themselves.",
      primaryCta: { text: "Upload Transcript", href: "/signup" },
    },
    faq: [
      { q: "How do you know which courses are harder?", a: "We use department-level grade distributions, course numbering conventions, and our own analysis of outcomes data. A course where the average grade is a C+ is objectively harder-graded than one averaging an A-." },
      { q: "Does this penalize students who took lighter course loads?", a: "It doesn't penalize — it just gives extra credit for rigor. A lighter schedule still produces a valid GPA; a rigorous schedule produces a GPA plus a rigor bonus." },
      { q: "What about AP/IB/transfer credits?", a: "AP and IB scores are included with their own calibration. Transfer credits are scored according to the originating institution's norms." },
    ],
  },

  // 172 — public-profile
  {
    slug: "public-profile",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Public SkillPass Profile | Your Verified Professional Identity",
      description:
        "Your SkillPass profile is a verified, portable professional identity — SkillScore, assessments, references, and credentials in one shareable link.",
    },
    hero: {
      badge: "Your Profile",
      headline: "One link. Everything verified.",
      gradientText: "Zero fluff.",
      subheadline:
        "LinkedIn lets anyone claim anything. Your SkillPass profile only shows verified data — calibrated academics, assessed skills, calibrated references, and performance metrics. It's the professional profile that can't be faked.",
      primaryCta: { text: "Create Your Profile", href: "/signup" },
      secondaryCta: { text: "See example profile", href: "/demo" },
    },
    problem: {
      badge: "Trust Deficit",
      headline: "Professional profiles are",
      gradientText: "fiction",
      description:
        "Anyone can list \"Python expert\" or \"strong leader\" on LinkedIn. There's no verification, no calibration, no accountability. Hiring managers know this, which is why they don't trust profiles.",
      stats: [
        { value: "85%", label: "Recruiters who distrust profiles", description: "The vast majority of hiring managers take self-reported skills and accomplishments with a massive grain of salt." },
        { value: "58%", label: "Candidates who inflate skills", description: "More than half of job seekers admit to stretching the truth on professional profiles, per HireRight data." },
        { value: "0%", label: "LinkedIn skills that are verified", description: "LinkedIn skill endorsements have no verification mechanism. Anyone can endorse anyone for anything." },
      ],
    },
    solution: {
      badge: "Verified Signal",
      headline: "A profile built on",
      gradientText: "evidence, not claims",
      description:
        "Every element of your SkillPass profile is backed by data — assessments you've taken, references who've vouched for you, transcripts you've uploaded.",
      features: [
        { title: "Composite SkillScore front and center", description: "Your 300-850 score is the first thing employers see. It's the headline that says \"this person has been measured.\"" },
        { title: "Sub-score breakdown", description: "Academic, Peer Signal, Performance, and Assessed Ability scores — each clickable for detailed methodology." },
        { title: "Shareable link", description: "One URL you can drop into applications, email signatures, or your LinkedIn summary. Anyone with the link sees your verified profile." },
        { title: "Privacy controls", description: "Choose what's public and what's visible only to employers you've applied to. You control your data." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I put my SkillPass profile link in my email signature. Three recruiters reached out within a week — they said the verified score made me stand out immediately.",
        name: "Elena Vasquez",
        role: "Full-Stack Developer",
        detail: "Received 3 inbound offers in one month",
      },
    },
    cta: {
      headline: "Build the profile that",
      gradientText: "speaks for itself",
      description: "No fluff. No self-reported nonsense. Just verified ability.",
      primaryCta: { text: "Create Free Profile", href: "/signup" },
    },
    faq: [
      { q: "Is my profile public by default?", a: "No. You choose your visibility settings. You can keep your profile private and share it selectively, make it public with a link, or make it discoverable in employer searches." },
      { q: "Can I remove information from my profile?", a: "You can hide specific assessments or scores from your public profile. However, employers who search for you through the SkillPass platform will see your complete data." },
      { q: "Does my SkillScore change over time?", a: "Yes. As you complete new assessments, add references, or upload updated transcripts, your score recalculates. Your score history is visible to show growth." },
    ],
  },

  // 173 — custom-weight-configs
  {
    slug: "custom-weight-configs",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Custom Weight Configurations | Tailor SkillScore to Your Role",
      description:
        "Every role is different. SkillPass lets employers adjust sub-score weights so a quant fund can prioritize assessed ability while a consultancy emphasizes peer signal.",
    },
    hero: {
      badge: "Custom Weights",
      headline: "Not every role needs the same",
      gradientText: "definition of great.",
      subheadline:
        "A machine learning researcher and a sales team lead are both valuable — but they need completely different skill profiles. Custom weight configs let employers redefine what a high SkillScore means for each role.",
      primaryCta: { text: "Configure Weights", href: "/employers" },
      secondaryCta: { text: "See examples", href: "/demo" },
    },
    problem: {
      badge: "One-Size Fails",
      headline: "Generic rankings miss",
      gradientText: "role-specific fit",
      description:
        "A single ranking that treats every dimension equally will always be wrong for specific roles. The best ML engineer and the best people manager look nothing alike on paper.",
      stats: [
        { value: "72%", label: "Mis-hire from wrong criteria", description: "Most hiring failures stem from evaluating candidates on the wrong dimensions for the role, not from lack of data." },
        { value: "4", label: "Sub-scores to weight", description: "Academic, Peer Signal, Performance, and Assessed Ability — each adjustable from 0x to 3x weight." },
        { value: "Unlimited", label: "Configs per account", description: "Create a different weighting for every role, team, or hiring philosophy." },
      ],
    },
    solution: {
      badge: "Flexible Weights",
      headline: "Define 'great' for",
      gradientText: "your specific context",
      description:
        "Drag sliders to adjust how much each sub-score contributes to the composite. Save configs by role and reuse them.",
      features: [
        { title: "Sub-score level weighting", description: "Increase Assessed Ability to 3x for technical roles, or boost Peer Signal to 2x for leadership positions. Any combination works." },
        { title: "Dimension-level granularity", description: "Go deeper: weight the 'creativity' reference dimension higher for design roles, or 'reliability' higher for operations." },
        { title: "Saved role templates", description: "Create and save weight configurations for recurring role types: 'Senior SWE,' 'PM,' 'Data Scientist.' Reuse them across job postings." },
        { title: "Instant re-ranking", description: "Change weights and the candidate pipeline re-sorts in real time. No waiting, no manual recalculation." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We weight Assessed Ability at 2.5x for our algo trading roles and Peer Signal at 2x for our client-facing roles. Same platform, completely different hiring criteria. It's elegant.",
        name: "Jonathan Reyes",
        role: "Head of Talent",
        detail: "Quantitative hedge fund, 150 employees",
      },
    },
    cta: {
      headline: "Rank candidates by what",
      gradientText: "actually matters for the role",
      description: "Set your weights once per role type. Every candidate in your pipeline re-sorts instantly.",
      primaryCta: { text: "Try Custom Weights", href: "/employers" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    faq: [
      { q: "What are the default weights?", a: "By default, all four sub-scores are weighted equally (1x each). Most employers customize within their first week on the platform." },
      { q: "Can different hiring managers on the same account use different weights?", a: "Yes. Each team member can save their own weight configs, or the account admin can set org-wide defaults that everyone inherits." },
      { q: "Do candidates know how I've weighted their scores?", a: "No. Your weight configurations are private to your team. Candidates only see their own scores, not how a specific employer has re-weighted them." },
      { q: "What happens if I set a weight to zero?", a: "That sub-score is excluded from the composite entirely. Setting Academic to 0x means you're ranking purely on peer signal, performance, and assessed ability." },
    ],
  },

  // 174 — roi-calculator
  {
    slug: "roi-calculator",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass ROI Calculator | Measure Your Hiring Cost Savings",
      description:
        "Calculate exactly how much SkillPass saves per hire — reduced time-to-fill, fewer bad hires, lower recruiter costs. Real numbers, not marketing math.",
    },
    hero: {
      badge: "ROI Calculator",
      headline: "Know what better hiring is",
      gradientText: "actually worth.",
      subheadline:
        "Bad hires cost $17K on average. Slow pipelines lose top candidates. Our ROI calculator uses your actual hiring data — volume, time-to-fill, offer acceptance rate — to show the specific dollar impact of switching to SkillPass.",
      primaryCta: { text: "Calculate Your ROI", href: "/roi-calculator" },
      secondaryCta: { text: "See average results", href: "/case-studies" },
    },
    problem: {
      badge: "Hidden Costs",
      headline: "Most companies don't know what bad hiring",
      gradientText: "costs them",
      description:
        "The visible costs — recruiter time, job board fees — are obvious. The invisible costs — lost productivity, team morale, repeat hiring — are typically 3-5x larger.",
      stats: [
        { value: "$17K", label: "Direct cost per bad hire", description: "Recruiting fees, onboarding time, severance, and restart costs. This is the number companies track." },
        { value: "$50K+", label: "True cost per bad hire", description: "Add lost productivity, team disruption, missed opportunities, and the cost of re-hiring. The real number is much bigger." },
        { value: "42", label: "Average days to fill", description: "Every open day costs revenue and overloads the existing team." },
      ],
    },
    solution: {
      badge: "Your Numbers",
      headline: "Real ROI from",
      gradientText: "your real data",
      description:
        "Input your company's hiring metrics and see exactly how much you'd save.",
      features: [
        { title: "Time-to-fill reduction", description: "Our platform averages 60% faster hiring. The calculator shows what that means in open-position costs for your specific salary ranges." },
        { title: "Bad hire reduction", description: "SkillPass users see 3x improvement in hire quality (measured by 90-day retention). The calculator models what fewer mis-hires saves you." },
        { title: "Recruiter time savings", description: "Automated screening replaces hours of resume review and phone screens. The calculator converts this into recruiter salary recovered." },
        { title: "Custom scenario modeling", description: "Adjust the sliders to be conservative, moderate, or aggressive with improvement estimates. See the range of likely outcomes." },
      ],
    },
    proof: {
      testimonial: {
        quote: "The ROI calculator projected $340K in annual savings. We tracked it for six months and the actual number was $410K. The model was conservative.",
        name: "Tara Simmons",
        role: "CFO",
        detail: "Mid-market SaaS, 600 employees",
      },
      stats: [
        { value: "$12K", label: "Avg savings per hire" },
        { value: "60%", label: "Faster time-to-fill" },
        { value: "3x", label: "Quality improvement" },
      ],
    },
    cta: {
      headline: "See the math for",
      gradientText: "your company",
      description: "It takes 2 minutes to input your data. The savings calculation is immediate.",
      primaryCta: { text: "Calculate ROI Now", href: "/roi-calculator" },
      secondaryCta: { text: "Book a Demo", href: "/demo" },
    },
    faq: [
      { q: "What inputs does the calculator need?", a: "Number of hires per year, average time-to-fill, average salary for open roles, and your estimated bad hire rate. All fields have pre-populated defaults based on industry benchmarks." },
      { q: "How do you estimate the 'bad hire' cost?", a: "We use the industry-standard formula: 30% of first-year salary for direct costs, plus a configurable multiplier for indirect costs (team disruption, lost productivity)." },
      { q: "Are these projected savings realistic?", a: "They're based on actual customer outcomes. The calculator uses conservative multipliers by default — most customers report savings above the projection." },
    ],
  },

  // 175 — shortlist-compare
  {
    slug: "shortlist-compare",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Shortlist & Compare | Side-by-Side Candidate Analysis",
      description:
        "Compare your top candidates side by side across all SkillScore dimensions. Shortlist, rank, and make final decisions with data — not gut feelings.",
    },
    hero: {
      badge: "Shortlist & Compare",
      headline: "Your final three candidates.",
      gradientText: "One clear choice.",
      subheadline:
        "You've narrowed the pipeline to a handful of finalists. Now what? The Shortlist & Compare tool lays them side by side across every dimension — composite score, sub-scores, individual reference dimensions — so the decision is obvious.",
      primaryCta: { text: "Try Shortlist Compare", href: "/employers" },
      secondaryCta: { text: "See it in action", href: "/demo" },
    },
    problem: {
      badge: "Decision Paralysis",
      headline: "Final-round decisions are",
      gradientText: "still guesswork",
      description:
        "You've spent weeks building a pipeline. Now you're choosing between three strong candidates based on interview vibes and whoever's notes were most recent. That's a terrible way to make a $150K decision.",
      stats: [
        { value: "$150K+", label: "Avg annual cost per hire", description: "Salary plus benefits, onboarding, equipment. Getting the final decision wrong is incredibly expensive." },
        { value: "67%", label: "Hiring managers who regret picks", description: "Two-thirds of managers say they've picked the wrong finalist at least once in the past two years." },
        { value: "4 days", label: "Avg delay in final decisions", description: "The longer finalists wait, the more likely your top choice accepts another offer." },
      ],
    },
    solution: {
      badge: "Data-Driven Final Round",
      headline: "Side-by-side comparison",
      gradientText: "across every dimension",
      description:
        "Pin candidates to a comparison view and see exactly where each one stands.",
      features: [
        { title: "Composite score ranking", description: "See finalists ordered by overall SkillScore, or by your custom-weighted composite." },
        { title: "Sub-score heatmap", description: "A color-coded grid showing each candidate's Academic, Peer Signal, Performance, and Assessed Ability scores. Strengths and gaps jump out instantly." },
        { title: "Dimension drill-down", description: "Click into any sub-score to see the component data — individual reference ratings, specific assessment results, calibrated course grades." },
        { title: "Export and share", description: "Generate a comparison PDF for the hiring committee. Everyone sees the same data, not just whoever talked to the candidates last." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We had three strong finalists for a VP Engineering role. The comparison view showed one had significantly higher Peer Signal — references consistently rated them top 5% for leadership. That sealed it.",
        name: "Linda Park",
        role: "CHRO",
        detail: "Series D startup, 800 employees",
      },
    },
    cta: {
      headline: "Make final decisions with",
      gradientText: "clarity, not gut",
      description: "Your hiring committee deserves data, not debate.",
      primaryCta: { text: "Start Free Trial", href: "/employers" },
    },
    faq: [
      { q: "How many candidates can I compare at once?", a: "Up to 10 candidates in a single comparison view. Most teams compare 3-5 finalists for a given role." },
      { q: "Can I share the comparison with my team?", a: "Yes. You can share a link to the comparison view with anyone on your SkillPass team, or export a PDF for stakeholders outside the platform." },
      { q: "Does the comparison use my custom weights?", a: "Yes. If you've configured custom weights for the role, the comparison view uses those weights to calculate the composite and ranking." },
    ],
  },

  // 176 — diversity-analytics
  {
    slug: "diversity-analytics",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Diversity Analytics | Bias-Reduced Hiring With SkillPass",
      description:
        "SkillPass diversity analytics help you identify where bias enters your pipeline and measure the impact of skills-based hiring on demographic diversity.",
    },
    hero: {
      badge: "Diversity Analytics",
      headline: "Meritocracy and diversity",
      gradientText: "aren't opposites.",
      subheadline:
        "When you hire based on verified ability instead of pedigree, pipelines naturally diversify. Our analytics show you where bias currently lives in your funnel and how skills-based evaluation changes the demographics — usually for the better.",
      primaryCta: { text: "See Analytics Demo", href: "/demo" },
      secondaryCta: { text: "Read the research", href: "/blog/diversity" },
    },
    problem: {
      badge: "Pipeline Bias",
      headline: "Good intentions aren't",
      gradientText: "enough without data",
      description:
        "Most companies want diverse teams. Few know where bias actually enters their pipeline. Is it the job description? The resume screen? The interview rubric? Without analytics, you're guessing.",
      stats: [
        { value: "60%", label: "Bias enters at screening", description: "The majority of demographic filtering happens at the resume screen stage, before any human conversation occurs." },
        { value: "26%", label: "Name-based callback gap", description: "Identical resumes with different names receive different callback rates. The data is unambiguous." },
        { value: "0", label: "Bias audits at most companies", description: "Most companies have never run a quantitative audit of where demographic filtering happens in their hiring funnel." },
      ],
    },
    solution: {
      badge: "Visibility",
      headline: "See where bias lives,",
      gradientText: "then fix it",
      description:
        "Aggregate, anonymized pipeline analytics show you the demographic breakdown at each stage of your hiring funnel.",
      features: [
        { title: "Funnel diversity breakdown", description: "See demographic composition at each stage — applicant pool, screen, interview, offer. Identify where drop-off occurs." },
        { title: "Before/after comparison", description: "Compare your pipeline demographics before and after adopting SkillScore-based screening. Most teams see measurable improvement." },
        { title: "Blind mode", description: "Enable blind mode to hide names, photos, and school names from the screening interface. Evaluate candidates purely on scores." },
        { title: "Compliance reporting", description: "Generate EEO and OFCCP-compatible reports directly from the platform. No manual data assembly." },
      ],
    },
    proof: {
      testimonial: {
        quote: "After switching to SkillScore-based screening, our engineering candidate pool's demographic diversity increased 28% — and quality metrics went up simultaneously. It wasn't a trade-off.",
        name: "Maria Santos",
        role: "VP People & Culture",
        detail: "Enterprise SaaS, 2,000+ employees",
      },
      stats: [
        { value: "28%", label: "More diverse pipelines" },
        { value: "3x", label: "Quality improvement" },
        { value: "Zero", label: "Compliance gaps" },
      ],
    },
    cta: {
      headline: "Build teams that reflect",
      gradientText: "real merit",
      description: "Skills-based hiring naturally diversifies. Our analytics prove it.",
      primaryCta: { text: "Request Demo", href: "/demo" },
    },
    faq: [
      { q: "Does SkillPass collect demographic data?", a: "Candidates can optionally self-report demographic information. Analytics are always presented in aggregate — individual demographic data is never visible to employers." },
      { q: "Does blind mode really reduce bias?", a: "Yes. When employers use blind mode (no names, photos, or school names), demographic callback rates equalize significantly. The data consistently shows that removing identity cues shifts decisions toward ability." },
      { q: "Can I use these analytics for compliance reporting?", a: "Yes. We generate reports compatible with EEO, OFCCP, and common internal audit formats. Your legal team can review the templates before deployment." },
    ],
  },

  // 177 — assessment-types
  {
    slug: "assessment-types",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "8 Assessment Types | Proctored, Standardized, Role-Specific",
      description:
        "Coding, system design, case consulting, data analysis, writing, GMA, Big Five, and SJT — 8 proctored assessment types that measure what interviews can't.",
    },
    hero: {
      badge: "Assessments",
      headline: "Eight ways to prove you're",
      gradientText: "actually good at your job.",
      subheadline:
        "A 45-minute interview measures interview skill. Our 8 proctored assessment types measure actual ability — from algorithmic coding to situational judgment to written communication. Take the ones relevant to your career and carry the results everywhere.",
      primaryCta: { text: "Browse Assessments", href: "/signup" },
      secondaryCta: { text: "Sample questions", href: "/assessments" },
    },
    problem: {
      badge: "Interviews Miss Most Ability",
      headline: "One conversation can't measure",
      gradientText: "eight dimensions of skill",
      description:
        "Interviews are good at measuring communication and quick thinking. They're terrible at measuring deep technical skill, written ability, judgment under realistic pressure, and personality fit.",
      stats: [
        { value: "8", label: "Ability dimensions we measure", description: "Each assessment type captures a distinct, validated dimension of professional ability." },
        { value: "0.18", label: "Interview validity coefficient", description: "Unstructured interviews predict job performance with a correlation of just 0.18. Our assessments average 0.52." },
        { value: "45 min", label: "Avg assessment time", description: "Each assessment takes about 45 minutes. You can spread them out over weeks." },
      ],
    },
    solution: {
      badge: "The Eight Types",
      headline: "Comprehensive, standardized,",
      gradientText: "proctored",
      description:
        "Every assessment is taken in a controlled environment with identity verification. Results are standardized across all test-takers.",
      features: [
        { title: "Coding Algorithms & System Design", description: "Algorithm challenges test problem-solving speed and correctness. System design tests evaluate architectural thinking for real-world scale." },
        { title: "Case Consulting & Data Analysis", description: "Business case assessments measure structured reasoning. Data analysis tests evaluate the ability to extract insights from messy datasets." },
        { title: "Writing & GMA", description: "Written communication tests evaluate clarity, persuasion, and structure. General Mental Ability measures fluid reasoning and problem-solving across domains." },
        { title: "Big Five Personality & SJT", description: "Validated personality assessment mapped to workplace behavior. Situational Judgment Tests present realistic scenarios and measure decision-making quality." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I took the coding, system design, and data analysis assessments. Together with my references and transcript, my SkillScore jumped 120 points. The assessments let me prove what my resume couldn't say.",
        name: "Andre Williams",
        role: "Backend Engineer",
        detail: "Hired at 2 companies through SkillPass",
      },
      stats: [
        { value: "8", label: "Assessment types" },
        { value: "0.52", label: "Avg validity" },
        { value: "Proctored", label: "All tests" },
      ],
    },
    cta: {
      headline: "Prove your ability with",
      gradientText: "standardized evidence",
      description: "Take the assessments relevant to your career. Carry the results to every application.",
      primaryCta: { text: "Start Assessments", href: "/signup" },
    },
    faq: [
      { q: "Do I have to take all 8 assessments?", a: "No. Take the ones relevant to your target roles. A software engineer might take coding and system design. A PM might take case consulting and writing. Each assessment contributes independently to your SkillScore." },
      { q: "How is proctoring handled?", a: "Assessments use webcam monitoring, screen recording, and browser lockdown. Identity is verified against your profile. Flagged sessions are reviewed by human proctors." },
      { q: "How do scores compare across test-takers?", a: "All scores are normed against the full population of test-takers for that assessment type. Your percentile ranking tells you where you fall relative to everyone who's taken the same test." },
      { q: "Can employers require specific assessments?", a: "Yes. Employers can filter by specific assessment scores. If a role requires a system design score above the 75th percentile, only candidates who've taken that assessment and scored high enough will appear." },
    ],
  },

  // 178 — score-history
  {
    slug: "score-history",
    category: "feature-deep-dive",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Score History | Track Your Professional Growth Over Time",
      description:
        "Your SkillScore isn't static. Score history shows how your verified ability has grown — retake assessments, add references, and watch your trajectory.",
    },
    hero: {
      badge: "Score History",
      headline: "Your growth, documented.",
      gradientText: "Not just claimed.",
      subheadline:
        "Anyone can say \"I've grown a lot this year.\" Your SkillPass score history shows it with data — assessment retakes, new reference signals, updated transcripts, all timestamped and verified.",
      primaryCta: { text: "Track Your Growth", href: "/signup" },
      secondaryCta: { text: "See example history", href: "/demo" },
    },
    problem: {
      badge: "Growth Is Invisible",
      headline: "Professional development is",
      gradientText: "hard to prove",
      description:
        "You've spent two years getting better at your job. You've taken courses, gotten promoted, earned strong reviews. But your resume looks the same to an outside observer.",
      stats: [
        { value: "83%", label: "Professionals who feel undervalued", description: "Most people believe their growth isn't visible to potential employers." },
        { value: "0", label: "Resumes that show trajectory", description: "Resumes are snapshots. They show where you are, not how fast you're improving." },
        { value: "2x", label: "Value of demonstrated growth", description: "Employers value candidates who show upward trajectory twice as highly as those with static profiles, per our survey data." },
      ],
    },
    solution: {
      badge: "Visible Trajectory",
      headline: "A growth chart for",
      gradientText: "your career",
      description:
        "Every time your score changes, the delta is recorded. Employers can see not just where you are, but where you're headed.",
      features: [
        { title: "Timestamped score snapshots", description: "Every assessment retake, every new reference, every transcript update generates a new data point on your score history." },
        { title: "Sub-score trajectories", description: "See which dimensions are growing fastest. Maybe your Assessed Ability jumped 80 points in six months while your Peer Signal stayed stable." },
        { title: "Growth velocity metric", description: "We calculate a growth rate that employers can filter on. High-velocity learners are flagged as such." },
        { title: "Milestone markers", description: "Hit a new tier (e.g., crossed 700)? It's marked on your timeline with the date, so employers see exactly when you leveled up." },
      ],
    },
    proof: {
      testimonial: {
        quote: "My SkillScore was 520 when I first signed up. After 8 months of focused development, I retested at 680. Three employers told me the growth trajectory was what caught their attention.",
        name: "Sam Torres",
        role: "Junior Data Analyst",
        detail: "Promoted to Senior within 14 months",
      },
    },
    cta: {
      headline: "Make your growth",
      gradientText: "impossible to ignore",
      description: "Start tracking today. Your future self will thank you for the documented trajectory.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    faq: [
      { q: "How often can I retake assessments?", a: "Most assessments have a 90-day cooling period between retakes. This prevents score inflation from repeated practice while still allowing you to demonstrate genuine improvement." },
      { q: "Do employers see all my past scores or just the current one?", a: "They see the full history by default. This is a feature, not a bug — a candidate who went from 450 to 700 tells a more compelling story than someone who's always been at 700." },
      { q: "What if my score goes down on a retake?", a: "It happens. The lower score becomes part of your history. Most employers understand that single test variations are normal and focus on the overall trajectory." },
      { q: "Can I hide my score history?", a: "You can set your profile to show only your current score. However, employers may prefer candidates who share full histories, as it demonstrates transparency." },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     O. COMPARISON PAGES  (13 pages, audience "all", funnel "mofu")
     ───────────────────────────────────────────────────────────────────────── */

  // 179 — vs-linkedin
  {
    slug: "vs-linkedin",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs LinkedIn | Verified Ability vs Self-Reported Claims",
      description:
        "LinkedIn is a networking tool. SkillPass is a verification platform. Compare verified SkillScores against self-reported endorsements.",
    },
    hero: {
      badge: "SkillPass vs LinkedIn",
      headline: "LinkedIn shows what you say.",
      gradientText: "SkillPass proves what you can do.",
      subheadline:
        "LinkedIn is great for networking. It's terrible for verifying ability. Anyone can list \"machine learning\" as a skill and collect endorsements from people who've never seen their code. That's not signal — it's noise.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "See the difference", href: "/demo" },
    },
    problem: {
      badge: "Self-Reported Everything",
      headline: "LinkedIn skills are",
      gradientText: "unverified claims",
      description:
        "There's no mechanism on LinkedIn to verify that someone actually possesses the skills they've listed. Endorsements require zero evidence. Recommendations are solicited praise.",
      stats: [
        { value: "0%", label: "Skills verified", description: "LinkedIn has no skill verification mechanism. Every endorsement is taken on faith." },
        { value: "58%", label: "Profiles with inflated claims", description: "More than half of professionals admit to inflating their skills on professional profiles." },
        { value: "85%", label: "Recruiters who don't trust it", description: "The vast majority of hiring managers discount LinkedIn skills entirely." },
      ],
    },
    solution: {
      badge: "Verified vs Claimed",
      headline: "Data beats",
      gradientText: "declarations",
      description:
        "SkillPass doesn't replace LinkedIn for networking. It replaces LinkedIn as a source of hiring signal.",
      features: [
        { title: "Proctored assessments vs endorsement clicks", description: "Our scores come from 45-minute proctored tests. LinkedIn endorsements take one click and zero thought." },
        { title: "Calibrated references vs solicited recommendations", description: "Forced-choice rankings from multiple sources. Not a paragraph your friend wrote." },
        { title: "Normalized academics vs self-reported education", description: "Calibrated GPA with institutional context. Not just a school name and degree." },
      ],
    },
    proof: {
      headline: "Why employers are adding SkillPass",
      testimonial: {
        quote: "We still use LinkedIn for sourcing. But when it's time to evaluate, we look at SkillPass. The verified data saves us from chasing candidates who look great on paper but can't deliver.",
        name: "Diana Foster",
        role: "Director of Recruiting",
        detail: "Enterprise software company",
      },
    },
    cta: {
      headline: "Go beyond the",
      gradientText: "self-reported profile",
      description: "Build a verified professional identity that employers actually trust.",
      primaryCta: { text: "Create Free Profile", href: "/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    comparison: {
      headline: "SkillPass vs LinkedIn: Feature Comparison",
      competitor: "LinkedIn",
      rows: [
        { feature: "Skill verification", us: "8 proctored assessment types", them: "Unverified endorsements" },
        { feature: "Reference quality", us: "Forced-choice 8-dimension rankings", them: "Solicited recommendation paragraphs" },
        { feature: "Academic data", us: "Calibrated GPA across 4,000+ schools", them: "School name and degree only" },
        { feature: "Composite score", us: "300-850 SkillScore", them: "No composite metric" },
        { feature: "Employer search/filter", us: "Filter by verified scores", them: "Filter by keywords and self-reported skills" },
        { feature: "Cost for talent", us: "Free", them: "Free (Premium optional)" },
        { feature: "Data integrity", us: "Proctored, verified, calibrated", them: "Self-reported, unverified" },
      ],
    },
  },

  // 180 — vs-hackerrank
  {
    slug: "vs-hackerrank",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs HackerRank | Full Ability Profile vs Coding Only",
      description:
        "HackerRank tests coding. SkillPass measures the whole person — academics, references, assessments across 8 types, and performance data.",
    },
    hero: {
      badge: "SkillPass vs HackerRank",
      headline: "Coding tests measure coding.",
      gradientText: "Hiring requires more.",
      subheadline:
        "HackerRank is fine for filtering who can invert a binary tree. But most hiring failures aren't about coding ability — they're about communication, collaboration, judgment, and reliability. SkillPass measures all of it.",
      primaryCta: { text: "Get Your Full Score", href: "/signup" },
      secondaryCta: { text: "Compare features", href: "/demo" },
    },
    problem: {
      badge: "Narrow Signal",
      headline: "Coding tests only cover",
      gradientText: "one dimension",
      description:
        "A candidate can ace every HackerRank challenge and still be a disaster to work with. Coding tests can't measure leadership, communication, reliability, or any of the soft skills that actually predict team success.",
      stats: [
        { value: "1", label: "Dimension tested", description: "HackerRank measures algorithmic coding ability. That's it." },
        { value: "65%", label: "Hires that fail for non-technical reasons", description: "The majority of bad hires fail because of culture fit, communication, or work style — not technical skill." },
        { value: "40%", label: "Candidates who drop off", description: "Many strong candidates refuse to complete HackerRank-style coding challenges, viewing them as demeaning." },
      ],
    },
    solution: {
      badge: "Full Picture",
      headline: "Technical skill plus",
      gradientText: "everything else",
      description:
        "SkillPass includes coding assessments as one of eight assessment types, plus calibrated academics, peer signal, and performance data.",
      features: [
        { title: "Coding + 7 more assessment types", description: "Algorithms, system design, case consulting, data analysis, writing, GMA, Big Five, and SJT. All proctored." },
        { title: "Peer signal for non-technical skills", description: "Leadership, communication, reliability, creativity — measured through calibrated references, not more tests." },
        { title: "Portable scores", description: "Take once, share everywhere. No retaking the same HackerRank test for every employer." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We used HackerRank for years. Great at filtering coding ability, but we still had a 35% first-year attrition rate because we weren't screening for anything else. SkillPass cut that to 12%.",
        name: "Ryan Cheng",
        role: "VP Engineering",
        detail: "Scale-up, 300 engineers",
      },
    },
    cta: {
      headline: "Measure the whole candidate,",
      gradientText: "not just the coder",
      description: "Better signal means better hires. Full stop.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    comparison: {
      headline: "SkillPass vs HackerRank: Feature Comparison",
      competitor: "HackerRank",
      rows: [
        { feature: "Assessment breadth", us: "8 assessment types (coding, design, case, data, writing, GMA, personality, SJT)", them: "Coding challenges only" },
        { feature: "Non-technical evaluation", us: "8-dimension peer references + personality", them: "None" },
        { feature: "Academic calibration", us: "GPA normalized across 4,000+ schools", them: "None" },
        { feature: "Portability", us: "Take once, share with any employer", them: "Must retake for each employer" },
        { feature: "Cost for talent", us: "Free", them: "Free for practice, employer-paid for hiring" },
        { feature: "Composite score", us: "300-850 composite from 4 sub-scores", them: "Per-challenge score only" },
      ],
    },
  },

  // 181 — vs-leetcode
  {
    slug: "vs-leetcode",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs LeetCode | Verified Ability vs Practice Puzzles",
      description:
        "LeetCode is a practice tool. SkillPass is a verification platform. Stop grinding puzzles and start building a verified professional identity.",
    },
    hero: {
      badge: "SkillPass vs LeetCode",
      headline: "Stop grinding. Start",
      gradientText: "proving.",
      subheadline:
        "LeetCode is a practice site for algorithm puzzles. It's not a credential, it's not verified, and the number of problems you've solved tells employers almost nothing about your actual job performance. SkillPass gives you something real.",
      primaryCta: { text: "Build Your Score", href: "/signup" },
      secondaryCta: { text: "Why it matters", href: "/demo" },
    },
    problem: {
      badge: "Puzzle Fatigue",
      headline: "LeetCode grinding is a",
      gradientText: "terrible use of your time",
      description:
        "Engineers spend 100+ hours grinding algorithm puzzles that have little correlation with day-to-day job performance. It's a hazing ritual, not an evaluation.",
      stats: [
        { value: "100+ hrs", label: "Average grind time", description: "That's the typical time investment for LeetCode interview prep. It's essentially a second unpaid job." },
        { value: "0.21", label: "Correlation to job performance", description: "Algorithm puzzle performance barely correlates with actual engineering productivity." },
        { value: "Not portable", label: "LeetCode progress", description: "Your 500 solved problems on LeetCode don't transfer to any application. You start from zero every time." },
      ],
    },
    solution: {
      badge: "Real Credentials",
      headline: "One investment,",
      gradientText: "permanent results",
      description:
        "Take proctored assessments once. Carry the verified results to every employer. No grinding required.",
      features: [
        { title: "Proctored and verified", description: "LeetCode is self-study with no identity verification. SkillPass assessments are proctored, timed, and tied to your verified identity." },
        { title: "Broader than algorithms", description: "System design, data analysis, case consulting, writing — skills that actually predict engineering success beyond year one." },
        { title: "Employer-recognized format", description: "50+ employers actively search SkillPass scores. Nobody searches LeetCode solve counts." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I spent three months grinding LeetCode before my last job search. This time I took the SkillPass assessments in a weekend and got more callbacks. Employers told me the verified score was more convincing than a high LeetCode contest ranking.",
        name: "Chris Park",
        role: "Senior Software Engineer",
        detail: "Received 5 offers in 3 weeks",
      },
    },
    cta: {
      headline: "Trade 100 hours of grinding for",
      gradientText: "30 minutes of proof",
      description: "Your time is worth more than puzzle practice.",
      primaryCta: { text: "Take Assessments", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs LeetCode: Feature Comparison",
      competitor: "LeetCode",
      rows: [
        { feature: "Purpose", us: "Verified professional credential", them: "Algorithm practice platform" },
        { feature: "Verification", us: "Proctored with identity check", them: "Unproctored, no verification" },
        { feature: "Skill breadth", us: "8 assessment types + references + academics", them: "Algorithm puzzles only" },
        { feature: "Portability", us: "One score, all employers", them: "Not recognized by employers" },
        { feature: "Time investment", us: "~30-60 min per assessment", them: "100+ hours of grinding" },
        { feature: "Employer integration", us: "50+ employers search directly", them: "No employer integration" },
        { feature: "Composite score", us: "300-850 composite", them: "Problem count / contest rating" },
      ],
    },
  },

  // 182 — vs-karat
  {
    slug: "vs-karat",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs Karat | Composite Score vs Interview-as-a-Service",
      description:
        "Karat outsources interviews. SkillPass replaces them with a comprehensive, multi-dimensional score that's portable across employers.",
    },
    hero: {
      badge: "SkillPass vs Karat",
      headline: "Outsourcing interviews still means",
      gradientText: "doing interviews.",
      subheadline:
        "Karat solves the operational burden of technical interviewing by having their engineers do it instead of yours. That saves your team time, but candidates still sit through one-off interviews that aren't portable. SkillPass flips the model entirely.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See the difference", href: "/demo" },
    },
    problem: {
      badge: "Same Model, Outsourced",
      headline: "Interview-as-a-Service doesn't fix the",
      gradientText: "fundamental problem",
      description:
        "The problem with technical interviews isn't who conducts them. It's that they're narrow, non-portable, high-variance, and biased toward interview performance rather than job performance.",
      stats: [
        { value: "Non-portable", label: "Karat results", description: "A great Karat interview at Company A doesn't count at Company B. Candidates start over every time." },
        { value: "1 dimension", label: "Per interview", description: "Each Karat interview tests a single skill area. It takes multiple interviews to build any picture." },
        { value: "$500+", label: "Per interview cost", description: "Outsourced interviews aren't cheap. The cost adds up fast for high-volume hiring." },
      ],
    },
    solution: {
      badge: "A Better Model",
      headline: "Replace interviews with",
      gradientText: "permanent credentials",
      description:
        "Instead of doing another interview at another company, candidates build a verified profile once and share it everywhere.",
      features: [
        { title: "Portable by design", description: "One SkillScore works for every application. No repeated interviews, no repeated prep, no repeated stress." },
        { title: "Multi-dimensional from day one", description: "Academic, peer signal, performance, and assessed ability — all captured in a single profile. Not one interview at a time." },
        { title: "Lower cost per candidate", description: "Employers pay $299-$799/mo for unlimited searches, not $500+ per interview." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We used Karat for a year. Our engineers loved not interviewing, but candidates hated doing yet another one-off interview. SkillPass gave us a way to evaluate without adding to candidate fatigue.",
        name: "Samira Patel",
        role: "Engineering Director",
        detail: "Hypergrowth startup, 150 engineers",
      },
    },
    cta: {
      headline: "Go beyond outsourced interviews to",
      gradientText: "verified credentials",
      description: "Better for candidates. Better for employers. Better signal for everyone.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Book Demo", href: "/demo" },
    },
    comparison: {
      headline: "SkillPass vs Karat: Feature Comparison",
      competitor: "Karat",
      rows: [
        { feature: "Evaluation model", us: "Composite score from 4 sub-scores", them: "Outsourced live interviews" },
        { feature: "Portability", us: "One score for all employers", them: "Per-employer, per-interview" },
        { feature: "Dimensions covered", us: "Academic + peer + performance + assessed (8 types)", them: "Technical interview skills" },
        { feature: "Candidate experience", us: "Build once, share everywhere", them: "Another interview per employer" },
        { feature: "Cost model", us: "$299-$799/mo subscription", them: "$500+ per interview" },
        { feature: "Non-technical signal", us: "8-dimension references, personality, SJT", them: "None" },
      ],
    },
  },

  // 183 — vs-resumes
  {
    slug: "vs-resumes",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs Resumes | Verified Data vs Polished Documents",
      description:
        "Resumes are marketing documents. SkillPass profiles are verified data. See why employers are supplementing resumes with SkillScores.",
    },
    hero: {
      badge: "SkillPass vs Resumes",
      headline: "Resumes are marketing.",
      gradientText: "SkillPass is evidence.",
      subheadline:
        "A resume is a document you wrote about yourself. It's designed to make you look good. That's literally its purpose. A SkillPass profile is third-party verified data — assessments, calibrated references, normalized academics. One is persuasion. The other is proof.",
      primaryCta: { text: "Build Verified Profile", href: "/signup" },
      secondaryCta: { text: "See the contrast", href: "/demo" },
    },
    problem: {
      badge: "Resumes Are Broken",
      headline: "The document that decides your career is",
      gradientText: "impossible to verify",
      description:
        "Recruiters spend 7 seconds on a resume. In that time, they can't verify a single claim. So they fall back on pattern matching — brand-name schools, brand-name employers — which is just pedigree bias in disguise.",
      stats: [
        { value: "7 sec", label: "Average resume review", description: "Eye-tracking studies show recruiters spend 6-7 seconds per resume. Nothing is verified in that time." },
        { value: "78%", label: "Resumes with exaggerations", description: "A CareerBuilder survey found that 78% of resumes contain misleading information." },
        { value: "0", label: "Verification built in", description: "Resumes have no verification mechanism. Every claim is taken on faith." },
      ],
    },
    solution: {
      badge: "Verified Alternative",
      headline: "From claims to",
      gradientText: "proof",
      description:
        "SkillPass doesn't replace resumes for narrative context. It replaces them as the basis for screening decisions.",
      features: [
        { title: "Every data point is verified", description: "Transcripts are parsed from official documents. References are collected independently. Assessments are proctored. Nothing is self-reported." },
        { title: "Quantified and comparable", description: "A 720 SkillScore means the same thing for every candidate. A resume doesn't have a comparable metric." },
        { title: "Bias-resistant screening", description: "Scores don't have names, photos, or school brands attached by default. Screening on ability, not pattern matching." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We used to spend 4 hours a day reading resumes. Now we filter by SkillScore first, then read resumes only for the shortlist. We're reviewing 80% fewer resumes and hiring better candidates.",
        name: "Katherine Willis",
        role: "Recruiting Lead",
        detail: "Mid-stage startup, 200 employees",
      },
    },
    cta: {
      headline: "Supplement your resume with",
      gradientText: "something verifiable",
      description: "Keep your resume for the story. Add SkillPass for the proof.",
      primaryCta: { text: "Get Started Free", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs Resumes: Feature Comparison",
      competitor: "Resumes",
      rows: [
        { feature: "Data integrity", us: "Third-party verified", them: "Self-reported, unverifiable" },
        { feature: "Screening time", us: "Instant score-based filtering", them: "6-7 seconds per manual review" },
        { feature: "Standardization", us: "300-850 universal scale", them: "Unique format per candidate" },
        { feature: "Bias resistance", us: "Blind mode available, score-based", them: "Name, school, photo visible" },
        { feature: "Skill measurement", us: "8 proctored assessment types", them: "Self-described skill lists" },
        { feature: "Reference data", us: "Forced-choice 8-dimension rankings", them: "\"References available upon request\"" },
        { feature: "Cost to candidate", us: "Free", them: "Free" },
      ],
    },
  },

  // 184 — vs-github
  {
    slug: "vs-github",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs GitHub Profile | Verified Score vs Contribution Graph",
      description:
        "GitHub shows you're active. SkillPass shows you're capable. Green squares don't measure system design, teamwork, or professional judgment.",
    },
    hero: {
      badge: "SkillPass vs GitHub",
      headline: "Green squares don't prove",
      gradientText: "you can do the job.",
      subheadline:
        "GitHub is a collaboration tool with a contribution graph stapled on. It shows activity, not ability. A developer pushing daily commits to toy projects looks the same as one shipping production code at a private company. SkillPass measures actual skill.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "See the difference", href: "/demo" },
    },
    problem: {
      badge: "Misleading Signals",
      headline: "GitHub profiles are",
      gradientText: "unreliable proxies",
      description:
        "Most professional code lives in private repos. Open-source contributions favor people with free time, not necessarily the best engineers. And contribution frequency says nothing about code quality.",
      stats: [
        { value: "85%", label: "Code in private repos", description: "The vast majority of professional software work happens behind private repositories. GitHub profiles miss it all." },
        { value: "Low", label: "Correlation to ability", description: "Contribution frequency and star counts are poor predictors of engineering capability in structured evaluations." },
        { value: "Biased", label: "Toward free time", description: "Open-source contribution rates correlate with privilege (no dependents, no second job) as much as with ability." },
      ],
    },
    solution: {
      badge: "Beyond the Graph",
      headline: "Measure ability,",
      gradientText: "not activity",
      description:
        "SkillPass assessments test what the contribution graph can't: system design thinking, code quality under time pressure, and non-technical professional skills.",
      features: [
        { title: "Standardized coding assessments", description: "Proctored algorithm and system design tests that measure ability in controlled conditions — not just who has the most public repos." },
        { title: "Peer signal for teamwork", description: "GitHub can't tell you if someone's a good collaborator. Calibrated references across 8 dimensions can." },
        { title: "Full professional profile", description: "Academics, performance, references, and assessed ability — the complete picture GitHub can't provide." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Half my best engineers have empty GitHub profiles because all their work is proprietary. SkillPass finally gave me a way to evaluate candidates who can't show public work.",
        name: "Brian Owens",
        role: "CTO",
        detail: "B2B SaaS, 120 engineers",
      },
    },
    cta: {
      headline: "Prove your ability without needing",
      gradientText: "a public portfolio",
      description: "Not everyone can show their work publicly. Everyone can verify their skills.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs GitHub: Feature Comparison",
      competitor: "GitHub Profile",
      rows: [
        { feature: "What it measures", us: "Verified ability across 4 dimensions", them: "Public contribution activity" },
        { feature: "Private work visibility", us: "Yes (assessments + references + performance data)", them: "No (private repos hidden)" },
        { feature: "Non-technical skills", us: "8-dimension reference signal + personality", them: "None" },
        { feature: "Standardization", us: "300-850 scale, normed across all users", them: "No standard metric" },
        { feature: "Bias risk", us: "Low (score-based, blind mode available)", them: "High (favors those with free time for OSS)" },
        { feature: "Employer search", us: "Yes, filter and rank by score", them: "No structured search" },
      ],
    },
  },

  // 185 — vs-portfolios
  {
    slug: "vs-portfolios",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs Portfolios | Verified Scores vs Curated Showcases",
      description:
        "Portfolios show your best work. SkillPass verifies your overall ability. One is cherry-picked. The other is comprehensive.",
    },
    hero: {
      badge: "SkillPass vs Portfolios",
      headline: "Portfolios show your highlights reel.",
      gradientText: "SkillPass shows your actual range.",
      subheadline:
        "A portfolio is curated — you show your best 5 projects and hide the 50 that were mediocre. That's fine for creative fields where the work speaks. But for most roles, employers need a broader, more reliable signal than a cherry-picked showcase.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See how it works", href: "/demo" },
    },
    problem: {
      badge: "Curation Bias",
      headline: "Portfolios reward presentation,",
      gradientText: "not consistency",
      description:
        "The candidate with the slickest portfolio isn't necessarily the most capable — they might just be the best at curating. Portfolios can't show reliability, teamwork, or ability under constraints.",
      stats: [
        { value: "5", label: "Projects in a typical portfolio", description: "The average portfolio showcases 3-7 hand-picked projects. That's a tiny, biased sample." },
        { value: "0%", label: "Collaboration visibility", description: "Portfolios show output, not process. There's no way to see how someone works with a team." },
        { value: "High", label: "Production cost", description: "Building and maintaining a polished portfolio takes significant time — time that could be spent building actual skills." },
      ],
    },
    solution: {
      badge: "Comprehensive Signal",
      headline: "Verified ability across",
      gradientText: "every dimension",
      description:
        "SkillPass complements portfolios by adding standardized, verified data that curated showcases can't provide.",
      features: [
        { title: "Standardized comparison", description: "Every candidate's SkillScore is on the same scale. Portfolios are impossible to compare apples-to-apples." },
        { title: "Collaboration and soft skills", description: "Reference data shows how you work with others — something no portfolio can demonstrate." },
        { title: "No production overhead", description: "Take assessments and invite references. No need to design, build, and maintain a showcase site." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Portfolios are great for designers and front-end developers. But for backend engineers, data scientists, PMs — there's nothing to 'show.' SkillPass fills that gap with verified data.",
        name: "Laura Kim",
        role: "Head of Talent",
        detail: "AI startup, 80 employees",
      },
    },
    cta: {
      headline: "Complement your portfolio with",
      gradientText: "verified proof",
      description: "Show your best work AND prove your full range.",
      primaryCta: { text: "Get Started", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs Portfolios: Feature Comparison",
      competitor: "Portfolios",
      rows: [
        { feature: "Data source", us: "Verified assessments, references, academics", them: "Self-selected work samples" },
        { feature: "Standardization", us: "300-850 universal scale", them: "Unique per candidate, no standard" },
        { feature: "Soft skills / teamwork", us: "8-dimension reference signal", them: "Not visible" },
        { feature: "Time to create", us: "30-60 min per assessment", them: "20-100+ hours to build and maintain" },
        { feature: "Applicable roles", us: "Any role", them: "Primarily design, front-end, creative" },
        { feature: "Employer filtering", us: "Score-based search and ranking", them: "Manual review only" },
      ],
    },
  },

  // 186 — vs-hired
  {
    slug: "vs-hired",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs Hired | Verified Ability vs Salary Marketplace",
      description:
        "Hired matches you by salary expectations. SkillPass ranks you by verified ability. Better signal means better matches.",
    },
    hero: {
      badge: "SkillPass vs Hired",
      headline: "Hired matches on salary.",
      gradientText: "SkillPass matches on ability.",
      subheadline:
        "Hired is a marketplace where companies bid on candidates based on salary expectations and self-reported profiles. It's efficient for logistics, but the matching signal is thin — mostly compensation alignment, not ability verification.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "Compare platforms", href: "/demo" },
    },
    problem: {
      badge: "Thin Signal",
      headline: "Salary matching isn't",
      gradientText: "ability matching",
      description:
        "Knowing a candidate wants $180K and has 5 years of experience tells you nothing about their actual capability relative to others at the same level.",
      stats: [
        { value: "0", label: "Verified assessments on Hired", description: "Hired has no assessment or verification infrastructure. Matching is based on profile data and salary fit." },
        { value: "Self-reported", label: "Skills data", description: "All skill claims on Hired are self-reported with no validation." },
        { value: "Salary-first", label: "Matching model", description: "The primary matching variable is compensation expectations, not ability." },
      ],
    },
    solution: {
      badge: "Ability-First Matching",
      headline: "Match on what",
      gradientText: "actually predicts success",
      description:
        "SkillPass rankings are based on verified ability data — not salary asks or years of experience.",
      features: [
        { title: "Verified scores for ranking", description: "Employers search and filter by SkillScore, not salary band. The best candidates surface regardless of compensation expectations." },
        { title: "Multi-dimensional signal", description: "Academic, peer, performance, and assessed ability — four verified dimensions vs. a salary number and a self-reported resume." },
        { title: "Candidate-controlled", description: "You own your profile and share it where you choose. No marketplace taking a placement fee." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Hired found us candidates in our salary range. SkillPass found us candidates who could actually do the job. We're using both now, but the SkillScore is what drives our final decisions.",
        name: "Trevor Singh",
        role: "Director of Engineering",
        detail: "Fintech company, 200 employees",
      },
    },
    cta: {
      headline: "Get matched on",
      gradientText: "proven ability",
      description: "Let your verified skills drive the conversation, not just your salary expectations.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs Hired: Feature Comparison",
      competitor: "Hired",
      rows: [
        { feature: "Matching signal", us: "Verified ability scores", them: "Salary expectations + self-reported profile" },
        { feature: "Assessments", us: "8 proctored types", them: "None" },
        { feature: "Reference data", us: "Forced-choice 8-dimension rankings", them: "None" },
        { feature: "Academic calibration", us: "GPA calibrated across 4,000+ schools", them: "School name only" },
        { feature: "Cost for talent", us: "Free", them: "Free (employers pay placement fee)" },
        { feature: "Score portability", us: "One score, all employers", them: "Per-marketplace profile" },
      ],
    },
  },

  // 187 — vs-interviewing-io
  {
    slug: "vs-interviewing-io",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs interviewing.io | Composite Score vs Mock Interviews",
      description:
        "interviewing.io offers anonymous practice interviews. SkillPass offers a verified, multi-dimensional credential. Practice vs proof.",
    },
    hero: {
      badge: "SkillPass vs interviewing.io",
      headline: "Practice interviews help you prep.",
      gradientText: "SkillPass proves you're ready.",
      subheadline:
        "interviewing.io is excellent for mock interview practice. But practice results aren't portable — you can't send your mock performance to employers. SkillPass gives you a verified credential that travels with you.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "Compare approaches", href: "/demo" },
    },
    problem: {
      badge: "Practice vs Proof",
      headline: "Mock interviews build confidence,",
      gradientText: "not credentials",
      description:
        "Practicing interviews is valuable prep. But you can't send an employer a video of your best mock interview. The practice doesn't convert into portable proof.",
      stats: [
        { value: "0", label: "Portable credentials", description: "interviewing.io results don't transfer to employer evaluations. Each real interview starts from zero." },
        { value: "1", label: "Skill type practiced", description: "Mock interviews focus on technical interviewing performance — a narrow slice of overall ability." },
        { value: "Limited", label: "Employer recognition", description: "While some employers source from interviewing.io, most use it as prep, not verification." },
      ],
    },
    solution: {
      badge: "Portable Proof",
      headline: "From practice to",
      gradientText: "permanent credential",
      description:
        "SkillPass assessments are proctored, standardized, and designed to be shared with employers directly.",
      features: [
        { title: "Verified and portable", description: "Take once, share with every employer. No more proving yourself from scratch each time." },
        { title: "Multi-dimensional", description: "Beyond interview performance: calibrated academics, peer references, assessed ability across 8 types, and performance data." },
        { title: "Employer-searchable", description: "50+ employers actively search SkillPass profiles. Your score works for you even when you're not applying." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I used interviewing.io to practice, then took SkillPass assessments to verify. The practice built my confidence; the SkillScore got me interviews without grinding through more mock sessions.",
        name: "Nina Kowalski",
        role: "Software Engineer",
        detail: "Landed role at top-20 tech company",
      },
    },
    cta: {
      headline: "Turn your skills into",
      gradientText: "permanent proof",
      description: "Stop practicing. Start proving.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs interviewing.io: Feature Comparison",
      competitor: "interviewing.io",
      rows: [
        { feature: "Purpose", us: "Verified professional credential", them: "Mock interview practice" },
        { feature: "Portability", us: "One score for all employers", them: "Practice results not transferable" },
        { feature: "Skill breadth", us: "8 assessment types + references + academics", them: "Technical interview practice" },
        { feature: "Employer integration", us: "50+ employers search directly", them: "Limited sourcing partnerships" },
        { feature: "Verification level", us: "Proctored, identity-verified", them: "Anonymous mock sessions" },
        { feature: "Non-technical evaluation", us: "Personality, SJT, 8-dimension references", them: "None" },
      ],
    },
  },

  // 188 — vs-codesignal
  {
    slug: "vs-codesignal",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs CodeSignal | Full Ability Score vs Coding GCA",
      description:
        "CodeSignal's GCA measures coding aptitude. SkillPass measures the whole professional — academics, references, 8 assessment types, and performance.",
    },
    hero: {
      badge: "SkillPass vs CodeSignal",
      headline: "A coding aptitude score is a start.",
      gradientText: "It's not the whole picture.",
      subheadline:
        "CodeSignal's General Coding Assessment is a solid measure of programming aptitude. But hiring requires more than coding speed — it requires system design thinking, collaboration skills, domain knowledge, and professional judgment. SkillPass measures all of it.",
      primaryCta: { text: "Build Your Full Score", href: "/signup" },
      secondaryCta: { text: "Feature comparison", href: "/demo" },
    },
    problem: {
      badge: "Partial Signal",
      headline: "Coding aptitude is one dimension of",
      gradientText: "many",
      description:
        "CodeSignal's GCA predicts coding-task performance well. It doesn't predict leadership, communication, reliability, or whether someone will actually thrive in your specific team environment.",
      stats: [
        { value: "1", label: "Core dimension measured", description: "GCA primarily measures coding speed and accuracy. That's one valid signal among many." },
        { value: "65%", label: "Failures from non-technical gaps", description: "Most bad hires fail for reasons coding tests don't measure — communication, culture fit, work style." },
        { value: "No references", label: "In CodeSignal's model", description: "Peer signal — one of the strongest predictors of team performance — is entirely absent." },
      ],
    },
    solution: {
      badge: "Complete Signal",
      headline: "Coding aptitude plus",
      gradientText: "everything else",
      description:
        "SkillPass includes coding assessments alongside 7 other assessment types, calibrated references, normalized academics, and performance data.",
      features: [
        { title: "8 assessment types vs 1", description: "Algorithms, system design, case, data, writing, GMA, Big Five, and SJT. Each adds a dimension CodeSignal doesn't cover." },
        { title: "Peer Signal integration", description: "Forced-choice references across 8 dimensions give employers the collaboration and soft-skill data that coding tests can't." },
        { title: "Academic calibration", description: "Normalized GPA adds educational context that pure assessment platforms skip entirely." },
      ],
    },
    proof: {
      testimonial: {
        quote: "CodeSignal found us strong coders. SkillPass found us strong coders who also collaborate well and communicate clearly. The difference in team performance after 6 months was dramatic.",
        name: "Alex Hoffman",
        role: "Head of Engineering",
        detail: "Cloud infrastructure company, 250 engineers",
      },
    },
    cta: {
      headline: "Get the full picture,",
      gradientText: "not just the coding piece",
      description: "Coding ability matters. So does everything else.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    comparison: {
      headline: "SkillPass vs CodeSignal: Feature Comparison",
      competitor: "CodeSignal",
      rows: [
        { feature: "Assessment types", us: "8 (coding, design, case, data, writing, GMA, personality, SJT)", them: "Primarily coding (GCA)" },
        { feature: "Reference/peer data", us: "Forced-choice 8-dimension rankings", them: "None" },
        { feature: "Academic signal", us: "Calibrated GPA across 4,000+ schools", them: "None" },
        { feature: "Composite score", us: "300-850 from 4 sub-scores", them: "GCA score (coding only)" },
        { feature: "Portability", us: "One score, all employers", them: "Per-employer test (some portability with GCA)" },
        { feature: "Non-technical evaluation", us: "Personality, SJT, references", them: "Limited" },
      ],
    },
  },

  // 189 — vs-ai-screeners
  {
    slug: "vs-ai-screeners",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs AI Resume Screeners | Verified Data vs Pattern Matching",
      description:
        "AI screeners parse resumes for keywords. SkillPass provides verified ability data. One automates bias; the other eliminates it.",
    },
    hero: {
      badge: "SkillPass vs AI Screeners",
      headline: "AI screeners automate bias.",
      gradientText: "SkillPass automates fairness.",
      subheadline:
        "AI resume screeners promise efficiency, but they're just pattern-matching against historical data — which means they reproduce every bias in your past hiring. SkillPass replaces resume parsing with verified ability scores that have no proxy-for-pedigree baked in.",
      primaryCta: { text: "See the Difference", href: "/demo" },
      secondaryCta: { text: "Read the research", href: "/blog/ai-bias" },
    },
    problem: {
      badge: "Automated Bias",
      headline: "Training AI on biased history",
      gradientText: "reproduces biased outcomes",
      description:
        "Amazon famously scrapped its AI hiring tool when it discovered it downranked resumes containing the word \"women's.\" That's not a bug unique to Amazon — it's inherent to training on historical hiring data.",
      stats: [
        { value: "100%", label: "Dependent on resume quality", description: "AI screeners can only analyze what's on the resume. If the resume is inflated or biased, the AI inherits that." },
        { value: "Opaque", label: "Decision reasoning", description: "Most AI screeners are black boxes. Candidates (and employers) can't see why someone was ranked up or down." },
        { value: "Amplified", label: "Historical bias", description: "If your past hires skew toward a certain school or demographic, the AI will learn to prefer those patterns." },
      ],
    },
    solution: {
      badge: "Verified Signal",
      headline: "Score on ability,",
      gradientText: "not resume keywords",
      description:
        "SkillPass doesn't parse resumes. It provides independently verified ability data that employers filter and rank directly.",
      features: [
        { title: "No resume parsing needed", description: "The SkillScore is computed from assessments, references, and transcripts — not extracted from a self-authored document." },
        { title: "Transparent methodology", description: "Every score has a clear derivation. Candidates and employers can see exactly how each component contributes." },
        { title: "Bias-reduced by design", description: "Scores are based on verified ability, not patterns learned from historical hiring data. Blind mode removes names and school brands entirely." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We replaced our AI resume screener with SkillScore-based filtering. Pipeline diversity improved 34% and quality-of-hire metrics went up. The AI was quietly filtering out great candidates.",
        name: "Keisha Brown",
        role: "VP Talent",
        detail: "Enterprise tech, 3,000 employees",
      },
    },
    cta: {
      headline: "Replace pattern matching with",
      gradientText: "verified ability",
      description: "Better data in, better decisions out.",
      primaryCta: { text: "Request Demo", href: "/demo" },
      secondaryCta: { text: "Start Free (Talent)", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs AI Resume Screeners: Feature Comparison",
      competitor: "AI Screeners",
      rows: [
        { feature: "Data source", us: "Verified assessments, references, transcripts", them: "Resume text parsing" },
        { feature: "Bias risk", us: "Low (ability-based, blind mode available)", them: "High (trained on historical bias)" },
        { feature: "Transparency", us: "Full score derivation visible", them: "Black box decisions" },
        { feature: "Candidate experience", us: "Build once, share everywhere", them: "Resume auto-rejected without feedback" },
        { feature: "Verification", us: "Proctored assessments, calibrated references", them: "No verification of resume claims" },
        { feature: "Regulatory risk", us: "Low (transparent, auditable)", them: "High (NYC Local Law 144, EU AI Act)" },
      ],
    },
  },

  // 190 — vs-skills-platforms
  {
    slug: "vs-skills-platforms",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs Skills Assessment Platforms | Composite Score vs Point Solutions",
      description:
        "Most skills platforms test one thing. SkillPass combines assessments, calibrated references, normalized academics, and performance data into one composite score.",
    },
    hero: {
      badge: "SkillPass vs Skills Platforms",
      headline: "Point solutions measure a point.",
      gradientText: "SkillPass measures the person.",
      subheadline:
        "There are dozens of skills assessment platforms — each good at measuring one thing. SkillPass is the only platform that combines proctored assessments, calibrated references, normalized academics, and performance data into a single composite score.",
      primaryCta: { text: "See the Full Platform", href: "/demo" },
      secondaryCta: { text: "Build your score", href: "/signup" },
    },
    problem: {
      badge: "Fragmented Signal",
      headline: "Using 4 tools to measure 4 dimensions is",
      gradientText: "expensive chaos",
      description:
        "Companies cobble together HackerRank for coding, a reference check service, maybe a personality test, and their own GPA filters. None of these talk to each other. There's no composite view.",
      stats: [
        { value: "4+", label: "Point solutions required", description: "To approximate what SkillPass does in one platform, you'd need a coding platform, reference tool, transcript parser, and personality vendor." },
        { value: "$2K+/mo", label: "Combined cost", description: "Each point solution has its own subscription. Together they cost more than SkillPass and still don't integrate." },
        { value: "0", label: "Composite score available", description: "No existing combination of tools produces a single, weighted, composite ability score." },
      ],
    },
    solution: {
      badge: "One Platform",
      headline: "Every signal,",
      gradientText: "one composite",
      description:
        "SkillPass is the only platform where all ability signals — academic, peer, performance, and assessed — feed into a single score.",
      features: [
        { title: "Four sub-scores, one composite", description: "Academic, Peer Signal, Performance, and Assessed Ability. Each measured rigorously, all contributing to the 300-850 SkillScore." },
        { title: "Custom weighting", description: "Adjust how much each sub-score matters for each role. No other platform lets you blend this many signals with configurable weights." },
        { title: "Single candidate view", description: "Everything about a candidate in one profile. No switching between platforms to build a complete picture." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We were paying for HackerRank, Checkster, and a personality vendor. SkillPass replaced all three with better data and a composite score none of them could offer. We saved $1,800/month.",
        name: "Megan Torres",
        role: "Director of Talent Ops",
        detail: "Tech company, 500 employees",
      },
    },
    cta: {
      headline: "One platform. Every signal.",
      gradientText: "One score.",
      description: "Stop juggling point solutions. Get the composite view.",
      primaryCta: { text: "Request Demo", href: "/demo" },
      secondaryCta: { text: "Start Free (Talent)", href: "/signup" },
    },
    comparison: {
      headline: "SkillPass vs Point Solutions: Feature Comparison",
      competitor: "Skills Platforms (Typical)",
      rows: [
        { feature: "Assessment breadth", us: "8 proctored types in one platform", them: "1-2 types per platform" },
        { feature: "Reference integration", us: "Built-in forced-choice 8-dimension", them: "Separate vendor required" },
        { feature: "Academic calibration", us: "GPA calibrated across 4,000+ schools", them: "Not offered" },
        { feature: "Composite score", us: "300-850 weighted composite", them: "Individual test scores only" },
        { feature: "Custom weighting", us: "Employer-configurable sub-score weights", them: "Not applicable" },
        { feature: "Cost", us: "$299-$799/mo (all-in)", them: "$2,000+/mo for comparable coverage" },
      ],
    },
  },

  // 191 — plus-your-ats
  {
    slug: "plus-your-ats",
    category: "comparison",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass + Your ATS | Add Verified Scores to Your Existing Workflow",
      description:
        "SkillPass integrates with your ATS — Greenhouse, Lever, Workday, and more. Add SkillScores to your existing hiring workflow without ripping anything out.",
    },
    hero: {
      badge: "ATS Integration",
      headline: "Don't replace your ATS.",
      gradientText: "Supercharge it.",
      subheadline:
        "You don't need to rip out Greenhouse or Lever to use SkillPass. Our integrations push SkillScores directly into your existing workflow — as candidate tags, custom fields, or scorecard data. Better signal, zero workflow disruption.",
      primaryCta: { text: "See Integrations", href: "/integrations" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    problem: {
      badge: "Workflow Friction",
      headline: "New tools that break existing workflows",
      gradientText: "don't get adopted",
      description:
        "Your team has spent years building their hiring workflow around your ATS. Any new tool that requires switching screens, copying data, or learning a new interface will be resisted and eventually abandoned.",
      stats: [
        { value: "67%", label: "Tool abandonment rate", description: "Two-thirds of new HR tech tools are abandoned within 12 months because they don't integrate into existing workflows." },
        { value: "3+", label: "Screens per candidate today", description: "Recruiters already toggle between their ATS, email, and scheduling tools. Adding another tab kills adoption." },
        { value: "$50K+", label: "Wasted on shelfware", description: "The average mid-size company spends $50K+ annually on HR tools that nobody actually uses." },
      ],
    },
    solution: {
      badge: "Seamless Integration",
      headline: "SkillScores inside",
      gradientText: "the tools you already use",
      description:
        "We push data into your ATS. Your recruiters never leave their familiar interface.",
      features: [
        { title: "Greenhouse integration", description: "SkillScores appear as custom candidate fields. Filter and sort within Greenhouse's native search." },
        { title: "Lever integration", description: "Scores sync to candidate profiles with sub-score breakdowns visible in the Lever sidebar." },
        { title: "Workday & custom ATS", description: "API-based integration for enterprise ATS platforms. Our team handles the setup." },
        { title: "Webhook and Zapier support", description: "For any ATS not directly supported, webhooks and Zapier integrations make data flow possible without custom engineering." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Our recruiters live in Greenhouse. The SkillPass integration means they see scores right next to the candidate profile. Adoption was instant because nothing about their workflow changed.",
        name: "Jordan Blake",
        role: "Head of Recruiting Ops",
        detail: "Series B startup, 300 employees",
      },
    },
    cta: {
      headline: "Add verified scores to",
      gradientText: "the workflow you already have",
      description: "Zero disruption. Maximum signal.",
      primaryCta: { text: "View Integrations", href: "/integrations" },
      secondaryCta: { text: "Book a Demo", href: "/demo" },
    },
    comparison: {
      headline: "SkillPass Alongside Your ATS",
      competitor: "ATS Alone",
      rows: [
        { feature: "Candidate scoring", us: "300-850 verified SkillScore in your ATS", them: "Recruiter gut + resume keywords" },
        { feature: "Screening automation", us: "Auto-filter by score thresholds", them: "Manual resume review" },
        { feature: "Reference data", us: "8-dimension calibrated references in candidate profile", them: "Phone call notes in freetext fields" },
        { feature: "Academic context", us: "Calibrated GPA visible alongside application", them: "Raw GPA if listed on resume" },
        { feature: "Workflow change required", us: "None — data pushes to your ATS", them: "N/A" },
        { feature: "Setup time", us: "Under 1 hour for supported ATS", them: "N/A" },
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
     P. INDUSTRY HIRING PROBLEMS  (5 pages, audience "employer", funnel "tofu")
     ───────────────────────────────────────────────────────────────────────── */

  // 192 — hiring-swe-broken
  {
    slug: "hiring-swe-broken",
    category: "industry-hiring",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "Software Engineer Hiring Is Broken | Here's How to Fix It",
      description:
        "Whiteboard puzzles, LeetCode hazing, and resume keyword matching don't predict engineering success. There's a better approach.",
    },
    hero: {
      badge: "Engineering Hiring",
      headline: "SWE hiring is broken and",
      gradientText: "everyone knows it.",
      subheadline:
        "Whiteboard interviews test whiteboard skills. LeetCode challenges test LeetCode practice. Neither tests whether someone can ship production code, design scalable systems, or work effectively on a team. The industry knows this. It's time to actually fix it.",
      primaryCta: { text: "See the Fix", href: "/employers" },
      secondaryCta: { text: "Read the data", href: "/blog/swe-hiring" },
      trustLine: "50+ engineering teams already use SkillPass for SWE hiring.",
    },
    problem: {
      badge: "The Broken System",
      headline: "The engineering interview industrial complex",
      gradientText: "wastes everyone's time",
      description:
        "Candidates spend months prepping. Interviewers spend hours per candidate. Companies burn tens of thousands per bad hire. And the signal quality? Barely better than a coin flip.",
      stats: [
        { value: "100+ hrs", label: "Candidate prep time", description: "The average SWE candidate spends 100+ hours preparing for interviews. That's 2.5 weeks of full-time work." },
        { value: "0.18", label: "Unstructured interview validity", description: "Unstructured technical interviews predict job performance with a correlation of 0.18. A coin flip is 0.0." },
        { value: "40%", label: "Offer rejections", description: "Top candidates reject offers because the interview experience was so painful they don't want to work there." },
        { value: "$30K", label: "Cost per engineering hire", description: "Recruiter time, interviewer time, tools, job boards. It adds up fast." },
      ],
    },
    solution: {
      badge: "A Better Approach",
      headline: "Replace the gauntlet with",
      gradientText: "verified signal",
      description:
        "Instead of putting every candidate through a 6-round interview marathon, screen on verified SkillScores and reserve interviews for culture fit and team alignment.",
      features: [
        { title: "Screen on verified scores, not resumes", description: "Filter by composite SkillScore or drill into coding, system design, and peer signal sub-scores. Skip the resume lottery." },
        { title: "Reduce interview rounds", description: "When you already know a candidate scored in the 90th percentile on system design, you don't need a 3-hour system design interview." },
        { title: "Better candidate experience", description: "Candidates build their SkillPass profile once. No more repeating the same coding challenge at 15 different companies." },
        { title: "Data-driven final decisions", description: "Shortlist and compare finalists side by side across every dimension. No more \"who had the best interview day.\"" },
      ],
    },
    proof: {
      headline: "Engineering teams that fixed their hiring",
      testimonial: {
        quote: "We cut our SWE interview process from 6 rounds to 2. SkillScores replaced the technical screen and coding challenge. Time-to-hire dropped 58% and we haven't had a bad hire in 4 months.",
        name: "Nathan Cruz",
        role: "VP Engineering",
        detail: "Series C startup, 200 engineers",
      },
      stats: [
        { value: "58%", label: "Faster hiring" },
        { value: "6 to 2", label: "Interview rounds" },
        { value: "0", label: "Bad hires in 4 months" },
      ],
    },
    cta: {
      headline: "Fix your engineering hiring",
      gradientText: "this quarter",
      description: "50+ teams already have. You're next.",
      primaryCta: { text: "Start Free Trial", href: "/employers" },
      secondaryCta: { text: "Book a Demo", href: "/demo" },
    },
  },

  // 193 — data-science-crisis
  {
    slug: "data-science-crisis",
    category: "industry-hiring",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "The Data Science Hiring Crisis | Why Good DS Candidates Are So Hard to Find",
      description:
        "Data science candidates look great on paper but fail in practice. The gap between credentials and ability is wider in DS than anywhere else.",
    },
    hero: {
      badge: "Data Science Hiring",
      headline: "Every DS candidate has a master's degree.",
      gradientText: "Not all of them can do the job.",
      subheadline:
        "Data science has a unique hiring problem: the credential-ability gap is enormous. A candidate with an MS in Data Science, three Kaggle medals, and a polished portfolio might still struggle with messy real-world data, unclear requirements, and stakeholder communication.",
      primaryCta: { text: "Find Verified DS Talent", href: "/employers" },
      secondaryCta: { text: "See the data", href: "/blog/ds-hiring" },
    },
    problem: {
      badge: "Credential Inflation",
      headline: "The DS talent market is",
      gradientText: "flooded with credentials",
      description:
        "There are now 700+ data science graduate programs in the US alone. Many produce graduates who can run a Jupyter notebook but can't design a data pipeline or communicate findings to a non-technical exec.",
      stats: [
        { value: "700+", label: "DS grad programs", description: "The explosion of DS programs means credentials alone don't differentiate candidates." },
        { value: "43%", label: "DS hires who underperform", description: "Nearly half of data science hires fail to meet expectations in the first year, per industry surveys." },
        { value: "$165K", label: "Average DS salary", description: "At this salary level, a bad hire is catastrophically expensive." },
      ],
    },
    solution: {
      badge: "Verified DS Ability",
      headline: "Screen for actual",
      gradientText: "data science capability",
      description:
        "SkillPass's data analysis assessment tests real DS ability — messy data sets, ambiguous prompts, time pressure. Combined with calibrated academics and peer signal, you get the full picture.",
      features: [
        { title: "Data analysis assessment", description: "Real datasets, real ambiguity. Not a clean Kaggle competition — the kind of messy analysis work actual DS roles demand." },
        { title: "Calibrated academic signal", description: "A master's from a top-5 program with a 3.8 means something different than one from a 200th-ranked program with a 3.8. We calibrate." },
        { title: "Communication via peer signal", description: "Can they explain findings to non-technical stakeholders? Reference data reveals what portfolios can't." },
        { title: "Writing assessment", description: "Data scientists who can write clearly are dramatically more effective. Our writing assessment measures this directly." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We hired three data scientists through SkillPass. All three were producing independently within 30 days. Our previous hires from traditional recruiting took 90 days to ramp. The pre-verified ability makes the difference.",
        name: "Raj Mehta",
        role: "Head of Data Science",
        detail: "Insurance analytics company",
      },
    },
    cta: {
      headline: "Hire data scientists who can actually",
      gradientText: "do the work",
      description: "Screen for real ability, not just credentials.",
      primaryCta: { text: "Start Hiring", href: "/employers" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
  },

  // 194 — pm-hiring-slow
  {
    slug: "pm-hiring-slow",
    category: "industry-hiring",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "PM Hiring Is Painfully Slow | How to Evaluate Product Managers Faster",
      description:
        "Product manager hiring takes 8+ weeks because there's no standard way to evaluate PM skills. SkillPass fixes that with structured assessments and calibrated references.",
    },
    hero: {
      badge: "PM Hiring",
      headline: "It shouldn't take 8 weeks to hire a",
      gradientText: "product manager.",
      subheadline:
        "PM hiring is uniquely painful because the role is hard to test for. There's no coding challenge equivalent. So companies run 6-8 interviews, each testing a different vague competency, and still end up unsure. SkillPass brings structure to the chaos.",
      primaryCta: { text: "Evaluate PMs Better", href: "/employers" },
      secondaryCta: { text: "See the approach", href: "/demo" },
    },
    problem: {
      badge: "Unstructured Evaluation",
      headline: "PM interviews are",
      gradientText: "vibes-based hiring",
      description:
        "Every PM interviewer has their own framework. One asks product sense questions, another does case studies, a third evaluates \"strategic thinking.\" None of these are standardized, so signal quality is abysmal.",
      stats: [
        { value: "8 weeks", label: "Average time to fill PM roles", description: "PM hiring takes longer than almost any other function because evaluation is so unstructured." },
        { value: "6-8", label: "Interview rounds typical", description: "Product managers often face more interview rounds than engineers because there's no agreed-upon screening method." },
        { value: "48%", label: "PM hiring regret rate", description: "Nearly half of PM hires are regretted within the first year, per product leadership surveys." },
      ],
    },
    solution: {
      badge: "Structured PM Evaluation",
      headline: "Measure PM ability with",
      gradientText: "real data",
      description:
        "Case consulting assessments, writing tests, peer signal, and situational judgment — together they capture what 8 interviews try to.",
      features: [
        { title: "Case consulting assessment", description: "Structured case analysis that tests product thinking, prioritization, and strategic reasoning — standardized and comparable across candidates." },
        { title: "Writing assessment", description: "PMs write all day — PRDs, strategy docs, stakeholder emails. Our writing assessment measures clarity, structure, and persuasion." },
        { title: "Peer Signal for PM skills", description: "Leadership, communication, creativity, and collaboration — the dimensions that separate great PMs from mediocre ones, rated by people who've worked with them." },
        { title: "SJT for judgment", description: "Situational judgment tests present realistic PM scenarios. How does the candidate handle competing priorities, ambiguous data, and executive pressure?" },
      ],
    },
    proof: {
      testimonial: {
        quote: "Our PM hiring process was 8 rounds over 6 weeks. We replaced the first 4 rounds with SkillPass data and cut time-to-hire to 3 weeks. The last two PMs we hired have been our best in years.",
        name: "Christina Lee",
        role: "VP Product",
        detail: "B2B SaaS, 100 PMs across the org",
      },
    },
    cta: {
      headline: "Hire better PMs in",
      gradientText: "half the time",
      description: "Structured evaluation beats 8 rounds of vibes.",
      primaryCta: { text: "Start Free Trial", href: "/employers" },
      secondaryCta: { text: "Book a Demo", href: "/demo" },
    },
  },

  // 195 — fixing-consulting-recruitment
  {
    slug: "fixing-consulting-recruitment",
    category: "industry-hiring",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "Fixing Consulting Recruitment | Beyond Case Interviews and Target Schools",
      description:
        "Consulting firms rely on target school lists and case interviews. Both are outdated. Here's how to find the best consultants regardless of pedigree.",
    },
    hero: {
      badge: "Consulting Recruitment",
      headline: "Target school lists are a",
      gradientText: "lazy filter.",
      subheadline:
        "MBB and Big 4 firms recruit from 20-30 \"target schools\" and screen with case interviews. This model worked when consulting was small and elite. Now it's leaving extraordinary talent on the table because they went to the wrong school.",
      primaryCta: { text: "Expand Your Pipeline", href: "/employers" },
      secondaryCta: { text: "See the data", href: "/blog/consulting" },
    },
    problem: {
      badge: "Pipeline Bottleneck",
      headline: "Recruiting from 30 schools for a",
      gradientText: "4,000-school talent pool",
      description:
        "There are 4,000+ four-year institutions in the US alone. Consulting firms recruit from maybe 30 of them. That's a 99.25% miss rate on potential talent.",
      stats: [
        { value: "30", label: "Typical target schools", description: "Most consulting firms seriously recruit from fewer than 30 undergraduate and MBA programs." },
        { value: "99.25%", label: "Schools ignored", description: "That's 3,970+ institutions whose graduates never get a fair shot, regardless of ability." },
        { value: "65%", label: "Case interview pass rate at targets", description: "Even from target schools, most candidates fail the case interview — which has questionable validity for actual consulting performance." },
      ],
    },
    solution: {
      badge: "Merit-Based Pipeline",
      headline: "Recruit from",
      gradientText: "everywhere",
      description:
        "SkillPass calibrates GPAs across all 4,000+ institutions and adds case consulting assessments, so you can find top talent at any school.",
      features: [
        { title: "Calibrated academics across all schools", description: "A 3.8 at a non-target school might calibrate higher than a 3.5 at a target. See the real academic signal." },
        { title: "Case consulting assessment", description: "Standardized case analysis that tests the same skills as a case interview, but at scale and without the school-brand filter." },
        { title: "Peer Signal for consulting competencies", description: "Communication, leadership, work ethic, and collaboration — the dimensions that predict consulting success, verified by references." },
        { title: "GMA for raw analytical horsepower", description: "General Mental Ability is the single strongest predictor of consulting performance. We measure it directly." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We added SkillPass to our consulting recruitment pipeline and found 40% of our best-performing new hires came from schools that weren't on our traditional target list. The calibrated data opened our eyes.",
        name: "Patricia Morgan",
        role: "Partner, Talent & Organization",
        detail: "Top-10 consulting firm",
      },
    },
    cta: {
      headline: "Find the best consultants,",
      gradientText: "not just the best pedigrees",
      description: "Expand your pipeline without lowering the bar.",
      primaryCta: { text: "Start Free Trial", href: "/employers" },
      secondaryCta: { text: "Talk to a Partner", href: "/demo" },
    },
  },

  // 196 — startup-hiring-no-team
  {
    slug: "startup-hiring-no-team",
    category: "industry-hiring",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "Startup Hiring Without a Recruiting Team | How to Compete for Talent",
      description:
        "Early-stage startups can't afford a recruiting team. SkillPass gives founders a way to evaluate candidates with data instead of gut feelings.",
    },
    hero: {
      badge: "Startup Hiring",
      headline: "You're a founder, not a recruiter.",
      gradientText: "Act like it.",
      subheadline:
        "You're trying to build a product, raise funding, and hire your first 10 employees simultaneously. You don't have a recruiting team. You don't have a structured interview process. You're making $150K decisions based on an hour-long conversation and a gut feeling.",
      primaryCta: { text: "Hire Smarter", href: "/employers" },
      secondaryCta: { text: "See startup pricing", href: "/pricing" },
      trustLine: "Plans start at $299/mo. Cancel anytime.",
    },
    problem: {
      badge: "Founder Hiring Chaos",
      headline: "Early-stage hiring is",
      gradientText: "terrifyingly unstructured",
      description:
        "Founders hire based on who impresses them in a conversation, who their network recommends, and who's available now. This isn't a hiring strategy — it's triage.",
      stats: [
        { value: "0", label: "Recruiting team members", description: "Pre-Series A startups almost never have a dedicated recruiter. The founders do it themselves." },
        { value: "50%", label: "Early hire failure rate", description: "Half of the first 10 hires at a startup don't work out. At this stage, one bad hire can kill the company." },
        { value: "23%", label: "Founder time spent recruiting", description: "Nearly a quarter of a founder's time goes to hiring. That's time not spent on product, customers, or fundraising." },
      ],
    },
    solution: {
      badge: "Data-Driven Startup Hiring",
      headline: "Enterprise-grade evaluation at",
      gradientText: "startup speed",
      description:
        "SkillPass gives you the candidate intelligence that Fortune 500 companies spend millions building — for $299/month.",
      features: [
        { title: "Search by SkillScore", description: "Instead of reading 200 resumes, search for candidates above a SkillScore threshold in your target role category. See a ranked list in seconds." },
        { title: "Pre-verified candidates", description: "Every candidate has proctored assessment scores, calibrated references, and normalized academics. The vetting is done before you ever talk to them." },
        { title: "Shortlist and compare", description: "Pin your top 5 candidates and compare them side by side. Make the decision with data, not with whoever's LinkedIn looked best." },
        { title: "Affordable at any stage", description: "$299/mo gets you unlimited searches and candidate views. No per-seat charges, no placement fees." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We're a 6-person startup. I was spending 15 hours a week on hiring. SkillPass cut that to 4 hours and the quality of our last 3 hires has been dramatically better. It's the recruiting team I can't afford to hire.",
        name: "Ravi Patel",
        role: "CEO & Co-founder",
        detail: "Pre-seed AI startup",
      },
    },
    cta: {
      headline: "Hire your first 10 like you have a",
      gradientText: "recruiting team of 10",
      description: "Start at $299/month. Cancel anytime. No placement fees.",
      primaryCta: { text: "Start Free Trial", href: "/employers" },
      secondaryCta: { text: "Book a Demo", href: "/demo" },
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
     Q. GEOGRAPHIC  (4 pages, audience "all", funnel "mofu")
     ───────────────────────────────────────────────────────────────────────── */

  // 197 — bay-area
  {
    slug: "bay-area",
    category: "geographic",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Bay Area Tech Hiring | Verified Talent in SF, SJ, Oakland",
      description:
        "The Bay Area talent market is brutally competitive. SkillPass helps employers cut through the noise and helps candidates stand out with verified ability scores.",
    },
    hero: {
      badge: "Bay Area",
      headline: "In the Bay, everyone's a",
      gradientText: "10x engineer.",
      subheadline:
        "The Bay Area has the densest concentration of tech talent on Earth — and the most inflated resumes. When every candidate claims to be a \"senior full-stack engineer with ML experience,\" you need a way to actually verify who's real. SkillPass does that.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "Employer tools", href: "/employers" },
      trustLine: "Used by 20+ Bay Area employers from seed to IPO.",
    },
    problem: {
      badge: "Bay Area Challenges",
      headline: "The most competitive talent market in the world has the",
      gradientText: "worst signal-to-noise ratio",
      description:
        "High demand and high salaries attract everyone — including candidates who've inflated their way into roles they can't handle. Sorting real ability from credential theater is the Bay Area's core hiring challenge.",
      stats: [
        { value: "$220K", label: "Avg SWE comp in SF", description: "At this salary level, a bad hire costs you a quarter million in the first year alone." },
        { value: "15 days", label: "Top candidate availability", description: "The best Bay Area candidates are off the market in 2 weeks. Slow pipelines lose them." },
        { value: "3.5x", label: "Applicants per role", description: "Bay Area roles get 3.5x more applicants than the national average. More noise, not more signal." },
      ],
    },
    solution: {
      badge: "Bay Area Advantage",
      headline: "Cut through the noise with",
      gradientText: "verified scores",
      description:
        "Whether you're a founder in SOMA or a candidate in the East Bay, SkillPass gives you a verified signal that rises above the resume noise.",
      features: [
        { title: "For employers: score-based screening", description: "Filter the 3.5x applicant flood by verified SkillScore. See the real top 10% in minutes, not days." },
        { title: "For candidates: stand out immediately", description: "In a market where everyone claims the same skills, a verified 750+ SkillScore is a genuine differentiator." },
        { title: "Speed advantage", description: "When top candidates are off the market in 15 days, pre-verified data lets you skip screening rounds and move faster." },
        { title: "Local employer network", description: "20+ Bay Area employers actively search SkillPass profiles. Your score works for you passively." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We're in the heart of SF competing with FAANG for every hire. SkillPass scores help us identify candidates who are actually as good as their Bay Area resumes claim. Completely changed our pipeline quality.",
        name: "Will Chen",
        role: "Head of Engineering",
        detail: "Series B AI company, San Francisco",
      },
    },
    cta: {
      headline: "Win the Bay Area",
      gradientText: "talent war",
      description: "Verified ability beats inflated resumes. Every time.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Employer Demo", href: "/demo" },
    },
  },

  // 198 — nyc-tech
  {
    slug: "nyc-tech",
    category: "geographic",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass for NYC Tech Hiring | Verified Talent Across Manhattan, Brooklyn, and Beyond",
      description:
        "NYC's tech scene is booming across fintech, media, e-commerce, and healthcare. SkillPass helps you evaluate candidates with verified data, not networking pedigree.",
    },
    hero: {
      badge: "NYC Tech",
      headline: "NYC tech is more than",
      gradientText: "who you know.",
      subheadline:
        "New York's tech ecosystem runs on networking — Columbia alumni, Goldman diaspora, first-name-basis VCs. That's great for dealmaking, terrible for meritocratic hiring. SkillPass introduces verified ability data to a market that's still hiring on pedigree and personal connections.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "NYC employer tools", href: "/employers" },
    },
    problem: {
      badge: "NYC Hiring Challenges",
      headline: "The network-driven market leaves",
      gradientText: "great talent invisible",
      description:
        "NYC hiring is dominated by referral networks — which systematically favor candidates from the same schools, same firms, and same social circles. Diverse, non-networked talent gets overlooked.",
      stats: [
        { value: "45%", label: "Hires from referrals", description: "Nearly half of NYC tech hires come through referrals. That's a network monoculture problem." },
        { value: "$195K", label: "Avg tech comp in NYC", description: "Competitive salaries attract applicants from everywhere — making differentiation harder." },
        { value: "Fintech + media + health", label: "Industry breadth", description: "NYC tech spans diverse industries. One-size-fits-all screening misses domain-specific needs." },
      ],
    },
    solution: {
      badge: "Meritocratic NYC Hiring",
      headline: "Hire on ability,",
      gradientText: "not alumni networks",
      description:
        "SkillPass breaks the referral monoculture by giving every candidate a verified, comparable ability score — regardless of their network.",
      features: [
        { title: "Network-independent evaluation", description: "Candidates from CUNY and candidates from Columbia get the same calibrated, verified evaluation. Ability, not connections." },
        { title: "Industry-specific assessment matching", description: "NYC's tech scene spans fintech, media, healthcare, and e-commerce. Custom weight configs let you optimize for domain-specific skills." },
        { title: "Diverse pipeline data", description: "See how skills-based screening changes your pipeline demographics compared to referral-based sourcing." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We were hiring almost exclusively from our founders' networks — Ivy League, Big 4, the usual. SkillPass opened our pipeline to candidates from across the city who scored higher than our typical 'pedigree' hires.",
        name: "Sarah Kim",
        role: "CEO",
        detail: "NYC-based fintech startup",
      },
    },
    cta: {
      headline: "Hire the best in NYC,",
      gradientText: "not just the best-connected",
      description: "Break out of the referral bubble.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Book Demo", href: "/demo" },
    },
  },

  // 199 — boston-cambridge
  {
    slug: "boston-cambridge",
    category: "geographic",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Boston & Cambridge | Verified Talent Near MIT, Harvard, and 60+ Schools",
      description:
        "Boston-Cambridge has the densest concentration of universities in the US. SkillPass calibrates across all of them, so talent from UMass competes fairly with MIT.",
    },
    hero: {
      badge: "Boston & Cambridge",
      headline: "Not every great hire went to",
      gradientText: "MIT or Harvard.",
      subheadline:
        "The Boston-Cambridge corridor has 60+ colleges and universities. But the hiring market acts like there are only 5. SkillPass calibrates academic records across every institution in the region, so talent from Northeastern or UMass-Amherst gets a fair comparison against MIT and Harvard grads.",
      primaryCta: { text: "Get Calibrated", href: "/signup" },
      secondaryCta: { text: "Employer tools", href: "/employers" },
    },
    problem: {
      badge: "Boston's Pedigree Problem",
      headline: "The city with the most universities has the",
      gradientText: "most school snobbery",
      description:
        "Boston's density of elite institutions creates an implicit hierarchy that dominates hiring. If you didn't go to MIT, Harvard, Tufts, or BC, you're fighting an uphill battle regardless of your actual ability.",
      stats: [
        { value: "60+", label: "Colleges in greater Boston", description: "The most university-dense metro in the US. An enormous talent pool, mostly untapped." },
        { value: "5", label: "Schools that dominate hiring", description: "Employers disproportionately recruit from a handful of brand-name schools. The other 55+ are afterthoughts." },
        { value: "Biotech + EdTech + Robotics", label: "Industry depth", description: "Boston's tech ecosystem is specialized. Generic technical screening misses domain expertise." },
      ],
    },
    solution: {
      badge: "Fair Calibration",
      headline: "Evaluate Boston talent on",
      gradientText: "ability, not school brand",
      description:
        "SkillPass calibrates GPAs across all 60+ institutions in the region, so a strong student at Suffolk University is visible alongside a strong student at MIT.",
      features: [
        { title: "Regional calibration depth", description: "We have calibration data for every accredited institution in the Boston-Cambridge metro area. All 60+." },
        { title: "Domain-specific assessments", description: "Boston's biotech and robotics sectors need different signal than general SWE hiring. Our 8 assessment types cover the breadth." },
        { title: "University partnership pipeline", description: "Career services offices across the region use SkillPass to give their students verified credentials for employer pipelines." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We're a Cambridge biotech. We used to recruit exclusively from MIT and Harvard. SkillPass showed us candidates from Northeastern and BU who scored higher on our relevant assessments. Our pipeline tripled overnight.",
        name: "Dr. James Wright",
        role: "VP R&D",
        detail: "Cambridge biotech, 150 employees",
      },
    },
    cta: {
      headline: "Tap the full Boston-Cambridge",
      gradientText: "talent pool",
      description: "60+ schools. One calibrated platform.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Book Demo", href: "/demo" },
    },
  },

  // 200 — international-targeting-us
  {
    slug: "international-targeting-us",
    category: "geographic",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "SkillPass for International Candidates Targeting US Jobs",
      description:
        "International candidates face extreme credentialing barriers in US hiring. SkillPass normalizes your credentials to a US-recognized standard.",
    },
    hero: {
      badge: "International Talent",
      headline: "Your degree is respected back home.",
      gradientText: "US employers don't know that.",
      subheadline:
        "You graduated top of your class from IIT Bombay, the University of Waterloo, or ETH Zurich. US recruiters don't know those grading scales, don't recognize your references, and can't compare your credentials to domestic candidates. SkillPass solves that.",
      primaryCta: { text: "Get US-Calibrated Scores", href: "/signup" },
      secondaryCta: { text: "See how it works", href: "/methodology" },
    },
    problem: {
      badge: "The Translation Gap",
      headline: "International credentials don't",
      gradientText: "translate automatically",
      description:
        "Different grading scales, different reference norms, unfamiliar institution names. US recruiters spending 7 seconds on a resume don't have time to evaluate a first-class honours degree from the University of Delhi.",
      stats: [
        { value: "50+", label: "Grading systems worldwide", description: "Percentage-based, class-based, letter-based, numbered — there's no universal standard." },
        { value: "7 sec", label: "Resume review time", description: "Not enough time to Google whether your school is any good. Unfamiliar names get skipped." },
        { value: "40%", label: "International applicants auto-rejected", description: "A significant portion of international applications are rejected at the resume screen purely due to credential unfamiliarity." },
      ],
    },
    solution: {
      badge: "Universal Translation",
      headline: "One score that crosses",
      gradientText: "every border",
      description:
        "SkillPass normalizes your credentials to a US-recognized scale. Your 300-850 SkillScore speaks the same language as every domestic candidate's.",
      features: [
        { title: "50+ country calibration models", description: "We support percentage-based (India), class-based (UK), and dozens of other grading systems. Your academic record is calibrated to the same scale as a US transcript." },
        { title: "Proctored assessments in your timezone", description: "Take assessments from anywhere. The proctoring works globally. Your verified score is identical regardless of location." },
        { title: "Reference collection with global reach", description: "Invite references from any country. Our forced-choice format works across cultural contexts." },
        { title: "Visible to US employers", description: "Your SkillPass profile appears in US employer searches just like any domestic candidate's. The score speaks for itself." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I graduated from IIT Delhi with a 9.1 CGPA. No US recruiter understood what that meant. My SkillPass score — 780 — immediately communicated my ability in a format they trusted. I had 4 US offers within a month.",
        name: "Anika Gupta",
        role: "ML Engineer",
        detail: "Now at a Bay Area AI company",
      },
    },
    cta: {
      headline: "Make your international credentials",
      gradientText: "speak American",
      description: "One score. Every border. Zero translation friction.",
      primaryCta: { text: "Get Started Free", href: "/signup" },
      secondaryCta: { text: "See Methodology", href: "/methodology" },
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
     R. ACADEMIC / CAREER SERVICES  (6 pages, audience "academic", funnel "mofu")
     ───────────────────────────────────────────────────────────────────────── */

  // 201 — career-services
  {
    slug: "career-services",
    category: "academic",
    audience: "academic",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Career Services | Verified Credentials for Your Students",
      description:
        "Give your students a verified SkillScore that employers trust. Career services teams use SkillPass to improve placement rates and employer relationships.",
    },
    hero: {
      badge: "Career Services",
      headline: "Your students are better than their resumes.",
      gradientText: "Prove it.",
      subheadline:
        "You know your students are talented. Employers don't — because a resume from a mid-tier school gets auto-filtered before anyone reads it. SkillPass gives your students a verified credential that forces employers to look at ability, not just school brand.",
      primaryCta: { text: "Partner With Us", href: "/university-partners" },
      secondaryCta: { text: "See results", href: "/case-studies" },
    },
    problem: {
      badge: "The Placement Challenge",
      headline: "Career services teams are fighting a",
      gradientText: "brand perception war",
      description:
        "No matter how good your programs are, if your school isn't on employer target lists, your students are invisible. Traditional career services tools — resume workshops, mock interviews, career fairs — can't fix that.",
      stats: [
        { value: "37%", label: "Students filtered by school brand", description: "Over a third of qualified students get auto-rejected by employer screens that filter on institution name." },
        { value: "Low", label: "Career fair ROI", description: "Career fairs are expensive, time-intensive, and yield declining returns as employer recruitment goes digital." },
        { value: "$0", label: "Credential verification tools", description: "Most career services offices have no way to provide employers with verified student ability data." },
      ],
    },
    solution: {
      badge: "Verified Credentials",
      headline: "Give your students",
      gradientText: "portable proof",
      description:
        "Integrate SkillPass into your career services offerings. Students build verified profiles; employers see calibrated data that transcends school brand.",
      features: [
        { title: "Student SkillScore program", description: "Offer SkillPass assessments as part of career prep. Students graduate with a verified credential alongside their degree." },
        { title: "Calibrated transcript value", description: "Your institution's grading norms are in our database. Students from your school get fair calibration." },
        { title: "Employer pipeline access", description: "50+ employers search SkillPass profiles. Your students enter those pipelines automatically." },
        { title: "Placement analytics", description: "Track which students are being viewed, shortlisted, and hired through the platform." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We're a regional university competing against Ivy League career services. SkillPass leveled the playing field. Our CS students' interview rate jumped 45% after we introduced verified SkillScores.",
        name: "Dr. Lisa Hernandez",
        role: "Director of Career Services",
        detail: "State university, 15,000 students",
      },
      stats: [
        { value: "45%", label: "Higher interview rates" },
        { value: "4,000+", label: "Institutions calibrated" },
        { value: "Free", label: "For students" },
      ],
    },
    cta: {
      headline: "Give your students the",
      gradientText: "credential advantage",
      description: "Partner with SkillPass to boost placement rates and employer relationships.",
      primaryCta: { text: "Become a Partner", href: "/university-partners" },
      secondaryCta: { text: "Schedule a Call", href: "/demo" },
    },
  },

  // 202 — university-partner
  {
    slug: "university-partner",
    category: "academic",
    audience: "academic",
    funnel: "mofu",
    seo: {
      title: "Become a SkillPass University Partner | Boost Placement, Build Reputation",
      description:
        "University partners integrate SkillPass into their career programs. Students get verified credentials. Your placement rates go up. Employer relationships deepen.",
    },
    hero: {
      badge: "University Partnership",
      headline: "Your best recruiting tool isn't a career fair.",
      gradientText: "It's verified data.",
      subheadline:
        "SkillPass university partnerships integrate verified credential building into your existing career development programs. Your students graduate with a SkillScore that employers actively search for. Your placement metrics improve. Everyone wins.",
      primaryCta: { text: "Explore Partnership", href: "/university-partners" },
      secondaryCta: { text: "See partner schools", href: "/case-studies" },
    },
    problem: {
      badge: "Partnership Need",
      headline: "Employer relationships are built on",
      gradientText: "student quality signals",
      description:
        "Employers partner with universities that consistently produce hirable graduates. But without standardized ability data, you're relying on brand perception and anecdotes to demonstrate student quality.",
      stats: [
        { value: "Declining", label: "Career fair attendance", description: "Employer participation in university career fairs has been declining steadily since 2019." },
        { value: "No standard", label: "Student quality metric", description: "There's no widely accepted metric for demonstrating the caliber of your graduates to employers." },
        { value: "$1M+", label: "Annual career services spend", description: "Universities invest heavily in career services with limited ability to measure ROI." },
      ],
    },
    solution: {
      badge: "The Partnership Model",
      headline: "Integrate verified credentials into",
      gradientText: "your career programs",
      description:
        "A SkillPass university partnership gives your career services team a new tool — and your students a competitive edge.",
      features: [
        { title: "Embedded assessment programs", description: "Offer SkillPass assessments through your career center. Students complete them as part of job readiness programs." },
        { title: "Institution dashboard", description: "See aggregate SkillScore data for your students — by major, by cohort, over time. Benchmark against national norms." },
        { title: "Employer matching", description: "Students with strong SkillScores automatically appear in employer searches. Your school's graduates get visibility they wouldn't have otherwise." },
        { title: "Co-branded career materials", description: "Use SkillPass data in your employer outreach. \"Our graduates average a 680 SkillScore\" is a powerful recruiting statement." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Since partnering with SkillPass, we've had 8 new employer relationships develop specifically because they were impressed by our students' verified scores. It's the best ROI we've seen from any career services investment.",
        name: "Dr. Robert Kim",
        role: "Associate Provost",
        detail: "Regional university, 20,000 students",
      },
    },
    cta: {
      headline: "Make your university a",
      gradientText: "verified talent pipeline",
      description: "The best employer relationships start with the best data.",
      primaryCta: { text: "Apply for Partnership", href: "/university-partners" },
      secondaryCta: { text: "Talk to Our Team", href: "/demo" },
    },
  },

  // 203 — students-hired-faster
  {
    slug: "students-hired-faster",
    category: "academic",
    audience: "academic",
    funnel: "mofu",
    seo: {
      title: "Students Get Hired Faster With SkillPass | Verified Credential Advantage",
      description:
        "Students with SkillPass profiles get hired 40% faster than those without. Verified ability data accelerates every stage of the job search.",
    },
    hero: {
      badge: "Student Outcomes",
      headline: "Graduation is the starting line.",
      gradientText: "Don't stumble.",
      subheadline:
        "The job search after graduation is brutal. Hundreds of applications, weeks of silence, rejection emails from roles you're perfectly qualified for. Students with a SkillPass profile skip the resume black hole because employers can see verified ability — not just a degree.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See student results", href: "/case-studies" },
    },
    problem: {
      badge: "New Grad Challenges",
      headline: "New grads face a",
      gradientText: "credential paradox",
      description:
        "You need experience to get hired, but you need to get hired to gain experience. New grad resumes all look the same: degree, GPA, internship, projects. There's no way to stand out.",
      stats: [
        { value: "200+", label: "Applications per job seeker", description: "The average new grad applies to over 200 positions. Most get zero human review." },
        { value: "6 months", label: "Average job search duration", description: "New grads spend an average of 6 months to land their first post-graduation role." },
        { value: "Identical", label: "New grad resumes", description: "Without work history, every new grad resume has the same sections: education, projects, skills. No differentiation." },
      ],
    },
    solution: {
      badge: "The SkillPass Advantage",
      headline: "Differentiate yourself with",
      gradientText: "verified proof",
      description:
        "When every resume looks the same, a verified SkillScore is the signal that gets you to the top of the pile.",
      features: [
        { title: "Calibrated academic record", description: "Your GPA in proper institutional context. No more being filtered out because your school grades hard." },
        { title: "Assessment-based proof", description: "Can't show 5 years of work experience? Show a 90th-percentile system design score instead." },
        { title: "Professor and peer references", description: "Structured references from professors and project teammates provide the peer signal employers need." },
        { title: "Passive visibility", description: "Your profile is searchable by 50+ employers. Get discovered without applying." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I graduated in May and had an offer by June. My classmates without SkillPass profiles took until October on average. The verified score let employers skip their usual skepticism about new grads.",
        name: "Tyler Brooks",
        role: "New Grad SWE",
        detail: "Hired at a Series B startup within 4 weeks",
      },
      stats: [
        { value: "40%", label: "Faster placement" },
        { value: "3x", label: "More interview callbacks" },
        { value: "Free", label: "For all students" },
      ],
    },
    cta: {
      headline: "Graduate with more than",
      gradientText: "just a degree",
      description: "Build your verified profile before you even start applying.",
      primaryCta: { text: "Get Started Free", href: "/signup" },
    },
  },

  // 204 — career-fairs
  {
    slug: "career-fairs",
    category: "academic",
    audience: "academic",
    funnel: "mofu",
    seo: {
      title: "SkillPass at Career Fairs | Verified Student Data for Employer Meetings",
      description:
        "Career fairs are noisy and short. Give your students a verified SkillScore to share with employers in those crucial 3-minute conversations.",
    },
    hero: {
      badge: "Career Fairs",
      headline: "Three minutes with a recruiter.",
      gradientText: "Make them count.",
      subheadline:
        "Career fair conversations are speed dating for jobs — 3 minutes, a handshake, a resume. That's not enough time to differentiate. Students who hand over a SkillPass profile link alongside their resume give recruiters something worth remembering.",
      primaryCta: { text: "Prep Students Now", href: "/university-partners" },
      secondaryCta: { text: "See fair results", href: "/case-studies" },
    },
    problem: {
      badge: "Fair Limitations",
      headline: "Career fairs produce stacks of resumes and",
      gradientText: "no real signal",
      description:
        "Recruiters collect 200 resumes at a career fair. They remember maybe 5 conversations. The other 195 students are just paper in a pile. Without differentiation, the career fair investment is mostly wasted.",
      stats: [
        { value: "3 min", label: "Average booth conversation", description: "That's the typical interaction time at a career fair. Not enough to evaluate anyone." },
        { value: "200+", label: "Resumes collected per recruiter", description: "The volume makes meaningful follow-up impossible for most candidates." },
        { value: "2.5%", label: "Career fair conversion rate", description: "Only about 2.5% of career fair interactions lead to a first interview." },
      ],
    },
    solution: {
      badge: "Verified Differentiation",
      headline: "Add a SkillScore to the",
      gradientText: "3-minute pitch",
      description:
        "When your student hands a recruiter a resume with a SkillPass QR code, that recruiter can see verified scores on their phone in seconds. Instant differentiation.",
      features: [
        { title: "QR code on resume", description: "Students add a SkillPass profile QR code to their resume header. Recruiters scan it and see verified scores instantly." },
        { title: "Memorable differentiation", description: "\"I have a 720 SkillScore\" is a more memorable pitch than \"I'm a hard worker with strong analytical skills.\"" },
        { title: "Post-fair follow-up tool", description: "Recruiters who scan SkillPass profiles at fairs can save candidates to their employer dashboard for structured follow-up." },
        { title: "Fair prep workshops", description: "We provide career services teams with materials for pre-fair SkillPass profile building sessions." },
      ],
    },
    proof: {
      testimonial: {
        quote: "At our fall career fair, students with SkillPass QR codes on their resumes received 3x more follow-up emails from recruiters than those without. It's become part of our standard career fair prep.",
        name: "Jennifer Adams",
        role: "Assistant Director, Career Center",
        detail: "Private university, 8,000 students",
      },
    },
    cta: {
      headline: "Make your next career fair",
      gradientText: "actually convert",
      description: "Prep students with verified profiles before the fair. Watch callback rates jump.",
      primaryCta: { text: "Partner With Us", href: "/university-partners" },
    },
  },

  // 205 — competitive-edge
  {
    slug: "competitive-edge",
    category: "academic",
    audience: "academic",
    funnel: "mofu",
    seo: {
      title: "Give Your University a Competitive Edge | SkillPass Partner Benefits",
      description:
        "Universities that offer verified SkillScores attract better students and stronger employer partnerships. Build your competitive advantage with SkillPass.",
    },
    hero: {
      badge: "Competitive Edge",
      headline: "The schools that verify produce the students",
      gradientText: "employers want.",
      subheadline:
        "University rankings matter less every year. What matters more is outcomes: can your graduates get hired? SkillPass partner schools can prove their students are employer-ready with verified data — a recruiting pitch no ranking can match.",
      primaryCta: { text: "Build Your Edge", href: "/university-partners" },
      secondaryCta: { text: "See partner data", href: "/case-studies" },
    },
    problem: {
      badge: "University Competition",
      headline: "Rankings don't prove your graduates are",
      gradientText: "hirable",
      description:
        "Prospective students and employers both want to know the same thing: do your graduates succeed? US News rankings don't answer that. Placement rates are self-reported and unreliable. There's no standard proof.",
      stats: [
        { value: "100+", label: "Ranking methodologies", description: "There are so many ranking systems that they've become noise. Employers don't base hiring on U.S. News position." },
        { value: "Self-reported", label: "Placement data", description: "Most university employment outcomes are self-reported with inconsistent methodology." },
        { value: "Declining", label: "Employer trust in credentials", description: "Employers increasingly doubt that a degree alone signals job readiness." },
      ],
    },
    solution: {
      badge: "Verified Outcomes",
      headline: "Prove your graduates are",
      gradientText: "employer-ready",
      description:
        "SkillPass partner schools can demonstrate student quality with standardized, verified data — not self-reported surveys.",
      features: [
        { title: "Aggregate SkillScore benchmarking", description: "\"Our CS graduates average a 690 SkillScore\" is a stronger employer pitch than \"we're ranked 47th by U.S. News.\"" },
        { title: "Employer engagement metrics", description: "Track how many employers view, shortlist, and hire your students through the platform." },
        { title: "Prospective student recruitment", description: "\"Our students graduate with verified credentials\" is a compelling differentiator for admissions marketing." },
        { title: "Continuous improvement data", description: "See which academic programs produce the highest SkillScores and where gaps exist. Use the data to improve curricula." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We featured our average SkillScore in our admissions materials and employer outreach. Applications to our CS program jumped 15% and we secured 3 new employer recruiting partnerships in one semester.",
        name: "Dr. Michael Chen",
        role: "Dean, School of Engineering",
        detail: "Mid-tier university, 12,000 students",
      },
    },
    cta: {
      headline: "Compete on outcomes,",
      gradientText: "not rankings",
      description: "Verified data is the new competitive advantage in higher education.",
      primaryCta: { text: "Explore Partnership", href: "/university-partners" },
      secondaryCta: { text: "Talk to Us", href: "/demo" },
    },
  },

  // 206 — bootcamp-placement
  {
    slug: "bootcamp-placement",
    category: "academic",
    audience: "academic",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Bootcamps | Boost Placement With Verified Graduate Scores",
      description:
        "Bootcamp graduates face credential skepticism. SkillPass provides the verified proof employers need to hire bootcamp talent with confidence.",
    },
    hero: {
      badge: "Bootcamp Placement",
      headline: "Bootcamp grads can code.",
      gradientText: "Employers need proof.",
      subheadline:
        "Your graduates spent 12-16 weeks learning to code. They're hungry, they're fast learners, and many are genuinely talented. But employers are skeptical of bootcamp credentials — they've been burned before. SkillPass gives your graduates the verified proof that closes the credibility gap.",
      primaryCta: { text: "Partner With Us", href: "/university-partners" },
      secondaryCta: { text: "See bootcamp results", href: "/case-studies" },
    },
    problem: {
      badge: "Credibility Gap",
      headline: "Bootcamp credentials face a",
      gradientText: "trust deficit",
      description:
        "Employers have mixed experiences with bootcamp hires. Some are great, some aren't. Without standardized verification, they can't tell which graduates from which programs are actually job-ready.",
      stats: [
        { value: "52%", label: "Employers skeptical of bootcamps", description: "Over half of hiring managers express skepticism about bootcamp credentials when compared to traditional CS degrees." },
        { value: "Wide", label: "Quality variance", description: "The gap between the best and worst bootcamp programs is enormous. Employers can't easily tell which is which." },
        { value: "3 months", label: "Average post-bootcamp job search", description: "Despite marketing claims, most bootcamp graduates spend months searching for their first development role." },
      ],
    },
    solution: {
      badge: "Verified Graduates",
      headline: "Bridge the credibility gap with",
      gradientText: "standardized proof",
      description:
        "When your graduates have verified SkillScores, employer skepticism meets hard data.",
      features: [
        { title: "Assessment-based proof", description: "Your graduates take proctored coding and system design assessments. A 75th-percentile score says more than a bootcamp completion certificate." },
        { title: "Calibrated against all test-takers", description: "Bootcamp graduates are scored on the same scale as CS degree holders. No separate bucket — just ability." },
        { title: "Instructor and peer references", description: "Structured references from bootcamp instructors and project teammates add peer signal that completion certificates lack." },
        { title: "Placement tracking", description: "Track which graduates are being viewed and hired through the platform. Prove your outcomes with real data." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Our bootcamp's placement rate was 62%. After integrating SkillPass into our capstone program, it jumped to 81%. Employers told us the verified scores gave them confidence to take a chance on non-traditional candidates.",
        name: "Maria Okonkwo",
        role: "Director of Outcomes",
        detail: "Coding bootcamp, 200 graduates/year",
      },
      stats: [
        { value: "81%", label: "Placement rate" },
        { value: "+19%", label: "Improvement" },
        { value: "12 weeks", label: "Integration time" },
      ],
    },
    cta: {
      headline: "Prove your graduates are",
      gradientText: "job-ready",
      description: "Verified scores close the credibility gap between bootcamp and degree.",
      primaryCta: { text: "Partner With Us", href: "/university-partners" },
      secondaryCta: { text: "Schedule a Call", href: "/demo" },
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
     S. SEO / THOUGHT LEADERSHIP  (14 pages, audience "all", funnel "tofu")
     ───────────────────────────────────────────────────────────────────────── */

  // 207 — what-is-portable-credential
  {
    slug: "what-is-portable-credential",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "What Is a Portable Credential? | The Future of Professional Verification",
      description:
        "A portable credential is a verified proof of ability that travels with you across employers, industries, and borders. Here's why it matters and how it works.",
    },
    hero: {
      badge: "Thought Leadership",
      headline: "You earn skills at one company.",
      gradientText: "You should keep them.",
      subheadline:
        "A portable credential is a verified proof of professional ability that belongs to you — not your employer, not your university, not a job board. It travels everywhere you do, just like a credit score travels across banks. That concept is about to reshape hiring.",
      primaryCta: { text: "Build Your Credential", href: "/signup" },
      secondaryCta: { text: "Learn more", href: "/blog/portable-credentials" },
    },
    problem: {
      badge: "Locked-In Credentials",
      headline: "Today's proof of ability is",
      gradientText: "trapped in silos",
      description:
        "Your degree lives at your university. Your performance reviews live at your employer. Your interview results live at the company that conducted them. None of this data follows you. Every time you switch jobs, you prove yourself from zero.",
      stats: [
        { value: "Zero", label: "Portable ability records", description: "There's currently no widely adopted system for carrying verified professional ability data between employers." },
        { value: "11.7", label: "Jobs in a career (avg)", description: "The average American holds 11.7 jobs. That's 11.7 times proving yourself from scratch." },
        { value: "$4,700", label: "Cost per re-verification", description: "Every time a candidate re-proves their skills — through interviews, tests, trials — it costs both sides thousands." },
      ],
    },
    solution: {
      badge: "The Portable Credential Model",
      headline: "Build once,",
      gradientText: "carry everywhere",
      description:
        "A portable credential collects verified data from multiple sources — assessments, references, academics, performance — into a single profile that you control.",
      features: [
        { title: "What's in a portable credential", description: "Verified assessment scores, calibrated academic records, structured peer references, and performance data — all owned by you, all shareable with a link." },
        { title: "Why portability matters", description: "When your credential travels, you stop wasting time re-proving skills. Employers stop wasting money re-evaluating candidates. Everyone moves faster." },
        { title: "How verification works", description: "Assessments are proctored. References are independently collected. Transcripts are parsed from official documents. Nothing is self-reported." },
        { title: "The credit score analogy", description: "Just as a credit score lets any bank assess your financial reliability instantly, a SkillScore lets any employer assess your professional ability instantly." },
      ],
    },
    proof: {
      testimonial: {
        quote: "The first time I shared my SkillPass profile with a recruiter and skipped the technical screen entirely, I understood what portable credentials mean. I'll never go back to proving myself from zero.",
        name: "Daniel Kim",
        role: "DevOps Engineer",
        detail: "Used SkillPass for 3 job transitions",
      },
    },
    cta: {
      headline: "Own your",
      gradientText: "professional proof",
      description: "Build a portable credential that follows you for life.",
      primaryCta: { text: "Get Started Free", href: "/signup" },
    },
    faq: [
      { q: "Who controls a portable credential?", a: "You do. It's your data. You choose what's visible, who can see it, and when to share it. No employer or platform can revoke your access." },
      { q: "How is this different from a LinkedIn profile?", a: "A LinkedIn profile is self-reported. A portable credential is third-party verified — proctored assessments, independent references, official transcripts. The data can't be inflated." },
      { q: "Is this concept widely adopted?", a: "It's early but growing fast. Portable credentials are following the adoption curve of digital identity — a few years from mainstream, but the infrastructure is being built now. SkillPass is the leading platform." },
    ],
  },

  // 208 — what-is-skills-based-hiring
  {
    slug: "what-is-skills-based-hiring",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "What Is Skills-Based Hiring? | A Complete Guide",
      description:
        "Skills-based hiring evaluates candidates on what they can do, not where they went to school or who they know. Here's how it works and why it's spreading.",
    },
    hero: {
      badge: "Skills-Based Hiring",
      headline: "What you can do matters more than",
      gradientText: "where you learned it.",
      subheadline:
        "Skills-based hiring is a recruitment approach that evaluates candidates on demonstrated ability rather than credentials, pedigree, or self-reported experience. It's not new in theory — but for the first time, the tools exist to actually do it at scale.",
      primaryCta: { text: "See It In Action", href: "/demo" },
      secondaryCta: { text: "Build your profile", href: "/signup" },
    },
    problem: {
      badge: "Credential-Based Hiring",
      headline: "Traditional hiring screens for pedigree,",
      gradientText: "not performance",
      description:
        "Degree requirements, years-of-experience filters, and brand-name employer preferences systematically exclude capable candidates while admitting credentialed but underperforming ones.",
      stats: [
        { value: "65%", label: "Jobs requiring unnecessary degrees", description: "Harvard Business School research found that 65% of job postings require degrees for roles where current employees don't have them." },
        { value: "76%", label: "Employers dropping degree requirements", description: "A growing majority of employers are eliminating degree requirements, per SHRM — but most haven't built alternative evaluation systems." },
        { value: "Low", label: "Correlation: pedigree to performance", description: "Multiple studies show that school prestige and years of experience are weak predictors of actual job performance." },
      ],
    },
    solution: {
      badge: "The Skills-Based Approach",
      headline: "Evaluate what candidates",
      gradientText: "can actually do",
      description:
        "Skills-based hiring replaces proxy signals (degrees, tenure, brand names) with direct evidence of ability.",
      features: [
        { title: "Assess, don't assume", description: "Instead of assuming a Stanford CS degree means strong coding ability, test for it directly with standardized assessments." },
        { title: "Calibrate, don't filter", description: "Instead of filtering out schools below a prestige threshold, calibrate GPAs so a 3.4 at a tough school is recognized appropriately." },
        { title: "Verify, don't trust", description: "Instead of trusting self-reported skills on a resume, collect verified data from independent sources — assessments, references, transcripts." },
        { title: "Measure multiple dimensions", description: "Skills-based hiring isn't just coding tests. It includes collaboration, communication, judgment, and reliability — all measurable." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We dropped degree requirements in 2024. We needed something to replace them. SkillPass gave us a structured, verified evaluation framework that's more predictive than credentials ever were.",
        name: "Amanda Foster",
        role: "Chief People Officer",
        detail: "Enterprise tech company, 5,000 employees",
      },
    },
    cta: {
      headline: "Join the skills-based",
      gradientText: "hiring movement",
      description: "The future of hiring is ability, not pedigree.",
      primaryCta: { text: "For Employers", href: "/employers" },
      secondaryCta: { text: "For Talent", href: "/signup" },
    },
    faq: [
      { q: "Does skills-based hiring mean ignoring education?", a: "No. It means calibrating education rather than using it as a binary filter. A calibrated GPA that accounts for institutional rigor is skills-based. A \"must be from a top-20 school\" filter is not." },
      { q: "Is skills-based hiring just for tech?", a: "No. While tech adopted it first (driven by coding assessment tools), the principles apply to every field. Case assessments for consulting, writing tests for communications, situational judgment for management — all are skills-based approaches." },
      { q: "What evidence supports skills-based hiring?", a: "Decades of I/O psychology research shows that structured assessments predict job performance 3-5x better than unstructured interviews, and direct ability measurement outperforms credential-based proxies." },
      { q: "How do I start implementing skills-based hiring?", a: "Start by identifying the actual skills each role requires. Then find verified measurement methods for those skills — assessments, structured references, work samples. Replace credential filters with ability thresholds." },
    ],
  },

  // 209 — what-is-professional-credit-score
  {
    slug: "what-is-professional-credit-score",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "What Is a Professional Credit Score? | The SkillScore Explained",
      description:
        "A professional credit score is a standardized 300-850 rating of your job ability — like a FICO score for hiring. Here's the idea and why it's overdue.",
    },
    hero: {
      badge: "Professional Credit Score",
      headline: "You have a credit score for money.",
      gradientText: "Why not for ability?",
      subheadline:
        "FICO scores took the guesswork out of lending. A professional credit score takes the guesswork out of hiring. One standardized number — 300 to 850 — that captures your verified ability across academics, peer perception, performance, and tested skill.",
      primaryCta: { text: "Get Your Score", href: "/signup" },
      secondaryCta: { text: "See the methodology", href: "/methodology" },
    },
    problem: {
      badge: "The Missing Standard",
      headline: "Every other professional market has a",
      gradientText: "standard rating. Hiring doesn't.",
      description:
        "Restaurants have Michelin stars. Bonds have S&P ratings. Real estate has appraisals. But the professional labor market — a $20 trillion global economy — still relies on resumes and gut feelings. That's insane.",
      stats: [
        { value: "$20T", label: "Global labor market", description: "The world's largest market has no standardized quality metric. Every transaction (hire) is evaluated from scratch." },
        { value: "1956", label: "FICO score invented", description: "Financial markets solved the standardization problem 70 years ago. The labor market still hasn't." },
        { value: "46%", label: "Bad hire rate", description: "Without standardized ability data, nearly half of all hires fail. That wouldn't be acceptable in any other market." },
      ],
    },
    solution: {
      badge: "The SkillScore Model",
      headline: "A FICO-like score for",
      gradientText: "professional ability",
      description:
        "The SkillScore applies the credit score concept to the labor market — a single, standardized number backed by verified multi-dimensional data.",
      features: [
        { title: "300-850 scale", description: "A range familiar to anyone who's seen a credit score. Below 500 is early career. Above 700 is strong. Above 800 is exceptional." },
        { title: "Multi-factor composite", description: "Like FICO uses payment history, credit utilization, and length of history, the SkillScore uses academics, peer signal, performance, and assessed ability." },
        { title: "Universally interpretable", description: "A 720 means the same thing to every employer. No need to decode resume formatting or interpret self-reported claims." },
        { title: "Owned by you", description: "Unlike a credit score maintained by bureaus, your SkillScore is in your hands. You decide who sees it." },
      ],
    },
    proof: {
      testimonial: {
        quote: "When I heard 'credit score for professional ability,' I was skeptical. After using it for six months, I can't imagine going back to resume-based screening. The SkillScore is more predictive than anything we've used before.",
        name: "Robert Tanaka",
        role: "Head of Talent Analytics",
        detail: "Fortune 500 company",
      },
    },
    cta: {
      headline: "Get your",
      gradientText: "professional credit score",
      description: "The number that tells employers exactly how capable you are.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    faq: [
      { q: "Is this really like a FICO score?", a: "Structurally, yes. Both are composite scores derived from multiple verified data sources, designed to give a quick, standardized assessment. The key difference: you own and control your SkillScore." },
      { q: "Can employers see the breakdown?", a: "Yes. Just as lenders can see the factors behind a credit score, employers can drill into your four sub-scores and the data supporting each." },
      { q: "What's a 'good' SkillScore?", a: "Above 600 is solid. Above 700 is strong. Above 750 puts you in the top tier. Like credit scores, what's \"good\" depends on the context — the bar is higher for competitive roles." },
    ],
  },

  // 210 — future-verified-hiring
  {
    slug: "future-verified-hiring",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "The Future of Verified Hiring | Where Recruitment Is Headed",
      description:
        "Verified hiring replaces trust-based systems with data-based systems. Here's where the industry is headed and what it means for employers and candidates.",
    },
    hero: {
      badge: "Future of Hiring",
      headline: "Hiring is moving from trust to",
      gradientText: "verification.",
      subheadline:
        "For decades, hiring has been trust-based: we trust that resumes are accurate, that interviews are predictive, that references are honest. None of that trust is warranted. The next decade will see a fundamental shift toward verification-based hiring — and the infrastructure is being built right now.",
      primaryCta: { text: "Be Early", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers" },
    },
    problem: {
      badge: "Trust Fails",
      headline: "Trust-based hiring is",
      gradientText: "provably broken",
      description:
        "Every element of traditional hiring relies on unverified trust. We trust resume claims. We trust interview performance is predictive. We trust reference endorsements are honest. The data says we shouldn't.",
      stats: [
        { value: "78%", label: "Resumes with exaggerations", description: "Nearly 4 in 5 resumes contain misleading or inflated claims. Trust in resume accuracy is misplaced." },
        { value: "0.18", label: "Interview predictive validity", description: "Unstructured interviews predict job performance about as well as reading tea leaves." },
        { value: "96%", label: "Positive references", description: "When everyone gets a glowing reference, the trust you place in that reference is worthless." },
      ],
    },
    solution: {
      badge: "Verified Hiring",
      headline: "From trust to",
      gradientText: "proof",
      description:
        "Verified hiring replaces trust with evidence at every stage of the process.",
      features: [
        { title: "Verified assessments replace interview assumptions", description: "Instead of hoping an interview measures real ability, use proctored, standardized assessments with known predictive validity." },
        { title: "Calibrated references replace trust in endorsements", description: "Forced-choice rankings produce real signal. Rater calibration tracks who grades honestly vs. leniently." },
        { title: "Normalized academics replace prestige filters", description: "Calibrated GPAs let you compare across institutions. No more using school brand as a proxy for student quality." },
        { title: "Portable credentials replace repeated evaluation", description: "When credentials travel with candidates, the entire system becomes more efficient. Less redundant evaluation, more hiring velocity." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We're building our entire hiring infrastructure around verification rather than trust. SkillPass is the cornerstone — the only platform that verifies across all the dimensions we care about.",
        name: "Sandra Okafor",
        role: "CHRO",
        detail: "Public tech company, 8,000 employees",
      },
    },
    cta: {
      headline: "Join the shift to",
      gradientText: "verified hiring",
      description: "The companies that adopt verification first will have the best teams.",
      primaryCta: { text: "Get Started", href: "/signup" },
      secondaryCta: { text: "Employer Platform", href: "/employers" },
    },
    faq: [
      { q: "When will verified hiring become mainstream?", a: "It's already happening. Skills-based hiring policies are being adopted by Fortune 500 companies and governments. Verified credentials are the next step — likely mainstream within 3-5 years." },
      { q: "Will verified hiring eliminate interviews entirely?", a: "Probably not. But interviews will shift from evaluation to fit-assessment. When ability is already verified, interviews can focus on culture, team dynamics, and mutual interest." },
      { q: "What about privacy concerns?", a: "Candidates own their data and control who sees it. Verified hiring is consent-based — you choose to share your credential, and you choose what's visible." },
    ],
  },

  // 211 — calibrated-vs-raw
  {
    slug: "calibrated-vs-raw",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Calibrated vs Raw GPA | Why Context Changes Everything",
      description:
        "A raw 3.5 GPA tells you nothing without context. Calibrated GPA adjusts for school, department, and course difficulty. Here's the difference.",
    },
    hero: {
      badge: "Education",
      headline: "3.5 is just a number.",
      gradientText: "Context makes it meaningful.",
      subheadline:
        "A 3.5 GPA from a school where the median is 3.7 means you're below average. A 3.5 from a school where the median is 2.9 means you're well above. Raw GPA ignores this. Calibrated GPA captures it. The difference is enormous — and it's reshaping how smart employers evaluate academic records.",
      primaryCta: { text: "Calibrate Your GPA", href: "/signup" },
      secondaryCta: { text: "See the methodology", href: "/methodology" },
    },
    problem: {
      badge: "Raw GPA Problems",
      headline: "Raw GPA compares",
      gradientText: "incommensurable numbers",
      description:
        "Using raw GPA to compare candidates from different schools is like comparing temperatures in Celsius and Fahrenheit without converting. The numbers look the same but mean completely different things.",
      stats: [
        { value: "3.7", label: "Harvard median GPA", description: "Harvard's median GPA is one of the highest in the country. A 3.7 there is perfectly average." },
        { value: "2.9", label: "Caltech median GPA", description: "Caltech's median is dramatically lower. A 2.9 there represents average performance among extremely talented students." },
        { value: "0.8", label: "GPA gap, same ability level", description: "Two equally capable students at these schools would have GPAs differing by nearly a full point." },
      ],
    },
    solution: {
      badge: "Calibration",
      headline: "How calibrated GPA",
      gradientText: "restores fairness",
      description:
        "Calibrated GPA adjusts for institutional and departmental grading norms, creating a true apples-to-apples comparison.",
      features: [
        { title: "Institutional adjustment", description: "Each school's grading distribution is modeled using registrar data. Your GPA is placed relative to your institution's actual norms." },
        { title: "Departmental adjustment", description: "Engineering and humanities departments at the same school grade differently. We calibrate at the department level." },
        { title: "Temporal adjustment", description: "Grading norms shift over time. A 2015 GPA is compared to 2015 norms, not today's (often more inflated) standards." },
        { title: "Transparent output", description: "You see your raw GPA, your calibrated equivalent, and the specific adjustments applied. Full transparency." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I work in admissions consulting and I've seen calibrated GPAs change outcomes for hundreds of students. The kids from hard-grading programs finally get fair evaluations.",
        name: "Patricia Welch",
        role: "Educational Consultant",
        detail: "15 years in college admissions",
      },
    },
    cta: {
      headline: "Put your GPA in",
      gradientText: "proper context",
      description: "Upload your transcript. See what your grades actually mean.",
      primaryCta: { text: "Get Calibrated", href: "/signup" },
    },
    faq: [
      { q: "Does calibration always help?", a: "Not always. If you're at a school with heavy grade inflation, your calibrated GPA may be lower than your raw GPA. But it's more accurate — and accuracy benefits everyone in the long run." },
      { q: "Do employers actually use calibrated GPAs?", a: "Increasingly, yes. The smartest employers have always tried to account for school difficulty informally. Calibration just makes it systematic and data-driven." },
      { q: "How reliable is the calibration?", a: "Our models use data from registrars, published institutional research, and large-scale transcript analysis. Calibration accuracy is validated against actual outcome data. We update quarterly." },
    ],
  },

  // 212 — gpa-normalization
  {
    slug: "gpa-normalization",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "GPA Normalization Explained | How to Compare Grades Across Schools",
      description:
        "GPA normalization adjusts grades for school-level and department-level differences. Here's the math, the methodology, and why it matters for fair hiring.",
    },
    hero: {
      badge: "GPA Normalization",
      headline: "Same effort. Different schools.",
      gradientText: "Very different GPAs.",
      subheadline:
        "Two students work equally hard and learn equally well. One attends a school that averages a 3.6. The other attends one that averages a 3.0. Their GPAs differ by 0.6 points — and that gap has nothing to do with ability. GPA normalization fixes this.",
      primaryCta: { text: "Normalize Your GPA", href: "/signup" },
      secondaryCta: { text: "See the data", href: "/methodology" },
    },
    problem: {
      badge: "The Normalization Gap",
      headline: "Grade inflation is",
      gradientText: "not evenly distributed",
      description:
        "Some schools have inflated significantly. Others haven't. The result is that raw GPAs from different schools are measuring on different scales — and employers treat them as if they're the same.",
      stats: [
        { value: "73%", label: "Schools with inflation", description: "Nearly three-quarters of four-year institutions have seen measurable grade inflation since 2000." },
        { value: "0.3", label: "Average inflation since 2000", description: "The average GPA at US four-year institutions has risen about 0.3 points in two decades." },
        { value: "Uneven", label: "Distribution of inflation", description: "Some schools inflated 0.5+ points. Others barely moved. The variation is the problem." },
      ],
    },
    solution: {
      badge: "The Normalization Method",
      headline: "Making grades",
      gradientText: "comparable",
      description:
        "GPA normalization uses statistical methods to place every student's GPA on a common scale, accounting for institutional and departmental variation.",
      features: [
        { title: "Z-score transformation", description: "Your GPA is converted to a z-score relative to your institution's distribution. This tells us how many standard deviations above or below your school's mean you fall." },
        { title: "Percentile mapping", description: "The z-score maps to a percentile that's comparable across all institutions. A 90th percentile student at any school is a 90th percentile student." },
        { title: "Course-level granularity", description: "Normalization happens at the course level, not just the transcript level. Your organic chemistry grade is normalized against your school's organic chemistry distribution." },
        { title: "Continuous update", description: "As we receive new data, calibration models update. Your normalized GPA reflects the most current institutional norms." },
      ],
    },
    proof: {
      testimonial: {
        quote: "As a hiring manager, I used to throw out GPAs entirely because I knew they weren't comparable. Now I use normalized GPAs as a meaningful signal for the first time in my 15-year career.",
        name: "Greg Thompson",
        role: "Hiring Manager",
        detail: "Tech company, hires 50+ annually",
      },
    },
    cta: {
      headline: "See your GPA on a",
      gradientText: "level playing field",
      description: "Upload your transcript and get normalized grades in minutes.",
      primaryCta: { text: "Get Started Free", href: "/signup" },
    },
    faq: [
      { q: "Is GPA normalization the same as calibration?", a: "They're closely related. Normalization refers to the statistical process of placing scores on a common scale. Calibration typically implies additional adjustments for course rigor, selectivity, and other factors beyond raw grade distributions." },
      { q: "What data do you use for normalization?", a: "Registrar grade distributions (published or obtained via FOIA), IPEDS institutional data, and our own large-scale transcript analysis. Multiple sources cross-validate each other." },
      { q: "Can normalization be gamed?", a: "Not easily. Since normalization uses your school's actual grade distribution (which you can't control), the only way to improve your normalized GPA is to earn higher raw grades — which is the point." },
    ],
  },

  // 213 — reference-calibration-science
  {
    slug: "reference-calibration-science",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "The Science of Reference Calibration | How to Get Signal From References",
      description:
        "Traditional references are noise. Calibrated references are signal. Here's the I/O psychology research behind forced-choice ranking systems.",
    },
    hero: {
      badge: "Reference Science",
      headline: "Reference checks have a validity problem.",
      gradientText: "Here's the fix.",
      subheadline:
        "Industrial-organizational psychologists have known for decades that unstructured reference checks are nearly useless. The correlation to job performance is 0.13 — statistically insignificant. But structured, calibrated reference formats raise that to 0.40+. The science is clear. The industry just hasn't caught up.",
      primaryCta: { text: "Get Calibrated References", href: "/signup" },
      secondaryCta: { text: "Read the research", href: "/methodology" },
    },
    problem: {
      badge: "Failed Methodology",
      headline: "Why traditional references",
      gradientText: "don't predict anything",
      description:
        "Three factors destroy reference signal: self-selection bias (candidates pick their fans), leniency bias (raters give everyone high marks), and lack of structure (open-ended questions produce unmeasurable answers).",
      stats: [
        { value: "0.13", label: "Unstructured reference validity", description: "The correlation between unstructured references and job performance. Barely above random." },
        { value: "Self-selected", label: "Reference pool", description: "Candidates choose their own references, guaranteeing a positively biased sample." },
        { value: "Unstructured", label: "Format", description: "Open-ended questions like 'tell me about working with X' produce anecdotes, not data." },
      ],
    },
    solution: {
      badge: "Calibration Science",
      headline: "Structured format +",
      gradientText: "forced distribution = real signal",
      description:
        "Research from Schmidt & Hunter (1998), Morgeson (2009), and others points to two key fixes: force raters to differentiate, and structure the evaluation dimensions.",
      features: [
        { title: "Forced-choice eliminates leniency bias", description: "When raters must place candidates in distribution tiers (top 5%, 10%, 25%, 50%, bottom 50%), the ceiling effect disappears. Differentiation is built into the format." },
        { title: "Dimension-specific ratings isolate signals", description: "Rating 'leadership' separately from 'technical ability' prevents halo effects where a positive impression on one dimension inflates all others." },
        { title: "Multi-rater triangulation", description: "Agreement across 3+ independent raters is exponentially more reliable than any single rater. When three people independently place you in the top 10% for reliability, that's strong signal." },
        { title: "Rater track record analysis", description: "Over time, we learn which raters are calibrated and which are consistently lenient or harsh. This meta-data refines score accuracy." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I teach selection psychology at the graduate level. What SkillPass has built is exactly what the research recommends: forced-choice, multi-rater, dimension-specific references. It's the first commercial implementation I've seen that gets it right.",
        name: "Dr. Emily Richardson",
        role: "Professor of I/O Psychology",
        detail: "Major research university",
      },
    },
    cta: {
      headline: "Get references backed by",
      gradientText: "real science",
      description: "Decades of research. Applied to your career.",
      primaryCta: { text: "Start Free", href: "/signup" },
    },
    faq: [
      { q: "What's the predictive validity of calibrated references?", a: "Our internal validation shows a correlation of 0.47 between calibrated reference scores and 1-year job performance ratings. That's 3.6x better than unstructured references (0.13)." },
      { q: "Where can I read the underlying research?", a: "Start with Schmidt & Hunter (1998) 'The Validity and Utility of Selection Methods in Personnel Psychology,' Morgeson et al. (2007) on reference checks, and Sackett & Lievens (2008) on forced-choice formats." },
      { q: "Does the forced-choice format make references less willing to participate?", a: "Our response rate is 82%, which is higher than typical reference check completion rates. The structured format actually takes less time than a phone call, so references are more willing to complete it." },
    ],
  },

  // 214 — ai-changing-recruiting
  {
    slug: "ai-changing-recruiting",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "How AI Is Changing Recruiting | And Where It Falls Short",
      description:
        "AI is automating resume screening and interview scheduling. But AI can't verify ability. Here's where the technology helps, where it hurts, and what's still missing.",
    },
    hero: {
      badge: "AI in Recruiting",
      headline: "AI can schedule your interview.",
      gradientText: "It can't tell if you're any good.",
      subheadline:
        "AI is reshaping recruiting operations — automated sourcing, chatbot screening, interview scheduling. But the hard problem was never operational efficiency. It was signal quality. And AI trained on resumes and historical data reproduces the same biases and noise it was supposed to fix.",
      primaryCta: { text: "Better Signal, Not Just Faster", href: "/demo" },
      secondaryCta: { text: "Read more", href: "/blog/ai-recruiting" },
    },
    problem: {
      badge: "AI's Limitations",
      headline: "AI automates process.",
      gradientText: "It doesn't improve signal.",
      description:
        "The fundamental problem in hiring isn't speed — it's accuracy. AI makes hiring faster, which is nice. But faster bad decisions aren't better than slower bad decisions.",
      stats: [
        { value: "75%", label: "Companies using AI in recruiting", description: "AI adoption in recruiting is widespread. Improvement in hiring quality is not." },
        { value: "Unchanged", label: "Bad hire rate with AI", description: "Despite AI tool adoption, the rate of bad hires hasn't materially improved because the underlying data quality hasn't changed." },
        { value: "Amazon", label: "Famously scrapped AI hiring", description: "Amazon's AI screener learned to discriminate against women because it was trained on biased historical data." },
      ],
    },
    solution: {
      badge: "Better Data, Not Just Faster Processing",
      headline: "AI needs verified data to",
      gradientText: "make good decisions",
      description:
        "The problem isn't the algorithm — it's the input. Feed AI verified ability data instead of resume keywords, and the outputs actually improve.",
      features: [
        { title: "Verified inputs > resume parsing", description: "AI screening on SkillScores doesn't inherit resume inflation or keyword gaming. The input data is verified, so the output is trustworthy." },
        { title: "Transparent decision-making", description: "When screening is based on a numeric score with clear derivation, the decision is auditable. Black-box AI decisions are a regulatory time bomb." },
        { title: "Bias-reduced by design", description: "SkillScores don't encode name, gender, or school brand into the primary signal. AI operating on this data produces fairer outcomes." },
        { title: "Compliant with emerging regulation", description: "NYC Local Law 144, the EU AI Act, and other regulations are targeting opaque AI hiring tools. Verified, transparent scores are the compliance-safe alternative." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We were early adopters of AI screening tools. They made us faster but not better. Adding SkillPass data as the screening input — instead of resumes — was when quality-of-hire actually improved.",
        name: "Derek Olson",
        role: "VP Talent Technology",
        detail: "Enterprise company, 10,000+ employees",
      },
    },
    cta: {
      headline: "Better hiring starts with",
      gradientText: "better data",
      description: "AI is a tool. Give it verified inputs.",
      primaryCta: { text: "Request Demo", href: "/demo" },
      secondaryCta: { text: "For Talent", href: "/signup" },
    },
    faq: [
      { q: "Does SkillPass use AI?", a: "Yes, selectively. We use NLP for performance review analysis and machine learning for calibration model optimization. But the core scoring relies on structured, verified data — not AI inference from unstructured text." },
      { q: "Should I stop using AI recruiting tools?", a: "No. AI is great for operational tasks: sourcing, scheduling, communication. But use verified data for evaluation decisions. Let AI handle logistics; let verified scores handle judgment." },
      { q: "How does SkillPass handle the regulatory landscape?", a: "Our scoring methodology is transparent and auditable. We publish the factors that contribute to each score. This is the compliance-safe approach that opaque AI scoring can't offer." },
    ],
  },

  // 215 — state-of-hiring-2026
  {
    slug: "state-of-hiring-2026",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "State of Hiring 2026 | Trends, Data, and What's Changing",
      description:
        "Skills-based hiring is up. Degree requirements are down. AI is everywhere. Here's a data-driven look at where hiring stands in 2026.",
    },
    hero: {
      badge: "State of Hiring 2026",
      headline: "The hiring market is unrecognizable from",
      gradientText: "five years ago.",
      subheadline:
        "Degree requirements are falling. Skills-based policies are rising. AI tools are everywhere but quality metrics haven't budged. Remote-first is default. The competition for talent is simultaneously global and more intense than ever. Here's the full picture.",
      primaryCta: { text: "Get Ahead of the Curve", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers" },
    },
    problem: {
      badge: "2026 Challenges",
      headline: "Hiring is changing fast, but",
      gradientText: "outcomes aren't improving",
      description:
        "Companies have adopted new tools, new policies, and new strategies. But the fundamental metrics — time-to-fill, cost-per-hire, quality-of-hire — are stubbornly flat or worsening.",
      stats: [
        { value: "76%", label: "Dropping degree requirements", description: "A record number of employers are removing degree requirements from job postings." },
        { value: "Flat", label: "Quality-of-hire metrics", description: "Despite all the changes, quality-of-hire — the metric that matters most — hasn't improved." },
        { value: "42 days", label: "Average time to fill", description: "Time-to-fill is still over 6 weeks on average, despite all the 'efficiency' tools." },
        { value: "$5K+", label: "Average cost per hire", description: "The total cost of bringing someone on board keeps rising." },
      ],
    },
    solution: {
      badge: "Where Hiring Should Go",
      headline: "The shift that's still",
      gradientText: "missing",
      description:
        "Companies dropped degree requirements. Good. But they didn't replace them with anything. That's where verified ability data comes in.",
      features: [
        { title: "Skills-based needs verification", description: "Dropping a degree requirement without adding a verified alternative means you've just removed a filter without replacing the signal." },
        { title: "AI needs better data, not just more data", description: "The explosion of AI in recruiting has produced faster processes but not better outcomes. The bottleneck is data quality, not processing speed." },
        { title: "Remote hiring needs portability", description: "When you're hiring globally, you can't verify credentials through in-person interviews. Portable, verified credentials are the infrastructure for remote-first hiring." },
        { title: "Candidates need agency", description: "The best candidates in 2026 want to own their professional data. Portable credentials put them in control." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We wrote a blog post about dropping degree requirements. We got great PR. But our hiring metrics didn't change until we implemented SkillPass as the replacement signal. The policy change needed an infrastructure change.",
        name: "Lisa Thornton",
        role: "Chief People Officer",
        detail: "Public tech company",
      },
    },
    cta: {
      headline: "Build for the hiring market of",
      gradientText: "2026 and beyond",
      description: "The future is verified. Get there first.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Employer Platform", href: "/employers" },
    },
    faq: [
      { q: "Is skills-based hiring a fad?", a: "No. It's a structural shift driven by regulatory pressure (degree requirement bans in several states), economic incentive (credential inflation reduces signal), and technological capability (platforms like SkillPass make verification scalable)." },
      { q: "What's the most important hiring metric to track in 2026?", a: "Quality-of-hire, measured at 90 days and 1 year. It's the only metric that captures whether your process is actually working. Time-to-fill and cost-per-hire are secondary." },
      { q: "Will AI replace recruiters?", a: "AI will automate the operational parts of recruiting (sourcing, scheduling, communication). The evaluative parts — judgment, culture assessment, relationship building — will remain human. Recruiters who adapt will be more valuable, not less." },
    ],
  },

  // 216 — economics-bad-hires
  {
    slug: "economics-bad-hires",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "The Economics of Bad Hires | Why Mis-Hires Cost More Than You Think",
      description:
        "A bad hire costs $17K in direct costs and $50K+ in total impact. Here's the full economic breakdown and how better data changes the math.",
    },
    hero: {
      badge: "Hiring Economics",
      headline: "A bad hire doesn't just cost money.",
      gradientText: "It costs momentum.",
      subheadline:
        "The direct costs of a bad hire — recruiting fees, onboarding, severance — average $17K. But that's the tip of the iceberg. The real damage is the team demoralization, the missed deadlines, the clients who leave, and the 6 months you lose re-filling the role. Total cost: $50-150K.",
      primaryCta: { text: "Calculate Your Cost", href: "/roi-calculator" },
      secondaryCta: { text: "Reduce bad hires", href: "/employers" },
    },
    problem: {
      badge: "The Real Cost",
      headline: "Bad hires are the most expensive problem",
      gradientText: "nobody budgets for",
      description:
        "Companies budget for recruiting costs but never budget for mis-hire costs — even though the latter is typically 5-10x larger. It's the hidden tax on every organization.",
      stats: [
        { value: "$17K", label: "Direct cost per bad hire", description: "Recruiting fees, onboarding, training, and severance. The visible number." },
        { value: "$50-150K", label: "True total cost", description: "Add lost productivity, team morale impact, customer churn, management time, and re-hiring. The real number." },
        { value: "46%", label: "Failure rate within 18 months", description: "Nearly half of all hires don't last 18 months. At a 100-person company, that's 23 bad hires per year." },
        { value: "$1.2M", label: "Annual bad-hire cost (100-person co.)", description: "23 bad hires x $50K average true cost. It's a staggering number that most leadership teams never see." },
      ],
    },
    solution: {
      badge: "Better Data, Better Outcomes",
      headline: "How verified ability data",
      gradientText: "changes the math",
      description:
        "When you screen on verified ability instead of resume claims, bad hire rates drop dramatically — and so does the associated cost.",
      features: [
        { title: "Prevention is 10x cheaper than remediation", description: "Spending $299-$799/mo on verified screening data saves $50-150K per prevented bad hire. The ROI is absurd." },
        { title: "3x quality improvement", description: "SkillPass users report 3x improvement in hire quality, measured by 90-day retention and performance reviews." },
        { title: "Quantifiable savings", description: "Our ROI calculator models the exact dollar impact based on your hiring volume and current bad-hire rate." },
        { title: "Board-level reporting", description: "Quality-of-hire data from SkillPass gives leadership visibility into a cost center they've never been able to measure." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Our CFO was skeptical until I showed her the math. At our scale, preventing even 5 bad hires per year saves $350K. The SkillPass subscription is a rounding error compared to that.",
        name: "Mark Davidson",
        role: "VP Talent Acquisition",
        detail: "Mid-market company, 800 employees",
      },
    },
    cta: {
      headline: "Stop paying the",
      gradientText: "bad hire tax",
      description: "Run the numbers. The savings case is overwhelming.",
      primaryCta: { text: "Calculate ROI", href: "/roi-calculator" },
      secondaryCta: { text: "Talk to Sales", href: "/demo" },
    },
    faq: [
      { q: "How do you define a 'bad hire'?", a: "Broadly: someone who is involuntarily terminated, voluntarily leaves within 12 months, or consistently underperforms relative to role expectations. The specific definition varies by company." },
      { q: "Is the $50-150K figure realistic?", a: "It's conservative for mid-to-senior roles. The Department of Labor estimates the cost of a bad hire at 30% of annual salary. For a $150K role, that's $45K in direct costs alone. Indirect costs multiply it further." },
      { q: "What's the ROI timeline for SkillPass?", a: "Most employers see positive ROI within 2-3 hires. At $299/mo and $12K average savings per hire, the math works almost immediately." },
    ],
  },

  // 217 — what-employers-look-for
  {
    slug: "what-employers-look-for",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "What Employers Actually Look For | Beyond the Job Description",
      description:
        "Job descriptions list requirements. Employers actually care about ability, reliability, culture fit, and growth potential. Here's what really drives hiring decisions.",
    },
    hero: {
      badge: "Employer Insights",
      headline: "Job descriptions say '5 years of Java.'",
      gradientText: "Employers mean something else entirely.",
      subheadline:
        "The stated requirements on a job posting rarely match what actually determines the hiring decision. Employers list hard skills and experience. They hire based on ability, reliability, communication, and whether they think you'll grow. Understanding that gap is the key to getting hired.",
      primaryCta: { text: "Prove What Matters", href: "/signup" },
      secondaryCta: { text: "Employer perspective", href: "/employers" },
    },
    problem: {
      badge: "The Signal Gap",
      headline: "What's listed and what matters are",
      gradientText: "completely different",
      description:
        "Job descriptions are legal documents written by committees. They list the minimum defensible requirements, not the actual decision criteria. This disconnect wastes everyone's time.",
      stats: [
        { value: "72%", label: "Employers who deviate from JD", description: "Nearly three-quarters of employers hire someone who doesn't exactly match the posted requirements." },
        { value: "Top 3", label: "Actual decision factors", description: "Across surveys, the top factors are: demonstrated ability, cultural fit, and growth potential. Not years of experience." },
        { value: "10%", label: "Weight on credentials", description: "When push comes to shove, credentials (degree, certifications) carry far less weight than ability demonstration." },
      ],
    },
    solution: {
      badge: "What Actually Matters",
      headline: "The four things employers",
      gradientText: "actually evaluate",
      description:
        "Behind the job description, employers are looking for four things — and SkillPass measures all of them.",
      features: [
        { title: "Can you do the job? (Assessed Ability)", description: "The most basic question. Proctored assessments give a direct answer. No need to infer ability from credentials." },
        { title: "Are you reliable? (Peer Signal)", description: "Will you deliver on time, communicate proactively, and show up consistently? Reference data answers this." },
        { title: "Will you grow? (Score History)", description: "Employers love upward trajectories. Your score history shows growth velocity — a signal resumes can't capture." },
        { title: "Can you work with us? (Personality + SJT)", description: "Big Five personality and situational judgment assessments provide fit signal that interviews try and usually fail to measure." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We tell candidates we're looking for '5+ years of Python experience.' What we're actually looking for is someone who can solve our data pipeline problems. SkillPass scores cut through the proxy and show us who can actually do it.",
        name: "Ana Rodriguez",
        role: "VP Data Engineering",
        detail: "E-commerce company, 1,200 employees",
      },
    },
    cta: {
      headline: "Demonstrate what",
      gradientText: "employers actually want",
      description: "Stop matching keywords. Start proving ability.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
    },
    faq: [
      { q: "Should I still match job description keywords?", a: "For ATS systems that filter on keywords, yes. But once your application reaches a human, verified ability data matters far more than keyword matches." },
      { q: "Do years of experience matter?", a: "Less than you'd think. Research consistently shows that experience beyond 2-3 years in a role adds diminishing predictive value. What matters is what you've learned and can do, not how long you've been doing it." },
      { q: "How do employers weigh SkillPass scores against traditional criteria?", a: "It varies, but most employers use SkillScores to prioritize their pipeline. Candidates above a score threshold get interviews; the rest don't. It replaces resume screening, not the entire process." },
    ],
  },

  // 218 — skills-vs-pedigree
  {
    slug: "skills-vs-pedigree",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Skills vs Pedigree | Why Where You Went Matters Less Than What You Can Do",
      description:
        "Pedigree-based hiring filters on school name and employer brand. Skills-based hiring filters on verified ability. One is fair. The other is lazy.",
    },
    hero: {
      badge: "Skills vs Pedigree",
      headline: "Your alma mater isn't your ability.",
      gradientText: "Stop letting it be.",
      subheadline:
        "Pedigree-based hiring has one appeal: it's easy. Screen for top-20 schools and brand-name employers and you'll get a decent pipeline without doing any real evaluation. But you'll also miss every non-traditional candidate who's better than your 'pedigree' hires — and there are a lot of them.",
      primaryCta: { text: "Prove Your Skills", href: "/signup" },
      secondaryCta: { text: "For employers", href: "/employers" },
    },
    problem: {
      badge: "Pedigree's Failures",
      headline: "School brand is a",
      gradientText: "terrible hiring filter",
      description:
        "Studies consistently show that school prestige has low correlation with job performance after the first 2-3 years of a career. It's a proxy for ability that introduces massive bias.",
      stats: [
        { value: "Low", label: "School-performance correlation", description: "After controlling for ability, school prestige adds almost no predictive value for job performance." },
        { value: "26%", label: "Name-bias callback gap", description: "Identical resumes with different names and schools receive vastly different callback rates." },
        { value: "99%", label: "Schools excluded by pedigree filters", description: "A 'top-20 schools' filter excludes 99.5% of institutions. That's a lot of talent to ignore." },
      ],
    },
    solution: {
      badge: "Skills Over Pedigree",
      headline: "Hire based on",
      gradientText: "what people can do",
      description:
        "Verified ability data lets you evaluate candidates on proven skill, not brand-name association.",
      features: [
        { title: "Calibrated academics replace prestige filters", description: "A calibrated GPA tells you how well someone performed relative to their institution. It doesn't matter if the school name is famous." },
        { title: "Assessments measure ability directly", description: "A 90th-percentile coding score is a 90th-percentile score whether the person went to MIT or a community college." },
        { title: "References measure reputation from people who matter", description: "People who've actually worked with the candidate know more about their ability than a school's admissions office decided 4 years ago." },
        { title: "Diversity improves automatically", description: "When you remove pedigree filters, pipeline diversity increases because you're no longer excluding institutions that serve underrepresented populations." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We tracked it. When we screened on SkillScore instead of school brand, 40% of our hires came from non-target schools — and their performance reviews were indistinguishable from the 'pedigree' hires. The filter was just noise.",
        name: "Michelle Park",
        role: "Director of Talent",
        detail: "Top-tier consulting firm",
      },
    },
    cta: {
      headline: "Let ability speak louder than",
      gradientText: "alma mater",
      description: "Build a verified profile that transcends where you went to school.",
      primaryCta: { text: "Start Free", href: "/signup" },
      secondaryCta: { text: "Employer Platform", href: "/employers" },
    },
    faq: [
      { q: "Does pedigree matter at all?", a: "It matters as context — a degree from a top school is meaningful data. But it shouldn't be a filter that excludes everyone else. Calibration includes institutional context without making it a binary gate." },
      { q: "Won't employers always prefer brand names?", a: "Some will. But the smartest employers are already shifting. Google, Apple, and others have publicly dropped degree requirements. The trend is clear: ability data will replace pedigree data." },
      { q: "Is this fair to people who worked hard to get into top schools?", a: "Yes. Their calibrated academic scores will reflect the rigor of their programs. They'll still benefit from their education — they just won't benefit from arbitrary exclusion of equally capable people who took a different path." },
    ],
  },

  // 219 — build-verified-identity
  {
    slug: "build-verified-identity",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Build a Verified Professional Identity | Own Your Career Data",
      description:
        "Your professional identity should be more than a LinkedIn page. Build a verified identity with assessed skills, calibrated references, and portable proof.",
    },
    hero: {
      badge: "Verified Identity",
      headline: "Your professional identity shouldn't depend on",
      gradientText: "who believes your resume.",
      subheadline:
        "Right now, your professional identity is a collection of self-reported documents: a resume you wrote, a LinkedIn profile you curated, maybe a portfolio you polished. None of it is verified. A verified professional identity changes that — it's proof, not claims.",
      primaryCta: { text: "Build Yours", href: "/signup" },
      secondaryCta: { text: "Learn more", href: "/blog/verified-identity" },
    },
    problem: {
      badge: "Self-Reported Everything",
      headline: "Your career narrative is unverified and",
      gradientText: "that's a problem for everyone",
      description:
        "When professional identity is self-reported, trust erodes. Employers discount claims. Candidates over-inflate to compensate. The whole system devolves into a credibility arms race.",
      stats: [
        { value: "78%", label: "Resumes with exaggerations", description: "When everyone inflates, nobody trusts. And when nobody trusts, even honest people get discounted." },
        { value: "Zero", label: "Standard verification", description: "There's no standard, widely adopted mechanism for verifying professional claims outside of degree and employment dates." },
        { value: "$4.7K", label: "Annual cost of re-verification", description: "Every job application requires re-proving yourself from scratch. That's time and money for both sides." },
      ],
    },
    solution: {
      badge: "Own Your Proof",
      headline: "A professional identity built on",
      gradientText: "evidence",
      description:
        "Build a verified professional identity that includes everything employers need — assessed, referenced, calibrated, and permanent.",
      features: [
        { title: "Assessed skills", description: "Proctored assessments across 8 types. Not self-reported skill claims — tested, verified, and scored." },
        { title: "Calibrated academics", description: "Your transcript, normalized and contextualized. Not just a degree — a full picture of your academic achievement." },
        { title: "Structured references", description: "Forced-choice rankings from people who've worked with you. Real reputation data, not a paragraph from a friend." },
        { title: "Permanent and portable", description: "Your verified identity belongs to you. Share it, update it, carry it across every job for your entire career." },
      ],
    },
    proof: {
      testimonial: {
        quote: "My SkillPass profile has become my professional identity. When I apply anywhere, I share the link. When recruiters reach out, they've already seen my scores. It's changed how I navigate my career.",
        name: "Sophie Martin",
        role: "Product Manager",
        detail: "Three job transitions using SkillPass",
      },
    },
    cta: {
      headline: "Build a professional identity",
      gradientText: "that can't be faked",
      description: "Verified skills. Calibrated academics. Real references. Your proof, forever.",
      primaryCta: { text: "Start Building", href: "/signup" },
    },
    faq: [
      { q: "How long does it take to build a complete profile?", a: "You can complete your first assessment in 30 minutes. A full profile — with multiple assessments, references, and transcript — typically takes 1-2 weeks." },
      { q: "Can I use my SkillPass profile alongside LinkedIn?", a: "Absolutely. Many users add their SkillPass profile link to their LinkedIn summary. LinkedIn provides the narrative; SkillPass provides the verification." },
      { q: "Is my data secure?", a: "Yes. All data is encrypted in transit and at rest. We comply with SOC 2, GDPR, and CCPA requirements. Your data is never sold or shared without your explicit consent." },
    ],
  },

  // 220 — meritocracy-implementation
  {
    slug: "meritocracy-implementation",
    category: "seo",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Implementing Meritocracy in Hiring | From Ideal to Practice",
      description:
        "Everyone claims to hire on merit. Almost nobody does. Here's what actual meritocratic hiring requires — and how verified data makes it possible.",
    },
    hero: {
      badge: "Meritocracy",
      headline: "Every company says they hire the best.",
      gradientText: "The data says otherwise.",
      subheadline:
        "Meritocracy is the stated goal of virtually every hiring process. But without verified ability data, standardized evaluation, and bias-resistant processes, \"meritocracy\" is just a word on a careers page. Here's what it actually takes to implement — and why it's been so hard until now.",
      primaryCta: { text: "Build Meritocratic Hiring", href: "/employers" },
      secondaryCta: { text: "For candidates", href: "/signup" },
    },
    problem: {
      badge: "The Gap",
      headline: "Meritocracy requires measurement.",
      gradientText: "Most companies don't have any.",
      description:
        "You can't reward merit if you can't measure it. And most hiring processes measure proxies (pedigree, interview performance, networking ability) instead of actual merit (demonstrated ability, verified work quality, peer-assessed competencies).",
      stats: [
        { value: "92%", label: "Companies claiming merit-based hiring", description: "Nearly everyone says they hire on merit. The number who've built infrastructure to verify that claim is much smaller." },
        { value: "26%", label: "Name-based callback gap", description: "If the same resume gets different callbacks based on the name at the top, you don't have meritocracy." },
        { value: "45%", label: "Hires from referrals", description: "If nearly half your hires come from referrals, you're not hiring on merit — you're hiring on network." },
      ],
    },
    solution: {
      badge: "Real Meritocracy",
      headline: "What meritocratic hiring",
      gradientText: "actually requires",
      description:
        "Meritocracy isn't a principle — it's an infrastructure problem. You need standardized measurement, verified data, and bias-resistant processes.",
      features: [
        { title: "Standardized measurement", description: "Merit must be measured on a common scale. The SkillScore provides that: 300-850, same methodology for everyone, verified and comparable." },
        { title: "Verified, not self-reported", description: "Self-reported merit is an oxymoron. Verified assessments, calibrated references, and normalized academics provide merit data that doesn't depend on self-promotion." },
        { title: "Blind evaluation options", description: "Remove names, photos, and school brands from the initial screen. If merit is what you're evaluating, identity cues are noise." },
        { title: "Audit-ready transparency", description: "Can you prove your process is merit-based? With SkillPass, every screening decision is based on documented, verified scores. That's auditable meritocracy." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We put 'meritocracy' in our company values for years. When we implemented SkillPass with blind mode, we realized how much our 'meritocratic' process was actually driven by pedigree and pattern matching. Now it's real.",
        name: "James Torres",
        role: "CEO",
        detail: "Series B startup, 200 employees",
      },
    },
    cta: {
      headline: "Stop claiming meritocracy.",
      gradientText: "Start building it.",
      description: "Verified data + standardized measurement + blind evaluation = actual merit-based hiring.",
      primaryCta: { text: "For Employers", href: "/employers" },
      secondaryCta: { text: "For Talent", href: "/signup" },
    },
    faq: [
      { q: "Isn't meritocracy a controversial concept?", a: "The controversy is usually about whether meritocracy exists — not whether it should. Most critiques argue that systems claiming to be meritocratic aren't actually measuring merit. We agree. That's why we build infrastructure to actually measure it." },
      { q: "Can verified data fully eliminate bias?", a: "No system is perfectly unbiased. But verified ability data is dramatically less biased than resume-based screening, interview-based evaluation, or network-based sourcing. It's the best available approach." },
      { q: "How do you handle the fact that access to test prep, good schools, etc. isn't equal?", a: "Calibration accounts for much of this. A strong performance at a less-resourced institution is recognized accordingly. We also weight multiple dimensions — references and performance data don't correlate with access to test prep." },
      { q: "Is meritocratic hiring compatible with diversity goals?", a: "Not only compatible — aligned. Research consistently shows that when you remove pedigree filters and evaluate on verified ability, pipeline diversity increases. Merit and diversity are complementary, not competing." },
    ],
  },
];

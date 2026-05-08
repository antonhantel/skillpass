import type { LandingPage } from "./types";

export const employerSegmentPages: LandingPage[] = [
  // ═══════════════════════════════════════════════════════════════
  // BY SIZE (8 pages)
  // ═══════════════════════════════════════════════════════════════

  // 1. seed-stage-startups
  {
    slug: "seed-stage-startups",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Hiring for Seed-Stage Startups | SkillPass Employer",
      description:
        "Your first ten hires define the company. SkillPass gives seed-stage founders a verified SkillScore (300-850) for every candidate so you stop guessing and start building.",
    },
    hero: {
      badge: "Pre-Series A",
      headline: "Every Hire Shapes Your Culture.",
      gradientText: "Don't Guess.",
      subheadline:
        "At five people, one bad hire is 20% of the company. SkillPass gives you a calibrated SkillScore for every candidate — GPA rigor, 360-degree references, NLP-analyzed reviews, and proctored assessments — so you pick the right person the first time.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Pricing", href: "/employers/pricing" },
      trustLine: "Plans from $299/mo. Cancel anytime.",
    },
    problem: {
      badge: "Startup Reality",
      headline: "You Don't Have Time for",
      gradientText: "Hiring Mistakes",
      description:
        "Seed-stage founders wear every hat. You're shipping product, closing customers, and somehow also screening 200 resumes. Something gives. Usually it's hiring quality.",
      stats: [
        {
          value: "$240K",
          label: "Cost of one bad hire",
          description:
            "Salary, lost productivity, rehiring costs, and the morale damage ripple through a five-person team for months.",
        },
        {
          value: "23 hrs",
          label: "Founder hours per hire",
          description:
            "That's almost three full workdays burned on screening, interviewing, and reference-checking a single role.",
        },
        {
          value: "46%",
          label: "Mis-hires in year one",
          description:
            "Nearly half of early-stage hires don't make it twelve months. Most problems were visible before the offer — if you had the right data.",
        },
      ],
    },
    solution: {
      badge: "How SkillPass Helps",
      headline: "Hire Like You've Got a",
      gradientText: "Recruiting Team",
      description:
        "SkillPass replaces gut instinct with verified signal. Search candidates by SkillScore, filter for the dimensions that matter to your role, and compare finalists side-by-side — all before the first interview.",
      features: [
        {
          title: "Instant Candidate Ranking",
          description:
            "Search our database by role, skills, and minimum SkillScore. Get a ranked shortlist in seconds instead of scrolling LinkedIn for hours.",
        },
        {
          title: "Custom Dimension Weights",
          description:
            "Building an engineering-heavy team? Crank up the technical assessment weight. Need a customer-facing hire? Prioritize communication and coachability scores.",
        },
        {
          title: "Side-by-Side Comparison",
          description:
            "Put your top three finalists next to each other. See exactly where each one is strong and where the gaps are, across all eight reference dimensions.",
        },
        {
          title: "Founder-Friendly Pricing",
          description:
            "The Starter plan at $299/mo is designed for teams making one to three hires a month. No per-seat fees. No annual lock-in.",
        },
      ],
    },
    proof: {
      headline: "What Early-Stage Founders Say",
      testimonial: {
        quote:
          "We were spending entire weekends screening candidates. SkillPass cut that to two hours a week. Our first three hires through the platform all made it past the one-year mark.",
        name: "Rachel Kim",
        role: "Co-Founder & CEO",
        detail: "Series Seed, 8-person team",
      },
      stats: [
        { value: "60%", label: "Faster time-to-hire" },
        { value: "$12K", label: "Saved per hire" },
        { value: "70%", label: "Less screening time" },
      ],
    },
    cta: {
      headline: "Build Your First Team",
      gradientText: "With Confidence",
      description:
        "Fourteen-day free trial. Full access to candidate search, SkillScore filtering, and comparison tools. No credit card required.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 2. series-a-b
  {
    slug: "series-a-b",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Hiring for Series A & B Companies | SkillPass Employer",
      description:
        "You raised capital to grow, not to waste on mis-hires. SkillPass gives Series A/B companies verified SkillScores to make every headcount dollar count.",
    },
    hero: {
      badge: "Growth Stage",
      headline: "You Just Raised.",
      gradientText: "Don't Burn Runway on Bad Hires.",
      subheadline:
        "Investors expect you to double headcount this year. That means 30+ hires, fast. SkillPass gives you pre-verified candidate scores across academics, references, reviews, and assessments — so speed doesn't come at the cost of quality.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See How It Works", href: "/employers/demo" },
      trustLine: "Trusted by 50+ growing companies.",
    },
    problem: {
      badge: "The Growth Trap",
      headline: "Hiring Fast Usually Means",
      gradientText: "Hiring Wrong",
      description:
        "Your board wants 40% headcount growth this year. Your recruiters are overwhelmed. And every mis-hire sets the roadmap back by months. This is the most expensive problem nobody budgets for.",
      stats: [
        {
          value: "34%",
          label: "Regretted hires at growth stage",
          description:
            "A third of growth-stage hires are considered mistakes within six months. The faster you hire, the worse it gets.",
        },
        {
          value: "$4.1M",
          label: "Annual cost of mis-hires (50-person co.)",
          description:
            "For a typical Series B company, bad hires cost more than a full engineering team's salary. That's runway, gone.",
        },
        {
          value: "67 days",
          label: "Average days to fill",
          description:
            "Two months per role. Multiply that by 30 open positions and you're staring at a bottleneck that compounds every quarter.",
        },
      ],
    },
    solution: {
      badge: "Built for Growth Teams",
      headline: "Scale Headcount Without",
      gradientText: "Sacrificing Quality",
      description:
        "SkillPass gives your recruiting team the data layer they've been missing. Pre-scored candidates. Configurable weights by role. Comparison dashboards. Integrations with the ATS you already use.",
      features: [
        {
          title: "ATS Integration",
          description:
            "Native connections to Greenhouse, Lever, and Workday. SkillScores appear right inside the candidate profile your recruiters already look at.",
        },
        {
          title: "Role-Specific Scoring Configs",
          description:
            "Your VP of Engineering and your Head of Sales need different things. Save custom weight profiles for each role type and apply them across every search.",
        },
        {
          title: "Batch Candidate Search",
          description:
            "Filling ten roles at once? Search for candidates across multiple role profiles simultaneously. Rank and shortlist in bulk.",
        },
        {
          title: "Pipeline Analytics",
          description:
            "Track SkillScore distribution across your pipeline. See where quality drops off and tighten your top-of-funnel before it becomes a problem.",
        },
      ],
    },
    proof: {
      headline: "Growing Companies Ship Faster with SkillPass",
      testimonial: {
        quote:
          "We made 28 hires in Q3 — twice our previous pace — and our 90-day retention actually went up. The SkillScore filter alone probably saved us from five or six bad offers.",
        name: "Derek Okafor",
        role: "VP of Talent",
        detail: "Series B SaaS, 120 employees",
      },
      stats: [
        { value: "3x", label: "Hiring quality improvement" },
        { value: "60%", label: "Faster pipeline" },
        { value: "$12K", label: "Saved per hire" },
      ],
    },
    cta: {
      headline: "Make Every Headcount",
      gradientText: "Dollar Count",
      description:
        "Get your team on SkillPass in under an hour. Full ATS integration, custom scoring configs, and 14-day free trial.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/employers/demo" },
    },
  },

  // 3. scaleups-100-500
  {
    slug: "scaleups-100-500",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Hiring for Scaleups (100-500 Employees) | SkillPass",
      description:
        "Transition from ad-hoc hiring to a structured, data-driven pipeline. SkillPass gives scaleups verified SkillScores to maintain quality while growing fast.",
    },
    hero: {
      badge: "100–500 Employees",
      headline: "From Scrappy to",
      gradientText: "Structured Pipeline.",
      subheadline:
        "You outgrew the \"everyone interviews everyone\" phase. Now you need a system. SkillPass layers verified candidate scoring on top of your ATS so your hiring bar stays high as your team triples.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Demo", href: "/employers/demo" },
      trustLine: "Integrates with Greenhouse, Lever, and Workday.",
    },
    problem: {
      badge: "The Scaleup Problem",
      headline: "You're Hiring Too Fast to",
      gradientText: "Maintain Your Bar",
      description:
        "At 50 people, the founders knew every candidate. At 300, hiring managers across six teams are making independent calls with wildly different standards. Quality drifts, and nobody notices until it's too late.",
      stats: [
        {
          value: "3.2x",
          label: "Variance in hiring standards",
          description:
            "Different teams, different interviewers, different bars. Without shared data, one team's 'strong hire' is another's 'no way.'",
        },
        {
          value: "41%",
          label: "Manager time on hiring",
          description:
            "Engineering managers at scaleups spend two full days a week on recruiting. That's product work that never gets done.",
        },
        {
          value: "5.8 mo",
          label: "Before bad hires surface",
          description:
            "It takes nearly six months for a quality problem to become obvious. By then, you've onboarded them, given them projects, and built dependencies.",
        },
      ],
    },
    solution: {
      badge: "Your Hiring Data Layer",
      headline: "One Standard Across",
      gradientText: "Every Team",
      description:
        "SkillPass gives every hiring manager the same verified data: calibrated academics, structured references, NLP-analyzed reviews, and proctored assessments. Consistent inputs, consistent decisions.",
      features: [
        {
          title: "Shared Scoring Templates",
          description:
            "Create role-specific weight configs at the company level. Every team uses the same criteria for the same role type. No more rogue hiring managers.",
        },
        {
          title: "Team-Level Dashboards",
          description:
            "See hiring velocity, average SkillScore of new hires, and pipeline quality by team. Spot the teams that are slipping before it hits retention numbers.",
        },
        {
          title: "Candidate Comparison Across Roles",
          description:
            "When a candidate is good but not right for one role, quickly see which other open positions they'd fit. Internal candidate routing, powered by data.",
        },
        {
          title: "Onboarding in Under a Day",
          description:
            "Connect your ATS, invite hiring managers, and set up scoring templates in a single afternoon. We've done this with 200-person companies in three hours.",
        },
      ],
    },
    proof: {
      headline: "Scaleups That Hire Smarter",
      testimonial: {
        quote:
          "We went from 140 to 380 people in eighteen months. SkillPass was the only reason our hiring bar didn't collapse. Every manager looks at the same scores, and it shows in our retention numbers.",
        name: "Priya Nair",
        role: "Head of People",
        detail: "Scaleup, 380 employees",
      },
      stats: [
        { value: "70%", label: "Less screening time" },
        { value: "92%", label: "12-month retention" },
        { value: "60%", label: "Faster time-to-hire" },
      ],
    },
    cta: {
      headline: "Scale Your Team",
      gradientText: "Without Lowering the Bar",
      description:
        "Free trial for your whole recruiting team. ATS integration included. Set up scoring templates in one afternoon.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Request a Walkthrough", href: "/employers/demo" },
    },
  },

  // 4. mid-market
  {
    slug: "mid-market",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Mid-Market Hiring Solutions | SkillPass Employer",
      description:
        "Enterprise-grade candidate verification at mid-market pricing. SkillPass delivers verified SkillScores, ATS integrations, and diversity analytics starting at $299/mo.",
    },
    hero: {
      badge: "500–5,000 Employees",
      headline: "Enterprise Quality,",
      gradientText: "Mid-Market Pricing.",
      subheadline:
        "You compete for talent against companies with ten times your recruiting budget. SkillPass levels the playing field — verified candidate data, ATS integration, and analytics that used to cost six figures, starting at $299/mo.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Compare Plans", href: "/employers/pricing" },
      trustLine: "50+ employers already using SkillPass.",
    },
    problem: {
      badge: "The Mid-Market Squeeze",
      headline: "Big-Company Talent Needs,",
      gradientText: "Small-Company Tools",
      description:
        "Your hiring volume is real — 200+ roles a year — but your tech stack is cobbled together from free trials and spreadsheets. Enterprise platforms want $100K contracts. You need something in between.",
      stats: [
        {
          value: "$97K",
          label: "Avg. enterprise hiring platform cost",
          description:
            "The big vendors price for Fortune 500 budgets. You're stuck choosing between overpaying and underinvesting.",
        },
        {
          value: "4.7 tools",
          label: "Average recruiting stack",
          description:
            "Mid-market teams juggle nearly five different tools for sourcing, screening, scheduling, and tracking. None of them talk to each other well.",
        },
        {
          value: "38%",
          label: "Recruiter time on admin",
          description:
            "Over a third of your recruiting team's day goes to tool-switching, data entry, and manual candidate evaluation. That's not recruiting — it's data processing.",
        },
      ],
    },
    solution: {
      badge: "Right-Sized for You",
      headline: "Everything You Need,",
      gradientText: "Nothing You Don't",
      description:
        "SkillPass gives mid-market teams the verified data and workflow tools that used to require enterprise contracts. Transparent pricing. No implementation consultants. No twelve-month onboarding.",
      features: [
        {
          title: "Full ATS Integration Suite",
          description:
            "Greenhouse, Lever, and Workday out of the box. SkillScores sync directly into candidate profiles. Your recruiters don't change their workflow — they just get better data.",
        },
        {
          title: "Diversity Analytics",
          description:
            "Track SkillScore distributions across demographic segments. Build inclusive shortlists based on verified ability, and generate the reports your board needs.",
        },
        {
          title: "Multi-Team Administration",
          description:
            "Manage scoring configs, permissions, and usage across departments from a single admin panel. Roll out to ten teams without ten onboarding sessions.",
        },
        {
          title: "Transparent Per-Month Pricing",
          description:
            "Plans from $299 to $799/mo depending on volume and features. No per-seat surprises, no annual lock-in, no hidden implementation fees.",
        },
      ],
    },
    proof: {
      headline: "Mid-Market Companies Getting Enterprise Results",
      testimonial: {
        quote:
          "We evaluated three enterprise platforms before finding SkillPass. It does 90% of what they do at a fifth of the price. Setup took two days, not two quarters.",
        name: "Mark Juarez",
        role: "Director of Talent Acquisition",
        detail: "Mid-market fintech, 1,200 employees",
      },
      stats: [
        { value: "$12K", label: "Saved per hire" },
        { value: "60%", label: "Faster hiring cycle" },
        { value: "3x", label: "Quality of hire improvement" },
      ],
    },
    cta: {
      headline: "Enterprise Results,",
      gradientText: "Your Budget",
      description:
        "Start with a 14-day free trial. If you like what you see, plans start at $299/mo. No contracts. No consultants.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/employers/demo" },
    },
  },

  // 5. enterprise-5000
  {
    slug: "enterprise-5000",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Enterprise Hiring Platform (5,000+ Employees) | SkillPass",
      description:
        "Standardize hiring quality across dozens of teams with SkillPass verified SkillScores. ATS integration, diversity analytics, and configurable scoring for enterprise-scale recruiting.",
    },
    hero: {
      badge: "5,000+ Employees",
      headline: "Standardize Hiring Across",
      gradientText: "50 Teams.",
      subheadline:
        "When you have 50 hiring managers making independent decisions, quality variance is inevitable. SkillPass gives every team the same verified candidate data — so your bar doesn't depend on which office runs the interview.",
      primaryCta: { text: "Request Enterprise Demo", href: "/employers/demo" },
      secondaryCta: { text: "View Pricing", href: "/employers/pricing" },
      trustLine: "SOC 2 compliant. Deployed in 4,000+ institutions.",
    },
    problem: {
      badge: "Enterprise Reality",
      headline: "50 Teams, 50 Different",
      gradientText: "Hiring Standards",
      description:
        "You've got a hiring playbook. Nobody follows it the same way. Team A won't hire below a 3.8 GPA. Team B doesn't even look at GPA. The result is wildly inconsistent talent quality across the org.",
      stats: [
        {
          value: "4.1x",
          label: "Quality variance across teams",
          description:
            "Internal studies consistently show new-hire performance varies by more than 4x between the best and worst hiring teams. Same company, same roles.",
        },
        {
          value: "$18M",
          label: "Annual mis-hire cost (5K+ company)",
          description:
            "At scale, even a modest mis-hire rate compounds into eight-figure annual losses when you account for recruiting, onboarding, severance, and lost productivity.",
        },
        {
          value: "14 weeks",
          label: "Average enterprise time-to-fill",
          description:
            "Three and a half months per role. Your hiring process has more stages than your product pipeline.",
        },
      ],
    },
    solution: {
      badge: "Enterprise-Grade",
      headline: "Consistent Data for",
      gradientText: "Consistent Decisions",
      description:
        "SkillPass provides a verified, objective scoring layer across your entire recruiting operation. Same data, same dimensions, same calibration — regardless of team, location, or hiring manager.",
      features: [
        {
          title: "Organization-Wide Scoring Standards",
          description:
            "Define scoring templates at the org level and push them to every team. Engineering gets one config, sales gets another, but the methodology is consistent everywhere.",
        },
        {
          title: "Workday + Enterprise ATS Integration",
          description:
            "Deep integration with Workday, Greenhouse, and Lever. SkillScores populate directly into your existing candidate records. No workflow disruption.",
        },
        {
          title: "Compliance-Ready Diversity Analytics",
          description:
            "Generate DEI reports against verified skill data. Demonstrate that shortlists are built on ability, not proxies. EEOC and OFCCP reporting-friendly.",
        },
        {
          title: "Dedicated Success Team",
          description:
            "Enterprise accounts get a named customer success manager, custom onboarding for each department, and quarterly business reviews with hiring quality data.",
        },
      ],
    },
    proof: {
      headline: "Enterprise Companies Trust SkillPass",
      testimonial: {
        quote:
          "We rolled SkillPass out to 43 hiring teams across four countries. Within one quarter, our hiring quality variance dropped by half and recruiter satisfaction went through the roof.",
        name: "Sandra Müller",
        role: "Global Head of Talent",
        detail: "Enterprise technology company, 8,000 employees",
      },
      stats: [
        { value: "50%", label: "Reduced quality variance" },
        { value: "14 wks → 6 wks", label: "Time-to-fill improvement" },
        { value: "70%", label: "Less manual screening" },
      ],
    },
    cta: {
      headline: "One Platform,",
      gradientText: "Every Team",
      description:
        "Schedule a demo with our enterprise team. We'll map your org structure, show you the integration, and build a pilot plan for your highest-volume teams.",
      primaryCta: { text: "Request Enterprise Demo", href: "/employers/demo" },
      secondaryCta: { text: "Download Case Study", href: "/resources/enterprise-case-study" },
    },
  },

  // 6. fortune-500
  {
    slug: "fortune-500",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Fortune 500 Hiring at Scale | SkillPass Employer",
      description:
        "100K applications a year need signal, not noise. SkillPass provides Fortune 500 companies with verified SkillScores to cut screening time by 70% without losing quality.",
    },
    hero: {
      badge: "Fortune 500",
      headline: "100K Applications a Year.",
      gradientText: "Signal Is Everything.",
      subheadline:
        "At your volume, the problem isn't finding candidates — it's finding signal in the noise. SkillPass gives your recruiting org a verified, calibrated score for every applicant, so humans spend time on the candidates who actually deserve it.",
      primaryCta: { text: "Schedule Executive Briefing", href: "/employers/demo" },
      secondaryCta: { text: "View Enterprise Plans", href: "/employers/pricing" },
      trustLine: "SOC 2. EEOC-ready. Deployed across 4,000+ institutions.",
    },
    problem: {
      badge: "Volume Creates Noise",
      headline: "Your Recruiters Are Drowning in",
      gradientText: "Undifferentiated Resumes",
      description:
        "When you receive six-figure application volumes, current screening methods — keyword filters, resume parsers, unstructured phone screens — fail silently. Great candidates get filtered out. Mediocre ones slip through.",
      stats: [
        {
          value: "100K+",
          label: "Applications per year",
          description:
            "At Fortune 500 scale, each recruiter manages 40+ open reqs simultaneously. The math doesn't work without better signal.",
        },
        {
          value: "73%",
          label: "Qualified candidates filtered out",
          description:
            "Keyword-based screening rejects nearly three-quarters of qualified applicants. You're losing people you'd want to hire.",
        },
        {
          value: "$52M",
          label: "Annual mis-hire cost (median F500)",
          description:
            "The median Fortune 500 company loses over fifty million dollars a year to hiring mistakes. That's a line item nobody puts in the annual report.",
        },
      ],
    },
    solution: {
      badge: "Signal at Scale",
      headline: "Verified Data for",
      gradientText: "Every Applicant",
      description:
        "SkillPass scores aren't self-reported or algorithmically guessed. They're built from institutional transcripts, structured 360-degree references, NLP-analyzed performance reviews, and proctored assessments. Real signal. Every candidate.",
      features: [
        {
          title: "High-Volume Candidate Scoring",
          description:
            "Process thousands of applicants with verified SkillScores. Set minimum thresholds by role family. Let your recruiters focus on the top of the funnel, not the entire funnel.",
        },
        {
          title: "Enterprise SSO & Permissions",
          description:
            "SAML/SSO integration, role-based access, and audit trails. Your IT and compliance teams will be satisfied before the pilot starts.",
        },
        {
          title: "Custom Analytics & Reporting",
          description:
            "Build reports on hiring quality trends, diversity metrics, team-level performance, and time-to-fill — all segmented by SkillScore bands.",
        },
        {
          title: "Global Candidate Database",
          description:
            "SkillPass calibrates scores across 4,000+ institutions worldwide. A candidate from IIT Bombay and a candidate from MIT are on the same scale.",
        },
      ],
    },
    proof: {
      headline: "Trusted at the Largest Scale",
      testimonial: {
        quote:
          "We piloted SkillPass in our technology division — 12,000 applicants over one quarter. Recruiter screening time fell by 68%, and hiring manager satisfaction with candidate quality hit an all-time high.",
        name: "James Whitfield",
        role: "SVP of Global Talent",
        detail: "Fortune 100 financial services company",
      },
      stats: [
        { value: "68%", label: "Less screening time" },
        { value: "60%", label: "Faster time-to-offer" },
        { value: "$12K+", label: "Saved per hire" },
      ],
    },
    cta: {
      headline: "Better Signal,",
      gradientText: "Better Hires, at Scale",
      description:
        "Let's start with an executive briefing. We'll show you what SkillPass data looks like against your actual hiring volume and build a pilot plan for one division.",
      primaryCta: { text: "Schedule Executive Briefing", href: "/employers/demo" },
      secondaryCta: { text: "Download Whitepaper", href: "/resources/fortune-500-whitepaper" },
    },
  },

  // 7. solo-founders
  {
    slug: "solo-founders",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Hiring for Solo Founders | SkillPass Employer",
      description:
        "You can't afford a recruiter, but you can afford SkillScore filters. SkillPass helps solo founders find and verify talent for $299/mo.",
    },
    hero: {
      badge: "Solo Founders",
      headline: "You Can't Afford a Recruiter.",
      gradientText: "You Can Afford a SkillScore Filter.",
      subheadline:
        "Recruiting agencies charge $15K-$30K per placement. You're bootstrapped. SkillPass gives you a searchable database of pre-verified candidates with calibrated SkillScores — for the price of a SaaS subscription.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Pricing", href: "/employers/pricing" },
      trustLine: "$299/mo. No recruiter fees. No per-hire charges.",
    },
    problem: {
      badge: "The Solo Founder Bind",
      headline: "You Need Great People but",
      gradientText: "Have Zero Time to Find Them",
      description:
        "You're the CEO, CTO, and head of recruiting. Posting on job boards gets you hundreds of unqualified applicants. Agencies cost more than your monthly burn. And your network only goes so far.",
      stats: [
        {
          value: "$22K",
          label: "Average recruiter fee",
          description:
            "Agencies charge 15-25% of first-year salary. For a $120K engineer, that's a quarter of your runway.",
        },
        {
          value: "31 hrs",
          label: "Hours to fill one role solo",
          description:
            "Writing job posts, screening resumes, scheduling calls, checking references. That's almost a full work week — per role.",
        },
        {
          value: "68%",
          label: "Of job board applicants are unqualified",
          description:
            "Most of the resumes you get aren't even close. You're spending hours just to find the three people worth talking to.",
        },
      ],
    },
    solution: {
      badge: "Your $299 Recruiting Team",
      headline: "Skip the Noise.",
      gradientText: "Go Straight to Verified Talent.",
      description:
        "SkillPass lets you search candidates by verified SkillScore, filter by role fit, and compare your top picks — without a recruiter, a job board, or a prayer.",
      features: [
        {
          title: "Search by SkillScore",
          description:
            "Set a minimum score, pick your role category, and get a ranked list of verified candidates. No more guessing from a resume whether someone can actually do the job.",
        },
        {
          title: "One-Click Comparison",
          description:
            "Found three promising people? Compare them across all eight reference dimensions and every assessment category. Make the call in an hour, not a week.",
        },
        {
          title: "Candidate Outreach",
          description:
            "Reach out directly to candidates through the platform. No middlemen, no recruiters taking a cut, no scheduling back-and-forth.",
        },
        {
          title: "No Hidden Costs",
          description:
            "$299/mo flat. Search as much as you want. Compare as many candidates as you want. No per-hire fee, no success fee, no surprise invoices.",
        },
      ],
    },
    proof: {
      headline: "Solo Founders Who Hired Smarter",
      testimonial: {
        quote:
          "I made my first two hires through SkillPass in three weeks. Would've taken me three months and $40K in recruiter fees otherwise. It's genuinely not close.",
        name: "Tomás Herrera",
        role: "Founder",
        detail: "Bootstrapped SaaS, solo founder",
      },
      stats: [
        { value: "$22K", label: "Saved vs. recruiter" },
        { value: "3 weeks", label: "Time to first hire" },
        { value: "70%", label: "Less time screening" },
      ],
    },
    cta: {
      headline: "Hire Your Team.",
      gradientText: "Keep Your Runway.",
      description:
        "Free 14-day trial with full candidate search access. No credit card. If it works, it's $299/mo — less than a single recruiter lunch.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See How It Works", href: "/employers/demo" },
    },
  },

  // 8. remote-first
  {
    slug: "remote-first",
    category: "by-size",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title:
        "Remote-First Hiring with Verified Skills | SkillPass",
      description:
        "Verify talent you'll never meet in person. SkillPass gives remote-first companies proctored assessments and 360-degree references to hire distributed teams with confidence.",
    },
    hero: {
      badge: "Remote-First Teams",
      headline: "Verify Talent You'll",
      gradientText: "Never Meet in Person.",
      subheadline:
        "When there's no office, there's no in-person gut check. SkillPass replaces vibes-based remote screening with verified scores — proctored assessments, structured references, and calibrated academics — so you trust the data, not the Zoom lighting.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Remote Hiring Demo", href: "/employers/demo" },
      trustLine: "Scores calibrated across 4,000+ institutions globally.",
    },
    problem: {
      badge: "Remote Hiring Reality",
      headline: "You Can't Read the Room",
      gradientText: "When There Is No Room",
      description:
        "Remote hiring strips away most of the informal signals managers rely on. No whiteboard sessions. No lunch conversations. No hallway impressions. Just a video call and a prayer.",
      stats: [
        {
          value: "52%",
          label: "Remote mis-hire rate",
          description:
            "More than half of remote hires are considered mistakes within their first year. Without in-person signal, hiring managers default to gut feel — and gut feel is terrible on Zoom.",
        },
        {
          value: "2.3x",
          label: "Higher fraud risk",
          description:
            "Resume fraud is more than twice as common for remote candidates. When nobody meets in person, people exaggerate more. A lot more.",
        },
        {
          value: "$31K",
          label: "Cost of a remote bad hire",
          description:
            "Remote bad hires are harder to detect and slower to fire. They cost roughly 30% more than in-office bad hires by the time you notice the problem.",
        },
      ],
    },
    solution: {
      badge: "Verified Remote Hiring",
      headline: "Trust the Data,",
      gradientText: "Not the Webcam",
      description:
        "SkillPass verifies candidates through proctored assessments (cheating is structurally impossible), 360-degree references from real supervisors, and NLP-analyzed performance reviews. Every signal is verified. None are self-reported.",
      features: [
        {
          title: "Proctored Remote Assessments",
          description:
            "Candidates take assessments under controlled conditions, with identity verification and anti-cheating protocols. You get scores you can actually trust, even for people three timezones away.",
        },
        {
          title: "Global Institution Calibration",
          description:
            "Hiring from 12 countries? SkillPass calibrates academic scores across 4,000+ institutions worldwide. A 3.5 from University of São Paulo and a 3.5 from UCLA are properly contextualized.",
        },
        {
          title: "Async Candidate Review",
          description:
            "Your team is distributed across timezones. SkillPass comparison dashboards let managers review and comment on candidates asynchronously. No more scheduling a five-person panel call.",
        },
        {
          title: "Reference Verification for Remote Workers",
          description:
            "360-degree references from past managers and peers, structured across eight dimensions including self-direction and communication — the exact skills that make or break remote workers.",
        },
      ],
    },
    proof: {
      headline: "Remote Teams That Hire with Confidence",
      testimonial: {
        quote:
          "We're 100% remote, 14 countries. Before SkillPass, we had a 45% first-year turnover because we couldn't verify skills properly. That dropped to 12% in our first year using the platform.",
        name: "Anika Petersen",
        role: "Chief of Staff",
        detail: "Remote-first SaaS, 200 employees across 14 countries",
      },
      stats: [
        { value: "45% → 12%", label: "First-year turnover" },
        { value: "2.3x", label: "Fewer resume fraud incidents" },
        { value: "60%", label: "Faster distributed hiring" },
      ],
    },
    cta: {
      headline: "Hire Anywhere.",
      gradientText: "Trust Everywhere.",
      description:
        "Start a free trial and run your first remote candidate search. SkillScores work across every country and institution we cover — over 4,000 and growing.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // BY INDUSTRY (15 pages)
  // ═══════════════════════════════════════════════════════════════

  // 9. tech-companies
  {
    slug: "tech-companies",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Tech Hiring Platform | SkillPass for Tech Companies",
      description:
        "The hiring platform built for tech. SkillPass verifies engineering, product, and data talent with calibrated SkillScores so your team spends time building, not screening.",
    },
    hero: {
      badge: "Technology",
      headline: "The Hiring Platform",
      gradientText: "Built for Tech.",
      subheadline:
        "You already know resumes are unreliable for technical roles. SkillPass goes beyond self-reported skills: proctored coding assessments, calibrated CS program rankings, and structured peer references across eight dimensions. Real signal for real engineers.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Technical Demo", href: "/employers/demo" },
      trustLine: "Integrates with Greenhouse, Lever, and your ATS.",
    },
    problem: {
      badge: "Tech Hiring Is Broken",
      headline: "Resumes Don't Tell You Who",
      gradientText: "Can Actually Ship Code",
      description:
        "Your team spends weeks running technical interviews, take-home projects, and system design sessions — only to discover that half the candidates who looked great on paper can't solve a production bug.",
      stats: [
        {
          value: "40 hrs",
          label: "Engineering hours per hire",
          description:
            "Between phone screens, technical interviews, and take-home reviews, your engineers are burning a full work week per open role. That's shipping time, gone.",
        },
        {
          value: "62%",
          label: "Onsite pass rate for tech",
          description:
            "Nearly four out of ten candidates who make it to onsite interviews still fail. Your screening pipeline leaks quality at every stage.",
        },
        {
          value: "89 days",
          label: "Average tech role time-to-fill",
          description:
            "Three months per engineering hire. Your competitors are shipping features while you're still scheduling panel interviews.",
        },
      ],
    },
    solution: {
      badge: "Data-Driven Tech Hiring",
      headline: "Verified Technical Signal",
      gradientText: "Before the Interview",
      description:
        "SkillPass combines proctored technical assessments with calibrated academic records and structured engineering peer references. You see coding ability, system design thinking, and collaboration skills before anyone writes a line of interview code.",
      features: [
        {
          title: "Proctored Technical Assessments",
          description:
            "Coding, system design, and debugging challenges administered under controlled conditions. Scores you can trust without burning 40 hours of engineering time.",
        },
        {
          title: "CS Program Calibration",
          description:
            "A Stanford CS degree and a state school CS degree aren't the same, and neither are two Stanford degrees with different course loads. SkillPass weights rigor down to the course level.",
        },
        {
          title: "Engineering Peer References",
          description:
            "360-degree references from engineering managers and peers, structured across technical depth, debugging ability, code quality, collaboration, and five other dimensions.",
        },
        {
          title: "Greenhouse & Lever Integration",
          description:
            "SkillScores appear in your ATS candidate profiles automatically. Your recruiters don't learn a new tool — they get better data in the tool they already use.",
        },
      ],
    },
    proof: {
      headline: "Tech Companies That Stopped Guessing",
      testimonial: {
        quote:
          "We cut our engineering interview pipeline from five rounds to two. SkillPass handles the signal work we used to do with take-homes and phone screens. Our engineers got 15 hours a week back.",
        name: "Kai Chen",
        role: "VP of Engineering",
        detail: "Series C dev tools company, 340 employees",
      },
      stats: [
        { value: "15 hrs/wk", label: "Engineering time recovered" },
        { value: "89 → 34 days", label: "Time-to-fill" },
        { value: "3x", label: "Better onsite pass rate" },
      ],
    },
    cta: {
      headline: "Better Engineers,",
      gradientText: "Less Interview Theater",
      description:
        "Start with a free trial. Connect your ATS in ten minutes. Run your first candidate search and see SkillScores for the roles you're actually trying to fill.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Technical Demo", href: "/employers/demo" },
    },
  },

  // 10. fintech
  {
    slug: "fintech",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Fintech Hiring Platform | SkillPass for Fintech",
      description:
        "Trust and verify — for your team, too. SkillPass gives fintech companies verified SkillScores that hold up to the same rigor you apply to your product.",
    },
    hero: {
      badge: "Fintech",
      headline: "Trust and Verify.",
      gradientText: "For Your Team, Too.",
      subheadline:
        "You build products that handle other people's money. Your hiring process should be just as rigorous. SkillPass verifies candidate ability through calibrated data — not trust exercises and vibes-based interviews.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Fintech Demo", href: "/employers/demo" },
      trustLine: "SOC 2 compliant. Built for regulated industries.",
    },
    problem: {
      badge: "Fintech Hiring Challenges",
      headline: "Regulated Industry,",
      gradientText: "Unstructured Hiring",
      description:
        "Your product has audit trails and compliance reviews. Your hiring process? Résumé skimming and unstructured interviews. The irony isn't lost on your compliance team.",
      stats: [
        {
          value: "2x",
          label: "Compliance risk from bad hires",
          description:
            "In regulated fintech, one unqualified hire in a key role can trigger audit findings, regulatory scrutiny, and six-figure fines.",
        },
        {
          value: "$185K",
          label: "Average fintech hire cost",
          description:
            "Between specialized recruiters, extended interview loops, and background checks, fintech hiring costs nearly double the industry average.",
        },
        {
          value: "94 days",
          label: "Fintech time-to-fill",
          description:
            "Compliance requirements and specialized skill needs push fintech hiring timelines to over three months per role.",
        },
      ],
    },
    solution: {
      badge: "Audit-Quality Hiring",
      headline: "Hire with the Rigor",
      gradientText: "Your Regulators Expect",
      description:
        "SkillPass provides verified, auditable candidate data that stands up to the same scrutiny as your financial products. Every score is traceable to source data — transcripts, reference responses, proctored assessments.",
      features: [
        {
          title: "Auditable Scoring Trail",
          description:
            "Every SkillScore can be decomposed to its source inputs. When compliance asks how you evaluated a candidate, you have a data trail, not a gut feeling.",
        },
        {
          title: "Compliance-Friendly Assessments",
          description:
            "Proctored assessments with identity verification meet the documentation standards your compliance team requires. No more \"we liked the interview\" justifications.",
        },
        {
          title: "Quantitative + Technical Scoring",
          description:
            "Finance-specific assessment modules cover quantitative reasoning, risk modeling, and regulatory knowledge alongside standard technical assessments.",
        },
        {
          title: "Reference Verification for Regulated Roles",
          description:
            "Structured 360-degree references include questions about regulatory awareness, attention to detail, and ethical judgment — the soft skills that keep you out of trouble.",
        },
      ],
    },
    proof: {
      headline: "Fintech Companies That Hire with Proof",
      testimonial: {
        quote:
          "Our compliance team actually likes SkillPass. For the first time, we can show auditors exactly why we hired someone, backed by verified data. That's worth the subscription ten times over.",
        name: "Nadia Osei",
        role: "Head of People Operations",
        detail: "Series B payments company, 280 employees",
      },
      stats: [
        { value: "60%", label: "Faster compliance review" },
        { value: "$12K", label: "Saved per hire" },
        { value: "0", label: "Audit findings on hiring" },
      ],
    },
    cta: {
      headline: "Hire with the Rigor",
      gradientText: "Your Product Demands",
      description:
        "Start a free trial. See how SkillPass audit trails and verified scores work for your compliance requirements.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/employers/demo" },
    },
  },

  // 11. healthcare-tech
  {
    slug: "healthcare-tech",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Healthcare Tech Hiring | SkillPass for HealthTech",
      description:
        "Credential confidence for critical roles. SkillPass verifies healthcare tech talent with calibrated SkillScores across clinical knowledge, technical ability, and regulatory awareness.",
    },
    hero: {
      badge: "Healthcare Technology",
      headline: "Credential Confidence for",
      gradientText: "Critical Roles.",
      subheadline:
        "In healthtech, a bad hire isn't just expensive — it's dangerous. SkillPass verifies clinical knowledge, technical ability, and regulatory awareness through calibrated scores. Because when your software touches patient data, 'probably qualified' isn't good enough.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See HealthTech Demo", href: "/employers/demo" },
      trustLine: "HIPAA-conscious design. SOC 2 compliant.",
    },
    problem: {
      badge: "HealthTech Reality",
      headline: "Patient Safety Starts with",
      gradientText: "Who You Hire",
      description:
        "Healthcare tech roles require a rare blend of clinical knowledge and engineering skill. Finding people who have both — and verifying they're not exaggerating — is the hardest hiring problem in the industry.",
      stats: [
        {
          value: "112 days",
          label: "HealthTech time-to-fill",
          description:
            "Nearly four months per specialized role. The combination of clinical knowledge and technical skill makes these positions brutally hard to fill.",
        },
        {
          value: "3.7x",
          label: "Credential inflation rate",
          description:
            "HealthTech candidates overstate clinical knowledge at nearly four times the rate of general tech candidates. The stakes are too high to take their word for it.",
        },
        {
          value: "$340K",
          label: "Average cost of a compliance failure",
          description:
            "One underqualified hire touching patient data or clinical workflows can trigger HIPAA violations, FDA scrutiny, and six-figure penalties.",
        },
      ],
    },
    solution: {
      badge: "Verified HealthTech Hiring",
      headline: "Clinical + Technical,",
      gradientText: "Verified Together",
      description:
        "SkillPass scores healthtech candidates across both dimensions: clinical domain knowledge and technical engineering ability. Both verified, both calibrated, both in one score.",
      features: [
        {
          title: "Dual-Track Verification",
          description:
            "Candidates with clinical backgrounds get assessed on domain knowledge. Their engineering skills are assessed separately. You see both scores and how they compare to the candidate pool.",
        },
        {
          title: "Regulatory Awareness Scoring",
          description:
            "360-degree references include structured questions about HIPAA awareness, FDA process knowledge, and compliance mindset. Verified by former supervisors, not self-reported.",
        },
        {
          title: "Institution-Level Calibration",
          description:
            "Medical school rankings, nursing program rigor, and CS program quality are all factored into the academic component. We don't treat all credentials the same because they aren't.",
        },
        {
          title: "Specialized Search Filters",
          description:
            "Filter candidates by clinical domain (cardiology, oncology, EMR systems) alongside technical skills (Python, FHIR APIs, data engineering). Find the exact intersection you need.",
        },
      ],
    },
    proof: {
      headline: "HealthTech Companies That Verify First",
      testimonial: {
        quote:
          "We need engineers who understand clinical workflows, not just code. SkillPass is the only platform that verifies both sides. Our last four hires through the platform have been the strongest in the company's history.",
        name: "Dr. Lisa Tanaka",
        role: "CTO",
        detail: "Digital health startup, 90 employees",
      },
      stats: [
        { value: "112 → 48 days", label: "Time-to-fill" },
        { value: "3x", label: "Quality of hire" },
        { value: "0", label: "Compliance incidents" },
      ],
    },
    cta: {
      headline: "Verified Talent for",
      gradientText: "Critical Healthcare Roles",
      description:
        "Start a free trial. Search for healthtech candidates who have both the clinical knowledge and the technical skills your product demands.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Schedule a Demo", href: "/employers/demo" },
    },
  },

  // 12. edtech
  {
    slug: "edtech",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "EdTech Hiring Platform | SkillPass for EdTech",
      description:
        "Practice what you preach: skills-based hiring. SkillPass helps EdTech companies hire with the same verified, data-driven approach they bring to education.",
    },
    hero: {
      badge: "EdTech",
      headline: "Practice What You Preach:",
      gradientText: "Skills-Based Hiring.",
      subheadline:
        "You're building products that measure learning outcomes. Shouldn't your hiring process measure ability the same way? SkillPass gives edtech companies verified SkillScores so you hire the way you teach — with data.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See EdTech Demo", href: "/employers/demo" },
      trustLine: "Built on data from 4,000+ academic institutions.",
    },
    problem: {
      badge: "The Irony",
      headline: "You Sell Skills Measurement but",
      gradientText: "Hire on Gut Feel",
      description:
        "EdTech companies are building the future of skills verification — and then hiring engineers based on two-page résumés and unstructured interviews. Your customers deserve better. So does your team.",
      stats: [
        {
          value: "78%",
          label: "EdTech companies using unstructured interviews",
          description:
            "Most edtech firms haven't applied their own product philosophy to their hiring process. That's a credibility gap waiting to become a PR problem.",
        },
        {
          value: "42%",
          label: "EdTech turnover rate",
          description:
            "The industry's turnover rate is well above the tech average. A big chunk of that comes from skills mismatch that should've been caught before the offer.",
        },
        {
          value: "73 days",
          label: "Average time-to-fill",
          description:
            "Two and a half months per role, mostly spent on screening rounds that a skills-based approach would eliminate in the first week.",
        },
      ],
    },
    solution: {
      badge: "Walk the Talk",
      headline: "Hire with the",
      gradientText: "Methodology You Sell",
      description:
        "SkillPass is built on the same principles your products champion: calibrated assessments, verified credentials, and objective measurement. Use it internally and tell the world you practice what you preach.",
      features: [
        {
          title: "Skills-First Candidate Search",
          description:
            "Search candidates by verified ability, not resume keywords. Filter by technical skills, pedagogical knowledge, and domain expertise — exactly the dimensions edtech roles need.",
        },
        {
          title: "Assessment Methodology Alignment",
          description:
            "Our proctored assessments use psychometric best practices your product team will recognize: item calibration, adaptive difficulty, and normed scoring. You'll respect the methodology.",
        },
        {
          title: "Academic Network Integration",
          description:
            "With data from 4,000+ institutions, SkillPass connects you to the same academic network your product serves. Hire from your own ecosystem.",
        },
        {
          title: "Credibility Story",
          description:
            "When your marketing team says 'we believe in skills-based hiring,' you can point to your own internal process as proof. That's the kind of authenticity that wins customers.",
        },
      ],
    },
    proof: {
      headline: "EdTech Companies That Walk the Talk",
      testimonial: {
        quote:
          "We literally sell skills assessment to universities. Using SkillPass internally was a no-brainer — our board asked why we weren't doing it sooner. Quality of hire is up, and it's a great story for our customers.",
        name: "Marcus Webb",
        role: "COO",
        detail: "EdTech platform, 150 employees",
      },
      stats: [
        { value: "42% → 18%", label: "Annual turnover" },
        { value: "60%", label: "Faster hiring" },
        { value: "3x", label: "Quality improvement" },
      ],
    },
    cta: {
      headline: "Hire the Way",
      gradientText: "You Teach",
      description:
        "Free trial. Verified candidate search. And a hiring process that matches the philosophy your company was built on.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 13. ecommerce
  {
    slug: "ecommerce",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Ecommerce Hiring Platform | SkillPass for Ecommerce",
      description:
        "Scale your team as fast as your revenue. SkillPass helps ecommerce companies hire engineers, analysts, and ops talent with verified SkillScores.",
    },
    hero: {
      badge: "Ecommerce",
      headline: "Scale Your Team as Fast as",
      gradientText: "Your Revenue.",
      subheadline:
        "When orders double in Q4, your engineering team can't double in Q3 if hiring takes three months per role. SkillPass gives you pre-verified candidates so you build the team before the demand hits.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Demo", href: "/employers/demo" },
      trustLine: "60% faster hiring for growing ecommerce teams.",
    },
    problem: {
      badge: "Ecommerce Hiring Crunch",
      headline: "Revenue Won't Wait for",
      gradientText: "Your Hiring Timeline",
      description:
        "Ecommerce growth is spiky. You need engineers before peak season, analysts before the holiday push, and ops talent before the warehouse expansion. Traditional hiring timelines don't bend to your revenue calendar.",
      stats: [
        {
          value: "82 days",
          label: "Average ecommerce tech hire",
          description:
            "Nearly three months per technical role. If peak season starts in October, you needed to start hiring in July — and you didn't.",
        },
        {
          value: "$2.4M",
          label: "Revenue lost per unfilled role/quarter",
          description:
            "Empty engineering seats during peak season aren't just a hiring problem. They're a revenue problem. Features don't ship, bugs don't get fixed, and conversion drops.",
        },
        {
          value: "3.1x",
          label: "Competition for ecommerce talent",
          description:
            "Every DTC brand, marketplace, and retail tech company is chasing the same candidates. You're not just competing on salary — you're competing on speed.",
        },
      ],
    },
    solution: {
      badge: "Built for Speed",
      headline: "Pre-Verified Candidates",
      gradientText: "Ready When You Are",
      description:
        "SkillPass candidates already have verified scores when you search for them. No waiting for assessments to come back. No chasing references. Search, filter, compare, and reach out — today.",
      features: [
        {
          title: "Instant Shortlists",
          description:
            "Set your criteria — minimum SkillScore, technical stack, experience level — and get a ranked candidate list in seconds. Literally seconds.",
        },
        {
          title: "Ecommerce-Relevant Filters",
          description:
            "Search by skills that matter for ecommerce: high-traffic systems, payment processing, data analytics, supply chain optimization, and full-stack development.",
        },
        {
          title: "Seasonal Hiring Support",
          description:
            "Save search templates for recurring hiring needs. When Q4 planning starts, your candidate pipeline is already built. Just refresh and go.",
        },
        {
          title: "Speed-Optimized Workflow",
          description:
            "Compare candidates side-by-side, share shortlists with hiring managers, and move to offer — all inside the platform. Every step that used to take days takes minutes.",
        },
      ],
    },
    proof: {
      headline: "Ecommerce Teams That Hire at Speed",
      testimonial: {
        quote:
          "We hired eleven engineers in six weeks before Black Friday. Without SkillPass, that would've been a four-month process and we would've missed the window. Revenue impact was in the millions.",
        name: "Jordan Blake",
        role: "VP of Engineering",
        detail: "DTC ecommerce brand, 200 employees",
      },
      stats: [
        { value: "6 weeks", label: "For 11 hires" },
        { value: "60%", label: "Faster than previous" },
        { value: "$12K", label: "Saved per hire" },
      ],
    },
    cta: {
      headline: "Build the Team Before",
      gradientText: "the Demand Hits",
      description:
        "Free trial. Full candidate search access. Start building your next-season pipeline today.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/employers/demo" },
    },
  },

  // 14. saas
  {
    slug: "saas",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SaaS Hiring Platform | SkillPass for SaaS Companies",
      description:
        "Build the team that builds the product. SkillPass helps SaaS companies verify engineering, product, and data talent with calibrated SkillScores.",
    },
    hero: {
      badge: "SaaS",
      headline: "Build the Team That",
      gradientText: "Builds the Product.",
      subheadline:
        "In SaaS, your product is your team's output. Every mis-hire slows the roadmap, frustrates customers, and burns cash. SkillPass gives you verified signal on every candidate — so your product velocity depends on data, not luck.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See SaaS Demo", href: "/employers/demo" },
      trustLine: "Used by 50+ SaaS companies and growing.",
    },
    problem: {
      badge: "SaaS Hiring Economics",
      headline: "Every Bad Hire Costs You",
      gradientText: "a Quarter of Roadmap",
      description:
        "SaaS margins depend on shipping fast. When you hire the wrong engineer, you don't just lose their salary — you lose three months of features, the morale of the team that has to cover for them, and the customers who churn waiting for fixes.",
      stats: [
        {
          value: "3 months",
          label: "Roadmap delay per mis-hire",
          description:
            "On average, a bad engineering hire sets the product roadmap back by a full quarter once you account for onboarding, managing out, and re-hiring.",
        },
        {
          value: "$287K",
          label: "True cost per mis-hire",
          description:
            "Salary, benefits, lost productivity, re-recruiting, and the churn from delayed features. For a SaaS company, bad hires are the most expensive line item nobody tracks.",
        },
        {
          value: "23%",
          label: "Feature churn from talent gaps",
          description:
            "Nearly a quarter of planned features get delayed or cut due to team capacity issues caused by bad hires or unfilled roles.",
        },
      ],
    },
    solution: {
      badge: "Product Velocity Starts with Hiring",
      headline: "Ship Faster by",
      gradientText: "Hiring Better",
      description:
        "SkillPass verifies the skills that drive SaaS success: technical depth, collaboration, code quality, and system thinking. You see it all before the first interview, calibrated against thousands of candidates in the same role category.",
      features: [
        {
          title: "Full-Stack Skill Verification",
          description:
            "Proctored assessments cover frontend, backend, data, and DevOps. You see where candidates are strong and where they're not — no more discovering gaps in week three.",
        },
        {
          title: "Collaboration Scoring",
          description:
            "360-degree references measure how candidates work with others: code review quality, communication, mentoring ability. In SaaS, collaboration velocity matters as much as individual output.",
        },
        {
          title: "Role-Specific Configs",
          description:
            "Different weights for different roles. Your senior backend engineer config emphasizes system design and reliability. Your growth PM config emphasizes data fluency and experimentation mindset.",
        },
        {
          title: "Pipeline Quality Metrics",
          description:
            "Track the average SkillScore of candidates entering your pipeline, moving to interviews, and getting offers. Spot quality drops before they become hiring mistakes.",
        },
      ],
    },
    proof: {
      headline: "SaaS Companies That Ship Faster",
      testimonial: {
        quote:
          "Our time-to-hire dropped from 78 days to 31 days. But the real metric? We shipped 40% more features in the two quarters after switching to SkillPass. Better hires means faster product.",
        name: "Elena Voss",
        role: "Head of Engineering",
        detail: "B2B SaaS, $15M ARR, 95 employees",
      },
      stats: [
        { value: "40%", label: "More features shipped" },
        { value: "78 → 31 days", label: "Time-to-hire" },
        { value: "$12K", label: "Saved per hire" },
      ],
    },
    cta: {
      headline: "Better Team,",
      gradientText: "Better Product",
      description:
        "Free 14-day trial. Full access to candidate search, SkillScore filtering, and comparison tools. Start shipping faster by hiring better.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 15. consulting-firms
  {
    slug: "consulting-firms",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Consulting Firm Hiring | SkillPass for Consulting",
      description:
        "Replace the case marathon with verified signals. SkillPass helps consulting firms evaluate analysts and consultants with calibrated SkillScores instead of grueling interview loops.",
    },
    hero: {
      badge: "Consulting",
      headline: "Replace the Case Marathon with",
      gradientText: "Verified Signals.",
      subheadline:
        "Your current process: six rounds of case interviews, two months, and a partner's Saturday morning. SkillPass gives you verified analytical ability, structured references, and calibrated academics before the first interview — so the case round actually adds value instead of just filtering noise.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Consulting Demo", href: "/employers/demo" },
      trustLine: "Academic data from 4,000+ institutions worldwide.",
    },
    problem: {
      badge: "The Case Interview Problem",
      headline: "Six Interview Rounds to Learn What",
      gradientText: "Data Could Tell You in Six Seconds",
      description:
        "Consulting hiring is a tournament. Hundreds of candidates, weeks of case rounds, partners pulled off client work to interview. And after all that, you're still making judgment calls based on how well someone crammed Profitability frameworks.",
      stats: [
        {
          value: "127 hrs",
          label: "Partner hours per hiring cycle",
          description:
            "That's three weeks of a partner's time — time they're not billing, not serving clients, and not generating revenue.",
        },
        {
          value: "6 rounds",
          label: "Average interview stages",
          description:
            "Phone screen, behavioral, case round 1, case round 2, partner interview, offer committee. Each stage costs time. Most of it is redundant.",
        },
        {
          value: "28%",
          label: "First-year associate turnover",
          description:
            "After all that screening, more than one in four new analysts leave within twelve months. The process selects for case prep skill, not consulting ability.",
        },
      ],
    },
    solution: {
      badge: "Smarter Consulting Hiring",
      headline: "Data-Driven Signal,",
      gradientText: "Fewer Rounds",
      description:
        "SkillPass verifies the skills that actually predict consulting success: analytical reasoning, structured communication, client-readiness, and coachability. Get this signal before the first case interview, not after six of them.",
      features: [
        {
          title: "Analytical Reasoning Verification",
          description:
            "Proctored assessments measure quantitative reasoning, data interpretation, and structured problem-solving. The skills cases test for, without the case prep arms race.",
        },
        {
          title: "Communication & Presence Scoring",
          description:
            "360-degree references from professors and prior managers rate candidates on structured communication, executive presence, and client-readiness. The soft skills that make or break consultants.",
        },
        {
          title: "School-Calibrated Academics",
          description:
            "A 3.8 from a target school and a 3.8 from a non-target school mean different things. SkillPass calibrates across 4,000+ institutions so you can expand your school list without lowering your bar.",
        },
        {
          title: "Pipeline Compression",
          description:
            "Replace two to three early-stage interview rounds with verified SkillPass data. Save the case interview for finalists who've already proven they can think.",
        },
      ],
    },
    proof: {
      headline: "Consulting Firms That Modernized Hiring",
      testimonial: {
        quote:
          "We cut our interview process from six rounds to three and our first-year retention actually improved. SkillPass handles what we used to need two case rounds to figure out.",
        name: "Rebecca Strauss",
        role: "Director of Recruiting",
        detail: "Strategy consulting firm, 500+ consultants",
      },
      stats: [
        { value: "50%", label: "Fewer interview rounds" },
        { value: "127 → 54 hrs", label: "Partner time saved" },
        { value: "28% → 14%", label: "First-year turnover" },
      ],
    },
    cta: {
      headline: "Hire Consultants Who",
      gradientText: "Actually Consult Well",
      description:
        "Free trial. See how SkillPass data compares to your current case interview signal — we think you'll find it's more predictive and a lot cheaper.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Request a Walkthrough", href: "/employers/demo" },
    },
  },

  // 16. investment-banking
  {
    slug: "investment-banking",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Investment Banking Hiring | SkillPass for IB",
      description:
        "Analyst hiring without the circus. SkillPass gives investment banks verified SkillScores to evaluate analyst candidates on quantitative ability, attention to detail, and work ethic.",
    },
    hero: {
      badge: "Investment Banking",
      headline: "Analyst Hiring",
      gradientText: "Without the Circus.",
      subheadline:
        "The IB analyst hiring cycle is a known disaster: Superdays, dinners, campus sprints, and a final decision that still mostly comes down to school name and who networked hardest. SkillPass adds verified quantitative ability and reference data to the mix — so you pick the best analyst, not the best networker.",
      primaryCta: { text: "Request a Demo", href: "/employers/demo" },
      secondaryCta: { text: "See Pricing", href: "/employers/pricing" },
      trustLine: "Academic calibration across all target and non-target schools.",
    },
    problem: {
      badge: "IB Hiring Reality",
      headline: "You're Selecting for Networking Skill,",
      gradientText: "Not Modeling Skill",
      description:
        "IB hiring is the most expensive, time-consuming, and poorly predictive process in professional services. And everyone knows it — they just haven't had a better option.",
      stats: [
        {
          value: "$47K",
          label: "Cost per analyst hire",
          description:
            "Campus events, Superday logistics, partner time, and the occasional $10K signing bonus. Before the analyst has modeled a single deal.",
        },
        {
          value: "55%",
          label: "Two-year analyst attrition",
          description:
            "More than half of analysts leave before their two-year mark. The process selects for people who want the prestige, not people who want the work.",
        },
        {
          value: "12 schools",
          label: "Typical target school list",
          description:
            "Most banks recruit from the same dozen schools. That's 12 out of 4,000+. You're ignoring 99.7% of the talent pool by default.",
        },
      ],
    },
    solution: {
      badge: "Data-Driven IB Recruiting",
      headline: "Hire Analysts Who",
      gradientText: "Can Actually Model",
      description:
        "SkillPass gives you verified quantitative scores, calibrated academic records, and structured references for analyst candidates — from target schools and the thousands of non-target schools you've been ignoring.",
      features: [
        {
          title: "Quantitative Assessment Suite",
          description:
            "Proctored assessments covering financial modeling, accounting, valuation, and quantitative reasoning. Scores are normed against the full analyst candidate pool.",
        },
        {
          title: "Expanded School Coverage",
          description:
            "SkillPass calibrates across 4,000+ institutions. Find the top 1% of analysts at schools you've never recruited from. Widen the funnel without lowering the bar.",
        },
        {
          title: "Attention-to-Detail Scoring",
          description:
            "360-degree references include structured ratings on precision, error rates, and detail orientation. The skills that keep analysts out of the MD's office at 2 AM.",
        },
        {
          title: "Superday Optimization",
          description:
            "Use SkillPass scores to pre-filter Superday invites. Spend partner time on candidates who've already proven quantitative ability, not candidates who just prepped well for networking events.",
        },
      ],
    },
    proof: {
      headline: "Banks That Modernized Analyst Hiring",
      testimonial: {
        quote:
          "We expanded our target school list from 15 to 200+ using SkillPass calibration. Our last analyst class had the highest first-year modeling accuracy in a decade — and we found three of them at schools we'd never visited.",
        name: "David Park",
        role: "Head of Campus Recruiting",
        detail: "Mid-market investment bank",
      },
      stats: [
        { value: "15 → 200+", label: "Target schools" },
        { value: "55% → 31%", label: "Two-year attrition" },
        { value: "$47K → $19K", label: "Cost per hire" },
      ],
    },
    cta: {
      headline: "Find Analysts Who",
      gradientText: "Model, Not Just Network",
      description:
        "Request a demo and we'll show you SkillPass data against your last analyst class. You'll see exactly where verified scores would've changed your decisions.",
      primaryCta: { text: "Request a Demo", href: "/employers/demo" },
      secondaryCta: { text: "Download IB Case Study", href: "/resources/ib-case-study" },
    },
  },

  // 17. vc-pe
  {
    slug: "vc-pe",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "VC & PE Portfolio Hiring | SkillPass for Investors",
      description:
        "Give portfolio companies a hiring advantage. SkillPass helps VC and PE firms offer verified talent data as a platform benefit, improving portfolio hiring quality and speed.",
    },
    hero: {
      badge: "VC & PE",
      headline: "Give Portfolio Companies a",
      gradientText: "Hiring Advantage.",
      subheadline:
        "Your portfolio companies' #1 problem after funding? Hiring. Give them access to SkillPass as a platform benefit. Verified candidate data, pre-built scoring configs, and ATS integration — so your companies build teams as well as they build products.",
      primaryCta: { text: "Request Platform Demo", href: "/employers/demo" },
      secondaryCta: { text: "See Portfolio Plans", href: "/employers/pricing" },
      trustLine: "Portfolio-wide plans available. Volume discounts.",
    },
    problem: {
      badge: "The Portfolio Bottleneck",
      headline: "You Fund Great Founders.",
      gradientText: "Then They Struggle to Hire.",
      description:
        "After the wire hits, every portfolio company faces the same crisis: build a team fast without wrecking quality. Most founders aren't recruiters. Their hiring processes are ad-hoc, slow, and expensive.",
      stats: [
        {
          value: "#1",
          label: "Post-funding challenge",
          description:
            "In survey after survey, portfolio founders cite hiring as their single biggest operational challenge. It's not product. It's not sales. It's people.",
        },
        {
          value: "34%",
          label: "Portfolio company mis-hire rate",
          description:
            "A third of early hires across the average portfolio are regretted within a year. That's your capital, going to people who won't stick around.",
        },
        {
          value: "$840K",
          label: "Per-company annual hiring waste",
          description:
            "Bad hires, slow pipelines, and recruiter fees. Across a 20-company portfolio, that's nearly $17 million in avoidable costs.",
        },
      ],
    },
    solution: {
      badge: "Platform-Level Hiring",
      headline: "SkillPass as a",
      gradientText: "Portfolio Benefit",
      description:
        "Offer SkillPass across your portfolio. Each company gets verified candidate search, custom scoring, and ATS integration. You get aggregate hiring data across the portfolio to spot problems early and share best practices.",
      features: [
        {
          title: "Portfolio-Wide Licensing",
          description:
            "One agreement covers every company in your portfolio. Volume pricing means each company gets enterprise-quality tools at a fraction of the standalone cost.",
        },
        {
          title: "Shared Talent Pool",
          description:
            "When one portfolio company passes on a great candidate, they can be flagged for others. Internal talent circulation without the recruiter middleman.",
        },
        {
          title: "Aggregate Hiring Analytics",
          description:
            "See hiring velocity, quality metrics, and pipeline health across your entire portfolio from one dashboard. Spot the companies that need operational help before they ask.",
        },
        {
          title: "Onboarding Playbooks",
          description:
            "Pre-built scoring configs and hiring workflows for common portfolio company stages: pre-seed, seed, Series A. New portfolio companies are productive on day one.",
        },
      ],
    },
    proof: {
      headline: "Funds That Made Hiring a Platform Advantage",
      testimonial: {
        quote:
          "We rolled SkillPass out to our entire portfolio — 23 companies. Within two quarters, average time-to-hire across the portfolio dropped by 41% and our founders stopped listing hiring as their top blocker in board meetings.",
        name: "Catherine Liu",
        role: "Operating Partner",
        detail: "Growth-stage VC fund, $1.2B AUM",
      },
      stats: [
        { value: "41%", label: "Portfolio time-to-hire improvement" },
        { value: "23", label: "Portfolio companies onboarded" },
        { value: "$3.2M", label: "Estimated portfolio savings" },
      ],
    },
    cta: {
      headline: "Make Hiring a",
      gradientText: "Platform Advantage",
      description:
        "Request a demo and we'll show you how the portfolio licensing model works. Volume pricing, aggregate analytics, and onboarding playbooks included.",
      primaryCta: { text: "Request Platform Demo", href: "/employers/demo" },
      secondaryCta: { text: "Talk to Partnerships", href: "/employers/partnerships" },
    },
  },

  // 18. ai-ml-companies
  {
    slug: "ai-ml-companies",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "AI/ML Hiring Platform | SkillPass for AI Companies",
      description:
        "Find engineers who ship, not just publish. SkillPass verifies AI/ML talent with calibrated SkillScores covering research depth, engineering ability, and production experience.",
    },
    hero: {
      badge: "AI & Machine Learning",
      headline: "Find Engineers Who Ship,",
      gradientText: "Not Just Publish.",
      subheadline:
        "ArXiv papers are great. But you need people who can take a model from notebook to production. SkillPass verifies both research depth and engineering ability — because your next ML hire needs to do both.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See AI/ML Demo", href: "/employers/demo" },
      trustLine: "Proctored assessments for ML engineering, not just theory.",
    },
    problem: {
      badge: "AI Hiring Is Uniquely Broken",
      headline: "PhD Papers Don't Predict",
      gradientText: "Production Code Quality",
      description:
        "The AI talent market is absurd. Candidates with great publications can't write production code. Candidates with great code can't explain their model choices. And everyone inflates their 'AI experience' because they fine-tuned GPT-3 once.",
      stats: [
        {
          value: "71%",
          label: "AI role credential inflation",
          description:
            "Seven in ten AI/ML candidates overstate their experience. 'Built an ML pipeline' often means 'called a scikit-learn function in a Jupyter notebook.'",
        },
        {
          value: "142 days",
          label: "Average ML engineer time-to-fill",
          description:
            "Nearly five months per role. The combination of rare skills and widespread exaggeration makes ML hiring the slowest in all of tech.",
        },
        {
          value: "$420K",
          label: "Fully loaded cost of ML mis-hire",
          description:
            "ML salaries are enormous. A bad ML hire at $250K base costs nearly half a million once you factor in equity, onboarding, lost project time, and re-hiring.",
        },
      ],
    },
    solution: {
      badge: "Verified AI/ML Talent",
      headline: "Research Depth Meets",
      gradientText: "Engineering Reality",
      description:
        "SkillPass assesses ML candidates on both dimensions: theoretical understanding and production engineering. You see scores for model design, system architecture, code quality, and deployment experience — verified, not self-reported.",
      features: [
        {
          title: "ML Engineering Assessments",
          description:
            "Proctored challenges covering model architecture, feature engineering, training pipeline design, and production deployment. Not toy problems — real-world ML engineering tasks.",
        },
        {
          title: "Research vs. Production Scoring",
          description:
            "See separate scores for research depth and engineering ability. Hire the researcher-engineer hybrid if that's what you need, or the pure engineer if it isn't.",
        },
        {
          title: "Publication & Project Verification",
          description:
            "360-degree references from lab supervisors and engineering managers verify actual contribution to published work and production systems. No more credit-claiming.",
        },
        {
          title: "GPU-Aware Skills Matching",
          description:
            "Filter candidates by specific framework experience (PyTorch, JAX, TensorFlow), infrastructure knowledge (CUDA, distributed training), and deployment platforms.",
        },
      ],
    },
    proof: {
      headline: "AI Companies That Found Real Talent",
      testimonial: {
        quote:
          "We hired an ML engineer from SkillPass who had no publications but a 780 SkillScore. She shipped our recommendation engine rewrite in eight weeks. The PhD candidate we almost hired instead couldn't have done it in eight months.",
        name: "Ravi Krishnamurthy",
        role: "CTO",
        detail: "AI-native startup, 45 employees",
      },
      stats: [
        { value: "142 → 53 days", label: "Time-to-fill" },
        { value: "71% → 8%", label: "Credential inflation in pipeline" },
        { value: "3x", label: "Production output improvement" },
      ],
    },
    cta: {
      headline: "Hire ML Engineers Who",
      gradientText: "Ship to Production",
      description:
        "Start with a free trial. Search for AI/ML candidates by verified engineering ability, not just publication count. You'll find people you'd never discover on LinkedIn.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 19. cybersecurity-companies
  {
    slug: "cybersecurity-companies",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Cybersecurity Hiring | SkillPass for Security Companies",
      description:
        "Verified security skills, not just certs. SkillPass helps cybersecurity companies find and verify security engineers with calibrated SkillScores beyond CISSP and CEH.",
    },
    hero: {
      badge: "Cybersecurity",
      headline: "Verified Security Skills,",
      gradientText: "Not Just Certs.",
      subheadline:
        "A CISSP proves someone passed an exam. It doesn't prove they can find a zero-day, architect a secure system, or respond to an incident at 3 AM. SkillPass verifies actual security ability through proctored assessments and structured references from security leaders.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Security Demo", href: "/employers/demo" },
      trustLine: "Proctored security assessments. SOC 2 compliant.",
    },
    problem: {
      badge: "The Cert Problem",
      headline: "Certifications Tell You Someone Studied.",
      gradientText: "Not That They Can Defend.",
      description:
        "The cybersecurity skills gap is real — but it's not just a supply problem. It's a verification problem. There are plenty of people with security certs. There aren't enough people who can actually do security work.",
      stats: [
        {
          value: "3.5M",
          label: "Global cybersecurity talent gap",
          description:
            "Millions of unfilled roles worldwide. But the real gap isn't headcount — it's the gap between cert-holding candidates and candidates who can actually do the work.",
        },
        {
          value: "43%",
          label: "Of cert holders underperform",
          description:
            "Nearly half of certified candidates fail to perform at the expected level once hired. Certs measure knowledge retention, not operational ability.",
        },
        {
          value: "$550K",
          label: "Cost of a security mis-hire",
          description:
            "In cybersecurity, a bad hire doesn't just cost salary and recruiting. It costs breach risk, compliance exposure, and the trust of every customer.",
        },
      ],
    },
    solution: {
      badge: "Beyond Certifications",
      headline: "Operational Ability,",
      gradientText: "Verified and Scored",
      description:
        "SkillPass goes beyond certifications to verify what actually matters: threat analysis, incident response, secure architecture, and the judgment calls that keep systems safe.",
      features: [
        {
          title: "Hands-On Security Assessments",
          description:
            "Proctored challenges covering penetration testing, incident response, secure code review, and architecture design. Practical scenarios, not multiple-choice cert questions.",
        },
        {
          title: "Clearance-Friendly Process",
          description:
            "Our verification process is designed to work alongside security clearance requirements. SkillScores complement your existing background investigation, not compete with it.",
        },
        {
          title: "Peer Security References",
          description:
            "360-degree references from SOC managers, security architects, and engineering leads. Structured questions about threat intuition, response speed, and security judgment.",
        },
        {
          title: "Specialization Filters",
          description:
            "Search by security discipline: application security, network security, cloud security, GRC, incident response, or threat intelligence. Find the exact specialist you need.",
        },
      ],
    },
    proof: {
      headline: "Security Teams That Verify Before They Trust",
      testimonial: {
        quote:
          "We stopped requiring CISSP and started requiring a 650+ SkillScore. Our candidate pool tripled and our team quality went up. Turns out the best security engineers don't always have the most certs.",
        name: "Miguel Santos",
        role: "CISO",
        detail: "Cloud security company, 120 employees",
      },
      stats: [
        { value: "3x", label: "Candidate pool growth" },
        { value: "43% → 7%", label: "Underperformance rate" },
        { value: "60%", label: "Faster hiring" },
      ],
    },
    cta: {
      headline: "Hire Security Talent That",
      gradientText: "Can Actually Defend",
      description:
        "Free trial. Search for security professionals by verified operational ability, not cert count. Your next SOC analyst is in the database.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 20. big-4-accounting
  {
    slug: "big-4-accounting",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Big 4 Accounting Hiring | SkillPass for Accounting Firms",
      description:
        "Audit-quality rigor applied to your hiring. SkillPass helps Big 4 and large accounting firms evaluate candidates with the same precision they apply to client work.",
    },
    hero: {
      badge: "Big 4 & Accounting",
      headline: "Audit-Quality Rigor Applied to",
      gradientText: "Your Hiring.",
      subheadline:
        "You hold clients to exacting standards. But your own hiring process relies on campus visits, unstructured interviews, and GPA cutoffs that haven't changed since 1997. SkillPass brings the same data rigor you apply to audits to the way you build your team.",
      primaryCta: { text: "Request a Demo", href: "/employers/demo" },
      secondaryCta: { text: "See Pricing", href: "/employers/pricing" },
      trustLine: "Calibrated across 4,000+ institutions. SOC 2 compliant.",
    },
    problem: {
      badge: "Accounting Firm Hiring",
      headline: "Your Hiring Process Would Fail",
      gradientText: "Your Own Audit Standards",
      description:
        "If a client's hiring process looked like yours — subjective interviews, arbitrary school lists, GPA thresholds with no calibration — you'd flag it as a control weakness. Time to apply the same scrutiny internally.",
      stats: [
        {
          value: "3.5 GPA",
          label: "Common arbitrary cutoff",
          description:
            "Most large firms use a 3.5 GPA floor with no calibration. That rejects a 3.4 from Wharton and accepts a 3.6 from an unranked program. That's not rigor — it's laziness.",
        },
        {
          value: "37%",
          label: "First-year associate turnover",
          description:
            "More than a third of new associates leave within their first year. The pipeline is leaking, and the process that fills it isn't catching the right people.",
        },
        {
          value: "$62K",
          label: "Cost per associate hire",
          description:
            "Campus recruiting, office visits, partner interview time, and onboarding. And you're doing this thousands of times a year.",
        },
      ],
    },
    solution: {
      badge: "Audited Hiring",
      headline: "Apply Data Rigor to",
      gradientText: "Your Own Process",
      description:
        "SkillPass gives your recruiting team calibrated candidate data that would pass your own quality standards: verified academic records weighted by rigor, structured references, and proctored assessments.",
      features: [
        {
          title: "Calibrated GPA — Not Arbitrary Cutoffs",
          description:
            "SkillPass weights GPA by institution rigor, program difficulty, and course load. A 3.4 from a demanding program scores higher than a 3.8 from an easy one. That's real calibration.",
        },
        {
          title: "Expanded Campus Reach",
          description:
            "Stop limiting your campus list to 30 schools. SkillPass calibrates across 4,000+ institutions, letting you find top accounting talent at schools you've never visited.",
        },
        {
          title: "Attention-to-Detail Assessment",
          description:
            "Proctored assessments include precision and accuracy modules designed for accounting roles. Identify the candidates who'll catch the rounding error, not cause it.",
        },
        {
          title: "Volume Recruiting Tools",
          description:
            "Batch search, bulk comparison, and ranking tools built for high-volume hiring. Process thousands of campus candidates without drowning your recruiting team.",
        },
      ],
    },
    proof: {
      headline: "Accounting Firms That Raised the Bar",
      testimonial: {
        quote:
          "We expanded our campus reach from 28 schools to 400+ and reduced first-year turnover by eleven points. Our recruiting partners said it was the biggest quality improvement in a decade.",
        name: "Amanda Kowalski",
        role: "National Director of Recruiting",
        detail: "Top 10 accounting firm",
      },
      stats: [
        { value: "28 → 400+", label: "Campus reach" },
        { value: "37% → 26%", label: "First-year turnover" },
        { value: "70%", label: "Less screening time" },
      ],
    },
    cta: {
      headline: "Apply Your Standards",
      gradientText: "to Your Own Hiring",
      description:
        "Request a demo and we'll run your last hiring class through SkillPass calibration. You'll see exactly where uncalibrated GPA cutoffs cost you great talent.",
      primaryCta: { text: "Request a Demo", href: "/employers/demo" },
      secondaryCta: { text: "Download Accounting Brief", href: "/resources/accounting-brief" },
    },
  },

  // 21. biotech-pharma
  {
    slug: "biotech-pharma",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Biotech & Pharma Hiring | SkillPass for Life Sciences",
      description:
        "Technical depth for roles where it matters most. SkillPass verifies life sciences talent with calibrated SkillScores across research ability, technical rigor, and regulatory awareness.",
    },
    hero: {
      badge: "Biotech & Pharma",
      headline: "Technical Depth for Roles Where",
      gradientText: "It Matters Most.",
      subheadline:
        "In biotech, a bad hire doesn't just cost money — it costs months of research progress and potentially years of regulatory timeline. SkillPass verifies scientific rigor, technical execution, and regulatory awareness before you extend the offer.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Life Sciences Demo", href: "/employers/demo" },
      trustLine: "Academic calibration across research universities worldwide.",
    },
    problem: {
      badge: "Life Sciences Hiring",
      headline: "One Bad Scientist Can Set",
      gradientText: "Your Pipeline Back by Years",
      description:
        "Biotech roles demand deep technical expertise, reproducibility mindset, and regulatory awareness. Resumes and interviews are terrible at verifying all three. And the stakes — patient safety, regulatory approval, investor confidence — couldn't be higher.",
      stats: [
        {
          value: "18 months",
          label: "Average impact of one bad hire",
          description:
            "A mis-hired scientist can set a program back by a year and a half. Unreproducible results, missed milestones, and FDA delays that compound across the pipeline.",
        },
        {
          value: "156 days",
          label: "Time-to-fill for PhD roles",
          description:
            "Over five months per specialized position. The intersection of deep technical knowledge and practical lab skills makes these roles among the hardest to fill in any industry.",
        },
        {
          value: "62%",
          label: "Of biotech resumes exaggerate contributions",
          description:
            "In academic research, everyone on the paper gets credit. But not everyone ran the experiments. Resumes tell you who was listed, not who did the work.",
        },
      ],
    },
    solution: {
      badge: "Verified Life Sciences Talent",
      headline: "Scientific Rigor,",
      gradientText: "Objectively Measured",
      description:
        "SkillPass verifies what actually matters in biotech: experimental design ability, data analysis rigor, regulatory awareness, and real research contribution — not just publication lists.",
      features: [
        {
          title: "Research Contribution Verification",
          description:
            "360-degree references from PIs and lab directors verify actual contributions to published work. Who designed the experiment? Who ran it? Who just presented the poster?",
        },
        {
          title: "Technical Rigor Assessment",
          description:
            "Proctored assessments covering experimental design, statistical analysis, data interpretation, and troubleshooting. Skills that make the difference between a reproducible result and a retracted paper.",
        },
        {
          title: "Regulatory Awareness Scoring",
          description:
            "References rate candidates on FDA process knowledge, GLP compliance, and documentation quality. The soft infrastructure that determines whether your drug gets approved.",
        },
        {
          title: "Cross-Discipline Calibration",
          description:
            "Candidates from chemistry, biology, computational biology, and bioengineering programs are calibrated against their specific discipline. A 3.5 in organic chemistry means something different from a 3.5 in bioinformatics.",
        },
      ],
    },
    proof: {
      headline: "Life Sciences Companies That Verify First",
      testimonial: {
        quote:
          "We hired a process development scientist through SkillPass who had a 790 SkillScore from a school we'd never recruited from. She redesigned our purification workflow and saved us four months of timeline. Without SkillPass, we never would have found her.",
        name: "Dr. Jonathan Reeves",
        role: "VP of Research",
        detail: "Clinical-stage biotech, 75 employees",
      },
      stats: [
        { value: "156 → 67 days", label: "Time-to-fill" },
        { value: "4 months", label: "Timeline saved" },
        { value: "3x", label: "Quality of hire" },
      ],
    },
    cta: {
      headline: "Hire Scientists Who",
      gradientText: "Move the Pipeline Forward",
      description:
        "Start a free trial. Search for life sciences candidates by verified research ability, not just degree and publication count.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Schedule a Demo", href: "/employers/demo" },
    },
  },

  // 22. media-tech
  {
    slug: "media-tech",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Media & Entertainment Tech Hiring | SkillPass",
      description:
        "Creative and technical? SkillScore captures both. SkillPass helps media tech companies verify the rare blend of creative vision and engineering execution.",
    },
    hero: {
      badge: "Media & Entertainment Tech",
      headline: "Creative + Technical?",
      gradientText: "SkillScore Captures Both.",
      subheadline:
        "Media tech roles demand a rare combination: engineers who understand storytelling, designers who can code, and product minds that bridge both worlds. SkillPass scores candidates across creative and technical dimensions, so you find the people who actually live at the intersection.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Demo", href: "/employers/demo" },
      trustLine: "Multi-dimensional scoring for multi-dimensional roles.",
    },
    problem: {
      badge: "The Intersection Problem",
      headline: "You Need People Who Are Both.",
      gradientText: "Resumes Only Show One Side.",
      description:
        "Media tech hiring is uniquely frustrating. You find great engineers who don't understand content. Or great creatives who can't ship software. The intersection is small, and traditional hiring tools can't identify it.",
      stats: [
        {
          value: "8%",
          label: "Of candidates are truly cross-disciplinary",
          description:
            "Less than one in ten candidates genuinely combines creative thinking with technical execution. The rest are one-dimensional — your interview has to catch this, and usually doesn't.",
        },
        {
          value: "91 days",
          label: "Time-to-fill for cross-functional roles",
          description:
            "Three months per role because you're searching for a needle in a haystack. And when you find one, three other companies are competing for them.",
        },
        {
          value: "2.1x",
          label: "Higher turnover for mismatched hires",
          description:
            "When you hire a pure engineer for a creative-technical role, they leave twice as fast. The mismatch becomes obvious within weeks, but the damage takes months to undo.",
        },
      ],
    },
    solution: {
      badge: "Multi-Dimensional Scoring",
      headline: "See Both Sides",
      gradientText: "Before You Interview",
      description:
        "SkillPass's eight-dimension reference system captures creative thinking, technical execution, collaboration style, and communication ability in a single profile. You don't have to guess which side of the intersection someone falls on.",
      features: [
        {
          title: "Creative + Technical Scoring",
          description:
            "References rate candidates on creative problem-solving, aesthetic sensibility, and storytelling alongside technical depth, code quality, and system design. Both dimensions, one score.",
        },
        {
          title: "Portfolio Verification",
          description:
            "References from managers and creative directors verify actual contribution to shipped products. 'Worked on' a streaming feature means different things for different people.",
        },
        {
          title: "Cross-Functional Search",
          description:
            "Filter candidates who score above your threshold on both creative and technical dimensions. Find the intersection directly instead of hoping it shows up in interviews.",
        },
        {
          title: "Content Industry Calibration",
          description:
            "Academic scoring calibrates across media programs, film schools, design programs, and CS departments. We understand that a strong portfolio from SVA and a strong GPA from CMU both matter.",
        },
      ],
    },
    proof: {
      headline: "Media Tech Teams That Found the Intersection",
      testimonial: {
        quote:
          "We'd been searching for a technical product lead with content sensibility for four months. SkillPass surfaced three candidates in a week — all scored 700+ on both creative and technical dimensions. We hired one, and she's been the best PM hire we've ever made.",
        name: "Alex Rivera",
        role: "VP of Product",
        detail: "Streaming technology company, 250 employees",
      },
      stats: [
        { value: "4 mo → 1 wk", label: "Time to find candidates" },
        { value: "3x", label: "Quality of cross-functional hires" },
        { value: "$12K", label: "Saved per hire" },
      ],
    },
    cta: {
      headline: "Find People Who",
      gradientText: "Live at the Intersection",
      description:
        "Free trial. Search for media tech candidates by verified creative and technical ability. Stop hoping the interview reveals what data already shows.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 23. gov-tech
  {
    slug: "gov-tech",
    category: "by-industry",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "GovTech Hiring Platform | SkillPass for Government Technology",
      description:
        "Modern hiring for modernizing government. SkillPass helps gov-tech companies and agencies find verified technical talent with calibrated SkillScores and compliance-ready processes.",
    },
    hero: {
      badge: "Government Technology",
      headline: "Modern Hiring for",
      gradientText: "Modernizing Government.",
      subheadline:
        "You're building the digital infrastructure that serves millions. Your hiring process shouldn't be stuck in the analog era. SkillPass gives gov-tech teams verified candidate data that's fast, fair, and audit-ready.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See GovTech Demo", href: "/employers/demo" },
      trustLine: "SOC 2 compliant. EEOC-friendly. FedRAMP-aware.",
    },
    problem: {
      badge: "GovTech Hiring Reality",
      headline: "Government Moves Fast Now.",
      gradientText: "Government Hiring Doesn't.",
      description:
        "Digital transformation is finally happening across government agencies. But hiring processes are still designed for the 1990s — slow, paper-heavy, and optimized for compliance checkboxes over actual talent quality.",
      stats: [
        {
          value: "189 days",
          label: "Average government tech hire",
          description:
            "Over six months per role. By the time you extend an offer, the candidate has accepted three others. The best talent can't wait half a year.",
        },
        {
          value: "72%",
          label: "GovTech offers declined",
          description:
            "Nearly three-quarters of offers to top technical candidates get rejected. Slow processes and bureaucratic hiring experiences drive talent to the private sector.",
        },
        {
          value: "2.8x",
          label: "Salary gap for equivalent roles",
          description:
            "GovTech can't compete on compensation alone. You need to compete on process speed and candidate experience — and you're losing on both.",
        },
      ],
    },
    solution: {
      badge: "Compliant and Fast",
      headline: "Hire at the Speed",
      gradientText: "Your Mission Demands",
      description:
        "SkillPass gives gov-tech teams pre-verified candidate data that satisfies compliance requirements while cutting months off the hiring process. Fair, documented, and fast.",
      features: [
        {
          title: "EEOC-Compliant Scoring",
          description:
            "SkillScores are based on verified ability data — not proxies, not demographics, not school prestige. The scoring methodology is documentable and defensible for any audit.",
        },
        {
          title: "Clearance-Compatible Process",
          description:
            "SkillPass verification runs alongside — not against — security clearance processes. Pre-screen for technical ability first, then move cleared candidates forward.",
        },
        {
          title: "Structured Reference Documentation",
          description:
            "Every 360-degree reference produces structured, quantified output that satisfies documentation requirements. No more \"reference said they were good\" in the file.",
        },
        {
          title: "Inclusive Candidate Sourcing",
          description:
            "With calibration across 4,000+ institutions, SkillPass surfaces qualified candidates from HBCUs, HSIs, community colleges, and non-traditional programs that government mandates require you to consider.",
        },
      ],
    },
    proof: {
      headline: "GovTech Teams That Modernized Hiring",
      testimonial: {
        quote:
          "We cut our time-to-hire from 180 days to 60 days for technical roles. More importantly, our offer acceptance rate went from 28% to 71%. Candidates actually want to work with us now because the process respects their time.",
        name: "Patricia Washington",
        role: "Chief Human Capital Officer",
        detail: "Federal technology agency",
      },
      stats: [
        { value: "180 → 60 days", label: "Time-to-hire" },
        { value: "28% → 71%", label: "Offer acceptance rate" },
        { value: "70%", label: "Less manual screening" },
      ],
    },
    cta: {
      headline: "Serve the Mission with",
      gradientText: "the Right Team",
      description:
        "Start a free trial. See how SkillPass verified data can compress your hiring timeline while keeping your process compliant and inclusive.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Schedule a Demo", href: "/employers/demo" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // BY PERSONA (10 pages)
  // ═══════════════════════════════════════════════════════════════

  // 24. technical-recruiters
  {
    slug: "technical-recruiters",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Technical Recruiters | Better Pipeline, Less Screening",
      description:
        "Better candidates in pipeline, less time screening. SkillPass gives technical recruiters verified SkillScores so you send better candidates to hiring managers, faster.",
    },
    hero: {
      badge: "Technical Recruiters",
      headline: "Better Candidates in Pipeline,",
      gradientText: "Less Time Screening.",
      subheadline:
        "You spend half your day reading resumes that all look the same. SkillPass gives you a verified score for every candidate before you pick up the phone — so your shortlists are shorter, better, and delivered faster.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Recruiter Demo", href: "/employers/demo" },
      trustLine: "Integrates with Greenhouse, Lever, and Workday.",
    },
    problem: {
      badge: "Recruiter Reality",
      headline: "You're Buried in Resumes That",
      gradientText: "All Say the Same Thing",
      description:
        "Every backend engineer resume lists Python, AWS, and PostgreSQL. Every frontend resume says React. You can't tell who's a 650 and who's a 750 from a resume — but your hiring managers expect you to. That's not fair, and it's not efficient.",
      stats: [
        {
          value: "23 hrs/wk",
          label: "Spent on resume screening",
          description:
            "That's almost three full days every week reading nearly identical documents. Your actual recruiting work — sourcing, relationship-building, closing — gets squeezed into the margins.",
        },
        {
          value: "31%",
          label: "Of shortlisted candidates pass technical screen",
          description:
            "Less than a third of the candidates you send forward survive the first technical interview. That's not your fault — you're working with terrible data.",
        },
        {
          value: "4.2 days",
          label: "Average time to build a shortlist",
          description:
            "From opening a role to sending the hiring manager a slate of candidates. Most of that time is screening, not sourcing. The screening is the bottleneck.",
        },
      ],
    },
    solution: {
      badge: "Your Screening Shortcut",
      headline: "Verified Scores in",
      gradientText: "Your Existing Workflow",
      description:
        "SkillPass scores appear right inside your ATS. Filter candidates by SkillScore, compare finalists on eight dimensions, and send hiring managers shortlists they'll actually be impressed by.",
      features: [
        {
          title: "ATS-Integrated Scores",
          description:
            "SkillScores show up in Greenhouse, Lever, and Workday candidate profiles. No new tab, no separate login, no workflow disruption. The data is just there.",
        },
        {
          title: "One-Click Filtering",
          description:
            "Set a minimum SkillScore for any role and instantly filter your applicant pool. What used to take 23 hours a week takes about 23 seconds.",
        },
        {
          title: "Dimension-Level Detail",
          description:
            "When a hiring manager asks 'but can they do X?' — you can show them the specific dimension score. Technical depth, collaboration, communication, and five more. No guessing.",
        },
        {
          title: "Shortlist Sharing",
          description:
            "Generate a comparison view of your top candidates and share it with the hiring manager in one click. They see scores, dimensions, and highlights. You look like a superstar.",
        },
      ],
    },
    proof: {
      headline: "Recruiters Who Upgraded Their Pipeline",
      testimonial: {
        quote:
          "My pass-through rate to technical screens went from 31% to 78%. Hiring managers started asking for my shortlists first because they knew the candidates would be vetted. Best tool I've used in twelve years of recruiting.",
        name: "Samantha Reyes",
        role: "Senior Technical Recruiter",
        detail: "Growth-stage SaaS, 300 employees",
      },
      stats: [
        { value: "31% → 78%", label: "Technical screen pass rate" },
        { value: "70%", label: "Less screening time" },
        { value: "4.2 → 0.5 days", label: "Time to shortlist" },
      ],
    },
    cta: {
      headline: "Send Better Candidates.",
      gradientText: "Spend Less Time Screening.",
      description:
        "Free trial. Connects to your ATS in ten minutes. See SkillScores for your current open roles before the end of the day.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 25. hiring-managers
  {
    slug: "hiring-managers",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Hiring Managers | Real Skills Before the Interview",
      description:
        "See real skills before the interview, not after three rounds. SkillPass gives hiring managers verified SkillScores so you stop wasting time on candidates who look good on paper but can't do the job.",
    },
    hero: {
      badge: "Hiring Managers",
      headline: "See Real Skills Before the Interview,",
      gradientText: "Not After Three Rounds.",
      subheadline:
        "You've sat through dozens of interviews with candidates who looked great on paper and fell apart in person. SkillPass shows you verified ability data — proctored assessments, calibrated academics, and structured references — before you schedule the first call.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See How It Works", href: "/employers/demo" },
      trustLine: "Cut interview rounds without losing quality.",
    },
    problem: {
      badge: "The Interview Trap",
      headline: "Your Calendar Is Full of",
      gradientText: "Interviews That Shouldn't Happen",
      description:
        "Be honest: how many interviews have you done this month where you knew within five minutes it wasn't going to work? That's not your recruiters' fault — they're working with bad data. The resume doesn't tell you enough, and the phone screen doesn't either.",
      stats: [
        {
          value: "8.3 hrs/wk",
          label: "Manager time on hiring",
          description:
            "A full workday every week, gone. That's product reviews, team 1:1s, and strategic work that doesn't happen because you're in back-to-back interviews.",
        },
        {
          value: "62%",
          label: "Of interviews yield no insight",
          description:
            "Nearly two-thirds of interviews don't change your assessment from what you already thought. They confirm what the resume suggested — but you had to spend an hour to learn that.",
        },
        {
          value: "3 rounds",
          label: "Before you feel confident",
          description:
            "Phone screen, technical interview, culture fit. Three rounds before you trust your own judgment. Most of the signal you're gathering could come from data.",
        },
      ],
    },
    solution: {
      badge: "Data Before Interviews",
      headline: "Know Who's Worth Your Time",
      gradientText: "Before You Block Your Calendar",
      description:
        "SkillPass gives you a verified candidate profile — SkillScore, dimension breakdown, assessment results, and reference summaries — before you agree to a single interview. Interview fewer people. Hire better ones.",
      features: [
        {
          title: "Pre-Interview Candidate Profile",
          description:
            "See the full SkillPass profile before scheduling. SkillScore, eight-dimension breakdown, assessment performance, and reference highlights. Make a go/no-go call in two minutes.",
        },
        {
          title: "Custom Weight Settings",
          description:
            "Tell SkillPass what matters most for your role. If you need someone with strong system design and weak on frontend — fine, weight it that way. The ranking adjusts automatically.",
        },
        {
          title: "Side-by-Side Finalists",
          description:
            "When you're deciding between two or three finalists, lay them out side-by-side. See exactly where each one is strong and where the gaps are. No more agonizing over \"gut feel.\"",
        },
        {
          title: "Hiring Manager Dashboard",
          description:
            "Track your open roles, candidate pipeline, and time-to-fill from one view. See which roles are moving and which are stuck without asking your recruiter.",
        },
      ],
    },
    proof: {
      headline: "Hiring Managers Who Got Their Time Back",
      testimonial: {
        quote:
          "I went from eight interviews a week to three. And my offer acceptance rate went up because I'm spending more time with fewer, better candidates. SkillPass didn't just save me time — it made me better at hiring.",
        name: "Daniel Ortega",
        role: "Engineering Manager",
        detail: "Fintech startup, 80 employees",
      },
      stats: [
        { value: "8 → 3", label: "Interviews per week" },
        { value: "62% → 89%", label: "Offer acceptance rate" },
        { value: "3x", label: "Quality of hire" },
      ],
    },
    cta: {
      headline: "Interview Fewer People.",
      gradientText: "Hire Better Ones.",
      description:
        "Start with a free trial. See SkillPass profiles for the candidates in your current pipeline and decide for yourself whether it's worth your time.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Demo", href: "/employers/demo" },
    },
  },

  // 26. hr-directors
  {
    slug: "hr-directors",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for HR Directors | Standardize Hiring Quality",
      description:
        "Standardize quality across every team. SkillPass gives HR directors verified SkillScores and org-wide analytics to ensure consistent hiring standards company-wide.",
    },
    hero: {
      badge: "HR Directors",
      headline: "Standardize Quality Across",
      gradientText: "Every Team.",
      subheadline:
        "Your engineering team hires one way. Sales hires another. Marketing has its own process entirely. SkillPass gives you a single source of verified candidate data across the entire org — so hiring quality doesn't depend on which team runs the interview.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See HR Director Demo", href: "/employers/demo" },
      trustLine: "Org-wide analytics. Diversity reporting. ATS integration.",
    },
    problem: {
      badge: "The Consistency Problem",
      headline: "Different Teams,",
      gradientText: "Different Standards, Different Results",
      description:
        "You've written the hiring playbook. You've trained the interviewers. And every team still does it differently. Quality varies wildly, and the only way you find out is through regretted hires, turnover data, and awkward conversations with department heads.",
      stats: [
        {
          value: "3.8x",
          label: "Quality variance across departments",
          description:
            "New-hire performance varies by nearly 4x between your strongest and weakest hiring teams. Same company, same level, same compensation — radically different outcomes.",
        },
        {
          value: "$2.1M",
          label: "Annual cost of inconsistent hiring",
          description:
            "When some teams hire well and others don't, the org absorbs the cost through turnover, retraining, and performance management. That's over two million a year for a mid-size company.",
        },
        {
          value: "6 months",
          label: "Before bad patterns surface",
          description:
            "Hiring quality problems are lagging indicators. By the time you see it in the data, you've already made 20 more hires with the same broken process.",
        },
      ],
    },
    solution: {
      badge: "One Standard, Every Team",
      headline: "Verified Data Everywhere,",
      gradientText: "Variance Nowhere",
      description:
        "SkillPass gives every hiring team the same verified candidate data and scoring methodology. You set the standards centrally, teams apply them locally, and you see the results in real time.",
      features: [
        {
          title: "Centralized Scoring Templates",
          description:
            "Define weight configs for every role family from a central admin panel. Engineering, sales, product, marketing — each gets the right criteria, and everyone follows the same framework.",
        },
        {
          title: "Org-Wide Hiring Analytics",
          description:
            "See average SkillScore of new hires, time-to-fill, and pipeline quality by department, team, and location. Spot the outliers before they become retention problems.",
        },
        {
          title: "Diversity & Inclusion Reporting",
          description:
            "Track SkillScore distributions across demographics. Ensure shortlists are built on verified ability. Generate the board-ready DEI reports your leadership expects.",
        },
        {
          title: "Hiring Manager Compliance",
          description:
            "See which teams are using the scoring templates and which are going rogue. Gentle nudges for the former. Firm conversations for the latter.",
        },
      ],
    },
    proof: {
      headline: "HR Directors Who Brought Consistency",
      testimonial: {
        quote:
          "We had 14 teams hiring independently with wildly different standards. Within two quarters of rolling out SkillPass, our quality variance dropped by 60% and every department head actually uses the same data. I didn't think that was possible.",
        name: "Michelle Torres",
        role: "VP of Human Resources",
        detail: "Technology company, 650 employees",
      },
      stats: [
        { value: "60%", label: "Less quality variance" },
        { value: "14 teams", label: "On one platform" },
        { value: "$2.1M", label: "Estimated annual savings" },
      ],
    },
    cta: {
      headline: "One Platform.",
      gradientText: "One Standard. Every Team.",
      description:
        "Start with a free trial for your recruiting team. See how verified candidate data looks across your open roles, and build the case for org-wide rollout.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Schedule a Demo", href: "/employers/demo" },
    },
  },

  // 27. talent-acquisition
  {
    slug: "talent-acquisition",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Talent Acquisition | Pipeline Efficiency, Multiplied",
      description:
        "Pipeline efficiency, multiplied. SkillPass gives TA leaders verified candidate data, ATS integration, and pipeline analytics to run a faster, higher-quality recruiting operation.",
    },
    hero: {
      badge: "Talent Acquisition Leaders",
      headline: "Pipeline Efficiency,",
      gradientText: "Multiplied.",
      subheadline:
        "You're measured on three things: speed, quality, and cost. SkillPass improves all three simultaneously. Verified candidate data in your ATS, automated scoring, and pipeline analytics that show you where the bottlenecks are before they stall your hiring.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See TA Demo", href: "/employers/demo" },
      trustLine: "60% faster. $12K saved per hire. 3x quality.",
    },
    problem: {
      badge: "TA Under Pressure",
      headline: "More Reqs, Same Team,",
      gradientText: "Higher Expectations",
      description:
        "The board wants faster hiring. The CFO wants lower cost-per-hire. Hiring managers want better candidates. And you're supposed to deliver all three with a flat headcount budget. Something has to give — unless you change the inputs.",
      stats: [
        {
          value: "47 reqs",
          label: "Average TA leader workload",
          description:
            "The typical TA leader manages 47 open requisitions simultaneously. At that volume, manual screening isn't just slow — it's impossible to do well.",
        },
        {
          value: "34%",
          label: "Pipeline drop-off at screening",
          description:
            "A third of qualified candidates drop out during your screening process. Your pipeline is leaking at the exact stage where speed matters most.",
        },
        {
          value: "$4,700",
          label: "Average cost per hire",
          description:
            "And that's before you factor in the hidden costs: hiring manager time, opportunity cost of unfilled roles, and the re-do when a hire doesn't work out.",
        },
      ],
    },
    solution: {
      badge: "TA Operations Upgrade",
      headline: "Run a Faster,",
      gradientText: "Higher-Quality Pipeline",
      description:
        "SkillPass gives your TA team the data layer that's been missing. Pre-scored candidates in your ATS, configurable scoring by role, comparison tools for finalists, and pipeline analytics that show where quality and speed are dropping.",
      features: [
        {
          title: "Pipeline Quality Dashboard",
          description:
            "Track average SkillScore at every pipeline stage: application, screening, interview, offer. See exactly where quality drops off and tighten that stage before it costs you hires.",
        },
        {
          title: "Automated Score-Based Routing",
          description:
            "Set SkillScore thresholds by role and automatically advance, hold, or decline candidates. Your team focuses on the candidates who need human judgment, not the obvious decisions.",
        },
        {
          title: "Recruiter Efficiency Metrics",
          description:
            "See how many candidates each recruiter screens, how their shortlists perform, and where their time goes. Coach the team with data, not opinions.",
        },
        {
          title: "Cost-per-Quality-Hire Tracking",
          description:
            "Not just cost-per-hire — cost per quality hire. Factor in SkillScore, retention, and manager satisfaction to see the true ROI of every dollar spent on recruiting.",
        },
      ],
    },
    proof: {
      headline: "TA Leaders Who Changed the Game",
      testimonial: {
        quote:
          "Our cost-per-hire dropped from $4,700 to $2,100 and quality went up. My team handles 30% more reqs without adding headcount. SkillPass is the closest thing to a force multiplier I've found in TA.",
        name: "Chris Andersen",
        role: "Director of Talent Acquisition",
        detail: "SaaS company, 500 employees",
      },
      stats: [
        { value: "$4,700 → $2,100", label: "Cost per hire" },
        { value: "30%", label: "More reqs handled" },
        { value: "60%", label: "Faster pipeline" },
      ],
    },
    cta: {
      headline: "Faster Pipeline.",
      gradientText: "Better Candidates. Lower Cost.",
      description:
        "Free trial with full ATS integration. See the pipeline analytics for your current open roles within your first hour on the platform.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Talk to Sales", href: "/employers/demo" },
    },
  },

  // 28. chief-people-officers
  {
    slug: "chief-people-officers",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for CPOs | Strategic Hiring Intelligence",
      description:
        "Strategic hiring intelligence for the C-suite. SkillPass gives Chief People Officers org-wide visibility into hiring quality, diversity metrics, and talent pipeline health.",
    },
    hero: {
      badge: "Chief People Officers",
      headline: "Strategic Hiring Intelligence for",
      gradientText: "the C-Suite.",
      subheadline:
        "You're accountable to the board for talent quality, diversity targets, and cost efficiency. SkillPass gives you the data layer to report on all three with confidence — and the operational tools to actually move the numbers.",
      primaryCta: { text: "Request Executive Demo", href: "/employers/demo" },
      secondaryCta: { text: "View Enterprise Plans", href: "/employers/pricing" },
      trustLine: "Board-ready analytics. Diversity reporting. Org-wide deployment.",
    },
    problem: {
      badge: "The CPO Challenge",
      headline: "You Own Talent Strategy but",
      gradientText: "Can't See Talent Quality",
      description:
        "You're responsible for the company's most important input — its people. But your visibility into hiring quality is limited to lagging indicators: turnover, performance reviews, and anecdotal feedback that arrives months too late.",
      stats: [
        {
          value: "8 months",
          label: "Before quality data surfaces",
          description:
            "It takes two-thirds of a year to know whether a hire was good. By then, you've made 50 more hires using the same process. Leading indicators are everything, and you don't have them.",
        },
        {
          value: "14%",
          label: "Of CPOs trust their hiring data",
          description:
            "Only one in seven CPOs are confident in the quality of their hiring analytics. The rest are making strategic decisions on incomplete data.",
        },
        {
          value: "$4.2M",
          label: "Avg. annual mis-hire cost (500+ co.)",
          description:
            "That's a number the board notices. And right now, you're presenting retention data while the real problem — hiring quality — goes unmeasured.",
        },
      ],
    },
    solution: {
      badge: "C-Suite Hiring Intelligence",
      headline: "Leading Indicators",
      gradientText: "for Talent Quality",
      description:
        "SkillPass gives CPOs what they've never had: real-time, verified data on the quality of candidates entering the organization. Not lagging retention data — leading quality data.",
      features: [
        {
          title: "Executive Dashboard",
          description:
            "Org-wide view of hiring quality by team, department, and location. Average SkillScore of new hires trending over time. Board-ready at any moment.",
        },
        {
          title: "Diversity Intelligence",
          description:
            "Track skill-verified diversity metrics across your pipeline. Show the board that inclusive hiring and quality hiring aren't in tension — they're the same thing.",
        },
        {
          title: "Predictive Quality Metrics",
          description:
            "SkillScore at hire correlates with performance and retention. Use it as a leading indicator to predict quality outcomes before the six-month mark.",
        },
        {
          title: "Benchmarking",
          description:
            "See how your hiring quality compares to industry benchmarks. Know whether your 720 average SkillScore is strong for your sector or whether you're behind.",
        },
      ],
    },
    proof: {
      headline: "CPOs Who Led with Data",
      testimonial: {
        quote:
          "For the first time, I walked into a board meeting with leading indicators on hiring quality. Not just 'we filled 200 roles' but 'we filled 200 roles with an average verified SkillScore of 740, up from 680 last year.' The board's confidence in our people function has never been higher.",
        name: "Victoria Chen",
        role: "Chief People Officer",
        detail: "Public technology company, 2,400 employees",
      },
      stats: [
        { value: "680 → 740", label: "Avg. new hire SkillScore" },
        { value: "3x", label: "Board confidence in talent data" },
        { value: "$4.2M", label: "Projected annual savings" },
      ],
    },
    cta: {
      headline: "Lead with Data,",
      gradientText: "Not Lagging Indicators",
      description:
        "Request an executive demo. We'll show you what your hiring data looks like through SkillPass and build a business case for your next board presentation.",
      primaryCta: { text: "Request Executive Demo", href: "/employers/demo" },
      secondaryCta: { text: "Download CPO Brief", href: "/resources/cpo-brief" },
    },
  },

  // 29. staffing-firms
  {
    slug: "staffing-firms",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Staffing Firms | Differentiate with Verified Candidates",
      description:
        "Differentiate with verified candidates. SkillPass helps staffing firms win more clients by presenting pre-verified SkillScores alongside every candidate submission.",
    },
    hero: {
      badge: "Staffing & Recruiting Firms",
      headline: "Differentiate with",
      gradientText: "Verified Candidates.",
      subheadline:
        "Every staffing firm says they find great talent. You can prove it. SkillPass gives your firm verified SkillScores to attach to every candidate submission — so clients see data, not just your word.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Staffing Demo", href: "/employers/demo" },
      trustLine: "Win more clients. Fill roles faster. Reduce falloffs.",
    },
    problem: {
      badge: "The Commodity Trap",
      headline: "Every Firm Claims",
      gradientText: "They Find the Best Talent",
      description:
        "Staffing is a trust business, and trust is hard to earn when every competitor makes the same pitch. Your candidates look identical on paper to your competitors' candidates. The only differentiator is your margin — and that's a race to the bottom.",
      stats: [
        {
          value: "22%",
          label: "Client submission acceptance rate",
          description:
            "Less than a quarter of your candidate submissions get accepted by clients. That means 78% of your work produces no revenue. The client doesn't trust the candidates — or the process.",
        },
        {
          value: "$8,400",
          label: "Cost per placement",
          description:
            "Sourcing, screening, submitting, and re-submitting. Most of that cost is front-loaded — and most of it goes to waste when clients reject your shortlists.",
        },
        {
          value: "41%",
          label: "Placement falloff rate",
          description:
            "Nearly half of placements don't make it to six months. Your clients blame you. Your candidates blame the role. The real problem: nobody had verified data.",
        },
      ],
    },
    solution: {
      badge: "Your Competitive Edge",
      headline: "Verified Data on",
      gradientText: "Every Candidate You Send",
      description:
        "Attach SkillPass verified scores to every candidate submission. Your clients get calibrated ability data alongside your recommendation. It's the difference between 'trust me' and 'here's the proof.'",
      features: [
        {
          title: "Verified Candidate Packages",
          description:
            "Send clients a SkillPass profile alongside your standard submission. SkillScore, dimension breakdown, assessment results, and reference summaries. Your submissions stand out immediately.",
        },
        {
          title: "Pre-Screening Automation",
          description:
            "Use SkillScore filters to pre-screen your candidate pool. Only invest time in candidates who meet the verified quality bar. Cut your cost-per-placement in half.",
        },
        {
          title: "Client-Facing Analytics",
          description:
            "Show clients the average SkillScore of your placements versus the market. Prove your value with data, not pitches. Win more exclusive contracts.",
        },
        {
          title: "Reduced Falloffs",
          description:
            "Verified SkillScores predict retention. When you place candidates with higher scores, they stick around longer. Fewer falloffs means fewer free replacements and more revenue.",
        },
      ],
    },
    proof: {
      headline: "Staffing Firms That Stopped Competing on Price",
      testimonial: {
        quote:
          "Our client acceptance rate went from 22% to 61% after we started attaching SkillPass profiles to submissions. Three clients switched to exclusive contracts because they said our data was better than any other firm's pitch.",
        name: "Tricia Navarro",
        role: "Managing Director",
        detail: "Technical staffing firm, 35 recruiters",
      },
      stats: [
        { value: "22% → 61%", label: "Client acceptance rate" },
        { value: "3 clients", label: "Switched to exclusive" },
        { value: "41% → 19%", label: "Falloff rate" },
      ],
    },
    cta: {
      headline: "Stop Competing on Price.",
      gradientText: "Start Competing on Proof.",
      description:
        "Free trial for your recruiting team. See how SkillPass verified profiles change the way clients respond to your submissions.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Talk to Partnerships", href: "/employers/partnerships" },
    },
  },

  // 30. in-house-recruiters
  {
    slug: "in-house-recruiters",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for In-House Recruiters | Your Advantage Against Agencies",
      description:
        "Your competitive advantage against agencies. SkillPass gives in-house recruiters verified SkillScores so your internal pipeline beats any external firm.",
    },
    hero: {
      badge: "In-House Recruiters",
      headline: "Your Competitive Advantage",
      gradientText: "Against Agencies.",
      subheadline:
        "Hiring managers default to agencies when they don't trust the internal pipeline. SkillPass gives you the same data quality — and better — so your candidates get hired first and the $20K agency fee stays in the budget.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Recruiter Demo", href: "/employers/demo" },
      trustLine: "Better data than agencies. Fraction of the cost.",
    },
    problem: {
      badge: "In-House vs. Agency",
      headline: "When Managers Go to Agencies,",
      gradientText: "It's Because They Don't Trust Your Pipeline",
      description:
        "Every time a hiring manager calls an agency, it's a vote of no confidence in the internal pipeline. They're not paying $20K because they love agencies. They're paying because they think the agency will find better people faster. Make that belief wrong.",
      stats: [
        {
          value: "$20K",
          label: "Average agency placement fee",
          description:
            "Per hire. That's money that could fund a recruiter salary, tooling, or a team offsite. Instead it goes to a firm that spends 20 minutes searching LinkedIn.",
        },
        {
          value: "34%",
          label: "Of roles go to agencies unnecessarily",
          description:
            "A third of the roles your company sends to agencies could have been filled internally — if the hiring manager trusted the in-house shortlist.",
        },
        {
          value: "17 days",
          label: "Agency speed advantage",
          description:
            "Agencies fill roles about 17 days faster than in-house teams on average. Not because they're better — because they're faster at screening. Fix the screening bottleneck and you fix the speed gap.",
        },
      ],
    },
    solution: {
      badge: "Beat the Agencies",
      headline: "Better Candidates, Faster,",
      gradientText: "Without the $20K Fee",
      description:
        "SkillPass gives in-house recruiters the same verified candidate data that agencies charge premium fees for. Pre-scored candidates, dimension-level detail, and shortlist tools — inside your ATS, at a fraction of the cost.",
      features: [
        {
          title: "Agency-Quality Shortlists",
          description:
            "When you send a hiring manager a shortlist with verified SkillScores, dimension breakdowns, and comparison data, they stop asking for agency help. Your shortlists are just better.",
        },
        {
          title: "Speed to Match Agencies",
          description:
            "Pre-verified candidates mean no waiting for assessments or references. Search, filter by SkillScore, and present a shortlist the same day a role opens. Agencies can't compete with that speed.",
        },
        {
          title: "Internal Credibility Dashboard",
          description:
            "Track your placement quality over time. When your hires consistently outscore agency placements, the data speaks for itself in budget conversations.",
        },
        {
          title: "Budget Impact Reporting",
          description:
            "Show leadership exactly how much money you saved by filling roles internally vs. externally. Make the ROI case for investing in your team instead of agencies.",
        },
      ],
    },
    proof: {
      headline: "In-House Recruiters Who Won the Budget Back",
      testimonial: {
        quote:
          "Last year we sent 34% of our roles to agencies. This year it's 8%. SkillPass gave me the data to prove our internal pipeline was better. The $480K we saved in agency fees more than pays for the rest of the recruiting budget.",
        name: "Jason Kim",
        role: "Lead Recruiter",
        detail: "Mid-market tech company, 400 employees",
      },
      stats: [
        { value: "34% → 8%", label: "Roles sent to agencies" },
        { value: "$480K", label: "Annual agency fee savings" },
        { value: "17 days", label: "Speed gap eliminated" },
      ],
    },
    cta: {
      headline: "Make Agencies",
      gradientText: "Irrelevant",
      description:
        "Free trial. Connect your ATS, search verified candidates, and show your hiring managers why they don't need to call an agency anymore.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See a Demo", href: "/employers/demo" },
    },
  },

  // 31. engineering-leads
  {
    slug: "engineering-leads",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Engineering Leads | Get Your Hours Back",
      description:
        "Get your engineering hours back. SkillPass gives engineering leads verified SkillScores so your team spends time building, not interviewing candidates who can't code.",
    },
    hero: {
      badge: "Engineering Leads",
      headline: "Get Your Engineering",
      gradientText: "Hours Back.",
      subheadline:
        "Your team is supposed to build product. Instead, they're spending two days a week in interviews, reviewing take-homes, and debating candidates over Slack. SkillPass gives you verified technical data upfront — so your engineers interview fewer people and hire better ones.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Engineering Demo", href: "/employers/demo" },
      trustLine: "Proctored technical assessments. 8-dimension references.",
    },
    problem: {
      badge: "The Engineering Tax",
      headline: "Hiring Is Eating",
      gradientText: "Your Sprint Capacity",
      description:
        "Every interview is an engineer pulled off a ticket. Every take-home review is a code review that doesn't happen. The engineering team's biggest productivity drain isn't technical debt — it's the hiring process.",
      stats: [
        {
          value: "18 hrs/eng/mo",
          label: "Interview time per engineer",
          description:
            "Each engineer on your team spends over two full days a month on hiring activities. Multiply that by team size and you've lost a sprint's worth of capacity.",
        },
        {
          value: "47%",
          label: "Take-home completion rate",
          description:
            "Less than half of candidates complete your take-home. You're designing exercises, waiting three days, and reviewing code for people who don't even finish.",
        },
        {
          value: "5 rounds",
          label: "Average engineering interview loop",
          description:
            "Phone screen, take-home, technical interview, system design, team fit. Five rounds, four engineers involved, three weeks elapsed time. For one hire.",
        },
      ],
    },
    solution: {
      badge: "Engineering Time Reclaimed",
      headline: "Pre-Verified Signal.",
      gradientText: "Fewer Rounds. Better Hires.",
      description:
        "SkillPass replaces the first two or three rounds of your engineering interview with verified data: proctored coding assessments, calibrated CS programs, and structured peer references. Your engineers only interview candidates who've already proven they can code.",
      features: [
        {
          title: "Replace Take-Homes with Proctored Assessments",
          description:
            "Candidates take SkillPass assessments once, under proctored conditions. You see scores for coding, system design, debugging, and more. No more designing, distributing, and grading take-home exercises.",
        },
        {
          title: "Technical Reference Scores",
          description:
            "Past engineering managers and peers rate candidates on code quality, debugging speed, system thinking, mentoring ability, and four other dimensions. Verified, structured, and quantified.",
        },
        {
          title: "Calibrated CS Programs",
          description:
            "Not all CS programs are equal. SkillPass calibrates academic records by program rigor, course difficulty, and institution tier. Your engineers stop arguing about whether a degree from X is as good as Y.",
        },
        {
          title: "Interview Loop Compression",
          description:
            "Drop from five rounds to two or three. Use SkillPass data for the screening stages and reserve your engineers' time for the final technical assessment and culture fit. Same signal, half the time.",
        },
      ],
    },
    proof: {
      headline: "Engineering Teams That Shipped More",
      testimonial: {
        quote:
          "We got 15 engineering hours a week back by eliminating the take-home round and replacing two phone screens with SkillPass data. Our next sprint velocity went up 23%. The irony is, our hire quality went up too.",
        name: "Sarah Blackwell",
        role: "VP of Engineering",
        detail: "Series B SaaS, 60 engineers",
      },
      stats: [
        { value: "15 hrs/wk", label: "Engineering time recovered" },
        { value: "5 → 2 rounds", label: "Interview loop" },
        { value: "23%", label: "Sprint velocity increase" },
      ],
    },
    cta: {
      headline: "Ship Product,",
      gradientText: "Not Interview Feedback",
      description:
        "Free trial. See SkillPass technical scores for your current open roles. Decide whether your team's interview time is better spent building or screening.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },

  // 32. dei-teams
  {
    slug: "dei-teams",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for DEI Teams | Inclusive Shortlists Backed by Skills Data",
      description:
        "Inclusive shortlists backed by skills data. SkillPass helps DEI teams build diverse candidate pipelines using verified ability scores, not proxies or guesswork.",
    },
    hero: {
      badge: "DEI Teams",
      headline: "Inclusive Shortlists Backed by",
      gradientText: "Skills Data.",
      subheadline:
        "The best argument for diverse hiring is that it's also better hiring — when you measure ability instead of pedigree. SkillPass calibrates scores across 4,000+ institutions, removing school-name bias and replacing it with verified skill data. Inclusion and quality go up together.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See DEI Demo", href: "/employers/demo" },
      trustLine: "EEOC-friendly methodology. OFCCP reporting support.",
    },
    problem: {
      badge: "The DEI Hiring Gap",
      headline: "Good Intentions Don't Fix",
      gradientText: "Biased Processes",
      description:
        "Your company has DEI goals. Your recruiting team is well-intentioned. But your hiring process still filters on school name, previous employer prestige, and interviewer gut feel — all proxies that disproportionately disadvantage underrepresented candidates.",
      stats: [
        {
          value: "76%",
          label: "Of hiring bias is structural",
          description:
            "Three-quarters of hiring bias comes from the process, not the people. GPA cutoffs without calibration, narrow school lists, and unstructured interviews are the problem — not racist recruiters.",
        },
        {
          value: "3.5x",
          label: "Gap in shortlist diversity vs. applicant pool",
          description:
            "Your applicant pool is diverse. Your shortlists aren't. The pipeline loses diversity at every stage because each filter uses biased proxies instead of verified ability.",
        },
        {
          value: "12%",
          label: "Of companies meet DEI hiring targets",
          description:
            "Almost nine out of ten companies miss their diversity hiring goals. Training and good intentions aren't enough. You need a process change.",
        },
      ],
    },
    solution: {
      badge: "Data-Driven Inclusion",
      headline: "Remove the Proxies.",
      gradientText: "Keep the Standards.",
      description:
        "SkillPass replaces biased proxies (school name, employer brand, interviewer impression) with verified ability data. The hiring bar stays high — but it's now based on what candidates can do, not where they went to school.",
      features: [
        {
          title: "Calibrated Cross-Institution Scoring",
          description:
            "SkillPass calibrates GPAs across 4,000+ institutions including HBCUs, HSIs, community colleges, and international universities. A 3.6 from Howard and a 3.6 from Harvard are properly contextualized — not ignored.",
        },
        {
          title: "Bias-Resistant Shortlisting",
          description:
            "When shortlists are built on verified SkillScores instead of school name and employer brand, diversity increases naturally. Not through quotas — through better measurement.",
        },
        {
          title: "Pipeline Diversity Analytics",
          description:
            "Track diversity metrics at every pipeline stage: application, screening, interview, offer. See exactly where the funnel narrows and fix the specific stage causing the drop.",
        },
        {
          title: "Compliance-Ready Reporting",
          description:
            "Generate EEOC and OFCCP-friendly reports showing that hiring decisions are based on verified, job-relevant ability data. Document your process defensibly.",
        },
      ],
    },
    proof: {
      headline: "DEI Teams That Changed the Numbers",
      testimonial: {
        quote:
          "We expanded our sourcing from 15 target schools to SkillPass's full database. Shortlist diversity went up 40% in the first quarter — and average SkillScore of new hires went up too. That shut down every 'lowering the bar' objection permanently.",
        name: "Jasmine Williams",
        role: "Head of DEI",
        detail: "Technology company, 800 employees",
      },
      stats: [
        { value: "40%", label: "More diverse shortlists" },
        { value: "+35 pts", label: "Avg. SkillScore increase" },
        { value: "15 → 4,000+", label: "Institution coverage" },
      ],
    },
    cta: {
      headline: "Inclusion Through",
      gradientText: "Better Measurement",
      description:
        "Start a free trial. Run your current open roles through SkillPass and see how calibrated scoring changes the diversity — and quality — of your shortlists.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Schedule a Demo", href: "/employers/demo" },
    },
  },

  // 33. campus-recruiting
  {
    slug: "campus-recruiting",
    category: "by-persona",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Campus Recruiting | Find Top Students First",
      description:
        "Find top students before everyone else. SkillPass gives campus recruiters verified SkillScores across 4,000+ institutions so you discover talent beyond your traditional target schools.",
    },
    hero: {
      badge: "Campus Recruiting",
      headline: "Find Top Students",
      gradientText: "Before Everyone Else.",
      subheadline:
        "You visit the same 20 campuses as every other company and compete for the same 500 students. SkillPass gives you verified academic data across 4,000+ institutions — so you find the best students everywhere, not just the schools where you buy a career fair booth.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "See Campus Demo", href: "/employers/demo" },
      trustLine: "4,000+ institutions. Calibrated GPA. Verified assessments.",
    },
    problem: {
      badge: "Campus Recruiting Is Outdated",
      headline: "You're Visiting 20 Schools.",
      gradientText: "There Are 4,000.",
      description:
        "Campus recruiting hasn't changed in decades. Pick 15-30 target schools, fly recruiters in, host info sessions, and compete against every Fortune 500 company for the same students. Meanwhile, the best CS student at a school you've never heard of doesn't even know you exist.",
      stats: [
        {
          value: "20",
          label: "Average target school list",
          description:
            "Twenty schools out of four thousand. That's 0.5% of the talent pool. You're ignoring 99.5% of potential candidates because you can't physically visit every campus.",
        },
        {
          value: "$14K",
          label: "Cost per campus visit",
          description:
            "Travel, booth fees, swag, hotel, meals, and recruiter time. That's $14K per school — for access to students that ten other companies are also courting.",
        },
        {
          value: "67%",
          label: "Same-school competition overlap",
          description:
            "Two-thirds of your competitors target the same campuses you do. You're in an arms race for attention at the same schools while thousands of qualified students go unseen.",
        },
      ],
    },
    solution: {
      badge: "Campus Recruiting, Modernized",
      headline: "Every School. Every Student.",
      gradientText: "Verified and Ranked.",
      description:
        "SkillPass turns campus recruiting from a logistics operation into a data operation. Search students across 4,000+ institutions by calibrated academic score, assessment results, and reference ratings. Find the best talent at schools you'd never visit.",
      features: [
        {
          title: "4,000+ Institution Coverage",
          description:
            "SkillPass calibrates academic data across every institution in our network. A 3.7 from Georgia Tech and a 3.7 from Georgia Southern are weighted by program rigor and course load. Real calibration, not name recognition.",
        },
        {
          title: "Pre-Graduation SkillScores",
          description:
            "Students build SkillPass profiles during school. By the time they're seniors, you can search for graduating students with verified scores and reach out before the career fair rush.",
        },
        {
          title: "Virtual Campus Reach",
          description:
            "Why fly to 20 campuses when you can search 4,000 from your desk? Identify top students at schools you've never visited, invite them to your pipeline, and save $14K per campus you skip.",
        },
        {
          title: "Early Talent Pipeline",
          description:
            "Build relationships with sophomores and juniors at target score thresholds. When they graduate, they already know your company. That's how you win on campus without a booth.",
        },
      ],
    },
    proof: {
      headline: "Campus Teams That Expanded the Map",
      testimonial: {
        quote:
          "We used to recruit from 18 schools. This year we made offers to students at 47 schools — including 12 we'd never heard of. Our incoming class has the highest average SkillScore ever, and we cut campus spending by $200K.",
        name: "Brian Nakamura",
        role: "Director of University Recruiting",
        detail: "Enterprise technology company, 3,000 employees",
      },
      stats: [
        { value: "18 → 47", label: "Schools represented" },
        { value: "$200K", label: "Campus spend saved" },
        { value: "+52 pts", label: "Avg. class SkillScore increase" },
      ],
    },
    cta: {
      headline: "Recruit from 4,000 Schools.",
      gradientText: "Visit Zero.",
      description:
        "Free trial. Search for graduating students by calibrated GPA, verified assessments, and SkillScore. Find your next class before the career fair season starts.",
      primaryCta: { text: "Start Free Trial", href: "/employers/signup" },
      secondaryCta: { text: "Book a Demo", href: "/employers/demo" },
    },
  },
];

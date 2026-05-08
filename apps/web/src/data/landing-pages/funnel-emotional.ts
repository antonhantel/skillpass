import type { LandingPage } from "./types";

export const funnelEmotionalPages: LandingPage[] = [
  // ═══════════════════════════════════════════════════════════════
  // SEASONAL / CAMPAIGN (221–226)
  // ═══════════════════════════════════════════════════════════════

  // 221
  {
    slug: "campus-recruiting-2026",
    category: "seasonal",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Campus Recruiting 2026 — Rank Every Applicant Before You Land | SkillPass",
      description:
        "Stop flying blind into career fairs. SkillPass ranks every campus applicant by verified SkillScore so your team meets the right students first.",
    },
    hero: {
      badge: "Campus Season 2026",
      headline: "Career fairs shouldn't be",
      gradientText: "speed-dating in the dark.",
      subheadline:
        "Rank every applicant before your recruiters even board the plane. SkillPass gives you verified SkillScores on 4,000+ campuses so you know exactly who to talk to.",
      primaryCta: { text: "Plan your campus strategy", href: "/employers/signup" },
      secondaryCta: { text: "See a sample ranking", href: "/demo" },
      trustLine: "Used by recruiting teams at 120+ companies this cycle",
    },
    problem: {
      badge: "The old way",
      headline: "Your campus budget is huge.",
      gradientText: "Your signal is tiny.",
      description:
        "Most companies spend $15K–$40K per campus visit and walk away with a stack of identical resumes. You're guessing who's good based on a handshake and a GPA.",
      stats: [
        { value: "$28K", label: "Avg. cost per campus visit", description: "Travel, booth, swag, recruiter time — and you still can't tell who's actually strong." },
        { value: "73%", label: "Resumes never reviewed", description: "The pile is too big. Great candidates get lost behind whoever dropped their resume first." },
        { value: "6 weeks", label: "Post-fair review time", description: "By the time you reach out, the best students already accepted somewhere else." },
      ],
    },
    solution: {
      badge: "The SkillPass way",
      headline: "Pre-rank every student.",
      gradientText: "Visit with a shortlist.",
      description:
        "Connect to campus career offices through SkillPass. We pull verified transcripts, peer signals, and assessment results into one SkillScore per student — before the fair even starts.",
      features: [
        { title: "Pre-fair rankings", description: "See SkillScores for every registered attendee. Sort by major, score range, or sub-score emphasis." },
        { title: "Verified academics", description: "Transcripts from 4,000+ institutions verified automatically. No self-reported GPAs." },
        { title: "Live scan at booth", description: "Students share their SkillPass profile via QR. You get the full picture in seconds." },
        { title: "Post-fair pipeline", description: "Every scanned profile flows into your ATS with score attached. No manual data entry." },
      ],
    },
    proof: {
      headline: "Real results from Fall 2025 recruiting",
      testimonial: {
        quote: "We visited 8 campuses last fall with SkillPass rankings. Cut our offer-to-acceptance time from 19 days to 7. We stopped losing candidates to faster competitors.",
        name: "Rachel Torres",
        role: "University Recruiting Lead",
        detail: "Series C fintech, 400 employees",
      },
      stats: [
        { value: "60%", label: "Faster offers" },
        { value: "3.2x", label: "Interview-to-hire ratio" },
        { value: "42%", label: "Lower campus spend" },
        { value: "91%", label: "Offer acceptance rate" },
      ],
    },
    cta: {
      headline: "Campus season moves fast.",
      gradientText: "Move faster.",
      description: "Get your 2026 campus recruiting list ranked before the first career fair opens. Setup takes one afternoon.",
      primaryCta: { text: "Start ranking students", href: "/employers/signup" },
      secondaryCta: { text: "Talk to campus team", href: "/contact" },
    },
  },

  // 222
  {
    slug: "summer-intern-hiring",
    category: "seasonal",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Summer Intern Hiring — Find High-Signal Interns Fast | SkillPass",
      description:
        "Hiring summer interns shouldn't mean reviewing 2,000 identical resumes. SkillPass gives you verified scores so you pick the right 10.",
    },
    hero: {
      badge: "Summer 2026 Internships",
      headline: "2,000 applicants.",
      gradientText: "10 intern slots.",
      subheadline:
        "You don't have time to guess. SkillPass scores every intern applicant on verified academics, peer reviews, and real assessments — so you spend your time on the top 50, not the full pile.",
      primaryCta: { text: "Start filtering applicants", href: "/employers/signup" },
      secondaryCta: { text: "See how scoring works", href: "/how-it-works" },
      trustLine: "12,000+ interns scored in summer 2025",
    },
    problem: {
      badge: "Every summer, same story",
      headline: "Intern hiring is a",
      gradientText: "volume nightmare.",
      description:
        "You post one listing and get buried. Everyone has a 3.7 GPA, two club presidencies, and a personal project they barely touched. How do you pick?",
      stats: [
        { value: "2,147", label: "Avg. intern applications", description: "Per role. That's not a talent pipeline — it's a firehose aimed at your inbox." },
        { value: "11 min", label: "Review time per resume", description: "Multiply that by 2,000. Your team is spending weeks on a summer hire." },
        { value: "34%", label: "Intern no-show rate", description: "When you can't assess fit properly, a third of accepted interns ghost or bail early." },
      ],
    },
    solution: {
      badge: "A better filter",
      headline: "Score. Rank.",
      gradientText: "Interview the best.",
      description:
        "SkillPass pulls verified data from transcripts, peer evaluations, and 8 assessment types. Each intern candidate gets a 300–850 SkillScore. You set your cutoff and focus.",
      features: [
        { title: "Instant stack-rank", description: "Every applicant scored and sorted. No more reading 2,000 resumes to find 50 worth interviewing." },
        { title: "Intern-specific sub-scores", description: "Weight academic performance higher for interns, or emphasize assessed ability if you want builders." },
        { title: "Fit prediction", description: "Our peer-signal and performance sub-scores predict intern retention better than GPA alone." },
        { title: "Cohort comparison", description: "See how your intern class compares to the full applicant pool and to last year's cohort." },
      ],
    },
    proof: {
      headline: "Summer 2025 by the numbers",
      testimonial: {
        quote: "We went from 3 weeks of intern resume screening to 2 days. Literally just sorted by SkillScore, interviewed the top 40, and hired 12. Best intern class we've ever had.",
        name: "James Whitfield",
        role: "Engineering Manager",
        detail: "B2B SaaS startup, 80 engineers",
      },
      stats: [
        { value: "89%", label: "Screening time saved" },
        { value: "12%", label: "No-show rate (was 34%)" },
        { value: "4.6/5", label: "Manager satisfaction" },
        { value: "67%", label: "Return offer acceptance" },
      ],
    },
    cta: {
      headline: "Your intern pipeline is filling up.",
      gradientText: "Filter it now.",
      description: "Connect your ATS and start scoring applicants today. Most teams are fully set up in under an hour.",
      primaryCta: { text: "Score intern applicants", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
    },
  },

  // 223
  {
    slug: "new-grad-launch",
    category: "seasonal",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "New Grad? Launch Your Career With a Verified SkillScore | SkillPass",
      description:
        "Graduating in 2026? Your resume looks like everyone else's. A SkillScore proves what you can actually do — verified, portable, free.",
    },
    hero: {
      badge: "Class of 2026",
      headline: "Your diploma says you graduated.",
      gradientText: "Your SkillScore says what you can do.",
      subheadline:
        "Every new grad has a degree. Not every new grad has a verified, portable number that tells employers exactly how strong they are. Build yours before you start applying.",
      primaryCta: { text: "Build your SkillScore free", href: "/signup" },
      secondaryCta: { text: "How it works", href: "/how-it-works" },
      trustLine: "Free forever for talent — no credit card, no catch",
    },
    problem: {
      badge: "The new grad trap",
      headline: "You're competing against",
      gradientText: "10,000 identical resumes.",
      description:
        "Same degree title, same bullet points, same \"proficient in Python.\" Recruiters spend 7 seconds on each one. Your four years of work deserve more than 7 seconds.",
      stats: [
        { value: "7 sec", label: "Avg. resume review time", description: "That's how long a recruiter looks at your four years of college. Seven seconds." },
        { value: "250+", label: "Applicants per entry role", description: "You're not competing with 10 people. You're buried in a pile of hundreds." },
        { value: "68%", label: "Apply with no response", description: "Two-thirds of new grad applications go into a void. No rejection. Just silence." },
      ],
    },
    solution: {
      badge: "Stand out with proof",
      headline: "One verified number.",
      gradientText: "Employers actually look at it.",
      description:
        "Your SkillScore combines your verified transcript, peer references, assessments, and real performance data into a single 300–850 score. It's specific. It's credible. It gets noticed.",
      features: [
        { title: "Verified transcript pull", description: "We connect to 4,000+ institutions. Your academic record is verified automatically — no PDFs, no faking." },
        { title: "Peer signal", description: "Request references from classmates, TAs, and project partners. 8 dimensions of real feedback, not generic LinkedIn endorsements." },
        { title: "Assessment portfolio", description: "Take assessments in your field. Each one adds verified proof of what you know — not just what you claim." },
        { title: "Public profile", description: "Share skillpass.io/you with employers. One link replaces your resume, transcript, and references." },
      ],
    },
    proof: {
      headline: "New grads who launched with SkillPass",
      testimonial: {
        quote: "I had a 3.4 GPA from a state school. Not exactly resume gold. But my SkillScore was 714 — top 15% of CS grads. I got callbacks from companies that ignored me before.",
        name: "Marcus Chen",
        role: "Software Engineer",
        detail: "Class of 2025, hired at Series B startup",
      },
      stats: [
        { value: "3.1x", label: "More callbacks" },
        { value: "714", label: "Avg. score, early adopters" },
        { value: "23 days", label: "Avg. time to first offer" },
        { value: "100%", label: "Free for talent" },
      ],
    },
    cta: {
      headline: "Graduation is coming.",
      gradientText: "Your SkillScore should be ready.",
      description: "Takes about 15 minutes to get started. Your transcript pulls automatically, and you can add references and assessments anytime.",
      primaryCta: { text: "Create free profile", href: "/signup" },
      secondaryCta: { text: "See a sample profile", href: "/demo" },
    },
  },

  // 224
  {
    slug: "back-to-school",
    category: "seasonal",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Back to School — Start Building Your SkillScore This Semester | SkillPass",
      description:
        "New semester, new chance to invest in your career. Start building a verified SkillScore now so it's strong by graduation.",
    },
    hero: {
      badge: "Fall 2026",
      headline: "New semester.",
      gradientText: "Start building proof.",
      subheadline:
        "Your GPA won't tell the whole story when you graduate. Start building a verified SkillScore now — every class, every project, every peer review adds to it. By senior year, you'll have something real to show.",
      primaryCta: { text: "Start building free", href: "/signup" },
      secondaryCta: { text: "What's a SkillScore?", href: "/how-it-works" },
      trustLine: "Students at 4,000+ institutions already building their scores",
    },
    problem: {
      badge: "The semester trap",
      headline: "You're working hard.",
      gradientText: "Nobody's keeping score.",
      description:
        "Every group project, every late-night study session, every TA recommendation — it all disappears when the semester ends. You're left with a GPA and memories.",
      stats: [
        { value: "0", label: "Peer reviews recorded", description: "Your teammates know you carried the project. That knowledge vanishes after final grades post." },
        { value: "4 yrs", label: "Of work, one number", description: "GPA compresses four years of effort into a single decimal. That's not a complete picture." },
        { value: "62%", label: "Seniors wish they'd started earlier", description: "Most students don't think about proof of skill until they're writing their first resume. Too late." },
      ],
    },
    solution: {
      badge: "Build as you go",
      headline: "Every semester adds",
      gradientText: "to your SkillScore.",
      description:
        "SkillPass tracks your verified academics, peer feedback, and assessments over time. The earlier you start, the stronger your score by graduation.",
      features: [
        { title: "Semester-by-semester growth", description: "Watch your SkillScore evolve as you add coursework, references, and assessment results each term." },
        { title: "Peer references that stack", description: "Ask project partners for feedback after every major collaboration. 8 reference dimensions build a rich signal." },
        { title: "Assessment prep", description: "Take field-specific assessments at your own pace. Results are verified and permanent." },
        { title: "Recruiter-ready by senior year", description: "When campus recruiting starts, your profile is already strong. No last-minute scramble." },
      ],
    },
    proof: {
      headline: "Started early, graduated ahead",
      testimonial: {
        quote: "I created my SkillPass profile sophomore year. By the time I was applying for internships junior year, I had a 691 with 14 peer references. Friends who waited until senior year had bare profiles.",
        name: "Priya Nakamura",
        role: "Data Science Intern → Full-time",
        detail: "Started sophomore year, hired before graduation",
      },
      stats: [
        { value: "691", label: "Score by junior year" },
        { value: "14", label: "Peer references" },
        { value: "2 yrs", label: "Head start on classmates" },
        { value: "$0", label: "Cost to build" },
      ],
    },
    cta: {
      headline: "The best time to start was freshman year.",
      gradientText: "The next best time is now.",
      description: "Free forever. Takes 15 minutes to set up. Your transcript pulls automatically from most institutions.",
      primaryCta: { text: "Start building", href: "/signup" },
      secondaryCta: { text: "See how scoring works", href: "/how-it-works" },
    },
  },

  // 225
  {
    slug: "layoff-safety-net",
    category: "seasonal",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Layoff Safety Net — Your Skills Travel With You | SkillPass",
      description:
        "Laid off? Your skills didn't disappear. A verified SkillScore gives you portable proof of ability that no company can take away.",
    },
    hero: {
      badge: "Your career insurance",
      headline: "Companies come and go.",
      gradientText: "Your skills are yours.",
      subheadline:
        "A layoff takes your title and your badge. It doesn't take what you know. SkillPass gives you a verified, portable SkillScore that proves your ability — independent of any single employer.",
      primaryCta: { text: "Build your safety net free", href: "/signup" },
      secondaryCta: { text: "How SkillScores work", href: "/how-it-works" },
      trustLine: "Free forever — especially when you need it most",
    },
    problem: {
      badge: "When it happens",
      headline: "Laid off and starting from",
      gradientText: "scratch.",
      description:
        "Yesterday you were a senior engineer at a respected company. Today you're one of 500 applicants with a LinkedIn headline that says \"Open to Work.\" Your proof of ability was locked inside a company that just let you go.",
      stats: [
        { value: "3.5 mo", label: "Avg. job search after layoff", description: "Three and a half months of applications, ghosting, and anxiety. It doesn't have to be this long." },
        { value: "72%", label: "Feel they can't prove skills", description: "Most laid-off workers say the hardest part is proving what they're capable of without their old title." },
        { value: "40%", label: "Take a pay cut", description: "When you can't demonstrate your level, you end up accepting less than you're worth." },
      ],
    },
    solution: {
      badge: "Portable proof",
      headline: "Build it before you need it.",
      gradientText: "Use it when you do.",
      description:
        "SkillPass creates a verified profile of your real abilities — academic background, peer reviews from colleagues, performance data, and assessed skills. It belongs to you, not your employer.",
      features: [
        { title: "Employer-independent", description: "Your SkillScore doesn't depend on any company's brand. It's verified proof that travels with you." },
        { title: "Colleague references on file", description: "Collect peer reviews from coworkers while you still work together. They're verified and permanent." },
        { title: "Assessment-backed", description: "Prove your current skills with assessments. No one can question whether your abilities are outdated." },
        { title: "Instant share", description: "One link — skillpass.io/you — replaces the scramble of updating resumes and begging for recommendations." },
      ],
    },
    proof: {
      headline: "Back on their feet, faster",
      testimonial: {
        quote: "I was part of a 200-person layoff. Most of my team spent 4 months job hunting. I had a SkillScore of 762 and a complete profile. I had 3 offers in 5 weeks.",
        name: "David Okonkwo",
        role: "Senior Product Manager",
        detail: "Laid off in Q1 2025, re-employed in 5 weeks",
      },
      stats: [
        { value: "5 wks", label: "Time to 3 offers" },
        { value: "762", label: "SkillScore" },
        { value: "0%", label: "Pay cut (got a raise)" },
        { value: "$0", label: "Cost" },
      ],
    },
    cta: {
      headline: "Don't wait until it happens.",
      gradientText: "Build your proof now.",
      description: "You buy insurance before the accident. Build your SkillScore before the layoff. It's free and takes 15 minutes.",
      primaryCta: { text: "Create free profile", href: "/signup" },
      secondaryCta: { text: "Learn more", href: "/how-it-works" },
    },
  },

  // 226
  {
    slug: "women-in-tech",
    category: "seasonal",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Women in Tech — Let Your Skills Speak Louder | SkillPass",
      description:
        "Tired of being underestimated? A verified SkillScore gives women in tech objective, portable proof of ability that bias can't argue with.",
    },
    hero: {
      badge: "Women in Tech",
      headline: "Your work speaks for itself.",
      gradientText: "Now there's proof.",
      subheadline:
        "Women in tech are consistently underestimated in interviews, underpaid in offers, and overlooked for promotions. A verified SkillScore is objective, portable proof that your ability is exactly what it is. No one gets to argue with the number.",
      primaryCta: { text: "Get your SkillScore free", href: "/signup" },
      secondaryCta: { text: "See how it works", href: "/how-it-works" },
      trustLine: "Free forever for all talent",
    },
    problem: {
      badge: "The reality",
      headline: "Bias doesn't announce itself.",
      gradientText: "It just costs you.",
      description:
        "You're not imagining it. The data is clear: women in technical roles face measurably different outcomes in hiring, compensation, and advancement. Not because of ability — because of perception.",
      stats: [
        { value: "16%", label: "Lower callback rate", description: "Identical resumes with female names get fewer callbacks in technical roles. Same skills, different name." },
        { value: "$15K", label: "Avg. salary gap in tech", description: "Women in technical roles earn less at every level. The gap compounds over a career." },
        { value: "2.5x", label: "More likely to be questioned", description: "Women report being asked to prove competence significantly more often than male peers at the same level." },
      ],
    },
    solution: {
      badge: "Objective proof",
      headline: "Numbers don't have",
      gradientText: "a gender bias.",
      description:
        "A SkillScore is calculated from verified data — transcripts, peer reviews, assessments, performance metrics. It doesn't know your name, your gender, or your photo. It knows what you can do.",
      features: [
        { title: "Bias-resistant scoring", description: "SkillScores are calculated from verified data sources. No subjective \"culture fit\" or gut-feel adjustments." },
        { title: "Negotiation ammunition", description: "When you know your verified score and market position, you negotiate from facts, not feelings." },
        { title: "Peer-validated", description: "Collect references from colleagues who've seen your work. 8 structured dimensions, not vague endorsements." },
        { title: "Portable leverage", description: "Your score travels with you. If one company undervalues you, the next one can see exactly what they're getting." },
      ],
    },
    proof: {
      headline: "Proof that changed the conversation",
      testimonial: {
        quote: "I shared my SkillScore during negotiation — 781, top 8% of backend engineers. The offer went up $22K. I didn't have to argue about my experience being 'different.' The data spoke.",
        name: "Sarah Lin",
        role: "Staff Engineer",
        detail: "Used SkillScore to negotiate a $22K bump",
      },
      stats: [
        { value: "781", label: "SkillScore" },
        { value: "$22K", label: "Salary bump" },
        { value: "Top 8%", label: "Among backend engineers" },
        { value: "0 min", label: "Spent justifying experience" },
      ],
    },
    cta: {
      headline: "Stop justifying yourself.",
      gradientText: "Let the score do it.",
      description: "Free, objective, verified. Build your SkillScore in 15 minutes and let your ability stand on its own.",
      primaryCta: { text: "Build your SkillScore", href: "/signup" },
      secondaryCta: { text: "Learn more", href: "/how-it-works" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // AWARENESS FUNNEL (227–234)
  // ═══════════════════════════════════════════════════════════════

  // 227
  {
    slug: "skills-credit-score",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "A Credit Score for Your Skills — What's Your SkillScore? | SkillPass",
      description:
        "Your credit score proves financial trust. A SkillScore proves professional ability. 300–850, verified, portable. Find out what yours would be.",
    },
    hero: {
      badge: "The concept",
      headline: "Credit scores changed lending.",
      gradientText: "SkillScores change hiring.",
      subheadline:
        "Before credit scores, getting a loan meant convincing a banker you were trustworthy. Before SkillScores, getting a job meant convincing a recruiter you were competent. Same problem, same solution: a verified number.",
      primaryCta: { text: "Get your SkillScore free", href: "/signup" },
      secondaryCta: { text: "How it's calculated", href: "/how-it-works" },
      trustLine: "300–850 scale, 4 verified sub-scores",
    },
    problem: {
      badge: "Before credit scores",
      headline: "Hiring works like",
      gradientText: "1950s lending.",
      description:
        "Banks used to decide who got a loan based on how they dressed and who they knew. Sound familiar? That's exactly how most hiring still works — gut feel, pedigree, and who referred who.",
      stats: [
        { value: "1956", label: "Credit scores invented", description: "FICO created a single, verified number that told lenders who was creditworthy. Lending was never the same." },
        { value: "0", label: "Equivalent for skills", description: "Until now, there's been no standard, verified way to prove professional ability across employers." },
        { value: "85%", label: "Hires based on gut feel", description: "Most hiring decisions still rely on subjective impressions. We have the data to do better." },
      ],
    },
    solution: {
      badge: "SkillScore: 300–850",
      headline: "One number.",
      gradientText: "Verified. Portable. Yours.",
      description:
        "Like a credit score, your SkillScore is calculated from verified data, not self-reporting. Four sub-scores feed into one number: Academic, Peer Signal, Performance, and Assessed Ability.",
      features: [
        { title: "Academic (verified)", description: "Transcripts from 4,000+ institutions pulled and verified automatically. No self-reported GPAs." },
        { title: "Peer Signal (8 dimensions)", description: "Structured references from people who've actually worked with you. Not generic \"great to work with\" endorsements." },
        { title: "Performance (real data)", description: "Work output metrics where available — project outcomes, contributions, measurable results." },
        { title: "Assessed Ability (8 types)", description: "Standardized assessments in your field. Coding, analysis, design, strategy — verified proof of current skill." },
      ],
    },
    proof: {
      headline: "The numbers behind the number",
      testimonial: {
        quote: "I tell people it's like a credit score for skills and they immediately get it. One number that tells you how capable someone is, backed by real data. That's what was missing.",
        name: "Alex Rivera",
        role: "VP of Talent",
        detail: "Enterprise SaaS, 2,000 employees",
      },
      stats: [
        { value: "300–850", label: "Score range" },
        { value: "4", label: "Verified sub-scores" },
        { value: "4,000+", label: "Institutions connected" },
        { value: "8", label: "Assessment types" },
      ],
    },
    cta: {
      headline: "What's your number?",
      gradientText: "Find out free.",
      description: "It takes 15 minutes to start and it's free forever for talent. Like a credit score, the earlier you build it, the stronger it gets.",
      primaryCta: { text: "Get your SkillScore", href: "/signup" },
      secondaryCta: { text: "See a sample profile", href: "/demo" },
    },
  },

  // 228
  {
    slug: "never-redundant-test",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Never Take a Redundant Skills Test Again | SkillPass",
      description:
        "You've proven your abilities before. Why prove them again for every new employer? SkillPass makes your verified results portable.",
    },
    hero: {
      badge: "Enough already",
      headline: "You've proven this before.",
      gradientText: "Why are you proving it again?",
      subheadline:
        "Every new application, same story: another coding test, another case study, another \"quick assessment.\" You've already demonstrated these skills a dozen times. SkillPass makes that proof portable.",
      primaryCta: { text: "Make your proof portable", href: "/signup" },
      secondaryCta: { text: "How it works", href: "/how-it-works" },
      trustLine: "One set of verified results, recognized everywhere",
    },
    problem: {
      badge: "The repetition tax",
      headline: "Take-home tests.",
      gradientText: "Over and over and over.",
      description:
        "The average experienced developer completes 8–12 technical assessments per job search. The average PM does 5–7 case studies. Each one takes hours. And none of the results carry over.",
      stats: [
        { value: "47 hrs", label: "Spent on assessments per search", description: "Nearly a full work week of unpaid testing. For skills you already have. Every single job search." },
        { value: "0%", label: "Results that transfer", description: "Aced a HackerRank for Company A? Company B doesn't care. Start over." },
        { value: "8–12", label: "Tests per job search", description: "Experienced candidates complete up to a dozen assessments. Same skills tested, different company." },
      ],
    },
    solution: {
      badge: "Test once, share everywhere",
      headline: "Your results should",
      gradientText: "travel with you.",
      description:
        "SkillPass assessments are verified once and recognized by every employer on the platform. Take it once. Your results are permanent, portable, and attached to your profile.",
      features: [
        { title: "8 assessment types", description: "Coding, data analysis, design critique, strategy cases, and more. Covering the assessments employers actually care about." },
        { title: "Permanent results", description: "Once verified, your assessment scores are part of your SkillScore forever. No re-testing required." },
        { title: "Employer-recognized", description: "Companies on SkillPass accept these results in lieu of their own tests. Skip the redundant round." },
        { title: "Retake when you want", description: "Skills grow. You can retake assessments to improve your score, but you're never forced to." },
      ],
    },
    proof: {
      headline: "Hours saved, sanity preserved",
      testimonial: {
        quote: "Last job search I spent 60 hours on take-home tests. This time, I shared my SkillPass profile and three companies skipped their technical rounds entirely. Hired in two weeks.",
        name: "Nina Patel",
        role: "Full-Stack Developer",
        detail: "Saved 50+ hours on her last job search",
      },
      stats: [
        { value: "50+ hrs", label: "Saved per search" },
        { value: "1", label: "Set of assessments needed" },
        { value: "3 in 4", label: "Companies accept results" },
        { value: "Free", label: "For talent" },
      ],
    },
    cta: {
      headline: "Stop re-proving yourself.",
      gradientText: "Prove it once.",
      description: "Take assessments on your schedule. Results stay with you forever. Free for talent.",
      primaryCta: { text: "Start your profile", href: "/signup" },
      secondaryCta: { text: "See assessment types", href: "/assessments" },
    },
  },

  // 229
  {
    slug: "hiring-broken-fixing",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Hiring Is Broken — Here's How We're Fixing It | SkillPass",
      description:
        "Resumes lie. Interviews are inconsistent. References are performative. SkillPass replaces all three with verified proof of ability.",
    },
    hero: {
      badge: "The honest take",
      headline: "Hiring is broken.",
      gradientText: "Everyone knows it.",
      subheadline:
        "Candidates lie on resumes. Interviewers assess charisma, not competence. References say nice things because they were hand-picked to. The whole system is built on weak signals. We're replacing them with verified ones.",
      primaryCta: { text: "See the alternative", href: "/signup" },
      secondaryCta: { text: "How SkillPass works", href: "/how-it-works" },
      trustLine: "Verified data from 4,000+ institutions and 8 assessment types",
    },
    problem: {
      badge: "An honest audit",
      headline: "Every step of hiring is",
      gradientText: "a weak signal.",
      description:
        "Resumes are marketing documents. Phone screens are personality tests. Technical interviews measure anxiety tolerance. Reference checks are theater. The whole pipeline is optimized for confidence, not competence.",
      stats: [
        { value: "85%", label: "Resumes contain exaggerations", description: "Not typos — actual embellishments. Job titles, scope of work, results. Most resumes aren't fully accurate." },
        { value: "4%", label: "Interview accuracy", description: "Unstructured interviews predict job performance only 4% better than random chance. Four percent." },
        { value: "$240K", label: "Cost of a bad senior hire", description: "Six months of salary, lost productivity, team morale damage, and starting the search over." },
      ],
    },
    solution: {
      badge: "Verified signals only",
      headline: "Replace gut feel with",
      gradientText: "verified data.",
      description:
        "SkillPass doesn't ask people to describe their skills. It verifies them. Transcripts are pulled from institutions. Peers are surveyed with structured instruments. Assessments are proctored. Performance is measured.",
      features: [
        { title: "No self-reporting", description: "Every data point in a SkillScore comes from a verified source. Institutions, peers, proctored tests — not the candidate's own claims." },
        { title: "Structured peer reviews", description: "8 specific dimensions, not \"would you work with them again?\" Real signal from real collaborators." },
        { title: "Proctored assessments", description: "8 assessment types that test actual ability. Verified conditions, standardized scoring." },
        { title: "One score, full picture", description: "Academic + Peer + Performance + Assessed = SkillScore 300–850. The whole picture in one verifiable number." },
      ],
    },
    proof: {
      headline: "Companies that switched to verified hiring",
      testimonial: {
        quote: "We used to spend 6 rounds and 3 weeks per candidate. Now we look at SkillScores, do one culture interview, and make an offer. Our quality-of-hire went up while our process got shorter.",
        name: "Lauren Cho",
        role: "Head of People",
        detail: "Growth-stage startup, 200 employees",
      },
      stats: [
        { value: "60%", label: "Faster time to hire" },
        { value: "3x", label: "Hire quality improvement" },
        { value: "$12K", label: "Saved per hire" },
        { value: "82%", label: "Fewer interview rounds" },
      ],
    },
    cta: {
      headline: "Help us fix this.",
      gradientText: "Join the verified side.",
      description: "Whether you're hiring or getting hired, verified beats guessing. Free for talent, powerful for employers.",
      primaryCta: { text: "Get started free", href: "/signup" },
      secondaryCta: { text: "Employer plans", href: "/pricing" },
    },
  },

  // 230
  {
    slug: "what-employers-want",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "What Employers Actually Want — Proof, Not Promises | SkillPass",
      description:
        "Employers don't want more resumes. They want proof someone can do the job. SkillPass gives candidates verified proof and employers verified signal.",
    },
    hero: {
      badge: "What they're really looking for",
      headline: "Employers don't want your resume.",
      gradientText: "They want proof.",
      subheadline:
        "You think they're reading your bullet points. They're not. What they actually want is confidence that you can do the job. A verified SkillScore gives them that confidence — and gives you the advantage of being provably good.",
      primaryCta: { text: "Build your proof", href: "/signup" },
      secondaryCta: { text: "What's in a SkillScore?", href: "/how-it-works" },
      trustLine: "Based on data from 500+ hiring managers surveyed",
    },
    problem: {
      badge: "The disconnect",
      headline: "What you send vs.",
      gradientText: "what they need.",
      description:
        "You spend hours crafting your resume. They spend 7 seconds scanning it. The problem isn't your resume — it's that resumes are the wrong format for proving ability.",
      stats: [
        { value: "7 sec", label: "Time spent on your resume", description: "You spent 4 hours perfecting it. They'll give it less time than it takes to read this sentence." },
        { value: "#1", label: "Thing employers want: proof", description: "In surveys, hiring managers rank \"verified ability\" above experience, education, and references." },
        { value: "91%", label: "Would use a skill score", description: "When asked if they'd use a verified skill score in hiring decisions, 91% of managers said yes." },
      ],
    },
    solution: {
      badge: "Give them what they want",
      headline: "Proof of skill,",
      gradientText: "not a sales pitch.",
      description:
        "A SkillScore is exactly what employers are asking for: verified evidence that you can do the job. Academic records, peer feedback, assessed ability — all in one number they can trust.",
      features: [
        { title: "Verified, not claimed", description: "Every component of your SkillScore is backed by third-party data. No self-reporting, no embellishment." },
        { title: "What they actually assess", description: "The 4 sub-scores map directly to what hiring managers care about: knowledge, collaboration, execution, and raw skill." },
        { title: "Saves them time", description: "Employers using SkillPass skip 2–3 interview rounds for high-scoring candidates. They love that." },
        { title: "Makes you findable", description: "Employers search the SkillPass database. A strong score means they come to you." },
      ],
    },
    proof: {
      headline: "From both sides of the table",
      testimonial: {
        quote: "When a candidate sends me their SkillPass profile instead of a resume, I take the meeting. It tells me more in 10 seconds than a resume does in 10 minutes.",
        name: "Tom Anderson",
        role: "VP Engineering",
        detail: "Fintech company, 500 employees",
      },
      stats: [
        { value: "91%", label: "Managers would use it" },
        { value: "10 sec", label: "To evaluate a profile" },
        { value: "3x", label: "More likely to get a meeting" },
        { value: "Free", label: "For talent to build" },
      ],
    },
    cta: {
      headline: "Give employers what they actually want.",
      gradientText: "Proof.",
      description: "Build your verified profile for free. When employers look at it, they see evidence — not marketing.",
      primaryCta: { text: "Build your profile", href: "/signup" },
      secondaryCta: { text: "See a sample", href: "/demo" },
    },
  },

  // 231
  {
    slug: "skills-worth-more",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Your Skills Are Worth More Than Your Resume Shows | SkillPass",
      description:
        "A resume can't capture what you can actually do. A SkillScore can. Verified, specific, and worth more than bullet points.",
    },
    hero: {
      badge: "Worth more",
      headline: "You're better than",
      gradientText: "your resume makes you look.",
      subheadline:
        "Resumes compress years of skill development into a page of bullet points. They don't show depth, they don't prove claims, and they definitely don't capture what makes you actually good at your job. A SkillScore does.",
      primaryCta: { text: "Show your real value", href: "/signup" },
      secondaryCta: { text: "What's a SkillScore?", href: "/how-it-works" },
      trustLine: "Free for talent — always",
    },
    problem: {
      badge: "Undervalued",
      headline: "Your resume sells you short.",
      gradientText: "Every time.",
      description:
        "You list \"led cross-functional team\" but can't show the peer feedback. You say \"proficient in Python\" but can't prove how proficient. Everything meaningful about your skills is unverifiable on a resume.",
      stats: [
        { value: "1 page", label: "To describe years of growth", description: "One page. That's what you get to convey a decade of learning, building, and collaborating." },
        { value: "0%", label: "Of claims are verified", description: "Anyone can write \"strong communicator\" on a resume. Nobody checks." },
        { value: "43%", label: "Feel underrepresented", description: "Nearly half of professionals feel their resume doesn't accurately reflect their real capabilities." },
      ],
    },
    solution: {
      badge: "Your real worth",
      headline: "Show what a resume",
      gradientText: "can't.",
      description:
        "A SkillScore captures the verified dimensions of your ability — academic depth, peer reputation, performance track record, and tested skills. It's the complete picture.",
      features: [
        { title: "Depth, not bullets", description: "Sub-scores show exactly where your strengths are. Not \"good at data\" — a verified score in data analysis." },
        { title: "Peer-validated reputation", description: "Your colleagues rate you on 8 specific dimensions. That's reputation data a resume can't carry." },
        { title: "Assessment-backed claims", description: "Say you're a strong coder? Your assessment score either confirms it or tells you where to grow." },
        { title: "Always current", description: "Resumes are snapshots. Your SkillScore is a living score that updates as you add new evidence." },
      ],
    },
    proof: {
      headline: "Seen for what they're really worth",
      testimonial: {
        quote: "My resume said 'mid-level engineer.' My SkillScore was 738 — senior range. I shared my profile and got three senior-level interviews in a week. The resume was holding me back.",
        name: "Kevin Moore",
        role: "Software Engineer",
        detail: "Promoted from mid to senior after sharing SkillScore",
      },
      stats: [
        { value: "738", label: "SkillScore" },
        { value: "3", label: "Senior interviews in one week" },
        { value: "$28K", label: "Salary increase" },
        { value: "Free", label: "To build and share" },
      ],
    },
    cta: {
      headline: "Your skills deserve a better format.",
      gradientText: "This is it.",
      description: "A verified SkillScore shows employers what a resume never could. Free to build, free to share.",
      primaryCta: { text: "Show your real value", href: "/signup" },
      secondaryCta: { text: "See how scoring works", href: "/how-it-works" },
    },
  },

  // 232
  {
    slug: "past-resumes",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Move Past Resumes — The Hiring World Already Has | SkillPass",
      description:
        "Resumes were designed for a world without data. We have data now. SkillPass replaces the resume with a verified, portable SkillScore.",
    },
    hero: {
      badge: "Post-resume era",
      headline: "Resumes were invented in",
      gradientText: "1482.",
      subheadline:
        "Leonardo da Vinci wrote the first known resume over 500 years ago. It was a letter describing his skills. We're still basically doing the same thing — writing letters about ourselves and hoping someone believes us. It's 2026. We can do better.",
      primaryCta: { text: "Move past the resume", href: "/signup" },
      secondaryCta: { text: "What replaces it?", href: "/how-it-works" },
      trustLine: "Verified by data, not by claims",
    },
    problem: {
      badge: "544 years old",
      headline: "Still writing letters about yourself?",
      gradientText: "Really?",
      description:
        "We've reinvented how we communicate, shop, date, and bank. But the primary way we prove professional ability is still a self-authored document that no one verifies. That's absurd.",
      stats: [
        { value: "1482", label: "Year the resume was invented", description: "Da Vinci wrote his to the Duke of Milan. You're still writing yours to recruiters. Not much has changed." },
        { value: "0", label: "Verification built in", description: "A resume has zero built-in verification. It's a trust-me document in a verify-everything world." },
        { value: "78%", label: "Contain inaccuracies", description: "Research shows the vast majority of resumes have at least one material inaccuracy. The format invites it." },
      ],
    },
    solution: {
      badge: "The replacement",
      headline: "From self-reported to",
      gradientText: "self-evident.",
      description:
        "A SkillScore doesn't ask you to describe your skills. It measures them from verified sources — institutional records, structured peer reviews, proctored assessments, and performance data.",
      features: [
        { title: "Institution-verified academics", description: "Your transcript is pulled directly from your school. No PDF uploads, no self-reported GPAs." },
        { title: "Structured peer data", description: "References that measure 8 specific dimensions, collected from verified professional relationships." },
        { title: "Proctored ability testing", description: "8 assessment types administered under verified conditions. Actual measurement, not self-description." },
        { title: "One link replaces the resume", description: "skillpass.io/you is your profile. Verified, rich, always current. One link does what a resume tries to." },
      ],
    },
    proof: {
      headline: "The post-resume generation",
      testimonial: {
        quote: "I stopped sending resumes entirely. I send my SkillPass link. The response rate went from about 5% to over 30%. Turns out, verified proof gets more attention than a PDF.",
        name: "Amy Zhang",
        role: "Product Designer",
        detail: "6x improvement in response rate",
      },
      stats: [
        { value: "6x", label: "Better response rate" },
        { value: "1 link", label: "Replaces the resume" },
        { value: "0", label: "Self-reported claims" },
        { value: "Free", label: "To create" },
      ],
    },
    cta: {
      headline: "The resume had a good run.",
      gradientText: "544 years is enough.",
      description: "Join the post-resume generation. Build a verified SkillScore that replaces self-reported claims with self-evident proof.",
      primaryCta: { text: "Build your profile", href: "/signup" },
      secondaryCta: { text: "See the difference", href: "/demo" },
    },
  },

  // 233
  {
    slug: "one-number",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "One Number That Tells Employers Everything | SkillPass",
      description:
        "Your SkillScore: 300–850, verified from 4 sources, tells employers exactly how capable you are. No resume needed.",
    },
    hero: {
      badge: "Simplicity",
      headline: "What if your entire professional ability fit into",
      gradientText: "one number?",
      subheadline:
        "Not a vague number. A specific, verified, 300–850 score built from your real academic record, real peer feedback, real assessments, and real performance data. Employers look at it and immediately know where you stand.",
      primaryCta: { text: "Find your number", href: "/signup" },
      secondaryCta: { text: "How it's calculated", href: "/how-it-works" },
      trustLine: "4 sub-scores, verified data sources, no self-reporting",
    },
    problem: {
      badge: "Too much noise",
      headline: "Resumes, portfolios, cover letters, references,",
      gradientText: "and nobody reads any of it.",
      description:
        "You produce all this material — resume, portfolio, LinkedIn, cover letter, reference list — and a recruiter spends 7 seconds deciding if you're worth a call. All that effort for a glance.",
      stats: [
        { value: "5+", label: "Documents per application", description: "Resume, cover letter, LinkedIn, portfolio, references. Each one takes hours. Together, they're overwhelming." },
        { value: "7 sec", label: "Spent on your application", description: "All those documents, all that work, and the average recruiter gives it seven seconds of attention." },
        { value: "23%", label: "Of materials actually read", description: "Less than a quarter of your application materials get read beyond a quick scan. The rest is waste." },
      ],
    },
    solution: {
      badge: "One number, full story",
      headline: "Simple for employers.",
      gradientText: "Rich for you.",
      description:
        "Your SkillScore is one number: 300–850. But behind it are four detailed sub-scores that employers can drill into. It's as simple as a credit score on the surface, and as deep as they need underneath.",
      features: [
        { title: "Academic sub-score", description: "Verified transcripts from 4,000+ institutions. Shows academic depth and rigor, not just a GPA." },
        { title: "Peer Signal sub-score", description: "Structured feedback from colleagues across 8 dimensions. Shows how you work, not just what you know." },
        { title: "Performance sub-score", description: "Real-world output and contribution data. Shows what you've actually delivered." },
        { title: "Assessed Ability sub-score", description: "Proctored tests in your field. Shows current skill level, verified under standardized conditions." },
      ],
    },
    proof: {
      headline: "One number, real results",
      testimonial: {
        quote: "I used to agonize over my resume for every application. Now I just share my 729 SkillScore. Employers drill into the sub-scores if they want details. It's so much simpler and it works better.",
        name: "Jordan Hayes",
        role: "Data Engineer",
        detail: "Switched from resumes to SkillPass entirely",
      },
      stats: [
        { value: "1", label: "Number to share" },
        { value: "4", label: "Detailed sub-scores behind it" },
        { value: "729", label: "Jordan's SkillScore" },
        { value: "5x", label: "Faster employer evaluation" },
      ],
    },
    cta: {
      headline: "Find your number.",
      gradientText: "Share it everywhere.",
      description: "One verified score that tells employers what they need to know. Free to build, free to share, yours forever.",
      primaryCta: { text: "Get your SkillScore", href: "/signup" },
      secondaryCta: { text: "See a sample profile", href: "/demo" },
    },
  },

  // 234
  {
    slug: "free-preview",
    category: "awareness",
    audience: "all",
    funnel: "tofu",
    seo: {
      title: "Free Preview — See What Your SkillScore Could Be | SkillPass",
      description:
        "Curious about your SkillScore? Get a free preview estimate based on your background. No commitment, no credit card.",
    },
    hero: {
      badge: "Free preview",
      headline: "Curious what you'd score?",
      gradientText: "Find out in 2 minutes.",
      subheadline:
        "Answer a few questions about your background and we'll give you a free SkillScore estimate. It's not your official score — that requires verified data — but it'll give you a solid idea of where you'd land.",
      primaryCta: { text: "Get my estimate", href: "/estimate" },
      secondaryCta: { text: "How official scoring works", href: "/how-it-works" },
      trustLine: "No signup required — just answer a few questions",
    },
    problem: {
      badge: "The question",
      headline: "You're wondering:",
      gradientText: "\"Where would I even land?\"",
      description:
        "Before you invest time building a full profile, you want to know if it's worth it. Fair enough. That's why we built the estimator — so you can see your range before committing to anything.",
      stats: [
        { value: "2 min", label: "To get your estimate", description: "Quick questions about education, experience, and field. That's it. No deep assessment yet." },
        { value: "±40 pts", label: "Estimate accuracy", description: "The estimate lands within 40 points of your official score for 80% of users. Pretty close." },
        { value: "0", label: "Strings attached", description: "No signup. No email required. No credit card. Just a quick preview of where you'd land." },
      ],
    },
    solution: {
      badge: "Try before you commit",
      headline: "A preview that's",
      gradientText: "actually useful.",
      description:
        "Our estimator uses your self-reported background to predict your SkillScore range. Then, if you like what you see, you can build your official profile with verified data for a precise score.",
      features: [
        { title: "Quick background questions", description: "Institution, field, years of experience, rough self-assessment. Takes 2 minutes, not 20." },
        { title: "Instant range estimate", description: "See your predicted SkillScore range immediately. No waiting, no emails." },
        { title: "Comparison to your peers", description: "See how your estimate compares to others in your field and experience level." },
        { title: "Clear path to official score", description: "If you want the real number, we show you exactly what verified data to connect for your official SkillScore." },
      ],
    },
    proof: {
      headline: "From estimate to official",
      testimonial: {
        quote: "The estimate said 680–720. My official score was 709. Pretty spot-on. But more importantly, seeing that number motivated me to build the full profile. Glad I did.",
        name: "Chris Reyes",
        role: "Frontend Developer",
        detail: "Estimated 680–720, official score 709",
      },
      stats: [
        { value: "80%", label: "Estimates within 40 points" },
        { value: "68%", label: "Go on to build full profile" },
        { value: "2 min", label: "Time to estimate" },
        { value: "$0", label: "Cost" },
      ],
    },
    cta: {
      headline: "Two minutes. Zero commitment.",
      gradientText: "See your range.",
      description: "Quick estimate, no signup required. If you like the number, build the real thing for free.",
      primaryCta: { text: "Get my estimate", href: "/estimate" },
      secondaryCta: { text: "Skip to full profile", href: "/signup" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CONSIDERATION FUNNEL (235–244)
  // ═══════════════════════════════════════════════════════════════

  // 235
  {
    slug: "compare-traditional-screening",
    category: "consideration",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass vs Traditional Screening — Side-by-Side Comparison | SkillPass",
      description:
        "Compare SkillPass verified scoring against traditional resume screening, phone screens, and reference checks. See the data.",
    },
    hero: {
      badge: "Head-to-head",
      headline: "Your current process vs.",
      gradientText: "verified scoring.",
      subheadline:
        "You've got resume screening, phone screens, technical interviews, and reference checks. We've got verified SkillScores. Let's compare them honestly and see which gives you better signal per hour invested.",
      primaryCta: { text: "Try verified screening", href: "/employers/signup" },
      secondaryCta: { text: "See the comparison", href: "#comparison" },
      trustLine: "Based on data from 500+ hiring pipelines",
    },
    problem: {
      badge: "Your current process",
      headline: "6 steps, 40 hours,",
      gradientText: "and you're still guessing.",
      description:
        "The typical hiring pipeline burns dozens of hours per hire across multiple stakeholders. After all that investment, most hiring managers still say they're not confident in the decision.",
      stats: [
        { value: "40 hrs", label: "Per hire (avg.)", description: "Recruiter time, interviewer time, coordinator time, reference calls. It adds up fast." },
        { value: "6", label: "Process steps", description: "Resume screen, phone screen, technical, onsite, reference check, decision. Each one a bottleneck." },
        { value: "52%", label: "Manager confidence", description: "After all those steps, barely half of hiring managers feel confident they picked the right person." },
      ],
    },
    solution: {
      badge: "The SkillPass process",
      headline: "Fewer steps.",
      gradientText: "Better signal.",
      description:
        "Replace 3–4 low-signal steps with one high-signal data point. SkillScores give you verified information upfront, so you spend interview time on fit and culture — not on testing whether someone can actually do the job.",
      features: [
        { title: "Replace resume screening", description: "Sort by SkillScore instead of scanning resumes. Verified data beats self-reported claims." },
        { title: "Skip phone screens", description: "The SkillScore tells you more than a 30-minute phone call. Go straight to meaningful conversations." },
        { title: "Reduce technical rounds", description: "High-scoring candidates have already proven ability through assessments. One technical deep-dive, not three." },
        { title: "Skip reference theater", description: "Peer Signal sub-scores are built from structured, verified reviews — not hand-picked references." },
      ],
    },
    proof: {
      headline: "Real pipeline comparison",
      testimonial: {
        quote: "We A/B tested our old process against SkillPass-first for 3 months. SkillPass pipeline: 60% faster, 40% cheaper, and the 90-day retention was actually better. We switched fully.",
        name: "Monica Vasquez",
        role: "Director of Talent",
        detail: "Enterprise SaaS, 800 employees",
      },
      stats: [
        { value: "60%", label: "Faster" },
        { value: "40%", label: "Cheaper" },
        { value: "3x", label: "Better quality signal" },
        { value: "92%", label: "90-day retention" },
      ],
    },
    cta: {
      headline: "See the difference in your own pipeline.",
      gradientText: "Start a pilot.",
      description: "Run SkillPass alongside your current process for 30 days. Compare the results yourself.",
      primaryCta: { text: "Start free pilot", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
    },
    comparison: {
      headline: "SkillPass vs. Traditional Screening",
      competitor: "Traditional Process",
      rows: [
        { feature: "Time per hire", us: "16 hours avg.", them: "40 hours avg." },
        { feature: "Resume screening", us: "Replaced by SkillScore", them: "Manual, 7 sec/resume" },
        { feature: "Verification built-in", us: "Yes", them: "No" },
        { feature: "Bias resistance", us: "Data-driven scoring", them: "Subjective at every step" },
        { feature: "Candidate experience", us: "No redundant tests", them: "6-round gauntlet" },
        { feature: "Cost per hire", us: "$3,200 avg.", them: "$15,000+ avg." },
        { feature: "Predictive accuracy", us: "Validated against outcomes", them: "4% above random (unstructured)" },
      ],
    },
  },

  // 236
  {
    slug: "hiring-roi-calculator",
    category: "consideration",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Hiring ROI Calculator — See Your Savings With SkillPass | SkillPass",
      description:
        "Calculate how much time and money you'd save by switching to SkillPass verified hiring. Enter your numbers, see your ROI.",
    },
    hero: {
      badge: "Calculate your ROI",
      headline: "How much is your hiring process",
      gradientText: "actually costing you?",
      subheadline:
        "Plug in your numbers — hires per quarter, interview hours, cost per hire — and we'll show you exactly what SkillPass would save. Most teams are surprised by how much they're spending on low-signal steps.",
      primaryCta: { text: "Calculate my ROI", href: "/tools/roi-calculator" },
      secondaryCta: { text: "See average results", href: "#proof" },
      trustLine: "Based on real data from 500+ SkillPass customers",
    },
    problem: {
      badge: "The hidden costs",
      headline: "You know hiring is expensive.",
      gradientText: "You don't know how expensive.",
      description:
        "Most companies track cost-per-hire as a single number. They don't break down the hours spent on phone screens that go nowhere, interviews with unqualified candidates, and reference checks that tell you nothing.",
      stats: [
        { value: "$15K+", label: "Average cost per hire", description: "That's the industry average. For technical roles, it's often $20K–$30K when you count everyone's time." },
        { value: "62%", label: "Spent on low-signal steps", description: "Most of your hiring budget goes to steps that barely predict job performance. That's recoverable money." },
        { value: "23 hrs", label: "Engineering time per hire", description: "Your most expensive employees are spending their most productive hours interviewing. That has a cost." },
      ],
    },
    solution: {
      badge: "Know your numbers",
      headline: "Enter your inputs.",
      gradientText: "See your savings.",
      description:
        "Our ROI calculator uses your real numbers — team size, hires per quarter, current cost per hire, interview hours — and shows you a specific dollar figure for what SkillPass would save.",
      features: [
        { title: "Your numbers, not averages", description: "Enter your actual hiring volume, costs, and time investment. The output is specific to your team." },
        { title: "Time savings breakdown", description: "See exactly which steps you'd eliminate or reduce: screening, phone screens, redundant technicals." },
        { title: "Dollar impact", description: "Convert saved hours to dollars using your team's actual cost rates. The savings are usually larger than expected." },
        { title: "Comparison to your plan", description: "We show the ROI against SkillPass pricing, so you see net savings from day one." },
      ],
    },
    proof: {
      headline: "Average ROI across customers",
      testimonial: {
        quote: "The calculator said we'd save $180K/year. After 6 months on SkillPass, we're actually on pace to save $210K. The engineering time savings alone pay for the subscription 4x over.",
        name: "Derek Chang",
        role: "CFO",
        detail: "Growth-stage company, 300 employees",
      },
      stats: [
        { value: "$12K", label: "Avg. savings per hire" },
        { value: "4.2x", label: "Average ROI" },
        { value: "60%", label: "Less time per hire" },
        { value: "90 days", label: "Avg. payback period" },
      ],
    },
    cta: {
      headline: "Run your numbers.",
      gradientText: "See your savings.",
      description: "Takes 2 minutes. Enter your hiring data, get a specific ROI projection. No signup required.",
      primaryCta: { text: "Calculate my ROI", href: "/tools/roi-calculator" },
      secondaryCta: { text: "Talk to sales", href: "/contact" },
    },
  },

  // 237
  {
    slug: "sample-skillscore",
    category: "consideration",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Sample SkillScore Report — See Exactly What You Get | SkillPass",
      description:
        "Explore a real sample SkillScore profile. See sub-scores, peer reviews, assessment results, and how employers view candidates.",
    },
    hero: {
      badge: "See for yourself",
      headline: "Don't take our word for it.",
      gradientText: "Look at a real profile.",
      subheadline:
        "We could describe what a SkillScore profile looks like all day. Or you could just look at one. Here's a sample profile showing exactly what you'd get: overall score, sub-scores, peer reviews, assessments, everything.",
      primaryCta: { text: "View sample profile", href: "/sample" },
      secondaryCta: { text: "Build your own", href: "/signup" },
      trustLine: "This is what employers see when they view your profile",
    },
    problem: {
      badge: "You want specifics",
      headline: "\"What does a SkillScore actually",
      gradientText: "look like?\"",
      description:
        "Fair question. Abstract descriptions of scoring systems aren't convincing. You want to see the actual output — the profile, the sub-scores, the breakdown. So let's show you.",
      stats: [
        { value: "1", label: "Overall score (300–850)", description: "One headline number that summarizes your verified professional ability. Easy to compare, hard to fake." },
        { value: "4", label: "Detailed sub-scores", description: "Academic, Peer Signal, Performance, and Assessed Ability. Each one drillable to see the underlying data." },
        { value: "∞", label: "Evidence behind it", description: "Transcripts, reference responses, assessment results, performance metrics — all accessible from the profile." },
      ],
    },
    solution: {
      badge: "What you'll see",
      headline: "A sample profile,",
      gradientText: "fully explored.",
      description:
        "Our sample shows a real SkillScore profile (anonymized) with all four sub-scores, peer reference summaries, assessment results, and the overall 300–850 score. Explore it like an employer would.",
      features: [
        { title: "Overall SkillScore", description: "The headline number — 300 to 850 — with percentile ranking against others in the same field." },
        { title: "Sub-score breakdown", description: "See how Academic, Peer Signal, Performance, and Assessed Ability each contribute to the total." },
        { title: "Peer reference details", description: "Anonymized summaries of structured peer reviews across 8 dimensions. Real feedback, not platitudes." },
        { title: "Assessment results", description: "Specific scores on completed assessments, with percentile comparisons to other test-takers." },
      ],
    },
    proof: {
      headline: "What people say after seeing a profile",
      testimonial: {
        quote: "I was skeptical until I saw a sample profile. The depth is impressive — it's not just a number, it's a full picture. I immediately wanted to build mine.",
        name: "Taylor Scott",
        role: "UX Researcher",
        detail: "Built profile same day after seeing sample",
      },
      stats: [
        { value: "74%", label: "Build a profile after viewing sample" },
        { value: "4.8/5", label: "User rating of profile depth" },
        { value: "< 5 min", label: "Time employers spend evaluating" },
        { value: "Free", label: "To view and build" },
      ],
    },
    cta: {
      headline: "See it for yourself.",
      gradientText: "Then build your own.",
      description: "Browse the sample profile and see what employers see. When you're ready, build your own for free.",
      primaryCta: { text: "View sample profile", href: "/sample" },
      secondaryCta: { text: "Create my profile", href: "/signup" },
    },
  },

  // 238
  {
    slug: "product-demo",
    category: "consideration",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass Product Demo — See the Platform in Action | SkillPass",
      description:
        "Watch SkillPass in action: candidate search, SkillScore filtering, ATS integration, and team analytics. 5-minute interactive demo.",
    },
    hero: {
      badge: "Interactive demo",
      headline: "See it work.",
      gradientText: "No sales call needed.",
      subheadline:
        "We built a self-serve demo so you can explore SkillPass at your own pace. Search candidates, filter by SkillScore, drill into profiles, and see ATS integration — all without talking to anyone.",
      primaryCta: { text: "Launch demo", href: "/demo" },
      secondaryCta: { text: "Prefer a live walkthrough?", href: "/contact" },
      trustLine: "5-minute interactive demo — no signup required",
    },
    problem: {
      badge: "We get it",
      headline: "You want to see it",
      gradientText: "before you commit.",
      description:
        "Demos behind sales calls are frustrating. You shouldn't have to sit through a 45-minute pitch to see if a product does what you need. So we made the demo self-serve.",
      stats: [
        { value: "5 min", label: "To see everything", description: "The full demo takes 5 minutes. Search, filter, drill in, integrate. All the key workflows." },
        { value: "0", label: "Sales calls required", description: "No emails, no scheduling, no \"let me loop in my colleague.\" Just click and explore." },
        { value: "100%", label: "Real functionality", description: "This isn't a slideshow. It's the actual product with sample data. What you see is what you get." },
      ],
    },
    solution: {
      badge: "What the demo covers",
      headline: "Every key workflow.",
      gradientText: "Your pace.",
      description:
        "The demo walks through candidate search, SkillScore-based filtering, individual profile deep-dives, ATS integration, and team-level analytics. You drive.",
      features: [
        { title: "Candidate search", description: "Search by role, location, score range, and sub-score emphasis. See how fast you can build a shortlist." },
        { title: "Profile deep-dive", description: "Click into a candidate's full SkillScore profile. Sub-scores, peer reviews, assessments — all the detail." },
        { title: "ATS integration", description: "See how SkillPass data flows into your existing ATS. Greenhouse, Lever, Workday — one-click setup." },
        { title: "Team analytics", description: "Hiring funnel metrics, quality-of-hire tracking, and team composition analysis. All built in." },
      ],
    },
    proof: {
      headline: "After the demo",
      testimonial: {
        quote: "I was going to schedule a sales call, but tried the self-serve demo first. Spent 5 minutes in it, signed up for a pilot immediately. No call needed.",
        name: "Steven Park",
        role: "Recruiting Manager",
        detail: "Signed up directly after self-serve demo",
      },
      stats: [
        { value: "5 min", label: "Average demo time" },
        { value: "41%", label: "Start a pilot same day" },
        { value: "4.7/5", label: "Demo satisfaction" },
        { value: "0", label: "Sales calls needed" },
      ],
    },
    cta: {
      headline: "Five minutes. Your pace.",
      gradientText: "See it work.",
      description: "Launch the interactive demo and explore SkillPass for yourself. No signup, no sales call, no commitment.",
      primaryCta: { text: "Launch demo", href: "/demo" },
      secondaryCta: { text: "Talk to a human instead", href: "/contact" },
    },
  },

  // 239
  {
    slug: "case-study-company",
    category: "consideration",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Case Study: How a 300-Person Company Cut Time-to-Hire by 58% | SkillPass",
      description:
        "See how a growth-stage company used SkillPass to cut hiring time by 58%, save $14K per hire, and improve 90-day retention to 94%.",
    },
    hero: {
      badge: "Case study",
      headline: "58% faster hiring.",
      gradientText: "$14K saved per hire.",
      subheadline:
        "When a 300-person SaaS company switched to SkillPass-first hiring, they didn't just save time. They saved money, improved quality, and freed up 1,200 engineering hours per year. Here's exactly how.",
      primaryCta: { text: "Get similar results", href: "/employers/signup" },
      secondaryCta: { text: "Read the full study", href: "/case-studies/growth-saas" },
      trustLine: "Real data from a real company — anonymized with permission",
    },
    problem: {
      badge: "Before SkillPass",
      headline: "Hiring 40 engineers a year",
      gradientText: "was consuming the company.",
      description:
        "This 300-person SaaS company needed to hire 40 engineers annually to sustain growth. Their 6-round process took 38 days average and burned 30+ engineering hours per hire. It wasn't sustainable.",
      stats: [
        { value: "38 days", label: "Average time to hire", description: "From application to offer. Candidates were dropping out mid-process for faster-moving competitors." },
        { value: "30 hrs", label: "Engineering time per hire", description: "Senior engineers spending 30 hours each hire meant 1,200 hours/year not building product." },
        { value: "$18K", label: "Cost per hire", description: "Recruiter time, engineer time, tools, and agency fees. For 40 hires, that's $720K/year on hiring alone." },
      ],
    },
    solution: {
      badge: "The SkillPass approach",
      headline: "They replaced 3 steps",
      gradientText: "with one data point.",
      description:
        "Instead of resume screening + phone screen + first technical round, they used SkillScore filtering to build shortlists. Remaining interviews focused on culture and team fit, not skill validation.",
      features: [
        { title: "SkillScore-first filtering", description: "Set minimum score thresholds by role. 2,000 applicants filtered to 80 candidates in minutes, not weeks." },
        { title: "Sub-score matching", description: "Weighted sub-scores by role: Assessed Ability for IC roles, Peer Signal for lead roles." },
        { title: "Interviews for fit only", description: "With skills already verified, interviews became 45-minute culture conversations. One round, not three." },
        { title: "ATS integration", description: "SkillScores flowed directly into Greenhouse. Recruiters never left their existing workflow." },
      ],
    },
    proof: {
      headline: "After 6 months on SkillPass",
      testimonial: {
        quote: "We got back 1,200 engineering hours in the first year. That's basically 0.6 FTEs worth of building time we were losing to interviews. And our hire quality actually went up.",
        name: "Jason Wu",
        role: "CTO",
        detail: "300-person SaaS company",
      },
      stats: [
        { value: "58%", label: "Faster time to hire" },
        { value: "$14K", label: "Saved per hire" },
        { value: "94%", label: "90-day retention" },
        { value: "1,200 hrs", label: "Engineering time saved/year" },
      ],
    },
    cta: {
      headline: "Want similar numbers?",
      gradientText: "Start a pilot.",
      description: "Run SkillPass alongside your current process for 30 days. Measure the difference yourself.",
      primaryCta: { text: "Start free pilot", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
    },
  },

  // 240
  {
    slug: "case-study-student",
    category: "consideration",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Case Study: From 3.2 GPA State School to $130K Offer | SkillPass",
      description:
        "How a state school CS grad used SkillPass to get callbacks from companies that previously ignored her resume. Full story.",
    },
    hero: {
      badge: "Case study",
      headline: "3.2 GPA. State school.",
      gradientText: "$130K starting offer.",
      subheadline:
        "Amira graduated with a 3.2 GPA from a state university. Her resume got ignored by every top company. Then she built a SkillScore and everything changed. Here's her actual story.",
      primaryCta: { text: "Build your SkillScore free", href: "/signup" },
      secondaryCta: { text: "Read Amira's full story", href: "/case-studies/amira" },
      trustLine: "Real candidate, real results — shared with permission",
    },
    problem: {
      badge: "Amira's situation",
      headline: "The resume filter",
      gradientText: "kept shutting her out.",
      description:
        "Amira was a strong CS student who chose a state school for financial reasons. She knew her stuff — TA'd upper-level courses, built real projects, got great feedback from professors. But recruiters saw the school name and GPA and moved on.",
      stats: [
        { value: "47", label: "Applications sent", description: "Forty-seven applications to tech companies. Not spray-and-pray — targeted, tailored applications." },
        { value: "3", label: "Responses received", description: "Out of 47 applications, she heard back from three. Two were rejections. One ghosted her." },
        { value: "0", label: "Interviews", description: "Zero interviews from 47 applications. Her resume wasn't even getting past the initial screen." },
      ],
    },
    solution: {
      badge: "What changed",
      headline: "She built a SkillScore.",
      gradientText: "The numbers told a different story.",
      description:
        "Amira created her SkillPass profile in an afternoon. Her verified transcript, TA peer reviews, and assessment scores combined into a SkillScore of 731 — well above the average for new CS grads.",
      features: [
        { title: "Academic sub-score: strong", description: "Her transcript showed consistent A's in upper-level systems and algorithms courses. The 3.2 GPA was dragged down by gen eds, not CS." },
        { title: "Peer Signal: exceptional", description: "14 peer reviews from students she TA'd and project partners. Average rating: 4.7/5 across all dimensions." },
        { title: "Assessed Ability: top 12%", description: "Coding assessments put her in the top 12% of CS graduates nationally. Her resume never showed this." },
        { title: "SkillScore: 731", description: "Combined, her verified profile scored 731 — above the median for Stanford CS grads in the same cohort." },
      ],
    },
    proof: {
      headline: "The outcome",
      testimonial: {
        quote: "I sent my SkillPass link instead of my resume to 15 companies. I got 9 responses and 6 interviews. One company told me they'd have filtered me out based on my resume alone. I got the offer.",
        name: "Amira Khalil",
        role: "Software Engineer",
        detail: "State school, 3.2 GPA, now at $130K",
      },
      stats: [
        { value: "731", label: "SkillScore" },
        { value: "60%", label: "Response rate (was 6%)" },
        { value: "$130K", label: "Starting salary" },
        { value: "10x", label: "More interviews" },
      ],
    },
    cta: {
      headline: "Your resume isn't the full picture.",
      gradientText: "Your SkillScore is.",
      description: "If you're being filtered out by surface-level credentials, prove your real ability with a verified SkillScore. Free forever.",
      primaryCta: { text: "Build your profile", href: "/signup" },
      secondaryCta: { text: "See how scoring works", href: "/how-it-works" },
    },
  },

  // 241
  {
    slug: "security-privacy",
    category: "consideration",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Security & Privacy — How SkillPass Protects Your Data | SkillPass",
      description:
        "SOC 2 Type II certified. End-to-end encryption. You own your data. See exactly how SkillPass handles security and privacy.",
    },
    hero: {
      badge: "Security & Privacy",
      headline: "Your data. Your control.",
      gradientText: "Our responsibility.",
      subheadline:
        "We're asking you to trust us with sensitive career data — transcripts, peer reviews, assessment scores. Here's exactly how we protect it, who can see it, and how you stay in control.",
      primaryCta: { text: "Read our security docs", href: "/security" },
      secondaryCta: { text: "Get started", href: "/signup" },
      trustLine: "SOC 2 Type II certified — annual audit",
    },
    problem: {
      badge: "Legitimate concern",
      headline: "\"Can I trust you with",
      gradientText: "my career data?\"",
      description:
        "You should be skeptical. Career data is personal and sensitive. Before you share your transcripts, peer reviews, and assessment scores with any platform, you deserve to know exactly what happens to that data.",
      stats: [
        { value: "100%", label: "Your data, your control", description: "You decide what's visible, who sees it, and when. You can delete everything at any time." },
        { value: "0", label: "Data sold to third parties", description: "We never sell your data. Not to advertisers, not to data brokers, not to anyone. Period." },
        { value: "SOC 2", label: "Type II certified", description: "Annual independent audit of our security controls. Not a self-assessment — a real audit." },
      ],
    },
    solution: {
      badge: "How we protect you",
      headline: "Security isn't a feature.",
      gradientText: "It's the foundation.",
      description:
        "End-to-end encryption, SOC 2 Type II compliance, granular access controls, and a privacy-first architecture. We built security in from day one, not bolted it on after.",
      features: [
        { title: "End-to-end encryption", description: "Data encrypted in transit (TLS 1.3) and at rest (AES-256). Your information is protected at every point." },
        { title: "Granular visibility controls", description: "Choose what's public, what's shared with specific employers, and what's private. You set the rules." },
        { title: "SOC 2 Type II", description: "Annual independent audit covering security, availability, processing integrity, confidentiality, and privacy." },
        { title: "Right to delete", description: "Request full data deletion at any time. We remove everything — not just your profile, but all underlying data." },
      ],
    },
    proof: {
      headline: "Trusted by security-conscious teams",
      testimonial: {
        quote: "Our security team reviewed SkillPass before we onboarded. SOC 2 Type II, clean pen test results, and their data handling policies were among the best we've reviewed for HR tools.",
        name: "Ryan O'Brien",
        role: "CISO",
        detail: "Financial services company, 1,500 employees",
      },
      stats: [
        { value: "SOC 2", label: "Type II certified" },
        { value: "AES-256", label: "Encryption at rest" },
        { value: "TLS 1.3", label: "Encryption in transit" },
        { value: "0", label: "Data breaches" },
      ],
    },
    cta: {
      headline: "We take this seriously.",
      gradientText: "So should you.",
      description: "Read our full security documentation, review our SOC 2 report, or ask our team anything. Transparency is the point.",
      primaryCta: { text: "Read security docs", href: "/security" },
      secondaryCta: { text: "Ask a question", href: "/contact" },
    },
  },

  // 242
  {
    slug: "integration-partners",
    category: "consideration",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Integration Partners — SkillPass Works With Your Stack | SkillPass",
      description:
        "SkillPass integrates with Greenhouse, Lever, Workday, LinkedIn, and more. One-click setup, no engineering required.",
    },
    hero: {
      badge: "Integrations",
      headline: "SkillPass fits into",
      gradientText: "your existing stack.",
      subheadline:
        "We don't ask you to change how you work. SkillPass integrates with the ATS, HRIS, and tools you already use. Greenhouse, Lever, Workday, LinkedIn — one-click connections, no engineering required.",
      primaryCta: { text: "See all integrations", href: "/integrations" },
      secondaryCta: { text: "Start a pilot", href: "/employers/signup" },
      trustLine: "20+ integrations — more added monthly",
    },
    problem: {
      badge: "The real concern",
      headline: "\"We're not ripping out",
      gradientText: "our ATS for this.\"",
      description:
        "Nobody wants to adopt a tool that forces them to change their workflow. Your team has a process, an ATS, and a set of tools they're used to. Any new platform needs to slot in, not take over.",
      stats: [
        { value: "0", label: "Workflows to change", description: "SkillPass adds data to your existing process. Your recruiters stay in the tools they know." },
        { value: "< 1 hr", label: "Integration setup", description: "Most integrations are one-click OAuth connections. No engineering tickets, no API keys to manage." },
        { value: "20+", label: "Supported integrations", description: "ATS, HRIS, communication tools, and job boards. If you use it for hiring, we probably connect to it." },
      ],
    },
    solution: {
      badge: "Plug and play",
      headline: "One-click connections.",
      gradientText: "Zero engineering.",
      description:
        "Connect your ATS and SkillScores appear on candidate profiles automatically. Recruiters see verified scores without leaving their existing workflow.",
      features: [
        { title: "ATS integration", description: "Greenhouse, Lever, Ashby, Workday Recruiting — SkillScores appear directly on candidate cards in your ATS." },
        { title: "LinkedIn enrichment", description: "Match candidates' LinkedIn profiles to their SkillPass data automatically when they apply." },
        { title: "HRIS sync", description: "For internal mobility, sync employee SkillScores with Workday, BambooHR, or Rippling." },
        { title: "API for custom builds", description: "Building your own tools? Our REST API gives you full access to SkillScore data programmatically." },
      ],
    },
    proof: {
      headline: "Teams that plugged right in",
      testimonial: {
        quote: "Connecting to Greenhouse took about 10 minutes. Now every candidate who has a SkillPass profile shows their score right on the candidate card. My recruiters didn't have to learn anything new.",
        name: "Priya Sharma",
        role: "Head of Recruiting",
        detail: "Mid-market tech company, 450 employees",
      },
      stats: [
        { value: "10 min", label: "Avg. setup time" },
        { value: "20+", label: "Integrations available" },
        { value: "0", label: "Engineering hours needed" },
        { value: "99.9%", label: "Integration uptime" },
      ],
    },
    cta: {
      headline: "It works with what you've got.",
      gradientText: "Connect in minutes.",
      description: "Find your ATS, HRIS, or tool in our integration directory. One-click setup, no engineering required.",
      primaryCta: { text: "Browse integrations", href: "/integrations" },
      secondaryCta: { text: "Start a pilot", href: "/employers/signup" },
    },
  },

  // 243
  {
    slug: "success-employers",
    category: "consideration",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Employer Success Stories — Real Results With SkillPass | SkillPass",
      description:
        "See how companies from startups to enterprises use SkillPass to hire faster, cheaper, and with higher quality. Real numbers, real teams.",
    },
    hero: {
      badge: "Success stories",
      headline: "Companies that hire differently.",
      gradientText: "And better.",
      subheadline:
        "These aren't vanity metrics. These are real companies sharing real numbers — time saved, money saved, quality improved. See what SkillPass looks like in practice across different team sizes and industries.",
      primaryCta: { text: "Get similar results", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
      trustLine: "Results from startups, mid-market, and enterprise teams",
    },
    problem: {
      badge: "Before SkillPass",
      headline: "Every company had the same",
      gradientText: "hiring headaches.",
      description:
        "Too many applications, not enough signal. Too many interview rounds, not enough confidence. Too much money spent, too many bad hires. The specifics differ, but the pattern is universal.",
      stats: [
        { value: "40+ hrs", label: "Per hire", description: "Before SkillPass, these companies averaged 40+ hours of team time per hire. Mostly on low-value screening." },
        { value: "1 in 4", label: "Bad hires", description: "One in four hires wasn't working out within 6 months. That's expensive and demoralizing." },
        { value: "$18K", label: "Cost per hire", description: "Across these companies, hiring costs averaged $18K per position filled. Much of it was recoverable." },
      ],
    },
    solution: {
      badge: "After SkillPass",
      headline: "Better numbers",
      gradientText: "across the board.",
      description:
        "After implementing SkillPass, these companies saw consistent improvements in time-to-hire, cost-per-hire, quality-of-hire, and recruiter satisfaction. Here's what the aggregate data shows.",
      features: [
        { title: "60% faster (median)", description: "Median time-to-hire dropped 60% across all company sizes. Fewer steps, better signal, faster decisions." },
        { title: "$12K saved per hire", description: "Reduced screening costs, fewer interview hours, and less recruiter time per hire." },
        { title: "3x quality improvement", description: "90-day retention and performance ratings improved by 3x for SkillPass-sourced hires." },
        { title: "Recruiters love it", description: "4.6/5 average recruiter satisfaction score. Less grunt work, more meaningful candidate interactions." },
      ],
    },
    proof: {
      headline: "From the companies themselves",
      testimonial: {
        quote: "We were skeptical about the claims. So we ran a 90-day pilot with half our open reqs. The SkillPass pipeline outperformed the traditional pipeline on every metric. Now it's our default.",
        name: "Carmen Reyes",
        role: "VP of People",
        detail: "Enterprise software, 1,200 employees",
      },
      stats: [
        { value: "60%", label: "Faster (median)" },
        { value: "$12K", label: "Saved per hire" },
        { value: "3x", label: "Quality improvement" },
        { value: "4.6/5", label: "Recruiter satisfaction" },
      ],
    },
    cta: {
      headline: "Join the companies hiring smarter.",
      gradientText: "Start a pilot.",
      description: "Run SkillPass on a few open roles. Measure the results. Decide based on your own data.",
      primaryCta: { text: "Start free pilot", href: "/employers/signup" },
      secondaryCta: { text: "Talk to sales", href: "/contact" },
    },
  },

  // 244
  {
    slug: "success-talent",
    category: "consideration",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Talent Success Stories — How Real People Used Their SkillScore | SkillPass",
      description:
        "Real people, real outcomes. See how professionals and students used SkillPass to get better jobs, higher pay, and more interviews.",
    },
    hero: {
      badge: "Success stories",
      headline: "Real people.",
      gradientText: "Real outcomes.",
      subheadline:
        "These aren't hypothetical scenarios. These are actual people who built a SkillScore and used it to change their career trajectory. Different backgrounds, different fields, same result: proof works.",
      primaryCta: { text: "Build your SkillScore free", href: "/signup" },
      secondaryCta: { text: "How it works", href: "/how-it-works" },
      trustLine: "Stories shared with permission — real names, real numbers",
    },
    problem: {
      badge: "Common thread",
      headline: "They were all being",
      gradientText: "filtered out.",
      description:
        "Every person featured here was qualified for the roles they wanted. But something — school name, GPA, resume format, work history gaps — kept them from getting past the first filter. Sound familiar?",
      stats: [
        { value: "68%", label: "Felt overlooked", description: "Before SkillPass, two-thirds of these users said they regularly felt overlooked by employers despite being qualified." },
        { value: "8%", label: "Avg. callback rate before", description: "Their average callback rate on traditional applications was 8%. For most, it was lower." },
        { value: "5 mo", label: "Avg. job search length", description: "The average user featured here had been searching for 5 months before trying SkillPass." },
      ],
    },
    solution: {
      badge: "What changed",
      headline: "They built proof.",
      gradientText: "Employers noticed.",
      description:
        "Each person built a SkillScore, shared it alongside (or instead of) their resume, and saw immediate changes in employer response rates, interview invitations, and offers.",
      features: [
        { title: "Higher response rates", description: "Average callback rate went from 8% to 34% after sharing SkillPass profiles. That's a 4x improvement." },
        { title: "Better offers", description: "Average salary improvement of $18K compared to pre-SkillPass offers. Verified proof means better negotiation leverage." },
        { title: "Faster searches", description: "Average job search went from 5 months to 6 weeks. Less time applying, more time interviewing." },
        { title: "More confidence", description: "89% said they felt more confident in interviews when they knew their SkillScore backed up their claims." },
      ],
    },
    proof: {
      headline: "In their own words",
      testimonial: {
        quote: "Five months of job searching, 200+ applications, and maybe 10 callbacks. I built my SkillScore on a Sunday afternoon. Within three weeks I had four interviews and two offers.",
        name: "Diego Martinez",
        role: "Backend Engineer",
        detail: "Career changer, self-taught, SkillScore 697",
      },
      stats: [
        { value: "4x", label: "Callback rate improvement" },
        { value: "$18K", label: "Avg. salary improvement" },
        { value: "6 wks", label: "Avg. search (was 5 mo)" },
        { value: "89%", label: "Feel more confident" },
      ],
    },
    cta: {
      headline: "Your story could be next.",
      gradientText: "Start building.",
      description: "Free forever. Takes 15 minutes. The proof you build today changes the trajectory tomorrow.",
      primaryCta: { text: "Build your SkillScore", href: "/signup" },
      secondaryCta: { text: "See how scoring works", href: "/how-it-works" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DECISION FUNNEL (245–252)
  // ═══════════════════════════════════════════════════════════════

  // 245
  {
    slug: "start-free-pilot",
    category: "decision",
    audience: "employer",
    funnel: "bofu",
    seo: {
      title: "Start a Free Pilot — Test SkillPass on Real Hires | SkillPass",
      description:
        "Run SkillPass on 3–5 open roles for 30 days, free. Compare results against your current process. No commitment.",
    },
    hero: {
      badge: "Free pilot",
      headline: "Test it on real hires.",
      gradientText: "No risk. No commitment.",
      subheadline:
        "Pick 3–5 open roles. Run SkillPass alongside your current process for 30 days. Compare time-to-hire, cost, and quality. If the numbers don't speak for themselves, walk away. No charge.",
      primaryCta: { text: "Start free pilot now", href: "/employers/signup?plan=pilot" },
      secondaryCta: { text: "Talk to us first", href: "/contact" },
      trustLine: "30-day pilot — fully featured, no credit card",
    },
    problem: {
      badge: "Smart buyer",
      headline: "You shouldn't buy hiring tools based on",
      gradientText: "promises.",
      description:
        "We can show you case studies and quote statistics all day. But the only data that matters is your data, on your roles, with your team. That's why the pilot exists.",
      stats: [
        { value: "30 days", label: "Full access", description: "Everything SkillPass offers — search, scoring, ATS integration, analytics — for 30 days. No feature gates." },
        { value: "3–5 roles", label: "Your choice", description: "Pick the roles you want to test. Engineering, product, design — wherever you need better signal." },
        { value: "$0", label: "Cost", description: "The pilot is completely free. No credit card, no auto-renewal, no gotcha. Just test and decide." },
      ],
    },
    solution: {
      badge: "How the pilot works",
      headline: "Set up in an afternoon.",
      gradientText: "Results in a week.",
      description:
        "Connect your ATS, select pilot roles, and start seeing SkillScores on incoming applicants. Most teams see meaningful data within the first week.",
      features: [
        { title: "Afternoon setup", description: "ATS integration, role selection, and team onboarding. Your recruiters are running by end of day." },
        { title: "Side-by-side comparison", description: "Run traditional and SkillPass processes in parallel. Same roles, same applicants, different methods." },
        { title: "Weekly metrics report", description: "We send you a weekly comparison: time, cost, and quality metrics for both pipelines." },
        { title: "No-pressure end", description: "At day 30, decide. Continue, expand, or stop. No sales pressure, no auto-billing." },
      ],
    },
    proof: {
      headline: "Pilot conversion rate speaks for itself",
      testimonial: {
        quote: "We entered the pilot expecting to prove SkillPass wrong. Our VP wanted to justify our existing process. After two weeks, he asked us to expand the pilot to all open roles.",
        name: "Natalie Finn",
        role: "Recruiting Director",
        detail: "Pilot started with 4 roles, expanded to all within 2 weeks",
      },
      stats: [
        { value: "87%", label: "Pilot conversion rate" },
        { value: "14 days", label: "Avg. time to expand" },
        { value: "0", label: "Pilots canceled for bad results" },
        { value: "4.8/5", label: "Pilot satisfaction" },
      ],
    },
    cta: {
      headline: "The data will convince you.",
      gradientText: "Start the pilot.",
      description: "30 days, full access, zero cost. Pick your roles and let the results speak.",
      primaryCta: { text: "Start free pilot now", href: "/employers/signup?plan=pilot" },
      secondaryCta: { text: "Have questions?", href: "/contact" },
    },
  },

  // 246
  {
    slug: "create-free-profile",
    category: "decision",
    audience: "talent",
    funnel: "bofu",
    seo: {
      title: "Create Your Free Profile — Get Your SkillScore Today | SkillPass",
      description:
        "15 minutes to set up. Free forever. Your verified SkillScore makes you visible to employers who value proof over pedigree.",
    },
    hero: {
      badge: "Get started now",
      headline: "Your profile is 15 minutes away",
      gradientText: "from changing everything.",
      subheadline:
        "Connect your transcript, add a few peer references, and optionally take an assessment. In 15 minutes, you'll have a verified SkillScore that employers actually look at. Free. Forever.",
      primaryCta: { text: "Create free profile", href: "/signup" },
      secondaryCta: { text: "What's included?", href: "/how-it-works" },
      trustLine: "No credit card. No trial period. Free means free.",
    },
    problem: {
      badge: "What's stopping you?",
      headline: "You know the resume isn't working.",
      gradientText: "So why keep sending it?",
      description:
        "You've thought about it. You know your resume undersells you. You know employers want proof. The only question is: when do you start building it?",
      stats: [
        { value: "15 min", label: "Setup time", description: "That's less time than tweaking your resume for one more application that probably won't get a response." },
        { value: "$0", label: "Cost, forever", description: "Not a free trial. Not \"free with asterisks.\" Free for talent, forever. We charge employers, not you." },
        { value: "4x", label: "Avg. callback improvement", description: "Users who share their SkillPass profile see an average 4x improvement in employer callback rates." },
      ],
    },
    solution: {
      badge: "What you'll build",
      headline: "Three steps.",
      gradientText: "Done today.",
      description:
        "Connect your academic record, invite peer references, and optionally take a field assessment. Each step adds to your verified SkillScore. You can do all three in one sitting.",
      features: [
        { title: "Step 1: Connect transcript", description: "Select your institution from 4,000+ connected schools. Your academic record pulls automatically." },
        { title: "Step 2: Invite references", description: "Send peer review requests to 3–5 colleagues or classmates. They complete a structured 8-dimension survey." },
        { title: "Step 3: Take assessment (optional)", description: "Complete a field-specific assessment to boost your Assessed Ability sub-score. Do it now or later." },
        { title: "Result: Your SkillScore", description: "300–850, verified, portable, sharable. One link — skillpass.io/you — that tells employers everything." },
      ],
    },
    proof: {
      headline: "People who started today",
      testimonial: {
        quote: "I kept putting it off because I assumed it'd be a long process. Setup took 12 minutes. My transcript pulled automatically and I had my first peer review back within a day. Wish I'd done it sooner.",
        name: "Elena Vasquez",
        role: "Product Manager",
        detail: "Set up in 12 minutes, 3 offers within a month",
      },
      stats: [
        { value: "12 min", label: "Avg. setup time" },
        { value: "24 hrs", label: "First peer review back" },
        { value: "Free", label: "Forever" },
        { value: "3", label: "Offers within 30 days" },
      ],
    },
    cta: {
      headline: "You've read enough.",
      gradientText: "Build it now.",
      description: "15 minutes. Free forever. Your verified SkillScore starts working for you the moment it's live.",
      primaryCta: { text: "Create free profile", href: "/signup" },
    },
  },

  // 247
  {
    slug: "enterprise-demo",
    category: "decision",
    audience: "employer",
    funnel: "bofu",
    seo: {
      title: "Enterprise Demo — See SkillPass for Large Teams | SkillPass",
      description:
        "Hiring 50+ people/year? Get a personalized demo showing SkillPass at enterprise scale: SSO, custom scoring, dedicated support.",
    },
    hero: {
      badge: "Enterprise",
      headline: "Hiring at scale requires",
      gradientText: "enterprise-grade tooling.",
      subheadline:
        "If you're filling 50+ roles a year, you need more than a search tool. You need SSO, custom scoring weights, dedicated support, compliance controls, and analytics that your VP can actually use. Let's show you.",
      primaryCta: { text: "Schedule enterprise demo", href: "/enterprise/demo" },
      secondaryCta: { text: "See enterprise features", href: "/enterprise" },
      trustLine: "Trusted by teams hiring 50–500+ per year",
    },
    problem: {
      badge: "Enterprise hiring pain",
      headline: "At your scale, every inefficiency",
      gradientText: "costs six figures.",
      description:
        "When you're making 100+ hires a year, an extra 10 hours per hire means 1,000 lost hours. An extra $5K per hire means half a million dollars. Small improvements in process create massive financial impact.",
      stats: [
        { value: "1,000+", label: "Hours recoverable", description: "At 100 hires/year, even a 10-hour reduction per hire gives you 1,000 hours of productive time back." },
        { value: "$500K+", label: "Potential annual savings", description: "At scale, reducing cost-per-hire by even $5K translates to half a million in savings." },
        { value: "12%", label: "Bad hire rate (industry avg.)", description: "At 100 hires/year, 12 bad hires. At $240K each in replacement costs, that's $2.9M at risk." },
      ],
    },
    solution: {
      badge: "Enterprise features",
      headline: "Built for teams",
      gradientText: "that hire at volume.",
      description:
        "Enterprise SkillPass includes everything in our standard plans plus SSO, custom scoring, dedicated CSM, compliance reporting, and analytics dashboards for leadership.",
      features: [
        { title: "SSO & SCIM provisioning", description: "Connect your identity provider. Team members are provisioned automatically. One less credential to manage." },
        { title: "Custom scoring weights", description: "Weight sub-scores differently by role family. Emphasize Assessed Ability for engineers, Peer Signal for managers." },
        { title: "Dedicated CSM", description: "A named customer success manager who knows your hiring process and helps you optimize it." },
        { title: "Executive analytics", description: "Dashboards showing pipeline efficiency, quality trends, and ROI that your VP of People can present to the board." },
      ],
    },
    proof: {
      headline: "Enterprise results",
      testimonial: {
        quote: "We process 300+ hires a year across 4 offices. SkillPass Enterprise reduced our screening costs by $1.2M annually and our HR team went from drowning to actually strategic.",
        name: "Victoria Tran",
        role: "SVP of People",
        detail: "Enterprise company, 3,000 employees",
      },
      stats: [
        { value: "$1.2M", label: "Annual savings" },
        { value: "300+", label: "Hires/year" },
        { value: "58%", label: "Faster pipeline" },
        { value: "97%", label: "Customer retention" },
      ],
    },
    cta: {
      headline: "Let's talk about your scale.",
      gradientText: "Schedule a demo.",
      description: "A 30-minute call where we show you SkillPass configured for your team size, roles, and workflow. Come with questions.",
      primaryCta: { text: "Schedule enterprise demo", href: "/enterprise/demo" },
      secondaryCta: { text: "See pricing first", href: "/pricing" },
    },
  },

  // 248
  {
    slug: "pricing-plans",
    category: "decision",
    audience: "employer",
    funnel: "bofu",
    seo: {
      title: "Pricing Plans — SkillPass for Teams of Every Size | SkillPass",
      description:
        "Plans from $299/mo for startups to $799+/mo for enterprise. Free for talent. See what's included at every level.",
    },
    hero: {
      badge: "Transparent pricing",
      headline: "Simple plans.",
      gradientText: "Serious ROI.",
      subheadline:
        "Free for talent. $299/mo for growing teams. $799+/mo for enterprise. Every plan pays for itself within the first hire. We'll show you the math.",
      primaryCta: { text: "See full pricing", href: "/pricing" },
      secondaryCta: { text: "Calculate your ROI", href: "/tools/roi-calculator" },
      trustLine: "Average customer ROI: 4.2x within 90 days",
    },
    problem: {
      badge: "The math",
      headline: "You're already spending more than this",
      gradientText: "on bad hiring.",
      description:
        "The average cost per hire is $15K+. Most of that goes to low-signal steps that SkillPass eliminates. Even our most expensive plan pays for itself on the first hire.",
      stats: [
        { value: "$15K+", label: "Avg. cost per hire today", description: "That's what you're spending now — per hire. SkillPass costs less per month than one hire costs." },
        { value: "1 hire", label: "To break even", description: "At $12K savings per hire, SkillPass pays for itself on your very first hire. Everything after is pure savings." },
        { value: "4.2x", label: "Average ROI", description: "Across all customers, the average return on investment is 4.2x within the first 90 days." },
      ],
    },
    solution: {
      badge: "Plans for every team",
      headline: "Pick your plan.",
      gradientText: "Start saving immediately.",
      description:
        "Three plans designed for different team sizes and hiring volumes. Every plan includes core SkillScore access, ATS integration, and candidate search.",
      features: [
        { title: "Starter — $299/mo", description: "For teams hiring 1–5/quarter. Full SkillScore access, candidate search, one ATS integration." },
        { title: "Growth — $499/mo", description: "For teams hiring 5–15/quarter. Everything in Starter plus custom scoring weights and priority support." },
        { title: "Enterprise — $799+/mo", description: "For teams hiring 15+/quarter. SSO, SCIM, dedicated CSM, custom reporting, and SLA guarantees." },
        { title: "Talent — Free forever", description: "For candidates: build your profile, share your score, get found by employers. No cost, no limits." },
      ],
    },
    proof: {
      headline: "What customers say about value",
      testimonial: {
        quote: "We're on the Growth plan at $499/mo. We save roughly $12K per hire and make about 8 hires per quarter. That's nearly $100K in savings per quarter for $1,500 in cost. It's not close.",
        name: "Daniel Foster",
        role: "Head of Talent",
        detail: "Growth-stage startup, 200 employees",
      },
      stats: [
        { value: "$299", label: "Starter plan/mo" },
        { value: "$499", label: "Growth plan/mo" },
        { value: "$799+", label: "Enterprise plan/mo" },
        { value: "Free", label: "For talent, forever" },
      ],
    },
    cta: {
      headline: "The ROI is obvious.",
      gradientText: "Pick your plan.",
      description: "Start with a free pilot to see the numbers for yourself, then pick the plan that fits your hiring volume.",
      primaryCta: { text: "Start free pilot", href: "/employers/signup" },
      secondaryCta: { text: "Talk to sales", href: "/contact" },
    },
  },

  // 249
  {
    slug: "get-started-10min",
    category: "decision",
    audience: "talent",
    funnel: "bofu",
    seo: {
      title: "Get Started in 10 Minutes — Build Your SkillScore Now | SkillPass",
      description:
        "Your verified SkillScore is 10 minutes away. Connect transcript, invite references, done. Free forever.",
    },
    hero: {
      badge: "10 minutes",
      headline: "10 minutes from now,",
      gradientText: "you'll have a SkillScore.",
      subheadline:
        "Not a partial profile. Not a \"we'll email you later.\" In 10 minutes, you'll have a verified SkillScore with your academic data connected and peer reference requests sent. That's it. You're live.",
      primaryCta: { text: "Start now — it's free", href: "/signup" },
      trustLine: "Average setup: 9 minutes 42 seconds",
    },
    problem: {
      badge: "Why you haven't started yet",
      headline: "You think this will take",
      gradientText: "forever. It won't.",
      description:
        "You've been meaning to build your profile. But it sounds like another thing you have to do — another platform, another account, another time investment. Here's the truth: it takes less time than making coffee.",
      stats: [
        { value: "9:42", label: "Average setup time", description: "Nine minutes and forty-two seconds. That's the real average. Not a marketing claim — actual measured time." },
        { value: "3", label: "Steps total", description: "Connect transcript, invite references, review your score. Three steps. That's the whole process." },
        { value: "0", label: "Forms to fill out", description: "Your transcript pulls automatically. References are a one-click invite. There's no 20-field form to fill." },
      ],
    },
    solution: {
      badge: "Here's exactly what happens",
      headline: "Connect. Invite.",
      gradientText: "Done.",
      description:
        "We stripped out every unnecessary step. The setup is three actions that take less time than you spend scrolling social media during your morning coffee.",
      features: [
        { title: "Minute 1–3: Connect transcript", description: "Select your school, authenticate, and your academic record pulls automatically. No manual entry." },
        { title: "Minute 3–6: Invite references", description: "Type in 3–5 email addresses of colleagues or classmates. They get a structured survey. Done." },
        { title: "Minute 6–9: Review and publish", description: "See your preliminary SkillScore, review your public profile, toggle visibility settings. Hit publish." },
        { title: "Minute 10+: Optional assessment", description: "If you want to boost your Assessed Ability sub-score, take a field assessment at your own pace." },
      ],
    },
    proof: {
      headline: "People who started in the last hour",
      testimonial: {
        quote: "I literally set a timer. 8 minutes 14 seconds from clicking 'sign up' to seeing my SkillScore. I've spent more time deciding what to order for lunch.",
        name: "Rob Kim",
        role: "DevOps Engineer",
        detail: "Set up in 8 minutes 14 seconds",
      },
      stats: [
        { value: "9:42", label: "Avg. setup time" },
        { value: "3", label: "Steps" },
        { value: "Free", label: "Forever" },
        { value: "0", label: "Reasons to wait" },
      ],
    },
    cta: {
      headline: "You've spent longer reading this page.",
      gradientText: "Just do it.",
      description: "10 minutes. Free. Your SkillScore will be live before your next meeting starts.",
      primaryCta: { text: "Start now", href: "/signup" },
    },
  },

  // 250
  {
    slug: "no-credit-card",
    category: "decision",
    audience: "all",
    funnel: "bofu",
    seo: {
      title: "No Credit Card Required — Start SkillPass Free | SkillPass",
      description:
        "No credit card. No free trial that converts. Free means free. Build your SkillScore or start an employer pilot with zero payment info.",
    },
    hero: {
      badge: "Truly free",
      headline: "No credit card.",
      gradientText: "No gotcha.",
      subheadline:
        "We don't ask for payment information upfront. Not for talent profiles (free forever) and not for employer pilots (30 days, no card). When we say free, we mean you won't see a payment form until you actively choose a paid plan.",
      primaryCta: { text: "Start free — no card", href: "/signup" },
      secondaryCta: { text: "See what's included", href: "/how-it-works" },
      trustLine: "No payment info collected until you choose to upgrade",
    },
    problem: {
      badge: "We hate this too",
      headline: "\"Free\" usually means",
      gradientText: "\"we'll charge you later.\"",
      description:
        "You've been burned before. \"Free trial\" that auto-charges. \"Free tier\" that's useless. \"No credit card\" but then they ask for it on step 3. We get it. That's not what this is.",
      stats: [
        { value: "0", label: "Payment forms during signup", description: "You will not see a credit card field during the entire signup and setup process. Not once." },
        { value: "0", label: "Auto-charge surprises", description: "No trial that converts. No auto-billing. No sneaky charges. If you never pay, you never pay." },
        { value: "100%", label: "Features available free (talent)", description: "Talent profiles have every feature. There's no paid tier for talent. Free means the full product." },
      ],
    },
    solution: {
      badge: "Our business model, explained",
      headline: "Talent is free.",
      gradientText: "Employers pay when ready.",
      description:
        "We charge employers for candidate search and scoring tools. Talent uses SkillPass for free — forever, with no limits. That's the model. You're the product only in the sense that employers find you valuable.",
      features: [
        { title: "Talent: free forever", description: "Build your profile, share your score, get found by employers. No limits, no credit card, no trial period." },
        { title: "Employer pilot: 30 days free", description: "Full platform access for 30 days. No credit card required. Decide after you see real results." },
        { title: "Paid plans: when you're ready", description: "After the pilot, choose a plan if you want. Starts at $299/mo. You'll know the ROI before you pay anything." },
        { title: "No dark patterns", description: "No pre-checked boxes, no confusing cancellation flows, no hidden fees. We want customers, not hostages." },
      ],
    },
    proof: {
      headline: "Trust verified",
      testimonial: {
        quote: "I was so skeptical about 'free' that I used a burner email. Turns out it really is free. No catch. Built my full profile, got contacted by 4 companies, never saw a payment screen.",
        name: "Ali Hassan",
        role: "Mobile Developer",
        detail: "Skeptic turned advocate",
      },
      stats: [
        { value: "$0", label: "Total cost for talent" },
        { value: "$0", label: "Cost for 30-day pilot" },
        { value: "0", label: "Hidden fees" },
        { value: "4.9/5", label: "Trust rating" },
      ],
    },
    cta: {
      headline: "No card. No catch.",
      gradientText: "Just start.",
      description: "Free for talent forever. Free pilot for employers. The only thing we charge for is continued employer access after the pilot.",
      primaryCta: { text: "Start free — no card needed", href: "/signup" },
    },
  },

  // 251
  {
    slug: "enterprise-quote",
    category: "decision",
    audience: "employer",
    funnel: "bofu",
    seo: {
      title: "Get an Enterprise Quote — Custom SkillPass Pricing | SkillPass",
      description:
        "Hiring 50+ per year? Get a custom quote based on your volume, integrations, and support needs. Response within 24 hours.",
    },
    hero: {
      badge: "Enterprise pricing",
      headline: "Custom pricing for",
      gradientText: "your hiring volume.",
      subheadline:
        "Enterprise hiring isn't one-size-fits-all, and neither is enterprise pricing. Tell us your volume, integrations, and support needs, and we'll send a custom quote within 24 hours.",
      primaryCta: { text: "Request quote", href: "/enterprise/quote" },
      secondaryCta: { text: "See standard plans first", href: "/pricing" },
      trustLine: "Custom quotes delivered within 24 hours",
    },
    problem: {
      badge: "At your scale",
      headline: "Standard plans don't fit",
      gradientText: "non-standard teams.",
      description:
        "You've got 200 hires a year across 3 countries with 4 ATS instances and a legal team that needs custom data handling agreements. A dropdown pricing page isn't going to cut it.",
      stats: [
        { value: "24 hrs", label: "Quote turnaround", description: "Send us your requirements and we'll have a detailed, custom quote in your inbox within one business day." },
        { value: "Custom", label: "Everything", description: "Pricing, SLAs, data handling, integrations, support level — all tailored to your specific needs." },
        { value: "0", label: "Pressure", description: "Get the quote, share it with your team, take your time. No follow-up calls unless you want them." },
      ],
    },
    solution: {
      badge: "What we'll cover",
      headline: "A quote built for",
      gradientText: "your exact needs.",
      description:
        "Tell us about your hiring volume, team structure, and technical requirements. We'll build a proposal that includes pricing, implementation plan, and projected ROI.",
      features: [
        { title: "Volume-based pricing", description: "The more you hire, the better the per-hire economics. Enterprise pricing scales with your actual usage." },
        { title: "Custom SLA", description: "Uptime guarantees, support response times, and escalation paths tailored to your requirements." },
        { title: "Implementation plan", description: "Detailed rollout plan including integration, training, and change management for your team." },
        { title: "ROI projection", description: "Based on your actual hiring data, we'll project specific savings and timeline to payback." },
      ],
    },
    proof: {
      headline: "Enterprise customers who started here",
      testimonial: {
        quote: "We requested a quote on Monday, had it by Tuesday, ran it through procurement, and started the pilot by the following week. Fastest vendor onboarding our legal team has ever done.",
        name: "Margaret Williams",
        role: "VP of HR",
        detail: "Enterprise, 2,500 employees",
      },
      stats: [
        { value: "24 hrs", label: "Quote turnaround" },
        { value: "97%", label: "Enterprise retention" },
        { value: "$1.2M", label: "Avg. enterprise savings/yr" },
        { value: "7 days", label: "Avg. procurement to pilot" },
      ],
    },
    cta: {
      headline: "Tell us what you need.",
      gradientText: "We'll price it.",
      description: "Fill out a 2-minute form with your requirements. Custom quote in your inbox within 24 hours.",
      primaryCta: { text: "Request enterprise quote", href: "/enterprise/quote" },
      secondaryCta: { text: "Schedule a call instead", href: "/contact" },
    },
  },

  // 252
  {
    slug: "personalized-walkthrough",
    category: "decision",
    audience: "employer",
    funnel: "bofu",
    seo: {
      title: "Personalized Walkthrough — See SkillPass for Your Roles | SkillPass",
      description:
        "Get a 30-minute walkthrough customized to your open roles, ATS, and hiring challenges. Real candidates, real data, your workflow.",
    },
    hero: {
      badge: "Your walkthrough",
      headline: "See it built for",
      gradientText: "your specific roles.",
      subheadline:
        "Not a generic demo. A 30-minute walkthrough using your actual open roles, your ATS, and candidates that match your requirements. You'll see exactly what SkillPass looks like in your workflow.",
      primaryCta: { text: "Book my walkthrough", href: "/book-demo" },
      secondaryCta: { text: "Try self-serve demo first", href: "/demo" },
      trustLine: "30 minutes — personalized to your team and roles",
    },
    problem: {
      badge: "Generic demos are useless",
      headline: "You need to see your",
      gradientText: "actual workflow.",
      description:
        "A demo with sample data doesn't answer the real question: will this work for us? You need to see your ATS integration, your role types, and candidates from your talent pool.",
      stats: [
        { value: "30 min", label: "Your time", description: "Half an hour. We'll show you SkillPass configured for your team's actual setup. Not a second wasted." },
        { value: "100%", label: "Customized", description: "Your open roles, your ATS, your scoring preferences. Everything you see will be specific to your team." },
        { value: "0", label: "Slides", description: "No PowerPoint. Just the product, configured for you, running in real-time." },
      ],
    },
    solution: {
      badge: "What you'll see",
      headline: "Your roles. Your ATS.",
      gradientText: "Real candidates.",
      description:
        "Before the call, we'll set up SkillPass with your role requirements and ATS. During the call, you'll search real candidates, see scores, and watch the integration work.",
      features: [
        { title: "Pre-configured for you", description: "We set up your roles and preferences before the call so every minute is productive." },
        { title: "Live candidate search", description: "Search candidates matching your actual open roles. See real SkillScores, real profiles, real data." },
        { title: "ATS integration demo", description: "Watch SkillPass data flow into your specific ATS in real-time. See exactly where scores appear." },
        { title: "ROI for your numbers", description: "We'll calculate projected savings using your hiring volume and current cost per hire." },
      ],
    },
    proof: {
      headline: "After the walkthrough",
      testimonial: {
        quote: "The personalized demo was the best vendor demo I've ever sat through. No slides, no fluff — just the product, set up for our roles, with real candidates. We signed up before the call ended.",
        name: "Lisa Chen",
        role: "Director of Talent Acquisition",
        detail: "Signed up during the walkthrough call",
      },
      stats: [
        { value: "62%", label: "Sign up same day" },
        { value: "4.9/5", label: "Walkthrough rating" },
        { value: "0", label: "Slides shown" },
        { value: "30 min", label: "Max time investment" },
      ],
    },
    cta: {
      headline: "See your workflow. Your data.",
      gradientText: "Your decision.",
      description: "Book a 30-minute personalized walkthrough. We'll do the prep work — you just show up and see if it fits.",
      primaryCta: { text: "Book my walkthrough", href: "/book-demo" },
      secondaryCta: { text: "Try self-serve demo", href: "/demo" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // PARTNER / INTEGRATION (253–259)
  // ═══════════════════════════════════════════════════════════════

  // 253
  {
    slug: "plus-greenhouse",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass + Greenhouse — Verified Scores Inside Your ATS | SkillPass",
      description:
        "Connect SkillPass to Greenhouse in one click. See SkillScores on every candidate card. No workflow changes, no engineering.",
    },
    hero: {
      badge: "Greenhouse Integration",
      headline: "SkillScores inside",
      gradientText: "Greenhouse.",
      subheadline:
        "One-click OAuth connection. SkillScores appear directly on candidate cards in Greenhouse. Your recruiters never leave the tool they already know — they just get better data inside it.",
      primaryCta: { text: "Connect Greenhouse", href: "/integrations/greenhouse" },
      secondaryCta: { text: "See how it looks", href: "/demo?ats=greenhouse" },
      trustLine: "Official Greenhouse partner — certified integration",
    },
    problem: {
      badge: "The integration question",
      headline: "You live in Greenhouse.",
      gradientText: "Will this actually fit?",
      description:
        "Your recruiters know Greenhouse. They don't want another tab. If SkillPass data doesn't show up inside Greenhouse, it's dead on arrival. We know that.",
      stats: [
        { value: "0", label: "Extra tabs", description: "SkillScores appear on the candidate card in Greenhouse. No tab-switching, no copy-pasting, no external logins." },
        { value: "1 click", label: "Setup", description: "OAuth connection. Click 'Connect,' authenticate, done. No API keys, no engineering tickets." },
        { value: "< 5 min", label: "Total integration time", description: "From clicking 'Connect' to seeing scores on candidate cards. Under five minutes." },
      ],
    },
    solution: {
      badge: "How it works",
      headline: "Scores on every",
      gradientText: "candidate card.",
      description:
        "After connecting, every candidate with a SkillPass profile automatically shows their SkillScore on their Greenhouse candidate card. Score, sub-scores, and a link to the full profile.",
      features: [
        { title: "Candidate card enrichment", description: "SkillScore, sub-score breakdown, and profile link appear directly on the candidate card. One glance, full picture." },
        { title: "Custom scorecard integration", description: "Map SkillPass sub-scores to your Greenhouse scorecard fields. The data flows into your existing evaluation framework." },
        { title: "Stage automation", description: "Set rules like 'auto-advance candidates with SkillScore > 700.' Reduce manual screening entirely." },
        { title: "Reporting sync", description: "SkillPass data is available in Greenhouse reports. Track correlation between SkillScore and hire outcomes." },
      ],
    },
    proof: {
      headline: "Greenhouse teams using SkillPass",
      testimonial: {
        quote: "Integration took 4 minutes. My recruiters saw scores on candidate cards immediately. The comment from my team was 'why doesn't every tool work like this?' Zero friction.",
        name: "Katie Park",
        role: "Recruiting Ops Lead",
        detail: "Greenhouse customer, 200 employees",
      },
      stats: [
        { value: "4 min", label: "Avg. setup" },
        { value: "0", label: "Engineering needed" },
        { value: "99.9%", label: "Uptime" },
        { value: "100%", label: "Greenhouse features supported" },
      ],
    },
    cta: {
      headline: "Your Greenhouse. Better data.",
      gradientText: "Connect now.",
      description: "One-click connection. SkillScores on every candidate card in under 5 minutes.",
      primaryCta: { text: "Connect Greenhouse", href: "/integrations/greenhouse" },
      secondaryCta: { text: "Start a pilot first", href: "/employers/signup" },
    },
  },

  // 254
  {
    slug: "plus-lever",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass + Lever — Verified SkillScores in Your Pipeline | SkillPass",
      description:
        "Connect SkillPass to Lever in one click. SkillScores appear on opportunity cards. Filter and sort candidates by verified ability.",
    },
    hero: {
      badge: "Lever Integration",
      headline: "SkillScores inside",
      gradientText: "Lever.",
      subheadline:
        "Verified SkillScores on every opportunity card in Lever. Your team keeps their workflow. The candidates get better signal attached to their profiles. One-click setup.",
      primaryCta: { text: "Connect Lever", href: "/integrations/lever" },
      secondaryCta: { text: "See the integration", href: "/demo?ats=lever" },
      trustLine: "Official Lever partner integration",
    },
    problem: {
      badge: "Same problem, Lever edition",
      headline: "Lever is great at managing candidates.",
      gradientText: "It can't score them.",
      description:
        "Lever tracks your pipeline beautifully. But it relies on your team to evaluate every candidate manually. SkillPass adds verified scoring data so you spend less time evaluating and more time closing.",
      stats: [
        { value: "0", label: "Scoring built into Lever", description: "Lever manages your pipeline but doesn't verify or score candidates. That's the gap SkillPass fills." },
        { value: "1 click", label: "To connect", description: "OAuth authentication. No API configuration, no developer involvement, no IT tickets." },
        { value: "100%", label: "Of Lever features preserved", description: "SkillPass adds data to Lever. It doesn't change anything about how Lever works." },
      ],
    },
    solution: {
      badge: "Inside your pipeline",
      headline: "Scores where you",
      gradientText: "already work.",
      description:
        "After connecting, SkillScores appear on opportunity cards in Lever. Filter candidates by score range, sort by sub-scores, and link out to full SkillPass profiles.",
      features: [
        { title: "Opportunity card enrichment", description: "SkillScore and sub-scores appear on the opportunity card. Visible to everyone on the hiring team." },
        { title: "Pipeline filtering", description: "Filter your pipeline by SkillScore range. See only candidates above your threshold." },
        { title: "Feedback form integration", description: "SkillPass data can pre-populate interviewer feedback forms so evaluators have context before the conversation." },
        { title: "Archive intelligence", description: "Re-score archived candidates when you open new roles. Find hidden gems in your existing Lever database." },
      ],
    },
    proof: {
      headline: "Lever teams seeing results",
      testimonial: {
        quote: "We had 3,000 archived candidates in Lever. After connecting SkillPass, we found 47 with strong SkillScores for our current open roles. Hired 3 from our own archive. Cost per hire: basically zero.",
        name: "Brendan Walsh",
        role: "Talent Acquisition Manager",
        detail: "Lever customer, 350 employees",
      },
      stats: [
        { value: "47", label: "Archive candidates rediscovered" },
        { value: "3", label: "Hires from archive" },
        { value: "~$0", label: "Cost per archive hire" },
        { value: "1 click", label: "To connect" },
      ],
    },
    cta: {
      headline: "Same Lever workflow.",
      gradientText: "Better candidate data.",
      description: "Connect in one click. SkillScores flow into your pipeline immediately.",
      primaryCta: { text: "Connect Lever", href: "/integrations/lever" },
      secondaryCta: { text: "Start a pilot", href: "/employers/signup" },
    },
  },

  // 255
  {
    slug: "plus-workday",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass + Workday — Enterprise Skill Verification at Scale | SkillPass",
      description:
        "SkillPass integrates with Workday Recruiting and HCM. SSO, SCIM, and enterprise-grade data handling for large organizations.",
    },
    hero: {
      badge: "Workday Integration",
      headline: "SkillPass inside",
      gradientText: "Workday.",
      subheadline:
        "Enterprise-grade integration with Workday Recruiting and Workday HCM. SSO via your identity provider, SCIM provisioning, and SkillScores surfaced directly in your Workday workflows.",
      primaryCta: { text: "Connect Workday", href: "/integrations/workday" },
      secondaryCta: { text: "Request enterprise demo", href: "/enterprise/demo" },
      trustLine: "SOC 2 Type II — enterprise security standards",
    },
    problem: {
      badge: "Enterprise reality",
      headline: "Workday manages your people.",
      gradientText: "But can't verify their skills.",
      description:
        "Workday is your system of record for HR. But when it comes to evaluating candidate ability during recruiting or assessing internal talent for mobility, you're still relying on manager opinions and self-assessments.",
      stats: [
        { value: "0", label: "Verified skill data in Workday", description: "Workday stores what people report. SkillPass verifies what people can actually do." },
        { value: "SSO", label: "Single sign-on support", description: "Connect via your existing identity provider. SAML 2.0, OIDC — whatever your org uses." },
        { value: "SCIM", label: "Auto-provisioning", description: "Team members are provisioned and deprovisioned automatically. No manual account management." },
      ],
    },
    solution: {
      badge: "Enterprise integration",
      headline: "Skill verification",
      gradientText: "inside Workday.",
      description:
        "SkillScores appear in Workday candidate profiles for recruiting and employee profiles for internal mobility. Enterprise controls, compliance features, and dedicated support included.",
      features: [
        { title: "Recruiting integration", description: "SkillScores on candidate profiles in Workday Recruiting. Filter, sort, and shortlist by verified ability." },
        { title: "Internal mobility", description: "SkillScores for existing employees help identify internal candidates for open roles. Promote based on verified ability." },
        { title: "SSO + SCIM", description: "Enterprise authentication and auto-provisioning. Your IT team gets the controls they need." },
        { title: "Custom data handling", description: "Data residency, retention policies, and DPA agreements tailored to your enterprise requirements." },
      ],
    },
    proof: {
      headline: "Enterprise Workday deployments",
      testimonial: {
        quote: "Deploying SkillPass into our Workday environment took 2 weeks including security review, SSO config, and data handling agreements. For enterprise software, that's lightning fast.",
        name: "Patricia Moore",
        role: "HRIS Director",
        detail: "Fortune 500 company, 12,000 employees",
      },
      stats: [
        { value: "2 wks", label: "Enterprise deployment" },
        { value: "SSO", label: "+ SCIM included" },
        { value: "SOC 2", label: "Type II certified" },
        { value: "99.99%", label: "Uptime SLA" },
      ],
    },
    cta: {
      headline: "Enterprise-ready.",
      gradientText: "Connect to Workday.",
      description: "Schedule an enterprise demo and we'll show you SkillPass inside your Workday environment.",
      primaryCta: { text: "Request enterprise demo", href: "/enterprise/demo" },
      secondaryCta: { text: "Talk to enterprise sales", href: "/contact?tier=enterprise" },
    },
  },

  // 256
  {
    slug: "plus-linkedin",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass + LinkedIn — Verified Scores for LinkedIn Candidates | SkillPass",
      description:
        "Automatically match LinkedIn applicants to their SkillPass profiles. See verified SkillScores alongside LinkedIn data.",
    },
    hero: {
      badge: "LinkedIn Enrichment",
      headline: "LinkedIn profiles +",
      gradientText: "verified SkillScores.",
      subheadline:
        "LinkedIn tells you where someone worked. SkillPass tells you how good they actually are. When a candidate applies through LinkedIn, we automatically match their SkillPass profile so you get the full, verified picture.",
      primaryCta: { text: "Enable LinkedIn matching", href: "/integrations/linkedin" },
      secondaryCta: { text: "How matching works", href: "/docs/linkedin-integration" },
      trustLine: "Automatic profile matching — no candidate action needed",
    },
    problem: {
      badge: "LinkedIn's blind spot",
      headline: "LinkedIn shows you where they've been.",
      gradientText: "Not what they can do.",
      description:
        "A LinkedIn profile is a professional timeline — companies, titles, dates. It doesn't verify skill level, measure ability, or predict performance. You're sourcing based on narrative, not data.",
      stats: [
        { value: "0%", label: "LinkedIn data is verified", description: "Anyone can claim any title on LinkedIn. There's no verification layer for skill claims." },
        { value: "62%", label: "Of LinkedIn profiles have inflated titles", description: "Title inflation is rampant. 'Head of' might mean managing 0 people." },
        { value: "Low", label: "Predictive value", description: "Company logos and title progression don't predict job performance. Verified skill data does." },
      ],
    },
    solution: {
      badge: "LinkedIn + verified data",
      headline: "The full picture",
      gradientText: "on every candidate.",
      description:
        "When a LinkedIn applicant also has a SkillPass profile, we automatically attach their verified SkillScore to their application. Timeline from LinkedIn, ability from SkillPass.",
      features: [
        { title: "Automatic matching", description: "When a LinkedIn applicant enters your pipeline, we check for a SkillPass profile and attach it automatically." },
        { title: "Score overlay", description: "See the SkillScore alongside LinkedIn data in your ATS. One view, both data sources." },
        { title: "Sourcing enrichment", description: "When sourcing on LinkedIn Recruiter, check SkillPass scores for candidates you're considering outreach to." },
        { title: "InMail prioritization", description: "Focus expensive InMails on candidates with verified high SkillScores. Better response rates, better outcomes." },
      ],
    },
    proof: {
      headline: "LinkedIn + SkillPass results",
      testimonial: {
        quote: "We were spending $8K/month on LinkedIn Recruiter. After adding SkillPass matching, our InMail response rate doubled because we were only reaching out to verified-strong candidates.",
        name: "Samantha Cole",
        role: "Senior Recruiter",
        detail: "Tech company, LinkedIn Recruiter user",
      },
      stats: [
        { value: "2x", label: "InMail response rate" },
        { value: "45%", label: "LinkedIn sourcing costs reduced" },
        { value: "Auto", label: "Profile matching" },
        { value: "0", label: "Manual steps" },
      ],
    },
    cta: {
      headline: "Make LinkedIn data trustworthy.",
      gradientText: "Add verification.",
      description: "Enable LinkedIn matching and see verified SkillScores for every candidate that has a profile.",
      primaryCta: { text: "Enable LinkedIn matching", href: "/integrations/linkedin" },
      secondaryCta: { text: "Start a pilot", href: "/employers/signup" },
    },
  },

  // 257
  {
    slug: "ats-integration",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "ATS Integration — SkillPass Works With Any Applicant Tracking System | SkillPass",
      description:
        "Greenhouse, Lever, Ashby, Workday, iCIMS, and 15+ more. SkillPass integrates with your ATS in one click.",
    },
    hero: {
      badge: "ATS Integration",
      headline: "Whatever ATS you use,",
      gradientText: "we plug into it.",
      subheadline:
        "Greenhouse, Lever, Ashby, Workday, iCIMS, JazzHR, Breezy — we integrate with 20+ applicant tracking systems. One-click setup for most, API-based for the rest. Your recruiters stay in their existing tool.",
      primaryCta: { text: "Find your ATS", href: "/integrations" },
      secondaryCta: { text: "Start a pilot", href: "/employers/signup" },
      trustLine: "20+ ATS integrations — more added monthly",
    },
    problem: {
      badge: "The adoption blocker",
      headline: "Tools that don't fit your ATS",
      gradientText: "don't get used.",
      description:
        "Your team lives in their ATS. Any hiring tool that requires switching context is a tool that gets abandoned within two weeks. We've seen it happen to our competitors. We built differently.",
      stats: [
        { value: "74%", label: "Of tools abandoned in 30 days", description: "Hiring tools that don't integrate with the ATS have a 74% abandonment rate. The tool has to fit the workflow." },
        { value: "20+", label: "ATS integrations", description: "We cover the major ATSs and add new integrations monthly based on customer requests." },
        { value: "1 click", label: "Most setups", description: "OAuth for major ATSs. For custom ATSs, our API handles any integration your engineering team wants to build." },
      ],
    },
    solution: {
      badge: "Your ATS, enhanced",
      headline: "Scores inside",
      gradientText: "the tool you already use.",
      description:
        "After connecting, SkillScores appear on candidate profiles inside your ATS. No context-switching, no new tabs, no retraining your team.",
      features: [
        { title: "Major ATS support", description: "Greenhouse, Lever, Ashby, Workday, iCIMS, JazzHR, Breezy, Recruitee, and more. Full list at /integrations." },
        { title: "Candidate card enrichment", description: "SkillScore and sub-scores appear directly on the candidate profile or card in your ATS." },
        { title: "Workflow automation", description: "Set score-based rules: auto-advance high scorers, flag low scorers for review, notify hiring managers." },
        { title: "REST API for custom builds", description: "Using a custom or proprietary ATS? Our REST API gives you full access to build your own integration." },
      ],
    },
    proof: {
      headline: "Across every ATS",
      testimonial: {
        quote: "We use Ashby, which isn't as common as Greenhouse. The SkillPass integration still took 5 minutes and works perfectly. Every candidate card shows the score. My team loves it.",
        name: "Mike Tanaka",
        role: "Head of People Ops",
        detail: "Ashby customer, 150 employees",
      },
      stats: [
        { value: "20+", label: "ATSs supported" },
        { value: "5 min", label: "Avg. setup time" },
        { value: "0", label: "Engineering hours needed" },
        { value: "99.9%", label: "Integration uptime" },
      ],
    },
    cta: {
      headline: "Find your ATS.",
      gradientText: "Connect in minutes.",
      description: "Browse our integration directory, find your ATS, and connect with one click. Your recruiters will see scores by tomorrow.",
      primaryCta: { text: "Browse integrations", href: "/integrations" },
      secondaryCta: { text: "Don't see yours? Tell us", href: "/contact" },
    },
  },

  // 258
  {
    slug: "skillpass-api",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "SkillPass API — Build Custom Integrations With Verified Skill Data | SkillPass",
      description:
        "REST API with full access to SkillScore data. Build custom integrations, internal tools, or embed skill verification in your product.",
    },
    hero: {
      badge: "Developer API",
      headline: "Build with",
      gradientText: "verified skill data.",
      subheadline:
        "Our REST API gives you programmatic access to SkillScore data. Build custom integrations with your internal tools, embed skill verification in your product, or create workflows we haven't imagined yet.",
      primaryCta: { text: "View API docs", href: "/docs/api" },
      secondaryCta: { text: "Get API key", href: "/developers/signup" },
      trustLine: "RESTful API — JSON responses — 99.99% uptime SLA",
    },
    problem: {
      badge: "For builders",
      headline: "Pre-built integrations don't always",
      gradientText: "fit custom workflows.",
      description:
        "Maybe you've built your own recruiting tools. Maybe you want to embed SkillScores in your product. Maybe your workflow is unique. Pre-built integrations cover 80% of use cases. The API covers the other 20%.",
      stats: [
        { value: "REST", label: "API architecture", description: "Standard REST endpoints with JSON payloads. If your team can call an API, they can use SkillPass data." },
        { value: "< 50ms", label: "Avg. response time", description: "Sub-50-millisecond median response times. Fast enough to embed in real-time candidate evaluation flows." },
        { value: "99.99%", label: "Uptime SLA", description: "Enterprise-grade reliability. If your product depends on our API, it'll be there when you need it." },
      ],
    },
    solution: {
      badge: "Full API access",
      headline: "Every data point.",
      gradientText: "Programmatic access.",
      description:
        "Retrieve SkillScores, sub-scores, assessment results, and peer signal summaries for any consenting candidate. Build whatever you need.",
      features: [
        { title: "Score retrieval", description: "GET /candidates/{id}/score — returns overall SkillScore and all four sub-scores. Simple, fast, complete." },
        { title: "Candidate search", description: "POST /search — filter by score range, sub-scores, field, location. Build your own candidate search UI." },
        { title: "Webhook events", description: "Subscribe to events like 'score_updated' or 'new_assessment_completed.' Build reactive workflows." },
        { title: "Batch operations", description: "Score 1,000 candidates at once with our batch endpoint. Ideal for large-scale pipeline re-evaluation." },
      ],
    },
    proof: {
      headline: "Built with our API",
      testimonial: {
        quote: "We embedded SkillPass scores in our internal recruiting dashboard. The API documentation was clear, the endpoints were fast, and we had it working in a day. Our eng team was impressed.",
        name: "Raj Gupta",
        role: "Engineering Lead",
        detail: "Built custom integration in 1 day",
      },
      stats: [
        { value: "< 50ms", label: "Median response" },
        { value: "1 day", label: "Avg. custom build time" },
        { value: "99.99%", label: "Uptime" },
        { value: "Full", label: "API documentation" },
      ],
    },
    cta: {
      headline: "Build something custom.",
      gradientText: "Start with the docs.",
      description: "API documentation, code examples, and sandbox environment. Everything you need to start building.",
      primaryCta: { text: "View API docs", href: "/docs/api" },
      secondaryCta: { text: "Get API key", href: "/developers/signup" },
    },
  },

  // 259
  {
    slug: "recruiter-partner-program",
    category: "partner",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Recruiter Partner Program — Earn Revenue Sharing With SkillPass | SkillPass",
      description:
        "Recruiting agencies: offer SkillPass-verified candidates and earn revenue share. Better candidates for clients, additional revenue for you.",
    },
    hero: {
      badge: "Partner Program",
      headline: "Better placements.",
      gradientText: "Revenue share.",
      subheadline:
        "If you're a recruiting agency, SkillPass makes your candidates more competitive and gives you a new revenue stream. Offer SkillPass-verified candidates to clients and earn revenue share on every plan they adopt.",
      primaryCta: { text: "Join partner program", href: "/partners/apply" },
      secondaryCta: { text: "Learn about the program", href: "/partners" },
      trustLine: "50+ recruiting agencies already partnered",
    },
    problem: {
      badge: "Recruiter pain",
      headline: "Your clients want better signal.",
      gradientText: "You're working with the same tools.",
      description:
        "Clients are demanding higher-quality candidates. Your pipeline is the same as every other agency's. You need a differentiator that makes your candidates provably better — not just arguably better.",
      stats: [
        { value: "72%", label: "Clients want verified skills", description: "More than two-thirds of hiring managers say they'd prefer candidates with independently verified skill data." },
        { value: "$0", label: "Cost to start", description: "The partner program is free to join. You earn revenue share on client plans — no upfront investment." },
        { value: "15%", label: "Revenue share", description: "Earn 15% of the first year's contract value for every client you bring to SkillPass. Recurring for renewals." },
      ],
    },
    solution: {
      badge: "How the program works",
      headline: "Verify candidates.",
      gradientText: "Earn on referrals.",
      description:
        "Get your candidates SkillPass-scored. Present verified SkillScores to clients. When clients adopt SkillPass, you earn 15% revenue share. Better placements and additional revenue.",
      features: [
        { title: "Free candidate scoring", description: "Score your candidates through SkillPass at no cost. Verified SkillScores make your submissions stand out." },
        { title: "Client referral revenue", description: "When clients adopt SkillPass through your referral, you earn 15% of year-one revenue. Ongoing for renewals." },
        { title: "Co-branded reports", description: "Generate co-branded candidate reports with your agency's branding and SkillPass verified data." },
        { title: "Dedicated partner support", description: "Named partner manager, priority support, and early access to new features." },
      ],
    },
    proof: {
      headline: "Partner results",
      testimonial: {
        quote: "We started presenting candidates with SkillScores attached. Our client placement rate went up 30% because the data gave clients confidence to move faster. The revenue share was a bonus on top.",
        name: "Lisa Fontaine",
        role: "Managing Director",
        detail: "Technical recruiting agency, 25 recruiters",
      },
      stats: [
        { value: "30%", label: "Higher placement rate" },
        { value: "15%", label: "Revenue share" },
        { value: "50+", label: "Agency partners" },
        { value: "$0", label: "Cost to join" },
      ],
    },
    cta: {
      headline: "Better candidates. Extra revenue.",
      gradientText: "Join the program.",
      description: "Free to join. Score your candidates, impress your clients, earn revenue share on adoptions.",
      primaryCta: { text: "Apply to partner program", href: "/partners/apply" },
      secondaryCta: { text: "Talk to partner team", href: "/contact?type=partner" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // PROFESSION PAIN POINTS (260–266)
  // ═══════════════════════════════════════════════════════════════

  // 260
  {
    slug: "swe-stop-whiteboarding",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Software Engineers: Stop Whiteboarding for Every Company | SkillPass",
      description:
        "You've reversed a linked list 47 times. Enough. A verified SkillScore proves your engineering ability once — and travels with you.",
    },
    hero: {
      badge: "For Software Engineers",
      headline: "You've reversed the linked list",
      gradientText: "enough times.",
      subheadline:
        "LeetCode marathons. 5-hour take-homes. Live coding under fluorescent lights while someone watches you type. You've proven you can code — dozens of times. Why are you still proving it?",
      primaryCta: { text: "Prove it once, free", href: "/signup" },
      secondaryCta: { text: "See the SWE assessment", href: "/assessments/swe" },
      trustLine: "Accepted by 500+ engineering teams",
    },
    problem: {
      badge: "The SWE interview loop",
      headline: "You spend more time interviewing",
      gradientText: "than building.",
      description:
        "The average software engineer spends 60+ hours on technical interviews per job search. That's almost two full work weeks. On problems that have nothing to do with the actual job.",
      stats: [
        { value: "60+ hrs", label: "Interview prep per search", description: "LeetCode, system design prep, mock interviews, take-homes. All unpaid. All repeated for every company." },
        { value: "82%", label: "Say interviews don't reflect the job", description: "Whiteboarding a tree traversal tells you nothing about building production software. Engineers know this." },
        { value: "12", label: "Avg. technical rounds per search", description: "Across multiple companies, you'll do about 12 technical assessments. Same skills tested, different day." },
      ],
    },
    solution: {
      badge: "Test once",
      headline: "One assessment.",
      gradientText: "Verified forever.",
      description:
        "The SkillPass SWE assessment covers algorithms, system design, code review, and debugging — the skills that actually matter. Take it once. Your results are permanent and accepted everywhere.",
      features: [
        { title: "Real-world problems", description: "No toy LeetCode problems. Code review, system design, debugging, and architecture — things you actually do at work." },
        { title: "Verified conditions", description: "Proctored assessment with identity verification. Employers trust the results because they're verifiable." },
        { title: "Portable results", description: "Take it once. Companies that use SkillPass accept your results in place of their own technical rounds." },
        { title: "Sub-skill breakdown", description: "See your strengths: maybe you're top 5% at system design but average at algorithms. The data is specific." },
      ],
    },
    proof: {
      headline: "Engineers who stopped repeating themselves",
      testimonial: {
        quote: "Last job search: 9 companies, 9 separate technical loops, 3 months of my life. This time: shared my SkillPass profile, 5 companies skipped their technicals entirely. Hired in 3 weeks.",
        name: "Tyler Barnes",
        role: "Senior Software Engineer",
        detail: "Skipped 5 technical loops using SkillPass",
      },
      stats: [
        { value: "5", label: "Technical loops skipped" },
        { value: "3 wks", label: "Job search (was 3 months)" },
        { value: "60+ hrs", label: "Interview time saved" },
        { value: "Free", label: "For engineers" },
      ],
    },
    cta: {
      headline: "Your last technical interview.",
      gradientText: "Make it count.",
      description: "Take the SkillPass SWE assessment once. Use the results everywhere. Free forever.",
      primaryCta: { text: "Take the SWE assessment", href: "/signup?role=swe" },
      secondaryCta: { text: "See what's tested", href: "/assessments/swe" },
    },
  },

  // 261
  {
    slug: "ds-one-portfolio",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Data Scientists: One Portfolio That Actually Proves Your Skills | SkillPass",
      description:
        "Kaggle notebooks and Jupyter demos don't prove you can do production data science. A SkillScore does. Verified, specific, portable.",
    },
    hero: {
      badge: "For Data Scientists",
      headline: "Your Kaggle profile isn't",
      gradientText: "convincing anyone.",
      subheadline:
        "Every DS candidate has Jupyter notebooks and Kaggle competition badges. None of it proves you can handle messy production data, build reliable pipelines, or communicate findings to stakeholders. A SkillScore does.",
      primaryCta: { text: "Build your DS proof", href: "/signup?role=ds" },
      secondaryCta: { text: "See DS assessments", href: "/assessments/data-science" },
      trustLine: "Covers statistical methods, ML ops, pipeline design, and communication",
    },
    problem: {
      badge: "The DS hiring gap",
      headline: "Everyone has notebooks.",
      gradientText: "Nobody can tell who's production-ready.",
      description:
        "Hiring managers can't distinguish a hobby Kaggler from a production data scientist by looking at GitHub repos. The portfolio format doesn't capture the skills that matter most in practice.",
      stats: [
        { value: "92%", label: "DS portfolios look identical", description: "MNIST classifier, Titanic survival, sentiment analysis. Every DS candidate has the same projects." },
        { value: "0", label: "Portfolios showing production skills", description: "Data cleaning, pipeline reliability, stakeholder communication — the real job isn't in any portfolio." },
        { value: "45%", label: "DS hires underperform", description: "Nearly half of data science hires fail to meet expectations within 6 months. The signal was wrong." },
      ],
    },
    solution: {
      badge: "Verified DS ability",
      headline: "Prove what portfolios",
      gradientText: "can't.",
      description:
        "The SkillPass DS assessment tests statistical rigor, ML engineering, data pipeline design, and findings communication. Production skills, not notebook polish.",
      features: [
        { title: "Statistical rigor assessment", description: "Do you actually understand the methods you're using, or are you importing sklearn and hoping? We'll tell you." },
        { title: "Pipeline design", description: "Can you build data pipelines that don't break at 3 AM? This section tests real-world reliability thinking." },
        { title: "ML operations", description: "Model deployment, monitoring, versioning, and maintenance. The stuff that separates researchers from practitioners." },
        { title: "Communication score", description: "Can you explain your findings to a non-technical stakeholder? This matters more than your model accuracy." },
      ],
    },
    proof: {
      headline: "Data scientists who stood out",
      testimonial: {
        quote: "I was competing against PhDs from Stanford with prettier notebooks. My SkillScore showed I was stronger in pipeline design and ML ops — the production skills. That's what got me the offer.",
        name: "Maria Santos",
        role: "Senior Data Scientist",
        detail: "Bootcamp grad competing against PhDs",
      },
      stats: [
        { value: "Top 8%", label: "Pipeline design score" },
        { value: "$125K", label: "Starting salary" },
        { value: "3x", label: "More callbacks" },
        { value: "Free", label: "Assessment" },
      ],
    },
    cta: {
      headline: "Your portfolio is a start.",
      gradientText: "Your SkillScore is proof.",
      description: "Take the DS assessment and show employers what notebooks never could. Free forever.",
      primaryCta: { text: "Build DS profile", href: "/signup?role=ds" },
      secondaryCta: { text: "See assessment details", href: "/assessments/data-science" },
    },
  },

  // 262
  {
    slug: "pm-prove-strategy",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Product Managers: Prove Your Strategic Ability | SkillPass",
      description:
        "PM hiring is subjective theater. Case studies test presentation skills, not product sense. A verified SkillScore measures what actually matters.",
    },
    hero: {
      badge: "For Product Managers",
      headline: "Stop doing case studies that test",
      gradientText: "your slide design.",
      subheadline:
        "PM interviews reward confidence and polish, not product sense. You do a case study, present pretty slides, and the loudest voice in the room wins. A SkillScore measures actual strategic ability — prioritization, user insight, technical fluency, and decision-making under ambiguity.",
      primaryCta: { text: "Prove your PM skills", href: "/signup?role=pm" },
      secondaryCta: { text: "See PM assessment", href: "/assessments/pm" },
      trustLine: "Covers prioritization, user insight, technical fluency, metrics design",
    },
    problem: {
      badge: "PM hiring is broken",
      headline: "The case study doesn't measure",
      gradientText: "product sense.",
      description:
        "A 60-minute case study measures your ability to present under pressure. It doesn't measure prioritization quality, user empathy, technical collaboration ability, or strategic thinking. Those are the skills that matter.",
      stats: [
        { value: "60 min", label: "Typical PM case study", description: "You get a vague prompt and an hour. What you produce says more about presentation skill than product ability." },
        { value: "3–5", label: "Case studies per job search", description: "Each one takes 4–8 hours of prep. 15–40 hours total, and none of the results carry over." },
        { value: "67%", label: "Of PM hires are evaluated on presentation", description: "Hiring panels consistently rate 'how they presented' over 'quality of their product thinking.' That's backwards." },
      ],
    },
    solution: {
      badge: "Measure real PM skills",
      headline: "Strategy. Prioritization.",
      gradientText: "Measured properly.",
      description:
        "The SkillPass PM assessment evaluates prioritization frameworks, user research interpretation, metrics design, technical trade-off analysis, and strategic decision-making. Not slide aesthetics.",
      features: [
        { title: "Prioritization assessment", description: "Real trade-off scenarios with incomplete information. How do you decide what to build and what to cut?" },
        { title: "User insight analysis", description: "Given raw user research, can you extract the right insights? This tests actual product sense." },
        { title: "Metrics design", description: "Define success metrics for a product. Shows whether you think in outcomes or outputs." },
        { title: "Technical fluency", description: "Can you have a productive conversation with engineers about trade-offs? We measure that directly." },
      ],
    },
    proof: {
      headline: "PMs who proved it differently",
      testimonial: {
        quote: "I'm not great at presenting under pressure, but I'm an excellent PM. My SkillScore showed top 10% prioritization and top 15% metrics design. Three companies offered me senior PM roles without a case study.",
        name: "Jerome Washington",
        role: "Senior Product Manager",
        detail: "Skipped case studies at 3 companies",
      },
      stats: [
        { value: "Top 10%", label: "Prioritization score" },
        { value: "3", label: "Offers without case studies" },
        { value: "20+ hrs", label: "Prep time saved" },
        { value: "Free", label: "Assessment" },
      ],
    },
    cta: {
      headline: "Your product sense deserves better than a case study.",
      gradientText: "Prove it properly.",
      description: "Take the PM assessment. Show what slides and case studies never capture. Free forever.",
      primaryCta: { text: "Build PM profile", href: "/signup?role=pm" },
      secondaryCta: { text: "See assessment details", href: "/assessments/pm" },
    },
  },

  // 263
  {
    slug: "designers-beyond-portfolio",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Designers: Go Beyond the Portfolio | SkillPass",
      description:
        "Portfolios show final output, not process. A verified SkillScore captures your design thinking, collaboration, and problem-solving ability.",
    },
    hero: {
      badge: "For Designers",
      headline: "Your portfolio shows the pixels.",
      gradientText: "Not the thinking behind them.",
      subheadline:
        "Every designer has a Dribbble with polished mockups. But design hiring isn't about pixel quality — it's about process, research rigor, stakeholder collaboration, and problem framing. Your portfolio can't show any of that.",
      primaryCta: { text: "Show your design thinking", href: "/signup?role=design" },
      secondaryCta: { text: "See design assessment", href: "/assessments/design" },
      trustLine: "Covers research, systems thinking, collaboration, and critique",
    },
    problem: {
      badge: "The portfolio trap",
      headline: "Beautiful Dribbble shots",
      gradientText: "don't predict design ability.",
      description:
        "Hiring managers scroll through your portfolio in 90 seconds. They see visual quality and skip over everything that matters: how you framed the problem, how you collaborated, how you handled constraints.",
      stats: [
        { value: "90 sec", label: "Time on your portfolio", description: "Hiring managers spend less than two minutes looking at months of work. They're judging visual polish, not skill." },
        { value: "0", label: "Process visible", description: "Your portfolio shows deliverables. It shows nothing about your research, iteration, stakeholder management, or decisions." },
        { value: "56%", label: "Design hires evaluated on aesthetics", description: "Over half of design hiring decisions are based primarily on visual output, not design thinking." },
      ],
    },
    solution: {
      badge: "Design skill, verified",
      headline: "Show the thinking.",
      gradientText: "Not just the output.",
      description:
        "The SkillPass design assessment evaluates research rigor, design systems thinking, collaboration patterns, critique handling, and problem framing. The skills that make you a great designer, not just a great visual artist.",
      features: [
        { title: "Research and insight extraction", description: "Can you plan research, synthesize findings, and translate insights into design decisions?" },
        { title: "Systems thinking", description: "Do you think in components, patterns, and scalable frameworks? Or do you design one-off screens?" },
        { title: "Collaboration and critique", description: "How do you handle feedback? Can you facilitate productive design reviews? Peer signal reveals this." },
        { title: "Problem framing", description: "Given a vague brief, can you ask the right questions and scope the real problem before jumping into Figma?" },
      ],
    },
    proof: {
      headline: "Designers who proved more than pixels",
      testimonial: {
        quote: "My portfolio was 'mid' — I don't spend time making case studies look gorgeous. But my SkillScore showed top 7% in research and top 12% in systems thinking. That's what got me hired as a lead.",
        name: "Chloe Kim",
        role: "Design Lead",
        detail: "Hired for design thinking, not visual polish",
      },
      stats: [
        { value: "Top 7%", label: "Research score" },
        { value: "Top 12%", label: "Systems thinking" },
        { value: "Lead role", label: "Hired directly" },
        { value: "Free", label: "Assessment" },
      ],
    },
    cta: {
      headline: "You're more than a portfolio.",
      gradientText: "Prove it.",
      description: "Take the design assessment. Show the thinking, collaboration, and rigor that portfolios miss. Free forever.",
      primaryCta: { text: "Build design profile", href: "/signup?role=design" },
      secondaryCta: { text: "See assessment details", href: "/assessments/design" },
    },
  },

  // 264
  {
    slug: "consultants-quantified",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Consultants: Quantify Your Broad Skill Set | SkillPass",
      description:
        "Consulting gives you broad skills and no way to prove any of them specifically. A SkillScore quantifies the analytical, strategic, and execution abilities that make consultants valuable.",
    },
    hero: {
      badge: "For Consultants",
      headline: "You can do everything.",
      gradientText: "You can prove none of it.",
      subheadline:
        "Three years in consulting gave you strategy, analytics, stakeholder management, and execution skills. But when you try to exit to industry, your resume just says \"Consultant at [Firm].\" Nobody knows what that means.",
      primaryCta: { text: "Quantify your skills", href: "/signup?role=consulting" },
      secondaryCta: { text: "How consulting translates", href: "/assessments/consulting" },
      trustLine: "Built with input from ex-MBB consultants",
    },
    problem: {
      badge: "The exit problem",
      headline: "\"What do you actually do\"",
      gradientText: "is impossible to answer briefly.",
      description:
        "Consulting is a generalist role. You've done strategy, operations, analytics, and stakeholder management — but each one at different depths. When you exit to industry, translating that into a specific skill set is brutal.",
      stats: [
        { value: "4.2 mo", label: "Avg. exit job search", description: "Consultants take longer to find industry roles because they struggle to prove specific skill depth." },
        { value: "38%", label: "Take a lower title", description: "Over a third of consultants exit at a lower title than their consulting experience justifies." },
        { value: "0", label: "Standard way to quantify it", description: "There's no standard framework for translating consulting experience into provable, specific skills." },
      ],
    },
    solution: {
      badge: "Skills, quantified",
      headline: "Turn \"I can do everything\" into",
      gradientText: "specific, verified scores.",
      description:
        "SkillPass assesses the specific abilities that make consultants valuable: analytical rigor, strategic reasoning, stakeholder communication, and execution planning. Each one scored separately.",
      features: [
        { title: "Analytical rigor", description: "Data analysis, framework application, hypothesis testing. The quantitative backbone of consulting, measured." },
        { title: "Strategic reasoning", description: "Market analysis, competitive positioning, business model evaluation. Your strategy skills, scored." },
        { title: "Stakeholder communication", description: "Can you synthesize complex findings for executives? Peer reviews and assessments capture this." },
        { title: "Execution planning", description: "Can you turn strategy into an actionable plan? This is what industry roles actually need from ex-consultants." },
      ],
    },
    proof: {
      headline: "Consultants who made the transition",
      testimonial: {
        quote: "I was interviewing for PM roles and kept getting asked to prove I could 'go deep.' My SkillScore showed top 10% analytical rigor and top 15% execution planning. That was the proof they needed.",
        name: "Patrick O'Neill",
        role: "Ex-BCG, now Head of Strategy",
        detail: "Used SkillScore to exit consulting",
      },
      stats: [
        { value: "Top 10%", label: "Analytical rigor" },
        { value: "2 mo", label: "Job search (avg. is 4.2)" },
        { value: "No title cut", label: "Exited at equivalent level" },
        { value: "Free", label: "To build" },
      ],
    },
    cta: {
      headline: "You know you're good.",
      gradientText: "Now prove it specifically.",
      description: "Quantify your consulting skills into verified, specific scores that industry hiring managers understand. Free forever.",
      primaryCta: { text: "Build consulting profile", href: "/signup?role=consulting" },
      secondaryCta: { text: "See the assessment", href: "/assessments/consulting" },
    },
  },

  // 265
  {
    slug: "financial-analysts-verified",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Financial Analysts: Verified Modeling and Analysis Skills | SkillPass",
      description:
        "Excel tests and case competitions are ancient. Get your financial modeling, valuation, and analysis skills verified once with SkillPass.",
    },
    hero: {
      badge: "For Financial Analysts",
      headline: "You've built more DCFs than",
      gradientText: "you can count.",
      subheadline:
        "Every finance interview is the same: walk me through a DCF, build a quick model, here's a case. You've done it a hundred times. A verified SkillScore proves your modeling, valuation, and analysis chops once — for every employer.",
      primaryCta: { text: "Verify finance skills", href: "/signup?role=finance" },
      secondaryCta: { text: "See finance assessment", href: "/assessments/finance" },
      trustLine: "Covers modeling, valuation, scenario analysis, and market fluency",
    },
    problem: {
      badge: "Finance hiring rituals",
      headline: "Same modeling test.",
      gradientText: "Different bank.",
      description:
        "Financial analyst hiring revolves around modeling tests that every candidate has practiced the exact same way. The test doesn't differentiate you. It just confirms you've prepped.",
      stats: [
        { value: "8+", label: "Modeling tests per search", description: "Each bank or fund makes you build a model from scratch. Same skills, different spreadsheet, every time." },
        { value: "30 hrs", label: "Prep time per cycle", description: "Breaking into finance means weeks of model prep on top of your actual job or coursework." },
        { value: "95%", label: "Pass rate on standard models", description: "Everyone passes the model test. It doesn't differentiate — it just wastes everyone's time." },
      ],
    },
    solution: {
      badge: "Verified finance ability",
      headline: "Model once.",
      gradientText: "Score travels everywhere.",
      description:
        "The SkillPass finance assessment goes beyond basic DCF. It tests your ability to handle messy inputs, build dynamic scenario models, interpret market data, and communicate implications.",
      features: [
        { title: "Advanced modeling", description: "Not a basic 3-statement model. Dynamic scenarios, sensitivity analysis, and LBO mechanics under time pressure." },
        { title: "Valuation breadth", description: "DCF, comps, precedent transactions, and when to use each. Testing judgment, not just formulas." },
        { title: "Market fluency", description: "Can you interpret macro data and connect it to company performance? Finance isn't just modeling." },
        { title: "Communication of implications", description: "Can you turn model output into a recommendation? The assessment measures this explicitly." },
      ],
    },
    proof: {
      headline: "Analysts who proved it once",
      testimonial: {
        quote: "I shared my SkillScore with a fund that usually requires a 4-hour modeling test. They looked at my Assessed Ability sub-score and said 'we don't need the test.' First time that's ever happened.",
        name: "Alexis Brennan",
        role: "Investment Analyst",
        detail: "Skipped modeling test at a top fund",
      },
      stats: [
        { value: "1", label: "Assessment needed" },
        { value: "30+ hrs", label: "Saved per search" },
        { value: "Top 9%", label: "Modeling score" },
        { value: "Free", label: "Assessment" },
      ],
    },
    cta: {
      headline: "Build the model one last time.",
      gradientText: "Let the score do the rest.",
      description: "Take the finance assessment once. Verified results that every employer can see. Free forever.",
      primaryCta: { text: "Take finance assessment", href: "/signup?role=finance" },
      secondaryCta: { text: "Assessment details", href: "/assessments/finance" },
    },
  },

  // 266
  {
    slug: "engineers-calibrated",
    category: "profession-pain",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Engineers: Get Calibrated Against Your Peers | SkillPass",
      description:
        "Where do you actually stand among engineers at your level? A SkillScore gives you a verified, calibrated ranking — not just a gut feeling.",
    },
    hero: {
      badge: "For All Engineers",
      headline: "Are you as good as you think?",
      gradientText: "Find out for sure.",
      subheadline:
        "You probably have a sense of where you stand relative to other engineers. But \"I think I'm pretty good\" isn't data. A SkillScore tells you exactly where you rank — verified, calibrated, and percentile-based.",
      primaryCta: { text: "Get calibrated free", href: "/signup?role=eng" },
      secondaryCta: { text: "What calibration includes", href: "/how-it-works" },
      trustLine: "Calibrated against 50,000+ engineers across all levels",
    },
    problem: {
      badge: "The calibration gap",
      headline: "You have no idea where you",
      gradientText: "actually stand.",
      description:
        "Within your team, you might be the best. But compared to the broader market? Compared to engineers at your level at other companies? You're guessing. And guessing costs you — in interviews, negotiations, and career decisions.",
      stats: [
        { value: "71%", label: "Over-estimate their level", description: "Most engineers rate themselves higher than their actual market position. That's not arrogance — it's lack of data." },
        { value: "$23K", label: "Avg. under-negotiation", description: "Engineers without market calibration leave an average of $23K on the table in compensation negotiations." },
        { value: "0", label: "Ways to calibrate today", description: "Until SkillPass, there was no standardized way to know where you stand relative to the full market." },
      ],
    },
    solution: {
      badge: "Know your position",
      headline: "Verified percentile ranking",
      gradientText: "against 50,000+ engineers.",
      description:
        "Your SkillScore places you on a calibrated scale against tens of thousands of other engineers. Percentile ranking by level, specialty, and years of experience.",
      features: [
        { title: "Percentile by level", description: "See where you rank among junior, mid, senior, and staff engineers. Calibrated to your actual experience range." },
        { title: "Specialty comparison", description: "Backend, frontend, infra, mobile, data — see your ranking within your specific specialty." },
        { title: "Sub-skill breakdown", description: "Strong at system design but average at algorithms? Your sub-scores show exactly where your strengths are." },
        { title: "Growth tracking", description: "Retake assessments over time and watch your calibration improve. Concrete evidence of skill growth." },
      ],
    },
    proof: {
      headline: "Engineers who got calibrated",
      testimonial: {
        quote: "I thought I was a solid mid-level engineer. SkillPass put me at the 82nd percentile for my experience range — senior territory. I used that data to negotiate a $30K raise at my current company.",
        name: "Ben Tucker",
        role: "Software Engineer",
        detail: "Used calibration data to negotiate $30K raise",
      },
      stats: [
        { value: "82nd", label: "Percentile" },
        { value: "$30K", label: "Raise negotiated" },
        { value: "50K+", label: "Engineer comparison pool" },
        { value: "Free", label: "To calibrate" },
      ],
    },
    cta: {
      headline: "Stop guessing.",
      gradientText: "Know where you stand.",
      description: "Get calibrated against 50,000+ engineers. Free, verified, and eye-opening.",
      primaryCta: { text: "Get calibrated", href: "/signup?role=eng" },
      secondaryCta: { text: "See sample calibration", href: "/demo" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // EMPLOYER CHALLENGES (267–274)
  // ═══════════════════════════════════════════════════════════════

  // 267
  {
    slug: "first-10-engineers",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Hiring Your First 10 Engineers — Get It Right | SkillPass",
      description:
        "Your first 10 engineers define your company's DNA. SkillPass helps early-stage startups find verified talent without a recruiting team.",
    },
    hero: {
      badge: "Early-stage hiring",
      headline: "Your first 10 engineers",
      gradientText: "define everything.",
      subheadline:
        "At this stage, every hire either accelerates you or kills you. You don't have a recruiting team, you don't have employer brand, and you definitely don't have time for a 6-round interview loop. You need verified signal, fast.",
      primaryCta: { text: "Find your first 10", href: "/employers/signup" },
      secondaryCta: { text: "See how startups use SkillPass", href: "/case-studies/startup" },
      trustLine: "Built for founders hiring without a recruiting team",
    },
    problem: {
      badge: "Founder reality",
      headline: "You're the CEO, CTO, and recruiter.",
      gradientText: "All at once.",
      description:
        "You're spending 40% of your time on hiring when you should be building. Every engineering hour you spend screening resumes is an engineering hour not spent on product. And you're still not sure you're picking the right people.",
      stats: [
        { value: "40%", label: "Founder time on hiring", description: "Early-stage founders report spending 30–50% of their time on recruiting. That's not sustainable." },
        { value: "$0", label: "Recruiting budget", description: "You can't afford a recruiter or agency fees. You need a tool that gives you signal without a team." },
        { value: "1 bad hire", label: "Can sink an early startup", description: "When you only have 5 engineers, one bad hire is 20% of your technical team. The stakes are existential." },
      ],
    },
    solution: {
      badge: "Signal without a team",
      headline: "Verified candidates.",
      gradientText: "No recruiter required.",
      description:
        "Search SkillPass for engineers in your area and skill range. Filter by SkillScore, sub-scores, and specialty. Reach out directly. Skip the entire traditional screening pipeline.",
      features: [
        { title: "Direct search", description: "Search for engineers by location, specialty, score range, and availability. Build a shortlist in minutes." },
        { title: "Score-based shortlisting", description: "Set a SkillScore threshold and see only candidates who clear it. No resume reading required." },
        { title: "Sub-score matching", description: "Need a strong systems person? Filter by Assessed Ability and Performance sub-scores." },
        { title: "Founder-friendly pricing", description: "Starter plan at $299/mo. One good hire saves you $15K+ in costs and months of your time." },
      ],
    },
    proof: {
      headline: "Founders who found their first engineers",
      testimonial: {
        quote: "I hired my first 3 engineers through SkillPass in 6 weeks. No recruiter, no agency, no 6-round loop. Searched by score, had coffee, made offers. All three are still here a year later.",
        name: "Nathan Cross",
        role: "CTO & Co-founder",
        detail: "Seed-stage startup, hired first 3 engineers",
      },
      stats: [
        { value: "6 wks", label: "To hire 3 engineers" },
        { value: "$0", label: "Agency fees" },
        { value: "100%", label: "1-year retention" },
        { value: "$299/mo", label: "SkillPass cost" },
      ],
    },
    cta: {
      headline: "Your first 10 matter most.",
      gradientText: "Don't guess.",
      description: "Search verified engineers, filter by score, and start building your founding team. $299/mo or start with a free pilot.",
      primaryCta: { text: "Start searching", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
    },
  },

  // 268
  {
    slug: "scaling-50-500",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Scaling From 50 to 500 — Hire Quality at Volume | SkillPass",
      description:
        "Growing fast? Maintain hire quality while tripling your team. SkillPass gives you consistent scoring across every hire.",
    },
    hero: {
      badge: "Scaling teams",
      headline: "Growing 10x shouldn't mean",
      gradientText: "dropping your bar.",
      subheadline:
        "When you're scaling from 50 to 500, the pressure to fill seats is enormous. Quality starts to slip. Interview standards vary by team. SkillPass keeps your bar consistent with verified scores on every candidate.",
      primaryCta: { text: "Scale with verified data", href: "/employers/signup" },
      secondaryCta: { text: "How scaling teams use SkillPass", href: "/case-studies" },
      trustLine: "Used by companies scaling from 50 to 5,000+",
    },
    problem: {
      badge: "The scaling trap",
      headline: "Every new hiring manager",
      gradientText: "has a different bar.",
      description:
        "At 50 people, the founders interview everyone. At 200, you've got 15 different hiring managers with 15 different standards. Quality becomes inconsistent because the evaluation isn't standardized.",
      stats: [
        { value: "15+", label: "Hiring managers", description: "Each one with their own idea of 'senior' and their own interview style. Consistency drops as you grow." },
        { value: "2.3x", label: "Bad hire rate at scale", description: "Companies scaling quickly see bad hire rates increase 2.3x compared to their early-stage hiring." },
        { value: "38%", label: "Quality variance across teams", description: "Different teams, different interviewers, different outcomes. The bar isn't consistent." },
      ],
    },
    solution: {
      badge: "Consistent quality at scale",
      headline: "One standard.",
      gradientText: "Every hire.",
      description:
        "SkillPass provides a consistent, verified score for every candidate regardless of which team they're interviewing with. The SkillScore is the same whether they talk to Team A or Team B.",
      features: [
        { title: "Standardized scoring", description: "Every candidate evaluated on the same verified criteria. No more team-to-team variance." },
        { title: "Role-specific thresholds", description: "Set minimum SkillScore thresholds by role level: junior, mid, senior, staff. Enforce your bar." },
        { title: "Hiring manager alignment", description: "When everyone sees the same verified data, calibration conversations get shorter and more productive." },
        { title: "Quality tracking over time", description: "Track average SkillScore of hires over time. If the bar is slipping, you'll see it in the data." },
      ],
    },
    proof: {
      headline: "Scaling without quality loss",
      testimonial: {
        quote: "We went from 80 to 350 in 18 months. Our bad hire rate would have spiked, but SkillPass kept the bar consistent. Every hiring manager used the same data. Quality stayed flat even as speed increased.",
        name: "Angela Brooks",
        role: "VP of Engineering",
        detail: "Scaled team from 80 to 350",
      },
      stats: [
        { value: "80→350", label: "Team growth" },
        { value: "0%", label: "Quality decline" },
        { value: "55%", label: "Faster time to hire" },
        { value: "Consistent", label: "Bar across all teams" },
      ],
    },
    cta: {
      headline: "Scale fast without dropping your bar.",
      gradientText: "Start now.",
      description: "Standardize your hiring with verified SkillScores. Every candidate, every team, same data.",
      primaryCta: { text: "Start scaling right", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
    },
  },

  // 269
  {
    slug: "post-fundraise-sprint",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Post-Fundraise Hiring Sprint — Hit Headcount Goals Fast | SkillPass",
      description:
        "Just raised? Board wants 20 hires in 90 days? SkillPass helps you hit headcount targets without sacrificing quality.",
    },
    hero: {
      badge: "Post-fundraise",
      headline: "You raised the round.",
      gradientText: "Now hire 20 people in 90 days.",
      subheadline:
        "The board wants headcount growth. Your investors want to see the plan executing. You've got 90 days to make 20+ hires without dropping quality. Traditional hiring pipelines can't move that fast. SkillPass can.",
      primaryCta: { text: "Accelerate hiring", href: "/employers/signup" },
      secondaryCta: { text: "See the sprint playbook", href: "/resources/hiring-sprint" },
      trustLine: "Used by 50+ companies post-raise to hit headcount targets",
    },
    problem: {
      badge: "The clock is ticking",
      headline: "90 days. 20 hires.",
      gradientText: "Your current pipeline takes 38.",
      description:
        "If your average time-to-hire is 38 days and you need 20 hires in 90 days, the math doesn't work — unless you have 15 roles running simultaneously. You need to compress the timeline per hire.",
      stats: [
        { value: "38 days", label: "Avg. time to hire", description: "That's the industry average. For 20 hires, you'd need to start all of them simultaneously." },
        { value: "20", label: "Hires needed post-raise", description: "Average headcount target after a Series A/B raise. Board is tracking this monthly." },
        { value: "90 days", label: "To show progress", description: "Three months is the typical board-expectations window. Miss it and you lose confidence." },
      ],
    },
    solution: {
      badge: "Sprint-mode hiring",
      headline: "Compress the pipeline.",
      gradientText: "Hit the target.",
      description:
        "SkillPass cuts 3–4 steps from your pipeline by replacing manual screening with verified scoring. Time-to-hire drops to 16 days average, making 20 hires in 90 days entirely achievable.",
      features: [
        { title: "Instant shortlists", description: "Search and filter candidates by SkillScore. Build a qualified shortlist in hours, not weeks." },
        { title: "Skip redundant rounds", description: "SkillScores replace resume screening, phone screens, and initial technicals. Go straight to meaningful conversations." },
        { title: "Parallel processing", description: "With faster per-candidate cycles, you can run 10+ roles simultaneously without overwhelming your team." },
        { title: "Quality dashboards", description: "Track hire quality in real-time. Speed without sacrificing the bar." },
      ],
    },
    proof: {
      headline: "Post-raise sprint results",
      testimonial: {
        quote: "After our Series B, we needed 25 hires in 100 days. We hit 28. SkillPass cut our per-hire timeline from 35 days to 14. We were ahead of schedule for the first time in the company's history.",
        name: "Sandra Kim",
        role: "Head of People",
        detail: "Series B company, hit 28 hires in 100 days",
      },
      stats: [
        { value: "28", label: "Hires in 100 days" },
        { value: "14 days", label: "Avg. time to hire (was 35)" },
        { value: "0", label: "Quality compromises" },
        { value: "Ahead", label: "Of board schedule" },
      ],
    },
    cta: {
      headline: "The clock started when you closed the round.",
      gradientText: "Start hiring now.",
      description: "Set up SkillPass in an afternoon and start filling roles this week. You don't have 38 days per hire anymore.",
      primaryCta: { text: "Start sprint hiring", href: "/employers/signup" },
      secondaryCta: { text: "Talk to our sprint team", href: "/contact" },
    },
  },

  // 270
  {
    slug: "replacing-tech-leader",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Replacing a Tech Leader — Find the Right Senior Hire | SkillPass",
      description:
        "Lost your VP Eng or CTO? You can't afford to get this hire wrong. SkillPass verifies senior technical ability so you hire a leader, not a talker.",
    },
    hero: {
      badge: "Critical hire",
      headline: "Your CTO just left.",
      gradientText: "The replacement can't be wrong.",
      subheadline:
        "Senior technical hires are the hardest to evaluate and the most expensive to get wrong. At this level, everyone interviews well. SkillPass shows you verified ability, not rehearsed answers.",
      primaryCta: { text: "Find verified leaders", href: "/employers/signup" },
      secondaryCta: { text: "How senior scoring works", href: "/how-it-works" },
      trustLine: "Used for VP Eng, CTO, and Principal searches",
    },
    problem: {
      badge: "The senior hire trap",
      headline: "At this level, everyone",
      gradientText: "interviews like a leader.",
      description:
        "You can't whiteboard a VP of Engineering. Reference checks are hand-picked. War stories are polished. The higher the level, the harder it is to separate genuine technical leadership from impressive presentation skills.",
      stats: [
        { value: "$350K+", label: "Cost of a bad senior hire", description: "Salary, equity, team disruption, strategic misdirection, and the search to replace them. Easily $350K+." },
        { value: "6 mo", label: "To realize the mistake", description: "Senior hires fail slowly. By the time you know, they've shaped architecture, hired people, and set direction." },
        { value: "92%", label: "Pass the interview", description: "At senior levels, nearly everyone interviews well. The interview doesn't differentiate." },
      ],
    },
    solution: {
      badge: "Verified leadership",
      headline: "See beyond the interview.",
      gradientText: "Verify the ability.",
      description:
        "SkillPass scores senior candidates on verified technical depth, peer reputation across their career, and actual performance data. The stuff you can't assess in a 60-minute conversation.",
      features: [
        { title: "Career-spanning peer signal", description: "References from across their career — not just the 3 they picked. Structured data on 8 leadership dimensions." },
        { title: "Technical depth verification", description: "Are they genuinely technical or just technical enough to manage? The assessment data shows the truth." },
        { title: "Performance track record", description: "Verified output metrics from previous roles. Did they actually ship, or did they talk about shipping?" },
        { title: "Score context at senior level", description: "Percentile ranking among other senior/staff/VP-level engineers. Calibrated to their actual peer group." },
      ],
    },
    proof: {
      headline: "Senior searches that worked",
      testimonial: {
        quote: "We were choosing between two VP Eng finalists. Both interviewed brilliantly. Their SkillScores told a different story — one was top 5% in Peer Signal, the other was bottom quartile. That data made the decision obvious.",
        name: "Robert Yates",
        role: "CEO",
        detail: "Used SkillPass for VP Engineering search",
      },
      stats: [
        { value: "Top 5%", label: "Candidate they chose" },
        { value: "18 mo", label: "Still thriving" },
        { value: "$350K+", label: "Bad hire cost avoided" },
        { value: "1 data point", label: "Made the difference" },
      ],
    },
    cta: {
      headline: "This hire is too important to guess.",
      gradientText: "Verify the candidates.",
      description: "Use SkillPass data to supplement your senior search. The interview won't tell you everything. The data will.",
      primaryCta: { text: "Start searching", href: "/employers/signup" },
      secondaryCta: { text: "Talk to enterprise sales", href: "/contact" },
    },
  },

  // 271
  {
    slug: "building-data-team",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Building a Data Team From Scratch | SkillPass",
      description:
        "Starting your data team? SkillPass helps you find verified data scientists, analysts, and engineers without guessing who's actually production-ready.",
    },
    hero: {
      badge: "Data team building",
      headline: "Building a data team?",
      gradientText: "Don't guess who's production-ready.",
      subheadline:
        "Everyone claims data skills now. Bootcamp grads, self-taught Kagglers, PhD researchers — they all say they can do production data science. SkillPass verifies who actually can.",
      primaryCta: { text: "Find verified data talent", href: "/employers/signup" },
      secondaryCta: { text: "See DS scoring", href: "/assessments/data-science" },
      trustLine: "Data-specific sub-scores: modeling, pipelines, ML ops, communication",
    },
    problem: {
      badge: "The data talent problem",
      headline: "Everyone's a",
      gradientText: "\"data scientist\" now.",
      description:
        "The title 'data scientist' covers everything from SQL analysts to ML researchers. When you're building a team from scratch, you need to know exactly what each person can actually do — not what their LinkedIn says.",
      stats: [
        { value: "400%", label: "Growth in 'data scientist' titles", description: "The number of people calling themselves data scientists has grown 4x in 5 years. The skill distribution hasn't." },
        { value: "45%", label: "Can't handle production data", description: "Nearly half of data hire candidates can clean a Kaggle dataset but freeze when faced with messy real-world data." },
        { value: "3.5 mo", label: "To discover a bad data hire", description: "It takes months to realize a data hire can't actually operate independently in production." },
      ],
    },
    solution: {
      badge: "Data-specific verification",
      headline: "Verified data skills.",
      gradientText: "Not just the title.",
      description:
        "SkillPass data assessments test the specific skills that matter: statistical rigor, pipeline design, ML operations, and stakeholder communication. Not notebook polish.",
      features: [
        { title: "Production readiness scores", description: "Can they handle messy data, build reliable pipelines, and deploy models? Separate scores for each." },
        { title: "Specialty matching", description: "Analytics, ML engineering, research, or full-stack data science? Sub-scores show where each candidate is strongest." },
        { title: "Communication assessment", description: "Can they explain findings to non-technical stakeholders? This is the most overlooked data skill." },
        { title: "Team composition planning", description: "See the skill distribution of your shortlist. Build a team with complementary strengths, not overlapping gaps." },
      ],
    },
    proof: {
      headline: "Data teams built with SkillPass",
      testimonial: {
        quote: "We hired 4 data scientists using SkillPass. All scored high on production readiness, which is the score we weighted most. 6 months in, all 4 are operating independently. Zero misses.",
        name: "Michelle Torres",
        role: "VP of Data",
        detail: "Built data team from 0 to 4 with SkillPass",
      },
      stats: [
        { value: "4/4", label: "Hires performing well" },
        { value: "0", label: "Production readiness issues" },
        { value: "6 mo", label: "All operating independently" },
        { value: "3 wks", label: "Average time to hire" },
      ],
    },
    cta: {
      headline: "Build your data team right.",
      gradientText: "Start with verified talent.",
      description: "Search data talent by specialty and production readiness. Know who can actually do the work before you hire them.",
      primaryCta: { text: "Find data talent", href: "/employers/signup" },
      secondaryCta: { text: "See pricing", href: "/pricing" },
    },
  },

  // 272
  {
    slug: "quality-over-quantity",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Quality Over Quantity — Stop Hiring by Volume | SkillPass",
      description:
        "You don't need more candidates. You need better signal on the ones you have. SkillPass replaces volume-based screening with verified quality.",
    },
    hero: {
      badge: "Quality-first hiring",
      headline: "You don't have a sourcing problem.",
      gradientText: "You have a signal problem.",
      subheadline:
        "Your job posts get 500 applicants. The problem isn't volume. The problem is that you can't tell which 10 out of 500 are genuinely strong. SkillPass gives you that signal.",
      primaryCta: { text: "Get better signal", href: "/employers/signup" },
      secondaryCta: { text: "How scoring works", href: "/how-it-works" },
      trustLine: "Filter 500 applicants down to 10 in minutes",
    },
    problem: {
      badge: "Volume isn't the answer",
      headline: "500 applicants.",
      gradientText: "Zero signal.",
      description:
        "You're not struggling to find people who want to work for you. You're struggling to figure out which ones can actually do the job. More sourcing won't fix that. Better evaluation will.",
      stats: [
        { value: "500+", label: "Applicants per role", description: "You have plenty of candidates. What you don't have is a fast, reliable way to evaluate them." },
        { value: "11 min", label: "Per resume (manual review)", description: "To properly evaluate a resume takes 11 minutes. Times 500, that's 92 hours per role." },
        { value: "3%", label: "Are actually qualified", description: "Out of 500 applicants, maybe 15 are worth interviewing. You're spending 92 hours to find 15 people." },
      ],
    },
    solution: {
      badge: "Signal, not volume",
      headline: "Filter by verified score.",
      gradientText: "Interview only the best.",
      description:
        "Set a SkillScore threshold and instantly see which candidates clear the bar. 500 applicants become 15 qualified candidates in seconds, not weeks.",
      features: [
        { title: "Score-based filtering", description: "Set your minimum SkillScore. Only see candidates who meet it. 500 to 15 in seconds." },
        { title: "Sub-score weighting", description: "Emphasize the dimensions that matter for this role. Need strong peer signal? Weight it. Need raw technical ability? Weight that." },
        { title: "Instant shortlists", description: "The shortlist is ready the moment you define your criteria. No manual screening required." },
        { title: "Quality benchmarks", description: "See how your shortlist compares to market averages. Know whether your bar is realistic or you need to adjust." },
      ],
    },
    proof: {
      headline: "Quality-first results",
      testimonial: {
        quote: "We used to screen every resume manually. 500 applicants, 2 weeks of recruiter time. Now we filter by SkillScore, get a shortlist of 20, and start interviewing the same day. Quality went up, not down.",
        name: "Rachel Adams",
        role: "Director of Recruiting",
        detail: "Reduced screening from 2 weeks to 2 minutes",
      },
      stats: [
        { value: "2 min", label: "Screening time (was 2 weeks)" },
        { value: "20", label: "Candidates from 500" },
        { value: "3x", label: "Hire quality improvement" },
        { value: "Same day", label: "Interviews start" },
      ],
    },
    cta: {
      headline: "Stop drowning in resumes.",
      gradientText: "Start filtering by proof.",
      description: "Set your quality bar. See who clears it. Interview only the best. It's that simple.",
      primaryCta: { text: "Start filtering", href: "/employers/signup" },
      secondaryCta: { text: "See a demo", href: "/demo" },
    },
  },

  // 273
  {
    slug: "reduce-time-to-offer",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Reduce Time-to-Offer Before Candidates Accept Elsewhere | SkillPass",
      description:
        "Your best candidates have 3 offers by the time you schedule a second round. SkillPass cuts time-to-offer by 60% so you stop losing talent to faster companies.",
    },
    hero: {
      badge: "Speed matters",
      headline: "By the time you make an offer,",
      gradientText: "they've already accepted one.",
      subheadline:
        "Top candidates don't wait. If your process takes 38 days and your competitor's takes 14, you're not even in the running. SkillPass cuts time-to-offer by 60% so you reach the best people before they're gone.",
      primaryCta: { text: "Speed up your pipeline", href: "/employers/signup" },
      secondaryCta: { text: "See time-to-offer data", href: "/resources/time-to-offer" },
      trustLine: "Avg. 16 days to offer for SkillPass customers (industry avg: 38)",
    },
    problem: {
      badge: "You're too slow",
      headline: "Your pipeline has",
      gradientText: "5 bottlenecks.",
      description:
        "Resume review (3 days), phone screen scheduling (4 days), technical round (5 days), onsite scheduling (5 days), decision (3 days). That's 20 days of dead time — and that's optimistic.",
      stats: [
        { value: "38 days", label: "Avg. time to offer", description: "From application to offer letter. For top candidates, that's 37 days too many." },
        { value: "57%", label: "Of candidates drop out", description: "Over half of candidates abandon your process for a faster one. You're losing them to speed, not comp." },
        { value: "14 days", label: "Competitor's timeline", description: "Fast-moving companies are making offers in 2 weeks. That's the benchmark you're competing against." },
      ],
    },
    solution: {
      badge: "Compress every step",
      headline: "From 38 days",
      gradientText: "to 16.",
      description:
        "SkillPass eliminates the three slowest steps: resume review, phone screens, and initial technical rounds. What's left — meaningful conversation and offer — can happen in days, not weeks.",
      features: [
        { title: "Day 1: Shortlist ready", description: "Candidates filtered by SkillScore the moment they apply. No manual screening delay." },
        { title: "Day 2–5: Meaningful conversations", description: "Jump straight to culture and team-fit interviews. Skills are already verified." },
        { title: "Day 6–10: Final interview", description: "One deep-dive interview focused on mutual fit. Not another skills test." },
        { title: "Day 11–16: Offer", description: "Decision and offer within two weeks. Competitive with the fastest companies in your market." },
      ],
    },
    proof: {
      headline: "Speed wins",
      testimonial: {
        quote: "Our offer acceptance rate was 61%. We were losing everyone to Google and Stripe because they moved faster. After SkillPass cut our timeline to 14 days, acceptance jumped to 88%.",
        name: "Karen Zhang",
        role: "VP of People",
        detail: "Offer acceptance: 61% to 88%",
      },
      stats: [
        { value: "16 days", label: "New avg. time to offer" },
        { value: "88%", label: "Offer acceptance (was 61%)" },
        { value: "60%", label: "Time reduction" },
        { value: "0", label: "Quality trade-off" },
      ],
    },
    cta: {
      headline: "Stop losing candidates to slower processes.",
      gradientText: "Move faster.",
      description: "SkillPass compresses your pipeline from 38 days to 16. Set up in an afternoon. Start making offers this week.",
      primaryCta: { text: "Speed up now", href: "/employers/signup" },
      secondaryCta: { text: "See the math", href: "/tools/roi-calculator" },
    },
  },

  // 274
  {
    slug: "stop-wasting-eng-hours",
    category: "employer-challenge",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Stop Wasting Engineering Hours on Interviews | SkillPass",
      description:
        "Your engineers are spending 20% of their time interviewing. SkillPass cuts interview load by 70% so your team can build product.",
    },
    hero: {
      badge: "Engineering time",
      headline: "Your engineers are building",
      gradientText: "interview panels, not product.",
      subheadline:
        "Every engineer hour spent interviewing is an engineer hour not spent building. SkillPass eliminates redundant technical rounds so your team spends 70% less time in interviews — without sacrificing hire quality.",
      primaryCta: { text: "Free your engineers", href: "/employers/signup" },
      secondaryCta: { text: "Calculate your lost hours", href: "/tools/roi-calculator" },
      trustLine: "Avg. 1,200 engineering hours saved per year per 100 hires",
    },
    problem: {
      badge: "The hidden cost",
      headline: "Your most expensive employees are",
      gradientText: "conducting unpaid interviews.",
      description:
        "A senior engineer costs $200/hr fully loaded. If they spend 30 hours per hire interviewing candidates, and you make 40 hires a year, that's $240K in engineering time spent on interviews. Per year.",
      stats: [
        { value: "30 hrs", label: "Eng time per hire", description: "Technical screens, pair programming, system design reviews, debrief meetings. It adds up fast." },
        { value: "$240K", label: "Annual cost (40 hires)", description: "At $200/hr loaded cost and 30 hours per hire, 40 hires costs you $240K in engineering time alone." },
        { value: "20%", label: "Of eng time on interviews", description: "One in five engineering hours goes to interviews. That's one full day per week, per engineer on a hiring panel." },
      ],
    },
    solution: {
      badge: "Take back their time",
      headline: "One verified data point.",
      gradientText: "Three fewer interview rounds.",
      description:
        "When candidates come with verified SkillScores, you don't need a phone screen, an initial technical round, or a take-home. One deep-dive technical conversation replaces three shallow ones.",
      features: [
        { title: "Skip the phone screen", description: "SkillScore tells you more than a 30-minute call. Go directly to meaningful interviews." },
        { title: "Eliminate take-homes", description: "Assessed Ability sub-scores replace take-home assignments. Candidates love this too." },
        { title: "One technical round, not three", description: "With skills pre-verified, one deep-dive conversation is enough. Focus on architecture and collaboration fit." },
        { title: "Debrief in 10 minutes", description: "When everyone has the same verified data, debrief meetings shrink from 60 minutes to 10." },
      ],
    },
    proof: {
      headline: "Engineering time reclaimed",
      testimonial: {
        quote: "We calculated our engineering interview load: 1,400 hours per year. After SkillPass, it dropped to 420. We got back nearly 1,000 hours of building time. It's like hiring 0.5 more engineers for free.",
        name: "Isaac Chen",
        role: "VP of Engineering",
        detail: "Recovered 1,000 engineering hours per year",
      },
      stats: [
        { value: "1,000 hrs", label: "Engineering time saved/year" },
        { value: "70%", label: "Interview load reduction" },
        { value: "$200K", label: "Value of time reclaimed" },
        { value: "0", label: "Quality trade-off" },
      ],
    },
    cta: {
      headline: "Your engineers have better things to do.",
      gradientText: "Let the data do the screening.",
      description: "SkillPass cuts engineering interview time by 70%. Set up in an afternoon. Your team starts getting time back this week.",
      primaryCta: { text: "Start saving eng hours", href: "/employers/signup" },
      secondaryCta: { text: "Calculate your savings", href: "/tools/roi-calculator" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // EMOTIONAL TALENT (275–282)
  // ═══════════════════════════════════════════════════════════════

  // 275
  {
    slug: "seen-for-real-skills",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Finally Be Seen for Your Real Skills | SkillPass",
      description:
        "Tired of being judged by your resume, your school name, or your last company? A SkillScore shows what you can actually do.",
    },
    hero: {
      headline: "You're more than a resume line.",
      gradientText: "Get seen for it.",
      subheadline:
        "The gap between what you can do and what your resume shows is massive. SkillPass closes that gap with a verified number that speaks for your actual ability — not your formatting skills.",
      primaryCta: { text: "Get seen free", href: "/signup" },
      secondaryCta: { text: "How it works", href: "/how-it-works" },
    },
    problem: {
      headline: "You keep getting filtered out",
      gradientText: "for the wrong reasons.",
      description:
        "Wrong school name. Wrong company brand. Wrong keyword. The filters that decide your career have nothing to do with your actual capabilities.",
      stats: [
        { value: "7 sec", label: "That's all you get", description: "Seven seconds of a recruiter's attention. That's what stands between you and an interview." },
        { value: "68%", label: "Feel invisible in the market", description: "More than two-thirds of skilled professionals feel their abilities are overlooked by employers." },
        { value: "4x", label: "More callbacks with proof", description: "Candidates with verified SkillScores get 4x more employer callbacks than resume-only applicants." },
      ],
    },
    solution: {
      headline: "Proof that can't be ignored.",
      gradientText: "Verified and permanent.",
      description:
        "Your SkillScore is calculated from verified academic records, structured peer reviews, proctored assessments, and real performance data. It's objective, specific, and impossible to dismiss.",
      features: [
        { title: "Verified, not claimed", description: "Every data point comes from a third-party source. This isn't another self-reported profile." },
        { title: "Specific, not generic", description: "Sub-scores show exactly where your strengths are. Not 'good at tech' — top 15% in system design." },
        { title: "Portable, not locked", description: "Your score belongs to you. Share it anywhere. No one can take it away." },
        { title: "Growing, not static", description: "Add references, take assessments, gain experience. Your score grows with you." },
      ],
    },
    proof: {
      testimonial: {
        quote: "For years I felt invisible. Strong skills, weak resume. My SkillScore changed everything — 741, and suddenly employers were reaching out to me. Not the other way around.",
        name: "Jasmine Wright",
        role: "Backend Engineer",
        detail: "From invisible to 8 inbound interviews",
      },
      stats: [
        { value: "741", label: "SkillScore" },
        { value: "8", label: "Inbound interviews" },
        { value: "0", label: "Applications sent" },
        { value: "$32K", label: "Salary improvement" },
      ],
    },
    cta: {
      headline: "Stop being invisible.",
      gradientText: "Get seen.",
      description: "Build a SkillScore that shows what your resume can't. Free forever. Ready in 15 minutes.",
      primaryCta: { text: "Build your profile", href: "/signup" },
    },
  },

  // 276
  {
    slug: "hard-work-quantified",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Your Hard Work, Finally Quantified | SkillPass",
      description:
        "Years of learning, building, and growing — condensed into nothing on a resume. A SkillScore gives your work a number it deserves.",
    },
    hero: {
      headline: "Years of work.",
      gradientText: "Finally, a number that reflects it.",
      subheadline:
        "You've spent years getting good at what you do. Late nights learning, difficult projects shipped, skills compounded over time. A resume reduces all of that to bullet points. A SkillScore gives it the weight it deserves.",
      primaryCta: { text: "Quantify your work", href: "/signup" },
      secondaryCta: { text: "How scoring works", href: "/how-it-works" },
    },
    problem: {
      headline: "All that effort,",
      gradientText: "compressed into nothing.",
      description:
        "You've built real skills through real work. But without a way to quantify it, all that effort is reduced to a single page of carefully worded bullet points that look like everyone else's.",
      stats: [
        { value: "10,000+ hrs", label: "Average expertise investment", description: "The time you've invested in your craft. Thousands of hours of learning and practice." },
        { value: "1 page", label: "What you get to show for it", description: "One page. That's the container for a decade of professional development." },
        { value: "0", label: "Of it is verified", description: "None of the effort, none of the growth, none of the skill is externally verified on a resume." },
      ],
    },
    solution: {
      headline: "A score that respects",
      gradientText: "the work you've put in.",
      description:
        "Your SkillScore doesn't compress your skills — it measures them. Academic rigor, peer reputation, assessed ability, and performance. Each dimension captured separately, combined into one meaningful number.",
      features: [
        { title: "Academic depth captured", description: "Your coursework rigor, not just your GPA. The specific courses and grades that show your depth." },
        { title: "Peer reputation recorded", description: "What people who worked with you actually think. 8 dimensions of structured feedback." },
        { title: "Skills measured directly", description: "Assessments that test what you can do right now. Current ability, verified." },
        { title: "Growth over time", description: "Your score isn't static. It grows as you learn, get references, and prove more." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Seeing my SkillScore for the first time was emotional, honestly. 756. After years of feeling like my work wasn't recognized, there was finally a number that said 'you're actually really good at this.'",
        name: "Andre Williams",
        role: "Senior Developer",
        detail: "Self-taught, 8 years of experience",
      },
      stats: [
        { value: "756", label: "SkillScore" },
        { value: "8 yrs", label: "Work, finally quantified" },
        { value: "Top 11%", label: "Among senior devs" },
        { value: "Free", label: "To discover" },
      ],
    },
    cta: {
      headline: "You've put in the work.",
      gradientText: "See what it adds up to.",
      description: "Build your SkillScore and give your effort the number it deserves. Free forever.",
      primaryCta: { text: "See your score", href: "/signup" },
    },
  },

  // 277
  {
    slug: "playing-field-leveled",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "The Playing Field, Leveled | SkillPass",
      description:
        "Ivy League or state school. Big tech or small startup. A SkillScore doesn't care where you came from. It cares what you can do.",
    },
    hero: {
      headline: "Same ability.",
      gradientText: "Different opportunity. Until now.",
      subheadline:
        "Two people with identical skills get wildly different outcomes based on school name, company brand, and who they know. That's not a meritocracy. A SkillScore measures ability, not pedigree.",
      primaryCta: { text: "Level the field free", href: "/signup" },
      secondaryCta: { text: "How scoring works", href: "/how-it-works" },
    },
    problem: {
      headline: "Pedigree still wins.",
      gradientText: "Ability should.",
      description:
        "A Stanford grad with a 3.0 gets more callbacks than a state school grad with a 3.9 and better skills. The name on the diploma matters more than the learning behind it. That's the system you're competing in.",
      stats: [
        { value: "3x", label: "More callbacks for Ivy grads", description: "Same resume, different school name. Ivy League gets 3x more callbacks. Skills identical." },
        { value: "$23K", label: "Salary gap (pedigree vs. skill)", description: "Brand-name backgrounds command higher salaries even when abilities are equivalent." },
        { value: "0", label: "Meritocracy in traditional hiring", description: "The data is clear: hiring favors credentials over capability. That's what we're changing." },
      ],
    },
    solution: {
      headline: "Ability is the only input.",
      gradientText: "Pedigree is irrelevant.",
      description:
        "SkillScores are calculated from what you can do, not where you went to school or who you worked for. A 730 is a 730 whether it comes from MIT or a community college.",
      features: [
        { title: "School-blind scoring", description: "Your score is based on academic performance, not institutional reputation. Rigor matters. Brand doesn't." },
        { title: "Company-blind assessment", description: "Assessments don't know where you work. They measure what you know right now." },
        { title: "Peer signal from anyone", description: "References from any professional context count equally. A great collaborator is great regardless of where." },
        { title: "Percentile, not pedigree", description: "Your ranking is based on measured ability relative to everyone in your field. Pure meritocracy." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I went to community college and transferred to a state school. My SkillScore is 744 — higher than most Ivy League CS grads in the database. For the first time, the data reflects my actual ability, not my background.",
        name: "Luis Hernandez",
        role: "Full-Stack Engineer",
        detail: "Community college → state school → 744 SkillScore",
      },
      stats: [
        { value: "744", label: "SkillScore" },
        { value: "Top 13%", label: "Among all CS professionals" },
        { value: "Higher", label: "Than avg. Ivy CS grad" },
        { value: "$0", label: "Cost to prove it" },
      ],
    },
    cta: {
      headline: "Compete on ability.",
      gradientText: "Not on background.",
      description: "Build a SkillScore that proves what you can do — regardless of where you went to school or who you worked for. Free forever.",
      primaryCta: { text: "Level the field", href: "/signup" },
    },
  },

  // 278
  {
    slug: "every-interview-skipped",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Every Redundant Interview, Skipped | SkillPass",
      description:
        "Done with 6-round interview gauntlets? A verified SkillScore lets companies skip the rounds that test what you've already proven.",
    },
    hero: {
      headline: "Six rounds.",
      gradientText: "For a job you could do in your sleep.",
      subheadline:
        "You know you can do the job. They know you can probably do the job. But somehow you still need to pass 6 rounds of increasingly redundant interviews. A SkillScore lets them skip the ones that just test what you've already proven.",
      primaryCta: { text: "Skip the gauntlet", href: "/signup" },
      secondaryCta: { text: "How companies use scores", href: "/how-it-works" },
    },
    problem: {
      headline: "The interview industrial complex",
      gradientText: "is wasting your life.",
      description:
        "Phone screen. Recruiter screen. Hiring manager screen. Technical round 1. Technical round 2. Onsite. Each one takes hours of prep and travel. Most of them are testing the same thing.",
      stats: [
        { value: "6", label: "Average interview rounds", description: "Six rounds is standard at mid-to-large companies. Each one with its own prep, scheduling, and anxiety." },
        { value: "47 hrs", label: "Per job search", description: "Forty-seven hours of unpaid interviewing per job search. That's more than a work week." },
        { value: "78%", label: "Of rounds are redundant", description: "Most rounds test the same skills. The 4th technical round doesn't reveal anything the 2nd didn't." },
      ],
    },
    solution: {
      headline: "Companies that see your score",
      gradientText: "skip the redundant rounds.",
      description:
        "When employers can see your verified SkillScore, they don't need to re-test what's already proven. High-scoring candidates routinely skip 2–4 interview rounds.",
      features: [
        { title: "Skip phone screens", description: "Your SkillScore says more than a 30-minute phone call. Companies go straight to meaningful conversations." },
        { title: "Skip take-homes", description: "Assessed Ability sub-score replaces unpaid take-home assignments. Your time has value." },
        { title: "Skip redundant technicals", description: "One deep-dive replaces three shallow technical rounds. Skills are already verified." },
        { title: "Keep the conversations that matter", description: "Culture fit, team dynamics, mutual interest — the interviews that actually help you decide too." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I shared my SkillPass profile with 8 companies. 6 of them skipped at least 2 interview rounds. One skipped 4 and made an offer after a single 45-minute conversation. The future is here.",
        name: "Sophia Chen",
        role: "ML Engineer",
        detail: "Skipped 4 rounds at one company",
      },
      stats: [
        { value: "4", label: "Rounds skipped (best case)" },
        { value: "2", label: "Rounds skipped (avg.)" },
        { value: "30+ hrs", label: "Interview time saved" },
        { value: "Free", label: "For talent" },
      ],
    },
    cta: {
      headline: "Your time is worth more than redundant interviews.",
      gradientText: "Prove it once. Skip the rest.",
      description: "Build your SkillScore. Let the data do what 6 interview rounds try to do — but in seconds.",
      primaryCta: { text: "Build your score", href: "/signup" },
    },
  },

  // 279
  {
    slug: "employers-come-to-you",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Stop Applying — Let Employers Come to You | SkillPass",
      description:
        "With a strong SkillScore, employers find you. No more spraying applications into the void. Get inbound interest from verified companies.",
    },
    hero: {
      headline: "Stop chasing employers.",
      gradientText: "Make them chase you.",
      subheadline:
        "You've sent 200 applications into the void. How about this instead: build a strong SkillScore, make your profile visible, and let employers who value your specific abilities come to you.",
      primaryCta: { text: "Get found free", href: "/signup" },
      secondaryCta: { text: "How discovery works", href: "/how-it-works" },
    },
    problem: {
      headline: "You're doing all the work.",
      gradientText: "Employers are doing none.",
      description:
        "You customize resumes, write cover letters, fill out applications, and wait. And wait. Meanwhile, companies complain they can't find talent. The system is backwards.",
      stats: [
        { value: "200+", label: "Applications to get one offer", description: "The average job seeker sends over 200 applications per search. Most get no response at all." },
        { value: "5%", label: "Callback rate", description: "Out of every 20 applications, maybe one generates a response. That's not efficient for anyone." },
        { value: "0", label: "Employers finding you", description: "The current system is one-directional: you apply, they decide. There's no discovery mechanism." },
      ],
    },
    solution: {
      headline: "Flip the dynamic.",
      gradientText: "Be found.",
      description:
        "Employers on SkillPass actively search for candidates by SkillScore, specialty, and location. A strong, visible profile means they find you and reach out. You evaluate them.",
      features: [
        { title: "Employer search", description: "Companies search the SkillPass database for candidates matching their requirements. High scores get noticed." },
        { title: "Inbound interest", description: "Employers reach out to you with specific opportunities. You decide which ones are worth your time." },
        { title: "Visibility controls", description: "Set your profile to visible for active search, or private if you're not looking. You're always in control." },
        { title: "No spray-and-pray", description: "Instead of 200 applications, you build one profile and let the right opportunities come to you." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I stopped applying to jobs 4 months ago. I just maintain my SkillPass profile at 768. Last month, 6 companies reached out to me. I'm interviewing with 2 of them. It's a completely different experience.",
        name: "Maya Johnson",
        role: "DevOps Engineer",
        detail: "6 inbound inquiries per month",
      },
      stats: [
        { value: "768", label: "SkillScore" },
        { value: "6", label: "Inbound inquiries/month" },
        { value: "0", label: "Applications sent" },
        { value: "Free", label: "Forever" },
      ],
    },
    cta: {
      headline: "Let the jobs come to you.",
      gradientText: "Build your score.",
      description: "Build a strong SkillScore. Make your profile visible. Sit back and let employers compete for your attention.",
      primaryCta: { text: "Get started free", href: "/signup" },
    },
  },

  // 280
  {
    slug: "degree-just-beginning",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Your Degree Is Just the Beginning | SkillPass",
      description:
        "You got the degree. Now prove you're more than it. A SkillScore captures what you learned, not just that you attended.",
    },
    hero: {
      headline: "You got the degree.",
      gradientText: "Now show what you actually learned.",
      subheadline:
        "A diploma says you attended. It says nothing about what you mastered, who you worked with, or what you can build. A SkillScore turns four years of learning into specific, verified proof of ability.",
      primaryCta: { text: "Go beyond the degree", href: "/signup" },
      secondaryCta: { text: "What's measured", href: "/how-it-works" },
    },
    problem: {
      headline: "A degree is a checkbox.",
      gradientText: "Not a differentiator.",
      description:
        "Everyone has a degree. It tells employers you finished school. It doesn't tell them if you were the best student in your cohort or barely scraped by. It's binary when hiring needs a spectrum.",
      stats: [
        { value: "Binary", label: "Degree = yes or no", description: "You either have it or you don't. There's no gradation, no distinction between excellent and barely passing." },
        { value: "0", label: "Skill depth conveyed", description: "A BS in Computer Science could mean you're an algorithms wizard or barely passed data structures." },
        { value: "100%", label: "Of grads have a degree", description: "That's the point — everyone has one. It no longer differentiates you." },
      ],
    },
    solution: {
      headline: "Turn your education into",
      gradientText: "specific, verified proof.",
      description:
        "Your SkillScore captures not just that you went to school, but what you learned, how your peers rated you, and how your tested ability stacks up against everyone else in your field.",
      features: [
        { title: "Course-level depth", description: "Your verified transcript shows not just GPA but which courses you excelled in. Depth, not just breadth." },
        { title: "Peer signal from classmates", description: "Feedback from people who studied and built projects with you. Real signal about your collaborative ability." },
        { title: "Post-grad assessment", description: "Test your current ability. Show that your education translated into actual, retainable skill." },
        { title: "Continuous growth", description: "Your degree was a starting point. Your SkillScore keeps growing as you learn and prove more." },
      ],
    },
    proof: {
      testimonial: {
        quote: "My degree from a mid-tier school wasn't opening doors. But my SkillScore — 718 — showed I actually learned more than most grads from top schools. The number told a different story than the diploma.",
        name: "Chris Walters",
        role: "Frontend Engineer",
        detail: "Mid-tier school, 718 SkillScore",
      },
      stats: [
        { value: "718", label: "SkillScore" },
        { value: "Top 18%", label: "Among CS grads" },
        { value: "3x", label: "More interviews" },
        { value: "Free", label: "To build" },
      ],
    },
    cta: {
      headline: "Your degree opened the door.",
      gradientText: "Your SkillScore walks through it.",
      description: "Turn your education into verified, specific proof of ability. Free forever.",
      primaryCta: { text: "Go beyond the degree", href: "/signup" },
    },
  },

  // 281
  {
    slug: "compete-on-ability",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Compete on Ability, Not Connections | SkillPass",
      description:
        "Referrals get 10x more attention than cold applications. Unless you have verified proof of ability. Then the data speaks louder than any referral.",
    },
    hero: {
      headline: "Tired of losing to someone's",
      gradientText: "cousin's roommate's referral?",
      subheadline:
        "Referrals get 10x more attention than cold applications. It's who you know, not what you know. A verified SkillScore changes that equation — because data beats networking when the data is this good.",
      primaryCta: { text: "Let ability win", href: "/signup" },
      secondaryCta: { text: "How it levels the field", href: "/how-it-works" },
    },
    problem: {
      headline: "The referral advantage",
      gradientText: "isn't about quality.",
      description:
        "Referred candidates aren't better. They're just more visible. The referral system rewards social capital, not professional capability. If you don't know the right people, your skills don't get seen.",
      stats: [
        { value: "10x", label: "Referral attention premium", description: "Referred candidates get 10x more recruiter attention than cold applicants. Same skills, different network." },
        { value: "40%", label: "Of hires come from referrals", description: "Nearly half of all hires are referral-based. If you're not in the network, you're in the other 60% fighting over scraps." },
        { value: "0", label: "Correlation with job performance", description: "Referral status doesn't predict job performance. It just predicts who knows the hiring manager." },
      ],
    },
    solution: {
      headline: "Data is the great equalizer.",
      gradientText: "Verified beats connected.",
      description:
        "When an employer sees a verified SkillScore of 740, they don't care who referred you. The data is more compelling than any introduction because it's specific, verified, and comparable.",
      features: [
        { title: "Visibility without connections", description: "Employers search by SkillScore, not by who they know. A high score makes you visible regardless of network." },
        { title: "Proof > introduction", description: "A verified 740 is more convincing than 'my friend says she's good.' Data wins when it's trustworthy." },
        { title: "Equal discovery", description: "Every candidate in the SkillPass database is discoverable on the same terms. Network size is irrelevant." },
        { title: "Merit-based ranking", description: "Search results sort by score. The best abilities rise to the top, period." },
      ],
    },
    proof: {
      testimonial: {
        quote: "No connections in tech. No referrals. No warm introductions. Just a 751 SkillScore. I got 5 interviews in my first week with a visible profile. Ability finally mattered more than my LinkedIn connections.",
        name: "Aisha Obi",
        role: "Backend Engineer",
        detail: "No referrals, 5 interviews from SkillScore alone",
      },
      stats: [
        { value: "751", label: "SkillScore" },
        { value: "5", label: "Interviews in one week" },
        { value: "0", label: "Referrals needed" },
        { value: "Free", label: "To compete" },
      ],
    },
    cta: {
      headline: "You don't need connections.",
      gradientText: "You need proof.",
      description: "Build a SkillScore and compete on ability. No referrals, no networking, no favors. Just verified skill.",
      primaryCta: { text: "Compete on ability", href: "/signup" },
    },
  },

  // 282
  {
    slug: "meritocracy-promised",
    category: "emotional-talent",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "The Meritocracy You Were Promised | SkillPass",
      description:
        "They told you hard work would be rewarded. A SkillScore is the mechanism that finally makes that true. Verified ability, rewarded fairly.",
    },
    hero: {
      headline: "They promised meritocracy.",
      gradientText: "Here it is.",
      subheadline:
        "You were told that hard work and skill would get you ahead. That's not how hiring works — it runs on pedigree, connections, and first impressions. SkillPass is building the system that should have existed all along: ability in, opportunity out.",
      primaryCta: { text: "Join the meritocracy", href: "/signup" },
      secondaryCta: { text: "How it's built", href: "/how-it-works" },
    },
    problem: {
      headline: "Meritocracy was the promise.",
      gradientText: "Reality is different.",
      description:
        "The best jobs go to people with the best brands on their resume — Stanford, Google, Goldman. Not to the most capable people. We all know it. We just didn't have a system to change it.",
      stats: [
        { value: "85%", label: "Believe hiring isn't meritocratic", description: "The vast majority of professionals don't think hiring is based on ability. They're right." },
        { value: "$0", label: "Value of hard work without proof", description: "Without a way to verify your skills, all that hard work is just a claim on a resume." },
        { value: "2026", label: "The year it starts to change", description: "Verified skill data is the mechanism that makes meritocracy possible. It starts now." },
      ],
    },
    solution: {
      headline: "Ability in.",
      gradientText: "Opportunity out.",
      description:
        "SkillPass creates a world where verified ability determines opportunity. Not who you know, not where you went to school, not what your last company's logo looks like. What you can do.",
      features: [
        { title: "Ability-first ranking", description: "Employers search by SkillScore. The most capable people surface first, regardless of background." },
        { title: "Blind to pedigree", description: "SkillScores don't know your school's ranking or your employer's brand. They know your measured ability." },
        { title: "Equal access", description: "Free for talent. Everyone gets the same tools, the same scoring system, the same visibility." },
        { title: "Verified, not self-reported", description: "Meritocracy requires verification. Self-reported claims aren't meritocratic — verified data is." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Community college. Bootcamp. No brand names. SkillScore: 763. I'm now at a company that would have auto-rejected my resume. The meritocracy finally works for people like me.",
        name: "Darnell Scott",
        role: "Software Engineer",
        detail: "Non-traditional background, top-tier outcome",
      },
      stats: [
        { value: "763", label: "SkillScore" },
        { value: "Top 9%", label: "Among SWEs" },
        { value: "$140K", label: "Starting salary" },
        { value: "0", label: "Brand names on resume" },
      ],
    },
    cta: {
      headline: "The meritocracy starts here.",
      gradientText: "Prove your ability. Get what you deserve.",
      description: "Build a verified SkillScore and enter a system where ability is the only thing that matters. Free forever.",
      primaryCta: { text: "Join the meritocracy", href: "/signup" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // EMOTIONAL EMPLOYER (283–290)
  // ═══════════════════════════════════════════════════════════════

  // 283
  {
    slug: "wasting-eng-hours",
    category: "emotional-employer",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "Your Engineers Didn't Join to Interview All Day | SkillPass",
      description:
        "Senior engineers lose 8–15 hours per week to interviews. SkillPass pre-verifies candidates so your team spends time building, not screening.",
    },
    hero: {
      headline: "Your best engineers didn't join to",
      gradientText: "conduct interviews all day.",
      subheadline:
        "Every hour a senior engineer spends in a screening call is an hour they're not shipping. SkillPass pre-scores candidates on verified ability, so your team only talks to people worth talking to.",
      primaryCta: { text: "Give your engineers back their time", href: "/employers/signup" },
      secondaryCta: { text: "See the math", href: "/demo" },
    },
    problem: {
      headline: "Your engineers are your most expensive",
      gradientText: "interview panel.",
      description:
        "A single engineering hire takes 40+ hours of interview time across your team. That's a full work week — split across your most senior, most expensive people — just to fill one seat.",
      stats: [
        { value: "40+ hrs", label: "Interview time per hire", description: "Phone screens, technicals, system design, culture fits. Every engineer on the panel loses days." },
        { value: "$15K", label: "Lost productivity per hire", description: "Senior engineers cost $100+/hr loaded. Multiply that by the hours they spend interviewing instead of building." },
        { value: "68%", label: "Engineers who resent interview duty", description: "They joined to build product. Instead, they're asking the same LeetCode questions for the tenth time this month." },
      ],
    },
    solution: {
      headline: "Pre-verified candidates.",
      gradientText: "Fewer, better interviews.",
      description:
        "SkillPass scores every candidate on verified academics, peer references, and 8 assessment types before they ever reach your team. Your engineers only interview people who've already proven they can do the work.",
      features: [
        { title: "Pre-screened pipeline", description: "Set a SkillScore threshold. Only candidates above it reach your engineering panel. No more wasted first rounds." },
        { title: "Technical signal before the call", description: "Assessment sub-scores show coding ability, system design thinking, and domain knowledge — before anyone books a calendar slot." },
        { title: "80% fewer screening interviews", description: "When you already know a candidate is qualified, you skip the 'can they actually code?' round entirely." },
        { title: "Happier engineering teams", description: "Your best people get back to building. Retention improves when engineers aren't burned out from interview duty." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Our senior engineers were spending 12 hours a week on interviews. After SkillPass, it dropped to 3. They're happier, we're shipping faster, and our hire quality actually went up.",
        name: "Marcus Leung",
        role: "VP of Engineering",
        detail: "Series B SaaS company, 85 engineers",
      },
      stats: [
        { value: "75%", label: "Fewer interview hours" },
        { value: "3x", label: "Better hire quality" },
        { value: "12→3 hrs", label: "Weekly eng time on interviews" },
        { value: "22%", label: "Higher eng satisfaction" },
      ],
    },
    cta: {
      headline: "Stop burning engineering hours",
      gradientText: "on unqualified candidates.",
      description: "SkillPass pre-verifies ability so your engineers interview fewer people and hire better ones. Setup takes an afternoon.",
      primaryCta: { text: "Protect your eng team's time", href: "/employers/signup" },
      secondaryCta: { text: "Calculate your lost hours", href: "/demo" },
    },
  },

  // 284
  {
    slug: "every-candidate-verified",
    category: "emotional-employer",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "Imagine Every Candidate in Your Pipeline Is Verified | SkillPass",
      description:
        "What if every application in your inbox came with a verified SkillScore? No inflated resumes, no guessing. Just confirmed ability.",
    },
    hero: {
      headline: "Imagine opening your pipeline and knowing",
      gradientText: "every candidate is real.",
      subheadline:
        "No inflated GPAs. No fictional projects. No embellished titles. Just a verified SkillScore on every single applicant, built from transcripts, assessments, and peer references that have been confirmed.",
      primaryCta: { text: "Build a verified pipeline", href: "/employers/signup" },
      secondaryCta: { text: "How verification works", href: "/how-it-works" },
    },
    problem: {
      headline: "You can't trust",
      gradientText: "what you're reading.",
      description:
        "Resumes are self-reported marketing documents. References are hand-picked allies. Interview performance measures preparation, not ability. Your entire hiring pipeline is built on unverified claims.",
      stats: [
        { value: "78%", label: "Resumes contain exaggerations", description: "Studies consistently show that most resumes include inflated titles, stretched dates, or fabricated skills." },
        { value: "53%", label: "References are misleading", description: "Candidates pick their best advocates. You're hearing the highlight reel, not the truth." },
        { value: "$50K+", label: "Cost of a bad hire", description: "When unverified claims turn into unqualified employees, you pay in onboarding, re-hiring, and lost output." },
      ],
    },
    solution: {
      headline: "Every claim verified.",
      gradientText: "Every score earned.",
      description:
        "SkillPass doesn't rely on what candidates say about themselves. We pull verified transcripts from 4,000+ institutions, collect structured peer references, and run standardized assessments. The result is a SkillScore you can actually trust.",
      features: [
        { title: "Verified transcripts", description: "Academic records pulled directly from institutions. No self-reported GPAs, no Photoshopped documents." },
        { title: "Structured peer references", description: "8-dimension evaluations from verified colleagues. Not a phone call with a friend — a standardized, blinded assessment." },
        { title: "Standardized assessments", description: "8 assessment types calibrated across roles and levels. Same test, same conditions, comparable results." },
        { title: "Fraud detection", description: "Cross-referencing across data sources catches inconsistencies. If something doesn't add up, the score reflects it." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We caught 3 candidates with fabricated credentials in our first month using SkillPass. Before that, they would've sailed through our process. That alone justified the cost.",
        name: "Sandra Patel",
        role: "Head of Talent Acquisition",
        detail: "Enterprise healthcare company, 2,000+ employees",
      },
      stats: [
        { value: "100%", label: "Verified data" },
        { value: "4,000+", label: "Institutions connected" },
        { value: "8", label: "Assessment types" },
        { value: "0", label: "Self-reported claims in score" },
      ],
    },
    cta: {
      headline: "Stop guessing.",
      gradientText: "Start verifying.",
      description: "Build a pipeline where every candidate comes with verified proof of ability. No more hoping resumes are accurate.",
      primaryCta: { text: "Get verified candidates", href: "/employers/signup" },
    },
  },

  // 285
  {
    slug: "bad-hire-cost-vs-skillpass",
    category: "emotional-employer",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "$50K+ Bad Hire vs. $299/mo SkillPass — Do the Math | SkillPass",
      description:
        "One bad hire costs $50K or more. SkillPass costs $299/mo and catches the problem before it starts. The math isn't complicated.",
    },
    hero: {
      headline: "$50K+ bad hire vs.",
      gradientText: "$299/mo SkillPass.",
      subheadline:
        "You'll spend $50K or more on every bad hire — salary, onboarding, lost productivity, re-hiring. Or you can spend $299/mo to verify candidates before you make the offer. This isn't a hard decision.",
      primaryCta: { text: "Do the math yourself", href: "/employers/signup" },
      secondaryCta: { text: "See the breakdown", href: "/demo" },
    },
    problem: {
      headline: "Bad hires are",
      gradientText: "absurdly expensive.",
      description:
        "Everyone knows bad hires cost money. But most hiring managers dramatically underestimate how much. The real cost isn't just salary — it's the ripple effect across your entire team.",
      stats: [
        { value: "$52K", label: "Average cost of a bad hire", description: "Recruiting, onboarding, salary paid before termination, re-hiring costs. The DOL estimates 30% of first-year salary." },
        { value: "6 months", label: "Time to identify a bad hire", description: "Most companies don't realize they've made a mistake for half a year. That's 6 months of compounding damage." },
        { value: "36%", label: "Team productivity hit", description: "One bad hire drags down the whole team. Morale drops, strong performers compensate, some start looking to leave." },
      ],
    },
    solution: {
      headline: "Prevent the mistake.",
      gradientText: "Don't just absorb the cost.",
      description:
        "SkillPass starts at $299/mo. For that, you get verified SkillScores on every candidate — scores built from real transcripts, peer references, and standardized assessments. One prevented bad hire pays for years of SkillPass.",
      features: [
        { title: "$299/mo Starter", description: "50 candidate profiles/month, SkillScore search, basic ATS integration. Enough for most small teams." },
        { title: "$799/mo Pro", description: "Unlimited profiles, advanced analytics, custom scoring weights, priority support. For teams hiring consistently." },
        { title: "ROI in one prevented bad hire", description: "If SkillPass stops even one $50K mistake per year, it's paid for itself 5x over on the Starter plan." },
        { title: "No contract required", description: "Month-to-month. Try it for 30 days. If you don't see better candidates, cancel." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We had 3 bad hires in the year before SkillPass — roughly $160K wasted. In the year after, zero. The $799/mo Pro plan paid for itself by February.",
        name: "James Whitfield",
        role: "COO",
        detail: "Mid-market fintech, 200 employees",
      },
      stats: [
        { value: "$160K", label: "Saved in year one" },
        { value: "0", label: "Bad hires post-SkillPass" },
        { value: "17x", label: "ROI on Pro plan" },
        { value: "30 days", label: "To see difference" },
      ],
    },
    cta: {
      headline: "One bad hire costs $50K.",
      gradientText: "Prevention costs $299/mo.",
      description: "The math is simple. SkillPass verifies ability before you make the offer, so you stop paying for mistakes.",
      primaryCta: { text: "Start preventing bad hires", href: "/employers/signup" },
      secondaryCta: { text: "Calculate your bad-hire cost", href: "/demo" },
    },
  },

  // 286
  {
    slug: "hire-people-not-resumes",
    category: "emotional-employer",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "A Resume Is Marketing. A SkillScore Is a Verified Record. | SkillPass",
      description:
        "Resumes tell you what candidates want you to think. SkillScores tell you what they can actually do. Stop hiring based on marketing documents.",
    },
    hero: {
      headline: "A resume is marketing.",
      gradientText: "A SkillScore is a verified record.",
      subheadline:
        "Candidates craft resumes to tell you what they think you want to hear. A SkillScore is built from verified transcripts, structured references, and standardized assessments. One is a pitch. The other is proof.",
      primaryCta: { text: "Hire on proof, not pitches", href: "/employers/signup" },
      secondaryCta: { text: "Compare the signals", href: "/demo" },
    },
    problem: {
      headline: "You're making $100K decisions based on",
      gradientText: "a marketing brochure.",
      description:
        "Think about what a resume actually is: a self-authored document with no verification, designed to present the candidate in the best possible light. You'd never make a $100K purchase based on a brochure. But that's exactly what resume-based hiring is.",
      stats: [
        { value: "100%", label: "Self-authored", description: "Every word on a resume was chosen by the candidate to make themselves look good. There's no independent verification." },
        { value: "0", label: "Verified data points", description: "A resume contains exactly zero independently verified claims. Every bullet point is a candidate's own narrative." },
        { value: "$100K+", label: "Decision based on marketing", description: "Total first-year cost of a hire easily exceeds $100K. And you're making that call based on a document the candidate wrote about themselves." },
      ],
    },
    solution: {
      headline: "Replace narratives",
      gradientText: "with verified data.",
      description:
        "SkillPass gives you what resumes can't: independent verification. Transcripts confirmed by institutions. References structured and blinded. Assessments standardized and proctored. A SkillScore isn't what the candidate says — it's what the data shows.",
      features: [
        { title: "Verified academics vs. claimed GPA", description: "We pull transcripts directly. No more '3.8 GPA' that's actually a 3.2 in their major." },
        { title: "Structured references vs. 'references available'", description: "8-dimension evaluations from verified peers. Not a hand-picked friend giving a rehearsed endorsement." },
        { title: "Assessed ability vs. listed skills", description: "Standardized assessments measure what candidates can do. Not what they claim to know on a bullet point." },
        { title: "One score vs. a pile of narratives", description: "A 300–850 SkillScore synthesizes all verified data into one comparable number. Apples to apples, for every candidate." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We A/B tested our hiring process: half the team used resumes, half used SkillScores. The SkillScore group's hires had 40% better 90-day reviews. We don't look at resumes first anymore.",
        name: "Elena Vasquez",
        role: "Director of People Ops",
        detail: "Growth-stage SaaS, 300 employees",
      },
      stats: [
        { value: "40%", label: "Better 90-day reviews" },
        { value: "3x", label: "More consistent hires" },
        { value: "0", label: "Resumes needed" },
        { value: "60%", label: "Faster to shortlist" },
      ],
    },
    cta: {
      headline: "Stop reading marketing.",
      gradientText: "Start reading verified data.",
      description: "SkillScores replace self-reported claims with independently verified ability data. Hire people, not resumes.",
      primaryCta: { text: "Hire on verified data", href: "/employers/signup" },
    },
  },

  // 287
  {
    slug: "trust-data-not-gut",
    category: "emotional-employer",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "Your Gut Has a 50% Success Rate. SkillScore Does Better. | SkillPass",
      description:
        "Intuition-based hiring has a coin-flip success rate. Data-driven hiring with verified SkillScores consistently outperforms gut decisions.",
    },
    hero: {
      headline: "Your gut has a 50% success rate.",
      gradientText: "SkillScore does better.",
      subheadline:
        "Research shows unstructured interviews — the ones where you 'go with your gut' — predict job performance about as well as a coin flip. SkillPass gives you verified data that actually correlates with on-the-job success.",
      primaryCta: { text: "Replace gut with data", href: "/employers/signup" },
      secondaryCta: { text: "See the research", href: "/demo" },
    },
    problem: {
      headline: "Gut feeling isn't a",
      gradientText: "hiring strategy.",
      description:
        "Decades of research from Schmidt, Hunter, and others show that unstructured interviews have a validity coefficient of about 0.20. That means they explain roughly 4% of the variance in job performance. You're basically guessing.",
      stats: [
        { value: "0.20", label: "Interview validity coefficient", description: "Unstructured interviews predict job performance about as well as years of experience — which is to say, barely." },
        { value: "50%", label: "Success rate of gut hires", description: "When hiring managers 'go with their gut,' they get it right about half the time. A coin does the same." },
        { value: "81%", label: "Managers who trust their instinct", description: "Despite decades of data showing gut hiring doesn't work, most managers still believe they can 'just tell.'" },
      ],
    },
    solution: {
      headline: "Data beats intuition.",
      gradientText: "Every time.",
      description:
        "SkillPass combines verified transcripts, standardized assessments, and structured peer references into a single SkillScore. Each data source has higher predictive validity than unstructured interviews alone. Together, they're not even close.",
      features: [
        { title: "Verified academics (0.35 validity)", description: "Academic performance, verified by institution, has nearly double the predictive power of unstructured interviews." },
        { title: "Standardized assessments (0.45+ validity)", description: "Work sample tests and cognitive assessments are the strongest single predictors of job performance." },
        { title: "Structured peer references (0.30+ validity)", description: "Blinded, structured evaluations from verified colleagues outperform phone references by a wide margin." },
        { title: "Combined SkillScore", description: "Multi-method assessment consistently outperforms any single signal. SkillScore integrates all three — verified, weighted, and calibrated." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I used to pride myself on 'reading people' in interviews. Then I tracked my results: 48% of my gut hires made it past 12 months. With SkillPass, it's 89%. The data humbled me.",
        name: "Brian Kessler",
        role: "Engineering Manager",
        detail: "Enterprise SaaS, 15 direct reports",
      },
      stats: [
        { value: "48%→89%", label: "12-month retention" },
        { value: "3x", label: "Better quality of hire" },
        { value: "0.45+", label: "Predictive validity" },
        { value: "60%", label: "Faster to shortlist" },
      ],
    },
    cta: {
      headline: "Your gut means well.",
      gradientText: "Data does better.",
      description: "Replace intuition with verified SkillScores. Decades of research say data-driven hiring wins. SkillPass makes it easy.",
      primaryCta: { text: "Switch to data-driven hiring", href: "/employers/signup" },
    },
  },

  // 288
  {
    slug: "teams-that-perform",
    category: "emotional-employer",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "3x Better Quality of Hire — And It Compounds | SkillPass",
      description:
        "Companies using SkillPass report 3x better quality of hire. That's not a one-time gain — it compounds with every hiring cycle.",
    },
    hero: {
      headline: "3x better quality of hire.",
      gradientText: "That compounds.",
      subheadline:
        "One good hire raises the bar. Two good hires create momentum. A full team of verified, high-SkillScore hires? That's how you build a company that outperforms. Quality of hire isn't a metric — it's a compounding advantage.",
      primaryCta: { text: "Start compounding", href: "/employers/signup" },
      secondaryCta: { text: "See the data", href: "/demo" },
    },
    problem: {
      headline: "Bad hires don't just underperform.",
      gradientText: "They drag everyone down.",
      description:
        "A single bad hire doesn't just fail at their own job. They create extra work for teammates, lower morale, consume management time, and sometimes push good people out the door. The damage compounds just as much as the benefit.",
      stats: [
        { value: "36%", label: "Team productivity drop", description: "One underperformer lowers the output of everyone around them. Teammates compensate, resent, and eventually disengage." },
        { value: "2.5x", label: "Management time consumed", description: "Managers spend 2.5x more time on underperformers than on strong hires. That's time stolen from your best people." },
        { value: "1 in 5", label: "Good employees who leave", description: "When strong performers see bad hires tolerated, 20% start looking elsewhere. Bad hiring drives out good talent." },
      ],
    },
    solution: {
      headline: "Every hire raises the bar.",
      gradientText: "Or lowers it.",
      description:
        "SkillPass helps you consistently hire above your current team average. When every new hire is verified and scored, you don't just avoid bad hires — you systematically build a stronger team with every addition.",
      features: [
        { title: "Quality floor", description: "Set a minimum SkillScore for your roles. No candidate below that threshold reaches your interview panel." },
        { title: "Team benchmarking", description: "See how new candidates compare to your existing team's average SkillScore. Hire up, not sideways." },
        { title: "Compounding effect", description: "Each strong hire raises the team average, which raises the bar for the next hire. After 12 months, the difference is dramatic." },
        { title: "Retention signal", description: "High-SkillScore hires stay longer. They were accurately assessed, properly placed, and don't hit the 'this isn't what I signed up for' wall." },
      ],
    },
    proof: {
      testimonial: {
        quote: "After one year of hiring exclusively with SkillPass, our team's average performance review score went from 3.2 to 4.1. Our attrition dropped by half. The compounding is real.",
        name: "Priya Sharma",
        role: "CTO",
        detail: "Mid-stage startup, 120 engineers",
      },
      stats: [
        { value: "3x", label: "Better quality of hire" },
        { value: "3.2→4.1", label: "Avg. performance review" },
        { value: "50%", label: "Lower attrition" },
        { value: "12 months", label: "To see compounding" },
      ],
    },
    cta: {
      headline: "Quality of hire compounds.",
      gradientText: "Start the cycle.",
      description: "Every strong hire makes the next one easier. SkillPass gives you the data to consistently hire above the bar.",
      primaryCta: { text: "Build a compounding team", href: "/employers/signup" },
    },
  },

  // 289
  {
    slug: "competitors-hire-yours",
    category: "emotional-employer",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "The Best Candidates Are Gone in 10 Days | SkillPass",
      description:
        "Top talent accepts offers within 10 days. If your hiring process takes 45, you're not losing to better companies — you're losing to faster ones.",
    },
    hero: {
      headline: "The best candidates are",
      gradientText: "gone in 10 days.",
      subheadline:
        "Your competitors aren't better employers. They're faster ones. While you're scheduling the third round of interviews, the candidate you wanted has already accepted somewhere else. Speed isn't optional anymore.",
      primaryCta: { text: "Move faster", href: "/employers/signup" },
      secondaryCta: { text: "See pipeline speed data", href: "/demo" },
    },
    problem: {
      headline: "Your process takes 45 days.",
      gradientText: "Top candidates wait 10.",
      description:
        "The average hiring process takes 6+ weeks. The best candidates — the ones everyone wants — receive offers within 10 days of starting their search. If you're not in that first wave, you're not even in the running.",
      stats: [
        { value: "10 days", label: "Top candidate decision window", description: "The best people get multiple offers fast. If you're not there in 10 days, someone else already is." },
        { value: "45 days", label: "Average hiring timeline", description: "Most companies take 6+ weeks from first screen to offer. By then, every strong candidate has moved on." },
        { value: "71%", label: "Candidates who accepted a faster offer", description: "When asked why they chose their employer, most top candidates cite speed. Not culture, not comp — speed." },
      ],
    },
    solution: {
      headline: "Search. Score. Shortlist.",
      gradientText: "Offer.",
      description:
        "SkillPass pre-verifies candidates so you skip the slow parts. No weeks of resume screening. No multiple rounds just to confirm basic ability. Search by SkillScore, shortlist the top candidates, interview with confidence, offer fast.",
      features: [
        { title: "Instant pre-qualification", description: "SkillScores tell you who's qualified before you speak to them. Skip the phone screen, go straight to the real interview." },
        { title: "Compressed timeline", description: "Companies using SkillPass go from search to offer in 14 days on average. That puts you in the top-candidate window." },
        { title: "Confidence without extra rounds", description: "Verified data replaces the 'let's do one more round just to be sure' hesitation. You already have the data — decide." },
        { title: "Competitive offer timing", description: "When you can move in days instead of weeks, you stop losing candidates to faster competitors." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We went from a 38-day hiring cycle to 12 days. In our last quarter, we made offers to our top choice 9 out of 10 times. Before SkillPass, we were getting second picks because we were too slow.",
        name: "David Okafor",
        role: "VP of Talent",
        detail: "High-growth fintech, 400 employees",
      },
      stats: [
        { value: "38→12 days", label: "Hiring cycle" },
        { value: "90%", label: "First-choice offers" },
        { value: "60%", label: "Faster than before" },
        { value: "3x", label: "Better offer acceptance" },
      ],
    },
    cta: {
      headline: "The best people won't wait.",
      gradientText: "Move faster.",
      description: "SkillPass compresses your hiring cycle from weeks to days. Stop losing top candidates to slower processes.",
      primaryCta: { text: "Speed up your pipeline", href: "/employers/signup" },
    },
  },

  // 290
  {
    slug: "fastest-pipeline-emotional",
    category: "emotional-employer",
    audience: "employer",
    funnel: "mofu",
    seo: {
      title: "Search, Score, Shortlist, Offer — Days, Not Months | SkillPass",
      description:
        "SkillPass compresses your entire hiring pipeline into days. Pre-verified candidates mean fewer rounds, faster decisions, and better hires.",
    },
    hero: {
      headline: "Search, score, shortlist, offer.",
      gradientText: "Days, not months.",
      subheadline:
        "Your hiring process has too many steps because you don't trust the data at each stage. SkillPass gives you verified ability data upfront, so every step happens faster — and several steps disappear entirely.",
      primaryCta: { text: "Compress your pipeline", href: "/employers/signup" },
      secondaryCta: { text: "See the workflow", href: "/demo" },
    },
    problem: {
      headline: "Your pipeline has",
      gradientText: "too many steps.",
      description:
        "Resume screen, recruiter call, phone screen, technical screen, onsite, debrief, reference check, offer. That's 8 steps. Each one adds days. Each one exists because you didn't have enough information at the previous step.",
      stats: [
        { value: "8", label: "Average hiring steps", description: "Each step adds 3–7 days. Each step exists because the last one didn't give you enough signal to decide." },
        { value: "47 days", label: "Average time-to-hire", description: "Nearly 7 weeks from application to offer. In 7 weeks, the best candidates have accepted 2 other offers." },
        { value: "62%", label: "Pipeline drop-off", description: "More than half your candidates abandon your process before you make a decision. They found somewhere faster." },
      ],
    },
    solution: {
      headline: "More data upfront.",
      gradientText: "Fewer steps overall.",
      description:
        "SkillPass front-loads the information you need. Verified transcripts, peer references, and assessment scores arrive before the first conversation. When you already know a candidate is qualified, you don't need 4 rounds to confirm it.",
      features: [
        { title: "Step 1: Search", description: "Search SkillPass by role, location, score range, and sub-score emphasis. See a ranked list of verified candidates instantly." },
        { title: "Step 2: Score", description: "Review SkillScore breakdowns — academics, assessments, peer references. Get the full picture before you reach out." },
        { title: "Step 3: Shortlist", description: "Pick your top candidates based on verified data. No phone screens needed to figure out who's qualified." },
        { title: "Step 4: Offer", description: "Interview the shortlist with confidence. You already know they can do the work. The interview is about fit, not filtering." },
      ],
    },
    proof: {
      testimonial: {
        quote: "We eliminated the recruiter screen and the technical phone screen entirely. SkillPass data replaced both. Our pipeline went from 8 steps to 4, and our time-to-hire dropped from 42 days to 15.",
        name: "Kathryn Bell",
        role: "Head of Recruiting",
        detail: "Enterprise software company, 800 employees",
      },
      stats: [
        { value: "8→4", label: "Pipeline steps" },
        { value: "42→15 days", label: "Time-to-hire" },
        { value: "60%", label: "Faster pipeline" },
        { value: "$12K", label: "Saved per hire" },
      ],
    },
    cta: {
      headline: "Four steps. Days, not months.",
      gradientText: "That's the whole pipeline.",
      description: "SkillPass gives you verified data upfront so you can cut steps, move fast, and hire better. Setup takes one afternoon.",
      primaryCta: { text: "Simplify your pipeline", href: "/employers/signup" },
      secondaryCta: { text: "See a demo pipeline", href: "/demo" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEAD GEN (291–298)
  // ═══════════════════════════════════════════════════════════════

  // 291
  {
    slug: "free-skillscore-estimate",
    category: "lead-gen",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Get Your Free SkillScore Estimate | SkillPass",
      description:
        "Upload your transcript, answer 5 quick questions, and see your estimated SkillScore in minutes. Free, no commitment.",
    },
    hero: {
      headline: "Upload your transcript, answer 5 questions,",
      gradientText: "see your estimated score.",
      subheadline:
        "Curious where you stand? Upload an unofficial transcript and answer 5 quick calibration questions. We'll give you an estimated SkillScore range in under 3 minutes. Completely free. No account required to start.",
      primaryCta: { text: "Get my estimate", href: "/estimate" },
      secondaryCta: { text: "How estimates work", href: "/how-it-works" },
      trustLine: "78,000+ estimates generated — takes about 3 minutes",
    },
    problem: {
      headline: "You have no idea",
      gradientText: "where you stand.",
      description:
        "You know your GPA. Maybe you have a sense of how you compare to classmates. But nationally? Against people from different schools, different programs, different backgrounds? You're guessing.",
      stats: [
        { value: "0", label: "National benchmarks available", description: "There's no standardized way to compare your ability against professionals or graduates from other programs." },
        { value: "67%", label: "Underestimate their abilities", description: "Most people think they're worse than they are because they only compare against their immediate peers." },
        { value: "3 min", label: "To get an estimate", description: "Upload transcript, answer 5 questions, see where you likely fall on the 300–850 SkillScore scale." },
      ],
    },
    solution: {
      headline: "Quick estimate.",
      gradientText: "Real calibration.",
      description:
        "Our estimation model uses your transcript data plus 5 calibration questions to place you on the SkillScore scale. It's not your full score — that requires assessments and references — but it's a solid starting point that shows you where you likely stand.",
      features: [
        { title: "Upload any transcript", description: "Official or unofficial. We extract GPA, course rigor, grade distribution, and institution data automatically." },
        { title: "5 calibration questions", description: "Quick questions about your academic focus, extracurriculars, and professional experience to refine the estimate." },
        { title: "Estimated score range", description: "You'll see a range (e.g., 620–680) that represents where you likely fall. Narrowing that range requires the full profile." },
        { title: "Free, no strings", description: "No credit card. No sales call. Just a useful data point about where you stand." },
      ],
    },
    proof: {
      testimonial: {
        quote: "My estimate came back at 680–720. I built the full profile and my actual SkillScore was 711. The estimate was remarkably close and got me motivated to complete everything.",
        name: "Jordan Kim",
        role: "Recent Graduate, CS",
        detail: "Estimated 680–720, actual 711",
      },
      stats: [
        { value: "78K+", label: "Estimates generated" },
        { value: "±30 pts", label: "Average accuracy" },
        { value: "64%", label: "Complete full profile after" },
        { value: "3 min", label: "Average time" },
      ],
    },
    cta: {
      headline: "Where do you stand?",
      gradientText: "Find out in 3 minutes.",
      description: "Upload your transcript and answer 5 quick questions. Your estimated SkillScore range is completely free.",
      primaryCta: { text: "Get my free estimate", href: "/estimate" },
    },
  },

  // 292
  {
    slug: "upload-transcript-calibrated",
    category: "lead-gen",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "How Does Your GPA Compare Nationally? | SkillPass",
      description:
        "A 3.5 means different things at different schools. Upload your transcript and see how your academic performance compares nationally.",
    },
    hero: {
      headline: "How does your GPA",
      gradientText: "compare nationally?",
      subheadline:
        "A 3.5 at one school isn't the same as a 3.5 at another. Course rigor, grading curves, and program difficulty all matter. Upload your transcript and we'll show you where your academic performance actually sits on a national scale.",
      primaryCta: { text: "Upload my transcript", href: "/estimate" },
      secondaryCta: { text: "See how calibration works", href: "/how-it-works" },
    },
    problem: {
      headline: "Your GPA is",
      gradientText: "missing context.",
      description:
        "GPA alone doesn't tell you much. A 3.3 in engineering at a rigorous school might represent stronger academic performance than a 3.9 in business at a school with generous grading. Without calibration, you're comparing raw numbers that mean different things.",
      stats: [
        { value: "0.7", label: "GPA variance across schools", description: "The same level of student performance can produce GPAs that differ by nearly a full point depending on the institution." },
        { value: "42%", label: "Grade inflation since 2000", description: "Average GPAs have risen steadily. A 3.5 today isn't what a 3.5 was 20 years ago." },
        { value: "0", label: "Employers who adjust for this", description: "Most recruiters compare GPAs at face value. They don't have time to research every school's grading norms." },
      ],
    },
    solution: {
      headline: "Same performance.",
      gradientText: "Calibrated score.",
      description:
        "SkillPass calibrates your academic record against national data from 4,000+ institutions. We account for school rigor, program difficulty, grade inflation, and course load. The result is a calibrated academic sub-score that means the same thing everywhere.",
      features: [
        { title: "Institution-level calibration", description: "We know your school's grading norms, average GPAs, and academic rigor. Your GPA gets adjusted accordingly." },
        { title: "Program-specific weighting", description: "Engineering, business, liberal arts — each program has different grading curves. We weight your GPA within your program context." },
        { title: "Course rigor analysis", description: "Honors courses, graduate-level work, and heavy STEM loads get recognized. A challenging transcript counts for more." },
        { title: "National percentile", description: "See where your calibrated academic performance falls nationally. Not just within your school — across all 4,000+ institutions." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I had a 3.3 in electrical engineering and felt like I was behind classmates with 3.8s in other majors. SkillPass calibrated my transcript to the 78th percentile nationally. Turns out I was doing better than I thought.",
        name: "Luis Reyes",
        role: "EE Graduate",
        detail: "3.3 GPA calibrated to 78th percentile",
      },
      stats: [
        { value: "4,000+", label: "Schools calibrated" },
        { value: "78th %ile", label: "After calibration" },
        { value: "0.7 pts", label: "Avg. GPA variance eliminated" },
        { value: "Free", label: "To try" },
      ],
    },
    cta: {
      headline: "Your GPA needs context.",
      gradientText: "We provide it.",
      description: "Upload your transcript and see your nationally calibrated academic score. It takes 2 minutes and it's free.",
      primaryCta: { text: "Calibrate my transcript", href: "/estimate" },
    },
  },

  // 293
  {
    slug: "compare-your-school",
    category: "lead-gen",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "A 3.5 at [School X] Equals ___ Nationally | SkillPass",
      description:
        "Find out what your GPA really means. SkillPass calibrates your academic record against 4,000+ institutions to show your true national standing.",
    },
    hero: {
      headline: "A 3.5 at your school equals",
      gradientText: "___ nationally.",
      subheadline:
        "Every school grades differently. A 3.5 might be impressive or it might be average — it depends entirely on where you earned it. Enter your school and GPA, and we'll tell you what it translates to on a national scale.",
      primaryCta: { text: "Check my school", href: "/estimate" },
      secondaryCta: { text: "Browse school calibrations", href: "/schools" },
      trustLine: "4,000+ institutions calibrated",
    },
    problem: {
      headline: "Not all 3.5s are",
      gradientText: "created equal.",
      description:
        "Employers treat GPAs as if they're comparable. They're not. Grading standards vary enormously across institutions, programs, and even professors. A number without context is just a number.",
      stats: [
        { value: "4,000+", label: "Different grading systems", description: "Every institution has its own norms. Comparing raw GPAs across schools is comparing apples to oranges." },
        { value: "35%", label: "Students at disadvantage", description: "Students at rigorous institutions are systematically undervalued when GPAs are compared at face value." },
        { value: "$15K", label: "Salary impact of miscalibration", description: "When employers use raw GPA cutoffs, students from tougher schools get filtered out of higher-paying roles." },
      ],
    },
    solution: {
      headline: "One input.",
      gradientText: "National context.",
      description:
        "Enter your school and GPA. SkillPass runs it through our calibration model — built on data from 4,000+ institutions — and shows you the national equivalent. It's the simplest way to understand where you actually stand.",
      features: [
        { title: "School search", description: "Type your school name. We have calibration data for 4,000+ institutions across the US." },
        { title: "GPA translation", description: "See what your GPA translates to nationally. A 3.3 at MIT might equal a 3.8 at an average state school." },
        { title: "Program adjustment", description: "Select your major. Engineering, CS, business, and other programs are calibrated separately." },
        { title: "Share your calibrated score", description: "Include your calibrated academic score on your SkillPass profile to give employers the full context." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I went to a state school nobody's heard of and had a 3.7. SkillPass showed that calibrated nationally, I was in the 85th percentile. I'd been underselling myself for years.",
        name: "Tamika Johnson",
        role: "Software Developer",
        detail: "State school 3.7 → 85th percentile nationally",
      },
      stats: [
        { value: "4,000+", label: "Schools in database" },
        { value: "85th %ile", label: "After calibration" },
        { value: "Free", label: "To check" },
        { value: "30 sec", label: "To get result" },
      ],
    },
    cta: {
      headline: "What's your GPA really worth?",
      gradientText: "Find out in 30 seconds.",
      description: "Enter your school and GPA. We'll show you the national equivalent. Free, instant, no signup required.",
      primaryCta: { text: "Check my GPA", href: "/estimate" },
    },
  },

  // 294
  {
    slug: "interview-hours-calculator",
    category: "lead-gen",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "How Many Hours Have You Spent Interviewing? Calculator | SkillPass",
      description:
        "Jobs applied times interviews per app times hours per interview equals a shocking number. Calculate how much time you've spent on the interview treadmill.",
    },
    hero: {
      headline: "Jobs applied x interviews x hours =",
      gradientText: "a shocking number.",
      subheadline:
        "Most job seekers have no idea how many hours they've poured into interviewing. Plug in your numbers and see the total. Then ask yourself: what if you could prove your ability once and have it count everywhere?",
      primaryCta: { text: "Calculate my interview hours", href: "/tools/interview-calculator" },
      secondaryCta: { text: "How SkillPass changes this", href: "/how-it-works" },
    },
    problem: {
      headline: "You've been on the",
      gradientText: "interview treadmill.",
      description:
        "Every job application means a new set of interviews. Phone screen, technical, behavioral, onsite, take-home. You're proving the same skills over and over to different companies. Nobody ever asks why this is the system.",
      stats: [
        { value: "73 hours", label: "Average job seeker interview time", description: "Across an average job search, candidates spend 73 hours in interviews. That's nearly 2 full work weeks." },
        { value: "15", label: "Separate companies, same proof", description: "You demonstrate the same skills 15 different times to 15 different companies. None of them share notes." },
        { value: "$0", label: "Compensation for interview time", description: "You're doing unpaid work — skilled, demanding unpaid work — for companies that mostly ghost you after." },
      ],
    },
    solution: {
      headline: "Prove it once.",
      gradientText: "Share it everywhere.",
      description:
        "SkillPass lets you build a verified profile once — transcripts, assessments, references — and share it with every employer. Instead of re-proving yourself 15 times, you prove yourself once and let the data travel.",
      features: [
        { title: "The calculator", description: "Enter jobs applied, interviews per application, and hours per interview. See the total and the dollar value of your unpaid time." },
        { title: "Compare to SkillPass", description: "Building a full SkillPass profile takes 2–3 hours. Compare that to 73+ hours of repeated interviews." },
        { title: "One profile, unlimited shares", description: "Your SkillScore and profile can be shared with any employer. Build once, use forever." },
        { title: "End the treadmill", description: "When employers can see verified ability data, they don't need 5 rounds of interviews to figure out if you can do the job." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I calculated 94 hours of interviews across my last job search. That's more than two full work weeks of unpaid labor. Now I have a SkillPass profile and my last search took 6 hours of interviews total.",
        name: "Nina Morales",
        role: "Product Manager",
        detail: "94 hours down to 6 with SkillPass",
      },
      stats: [
        { value: "94→6 hrs", label: "Interview time" },
        { value: "88 hrs", label: "Time saved" },
        { value: "15→3", label: "Interview rounds" },
        { value: "Free", label: "SkillPass profile" },
      ],
    },
    cta: {
      headline: "How many hours have you lost?",
      gradientText: "Calculate it. Then fix it.",
      description: "Use the calculator to see your interview time total. Then build a SkillPass profile and stop proving yourself from scratch every time.",
      primaryCta: { text: "Calculate my hours", href: "/tools/interview-calculator" },
      secondaryCta: { text: "Build my profile instead", href: "/signup" },
    },
  },

  // 295
  {
    slug: "hiring-cost-calculator",
    category: "lead-gen",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "What's Your Bad-Hire Rate Really Costing? Calculator | SkillPass",
      description:
        "Annual hires times bad-hire rate times cost per bad hire equals a number your CFO should see. Calculate your actual hiring waste.",
    },
    hero: {
      headline: "Annual hires x bad-hire rate x cost =",
      gradientText: "a big scary number.",
      subheadline:
        "Most companies know bad hires are expensive. Few have actually calculated the total annual cost. Enter your numbers and see what bad hiring decisions are really costing your company. Then we'll show you how to fix it.",
      primaryCta: { text: "Calculate my hiring cost", href: "/tools/hiring-calculator" },
      secondaryCta: { text: "How to lower it", href: "/employers" },
    },
    problem: {
      headline: "You know bad hires are expensive.",
      gradientText: "You don't know how expensive.",
      description:
        "It's easy to think of bad hires as one-off mistakes. But when you multiply across your entire hiring volume, the numbers get uncomfortable. Most companies are losing hundreds of thousands — sometimes millions — per year to hiring quality problems.",
      stats: [
        { value: "$52K", label: "Cost per bad hire", description: "The Department of Labor estimates the cost of a bad hire at 30% of first-year salary. For a $175K role, that's $52K." },
        { value: "23%", label: "Average bad-hire rate", description: "Roughly 1 in 4 hires doesn't work out within the first year. Multiply that by your annual hiring volume." },
        { value: "?", label: "Your total annual cost", description: "Annual hires × 23% bad-hire rate × $52K per bad hire = a number that would get your CFO's attention." },
      ],
    },
    solution: {
      headline: "Calculate the cost.",
      gradientText: "Then cut it.",
      description:
        "Our hiring cost calculator shows you exactly what bad hires are costing your company annually. Then we show you how SkillPass reduces that number by catching poor fits before they're hired.",
      features: [
        { title: "Input your numbers", description: "Annual hires, estimated bad-hire rate, average salary. The calculator does the rest." },
        { title: "See the total cost", description: "Your annual bad-hire cost, broken down by direct costs, productivity loss, and re-hiring expenses." },
        { title: "Compare with SkillPass", description: "See what the same year looks like with SkillPass — lower bad-hire rate, reduced costs, net savings." },
        { title: "Share the report", description: "Download a PDF to share with your CFO or leadership team. Sometimes the numbers speak louder than a pitch deck." },
      ],
    },
    proof: {
      testimonial: {
        quote: "The calculator showed us we were losing $420K per year to bad hires. We showed the number to our CEO, signed up for SkillPass that week, and cut bad hires by 70% in the first year. Net savings: $294K.",
        name: "Rebecca Tran",
        role: "VP of People",
        detail: "Mid-market tech company, 600 employees",
      },
      stats: [
        { value: "$420K", label: "Annual bad-hire cost found" },
        { value: "70%", label: "Reduction in bad hires" },
        { value: "$294K", label: "Net savings year one" },
        { value: "1 week", label: "Calculator to signup" },
      ],
    },
    cta: {
      headline: "What are bad hires costing you?",
      gradientText: "Find out in 60 seconds.",
      description: "Enter your hiring numbers and see the annual cost. Then let SkillPass help you cut it.",
      primaryCta: { text: "Calculate my cost", href: "/tools/hiring-calculator" },
      secondaryCta: { text: "Talk to sales", href: "/contact" },
    },
  },

  // 296
  {
    slug: "skillscore-simulator",
    category: "lead-gen",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillScore Simulator — Watch Your Score Change in Real Time | SkillPass",
      description:
        "Slide GPA, school tier, reference strength, and assessment scores to see how your SkillScore changes. Understand what drives the number.",
    },
    hero: {
      headline: "Slide GPA, school tier, references, assessments —",
      gradientText: "watch your score change.",
      subheadline:
        "Curious how the SkillScore works? Our interactive simulator lets you adjust each input and watch the score respond in real time. See what matters most, where you're strong, and what you'd need to improve to reach your target score.",
      primaryCta: { text: "Try the simulator", href: "/tools/simulator" },
      secondaryCta: { text: "How scoring works", href: "/how-it-works" },
      trustLine: "45,000+ simulations run",
    },
    problem: {
      headline: "Black-box scores are",
      gradientText: "frustrating.",
      description:
        "Nobody likes being reduced to a number they don't understand. If you're going to have a SkillScore, you should know exactly what drives it — and what you can do to improve it. Transparency isn't optional for us.",
      stats: [
        { value: "89%", label: "Want to understand their score", description: "The overwhelming majority of professionals want to know how a score is calculated, not just what it is." },
        { value: "4", label: "Major score components", description: "Academics, assessments, peer references, and profile completeness. Each one contributes differently." },
        { value: "300–850", label: "Score range", description: "Like a credit score for professional ability. The simulator shows you exactly how each factor moves the needle." },
      ],
    },
    solution: {
      headline: "Transparent scoring.",
      gradientText: "In your hands.",
      description:
        "The SkillScore simulator puts the formula in front of you. Adjust sliders for each component and watch the score respond instantly. It's the fastest way to understand what SkillPass measures and where your strengths are.",
      features: [
        { title: "GPA slider", description: "Adjust your GPA and see how academic performance affects the overall score. See the calibration effect of school tier." },
        { title: "School tier adjustment", description: "Move between school tiers and watch the calibration shift. A 3.3 at a top school scores differently than a 3.3 elsewhere." },
        { title: "Reference strength", description: "Slide from weak to strong peer references and see the impact. References are a major score component — this slider makes that visible." },
        { title: "Assessment scores", description: "Adjust assessment performance across different types. See which assessments carry the most weight for your target roles." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Playing with the simulator showed me that my weak spot was references, not academics. I focused on getting strong peer evaluations and my actual SkillScore jumped 60 points.",
        name: "Alex Rivera",
        role: "UX Designer",
        detail: "Used simulator to identify improvement area, +60 points",
      },
      stats: [
        { value: "45K+", label: "Simulations run" },
        { value: "+60 pts", label: "Avg. improvement after" },
        { value: "72%", label: "Build full profile after" },
        { value: "Free", label: "To use" },
      ],
    },
    cta: {
      headline: "See what drives your score.",
      gradientText: "Try the simulator.",
      description: "Adjust the sliders and watch your estimated SkillScore change in real time. Completely free, no account needed.",
      primaryCta: { text: "Launch the simulator", href: "/tools/simulator" },
      secondaryCta: { text: "Build my real profile", href: "/signup" },
    },
  },

  // 297
  {
    slug: "5-day-email-course",
    category: "lead-gen",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Build Your SkillScore in 5 Days — Free Email Course | SkillPass",
      description:
        "Day 1: Transcript. Day 2: References. Day 3: Assessment. Day 4: Profile. Day 5: Share. A guided course to build your verified professional profile.",
    },
    hero: {
      headline: "Day 1: Transcript. Day 2: References. Day 3: Assessment.",
      gradientText: "Day 4: Profile. Day 5: Share.",
      subheadline:
        "Building a complete SkillPass profile is straightforward, but doing it in one sitting can feel like a lot. This free 5-day email course walks you through it step by step — one task per day, 15 minutes each.",
      primaryCta: { text: "Start the free course", href: "/course/5-day" },
      secondaryCta: { text: "What you'll build", href: "/how-it-works" },
      trustLine: "12,000+ people have completed the course",
    },
    problem: {
      headline: "You know you should build a profile.",
      gradientText: "You haven't started.",
      description:
        "It's on your to-do list. You've thought about it. But building a professional profile from scratch feels like a big project, and big projects get postponed. You need a plan that breaks it into manageable pieces.",
      stats: [
        { value: "78%", label: "Intend to build a profile", description: "Most people who learn about SkillPass want to create one. The gap between intention and action is the problem." },
        { value: "15 min", label: "Per day for 5 days", description: "That's all it takes. Each day has one focused task that takes about 15 minutes. By Friday, you're done." },
        { value: "12K+", label: "Course completers", description: "Over 12,000 people have built their SkillPass profile through this course. Average completion rate: 71%." },
      ],
    },
    solution: {
      headline: "Five days. Fifteen minutes each.",
      gradientText: "Done.",
      description:
        "We'll email you one task per day for 5 days. Each email tells you exactly what to do, how long it'll take, and why it matters. By Day 5, you'll have a complete, verified SkillPass profile ready to share with employers.",
      features: [
        { title: "Day 1: Upload your transcript", description: "Find your unofficial transcript and upload it. SkillPass extracts and verifies your academic data automatically. ~10 minutes." },
        { title: "Day 2: Request peer references", description: "Send reference requests to 3–5 colleagues or classmates. We'll guide you on who to ask and what to say. ~15 minutes." },
        { title: "Day 3: Take an assessment", description: "Complete one standardized assessment relevant to your field. Timed, focused, and calibrated. ~20 minutes." },
        { title: "Day 4: Complete your profile", description: "Fill in the remaining details — work history, skills, preferences. Your SkillScore calculates. ~15 minutes." },
        { title: "Day 5: Share it", description: "Your profile is live. Share it with employers, add it to your LinkedIn, or set it to discoverable. ~5 minutes." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I'd been meaning to build my profile for weeks. The email course made it stupid easy. 15 minutes a day, and by Friday I had a 694 SkillScore and 3 employers reached out within the week.",
        name: "Chris Donovan",
        role: "Full-Stack Developer",
        detail: "Completed 5-day course, 3 employer contacts in first week",
      },
      stats: [
        { value: "71%", label: "Course completion rate" },
        { value: "5 days", label: "To complete profile" },
        { value: "15 min/day", label: "Time commitment" },
        { value: "Free", label: "Always" },
      ],
    },
    cta: {
      headline: "Stop meaning to.",
      gradientText: "Start doing. Day 1 is tomorrow.",
      description: "Sign up for the free 5-day course and build your SkillPass profile step by step. One email per day, 15 minutes each.",
      primaryCta: { text: "Start the free course", href: "/course/5-day" },
    },
  },

  // 298
  {
    slug: "hiring-process-quiz",
    category: "lead-gen",
    audience: "employer",
    funnel: "tofu",
    seo: {
      title: "How Broken Is Your Hiring Process? Diagnostic Quiz | SkillPass",
      description:
        "Take a 2-minute diagnostic quiz. Get personalized results showing your hiring process's weakest point — and how SkillPass fixes it.",
    },
    hero: {
      headline: "Diagnostic quiz. Personalized results.",
      gradientText: "How SkillPass fixes your weakest point.",
      subheadline:
        "Answer 10 quick questions about your current hiring process. We'll identify your biggest bottleneck — whether it's speed, quality, cost, or candidate experience — and show you exactly how SkillPass addresses it.",
      primaryCta: { text: "Take the quiz", href: "/tools/hiring-quiz" },
      secondaryCta: { text: "See sample results", href: "/demo" },
      trustLine: "8,400+ companies have taken the quiz",
    },
    problem: {
      headline: "You know hiring is broken.",
      gradientText: "You don't know where.",
      description:
        "Is your problem speed? Quality? Cost? Candidate drop-off? Most companies know their hiring process isn't great, but they can't pinpoint the specific bottleneck. That makes it impossible to fix the right thing.",
      stats: [
        { value: "82%", label: "Say their hiring process needs work", description: "Nearly every company acknowledges the problem. Far fewer can point to the specific failure point." },
        { value: "4", label: "Common bottleneck areas", description: "Speed, quality, cost, and candidate experience. Most companies have one primary bottleneck driving the others." },
        { value: "2 min", label: "To diagnose", description: "Ten questions. Two minutes. You'll know your weakest point and have a specific recommendation to fix it." },
      ],
    },
    solution: {
      headline: "Diagnose first.",
      gradientText: "Then fix.",
      description:
        "The quiz evaluates your hiring process across 4 dimensions: speed, quality, cost efficiency, and candidate experience. You get a score for each dimension, your primary bottleneck identified, and a personalized recommendation for how SkillPass addresses it.",
      features: [
        { title: "10 questions, 2 minutes", description: "Quick, specific questions about your current process. Number of interview rounds, time-to-hire, bad-hire rate, drop-off points." },
        { title: "Score across 4 dimensions", description: "See how your process scores on speed, quality, cost, and candidate experience. Most companies are surprised by their weakest area." },
        { title: "Primary bottleneck identified", description: "We pinpoint the one area causing the most damage. Fixing this one thing often improves everything else." },
        { title: "Personalized SkillPass recommendation", description: "Based on your bottleneck, we show you exactly which SkillPass features address it and what improvement to expect." },
      ],
    },
    proof: {
      testimonial: {
        quote: "The quiz showed our biggest problem was speed, not quality like we assumed. We focused SkillPass on compressing our timeline and our acceptance rate jumped 35% because we stopped losing candidates to faster companies.",
        name: "Michael Santos",
        role: "Director of Recruiting",
        detail: "Misdiagnosed bottleneck, quiz corrected it",
      },
      stats: [
        { value: "8,400+", label: "Quizzes completed" },
        { value: "61%", label: "Misidentified their bottleneck" },
        { value: "35%", label: "Avg. improvement after fix" },
        { value: "2 min", label: "Quiz time" },
      ],
    },
    cta: {
      headline: "What's your hiring bottleneck?",
      gradientText: "Find out in 2 minutes.",
      description: "Take the diagnostic quiz, get your personalized results, and see exactly how SkillPass fixes your weakest point.",
      primaryCta: { text: "Take the quiz", href: "/tools/hiring-quiz" },
      secondaryCta: { text: "Talk to an expert", href: "/contact" },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // TRUST (299–300)
  // ═══════════════════════════════════════════════════════════════

  // 299
  {
    slug: "security-privacy-trust",
    category: "trust",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Your Professional Data Is Yours — Security & Privacy | SkillPass",
      description:
        "SkillPass protects your data with enterprise-grade security. You control who sees your profile. Here's exactly how we protect it.",
    },
    hero: {
      headline: "Your professional data is yours.",
      gradientText: "Here's how we protect it.",
      subheadline:
        "We're asking you to trust us with your transcripts, peer references, and assessment results. That's a big ask. Here's exactly what we do to earn that trust — and what we'll never do with your data.",
      primaryCta: { text: "Read our security practices", href: "/security" },
      secondaryCta: { text: "Read the privacy policy", href: "/privacy" },
    },
    problem: {
      headline: "You should be skeptical about",
      gradientText: "sharing professional data.",
      description:
        "Every platform wants your data. Most of them sell it, share it, or lose it. Professional data — transcripts, performance assessments, peer evaluations — is especially sensitive. You have every right to ask hard questions before trusting anyone with it.",
      stats: [
        { value: "68%", label: "Don't trust platforms with career data", description: "Most professionals are cautious about sharing professional information online. That skepticism is healthy." },
        { value: "3,200+", label: "Data breaches in 2025", description: "Thousands of companies exposed user data last year. If you're worried about security, you should be." },
        { value: "0", label: "Times SkillPass has sold user data", description: "We've never sold, shared, or monetized user data. Our business model is employer subscriptions, not data brokering." },
      ],
    },
    solution: {
      headline: "Enterprise security.",
      gradientText: "User-first privacy.",
      description:
        "SkillPass is built with security and privacy as core architecture decisions, not afterthoughts. Here's what that means concretely — not marketing language, but specific technical and policy commitments.",
      features: [
        { title: "Encryption everywhere", description: "AES-256 at rest, TLS 1.3 in transit. Your data is encrypted from the moment it enters our system to the moment you access it." },
        { title: "You control visibility", description: "Your profile is private by default. You choose who sees it — specific employers, all employers, or nobody. You can revoke access anytime." },
        { title: "No data selling, ever", description: "Our business model is employer subscriptions. We have zero incentive to sell your data because that's not how we make money." },
        { title: "SOC 2 Type II compliant", description: "Independently audited security controls. Not a self-assessment — a third-party audit that verifies we do what we say." },
        { title: "GDPR and CCPA compliant", description: "Full compliance with major privacy regulations. Data portability, right to deletion, and transparent processing policies." },
      ],
    },
    proof: {
      testimonial: {
        quote: "I'm a security engineer, so I asked SkillPass every hard question I could think of. They answered all of them, shared their SOC 2 report, and walked me through their architecture. I'm comfortable with my data here.",
        name: "Rachel Kim",
        role: "Security Engineer",
        detail: "Reviewed SkillPass security architecture personally",
      },
      stats: [
        { value: "SOC 2", label: "Type II certified" },
        { value: "AES-256", label: "Encryption standard" },
        { value: "0", label: "Data breaches" },
        { value: "0", label: "Data sales, ever" },
      ],
    },
    cta: {
      headline: "Trust is earned.",
      gradientText: "Here's our track record.",
      description: "Read our full security practices, privacy policy, and independent audit results. We're transparent because we have nothing to hide.",
      primaryCta: { text: "Review our security", href: "/security" },
      secondaryCta: { text: "Read the privacy policy", href: "/privacy" },
    },
  },

  // 300
  {
    slug: "eeoc-compliance",
    category: "trust",
    audience: "all",
    funnel: "mofu",
    seo: {
      title: "Skills-Based Scoring Is More Defensible Than Subjective Evaluation | SkillPass",
      description:
        "SkillPass scoring is standardized, consistent, and based on job-relevant criteria. That makes it inherently more defensible than subjective interview decisions.",
    },
    hero: {
      headline: "Skills-based scoring is inherently more defensible",
      gradientText: "than subjective evaluation.",
      subheadline:
        "Every hiring decision carries legal risk. Subjective evaluations — 'culture fit,' gut feelings, unstructured interviews — are the hardest to defend. Standardized, skills-based scoring is the easiest. SkillPass is built on that principle.",
      primaryCta: { text: "Learn about our compliance", href: "/compliance" },
      secondaryCta: { text: "Talk to our legal team", href: "/contact" },
    },
    problem: {
      headline: "Subjective hiring is",
      gradientText: "legally risky.",
      description:
        "EEOC guidelines are clear: hiring criteria should be job-relevant, consistently applied, and based on objective standards. Most hiring processes rely heavily on subjective assessments that are difficult to defend if challenged.",
      stats: [
        { value: "$165M", label: "EEOC settlements in 2025", description: "Employers paid nine figures in discrimination settlements last year. Most involved subjective hiring criteria." },
        { value: "72%", label: "Cases involve subjective criteria", description: "The vast majority of hiring discrimination cases center on vague, inconsistent, or subjective evaluation methods." },
        { value: "0", label: "Standardized scoring cases lost", description: "When hiring is based on standardized, job-relevant, consistently applied criteria, it's dramatically harder to challenge." },
      ],
    },
    solution: {
      headline: "Standardized. Consistent.",
      gradientText: "Defensible.",
      description:
        "SkillPass scoring is built on job-relevant criteria, applied identically to every candidate, using standardized assessments and verified data. That's exactly what EEOC guidelines recommend — and exactly what makes hiring decisions defensible.",
      features: [
        { title: "Job-relevant criteria only", description: "SkillScores are built from verified academics, standardized assessments, and structured references. Every component is directly job-relevant." },
        { title: "Consistent application", description: "Every candidate goes through the same scoring process. No room for 'culture fit' bias or interviewer mood variation." },
        { title: "No adverse impact by design", description: "Blind scoring that doesn't see demographics. Skills-based evaluation reduces the patterns that lead to adverse impact claims." },
        { title: "Auditable decisions", description: "Every score has a clear data trail. If a hiring decision is questioned, the rationale is documented and objective." },
        { title: "Adverse impact monitoring", description: "We continuously monitor scoring outcomes across demographic groups to ensure the system performs as designed." },
      ],
    },
    proof: {
      testimonial: {
        quote: "Our legal team reviewed SkillPass scoring methodology and said it's the most defensible hiring tool they've seen. Standardized criteria, blind scoring, consistent application — it checks every EEOC box.",
        name: "Thomas Whitaker",
        role: "General Counsel",
        detail: "Fortune 500 company, reviewed SkillPass for legal compliance",
      },
      stats: [
        { value: "100%", label: "Job-relevant criteria" },
        { value: "0", label: "Demographic data in scoring" },
        { value: "Blind", label: "Scoring process" },
        { value: "Full", label: "Audit trail" },
      ],
    },
    cta: {
      headline: "Build a hiring process that's defensible.",
      gradientText: "Not just effective — defensible.",
      description: "SkillPass gives you standardized, skills-based scoring that satisfies EEOC guidelines and protects your organization. Review our compliance documentation.",
      primaryCta: { text: "Review compliance docs", href: "/compliance" },
      secondaryCta: { text: "Talk to our legal team", href: "/contact" },
    },
  },
];

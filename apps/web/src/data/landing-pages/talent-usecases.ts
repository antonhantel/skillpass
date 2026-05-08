import type { LandingPage } from "./types";

export const talentUsecasePages: LandingPage[] = [
  // ═══════════════════════════════════════════════════════════════
  // TALENT USE CASES (1–20) — audience: talent, category: talent-use-cases
  // ═══════════════════════════════════════════════════════════════

  // 1. stop-7-coding-tests — TOFU — angry, specific, fed-up tone
  {
    slug: "stop-7-coding-tests",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Stop Taking the Same Coding Test at 7 Companies | SkillPass",
      description:
        "You've solved FizzBuzz for the seventh time this month. SkillPass lets you take proctored assessments once, share results everywhere, and skip redundant technical screens. Free forever.",
    },
    hero: {
      badge: "Enough Already",
      headline: "Seven Companies. Seven Coding Tests.",
      gradientText: "Same Damn Questions.",
      subheadline:
        "You reversed a linked list on Monday. Then again on Wednesday. Then Friday. Each company thinks they're special. They're not. SkillPass lets you prove your skills once and send verified results to every employer on Earth.",
      primaryCta: { text: "Take It Once", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Free for talent. Always. No hidden anything.",
    },
    problem: {
      badge: "This Is Ridiculous",
      headline: "You're Solving the Same Problems",
      gradientText: "Over and Over and Over",
      description:
        "Every company acts like they invented the technical interview. They didn't. You're burning hours on redundant tests while your actual skills sit there, unrecognized.",
      stats: [
        {
          value: "15+ hrs",
          label: "Monthly time on repeated coding tests",
          description:
            "The average active job seeker spends over 15 hours a month on technical assessments. Most of them test the exact same things.",
        },
        {
          value: "73%",
          label: "Tests that overlap in content",
          description:
            "Nearly three-quarters of coding assessments across employers test identical concepts. Arrays, trees, strings. Again.",
        },
        {
          value: "4.2",
          label: "Avg coding tests per candidate per week",
          description:
            "If you're applying to 10 companies, expect to spend your evenings on HackerRank instead of sleeping.",
        },
      ],
    },
    solution: {
      badge: "One and Done",
      headline: "Prove It Once.",
      gradientText: "Share It Forever.",
      description:
        "SkillPass offers 8 proctored assessment types — coding, system design, data analysis, writing, and more. Take each one once. Your results travel with you to every application.",
      features: [
        {
          title: "8 Assessment Types",
          description:
            "Coding, system design, SQL, data analysis, technical writing, product thinking, quantitative reasoning, and communication. Pick what fits your role.",
        },
        {
          title: "Proctored and Verified",
          description:
            "Browser-locked, webcam-monitored, time-stamped. Employers trust the results because they can't be gamed. No more 'did they Google it?' suspicion.",
        },
        {
          title: "Retake When You Improve",
          description:
            "Scores don't expire, but you can retake assessments when you've leveled up. Your best score stays. Progress is visible.",
        },
        {
          title: "One Link, All Results",
          description:
            "Your skillpass.io/username profile shows every verified assessment. Drop it in applications. Recruiters see your scores before they schedule a call.",
        },
      ],
    },
    proof: {
      headline: "Developers Who Stopped Repeating Themselves",
      testimonial: {
        quote:
          "I was doing 5 coding tests a week across different companies. All slightly different platforms, all testing the same stuff. Built my SkillPass profile on a Sunday afternoon, and three of my next five applications skipped straight to the technical discussion. The actual interesting part.",
        name: "Marcus T.",
        role: "Full-Stack Engineer",
        detail: "SkillScore: 781 | Assessed Ability: 94th percentile",
      },
      stats: [
        { value: "15 hrs", label: "Saved per month" },
        { value: "3.2x", label: "More callbacks" },
        { value: "81%", label: "Skip initial screen" },
        { value: "$0", label: "Cost to you" },
      ],
    },
    cta: {
      headline: "Stop Solving FizzBuzz.",
      gradientText: "Start Getting Hired.",
      description:
        "Build your SkillPass profile in under 10 minutes. Take assessments on your schedule. Never repeat a coding test again.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See Sample Scores", href: "/demo" },
    },
  },

  // 2. one-assessment-everywhere — TOFU — portability, clean, principled
  {
    slug: "one-assessment-everywhere",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Take It Once, Share It Everywhere — Portable Skill Verification | SkillPass",
      description:
        "Your skills don't reset between applications. Why should your assessments? SkillPass gives you portable, verified proof of ability that works at every company. Free.",
    },
    hero: {
      badge: "Portable Proof",
      headline: "Take It Once.",
      gradientText: "Share It Everywhere.",
      subheadline:
        "Your skills belong to you, not to any single company's hiring portal. SkillPass creates a verified, portable record of your abilities — academics, references, assessments, performance — that travels wherever you apply.",
      primaryCta: { text: "Create Your Profile", href: "/signup" },
      secondaryCta: { text: "How Portability Works", href: "/how-it-works" },
      trustLine: "Accepted by 200+ employers. Free for talent.",
    },
    problem: {
      badge: "The Portability Problem",
      headline: "Your Proof of Skill",
      gradientText: "Gets Thrown Away Every Time",
      description:
        "You ace a coding test at Company A. Company B doesn't care. You get glowing references at Company C. Company D wants their own. Every application starts from zero.",
      stats: [
        {
          value: "0%",
          label: "Portability in traditional hiring",
          description:
            "Nothing carries over. Not your test results. Not your references. Not even your verified GPA. It's all locked in each company's ATS.",
        },
        {
          value: "40+ hrs",
          label: "Annual time re-proving yourself",
          description:
            "Even passive job seekers spend 40+ hours a year on redundant interviews, reference requests, and skills tests. Active seekers? Triple that.",
        },
        {
          value: "87%",
          label: "Candidates frustrated by redundancy",
          description:
            "Almost 9 in 10 job seekers say repeating skills verification across companies is the worst part of job hunting.",
        },
      ],
    },
    solution: {
      badge: "How SkillPass Works",
      headline: "Build Once.",
      gradientText: "Apply Everywhere.",
      description:
        "Four verified signals merge into your SkillScore (300-850). It's yours. It goes where you go. No company owns it.",
      features: [
        {
          title: "Your SkillScore Travels",
          description:
            "Academic calibration, peer reviews, performance analysis, and proctored assessments — all rolled into one score. Share it via a single URL.",
        },
        {
          title: "Employers Already Trust It",
          description:
            "SkillPass profiles are accepted across hundreds of companies. Many let you skip their own screening entirely if your score meets their bar.",
        },
        {
          title: "You Own the Data",
          description:
            "Your profile lives at skillpass.io/username. You control who sees what. Revoke access, update scores, manage your career data like an adult.",
        },
        {
          title: "Updates Flow Automatically",
          description:
            "Add a new assessment or get a new reference? Every employer with access sees the updated profile. No re-uploading to 15 different portals.",
        },
      ],
    },
    proof: {
      headline: "Portability in Practice",
      testimonial: {
        quote:
          "I applied to 12 companies in three weeks. Instead of 12 coding tests, 12 reference requests, and 12 resume uploads, I sent one link. Eight of them moved me straight to final rounds. I don't know why hiring wasn't always like this.",
        name: "Aisha K.",
        role: "Data Scientist, 4 YOE",
        detail: "SkillScore: 768",
      },
      stats: [
        { value: "1 link", label: "Replaces 12 applications" },
        { value: "67%", label: "Skip to final round" },
        { value: "10 min", label: "Setup time" },
        { value: "Forever", label: "How long it lasts" },
      ],
    },
    cta: {
      headline: "Your Skills Are Already Proven.",
      gradientText: "Stop Proving Them Again.",
      description:
        "Create your SkillPass profile once. Use it for your next 50 applications. It's free and it's yours.",
      primaryCta: { text: "Get Started Free", href: "/signup" },
      secondaryCta: { text: "See a Demo Profile", href: "/demo" },
    },
  },

  // 3. professional-credit-score — TOFU — explanatory, intriguing, analogy-driven
  {
    slug: "professional-credit-score",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "A Credit Score for Your Professional Ability | SkillPass",
      description:
        "You have a credit score for your finances. Why not one for your skills? SkillPass SkillScore (300-850) gives employers a verified, single-number measure of what you can do. Free.",
    },
    hero: {
      badge: "The SkillScore",
      headline: "You Already Have a Credit Score.",
      gradientText: "Now Get One for Your Career.",
      subheadline:
        "FICO scores transformed lending. No more banker gut feelings — just data. SkillPass does the same thing for hiring. Your SkillScore (300-850) combines academic rigor, peer reviews, assessments, and performance into one verified number. Employers use it to find people. People like you.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "How Scoring Works", href: "/how-it-works" },
      trustLine: "300-850. Four sub-scores. Zero cost for talent.",
    },
    problem: {
      badge: "Hiring Has No Standard",
      headline: "Imagine Applying for a Mortgage",
      gradientText: "With Just a Cover Letter",
      description:
        "That's what job hunting is. You write a letter saying you're great. The employer decides in 6 seconds whether to believe you. There's no standardized measure of professional ability. Until now.",
      stats: [
        {
          value: "6 sec",
          label: "Time spent reviewing your resume",
          description:
            "Six seconds. That's all a recruiter gives your carefully crafted two-page summary of a decade of work.",
        },
        {
          value: "0",
          label: "Standardized skill measures in hiring",
          description:
            "Finance has FICO. Education has SATs. Professional hiring has... nothing. Resumes, gut feelings, and whoever your friend knows.",
        },
        {
          value: "52%",
          label: "Hires based on 'culture fit' (gut feel)",
          description:
            "More than half of hiring decisions come down to vibes. That's not a process — it's a coin flip with extra steps.",
        },
      ],
    },
    solution: {
      badge: "How SkillScore Works",
      headline: "Four Signals.",
      gradientText: "One Number. 300 to 850.",
      description:
        "Like a credit score, your SkillScore combines multiple verified data points into a single, interpretable number. Here's what feeds it.",
      features: [
        {
          title: "Academic (calibrated GPA + rigor)",
          description:
            "Your GPA gets normalized across 4,000+ institutions. A 3.4 in MIT Electrical Engineering and a 3.4 in general studies are not the same. SkillPass knows that.",
        },
        {
          title: "Peer Signal (360-degree references)",
          description:
            "Eight dimensions — technical skill, collaboration, communication, reliability, and more. Scored by people who've actually worked with you. Not your aunt.",
        },
        {
          title: "Performance (NLP review analysis)",
          description:
            "Connect performance reviews and SkillPass's NLP engine extracts signal from the corporate-speak. What did your manager actually think?",
        },
        {
          title: "Assessed Ability (proctored tests)",
          description:
            "Eight proctored assessment types from coding to quantitative reasoning. Verified, timestamped, and impossible to outsource to ChatGPT.",
        },
      ],
    },
    proof: {
      headline: "What a SkillScore Actually Does for You",
      testimonial: {
        quote:
          "I'd never heard of a 'credit score for skills' before. Sounded gimmicky. But I set it up in 10 minutes, got a 739, and within a week two recruiters reached out to me. Not because of my resume — because of my score. It just works like credit scores work. Silently, in the background, opening doors.",
        name: "Jordan W.",
        role: "Product Manager, 6 YOE",
        detail: "SkillScore: 739 | Peer Signal: 91st percentile",
      },
      stats: [
        { value: "300-850", label: "Score range" },
        { value: "4", label: "Verified sub-scores" },
        { value: "4,000+", label: "Institutions calibrated" },
        { value: "10 min", label: "To set up" },
      ],
    },
    cta: {
      headline: "You Wouldn't Buy a House Without a Credit Check.",
      gradientText: "Why Hire Without One?",
      description:
        "Get your SkillScore. It's free, it takes 10 minutes, and it'll work for you every time someone searches for talent.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See the Scoring Model", href: "/how-it-works" },
    },
  },

  // 4. verified-profile-10min — MOFU — speed, ease, no-nonsense
  {
    slug: "verified-profile-10min",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Build a Verified Professional Profile in 10 Minutes | SkillPass",
      description:
        "No lengthy forms. No chasing references for weeks. SkillPass builds your verified professional profile — SkillScore, academic calibration, references, assessments — in under 10 minutes. Free.",
    },
    hero: {
      badge: "10 Minutes",
      headline: "10 Minutes. Verified Profile.",
      gradientText: "No Catch.",
      subheadline:
        "Connect your transcript. Invite a few references. Take an optional assessment. That's it. You'll have a verified SkillScore and public profile before your coffee gets cold.",
      primaryCta: { text: "Start Now — It's Free", href: "/signup" },
      secondaryCta: { text: "See the Steps", href: "/how-it-works" },
      trustLine: "Average setup: 8 minutes 42 seconds.",
    },
    problem: {
      badge: "Why Everything Else Takes Forever",
      headline: "Building a Professional Profile",
      gradientText: "Shouldn't Take Weeks",
      description:
        "LinkedIn took you an afternoon. Your portfolio took a weekend. Reference letters took months of polite follow-ups. Why is proving your skills the hardest part of your career?",
      stats: [
        {
          value: "4.5 hrs",
          label: "Average time building a job application",
          description:
            "Resume tailoring, cover letter, portfolio links, reference coordination. Per application. Multiply by 30.",
        },
        {
          value: "11 days",
          label: "Average time to collect references",
          description:
            "Emailing former managers. Following up. Following up again. Hoping they remember you fondly.",
        },
        {
          value: "67%",
          label: "Abandon incomplete applications",
          description:
            "Two-thirds of candidates quit applications that take too long. The process itself filters out good people.",
        },
      ],
    },
    solution: {
      badge: "Here's What 10 Minutes Gets You",
      headline: "Setup Is the Easy Part.",
      gradientText: "The Results Last Forever.",
      description:
        "SkillPass pulls from data you already have. No lengthy questionnaires. No trick questions. Just connect, verify, and go.",
      features: [
        {
          title: "Transcript Upload (2 min)",
          description:
            "Upload your transcript or connect your university. SkillPass auto-calculates your calibrated academic score across 4,000+ institutions.",
        },
        {
          title: "Reference Invites (3 min)",
          description:
            "Enter email addresses. SkillPass sends structured 8-dimension surveys to your references. They fill them out on their own time. You just click 'invite.'",
        },
        {
          title: "Assessment (optional, 5 min each)",
          description:
            "Proctored assessments boost your Assessed Ability sub-score. They're optional, but they help. Each takes 5-15 minutes.",
        },
        {
          title: "Public Profile — Instant",
          description:
            "The moment you connect your first signal, your profile goes live at skillpass.io/username. Add more over time. It only gets stronger.",
        },
      ],
    },
    proof: {
      headline: "8 Minutes 42 Seconds. That's the Average.",
      testimonial: {
        quote:
          "I literally did it during a standup that went long. Uploaded my transcript, invited three references, and my profile was live before the meeting ended. My SkillScore showed up the same day. I've spent more time filling out a single Workday application.",
        name: "Chen L.",
        role: "Software Engineer, 3 YOE",
        detail: "SkillScore: 752 | Setup time: 9 minutes",
      },
      stats: [
        { value: "8m 42s", label: "Average setup" },
        { value: "100%", label: "Free for talent" },
        { value: "24 hrs", label: "To first reference response" },
        { value: "1 link", label: "To share everything" },
      ],
    },
    cta: {
      headline: "You've Got 10 Minutes.",
      gradientText: "That's All It Takes.",
      description:
        "Seriously. Start now and you'll have a verified professional profile before you finish your next cup of coffee.",
      primaryCta: { text: "Build It Now", href: "/signup" },
      secondaryCta: { text: "Watch Someone Do It", href: "/demo" },
    },
  },

  // 5. replace-resume-skillscore — TOFU — bold, provocative, resume-killer
  {
    slug: "replace-resume-skillscore",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Your Resume Is Dead. Your SkillScore Isn't. | SkillPass",
      description:
        "Resumes are self-reported, unverified, and skimmed in 6 seconds. Your SkillScore (300-850) is verified, portable, and does the talking for you. Free to build.",
    },
    hero: {
      badge: "Post-Resume Era",
      headline: "Resumes Are Just",
      gradientText: "Fancy Self-Reports.",
      subheadline:
        "Anyone can write 'proficient in Python' on a PDF. Nobody can fake a 780 SkillScore. It's verified academic data, real peer reviews, proctored assessments, and NLP-analyzed performance reviews — all in one number. The resume had a good run. It's over.",
      primaryCta: { text: "Replace Your Resume", href: "/signup" },
      secondaryCta: { text: "SkillScore vs. Resume", href: "/how-it-works" },
      trustLine: "A SkillScore is to a resume what GPS is to a paper map.",
    },
    problem: {
      badge: "The Resume Problem",
      headline: "A Document Where You Say",
      gradientText: "Nice Things About Yourself",
      description:
        "That's what a resume is. A marketing brochure. Written by you, about you, with no verification. Hiring managers know this. That's why they don't trust it.",
      stats: [
        {
          value: "85%",
          label: "Resumes contain exaggerations",
          description:
            "Multiple studies confirm it. Inflated titles, stretched dates, invented metrics. Resumes are fiction in a professional font.",
        },
        {
          value: "6 sec",
          label: "Time spent reading yours",
          description:
            "You spent 3 hours formatting it. The recruiter spent 6 seconds scanning it. That's the exchange rate.",
        },
        {
          value: "75%",
          label: "Filtered out by ATS before a human sees them",
          description:
            "Three out of four resumes are rejected by keyword-matching algorithms. Not by people. By robots looking for buzzwords.",
        },
      ],
    },
    solution: {
      badge: "The Replacement",
      headline: "A Number That",
      gradientText: "Can't Be Faked",
      description:
        "Your SkillScore isn't self-reported. It's compiled from four independent, verified data sources. No embellishment possible.",
      features: [
        {
          title: "Verified, Not Self-Reported",
          description:
            "Transcripts come from institutions. References come from real colleagues via structured surveys. Assessments are proctored. Reviews are NLP-analyzed. You don't write any of it.",
        },
        {
          title: "One Number, Infinite Context",
          description:
            "300-850. Employers get the top-line score plus four sub-score breakdowns. More signal than a resume delivers in 6 seconds.",
        },
        {
          title: "Always Current",
          description:
            "Resumes go stale the day you update them. Your SkillScore evolves as you add references, retake assessments, and accumulate reviews.",
        },
        {
          title: "Searchable by Employers",
          description:
            "Employers search SkillPass for candidates by score, sub-score, and specialty. Your resume sits in an inbox. Your SkillScore gets found.",
        },
      ],
    },
    proof: {
      headline: "The Resume Replacement Is Already Happening",
      testimonial: {
        quote:
          "I stopped sending my resume to companies that accept SkillPass profiles. My response rate went from 8% to 31%. Turns out, a verified score is more persuasive than two pages of bullet points I wrote myself.",
        name: "Danielle R.",
        role: "Marketing Analyst",
        detail: "SkillScore: 724 | Response rate: 31%",
      },
      stats: [
        { value: "3.8x", label: "Higher response rate" },
        { value: "0 hrs", label: "Resume formatting" },
        { value: "200+", label: "Employers accepting SkillPass" },
        { value: "$0", label: "Forever free" },
      ],
    },
    cta: {
      headline: "Your Resume Can't Prove Anything.",
      gradientText: "Your SkillScore Can.",
      description:
        "Build a verified profile in 10 minutes. Stop relying on a document no one reads.",
      primaryCta: { text: "Build Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See the Difference", href: "/demo" },
    },
  },

  // 6. prove-skills-no-brand-degree — TOFU — meritocracy, emotionally resonant
  {
    slug: "prove-skills-no-brand-degree",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Prove Your Skills Without a Brand-Name Degree | SkillPass",
      description:
        "You didn't go to Stanford. So what? SkillPass calibrates your GPA across 4,000+ institutions and lets your verified skills speak louder than a school name. Free.",
    },
    hero: {
      badge: "Skills > School Name",
      headline: "You Didn't Go to an Ivy.",
      gradientText: "You're Still Brilliant.",
      subheadline:
        "The kid from the state school who outworks everyone. The community college grad who codes circles around CS majors. You exist. SkillPass proves it — with calibrated academics, verified assessments, and peer reviews that don't care where you went to school.",
      primaryCta: { text: "Prove What You Can Do", href: "/signup" },
      secondaryCta: { text: "How Calibration Works", href: "/how-it-works" },
      trustLine: "4,000+ institutions. Every GPA calibrated fairly.",
    },
    problem: {
      badge: "The Name-Brand Filter",
      headline: "Hiring Isn't Meritocratic.",
      gradientText: "Not Yet.",
      description:
        "Your school name is a filter. Not because it predicts performance — it doesn't — but because recruiters need shortcuts. That's the system you're competing in.",
      stats: [
        {
          value: "2.4x",
          label: "More likely to get called back from a 'top 20' school",
          description:
            "Identical resumes, different school names. The branded one gets 2.4x more callbacks. That's not merit. That's bias.",
        },
        {
          value: "64%",
          label: "Recruiters admit school name matters",
          description:
            "Almost two-thirds of recruiters say institution prestige influences their decisions. Most say they wish it didn't.",
        },
        {
          value: "$0",
          label: "Extra ability from an expensive degree",
          description:
            "Research consistently shows school prestige doesn't predict job performance after the first year. The filter is broken.",
        },
      ],
    },
    solution: {
      badge: "The Equalizer",
      headline: "Your School Didn't Define You.",
      gradientText: "Your SkillScore Does.",
      description:
        "SkillPass calibrates your academic record so a 3.6 from a rigorous state program gets the recognition it deserves. Then it adds three more verified signals on top.",
      features: [
        {
          title: "Calibrated Academics",
          description:
            "Your GPA is weighted by course difficulty and institutional rigor. A tough program at a no-name school scores higher than easy classes at a famous one. That's the point.",
        },
        {
          title: "Proctored Assessments Don't Care About Your Diploma",
          description:
            "A coding test doesn't ask where you went to school. Neither does a system design assessment. Your Assessed Ability sub-score is pure skill.",
        },
        {
          title: "Peer Signal From People Who Know",
          description:
            "Your references — coworkers, mentors, managers — score you on 8 dimensions. They don't rate your school. They rate you.",
        },
        {
          title: "Employers Search by Score, Not by Name",
          description:
            "When a company searches SkillPass for candidates above 720, they don't see school names. They see scores. Your score.",
        },
      ],
    },
    proof: {
      headline: "Talent Doesn't Need a Logo",
      testimonial: {
        quote:
          "I went to a regional state university nobody outside my state has heard of. I applied to 60 jobs and got 3 responses. After SkillPass, my calibrated Academic score put me in the 88th percentile. I got my first Big Tech interview within a month. Nobody asked about my school.",
        name: "Tyler B.",
        role: "Backend Developer",
        detail: "SkillScore: 761 | State University graduate",
      },
      stats: [
        { value: "4,000+", label: "Schools calibrated" },
        { value: "88th %ile", label: "Avg calibrated rank for top performers" },
        { value: "3.1x", label: "More interviews for non-target grads" },
        { value: "$0", label: "Cost to prove your worth" },
      ],
    },
    cta: {
      headline: "Your Talent Doesn't Have a School Logo.",
      gradientText: "It Has a Score.",
      description:
        "Build your SkillPass profile. Let your verified abilities outrank someone else's brand-name diploma.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Calibration in Action", href: "/demo" },
    },
  },

  // 7. gpa-counts-any-school — MOFU — feature showcase, calibration-focused
  {
    slug: "gpa-counts-any-school",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Your GPA Counts — No Matter Where You Went to School | SkillPass",
      description:
        "SkillPass calibrates your GPA across 4,000+ institutions, weighting course rigor and program difficulty. A hard-earned 3.5 gets the credit it deserves. Free.",
    },
    hero: {
      badge: "Academic Calibration",
      headline: "A 3.5 from Anywhere",
      gradientText: "Finally Means Something.",
      subheadline:
        "GPAs aren't comparable. A 3.5 in Chemical Engineering at Georgia Tech is wildly different from a 3.5 in Communications at a school with 95% grade inflation. SkillPass normalizes across 4,000+ institutions so your number reflects actual rigor.",
      primaryCta: { text: "Get Your Calibrated Score", href: "/signup" },
      secondaryCta: { text: "How Calibration Works", href: "/how-it-works" },
      trustLine: "4,000+ institutions. Every major. Course-level rigor data.",
    },
    problem: {
      badge: "GPAs Are Broken",
      headline: "Not All 3.5s",
      gradientText: "Are Created Equal",
      description:
        "Grade inflation has destroyed GPA as a signal. A 3.8 at one school might equal a 3.2 at another. Everyone knows this. Nobody's fixed it. Until now.",
      stats: [
        {
          value: "0.5+",
          label: "GPA variance across schools for same ability level",
          description:
            "Two students with identical knowledge can have GPAs that differ by half a point or more, purely based on where they went.",
        },
        {
          value: "73%",
          label: "Schools with documented grade inflation",
          description:
            "Nearly three-quarters of institutions have significantly inflated grades since 2000. The average GPA at some schools is now 3.6.",
        },
        {
          value: "47%",
          label: "Employers who've stopped looking at GPA",
          description:
            "Almost half of employers ignore GPA entirely because it's unreliable. That punishes people who earned theirs honestly.",
        },
      ],
    },
    solution: {
      badge: "Calibration Engine",
      headline: "Your GPA, Recalculated for",
      gradientText: "What It Actually Means",
      description:
        "SkillPass Academic Score accounts for institution rigor, program difficulty, course load, and historical grade distributions. The result is a number that's genuinely comparable.",
      features: [
        {
          title: "Institution-Level Normalization",
          description:
            "Every school has different grading standards. SkillPass adjusts your GPA against historical distributions from 4,000+ schools. Apples to apples.",
        },
        {
          title: "Course Rigor Weighting",
          description:
            "Organic Chemistry counts more than Introduction to Film. Your academic score reflects what you studied, not just how you were graded.",
        },
        {
          title: "Program Difficulty Adjustment",
          description:
            "Engineering, pre-med, pure math — these programs grade harder. SkillPass knows that and adjusts accordingly.",
        },
        {
          title: "Transparent Methodology",
          description:
            "You can see exactly how your calibrated score was calculated. Every factor, every weight. No black box.",
        },
      ],
    },
    proof: {
      headline: "When Your GPA Finally Reflects Your Effort",
      testimonial: {
        quote:
          "My raw GPA was 3.4 from a tough engineering program. I kept getting passed over for kids from easier schools with 3.9s. My calibrated Academic score came back in the 82nd percentile. That's what I knew all along — I just couldn't prove it before.",
        name: "Reyna G.",
        role: "Mechanical Engineering Graduate",
        detail: "Raw GPA: 3.4 | Calibrated Academic: 82nd percentile",
      },
      stats: [
        { value: "4,000+", label: "Schools in database" },
        { value: "82nd %ile", label: "Avg hard-program calibrated rank" },
        { value: "0.5+", label: "Typical GPA adjustment" },
        { value: "Free", label: "For every student" },
      ],
    },
    cta: {
      headline: "Your GPA Deserves Context.",
      gradientText: "SkillPass Provides It.",
      description:
        "Upload your transcript. See your calibrated academic score in minutes. Finally, a number that means what yours should have always meant.",
      primaryCta: { text: "Upload Your Transcript", href: "/signup" },
      secondaryCta: { text: "See the Methodology", href: "/how-it-works" },
    },
  },

  // 8. references-competitive-advantage — MOFU — reframing references as a weapon
  {
    slug: "references-competitive-advantage",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Turn Your References Into a Competitive Advantage | SkillPass",
      description:
        "References aren't a checkbox. On SkillPass, 360-degree peer reviews across 8 dimensions become your Peer Signal sub-score — a verified competitive edge employers see upfront. Free.",
    },
    hero: {
      badge: "Peer Signal",
      headline: "Your References Aren't a Checkbox.",
      gradientText: "They're a Weapon.",
      subheadline:
        "Most people treat references as an afterthought — three names on a page, called once if you're lucky. SkillPass turns them into structured, quantified proof that the people who've worked with you think you're exceptional. That's not a formality. That's an advantage.",
      primaryCta: { text: "Activate Your References", href: "/signup" },
      secondaryCta: { text: "See Peer Signal Scoring", href: "/how-it-works" },
      trustLine: "8 dimensions. 360 degrees. Verified by real colleagues.",
    },
    problem: {
      badge: "References Are Wasted",
      headline: "Three Names on a Page.",
      gradientText: "Never Called.",
      description:
        "You carefully pick your best advocates. You email them. You worry about it. And then the hiring company never contacts them, or asks three generic questions and moves on.",
      stats: [
        {
          value: "22%",
          label: "References actually contacted",
          description:
            "Fewer than 1 in 4 references are ever called. All that coordination for a check that usually doesn't happen.",
        },
        {
          value: "3 min",
          label: "Average reference call length",
          description:
            "When references are called, the conversation averages 3 minutes. 'Would you hire them again?' 'Yes.' Done.",
        },
        {
          value: "0",
          label: "Dimensions scored in traditional references",
          description:
            "Traditional reference checks produce zero structured data. Just vibes from a phone call that the recruiter will forget by lunch.",
        },
      ],
    },
    solution: {
      badge: "Peer Signal: Quantified Reputation",
      headline: "8 Dimensions.",
      gradientText: "360 Degrees. Real Signal.",
      description:
        "SkillPass sends structured surveys to your references — colleagues, managers, mentors. They score you across 8 dimensions. The result is a Peer Signal sub-score that employers see before they even call you.",
      features: [
        {
          title: "8-Dimension Framework",
          description:
            "Technical ability, collaboration, communication, reliability, leadership, problem-solving, coachability, and work ethic. Not 'would you hire them again?' — real signal.",
        },
        {
          title: "Multiple Perspectives",
          description:
            "Invite managers, peers, direct reports, mentors. 360-degree coverage. One person's opinion is anecdotal. Five is a pattern.",
        },
        {
          title: "Scores Visible Upfront",
          description:
            "Your Peer Signal sub-score appears on your profile immediately. Employers see it before the first interview. Strong references become a door-opener, not an afterthought.",
        },
        {
          title: "References on Their Own Schedule",
          description:
            "No more chasing people by email. SkillPass sends the survey. They fill it out when they have 5 minutes. You get notified when it's done.",
        },
      ],
    },
    proof: {
      headline: "When References Actually Work For You",
      testimonial: {
        quote:
          "I had a hiring manager tell me my Peer Signal score was what got me the interview. She said, 'Four people independently rated you in the 90th percentile for reliability. That's worth more than any coding test.' I'd never thought of references as something that could actively help me. Now I do.",
        name: "Sam O.",
        role: "Project Manager, 5 YOE",
        detail: "Peer Signal: 93rd percentile | 6 references",
      },
      stats: [
        { value: "8", label: "Dimensions scored" },
        { value: "93%", label: "Avg Peer Signal satisfaction" },
        { value: "5 min", label: "Time per reference to complete" },
        { value: "2.6x", label: "More interviews with strong Peer Signal" },
      ],
    },
    cta: {
      headline: "Your Former Colleagues Think You're Great.",
      gradientText: "Let Employers See It.",
      description:
        "Invite 3-5 references. They'll spend 5 minutes on a structured survey. You'll get a Peer Signal score that works for you at every company.",
      primaryCta: { text: "Invite Your References", href: "/signup" },
      secondaryCta: { text: "See the 8 Dimensions", href: "/how-it-works" },
    },
  },

  // 9. hired-faster-preverified — MOFU — speed-to-hire from candidate POV
  {
    slug: "hired-faster-preverified",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Get Hired Faster When You're Already Verified | SkillPass",
      description:
        "Pre-verified candidates move through hiring 60% faster. SkillPass verifies your skills, references, and academics before you even apply. Free for talent.",
    },
    hero: {
      badge: "Pre-Verified Advantage",
      headline: "Verified Before You Apply.",
      gradientText: "Hired Before They Blink.",
      subheadline:
        "When your SkillScore, references, and assessments are already verified, companies don't need to spend 3 weeks validating you. You skip the slow parts. Phone screens, take-homes, reference checks — already done. You just show up for the conversation.",
      primaryCta: { text: "Get Pre-Verified", href: "/signup" },
      secondaryCta: { text: "See the Speed Difference", href: "/how-it-works" },
      trustLine: "Pre-verified candidates get hired 60% faster on average.",
    },
    problem: {
      badge: "Why Hiring Takes So Long",
      headline: "42 Days Average.",
      gradientText: "Most of It Is Verification.",
      description:
        "The actual conversations — the interviews where you talk about the role — take maybe 4 hours total. The other 38 days? Scheduling, screening, reference checking, skills testing. Bureaucracy.",
      stats: [
        {
          value: "42 days",
          label: "Average time from application to offer",
          description:
            "Six weeks. That's six weeks of wondering, following up, and pretending you're not stressed.",
        },
        {
          value: "71%",
          label: "Time spent on verification, not evaluation",
          description:
            "Nearly three-quarters of the hiring timeline is validation — confirming things you already know about yourself.",
        },
        {
          value: "3.4",
          label: "Offers lost per candidate to slow processes",
          description:
            "On average, candidates miss out on 3+ opportunities because one company's process dragged while another moved fast.",
        },
      ],
    },
    solution: {
      badge: "Skip the Bottleneck",
      headline: "Arrive Pre-Verified.",
      gradientText: "Leave With an Offer.",
      description:
        "SkillPass front-loads verification. By the time you apply, your academics, references, assessments, and performance are already confirmed. Companies just need to decide if they like you.",
      features: [
        {
          title: "Skip the Phone Screen",
          description:
            "A verified SkillScore tells the recruiter more than a 30-minute phone call. Many companies fast-track SkillPass users straight to hiring manager conversations.",
        },
        {
          title: "No Take-Home Assignment",
          description:
            "Your proctored assessment results are already on your profile. Why would a company ask you to do another one?",
        },
        {
          title: "References Already Done",
          description:
            "No waiting 2 weeks for reference checks. Your Peer Signal is live, quantified, and visible from day one.",
        },
        {
          title: "Background Confirmation — Instant",
          description:
            "Transcripts, certifications, and credentials already verified. The background check that adds 5 days to everyone else's process? You've already cleared it.",
        },
      ],
    },
    proof: {
      headline: "42 Days to 14 Days",
      testimonial: {
        quote:
          "My last job hunt took 9 weeks. This time, I built a SkillPass profile and applied to 8 companies. Three of them skipped the phone screen entirely and went straight to on-site. I had an offer in 14 days. The recruiter literally said, 'We don't need to verify you — it's already done.'",
        name: "Nina P.",
        role: "Senior Data Analyst",
        detail: "SkillScore: 734 | Hired in 14 days",
      },
      stats: [
        { value: "60%", label: "Faster time-to-offer" },
        { value: "14 days", label: "Avg for pre-verified candidates" },
        { value: "81%", label: "Skip phone screen" },
        { value: "3.2x", label: "More final-round invites" },
      ],
    },
    cta: {
      headline: "Don't Wait 42 Days.",
      gradientText: "Be Verified Before Day 1.",
      description:
        "Build your SkillPass profile now. When you're ready to apply, the slow parts are already done.",
      primaryCta: { text: "Get Verified Now", href: "/signup" },
      secondaryCta: { text: "See Average Timelines", href: "/demo" },
    },
  },

  // 10. skip-to-final-round — MOFU — fun, aspirational, skip-the-boring-parts
  {
    slug: "skip-to-final-round",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Skip to the Final Round — Pre-Verified Interviewing | SkillPass",
      description:
        "What if you only did the fun part of interviewing? SkillPass pre-verifies your skills so companies skip the screening rounds and go straight to meaningful conversations. Free.",
    },
    hero: {
      badge: "Skip Ahead",
      headline: "What If You Only Did",
      gradientText: "the Fun Part of Interviewing?",
      subheadline:
        "The first three rounds of most interview processes are just verification theater. Can you code? Check. Can you communicate? Check. Are your references real? Check. SkillPass does all of that upfront. So you skip to the part that actually matters — the real conversation about the role.",
      primaryCta: { text: "Skip the Boring Parts", href: "/signup" },
      secondaryCta: { text: "How Skipping Works", href: "/how-it-works" },
      trustLine: "67% of SkillPass users skip to final rounds.",
    },
    problem: {
      badge: "Interview Theater",
      headline: "Round 1: Can You Code? Round 2: Can You Code?",
      gradientText: "Round 3: Can You Code?",
      description:
        "Modern interviewing is mostly redundant validation. You prove the same things at every stage to different people who don't share notes. It's exhausting. It's wasteful. And it doesn't even predict job performance well.",
      stats: [
        {
          value: "5.2",
          label: "Average interview rounds per company",
          description:
            "Five rounds. Each testing slightly different aspects of the same basic question: 'Are you competent?'",
        },
        {
          value: "22 hrs",
          label: "Total interview time per job search",
          description:
            "Across all companies. That's nearly three full workdays spent answering the same questions in different conference rooms.",
        },
        {
          value: "14%",
          label: "Interview accuracy at predicting job success",
          description:
            "Research shows traditional interviews predict actual job performance about as well as a coin flip. All that effort for 14%.",
        },
      ],
    },
    solution: {
      badge: "The Fun Part",
      headline: "Go Directly to",
      gradientText: "the Conversation That Matters",
      description:
        "When your SkillScore handles the verification, employers can spend their time asking the questions that actually matter. Culture fit. Role alignment. What you'd build. The interesting stuff.",
      features: [
        {
          title: "Pre-Cleared Technical Ability",
          description:
            "Your Assessed Ability sub-score proves technical competence. No more whiteboard interviews solving problems you'll never face on the job.",
        },
        {
          title: "References Already Quantified",
          description:
            "The 'are you a good person to work with' question? Your Peer Signal already answers it across 8 dimensions. Skip the behavioral round.",
        },
        {
          title: "Academic Credentials Verified",
          description:
            "No waiting for the background check to confirm your degree. It's already confirmed and calibrated on your profile.",
        },
        {
          title: "Final Round Directly",
          description:
            "Many employers using SkillPass offer fast-track to final round for candidates above their score threshold. You just show up and talk about the work.",
        },
      ],
    },
    proof: {
      headline: "They Skipped Three Rounds",
      testimonial: {
        quote:
          "I did five rounds at Company A and got rejected. Company B saw my SkillPass profile, said 'your scores check out,' and invited me straight to meet the team. I got the offer after one conversation. Same me. Different process. Wildly different outcome.",
        name: "Alex M.",
        role: "Frontend Engineer, 4 YOE",
        detail: "SkillScore: 758 | Skipped 3 rounds",
      },
      stats: [
        { value: "67%", label: "Skip to finals" },
        { value: "3.1", label: "Fewer interview rounds" },
        { value: "2 weeks", label: "Faster to offer" },
        { value: "89%", label: "Candidate satisfaction" },
      ],
    },
    cta: {
      headline: "Life's Too Short for",
      gradientText: "Round 4 of 6.",
      description:
        "Build your profile. Skip the validation theater. Get to the interview that actually matters.",
      primaryCta: { text: "Start Skipping", href: "/signup" },
      secondaryCta: { text: "See Which Companies Fast-Track", href: "/demo" },
    },
  },

  // 11. transcript-decoded-ai — MOFU — AI transcript analysis showcase
  {
    slug: "transcript-decoded-ai",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Your Transcript, Decoded by AI — Course Rigor Scoring | SkillPass",
      description:
        "SkillPass AI reads your transcript like an expert admissions officer. Course difficulty, grade distributions, program rigor — all analyzed to produce a calibrated Academic score. Free.",
    },
    hero: {
      badge: "Transcript Intelligence",
      headline: "Your Transcript Is Full of Signal.",
      gradientText: "Nobody Reads It.",
      subheadline:
        "That transcript sitting in a drawer has more information about your abilities than your resume. But no recruiter has time to decode it. SkillPass AI does — analyzing course difficulty, institutional rigor, and program-specific grade distributions to produce an Academic score that reflects what you actually studied.",
      primaryCta: { text: "Decode Your Transcript", href: "/signup" },
      secondaryCta: { text: "See AI Analysis in Action", href: "/demo" },
      trustLine: "Course-level analysis across 4,000+ institutions.",
    },
    problem: {
      badge: "Lost in Translation",
      headline: "Your Hardest Classes",
      gradientText: "Are Invisible to Employers",
      description:
        "You took Quantum Mechanics, Advanced Algorithms, Organic Chemistry. All the employer sees is a GPA. The story of what you survived — what you chose to struggle through — gets reduced to a single number.",
      stats: [
        {
          value: "0",
          label: "Employers who read transcripts in detail",
          description:
            "Realistically, nobody. Some request them. Almost none analyze them beyond checking the GPA and degree date.",
        },
        {
          value: "30+",
          label: "Courses on a typical transcript",
          description:
            "Each with different difficulty levels, grading curves, and skill implications. All compressed into one GPA that erases the context.",
        },
        {
          value: "2.1x",
          label: "Difficulty variance within the same major",
          description:
            "Even within one department, the hardest electives are over twice as difficult as the easiest. Your choices matter. Nobody sees them.",
        },
      ],
    },
    solution: {
      badge: "Transcript Intelligence",
      headline: "AI That Reads Transcripts",
      gradientText: "Like an Expert.",
      description:
        "SkillPass Transcript Intelligence doesn't just check your GPA. It reads every course, weights its difficulty, and produces a calibrated Academic score that captures your actual academic rigor.",
      features: [
        {
          title: "Course-Level Difficulty Scoring",
          description:
            "Each course gets a rigor rating based on department data, historical grade distributions, and prerequisite chains. Advanced Thermodynamics > Intro to Business.",
        },
        {
          title: "Institutional Calibration",
          description:
            "Your school's grading standards compared against the national dataset. Tough graders get credit. Inflated schools get adjusted.",
        },
        {
          title: "Major-Specific Weighting",
          description:
            "A B+ in Differential Equations means more than an A in a survey course. SkillPass weights core technical courses higher.",
        },
        {
          title: "Visual Breakdown",
          description:
            "Your profile shows a visual map of academic rigor — which courses contributed most to your score, and how your program compares to others.",
        },
      ],
    },
    proof: {
      headline: "The Transcript Nobody Read — Until AI Did",
      testimonial: {
        quote:
          "I took the hardest course load my university offered. All it got me was a 3.3 GPA that looked average on paper. SkillPass analyzed my transcript and my calibrated Academic score landed in the 87th percentile. First time anyone actually saw what those classes meant.",
        name: "Kevin D.",
        role: "Physics & CS Double Major",
        detail: "Raw GPA: 3.3 | Calibrated Academic: 87th percentile",
      },
      stats: [
        { value: "4,000+", label: "Institutions analyzed" },
        { value: "87th %ile", label: "Avg calibrated score for hard programs" },
        { value: "30+", label: "Courses analyzed per transcript" },
        { value: "< 2 min", label: "Analysis time" },
      ],
    },
    cta: {
      headline: "Your Transcript Has a Story.",
      gradientText: "Let AI Tell It.",
      description:
        "Upload your transcript. In under 2 minutes, SkillPass Transcript Intelligence will produce a calibrated Academic score that reflects the courses you actually took.",
      primaryCta: { text: "Upload Your Transcript", href: "/signup" },
      secondaryCta: { text: "See a Sample Analysis", href: "/demo" },
    },
  },

  // 12. 3-4-mit-vs-4-0-elsewhere — TOFU — provocative, shareable, SEO-optimized
  {
    slug: "3-4-mit-vs-4-0-elsewhere",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "A 3.4 at MIT vs. a 4.0 Elsewhere — Which Is Better? | SkillPass",
      description:
        "A 3.4 at MIT might represent more knowledge than a 4.0 at an easier school. SkillPass calibrates GPAs across 4,000+ institutions so employers see the real picture. Free.",
    },
    hero: {
      badge: "The GPA Debate",
      headline: "A 3.4 at MIT.",
      gradientText: "A 4.0 Somewhere Else.",
      subheadline:
        "Who's smarter? Wrong question. Who worked harder? Also wrong. The right question: who has more verified ability? That's what SkillPass answers. By calibrating GPAs across 4,000+ institutions, course rigor, and program difficulty — and adding assessments, references, and performance data on top.",
      primaryCta: { text: "Find Out Your Real Score", href: "/signup" },
      secondaryCta: { text: "How Calibration Works", href: "/how-it-works" },
      trustLine: "Not about school prestige. About academic rigor.",
    },
    problem: {
      badge: "The GPA Illusion",
      headline: "GPAs Are Not",
      gradientText: "Comparable. Period.",
      description:
        "Everyone pretends GPAs are on the same scale. They're not. Different schools, different grading curves, different cultures, different standards. Comparing them directly is like comparing temperatures in Fahrenheit and Celsius without converting.",
      stats: [
        {
          value: "3.15",
          label: "Average MIT undergrad GPA",
          description:
            "The average MIT GPA is well below the national average of 3.42. Not because MIT students are worse. Because MIT grades honestly.",
        },
        {
          value: "3.65",
          label: "Average GPA at highly inflated institutions",
          description:
            "Some schools hand out grades like candy. Their 4.0 students might struggle at tougher programs. Nobody can tell from the number.",
        },
        {
          value: "89%",
          label: "Employers who compare GPAs across schools",
          description:
            "Nearly 9 in 10 employers compare raw GPAs as if they're equivalent. They're not. And it costs you opportunities.",
        },
      ],
    },
    solution: {
      badge: "Calibrated Comparison",
      headline: "Same Scale.",
      gradientText: "Finally.",
      description:
        "SkillPass converts raw GPAs into calibrated Academic scores that account for where you went, what you studied, and how hard your program actually was.",
      features: [
        {
          title: "Institution-Level Grading Data",
          description:
            "We have historical grade distributions for 4,000+ schools. We know which ones grade hard and which ones don't.",
        },
        {
          title: "Program-Specific Adjustment",
          description:
            "CS at School A might be a bloodbath. CS at School B might be a breeze. SkillPass adjusts at the program level, not just the school level.",
        },
        {
          title: "Course Difficulty Weighting",
          description:
            "That advanced algorithms course that tanked your GPA? It actually helps your calibrated score. Harder courses count more.",
        },
        {
          title: "Transparent Percentile Ranking",
          description:
            "See where you land nationally. Not your raw GPA percentile — your calibrated one. The real number.",
        },
      ],
    },
    proof: {
      headline: "When the Numbers Tell the Truth",
      testimonial: {
        quote:
          "I had a 3.38 from MIT EECS. I kept losing out to candidates from less rigorous programs who had 3.9s. After SkillPass calibrated my transcript, my Academic score was 91st percentile. The recruiter at my current company told me that was the tipping point.",
        name: "Yuki S.",
        role: "ML Engineer",
        detail: "Raw GPA: 3.38 (MIT) | Calibrated: 91st percentile",
      },
      stats: [
        { value: "91st %ile", label: "Calibrated from a 3.38" },
        { value: "4,000+", label: "Schools compared" },
        { value: "0.5+ pts", label: "Common GPA adjustment" },
        { value: "Free", label: "For every student" },
      ],
    },
    cta: {
      headline: "Your GPA Doesn't Tell the Whole Story.",
      gradientText: "Your Calibrated Score Does.",
      description:
        "Upload your transcript and see what your GPA actually means when compared fairly. It takes 2 minutes.",
      primaryCta: { text: "See Your Real Score", href: "/signup" },
      secondaryCta: { text: "Explore the Calibration Model", href: "/how-it-works" },
    },
  },

  // 13. one-link-replaces-application — TOFU — simplicity, one URL does it all
  {
    slug: "one-link-replaces-application",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "One Link Replaces Your Entire Application | SkillPass",
      description:
        "Resume, portfolio, references, assessments, verified GPA — all in one URL. skillpass.io/you replaces the 45-minute application process. Free to build.",
    },
    hero: {
      badge: "One Link",
      headline: "Resume. References. Assessments. Portfolio.",
      gradientText: "One URL.",
      subheadline:
        "Your entire professional identity lives at skillpass.io/username. Verified academics, quantified peer reviews, proctored assessment results, and NLP-analyzed performance — accessible in one click. Drop it in an email, a LinkedIn message, or an application. Done.",
      primaryCta: { text: "Claim Your URL", href: "/signup" },
      secondaryCta: { text: "See a Live Profile", href: "/demo" },
      trustLine: "Everything verified. Nothing self-reported.",
    },
    problem: {
      badge: "Application Fatigue",
      headline: "45 Minutes Per Application.",
      gradientText: "Times 30 Companies.",
      description:
        "Every application wants the same things in slightly different formats. Upload here. Paste there. Fill in your work history for the 30th time. It's absurd.",
      stats: [
        {
          value: "45 min",
          label: "Average application completion time",
          description:
            "Resume upload, cover letter, manual work history entry, reference names, assessment scheduling. Per application.",
        },
        {
          value: "22.5 hrs",
          label: "Total application time for 30 companies",
          description:
            "That's three full workdays spent entering the same information into different forms.",
        },
        {
          value: "38%",
          label: "Applications abandoned mid-process",
          description:
            "More than a third of candidates give up halfway through. The application process itself is a filter — and not a good one.",
        },
      ],
    },
    solution: {
      badge: "One Link to Rule Them All",
      headline: "skillpass.io/you",
      gradientText: "Does the Heavy Lifting",
      description:
        "Your SkillPass profile is a single URL that contains everything an employer needs to evaluate you. No forms. No uploads. No 45-minute applications.",
      features: [
        {
          title: "Verified Credentials in One Place",
          description:
            "Calibrated GPA, proctored assessments, 360-degree references, performance analysis. All verified. All accessible via one link.",
        },
        {
          title: "Drop It Anywhere",
          description:
            "LinkedIn bio. Email signature. Application form's 'portfolio' field. Cold outreach messages. Wherever there's a text field, your link fits.",
        },
        {
          title: "Always Up to Date",
          description:
            "Add a new assessment, get a new reference, and your profile updates automatically. Every employer who visits your link sees the latest version.",
        },
        {
          title: "Employer-Ready Layout",
          description:
            "SkillScore up top, sub-score breakdown, assessment details, reference highlights. Designed so recruiters get signal in seconds, depth when they want it.",
        },
      ],
    },
    proof: {
      headline: "One Link. Eight Interviews.",
      testimonial: {
        quote:
          "I got tired of filling out applications. Started just sending my SkillPass link in cold emails to hiring managers. 'Here's everything about my professional abilities: [link].' It felt lazy. But 8 out of 20 replied. That's a 40% response rate on cold outreach. My resume never came close.",
        name: "Brandon F.",
        role: "DevOps Engineer, 5 YOE",
        detail: "SkillScore: 771 | Cold outreach response: 40%",
      },
      stats: [
        { value: "1 URL", label: "Replaces full applications" },
        { value: "40%", label: "Cold outreach response rate" },
        { value: "0 min", label: "Application time" },
        { value: "200+", label: "Employers trust SkillPass" },
      ],
    },
    cta: {
      headline: "One Link.",
      gradientText: "Your Entire Professional Story.",
      description:
        "Claim your skillpass.io/username and stop spending 45 minutes on applications. Your profile says it all.",
      primaryCta: { text: "Claim Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Live Example", href: "/demo" },
    },
  },

  // 14. stop-reproving-yourself — TOFU — frustration, mid-career, been-there-done-that
  {
    slug: "stop-reproving-yourself",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Stop Re-Proving Yourself Every Time You Switch Jobs | SkillPass",
      description:
        "You've been doing this for years. Why do you still have to prove you can code? SkillPass creates permanent, verified proof of your skills that doesn't reset between jobs. Free.",
    },
    hero: {
      badge: "Been There, Proved That",
      headline: "You've Been Doing This for 8 Years.",
      gradientText: "They Still Want a Coding Test.",
      subheadline:
        "You've shipped products. Led teams. Mentored juniors. And the next company wants you to reverse a binary tree on a whiteboard to prove you're qualified. It's insulting. SkillPass gives you permanent, verified proof that travels with you. So you never start from zero again.",
      primaryCta: { text: "Prove It Permanently", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Your career proof shouldn't have an expiration date.",
    },
    problem: {
      badge: "Groundhog Day",
      headline: "Every New Job Application",
      gradientText: "Erases Your Track Record",
      description:
        "You could have 10 years of exceptional performance reviews, five promotions, and a trail of successful projects. The next company still treats you like an unknown quantity.",
      stats: [
        {
          value: "100%",
          label: "Reset rate between jobs",
          description:
            "Nothing transfers. Not your performance reviews. Not your peer feedback. Not the assessment you aced last time. Every move starts from scratch.",
        },
        {
          value: "78%",
          label: "Mid-career professionals frustrated by redundancy",
          description:
            "Nearly 4 in 5 experienced professionals say re-proving basic competence is the most demeaning part of job switching.",
        },
        {
          value: "25+ hrs",
          label: "Time spent re-verifying per job change",
          description:
            "Coding tests, reference re-collection, credential re-verification. All for things you proved three jobs ago.",
        },
      ],
    },
    solution: {
      badge: "Proof That Persists",
      headline: "Build Your Record Once.",
      gradientText: "It Follows You Forever.",
      description:
        "SkillPass creates a cumulative, verified record. Assessments carry forward. References accumulate. Performance data compounds. You never go back to zero.",
      features: [
        {
          title: "Cumulative SkillScore",
          description:
            "Every assessment, reference, and data point you add strengthens your profile. It's a career record, not a one-time snapshot.",
        },
        {
          title: "Portable Verification",
          description:
            "Verified once, accepted everywhere. Companies using SkillPass don't re-test you. They trust the data that's already there.",
        },
        {
          title: "Performance History",
          description:
            "Connect your reviews and SkillPass's NLP extracts real signal. Your track record becomes quantified and visible, not locked in a former employer's HR system.",
        },
        {
          title: "References That Compound",
          description:
            "Each job adds new references. By mid-career, you'll have 10-15 verified peer reviews. That's a reputation score no single interview can match.",
        },
      ],
    },
    proof: {
      headline: "Never Starting From Zero Again",
      testimonial: {
        quote:
          "I'm a senior engineer with 11 years of experience. My last job switch, I spent 3 weeks doing coding challenges and reference coordination. This time, I sent my SkillPass link. Two companies waived their technical screen. One said, 'Your Assessed Ability and Peer Signal scores tell us what we need to know.' That's how it should work.",
        name: "Rachel K.",
        role: "Senior Software Engineer, 11 YOE",
        detail: "SkillScore: 802 | 13 verified references",
      },
      stats: [
        { value: "802", label: "SkillScore after 11 years" },
        { value: "13", label: "Accumulated references" },
        { value: "0 hrs", label: "Re-verification time" },
        { value: "2", label: "Companies that waived screens" },
      ],
    },
    cta: {
      headline: "You've Already Proved Yourself.",
      gradientText: "Make It Count Permanently.",
      description:
        "Build your SkillPass profile once. It grows with your career. You never re-prove the basics again.",
      primaryCta: { text: "Build Your Permanent Record", href: "/signup" },
      secondaryCta: { text: "See a Senior Profile", href: "/demo" },
    },
  },

  // 15. own-your-professional-data — MOFU — data ownership, control-focused
  {
    slug: "own-your-professional-data",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Own Your Professional Data — Not Trapped in an ATS | SkillPass",
      description:
        "Your skills data is locked in employer systems you can't access. SkillPass gives you a portable, verified profile you control. Export anytime. Free forever.",
    },
    hero: {
      badge: "Your Data, Your Career",
      headline: "Your Career Data Is Locked in",
      gradientText: "Systems You Don't Control.",
      subheadline:
        "Your performance reviews sit in Workday. Your assessment scores are in HackerRank. Your references are scattered across emails. None of it is yours. SkillPass puts all your verified professional data in one place — under your control, exportable anytime, owned by you.",
      primaryCta: { text: "Own Your Data", href: "/signup" },
      secondaryCta: { text: "See How Ownership Works", href: "/how-it-works" },
      trustLine: "Your data. Your profile. Your terms.",
    },
    problem: {
      badge: "Data Hostage",
      headline: "You Generated the Data.",
      gradientText: "Someone Else Owns It.",
      description:
        "Every employer you've worked for has data about your performance, skills, and reputation. When you leave, you leave all of it behind. It's like earning frequent flier miles that expire the second you switch airlines.",
      stats: [
        {
          value: "0%",
          label: "Professional data you can take with you",
          description:
            "Performance reviews, internal ratings, project evaluations, peer feedback — all locked in your former employer's HRIS. You can't export any of it.",
        },
        {
          value: "5+",
          label: "Disconnected systems holding your data",
          description:
            "Workday, Greenhouse, HackerRank, LinkedIn, your university's registrar. Your professional story is fragmented across platforms you can't access.",
        },
        {
          value: "0",
          label: "Portability between ATS platforms",
          description:
            "Applied to 50 companies? Your data exists in 50 separate databases. None of them talk to each other. None of them belong to you.",
        },
      ],
    },
    solution: {
      badge: "Take Control",
      headline: "One Profile.",
      gradientText: "You Own It.",
      description:
        "SkillPass consolidates your verified professional data into a single profile you control. Add data, manage access, export anytime. It's your career. Own it.",
      features: [
        {
          title: "Centralized Verified Data",
          description:
            "Academics, references, assessments, performance — all in one place. No more scattered fragments across 10 different platforms.",
        },
        {
          title: "Granular Access Control",
          description:
            "Decide who sees what. Share your full profile, sub-scores only, or specific sections. Revoke access anytime.",
        },
        {
          title: "Full Data Export",
          description:
            "Download your complete profile data anytime. JSON, PDF, whatever format you need. Your data is never held hostage.",
        },
        {
          title: "Lifetime Portability",
          description:
            "SkillPass profiles are designed to last your entire career. 20 years from now, your verified data is still yours.",
        },
      ],
    },
    proof: {
      headline: "Taking Ownership of a Career",
      testimonial: {
        quote:
          "When I left my last job, I asked HR for my performance reviews. They said no — 'company property.' I'd generated that data over 4 years. SkillPass changed that. Now my reviews are NLP-analyzed, my references are mine, and I control who sees what. It's my career data. Finally.",
        name: "Maria T.",
        role: "Product Designer, 7 YOE",
        detail: "SkillScore: 729 | Full data ownership since 2026",
      },
      stats: [
        { value: "100%", label: "Your data, exportable" },
        { value: "1", label: "Central profile" },
        { value: "You", label: "Control access" },
        { value: "$0", label: "Lifetime cost" },
      ],
    },
    cta: {
      headline: "It's Your Career.",
      gradientText: "Own the Data.",
      description:
        "Build your SkillPass profile and take control of your professional data. Free forever. Exportable always.",
      primaryCta: { text: "Take Ownership", href: "/signup" },
      secondaryCta: { text: "See Data Controls", href: "/how-it-works" },
    },
  },

  // 16. ai-cant-fake-skillpass — TOFU — urgent, timely, anti-AI-fraud
  {
    slug: "ai-cant-fake-skillpass",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "AI Can Write Your Resume. It Can't Fake a SkillScore. | SkillPass",
      description:
        "Resumes, cover letters, even code samples — AI can generate them all. A SkillScore requires verified transcripts, proctored assessments, and real peer reviews. It can't be faked.",
    },
    hero: {
      badge: "Post-AI Hiring",
      headline: "AI Can Write Your Resume.",
      gradientText: "It Can't Fake Your SkillScore.",
      subheadline:
        "ChatGPT writes cover letters in 10 seconds. AI generates entire portfolios. Hiring managers know this. They don't trust documents anymore. A SkillScore is different — it's built from proctored tests, verified transcripts, and real references from real humans. Good luck generating that.",
      primaryCta: { text: "Get Proof That's Real", href: "/signup" },
      secondaryCta: { text: "How Verification Works", href: "/how-it-works" },
      trustLine: "Proctored. Verified. Unfakeable.",
    },
    problem: {
      badge: "The Trust Crisis",
      headline: "AI Broke Hiring.",
      gradientText: "Now Nobody Trusts Anything.",
      description:
        "When anyone can produce a flawless resume in seconds, resumes become worthless. When code samples might be AI-generated, portfolios lose credibility. Hiring is in a trust crisis. And if you're actually talented, you're paying the price for everyone else's shortcuts.",
      stats: [
        {
          value: "53%",
          label: "Recruiters who suspect AI-generated applications",
          description:
            "More than half of hiring managers now assume some applications are AI-written. Including yours — even if it isn't.",
        },
        {
          value: "72%",
          label: "Increase in application volume since AI tools",
          description:
            "AI made it trivially easy to apply. Application volumes surged 72%. Signal-to-noise ratio cratered.",
        },
        {
          value: "10 sec",
          label: "Time for ChatGPT to write a cover letter",
          description:
            "A task that used to take 30 minutes now takes seconds. That means your genuine, carefully written application looks identical to a generated one.",
        },
      ],
    },
    solution: {
      badge: "Trust Infrastructure",
      headline: "Verification That",
      gradientText: "AI Can't Replicate",
      description:
        "Every component of your SkillScore is designed to resist AI fabrication. Not through clever detection — through structural verification that requires real humans and real credentials.",
      features: [
        {
          title: "Proctored Assessments",
          description:
            "Browser-locked, webcam-monitored, identity-verified. You take the test. Not a chatbot. Not a friend. You.",
        },
        {
          title: "Institutional Transcript Verification",
          description:
            "Your Academic score comes from verified transcripts connected directly to university registrars. AI can't fabricate a registrar connection.",
        },
        {
          title: "Real References, Real People",
          description:
            "Peer Signal comes from verified professionals who complete structured surveys. SkillPass confirms their identity and employment. No sockpuppets.",
        },
        {
          title: "NLP on Authenticated Reviews",
          description:
            "Performance data comes from real reviews in real HR systems. The NLP analyzes content, not style. AI-written praise gets caught because the signal patterns don't match real evaluations.",
        },
      ],
    },
    proof: {
      headline: "When Real Proof Cuts Through the Noise",
      testimonial: {
        quote:
          "A recruiter told me she gets 500 applications per role now, up from 200 last year. 'Half of them are obviously AI-generated,' she said. 'When I see a SkillPass score, I know the person is real and the skills are verified.' My 748 SkillScore did more for my credibility than anything I could've written.",
        name: "James H.",
        role: "Backend Engineer, 3 YOE",
        detail: "SkillScore: 748 | Verified in all 4 dimensions",
      },
      stats: [
        { value: "0%", label: "Fake-able SkillScore components" },
        { value: "4", label: "Independent verification layers" },
        { value: "748", label: "Avg verified engineer score" },
        { value: "3.4x", label: "More trust from recruiters" },
      ],
    },
    cta: {
      headline: "In a World Full of AI Fakes,",
      gradientText: "Be Verified.",
      description:
        "Build a SkillPass profile that proves you're real, your skills are real, and your track record is real. Free. 10 minutes.",
      primaryCta: { text: "Get Verified Now", href: "/signup" },
      secondaryCta: { text: "See Verification Methods", href: "/how-it-works" },
    },
  },

  // 17. reviews-quantified — MOFU — performance review NLP feature showcase
  {
    slug: "reviews-quantified",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Your Performance Reviews, Quantified by AI | SkillPass",
      description:
        "Those glowing reviews locked in your employer's system? SkillPass NLP extracts real signal from performance review text — turning words into a verified Performance sub-score. Free.",
    },
    hero: {
      badge: "Performance Signal",
      headline: "Your Boss Said You're Great.",
      gradientText: "Now Prove It With Data.",
      subheadline:
        "Performance reviews are full of useful signal buried under corporate language. SkillPass NLP reads through the fluff — 'meets expectations,' 'strong contributor,' 'growth mindset' — and extracts what your manager actually meant. The result is your Performance sub-score: a quantified, portable measure of how you've performed on the job.",
      primaryCta: { text: "Quantify Your Reviews", href: "/signup" },
      secondaryCta: { text: "See NLP Analysis", href: "/demo" },
      trustLine: "NLP-analyzed. Quantified. Portable.",
    },
    problem: {
      badge: "Locked-Up Praise",
      headline: "Great Reviews.",
      gradientText: "Trapped in a System You Can't Access.",
      description:
        "You worked hard. Your manager wrote a thoughtful review. Then it went into Workday and you never saw it again. When you leave the company, those reviews stay behind. All that evidence of your performance — gone.",
      stats: [
        {
          value: "0%",
          label: "Reviews you can take to your next job",
          description:
            "Performance reviews are classified as company property. You can't export them, forward them, or reference them in applications.",
        },
        {
          value: "92%",
          label: "Reviews that are purely qualitative",
          description:
            "Almost all reviews are just words — no standardized metrics, no scores, nothing an employer can compare across candidates.",
        },
        {
          value: "3.2 yrs",
          label: "Average review data lost per job change",
          description:
            "Every time you switch jobs, you lose years of documented performance data. Your next employer has no idea how you performed.",
        },
      ],
    },
    solution: {
      badge: "NLP Performance Analysis",
      headline: "Words In.",
      gradientText: "Signal Out.",
      description:
        "SkillPass NLP processes your performance review text and extracts structured signal. Sentiment, specificity, competency mentions, growth trajectory — all quantified into your Performance sub-score.",
      features: [
        {
          title: "Sentiment Analysis",
          description:
            "Beyond positive/negative. SkillPass detects enthusiasm level, specificity of praise, and whether feedback is genuine or template language.",
        },
        {
          title: "Competency Extraction",
          description:
            "NLP identifies specific skills and competencies mentioned — 'excellent SQL skills,' 'strong project leadership,' 'improved throughput by 40%.' These map to your profile.",
        },
        {
          title: "Growth Trajectory",
          description:
            "Multiple reviews over time reveal whether you're improving, plateauing, or accelerating. Employers see your trajectory, not just your current state.",
        },
        {
          title: "Portable Performance Score",
          description:
            "Your Performance sub-score is yours forever. Take it to your next job, your next career, wherever you go. No employer can take it away.",
        },
      ],
    },
    proof: {
      headline: "From Corporate-Speak to Real Signal",
      testimonial: {
        quote:
          "I had 6 years of strong performance reviews. Couldn't use any of them in job applications. Connected them to SkillPass and the NLP engine pulled out 23 specific competency mentions and rated my growth trajectory as 'accelerating.' My Performance sub-score was 88th percentile. First time that data ever worked for me outside the company.",
        name: "Laura C.",
        role: "Operations Manager, 6 YOE",
        detail: "Performance sub-score: 88th percentile | 6 years of reviews analyzed",
      },
      stats: [
        { value: "88th %ile", label: "Avg Performance score" },
        { value: "23", label: "Competencies extracted" },
        { value: "6 yrs", label: "Review data unlocked" },
        { value: "$0", label: "Cost to analyze" },
      ],
    },
    cta: {
      headline: "Your Reviews Have Been Saying Great Things.",
      gradientText: "Make Them Count.",
      description:
        "Connect your performance reviews. SkillPass NLP turns corporate language into a verified Performance sub-score you can use everywhere.",
      primaryCta: { text: "Connect Your Reviews", href: "/signup" },
      secondaryCta: { text: "See a Sample Analysis", href: "/demo" },
    },
  },

  // 18. 15-hours-to-3-finals — MOFU — concrete before/after, testimonial-driven
  {
    slug: "15-hours-to-3-finals",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "From 15 Hours of Screening to 3 Final Rounds in One Week | SkillPass",
      description:
        "Before SkillPass: 15 hours of coding tests, phone screens, and take-homes. After: 3 final-round interviews in week one. Real results from verified candidates. Free.",
    },
    hero: {
      badge: "Before & After",
      headline: "Before: 15 Hours of Screening.",
      gradientText: "After: 3 Finals in a Week.",
      subheadline:
        "This isn't hypothetical. Real candidates are cutting their interview grind from dozens of hours to a handful of meaningful conversations. When your skills are pre-verified, companies skip the slow parts. Here's what that actually looks like.",
      primaryCta: { text: "See It For Yourself", href: "/signup" },
      secondaryCta: { text: "Read More Stories", href: "/demo" },
      trustLine: "Average SkillPass user: 60% less time interviewing.",
    },
    problem: {
      badge: "The Grind",
      headline: "Applying for Jobs Is",
      gradientText: "a Full-Time Job",
      description:
        "Phone screens. Take-home projects. Coding challenges. Panel interviews. Behavioral rounds. Then a reference check that takes two weeks. And that's for a single company.",
      stats: [
        {
          value: "15+ hrs",
          label: "Interview time per active job search",
          description:
            "Between prep, actual interviews, and take-home projects, candidates spend 15+ hours per job search on screening alone.",
        },
        {
          value: "4.8",
          label: "Interview rounds before reaching finals",
          description:
            "Nearly five rounds of screening before you get to the interview that actually matters. That's 5 opportunities to get cut for arbitrary reasons.",
        },
        {
          value: "23%",
          label: "Candidates who make it to final rounds",
          description:
            "Fewer than 1 in 4 candidates survive the gauntlet to reach final interviews. Most are eliminated by process, not by lack of talent.",
        },
      ],
    },
    solution: {
      badge: "The Shortcut That's Not a Shortcut",
      headline: "Skip the Screening.",
      gradientText: "Keep the Rigor.",
      description:
        "SkillPass doesn't lower the bar. It front-loads the verification. Your skills are thoroughly assessed — just once, not five times.",
      features: [
        {
          title: "Pre-Verified Technical Skills",
          description:
            "Your Assessed Ability score replaces coding challenges and take-homes at companies that accept SkillPass. Same rigor, zero redundancy.",
        },
        {
          title: "References Already Complete",
          description:
            "Your Peer Signal score means no waiting for reference checks. Companies see quantified peer feedback from day one.",
        },
        {
          title: "Faster Decision Cycles",
          description:
            "When hiring teams have verified data upfront, they make faster decisions. Less back-and-forth, fewer committee meetings, quicker offers.",
        },
        {
          title: "More Finals, Less Fatigue",
          description:
            "Spend your energy on final-round conversations where you discuss the actual work. Not on phone screens where someone reads your resume back to you.",
        },
      ],
    },
    proof: {
      headline: "15 Hours to 3 Finals: A Real Story",
      testimonial: {
        quote:
          "Last year I spent 15 hours on coding tests and phone screens. Got to one final round. This time I built my SkillPass profile — took 10 minutes — and applied to 10 companies. Three invited me straight to finals in the first week. I spent those 15 hours actually preparing for real interviews instead of jumping through hoops.",
        name: "Derek W.",
        role: "Senior Product Manager",
        detail: "SkillScore: 763 | 3 final rounds in week 1",
      },
      stats: [
        { value: "15 → 0 hrs", label: "Screening time eliminated" },
        { value: "3", label: "Final rounds in week one" },
        { value: "10 min", label: "SkillPass setup time" },
        { value: "60%", label: "Less total interview time" },
      ],
    },
    cta: {
      headline: "Spend Your Time on Interviews That Matter.",
      gradientText: "Not on Screening Theater.",
      description:
        "Build your profile in 10 minutes. Get to final rounds faster. It's that simple.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See More Before/Afters", href: "/demo" },
    },
  },

  // 19. share-once-apply-everywhere — TOFU — simplest portability message
  {
    slug: "share-once-apply-everywhere",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Share Once, Apply Everywhere — Portable Skill Verification | SkillPass",
      description:
        "One verified profile. Every application. SkillPass lets you share your SkillScore, references, and assessments with every employer from a single link. Free.",
    },
    hero: {
      badge: "Share Once",
      headline: "Share Once.",
      gradientText: "Apply Everywhere.",
      subheadline:
        "Build one verified profile. Send one link. Apply to 100 companies without filling out 100 applications. Your SkillScore, references, assessments, and academic record — all portable, all verified, all in one place.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "How Sharing Works", href: "/how-it-works" },
      trustLine: "One profile. Every company. Zero redundancy.",
    },
    problem: {
      badge: "The Repetition Tax",
      headline: "Same Skills. Same References.",
      gradientText: "Different Portal. Again.",
      description:
        "Every company has their own application. Their own format. Their own assessment. Their own reference check. You do the same work over and over because no system talks to any other system.",
      stats: [
        {
          value: "30+",
          label: "Applications in a typical job search",
          description:
            "Most active job seekers apply to 30-50 companies. Each one requiring you to re-enter, re-upload, and re-prove the same things.",
        },
        {
          value: "0",
          label: "Applications that share data with each other",
          description:
            "Zero. Every application is an island. What you proved at Company A doesn't exist at Company B.",
        },
        {
          value: "45 min",
          label: "Average time per unique application",
          description:
            "That's 22+ hours of entering the same information in slightly different text fields. You could learn a new skill in that time.",
        },
      ],
    },
    solution: {
      badge: "One to Many",
      headline: "One Profile.",
      gradientText: "Infinite Applications.",
      description:
        "SkillPass is the one thing you build that works everywhere. Every employer who accepts SkillPass — and the list is growing — gets your full verified profile from a single URL.",
      features: [
        {
          title: "Universal Profile Format",
          description:
            "Your SkillScore, sub-scores, assessment results, and reference data in a format every employer can read and trust.",
        },
        {
          title: "One-Click Sharing",
          description:
            "Send your profile link in any application, email, or message. That's it. No attachments, no custom formats, no 'please upload your resume in PDF format.'",
        },
        {
          title: "Automatic Updates",
          description:
            "Improve your SkillScore? Every employer with your link sees the update. No re-sending. No version confusion.",
        },
        {
          title: "Privacy You Control",
          description:
            "Share your full profile or specific sub-scores. Different companies can see different things. You decide.",
        },
      ],
    },
    proof: {
      headline: "One Profile, 47 Applications, 11 Interviews",
      testimonial: {
        quote:
          "I applied to 47 companies in two weeks. Didn't fill out a single traditional application. Just sent my SkillPass link with a short note. 11 responded with interview requests. That's a 23% hit rate — way higher than my resume ever got me. And I spent 10 minutes on the entire process.",
        name: "Tanya R.",
        role: "UX Researcher, 3 YOE",
        detail: "SkillScore: 731 | 47 apps, 11 interviews",
      },
      stats: [
        { value: "1", label: "Profile to build" },
        { value: "47", label: "Applications sent" },
        { value: "10 min", label: "Total setup time" },
        { value: "23%", label: "Response rate" },
      ],
    },
    cta: {
      headline: "Build It Once.",
      gradientText: "Use It Everywhere.",
      description:
        "Your SkillPass profile is the last application you'll ever need to build. One link. Every company. Free.",
      primaryCta: { text: "Create Your Profile", href: "/signup" },
      secondaryCta: { text: "See It In Action", href: "/demo" },
    },
  },

  // 20. career-on-your-terms — TOFU — aspirational, empowering without AI words
  {
    slug: "career-on-your-terms",
    category: "talent-use-cases",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "Run Your Career on Your Terms — Verified Skills That Travel | SkillPass",
      description:
        "Stop being at the mercy of hiring processes. SkillPass gives you a verified, portable SkillScore that puts you in control. Employers come to you. Free for talent.",
    },
    hero: {
      badge: "On Your Terms",
      headline: "Tired of Being at the Mercy",
      gradientText: "of Hiring Processes?",
      subheadline:
        "You're not a supplicant. You're a professional with real, demonstrable skills. But the hiring process treats you like you need to beg for attention, jump through hoops, and wait by the phone. SkillPass flips that. Build your verified profile once and let employers come to you.",
      primaryCta: { text: "Take Control", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Your career. Your terms. Your data.",
    },
    problem: {
      badge: "The Power Imbalance",
      headline: "You Apply. You Wait.",
      gradientText: "You Hope.",
      description:
        "The entire job search is structured to make you feel powerless. You submit into a void. You prep for interviews at their convenience. You wait days for a response. You have zero visibility into where you stand.",
      stats: [
        {
          value: "75%",
          label: "Applications that receive no response",
          description:
            "Three out of four applications disappear into silence. Not rejection — nothing. You never find out what happened.",
        },
        {
          value: "28 days",
          label: "Average wait between applying and hearing back",
          description:
            "Almost a month of uncertainty. Checking your email compulsively. Wondering if the link worked.",
        },
        {
          value: "91%",
          label: "Candidates who feel powerless in job search",
          description:
            "The overwhelming majority of job seekers say the process makes them feel like they have no control. Because they don't.",
        },
      ],
    },
    solution: {
      badge: "Flip the Script",
      headline: "Stop Chasing.",
      gradientText: "Start Getting Found.",
      description:
        "When your skills are verified and your profile is searchable, the dynamic shifts. Employers don't wait for you to apply — they search for you. You evaluate them.",
      features: [
        {
          title: "Searchable by Employers",
          description:
            "Companies search SkillPass by SkillScore, sub-scores, skills, and location. If you meet their criteria, they find you. Not the other way around.",
        },
        {
          title: "Inbound Opportunities",
          description:
            "SkillPass users with strong profiles report receiving 2-4x more inbound recruiter contacts. Your profile does the job hunting for you while you sleep.",
        },
        {
          title: "Transparent Market Signal",
          description:
            "Your SkillScore tells you where you stand relative to the market. No more guessing. No more imposter syndrome. Just data.",
        },
        {
          title: "Negotiate From Strength",
          description:
            "When you know your verified score is in the 85th percentile, you negotiate differently. Your data is your confidence.",
        },
      ],
    },
    proof: {
      headline: "When the Dynamic Flips",
      testimonial: {
        quote:
          "I was sending out 10 applications a week for 3 months. Crickets. Built my SkillPass profile on a Saturday. By Wednesday, two recruiters had reached out through the platform. I didn't apply to them. They found me. I picked the one I liked better. That's how a job search should feel.",
        name: "Chris N.",
        role: "Full-Stack Developer, 5 YOE",
        detail: "SkillScore: 756 | 2 inbound offers in first week",
      },
      stats: [
        { value: "2-4x", label: "More inbound contacts" },
        { value: "756", label: "Avg SkillScore for inbound" },
        { value: "5 days", label: "To first recruiter contact" },
        { value: "$0", label: "Cost for talent" },
      ],
    },
    cta: {
      headline: "Your Career Shouldn't Depend on",
      gradientText: "Who Reads Your Email.",
      description:
        "Build a verified profile. Get found by employers. Run your career on your terms.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See Who's Searching", href: "/demo" },
    },
  },
];

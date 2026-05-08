import type { LandingPage } from "./types";

export const studentPages: LandingPage[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // CATEGORY A — BY STUDENT TYPE (17 pages)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Ivy League Students
  {
    slug: "ivy-league-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Ivy League Students | Prove It's Not Just the Name",
      description:
        "Your school name opens doors. Your SkillScore keeps them open. Show employers calibrated proof of what you actually know — not just where you learned it.",
    },
    hero: {
      badge: "For Ivy League Students",
      headline: "Your school name opens doors.",
      gradientText: "Your SkillScore keeps them open.",
      subheadline:
        "Every recruiter knows your school. None of them know what you personally can do. A 780 SkillScore makes that unmistakable.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See a Sample Score", href: "/demo" },
      trustLine: "Used by students at all 8 Ivy League schools",
    },
    problem: {
      badge: "The Prestige Trap",
      headline: "The name gets you interviews.",
      gradientText: "It won't get you hired.",
      description:
        "You're competing against thousands of other Ivy grads for the same Goldman, McKinsey, and Google roles. When everyone has the same school name, nobody stands out. The hiring committee doesn't care where you went. They care what you can do right now.",
      stats: [
        {
          value: "34%",
          label: "Ivy grads pass first-round tech screens",
          description:
            "School prestige doesn't predict performance on coding interviews, case studies, or modeling tests. Period.",
        },
        {
          value: "6.2",
          label: "Average interviews per offer",
          description:
            "Even with a brand-name degree, you're still grinding through half a dozen interviews to prove yourself.",
        },
        {
          value: "73%",
          label: "Recruiters say school name matters less after 2 years",
          description:
            "The halo effect fades fast. What lasts is verified, demonstrable ability.",
        },
      ],
    },
    solution: {
      badge: "Stand Out From Your Peers",
      headline: "Same school. Different proof.",
      gradientText: "Verified ability.",
      description:
        "SkillPass takes your coursework, references, assessments, and reviews — calibrates them against 4,000+ institutions — and produces a single score employers immediately understand. Think credit score, but for your professional ability.",
      features: [
        {
          title: "Course Rigor Scoring",
          description:
            "Your A in Harvard's Math 55 gets calibrated differently than an A in introductory algebra. The system knows the difference.",
        },
        {
          title: "360-Degree References",
          description:
            "Eight dimensions — from technical ability to coachability — scored by professors, TAs, and teammates who actually worked with you.",
        },
        {
          title: "Proctored Assessments",
          description:
            "Coding, system design, case analysis, data modeling. Take them once, share with every employer.",
        },
        {
          title: "One Link, Every Application",
          description:
            "skillpass.io/yourname — a verified profile that replaces the resume stack for any recruiter who finds you.",
        },
      ],
    },
    proof: {
      headline: "What Ivy students are saying",
      testimonial: {
        quote:
          "I thought my Columbia degree would carry me. It got me first rounds, but I kept stalling at final interviews. My SkillScore let me show actual depth — algorithms, system design, peer reviews. Got my offer at Stripe within two weeks of sharing my profile.",
        name: "Daniel R.",
        role: "Columbia '25, CS",
        detail: "SkillScore: 764",
      },
      stats: [
        { value: "60%", label: "Faster time-to-hire" },
        { value: "3x", label: "Interview-to-offer rate" },
      ],
    },
    cta: {
      headline: "The name got you in.",
      gradientText: "Now prove you belong.",
      description:
        "Build your SkillPass profile in under 30 minutes. Free forever for students.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "How Scoring Works", href: "/how-it-works" },
    },
  },

  // 2. State University Students
  {
    slug: "state-university-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for State University Students | Show What School Name Can't",
      description:
        "Your calibrated GPA shows what your school name can't. SkillPass levels the playing field with verified, institution-weighted scoring.",
    },
    hero: {
      badge: "For State University Students",
      headline: "You did the work.",
      gradientText: "Let the score show it.",
      subheadline:
        "A 3.8 at Ohio State isn't a 3.8 at a diploma mill, and recruiters should know that. SkillPass calibrates your grades across 4,000+ institutions so your GPA tells the full story.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Calibrated Scoring", href: "/how-it-works" },
      trustLine: "Students from 200+ state universities and counting",
    },
    problem: {
      badge: "The Name Filter",
      headline: "Recruiters see your school name",
      gradientText: "before they see you.",
      description:
        "Resume screening software and human recruiters both do the same thing: they look at school name first. If it's not a top-20, your resume moves slower. That's not fair, and it's not accurate — but it's how hiring works today.",
      stats: [
        {
          value: "4x",
          label: "Resume callback gap vs. top-20 schools",
          description:
            "Identical resumes with different school names get wildly different response rates. The data on this is depressing.",
        },
        {
          value: "87%",
          label: "Resumes never seen by a human",
          description:
            "Most applications get filtered by ATS software that weights school prestige. Your 3.9 GPA never even gets read.",
        },
        {
          value: "2.3x",
          label: "More applications needed per interview",
          description:
            "State school grads send over twice as many applications to get the same number of interviews as Ivy peers.",
        },
      ],
    },
    solution: {
      badge: "Calibrated, Not Filtered",
      headline: "Your GPA, properly weighted.",
      gradientText: "Your skills, verified.",
      description:
        "SkillPass doesn't just report your GPA. It calibrates it against course difficulty, department rigor, and institutional tier — then combines it with peer references, proctored assessments, and performance data. The result is a SkillScore that means the same thing regardless of where you went to school.",
      features: [
        {
          title: "Institution-Weighted GPA",
          description:
            "Your 3.7 in Michigan's engineering program gets scored against the actual difficulty curve, not a generic scale.",
        },
        {
          title: "Proctored Skill Assessments",
          description:
            "Same coding, analysis, and design tests that Ivy students take. Same scoring. Employers see ability, not pedigree.",
        },
        {
          title: "Structured References",
          description:
            "Professors and peers rate you on 8 specific dimensions. Generic letters of rec can't compete with structured data.",
        },
        {
          title: "Public Verified Profile",
          description:
            "skillpass.io/yourname — one link that any recruiter, anywhere, can check. No ATS filter to bypass.",
        },
      ],
    },
    proof: {
      headline: "State school. Top score.",
      testimonial: {
        quote:
          "I applied to 140 places from Penn State with almost no callbacks. Built my SkillPass profile, scored 738, and had three interviews in a week. One of the hiring managers told me my SkillScore was why he clicked on my application.",
        name: "Marcus J.",
        role: "Penn State '25, Information Systems",
        detail: "SkillScore: 738",
      },
      stats: [
        { value: "738", label: "Average score, top state schools" },
        { value: "60%", label: "Faster to first interview" },
      ],
    },
    cta: {
      headline: "Stop being filtered by school name.",
      gradientText: "Start being found by ability.",
      description:
        "Build your calibrated profile in under 30 minutes. Always free for students.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See How Calibration Works", href: "/how-it-works" },
    },
  },

  // 3. Community College Students
  {
    slug: "community-college-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Community College Students | Close the Credibility Gap",
      description:
        "Your skills are real. Your effort is real. SkillPass gives you a verified, calibrated score that employers trust — no matter where you studied.",
    },
    hero: {
      badge: "For Community College Students",
      headline: "Close the credibility gap.",
      gradientText: "With verified proof.",
      subheadline:
        "You chose community college for good reasons. Employers shouldn't penalize you for it. SkillPass gives you the same verified scoring framework used by MIT and Stanford students — free.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "Learn How It Works", href: "/how-it-works" },
      trustLine: "Trusted by students at 400+ community colleges",
    },
    problem: {
      badge: "The Invisible Wall",
      headline: "You have skills.",
      gradientText: "Nobody's checking.",
      description:
        "Community college students face a brutal reality in hiring: most employers don't even consider your application. Not because you lack ability, but because their systems are designed to surface four-year degree holders first. You're invisible before you start.",
      stats: [
        {
          value: "52%",
          label: "Job postings require a four-year degree",
          description:
            "Half of all job listings filter you out automatically, even for roles where a two-year degree or skills-based proof would suffice.",
        },
        {
          value: "7x",
          label: "Less likely to get recruiter outreach",
          description:
            "LinkedIn and recruiter search tools heavily weight institution prestige. Community college profiles barely surface.",
        },
        {
          value: "$18K",
          label: "Starting salary gap vs. four-year grads",
          description:
            "Much of this gap is about perception, not ability. Verified skills narrow it dramatically.",
        },
      ],
    },
    solution: {
      badge: "Skills Over School Name",
      headline: "Same test. Same score.",
      gradientText: "Same opportunities.",
      description:
        "SkillPass doesn't care where you went to school. It cares what you can do. Take the same proctored assessments, get the same calibrated scoring, and show up in the same employer search results as any four-year grad.",
      features: [
        {
          title: "Level Playing Field Assessments",
          description:
            "Coding, data analysis, case studies, writing — the tests are identical for every student. Your score speaks for itself.",
        },
        {
          title: "Peer Signal That Counts",
          description:
            "References from instructors, project teammates, and supervisors — structured across 8 dimensions so employers trust the data.",
        },
        {
          title: "Skills-First Employer Matching",
          description:
            "Employers on SkillPass search by SkillScore, not school name. If your score is 700+, you show up. That's it.",
        },
        {
          title: "Free. Actually Free.",
          description:
            "No premium tiers. No upsells. Free for every student, at every institution, forever. Employers pay, you don't.",
        },
      ],
    },
    proof: {
      headline: "From community college to hired",
      testimonial: {
        quote:
          "I got my associate's from Maricopa Community College and assumed I'd be stuck applying to entry-level-only jobs for years. My SkillScore came back at 712 — higher than a lot of four-year grads I know. A fintech company reached out to ME within a month.",
        name: "Sofia L.",
        role: "Maricopa CC '25, Computer Science",
        detail: "SkillScore: 712",
      },
      stats: [
        { value: "712", label: "Average CC student score" },
        { value: "4x", label: "More employer views" },
      ],
    },
    cta: {
      headline: "Your school doesn't define you.",
      gradientText: "Your SkillScore does.",
      description:
        "30 minutes to build. Free forever. No credit card, no catch.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Sample Profiles", href: "/examples" },
    },
  },

  // 4. Bootcamp Graduates
  {
    slug: "bootcamp-graduates",
    category: "students-by-type",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Bootcamp Graduates | Prove Your Coding Skills Once",
      description:
        "You can code. Stop re-proving it at every interview. SkillPass gives bootcamp grads a verified, proctored SkillScore that employers accept on sight.",
    },
    hero: {
      badge: "For Bootcamp Grads",
      headline: "You can code.",
      gradientText: "Prove it once, for good.",
      subheadline:
        "Every company makes you whiteboard the same problems. SkillPass lets you take proctored coding, system design, and algorithm assessments once — then share a verified score with every employer you apply to.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "View Assessment Types", href: "/assessments" },
      trustLine: "Bootcamp grads from 60+ programs trust SkillPass",
    },
    problem: {
      badge: "The Proving Loop",
      headline: "You graduated. Then the real test started.",
      description:
        "Bootcamps teach you to build things. But the hiring process treats you like you've never touched a keyboard. Leetcode grind, take-home projects, live coding, system design — every single company wants you to prove yourself from scratch. It's exhausting and it's redundant.",
      stats: [
        {
          value: "23",
          label: "Average technical interviews before first offer",
          description:
            "Bootcamp grads go through nearly two dozen technical screens across different companies — often testing the exact same skills.",
        },
        {
          value: "68%",
          label: "Bootcamp grads feel 'credibility pressure'",
          description:
            "Most bootcamp grads report feeling like they have to work twice as hard to be taken half as seriously.",
        },
        {
          value: "40hrs",
          label: "Spent on take-home projects per job search",
          description:
            "That's a full work week building free projects for companies that may never respond.",
        },
      ],
    },
    solution: {
      badge: "Test Once, Share Everywhere",
      headline: "One test. Every employer.",
      gradientText: "No more proving loops.",
      description:
        "SkillPass proctored assessments cover the exact skills employers screen for — algorithms, system design, data structures, problem decomposition. Take each test once. Your verified score replaces the first two rounds of technical screening at participating employers.",
      features: [
        {
          title: "Proctored Coding Assessments",
          description:
            "Algorithm design, data structures, complexity analysis — webcam-proctored, time-boxed, verified. No cheating means employers trust the results.",
        },
        {
          title: "System Design Evaluation",
          description:
            "Architecture questions scored by rubric, not vibes. Show you can think about scale, trade-offs, and real-world constraints.",
        },
        {
          title: "Bootcamp-Calibrated Academics",
          description:
            "Your bootcamp's curriculum gets scored for rigor. A top-tier bootcamp's coursework shows up in your Academic sub-score.",
        },
        {
          title: "Project and Peer References",
          description:
            "Structured 360-degree feedback from bootcamp instructors and project teammates — not just a name on a LinkedIn endorsement.",
        },
      ],
    },
    proof: {
      headline: "From bootcamp to hired, faster",
      testimonial: {
        quote:
          "After App Academy I spent three months doing nothing but LeetCode and take-homes. Then I built my SkillPass profile, scored 731 on the coding assessment, and two companies skipped me straight to final rounds. Saved me at least six weeks.",
        name: "Tyler K.",
        role: "App Academy '25",
        detail: "SkillScore: 731",
      },
      stats: [
        { value: "60%", label: "Fewer redundant interviews" },
        { value: "731", label: "Avg bootcamp grad coding score" },
      ],
    },
    cta: {
      headline: "Stop re-proving yourself.",
      gradientText: "Prove it once.",
      description:
        "Free proctored assessments. Verified scores. One profile link for every application.",
      primaryCta: { text: "Take Your Assessments", href: "/signup" },
      secondaryCta: { text: "Browse Assessment Types", href: "/assessments" },
    },
  },

  // 5. Online Degree Students
  {
    slug: "online-degree-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Online Degree Students | Your Degree Is Real, Prove It",
      description:
        "Online degrees face unfair skepticism. SkillPass gives you a verified, proctored SkillScore that proves your skills are as real as any on-campus grad's.",
    },
    hero: {
      badge: "For Online Degree Students",
      headline: "Your degree is real.",
      gradientText: "Now prove it.",
      subheadline:
        "Employers still side-eye online degrees. You know the work was real. SkillPass gives you proctored, verified proof that your skills match or exceed traditional graduates — and a SkillScore that makes skepticism irrelevant.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How Verification Works", href: "/how-it-works" },
      trustLine: "Students from 80+ online programs trust SkillPass",
    },
    problem: {
      badge: "The Stigma Problem",
      headline: "Same material. Same exams.",
      gradientText: "Different assumptions.",
      description:
        "You took the same coursework, often from the same professors, as on-campus students. But an online degree still triggers skepticism in many hiring managers. Is it rigorous? Did they actually do the work? That bias costs you callbacks.",
      stats: [
        {
          value: "39%",
          label: "Hiring managers skeptical of online degrees",
          description:
            "Nearly four in ten recruiters admit they view online degrees as less rigorous, regardless of the institution.",
        },
        {
          value: "2x",
          label: "More applications needed for same callbacks",
          description:
            "Online degree holders send twice as many applications to land the same number of interviews.",
        },
        {
          value: "61%",
          label: "Online students say bias affected their job search",
          description:
            "The majority of online grads report encountering degree-format bias during hiring.",
        },
      ],
    },
    solution: {
      badge: "Verified, Not Assumed",
      headline: "Proctored proof beats assumptions.",
      description:
        "When an employer sees your SkillScore, they're not looking at your school's delivery format. They're looking at a number backed by proctored assessments, calibrated coursework, and structured references. That's harder to dismiss than a line on a resume.",
      features: [
        {
          title: "Proctored Assessment Scores",
          description:
            "Webcam-monitored tests in coding, analysis, writing, and more. No ambiguity about who did the work.",
        },
        {
          title: "Institution-Calibrated GPA",
          description:
            "Georgia Tech Online's CS program is scored at Georgia Tech's tier — because it IS Georgia Tech. Your calibration reflects the real rigor.",
        },
        {
          title: "Structured Peer Reviews",
          description:
            "References from professors, TAs, and study group members scored on 8 dimensions. Real data, not vague endorsements.",
        },
        {
          title: "Searchable by Employers",
          description:
            "Employers on SkillPass search by score, skills, and location — not degree format. You surface based on what you can do.",
        },
      ],
    },
    proof: {
      headline: "Online grads, verified results",
      testimonial: {
        quote:
          "I got my CS degree through ASU Online while working full-time. Two employers told me they 'preferred traditional candidates.' After I shared my 745 SkillScore, one of them called me back. The proctored assessment scores made the difference.",
        name: "Rachel T.",
        role: "ASU Online '25, Computer Science",
        detail: "SkillScore: 745",
      },
      stats: [
        { value: "745", label: "Avg online grad SkillScore" },
        { value: "3x", label: "More callbacks with SkillScore" },
      ],
    },
    cta: {
      headline: "Your degree format shouldn't matter.",
      gradientText: "Your skills should.",
      description:
        "Build your verified profile in 30 minutes. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Assessment Options", href: "/assessments" },
    },
  },

  // 6. HBCU Students
  {
    slug: "hbcu-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for HBCU Students | Level the Playing Field",
      description:
        "HBCU grads have the talent. SkillPass gives you calibrated scoring that reflects your actual rigor and a SkillScore employers can't ignore.",
    },
    hero: {
      badge: "For HBCU Students",
      headline: "Level the playing field.",
      gradientText: "With calibrated scores.",
      subheadline:
        "HBCUs produce some of the strongest graduates in the country. The problem isn't your preparation — it's that most employers don't know how to evaluate it. SkillPass gives them a score they immediately understand.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How Calibration Works", href: "/how-it-works" },
      trustLine: "Trusted by students across 50+ HBCUs",
    },
    problem: {
      badge: "Systemic Undervaluation",
      headline: "The talent is there.",
      gradientText: "The recognition isn't.",
      description:
        "HBCU students are underrepresented in Big Tech, top consulting firms, and finance — not because of ability, but because of recruiting pipeline bias. When top firms recruit from 'target schools,' most HBCUs aren't on the list. That's a systemic problem, and waiting for firms to fix it is too slow.",
      stats: [
        {
          value: "12%",
          label: "Fortune 500 companies actively recruit at HBCUs",
          description:
            "The vast majority of large employers have no HBCU recruiting pipeline at all.",
        },
        {
          value: "3x",
          label: "Fewer on-campus recruiters vs. PWIs",
          description:
            "Even well-funded HBCUs see a fraction of the corporate recruiting events that predominantly white institutions get.",
        },
        {
          value: "$13K",
          label: "Starting salary gap for HBCU grads",
          description:
            "Much of this gap traces to pipeline access, not skill differences. Verified scores can close it.",
        },
      ],
    },
    solution: {
      badge: "Skill-First Visibility",
      headline: "Bypass the pipeline.",
      gradientText: "Show up on merit.",
      description:
        "SkillPass puts you in front of employers who search by skill and score, not school name. When your SkillScore is 720, a recruiter sees 720 — they see verified coding ability, leadership references, analytical thinking. Not a school name they may not recognize.",
      features: [
        {
          title: "Calibrated Academic Scoring",
          description:
            "Spelman's chemistry program, Howard's business school, FAMU's engineering — each scored for its actual rigor, not generic rankings.",
        },
        {
          title: "8-Dimension References",
          description:
            "Technical ability, leadership, communication, reliability, creativity, coachability, work ethic, collaboration — all scored by people who know your work.",
        },
        {
          title: "Employer Search Visibility",
          description:
            "When employers search SkillPass for candidates above 700 in software engineering, your score is what surfaces you. Period.",
        },
        {
          title: "Shareable Public Profile",
          description:
            "skillpass.io/yourname — send it to any recruiter, attach it to any application, post it on LinkedIn.",
        },
      ],
    },
    proof: {
      headline: "HBCU talent, verified",
      testimonial: {
        quote:
          "Howard doesn't show up on most target school lists for hedge funds. I built my SkillPass profile, scored 751 — heavier on the quant and analytical assessments — and a mid-market fund reached out within three weeks. They told me my profile was the most complete candidate overview they'd seen.",
        name: "Jordan M.",
        role: "Howard University '25, Finance",
        detail: "SkillScore: 751",
      },
      stats: [
        { value: "50+", label: "Employers actively search SkillPass" },
        { value: "751", label: "Avg HBCU student SkillScore" },
      ],
    },
    cta: {
      headline: "Don't wait for the pipeline to find you.",
      gradientText: "Put your score in front of them.",
      description:
        "Free for every HBCU student. Build your profile in under 30 minutes.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "Explore Employer Partners", href: "/employers" },
    },
  },

  // 7. International Students
  {
    slug: "international-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for International Students | One Credential US Employers Understand",
      description:
        "Your foreign GPA doesn't translate. Your SkillScore does. One verified score that every US employer immediately understands — no credential evaluation needed.",
    },
    hero: {
      badge: "For International Students",
      headline: "One credential",
      gradientText: "every US employer understands.",
      subheadline:
        "Foreign GPAs confuse American recruiters. Degree equivalency is a mess. Your SkillScore is a single number — 300 to 850 — that means the same thing to every hiring manager in the US, regardless of where you studied.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Global Calibration", href: "/how-it-works" },
      trustLine: "Students from 90+ countries use SkillPass",
    },
    problem: {
      badge: "Lost in Translation",
      headline: "Your credentials don't translate.",
      gradientText: "That's not your fault.",
      description:
        "A first-class honours from IIT Bombay. A 16/20 from Sciences Po. A 1.0 from TU Munich. US recruiters don't know what any of these mean. They default to what they recognize — American school names. Your world-class education becomes a question mark.",
      stats: [
        {
          value: "58%",
          label: "US recruiters can't evaluate foreign GPAs",
          description:
            "Most American hiring managers admit they have no framework for interpreting international academic credentials.",
        },
        {
          value: "3.2x",
          label: "More likely to be filtered by ATS",
          description:
            "International credentials trigger formatting mismatches in applicant tracking systems, pushing your resume to the bottom.",
        },
        {
          value: "$4K",
          label: "Typical credential evaluation cost and delay",
          description:
            "WES evaluations cost money, take weeks, and still don't tell an employer what you can actually DO.",
        },
      ],
    },
    solution: {
      badge: "Globally Calibrated",
      headline: "4,000+ institutions. One scoring framework.",
      description:
        "SkillPass calibrates academic performance across universities worldwide. Your IIT Bombay GPA, your ETH Zurich coursework, your University of Tokyo research — all weighted by institutional tier and course rigor, then combined with proctored assessments and structured references into a single SkillScore.",
      features: [
        {
          title: "Global Institution Scoring",
          description:
            "IIT Bombay, ETH Zurich, Tsinghua, NUS — we've tiered 4,000+ institutions worldwide so your calibration reflects actual academic rigor.",
        },
        {
          title: "Language-Neutral Assessments",
          description:
            "Coding, quantitative reasoning, and analytical assessments test ability, not English fluency. Writing assessments have ESL-adjusted scoring.",
        },
        {
          title: "Visa-Status-Blind Scoring",
          description:
            "Your SkillScore doesn't include immigration status. Employers see ability first, logistics second.",
        },
        {
          title: "US-Formatted Profile",
          description:
            "Your public profile presents credentials in the format American employers expect. No translation confusion.",
        },
      ],
    },
    proof: {
      headline: "From anywhere to anywhere",
      testimonial: {
        quote:
          "I graduated top of my class at IIT Delhi but US recruiters kept asking me to 'explain my GPA system.' My SkillScore was 769. Nobody asked me to explain that. I had three final-round interviews within a month.",
        name: "Priya S.",
        role: "IIT Delhi '25, Computer Science",
        detail: "SkillScore: 769",
      },
      stats: [
        { value: "90+", label: "Countries represented" },
        { value: "60%", label: "Faster to first US interview" },
      ],
    },
    cta: {
      headline: "Your education is world-class.",
      gradientText: "Now make it world-readable.",
      description:
        "Build your globally calibrated profile. Free for every student, everywhere.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Global Calibration", href: "/how-it-works" },
    },
  },

  // 8. Graduate Students
  {
    slug: "graduate-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Graduate Students | Research Depth, Industry Ready",
      description:
        "Translate your research depth into a language industry understands. SkillPass scores your graduate-level expertise so employers see your value instantly.",
    },
    hero: {
      badge: "For Graduate Students",
      headline: "Research depth,",
      gradientText: "translated for industry.",
      subheadline:
        "You spent two years going deep. The problem is, most job descriptions don't say 'needs someone who can run a mixed-methods regression.' SkillPass translates your graduate expertise into a score industry actually uses.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See How Scoring Works", href: "/how-it-works" },
      trustLine: "Graduate students from 300+ programs",
    },
    problem: {
      badge: "The Translation Gap",
      headline: "Deep expertise.",
      gradientText: "Wrong language.",
      description:
        "Graduate school taught you to think rigorously, design experiments, analyze data, and communicate findings. But your resume says 'Thesis: Bayesian Inference in High-Dimensional Spaces' and the recruiter doesn't know what to do with that. The depth is real. The translation is missing.",
      stats: [
        {
          value: "47%",
          label: "Master's grads take jobs below their qualification",
          description:
            "Nearly half of master's graduates end up in roles that don't require their degree — often because they can't articulate the value.",
        },
        {
          value: "5.2mo",
          label: "Average job search length for master's grads",
          description:
            "Graduate students take longer to find roles, partly because they're overqualified for entry-level but under-networked for senior roles.",
        },
        {
          value: "72%",
          label: "Recruiters struggle to evaluate research experience",
          description:
            "Most hiring managers in industry can't tell the difference between a thesis that took 6 months and one that took 6 weeks.",
        },
      ],
    },
    solution: {
      badge: "Depth Meets Clarity",
      headline: "Your expertise, in a language employers speak.",
      description:
        "SkillPass scores your graduate coursework at its actual rigor level, captures structured references from advisors and research collaborators, and adds proctored assessments that demonstrate applied skill. The result is a SkillScore that makes your depth immediately legible to any hiring manager.",
      features: [
        {
          title: "Graduate-Level Course Calibration",
          description:
            "Your 700-level coursework is scored at its actual difficulty, not averaged with undergraduate classes.",
        },
        {
          title: "Advisor and Collaborator References",
          description:
            "Structured 8-dimension references from thesis advisors, lab members, and research collaborators carry significant weight.",
        },
        {
          title: "Applied Skill Assessments",
          description:
            "Data analysis, system design, case studies — tests that bridge the gap between academic research and industry problem-solving.",
        },
        {
          title: "Research-Aware Profile",
          description:
            "Your public profile contextualizes publications, conference talks, and research impact alongside your verified score.",
        },
      ],
    },
    proof: {
      headline: "Graduate expertise, industry verified",
      testimonial: {
        quote:
          "My master's in computational biology was great training but terrible for job applications. Nobody in tech hiring knew what to make of it. My SkillScore — 758, heavy on data analysis and problem-solving — gave recruiters a number they could work with. Hired at a health-tech startup in four weeks.",
        name: "Elena V.",
        role: "Johns Hopkins '25, Computational Biology MS",
        detail: "SkillScore: 758",
      },
      stats: [
        { value: "758", label: "Avg grad student SkillScore" },
        { value: "60%", label: "Faster to industry role" },
      ],
    },
    cta: {
      headline: "You went deep.",
      gradientText: "Now go wide.",
      description:
        "Translate your graduate expertise into a verified score. Free for all students.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Grad-Level Scoring", href: "/how-it-works" },
    },
  },

  // 9. PhD Candidates
  {
    slug: "phd-candidates",
    category: "students-by-type",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for PhD Candidates | 5+ Years of Expertise, One Score",
      description:
        "You spent 5+ years becoming an expert. SkillPass gives you a single score that translates your PhD-level expertise into a language industry hiring managers speak.",
    },
    hero: {
      badge: "For PhD Candidates",
      headline: "5+ years of expertise.",
      gradientText: "One score industry gets.",
      subheadline:
        "You've published papers, defended a thesis, and pushed the boundary of human knowledge. Now try explaining that to a recruiter scanning 200 resumes in an hour. Your SkillScore does it in three digits.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How PhD Scoring Works", href: "/how-it-works" },
      trustLine: "PhD candidates from 150+ research universities",
    },
    problem: {
      badge: "The Industry-Academia Gap",
      headline: "You're overqualified on paper.",
      gradientText: "Undervalued in practice.",
      description:
        "Industry says it wants PhDs. Then it asks you to solve a medium-difficulty LeetCode problem. Your five years of original research, your publications, your teaching — none of it maps to a standard job application. You're simultaneously too specialized and too hard to categorize.",
      stats: [
        {
          value: "63%",
          label: "PhDs take non-academic jobs",
          description:
            "Most PhDs end up in industry, but the transition is brutal because hiring processes aren't built for research credentials.",
        },
        {
          value: "8.1mo",
          label: "Average industry job search for PhDs",
          description:
            "Eight months. That's how long it takes for a literal expert to find a job after deciding to leave academia.",
        },
        {
          value: "41%",
          label: "PhDs feel 'penalty' for overspecialization",
          description:
            "Companies worry you'll be too academic, too narrow, too theoretical. That's not a skills problem — it's a communication problem.",
        },
      ],
    },
    solution: {
      badge: "Expert-Level, Industry-Readable",
      headline: "Research rigor meets hiring reality.",
      description:
        "SkillPass captures what makes a PhD valuable: deep analytical thinking, research design, communication, and domain expertise. It scores your advanced coursework at its true level, weights advisor references heavily, and adds proctored assessments that demonstrate applied problem-solving.",
      features: [
        {
          title: "PhD-Level Academic Calibration",
          description:
            "Doctoral coursework, qualifying exams, and thesis defense are scored at their actual difficulty — not lumped with undergrad classes.",
        },
        {
          title: "Research Advisor References",
          description:
            "Your advisor's structured reference carries significant weight. So do references from committee members and lab collaborators.",
        },
        {
          title: "Applied Industry Assessments",
          description:
            "System design, data analysis, case consulting — tests that show you can apply research-level thinking to business problems.",
        },
        {
          title: "Expertise Narrative",
          description:
            "Your public profile contextualizes your research for industry audiences. Publications, impact metrics, and domain depth — all legible.",
        },
      ],
    },
    proof: {
      headline: "From lab to industry",
      testimonial: {
        quote:
          "I spent six years on a machine learning PhD at CMU. When I started interviewing at companies, they asked me to implement binary search. My SkillScore was 789 — it showed the depth of my research, my system design thinking, and my collaboration record. Companies started treating me like the expert I actually am.",
        name: "Wei C.",
        role: "CMU '25, Machine Learning PhD",
        detail: "SkillScore: 789",
      },
      stats: [
        { value: "789", label: "Avg PhD SkillScore" },
        { value: "60%", label: "Faster to industry placement" },
      ],
    },
    cta: {
      headline: "You're the expert.",
      gradientText: "Make sure they know it.",
      description:
        "Build your industry-facing profile in under 30 minutes. Free for every researcher.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See PhD Scoring", href: "/how-it-works" },
    },
  },

  // 10. MBA Students
  {
    slug: "mba-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for MBA Students | Beyond the Case Interview",
      description:
        "Case interviews test one thing. You're good at many. SkillPass gives MBA students a verified score covering leadership, analysis, strategy, and more.",
    },
    hero: {
      badge: "For MBA Students",
      headline: "Beyond the case interview.",
      gradientText: "Your full business skillset, scored.",
      subheadline:
        "You didn't spend $150K on an MBA to be reduced to 30 minutes of framework regurgitation. SkillPass captures your analytical depth, leadership ability, strategic thinking, and peer evaluations in one verified score.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See MBA-Relevant Assessments", href: "/assessments" },
      trustLine: "MBA students from 40+ top programs",
    },
    problem: {
      badge: "The Case Trap",
      headline: "40 practice cases.",
      gradientText: "Still just a proxy.",
      description:
        "MBA recruiting is obsessed with case interviews. You've prepped 40 cases, joined a case group, bought Victor Cheng's course. But the case interview only measures one narrow skill. Your leadership experience, your quantitative abilities, your communication — none of that shows up in 'here's a market sizing problem.'",
      stats: [
        {
          value: "40+",
          label: "Cases practiced by average MBB candidate",
          description:
            "MBA students spend hundreds of hours practicing cases that test a fraction of their actual capability.",
        },
        {
          value: "$8K",
          label: "Average spent on case prep and coaching",
          description:
            "Between coaching, prep courses, and club dues, MBA students spend thousands just to practice for one interview format.",
        },
        {
          value: "22%",
          label: "MBB acceptance rate from target schools",
          description:
            "Even from top programs, most MBA grads don't land their target consulting role. The funnel is brutal.",
        },
      ],
    },
    solution: {
      badge: "Complete Business Profile",
      headline: "More than a case cracker.",
      description:
        "SkillPass scores your MBA experience comprehensively: calibrated coursework in finance, strategy, and operations; structured peer references from study groups and project teams; proctored assessments in case analysis, data interpretation, and general management. The result is a business profile employers actually use.",
      features: [
        {
          title: "MBA Coursework Calibration",
          description:
            "Finance, strategy, marketing, operations — your grades calibrated by program tier and course difficulty. Wharton's accounting hits different.",
        },
        {
          title: "Case Consulting Assessment",
          description:
            "Structured case analysis scored by rubric — market sizing, profitability, operations — without the high-pressure performance theater.",
        },
        {
          title: "Leadership Peer Signal",
          description:
            "360-degree references from study group members, project teams, and club leadership. Eight dimensions that matter beyond case cracking.",
        },
        {
          title: "Pre-MBA Experience Integration",
          description:
            "Your performance reviews and references from pre-MBA roles feed into your score. Three years at McKinsey before Booth? That counts.",
        },
      ],
    },
    proof: {
      headline: "MBA grads, fully profiled",
      testimonial: {
        quote:
          "I'm at Kellogg and was tired of the case prep grind. My SkillPass profile showed my leadership scores, my pre-MBA consulting performance, and my quant abilities in one place. A PE firm found my profile and reached out — said it was the most complete candidate snapshot they'd seen.",
        name: "Aisha T.",
        role: "Kellogg MBA '25",
        detail: "SkillScore: 772",
      },
      stats: [
        { value: "772", label: "Avg MBA SkillScore" },
        { value: "$12K", label: "Saved per hire for employers" },
      ],
    },
    cta: {
      headline: "You're more than a case interview.",
      gradientText: "Prove it.",
      description:
        "Build your complete business profile. Free for every MBA student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Business Assessments", href: "/assessments" },
    },
  },

  // 11. Transfer Students
  {
    slug: "transfer-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Transfer Students | Three Schools, One Unified Score",
      description:
        "Multiple transcripts, different grading systems, confusing timelines. SkillPass unifies your transfer journey into one clear, calibrated SkillScore.",
    },
    hero: {
      badge: "For Transfer Students",
      headline: "Three schools.",
      gradientText: "One unified score.",
      subheadline:
        "Your resume shows a confusing path: community college, then state school, then maybe a research university. Each with different GPAs, different scales. SkillPass unifies everything into one calibrated number that makes your journey an asset, not a liability.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How Unification Works", href: "/how-it-works" },
    },
    problem: {
      badge: "The Split Transcript Problem",
      headline: "Your path makes sense to you.",
      gradientText: "Not to a recruiter.",
      description:
        "Transfer students have a unique problem: multiple institutions, multiple GPAs, gaps that look weird on paper. A recruiter spending 6 seconds on your resume sees complexity and moves on. Your non-linear path was smart. But it's hard to explain in a stack of paper.",
      stats: [
        {
          value: "38%",
          label: "Of undergrads transfer at least once",
          description:
            "You're not unusual. But hiring systems treat you like an edge case.",
        },
        {
          value: "6sec",
          label: "Average recruiter time on a resume",
          description:
            "That's not enough time to understand two lines of education, let alone three.",
        },
        {
          value: "2.4x",
          label: "More likely to have resume 'red flags'",
          description:
            "Gaps, multiple schools, changing majors — all normal for transfers, all penalized by screening software.",
        },
      ],
    },
    solution: {
      badge: "Unified Credential",
      headline: "Every school, one score.",
      description:
        "SkillPass pulls your academic records from every institution you attended, calibrates each school's grades against its actual difficulty, and produces a single, unified Academic sub-score. Combined with assessments and references, your SkillScore tells a clean, complete story.",
      features: [
        {
          title: "Multi-Institution Calibration",
          description:
            "Community college A, state school B+, research university A- — each grade weighted by institutional rigor and combined into one clean number.",
        },
        {
          title: "Path-Aware Scoring",
          description:
            "Upward grade trends across transfers are recognized and rewarded. Getting better over time is a signal, not noise.",
        },
        {
          title: "Cross-School References",
          description:
            "References from each institution contribute to your Peer Signal score. More schools means more data points, not more confusion.",
        },
        {
          title: "One Link, Whole Story",
          description:
            "skillpass.io/yourname shows a unified profile. No need to explain your path — the score already accounts for it.",
        },
      ],
    },
    proof: {
      headline: "Transfers, unified",
      testimonial: {
        quote:
          "I went from a community college in Virginia to VCU to UVA. Three transcripts, three different GPA scales. My SkillPass profile unified everything into a 724. First time my academic record actually made sense on one page.",
        name: "Chris D.",
        role: "UVA '25, Transfer Student",
        detail: "SkillScore: 724",
      },
      stats: [
        { value: "724", label: "Avg transfer student score" },
        { value: "3x", label: "Clearer to recruiters" },
      ],
    },
    cta: {
      headline: "Complex path.",
      gradientText: "Simple score.",
      description:
        "Unify your academic record in 30 minutes. Free for every student.",
      primaryCta: { text: "Unify Your Score", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
  },

  // 12. First-Generation Students
  {
    slug: "first-gen-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for First-Gen Students | No Network? Let Skills Speak.",
      description:
        "No alumni connections, no family network, no insider knowledge. SkillPass gives first-gen students a verified score that opens doors on merit alone.",
    },
    hero: {
      badge: "For First-Gen Students",
      headline: "No alumni network?",
      gradientText: "Let skills speak.",
      subheadline:
        "You don't have a parent who can call someone at the firm. You don't have an uncle in venture capital. What you do have is ability — and SkillPass turns that into a verified credential that speaks louder than any connection.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Built for the students who built everything themselves",
    },
    problem: {
      badge: "The Network Gap",
      headline: "Talent is evenly distributed.",
      gradientText: "Networks aren't.",
      description:
        "First-gen students lack the invisible advantages that come with generational college attendance: alumni networks, parental career advice, insider knowledge about recruiting timelines and unwritten rules. You're competing against students who've been coached on this stuff since birth.",
      stats: [
        {
          value: "70%",
          label: "Of jobs filled through networking",
          description:
            "When most jobs come through connections, not having a network isn't just a disadvantage — it's a wall.",
        },
        {
          value: "2x",
          label: "Longer job search for first-gen grads",
          description:
            "First-gen students take twice as long to land their first role after graduation.",
        },
        {
          value: "45%",
          label: "First-gen students don't know about recruiting timelines",
          description:
            "Missing the on-campus recruiting cycle — because nobody told you about it — costs you an entire year.",
        },
      ],
    },
    solution: {
      badge: "Merit Over Networks",
      headline: "Your score IS your network.",
      description:
        "SkillPass doesn't care who your parents are. It cares what you can do. Your verified SkillScore puts you in front of employers who search by ability, not connections. When your score is 710+, you show up alongside every other 710+ candidate — regardless of who they know.",
      features: [
        {
          title: "Skills-First Discovery",
          description:
            "Employers search SkillPass by score and skills. No referral needed. No warm intro required. Your score is the introduction.",
        },
        {
          title: "Structured Reference Building",
          description:
            "Don't know how to ask for references? SkillPass makes it easy — structured forms that professors and supervisors fill out in minutes.",
        },
        {
          title: "Career Navigation Built In",
          description:
            "Your profile signals readiness to employers who specifically seek high-potential, diverse talent. Many actively search for first-gen candidates.",
        },
        {
          title: "Zero Cost, Zero Catch",
          description:
            "Free forever. No premium tier. No 'pay to unlock features.' Employers pay for access. You never do.",
        },
      ],
    },
    proof: {
      headline: "First in family, first to get hired",
      testimonial: {
        quote:
          "Neither of my parents went to college. I had no idea how recruiting worked and missed the fall cycle entirely. Built my SkillPass profile in January, scored 718, and a tech company found my profile in their search. I didn't even apply — they came to me.",
        name: "Maria G.",
        role: "University of Houston '25, First-Gen",
        detail: "SkillScore: 718",
      },
      stats: [
        { value: "718", label: "Avg first-gen SkillScore" },
        { value: "3x", label: "More employer visibility" },
      ],
    },
    cta: {
      headline: "You built everything yourself.",
      gradientText: "This part is free.",
      description:
        "30 minutes to build. Free forever. Your skills are the only requirement.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Success Stories", href: "/stories" },
    },
  },

  // 13. Student Athletes
  {
    slug: "student-athletes",
    category: "students-by-type",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Student Athletes | Performance On and Off the Field",
      description:
        "You balanced a sport and a degree. SkillPass captures your academic performance, leadership, and discipline in one verified score employers respect.",
    },
    hero: {
      badge: "For Student Athletes",
      headline: "Performance on the field",
      gradientText: "AND in the classroom.",
      subheadline:
        "You practiced at 6am, took a full course load, and led a team. Employers love hearing that — but they need proof the academics held up too. Your SkillScore shows both sides: discipline AND depth.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "D1, D2, and D3 athletes across 100+ programs",
    },
    problem: {
      badge: "The 'Jock' Stigma",
      headline: "They see the jersey first.",
      gradientText: "Your transcript second.",
      description:
        "Student athletes face a weird double standard. Employers admire your discipline but quietly wonder if you took easy classes. They respect your leadership but question your technical depth. You spent four years proving you could do both. Now you have to prove it again.",
      stats: [
        {
          value: "98%",
          label: "Student athletes who won't go pro",
          description:
            "Almost every student athlete needs a career plan. But career services often underserves athletes because 'they'll figure it out.'",
        },
        {
          value: "3.1",
          label: "Average athlete GPA (higher than you'd think)",
          description:
            "Athletes actually maintain competitive GPAs. But the perception doesn't match the reality.",
        },
        {
          value: "67%",
          label: "Athletes feel career transition is 'abrupt'",
          description:
            "The shift from 'student athlete' to 'job candidate' happens fast, and most athletes don't get enough support.",
        },
      ],
    },
    solution: {
      badge: "Complete Athlete Profile",
      headline: "Discipline meets verified depth.",
      description:
        "SkillPass scores your academics at full rigor — no assumptions about 'easy athlete classes.' Your leadership references from coaches, teammates, and professors add dimension. Proctored assessments prove your analytical and technical abilities stand on their own.",
      features: [
        {
          title: "Full Academic Calibration",
          description:
            "Your coursework scored at its actual difficulty. If you took real classes while training 30 hours a week, that shows up in your calibrated GPA.",
        },
        {
          title: "Leadership Signal from Sports",
          description:
            "Coaches and team captains contribute structured references. Leadership, reliability, work ethic, collaboration — all quantified.",
        },
        {
          title: "Time Management Proof",
          description:
            "Balancing D1 athletics and engineering coursework? Your profile tells that story through data, not just a bullet point.",
        },
        {
          title: "Post-Sport Career Readiness",
          description:
            "Proctored assessments in your target field show employers you're ready to compete just as hard in industry.",
        },
      ],
    },
    proof: {
      headline: "Athletes who scored big",
      testimonial: {
        quote:
          "I was a D1 swimmer at Michigan and double-majored in econ and stats. Every interviewer wanted to talk about swimming, which was cool, but nobody asked about my quantitative skills. My SkillScore put both front and center — 741, with strong analytical and peer signal scores. Got hired at a sports analytics firm.",
        name: "Jake W.",
        role: "Michigan '25, D1 Swimming, Econ/Stats",
        detail: "SkillScore: 741",
      },
      stats: [
        { value: "741", label: "Avg athlete SkillScore" },
        { value: "60%", label: "Faster career transition" },
      ],
    },
    cta: {
      headline: "You competed at the highest level.",
      gradientText: "Show you can do it off the field too.",
      description:
        "Build your complete profile in 30 minutes. Free for every student athlete.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Athlete Profiles", href: "/examples" },
    },
  },

  // 14. Veterans / GI Bill
  {
    slug: "veterans-gi-bill",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Veterans & GI Bill Students | Military Skills, Verified",
      description:
        "Military discipline meets verified civilian skills. SkillPass translates your service experience and GI Bill education into one score employers understand.",
    },
    hero: {
      badge: "For Veterans & GI Bill Students",
      headline: "Military discipline.",
      gradientText: "Verified civilian skills.",
      subheadline:
        "You led teams under pressure, managed complex logistics, and made decisions with real consequences. Civilian employers respect that — but they can't evaluate it. Your SkillScore makes military experience legible to any hiring manager.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How Veteran Scoring Works", href: "/how-it-works" },
      trustLine: "Serving the veterans who served us",
    },
    problem: {
      badge: "The Translation Wall",
      headline: "You managed a $2M budget at 23.",
      gradientText: "Recruiters see 'military background.'",
      description:
        "Civilian employers don't know what an E-7 does. They don't understand MOS codes. They see 'Army' on your resume and think 'doesn't have business experience.' Meanwhile, you were running logistics for 200 people before most of your peers had their first internship. The experience is real. The translation is broken.",
      stats: [
        {
          value: "44%",
          label: "Veterans underemployed in first civilian role",
          description:
            "Nearly half of veterans take jobs below their skill level because employers can't evaluate military experience.",
        },
        {
          value: "$15K",
          label: "Average salary gap, first civilian job",
          description:
            "Veterans earn significantly less than their civilian peers in first post-service roles — not because of ability, but because of translation failure.",
        },
        {
          value: "71%",
          label: "Employers say they 'value' veterans but struggle to hire them",
          description:
            "Goodwill without a framework is useless. Employers want to hire vets but have no way to evaluate them.",
        },
      ],
    },
    solution: {
      badge: "Service Translated",
      headline: "Your service, scored for civilian eyes.",
      description:
        "SkillPass combines your GI Bill education with structured assessments and references that translate military competencies into civilian terms. Leadership, logistics, technical operations — all captured in a score employers immediately understand.",
      features: [
        {
          title: "GI Bill Education Calibration",
          description:
            "Your post-service degree, scored and calibrated like any other institution. The GI Bill education is real education — SkillPass treats it that way.",
        },
        {
          title: "Military Leadership References",
          description:
            "Commanding officers, NCOs, and unit members contribute structured references. Leadership, reliability, decision-making — all quantified.",
        },
        {
          title: "Civilian Skill Assessments",
          description:
            "Proctored tests in your target civilian field: management, technology, analysis, operations. Prove you can do the job, not just talk about service.",
        },
        {
          title: "Service-Aware Profile",
          description:
            "Your public profile contextualizes military experience for civilian audiences. MOS translated. Leadership scope quantified. Service valued.",
        },
      ],
    },
    proof: {
      headline: "From service to hired",
      testimonial: {
        quote:
          "After 8 years in the Army, I used my GI Bill for a CS degree at Georgia State. Employers kept saying 'thank you for your service' but wouldn't give me a technical interview. My SkillScore — 736, strong on leadership and coding — changed the conversation entirely. Hired at a defense contractor within a month.",
        name: "Marcus L.",
        role: "Army Veteran, Georgia State '25, CS",
        detail: "SkillScore: 736",
      },
      stats: [
        { value: "736", label: "Avg veteran SkillScore" },
        { value: "60%", label: "Faster to civilian role" },
      ],
    },
    cta: {
      headline: "You served your country.",
      gradientText: "Let your skills serve your career.",
      description:
        "Build your civilian-ready profile. Free for every veteran, always.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Veteran Profiles", href: "/examples" },
    },
  },

  // 15. Non-Traditional Students
  {
    slug: "non-traditional-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Non-Traditional Students | Age Is an Asset",
      description:
        "Went back to school at 30? 40? SkillPass proves your experience plus education equals something powerful. Your SkillScore tells the whole story.",
    },
    hero: {
      badge: "For Non-Traditional Students",
      headline: "Age is an asset.",
      gradientText: "SkillScore proves it.",
      subheadline:
        "You went back to school because you wanted more. Now you're competing for roles against 22-year-olds with no experience but a 'traditional' path. Your SkillScore combines your work history, your new education, and your real-world judgment into one number that makes your advantage obvious.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How Scoring Works", href: "/how-it-works" },
    },
    problem: {
      badge: "The Age Penalty",
      headline: "More experience. More bias.",
      description:
        "Non-traditional students face a frustrating paradox: you have more life experience, more work history, and more maturity than typical graduates — but hiring systems are built for 22-year-olds on a linear path. Graduation year filters, 'entry-level' age assumptions, and campus recruiting timelines all work against you.",
      stats: [
        {
          value: "36%",
          label: "Non-trad students face age bias in hiring",
          description:
            "Over a third report being treated as 'overqualified' or 'too old' for entry-level roles they're perfectly suited for.",
        },
        {
          value: "73%",
          label: "Campus recruiting events target 20-24 year olds",
          description:
            "The recruiting infrastructure assumes a traditional timeline. Evening students, parents, and career-changers get left out.",
        },
        {
          value: "2.8x",
          label: "More applications to land same role",
          description:
            "Non-traditional students send nearly three times as many applications, often because automated systems filter them out.",
        },
      ],
    },
    solution: {
      badge: "Experience Meets Credential",
      headline: "Work history + education = powerful.",
      gradientText: "SkillPass shows both.",
      description:
        "SkillPass doesn't just score your degree. It integrates your work experience, performance reviews, and professional references alongside your academic credentials. The result is a SkillScore that reflects your complete professional capacity — not just your most recent enrollment.",
      features: [
        {
          title: "Career-Integrated Scoring",
          description:
            "Your pre-degree work experience and performance reviews contribute to your SkillScore. Ten years in marketing + a new analytics degree = a strong combined signal.",
        },
        {
          title: "Professional + Academic References",
          description:
            "References from former managers AND current professors. Both feed into your 8-dimension Peer Signal score.",
        },
        {
          title: "Age-Blind Employer Search",
          description:
            "Employers search by score and skills. Your graduation year doesn't surface. Your SkillScore does.",
        },
        {
          title: "Maturity as Signal",
          description:
            "Structured references capture reliability, judgment, and work ethic — dimensions where non-traditional students consistently score higher.",
        },
      ],
    },
    proof: {
      headline: "Second act, first score",
      testimonial: {
        quote:
          "I went back to school for data science at 35 after a decade in retail management. I was worried employers would see my age, not my skills. My SkillScore was 733 — with strong performance and peer signal sub-scores from my work history. Got hired at a mid-size tech company that said my profile was the most well-rounded they'd reviewed.",
        name: "David R.",
        role: "Portland State '25, Data Science, Age 37",
        detail: "SkillScore: 733",
      },
      stats: [
        { value: "733", label: "Avg non-trad SkillScore" },
        { value: "3x", label: "More complete profiles" },
      ],
    },
    cta: {
      headline: "You went back for a reason.",
      gradientText: "Make it count.",
      description:
        "Build your complete profile — work history included. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
  },

  // 16. Unranked School Students
  {
    slug: "unranked-school-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Students at Unranked Schools | Rankings Don't Define You",
      description:
        "Your school isn't ranked. Your skills can be. SkillPass gives students at unranked institutions a verified, calibrated score that competes with anyone.",
    },
    hero: {
      badge: "For Students at Unranked Schools",
      headline: "Rankings don't define you.",
      gradientText: "Your SkillScore does.",
      subheadline:
        "US News doesn't rank your school. That doesn't mean your education is weak — it means their methodology doesn't cover you. SkillPass does. Same assessments, same calibration framework, same scoring scale as every top-20 student.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Calibration Details", href: "/how-it-works" },
    },
    problem: {
      badge: "The Ranking Blind Spot",
      headline: "No ranking doesn't mean no rigor.",
      description:
        "Thousands of accredited institutions don't appear in major rankings. But recruiters use rankings as shorthand. If your school isn't on the list, your resume faces an uphill battle before anyone even reads your GPA.",
      stats: [
        {
          value: "62%",
          label: "Recruiters check school rankings",
          description:
            "Most recruiters admit they reference rankings when screening resumes, even if they know rankings are flawed.",
        },
        {
          value: "5x",
          label: "Fewer recruiter views for unranked schools",
          description:
            "Profiles from unranked schools get a fraction of the visibility on traditional platforms.",
        },
        {
          value: "3,000+",
          label: "Accredited schools not in US News top 200",
          description:
            "The vast majority of accredited institutions are invisible to ranking-dependent hiring processes.",
        },
      ],
    },
    solution: {
      badge: "Ranked by Ability",
      headline: "Forget school rankings.",
      gradientText: "Score by ability.",
      description:
        "SkillPass calibrates your academics against the actual difficulty of your program, adds proctored assessments, and scores structured references. Employers see your SkillScore — not a missing ranking. If you score 720, you compete with every 720, period.",
      features: [
        {
          title: "Institution-Level Calibration",
          description:
            "Even unranked schools are tiered in SkillPass's system. Your GPA is weighted against your school's actual academic standards.",
        },
        {
          title: "Equal-Opportunity Assessments",
          description:
            "Same proctored tests taken by Harvard and MIT students. Same scoring rubric. Your ability is measured identically.",
        },
        {
          title: "Skill-Based Employer Search",
          description:
            "Employers don't filter by school ranking on SkillPass. They filter by score. That's the whole point.",
        },
        {
          title: "Proof Over Prestige",
          description:
            "Your verified profile is a data sheet, not a name drop. References, assessments, grades — all scored, all verifiable.",
        },
      ],
    },
    proof: {
      headline: "Unranked school, top-tier score",
      testimonial: {
        quote:
          "I went to a small school in Iowa nobody's heard of. Great CS program, zero name recognition. My SkillScore was 728 — higher than a lot of ranked-school students I've met. An enterprise software company found my profile and fast-tracked me to their final round.",
        name: "Amy N.",
        role: "Grinnell '25, Computer Science",
        detail: "SkillScore: 728",
      },
      stats: [
        { value: "728", label: "Avg unranked school score" },
        { value: "5x", label: "More employer visibility" },
      ],
    },
    cta: {
      headline: "Your school doesn't have a ranking.",
      gradientText: "You do.",
      description:
        "Get your SkillScore. Free, calibrated, and visible to every employer on the platform.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "How Calibration Works", href: "/how-it-works" },
    },
  },

  // 17. Low GPA Students
  {
    slug: "low-gpa-students",
    category: "students-by-type",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Students with Low GPAs | GPA Doesn't Tell the Full Story",
      description:
        "A low GPA doesn't mean low ability. SkillPass gives you proctored assessments, structured references, and a SkillScore that shows the full picture.",
    },
    hero: {
      badge: "For Students with Lower GPAs",
      headline: "GPA doesn't tell",
      gradientText: "the full story.",
      subheadline:
        "Maybe you worked 30 hours a week. Maybe you struggled freshman year and crushed senior year. Maybe you're just a bad test-taker but a brilliant problem-solver. Your GPA is one data point. Your SkillScore uses four.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See the Four Sub-Scores", href: "/how-it-works" },
    },
    problem: {
      badge: "The GPA Ceiling",
      headline: "One number is blocking you.",
      description:
        "A 2.8 GPA gets your resume filtered out before a human ever sees it. It doesn't matter that you worked full-time, had a family crisis sophomore year, or that your 3.6 in your major is hidden behind a low overall average. The filter doesn't care about context. It sees 2.8 and moves on.",
      stats: [
        {
          value: "3.0",
          label: "Common GPA cutoff in applicant tracking",
          description:
            "Most ATS systems use a 3.0 hard cutoff. Below that, your application never reaches a person.",
        },
        {
          value: "73%",
          label: "Employers use GPA as screening criteria",
          description:
            "Nearly three-quarters of employers filter by GPA, even though research shows it's a weak predictor of job performance.",
        },
        {
          value: "0.14",
          label: "Correlation between GPA and job performance",
          description:
            "That's the actual research number. GPA is barely better than random at predicting how well you'll do at work.",
        },
      ],
    },
    solution: {
      badge: "More Than One Number",
      headline: "Four sub-scores, one real picture.",
      description:
        "SkillPass doesn't ignore your GPA — it contextualizes it. Course rigor, grade trends, and major GPA all factor in. Then it adds three more sub-scores: proctored assessments, structured references, and performance reviews. The result is a SkillScore that captures ability a GPA alone can't.",
      features: [
        {
          title: "Contextualized Academic Score",
          description:
            "Major GPA weighted more heavily than overall. Upward trends recognized. Course difficulty factored in. A 2.8 in engineering isn't a 2.8 in general studies.",
        },
        {
          title: "Proctored Assessments Override",
          description:
            "Score an 810 on a coding assessment with a 2.7 GPA? Your Assessed Ability sub-score pulls your total SkillScore up significantly.",
        },
        {
          title: "Peer Signal Strength",
          description:
            "Strong references from professors, supervisors, and teammates can offset a lower academic score. People who worked with you matter.",
        },
        {
          title: "Trend Recognition",
          description:
            "1.9 freshman year, 3.7 senior year? SkillPass weights recent performance more heavily. Growth is a signal.",
        },
      ],
    },
    proof: {
      headline: "Low GPA, high score",
      testimonial: {
        quote:
          "I had a 2.6 overall GPA because I worked full-time and bombed my first two semesters. My major GPA was 3.5 and I scored in the 90th percentile on coding assessments. My SkillScore came back at 709 — way above the 3.0 cutoff that had been filtering me out everywhere. Three interviews in the first week.",
        name: "Brandon S.",
        role: "CUNY '25, Computer Science",
        detail: "SkillScore: 709",
      },
      stats: [
        { value: "709", label: "Avg score with below-3.0 GPA" },
        { value: "4x", label: "More interviews with SkillScore" },
      ],
    },
    cta: {
      headline: "Your GPA is one number.",
      gradientText: "Your SkillScore is the whole picture.",
      description:
        "Build your profile in 30 minutes. Let four sub-scores tell your real story. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Sub-Score Breakdown", href: "/how-it-works" },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CATEGORY B — BY MAJOR (10 pages)
  // ─────────────────────────────────────────────────────────────────────────────

  // 18. CS Students
  {
    slug: "cs-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for CS Students | Stop Re-Proving You Can Code",
      description:
        "You've passed data structures, algorithms, and systems. Stop solving the same problems at every interview. SkillPass lets you prove it once.",
    },
    hero: {
      badge: "For CS Students",
      headline: "Stop re-proving",
      gradientText: "you can code.",
      subheadline:
        "You've aced algorithms, built distributed systems, and shipped production code. But every company still makes you reverse a linked list on a whiteboard. SkillPass lets you take proctored coding, system design, and algorithm assessments once — then share verified results with everyone.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Coding Assessments", href: "/assessments" },
      trustLine: "CS students from 200+ programs trust SkillPass",
    },
    problem: {
      badge: "The Grind Is Broken",
      headline: "You know this stuff.",
      gradientText: "You keep proving it.",
      description:
        "The CS job search is uniquely absurd. You have a degree in the exact thing companies need, yet every company makes you prove it from scratch. Online assessment, phone screen, technical screen, on-site with four rounds of coding. Times ten companies. You're solving the same BFS problem for the fourteenth time.",
      stats: [
        {
          value: "14",
          label: "Average technical interviews per job search",
          description:
            "CS students go through more redundant technical screening than any other major. It's a massive time tax.",
        },
        {
          value: "300+",
          label: "LeetCode problems solved by average CS grad",
          description:
            "That's hundreds of hours spent on interview prep for skills you already demonstrated in coursework.",
        },
        {
          value: "6wk",
          label: "Average LeetCode grind before interviews",
          description:
            "Six weeks of your life, re-learning things you already know, in a format you'll never use at work.",
        },
      ],
    },
    solution: {
      badge: "Prove It Once",
      headline: "One test. Every company.",
      description:
        "SkillPass proctored assessments cover the exact skills companies screen for: algorithms, data structures, system design, and coding fluency. Take each assessment once. Your verified results are shared with every employer you apply to. No more redundant screening rounds.",
      features: [
        {
          title: "Algorithms & Data Structures",
          description:
            "Proctored, timed, webcam-monitored. Covers the same complexity analysis, tree traversal, and graph problems every company tests — done once.",
        },
        {
          title: "System Design Assessment",
          description:
            "Architecture questions scored by rubric: scalability, trade-offs, component design. Shows you can think about real systems, not just algorithms.",
        },
        {
          title: "CS Course Rigor Scoring",
          description:
            "Your grades in 6.006, 15-213, or CS 161 are scored at their actual difficulty. Not all CS programs are equal, and your calibration reflects that.",
        },
        {
          title: "Peer Coding References",
          description:
            "Structured references from project partners, TAs, and professors on technical ability, collaboration, and code quality.",
        },
      ],
    },
    proof: {
      headline: "CS students who stopped grinding",
      testimonial: {
        quote:
          "I was doing 3 LeetCode problems a day for two months. Built my SkillPass profile instead — 763 SkillScore with an 810 on algorithms. Two companies accepted my SkillPass results in lieu of their first-round coding screen. Saved me probably 40 hours of redundant interviews.",
        name: "Kevin L.",
        role: "UIUC '25, Computer Science",
        detail: "SkillScore: 763",
      },
      stats: [
        { value: "763", label: "Avg CS student SkillScore" },
        { value: "40hrs", label: "Saved on interview prep" },
      ],
    },
    cta: {
      headline: "You already know how to code.",
      gradientText: "Stop proving it fourteen times.",
      description:
        "Take the assessments once. Share verified results everywhere. Free for every CS student.",
      primaryCta: { text: "Start Your Assessments", href: "/signup" },
      secondaryCta: { text: "See Assessment Details", href: "/assessments" },
    },
  },

  // 19. Engineering Students
  {
    slug: "engineering-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Engineering Students | Problem-Solving Skills, Calibrated",
      description:
        "Engineering rigor is hard to convey on a resume. SkillPass calibrates your coursework, quantifies your problem-solving ability, and scores it all in one profile.",
    },
    hero: {
      badge: "For Engineering Students",
      headline: "Problem-solving skills,",
      gradientText: "calibrated.",
      subheadline:
        "Your engineering degree taught you to decompose problems, model systems, and think in constraints. That's incredibly valuable — but a resume can't convey it. Your calibrated SkillScore can.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Engineering Scoring", href: "/how-it-works" },
      trustLine: "Engineering students from 150+ accredited programs",
    },
    problem: {
      badge: "Lost Rigor",
      headline: "Your degree was brutal.",
      gradientText: "Your resume can't show that.",
      description:
        "Engineering students take some of the hardest coursework in any university. Thermodynamics, controls, signals — you survived a curriculum designed to break people. But when you apply for jobs, your resume looks the same as every other STEM grad. The rigor doesn't translate to a bullet point.",
      stats: [
        {
          value: "42%",
          label: "Engineering grads feel undervalued in hiring",
          description:
            "Nearly half of engineering graduates report that the hiring process didn't adequately evaluate their technical depth.",
        },
        {
          value: "3.2",
          label: "Average engineering GPA (lower than most majors)",
          description:
            "Engineering GPAs are lower because the courses are harder. But ATS systems treat a 3.2 in ME the same as a 3.2 in anything else.",
        },
        {
          value: "5+",
          label: "Interview rounds for top engineering roles",
          description:
            "Technical engineering roles have some of the longest interview processes. Each company starts from zero.",
        },
      ],
    },
    solution: {
      badge: "Rigor, Quantified",
      headline: "Engineering difficulty, properly weighted.",
      description:
        "SkillPass scores your engineering coursework at its actual difficulty: fluid dynamics at MIT, structural analysis at Georgia Tech, circuits at Purdue — each calibrated for course rigor and institutional tier. Add proctored problem-solving assessments and structured references, and employers see the engineer you actually are.",
      features: [
        {
          title: "Course-Level Rigor Scoring",
          description:
            "Your grade in thermodynamics is weighted against the difficulty of thermodynamics. A B+ in that class isn't a B+ in basket weaving.",
        },
        {
          title: "Quantitative Assessments",
          description:
            "Data analysis, system modeling, and problem decomposition — proctored tests that measure applied engineering thinking.",
        },
        {
          title: "Lab and Project References",
          description:
            "Structured references from lab partners, project teams, and faculty advisors. Collaboration, technical depth, and reliability all scored.",
        },
        {
          title: "Cross-Discipline Calibration",
          description:
            "Mechanical, electrical, civil, chemical, aero — each discipline calibrated within its own difficulty context. Apples to apples.",
        },
      ],
    },
    proof: {
      headline: "Engineers, properly scored",
      testimonial: {
        quote:
          "I had a 3.1 in mechanical engineering at Purdue and kept getting filtered out by 3.5 GPA cutoffs set by companies that didn't understand engineering grading. My SkillScore was 742 because SkillPass actually weighted my course difficulty. Night and day difference in callbacks.",
        name: "Sarah K.",
        role: "Purdue '25, Mechanical Engineering",
        detail: "SkillScore: 742",
      },
      stats: [
        { value: "742", label: "Avg engineering SkillScore" },
        { value: "3x", label: "More accurate than GPA alone" },
      ],
    },
    cta: {
      headline: "Your degree was the hard part.",
      gradientText: "Getting credit for it shouldn't be.",
      description:
        "Build your calibrated profile. Free for every engineering student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Engineering Calibration", href: "/how-it-works" },
    },
  },

  // 20. Business Students
  {
    slug: "business-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Business Students | Classroom to Career with Verified Creds",
      description:
        "Business degrees are common. Verified business skills aren't. SkillPass gives you proctored assessments and structured references that set you apart.",
    },
    hero: {
      badge: "For Business Students",
      headline: "Classroom to boardroom",
      gradientText: "with verified credentials.",
      subheadline:
        "A business degree is one of the most common degrees in America. Which means you need something to differentiate yourself. SkillPass scores your analytical ability, leadership, and business acumen with verified, proctored data employers actually use.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Business Assessments", href: "/assessments" },
      trustLine: "Business students from 180+ programs",
    },
    problem: {
      badge: "The Saturation Problem",
      headline: "Everyone has a business degree.",
      gradientText: "That's the problem.",
      description:
        "Business is the most awarded bachelor's degree in the US. You're competing against hundreds of thousands of graduates with similar coursework, similar internship titles, and similar resume formatting. When everyone looks the same on paper, nobody stands out.",
      stats: [
        {
          value: "390K",
          label: "Business degrees awarded annually",
          description:
            "Nearly 400,000 people graduate with a business degree every year. Differentiation isn't optional — it's survival.",
        },
        {
          value: "67%",
          label: "Hiring managers say business resumes 'all look alike'",
          description:
            "When two-thirds of recruiters can't tell candidates apart, you need a signal that cuts through.",
        },
        {
          value: "4.3",
          label: "Average applications per interview for business grads",
          description:
            "High competition means low conversion rates. Every application is a lottery ticket.",
        },
      ],
    },
    solution: {
      badge: "Differentiated",
      headline: "Same degree. Different signal.",
      description:
        "SkillPass differentiates you from 390,000 other business grads with verified data: calibrated coursework scores, proctored assessments in case analysis and data interpretation, and structured peer references. Your SkillScore is a competitive edge no resume template can match.",
      features: [
        {
          title: "Case Analysis Assessment",
          description:
            "Market sizing, profitability analysis, operational strategy — proctored and scored. Show your business reasoning, not just your GPA.",
        },
        {
          title: "Data Analysis Skills",
          description:
            "Excel modeling, data interpretation, financial analysis — assessed and verified. Employers see applied analytical ability.",
        },
        {
          title: "Leadership & Communication",
          description:
            "Structured references from project teams, club leadership, and internship supervisors. Eight dimensions, all scored.",
        },
        {
          title: "Program-Calibrated Grades",
          description:
            "Your grades at Kelley, McCombs, or Stern are weighted against the actual difficulty of each program.",
        },
      ],
    },
    proof: {
      headline: "Standing out from 390K graduates",
      testimonial: {
        quote:
          "I graduated from Indiana Kelley with a solid GPA but my resume looked like every other business grad's. Built my SkillPass profile — case analysis, data assessment, leadership references — scored 727. An employer told me they found me specifically because I was the only candidate with verified analytical scores.",
        name: "Taylor M.",
        role: "Indiana Kelley '25, Business",
        detail: "SkillScore: 727",
      },
      stats: [
        { value: "727", label: "Avg business SkillScore" },
        { value: "60%", label: "Faster to differentiated candidacy" },
      ],
    },
    cta: {
      headline: "390,000 graduates.",
      gradientText: "One verified score.",
      description:
        "Differentiate yourself with data. Free for every business student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Assessments", href: "/assessments" },
    },
  },

  // 21. Finance Students
  {
    slug: "finance-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Finance Students | Modeling & Analysis Skills, Verified",
      description:
        "Financial modeling, valuation, data analysis — verified and scored. SkillPass gives finance students a SkillScore that replaces the modeling test.",
    },
    hero: {
      badge: "For Finance Students",
      headline: "Modeling and analysis skills,",
      gradientText: "verified.",
      subheadline:
        "Every IB and PE interview includes a modeling test. You've built dozens of DCFs, comps, and LBO models. SkillPass lets you verify those skills once — proctored, scored, and shareable with every firm you apply to.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Finance Assessments", href: "/assessments" },
      trustLine: "Finance students from top target and non-target schools",
    },
    problem: {
      badge: "The Modeling Gauntlet",
      headline: "You've built the model.",
      gradientText: "Build it again. And again.",
      description:
        "Finance recruiting is a specific kind of grind: networking events, informational interviews, superday prep, modeling tests, case studies. Every bank wants their own assessment. You're building the same three-statement model for the fifth firm this recruiting cycle.",
      stats: [
        {
          value: "8",
          label: "Average modeling tests per IB recruiting cycle",
          description:
            "Each bank requires its own technical assessment, even though they're all testing the same skills.",
        },
        {
          value: "$3K",
          label: "Spent on modeling courses and prep",
          description:
            "Wall Street Prep, Breaking Into Wall Street, Mergers & Inquisitions — the prep industry is a tax on finance students.",
        },
        {
          value: "82%",
          label: "Finance students say networking matters more than skill",
          description:
            "The perception that connections trump competence is pervasive — and it disadvantages skilled students without networks.",
        },
      ],
    },
    solution: {
      badge: "Test Once, Bank Everywhere",
      headline: "One verified assessment. Every firm.",
      description:
        "SkillPass financial assessments cover DCF modeling, comparable analysis, LBO mechanics, and data interpretation — all proctored and verified. Take them once, share with every bank, fund, and firm. Your SkillScore replaces the initial modeling screen.",
      features: [
        {
          title: "Financial Modeling Assessment",
          description:
            "Three-statement models, DCF, comps, LBO basics — proctored, timed, and scored against a standardized rubric.",
        },
        {
          title: "Data Analysis & Interpretation",
          description:
            "Quantitative reasoning, financial data interpretation, and statistical analysis. Verified analytical ability beyond Excel shortcuts.",
        },
        {
          title: "Target-School Calibration",
          description:
            "Whether you're at Wharton or a non-target, your grades are calibrated against program rigor. Non-target with strong scores competes with anyone.",
        },
        {
          title: "Professional References",
          description:
            "Structured references from internship supervisors, finance professors, and project partners. Reliability, analytical depth, and work ethic — all scored.",
        },
      ],
    },
    proof: {
      headline: "Finance students, verified",
      testimonial: {
        quote:
          "Non-target school, no IB connections. I built my SkillPass profile with strong modeling assessment scores — 790 on the finance assessment — and a boutique PE firm reached out after finding me in their search. They said my verified scores saved them a screening round.",
        name: "Ryan P.",
        role: "University of Florida '25, Finance",
        detail: "SkillScore: 748",
      },
      stats: [
        { value: "748", label: "Avg finance SkillScore" },
        { value: "$12K", label: "Employer savings per hire" },
      ],
    },
    cta: {
      headline: "You've built the model.",
      gradientText: "Now verify it once.",
      description:
        "Proctored financial assessments. Verified scores. One profile for every firm. Free.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Finance Assessments", href: "/assessments" },
    },
  },

  // 22. Data Science Students
  {
    slug: "data-science-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Data Science Students | One Verified Portfolio",
      description:
        "GitHub repos and Kaggle competitions are noise. SkillPass gives data science students one verified, proctored profile that every employer trusts.",
    },
    hero: {
      badge: "For Data Science Students",
      headline: "One verified portfolio",
      gradientText: "for every employer.",
      subheadline:
        "You've got a GitHub full of notebooks, a Kaggle profile, course certificates, and a portfolio site. Nobody's looking at all of that. SkillPass consolidates your data skills into one verified score backed by proctored assessments — not self-reported projects.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Data Assessments", href: "/assessments" },
      trustLine: "Data science students from 120+ programs",
    },
    problem: {
      badge: "The Portfolio Sprawl",
      headline: "Too many signals. No clarity.",
      description:
        "Data science students collect credentials like trading cards. Coursera certificates, Kaggle rankings, GitHub stars, Tableau dashboards. But none of it is verified, none of it is standardized, and recruiters don't know which signals to trust. You've got data everywhere and credibility nowhere.",
      stats: [
        {
          value: "7",
          label: "Average portfolio pieces per data science grad",
          description:
            "Seven different items recruiters would need to review to understand your skills. Most will review zero.",
        },
        {
          value: "23%",
          label: "Recruiters actually review GitHub profiles",
          description:
            "Less than a quarter of hiring managers look at your code repos. The portfolio you spent weeks building? Largely unread.",
        },
        {
          value: "89%",
          label: "Data science job postings include a take-home",
          description:
            "Nearly every data science role requires a take-home assignment, regardless of what else you've shown. The redundancy is exhausting.",
        },
      ],
    },
    solution: {
      badge: "Verified, Consolidated",
      headline: "One profile. All your data skills.",
      description:
        "SkillPass replaces your scattered portfolio with one verified profile: proctored data analysis assessments, calibrated coursework in statistics and ML, and structured references from collaborators and professors. Employers trust a verified score more than an unverified Kaggle notebook.",
      features: [
        {
          title: "Data Analysis Assessment",
          description:
            "SQL, Python/R, statistical analysis, data visualization — proctored and scored. Verified ability, not self-reported proficiency.",
        },
        {
          title: "ML & Statistics Calibration",
          description:
            "Your coursework in machine learning, statistics, and probability scored at its actual difficulty. An A in Stanford's CS229 is weighted accordingly.",
        },
        {
          title: "End-to-End Skill Proof",
          description:
            "Data cleaning, analysis, visualization, and communication — the full pipeline, assessed and verified in one place.",
        },
        {
          title: "Peer and Professor References",
          description:
            "Structured references on technical ability, collaboration, and communication from people who've seen your actual work.",
        },
      ],
    },
    proof: {
      headline: "Data science, verified",
      testimonial: {
        quote:
          "I had 12 Kaggle notebooks, 3 Coursera certificates, and a portfolio site. Nobody was reviewing all of that. My SkillPass data analysis score was 782 — proctored and verified — and two companies told me it replaced their take-home assignment. That saved me probably 20 hours.",
        name: "Lisa C.",
        role: "UC San Diego '25, Data Science",
        detail: "SkillScore: 755",
      },
      stats: [
        { value: "755", label: "Avg data science SkillScore" },
        { value: "20hrs", label: "Saved on take-homes" },
      ],
    },
    cta: {
      headline: "Stop maintaining seven portfolios.",
      gradientText: "Verify it once.",
      description:
        "One profile, all your data skills, verified. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Data Assessments", href: "/assessments" },
    },
  },

  // 23. Design Students
  {
    slug: "design-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Design Students | UX Skills Beyond the Portfolio",
      description:
        "Your portfolio shows your taste. SkillPass scores your process, research ability, collaboration, and design thinking — the skills that actually get you hired.",
    },
    hero: {
      badge: "For Design Students",
      headline: "UX skills",
      gradientText: "beyond the portfolio.",
      subheadline:
        "Every design student has a Behance or Figma portfolio. Recruiters scroll through them in 30 seconds. Your SkillPass profile adds what portfolios can't: verified research skills, collaboration scores, and structured peer feedback on your actual design process.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Design Scoring", href: "/how-it-works" },
      trustLine: "Design students from 80+ programs",
    },
    problem: {
      badge: "The Portfolio Ceiling",
      headline: "Beautiful portfolio.",
      gradientText: "Still no callbacks.",
      description:
        "Design hiring has a contradiction: everyone tells you 'portfolio is everything,' but hiring managers want to know about your process, your research skills, your ability to collaborate with engineers, and your communication. A polished Figma file doesn't show any of that.",
      stats: [
        {
          value: "30sec",
          label: "Time spent on average portfolio review",
          description:
            "Recruiters skim your portfolio in under a minute. They can't assess process, thinking, or collaboration speed.",
        },
        {
          value: "78%",
          label: "Design hiring managers value process over output",
          description:
            "The vast majority say they care more about how you think than what the final design looks like. Portfolios show the opposite.",
        },
        {
          value: "5",
          label: "Average portfolio rounds in design interviews",
          description:
            "Present your portfolio, do a whiteboard exercise, do a take-home, present the take-home, final presentation. It's a marathon.",
        },
      ],
    },
    solution: {
      badge: "Process + Output",
      headline: "Show the thinking behind the pixels.",
      description:
        "SkillPass scores what portfolios can't: design process, user research ability, cross-functional collaboration, and communication skills. Combined with calibrated coursework in HCI, interaction design, and visual design, your SkillScore gives hiring managers the full picture.",
      features: [
        {
          title: "Design Thinking Assessment",
          description:
            "Problem framing, user research methodology, and design rationale — assessed and scored to show your process, not just your final output.",
        },
        {
          title: "Collaboration & Communication",
          description:
            "Structured references from engineers, PMs, and fellow designers rate your cross-functional skills. Design is a team sport.",
        },
        {
          title: "HCI Coursework Calibration",
          description:
            "Your interaction design, user research, and visual design coursework calibrated against program difficulty and institutional rigor.",
        },
        {
          title: "Writing Assessment",
          description:
            "UX writing, research documentation, design briefs — your ability to communicate design decisions clearly, scored and verified.",
        },
      ],
    },
    proof: {
      headline: "Design skills, fully profiled",
      testimonial: {
        quote:
          "My portfolio was good but so was everyone else's. My SkillPass profile showed my research methodology scores, my collaboration references from engineering partners, and my communication ability. A product design lead told me it was the first time she could evaluate a designer without a portfolio presentation.",
        name: "Ava J.",
        role: "RISD '25, Industrial Design",
        detail: "SkillScore: 734",
      },
      stats: [
        { value: "734", label: "Avg design SkillScore" },
        { value: "60%", label: "Faster design hiring" },
      ],
    },
    cta: {
      headline: "Your portfolio shows the work.",
      gradientText: "Your SkillScore shows the thinker.",
      description:
        "Add verified process and collaboration data to your design profile. Free.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Design Assessments", href: "/assessments" },
    },
  },

  // 24. Marketing Students
  {
    slug: "marketing-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Marketing Students | Analytics + Creativity, Quantified",
      description:
        "Marketing is both art and science. SkillPass scores your analytical ability, creative thinking, and communication — giving you a SkillScore that proves both sides.",
    },
    hero: {
      badge: "For Marketing Students",
      headline: "Analytics + creativity,",
      gradientText: "quantified.",
      subheadline:
        "Marketing has evolved from Mad Men vibes to SQL queries and A/B tests. You're expected to be creative AND analytical. Your SkillPass profile verifies both — with proctored assessments, calibrated grades, and structured references.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Marketing Scoring", href: "/how-it-works" },
    },
    problem: {
      badge: "The Identity Crisis",
      headline: "Are you creative or analytical?",
      gradientText: "Yes.",
      description:
        "Marketing students face a hiring market that doesn't know what it wants. Some roles want data skills, others want creative chops, most want both but can't articulate it. Your resume says 'marketing' and recruiters project whatever they're looking for — or not looking for — onto you.",
      stats: [
        {
          value: "54%",
          label: "Marketing roles now require analytics skills",
          description:
            "Over half of marketing job postings list SQL, Python, or data visualization as requirements. The game changed.",
        },
        {
          value: "380K",
          label: "Marketing degrees awarded annually",
          description:
            "Marketing and business are two of the most saturated degree fields. Standing out requires more than coursework.",
        },
        {
          value: "71%",
          label: "Marketing grads feel 'not technical enough'",
          description:
            "Most marketing graduates report imposter syndrome around analytics — even when they have the skills.",
        },
      ],
    },
    solution: {
      badge: "Both Sides Verified",
      headline: "Creative thinking. Analytical rigor. Both verified.",
      description:
        "SkillPass assesses both sides of modern marketing: data analysis and interpretation alongside writing, communication, and creative reasoning. Your SkillScore captures the full-stack marketing skillset employers actually need.",
      features: [
        {
          title: "Data Analysis Assessment",
          description:
            "SQL, spreadsheet modeling, data interpretation — proctored and scored. Prove you can read the dashboard, not just make it pretty.",
        },
        {
          title: "Writing & Communication",
          description:
            "Marketing writing, content strategy, and persuasive communication — assessed and verified. Your voice, measured.",
        },
        {
          title: "Marketing Coursework Calibration",
          description:
            "Consumer behavior, market research, digital marketing — your grades calibrated by program tier and course difficulty.",
        },
        {
          title: "Campaign and Project References",
          description:
            "Structured references from internship supervisors and project team members on creativity, execution, and collaboration.",
        },
      ],
    },
    proof: {
      headline: "Marketing students, fully scored",
      testimonial: {
        quote:
          "I kept getting pigeonholed as 'just creative' in interviews. My SkillPass data analysis score was 720, which is higher than some DS students I know. A growth marketing team saw my profile and said it was the first time a marketing candidate came with verified analytics proof.",
        name: "Jordan T.",
        role: "USC '25, Marketing",
        detail: "SkillScore: 714",
      },
      stats: [
        { value: "714", label: "Avg marketing SkillScore" },
        { value: "2x", label: "Faster screening for employers" },
      ],
    },
    cta: {
      headline: "Creative and analytical.",
      gradientText: "Prove both.",
      description:
        "Build your full-stack marketing profile. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Assessments", href: "/assessments" },
    },
  },

  // 25. Liberal Arts Students
  {
    slug: "liberal-arts-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Liberal Arts Students | Critical Thinking Is a Skill",
      description:
        "Critical thinking, writing, analysis — these are valuable skills. SkillPass gives liberal arts students a verified score that proves what your major taught you.",
    },
    hero: {
      badge: "For Liberal Arts Students",
      headline: "Critical thinking is a skill.",
      gradientText: "Prove it.",
      subheadline:
        "You spent four years learning to read carefully, think critically, argue precisely, and write clearly. Those are exactly the skills employers say they want. But when your major says 'English' or 'Political Science,' they don't see it. SkillPass makes it visible.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See How Scoring Works", href: "/how-it-works" },
      trustLine: "Liberal arts students from 200+ institutions",
    },
    problem: {
      badge: "The Major Bias",
      headline: "They want your skills.",
      gradientText: "They don't want your major.",
      description:
        "Employers say they value critical thinking, communication, and analytical reasoning. Then they filter resumes by major, screen for 'technical skills,' and pass on the philosophy grad who can outwrite and outthink half the STEM applicants. The bias is real and it's costing both sides.",
      stats: [
        {
          value: "93%",
          label: "Employers say critical thinking matters",
          description:
            "Almost every employer says they want it. Almost none of them know how to screen for it. That's the gap.",
        },
        {
          value: "47%",
          label: "Liberal arts grads underemployed at graduation",
          description:
            "Nearly half end up in roles that don't require any degree. Not because they lack ability — because the hiring funnel is broken for their major.",
        },
        {
          value: "3.1x",
          label: "More applications per interview vs. STEM",
          description:
            "Liberal arts students send three times as many applications to get the same number of interviews as STEM peers.",
        },
      ],
    },
    solution: {
      badge: "Skills Quantified",
      headline: "Your skills are real. Now they're measurable.",
      description:
        "SkillPass scores the skills liberal arts actually teaches: analytical reasoning, written communication, structured argumentation, and intellectual rigor. Your SkillScore isn't about your major name — it's about your demonstrated ability across four sub-scores.",
      features: [
        {
          title: "Writing Assessment",
          description:
            "Analytical writing, persuasive communication, and clarity of thought — proctored and scored. The skill most employers say they want and can't find.",
        },
        {
          title: "General Mental Ability (GMA)",
          description:
            "Abstract reasoning, pattern recognition, and cognitive ability — the single best predictor of job performance across all fields.",
        },
        {
          title: "Course Rigor Calibration",
          description:
            "Your seminar on Hegel was harder than most business electives. SkillPass calibrates your grades against actual course difficulty.",
        },
        {
          title: "Multi-Dimensional References",
          description:
            "Structured references on communication, critical thinking, reliability, and intellectual curiosity from professors and supervisors.",
        },
      ],
    },
    proof: {
      headline: "Liberal arts, quantified",
      testimonial: {
        quote:
          "Philosophy major. Every recruiter asked 'what do you want to DO with that?' My SkillScore was 729 — strong writing assessment, high GMA, excellent peer signal. A consulting firm found my profile and said my analytical reasoning scores were exactly what they look for. Philosophy, it turns out, is great training for strategy.",
        name: "Emma R.",
        role: "Williams '25, Philosophy",
        detail: "SkillScore: 729",
      },
      stats: [
        { value: "729", label: "Avg liberal arts SkillScore" },
        { value: "93%", label: "Employers want these skills" },
      ],
    },
    cta: {
      headline: "They want critical thinkers.",
      gradientText: "Show them one.",
      description:
        "Prove what your education actually taught you. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Writing Assessments", href: "/assessments" },
    },
  },

  // 26. Math Students
  {
    slug: "math-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Math Students | Quantitative Rigor, Translated",
      description:
        "Abstract algebra doesn't have a LinkedIn endorsement. SkillPass translates your mathematical rigor into a verified score that quantitative employers understand.",
    },
    hero: {
      badge: "For Math Students",
      headline: "Quantitative rigor,",
      gradientText: "translated.",
      subheadline:
        "You can prove theorems, think in abstractions, and solve problems most people can't even formulate. The problem is, employers don't know what to do with a math degree unless it says 'applied.' Your SkillScore translates pure rigor into a language hiring managers speak.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Quant Scoring", href: "/how-it-works" },
      trustLine: "Math students from 100+ programs",
    },
    problem: {
      badge: "The Abstraction Penalty",
      headline: "You think in proofs.",
      gradientText: "They think in resumes.",
      description:
        "Pure math graduates have some of the strongest reasoning abilities of any degree program. But 'proved a theorem about topological spaces' doesn't map to any checkbox on a job application. You're incredibly valuable to quant firms, tech companies, and consulting — if they can figure out what you do.",
      stats: [
        {
          value: "62%",
          label: "Math grads say their degree is 'undervalued' in hiring",
          description:
            "Most math graduates feel that employers don't understand the practical value of mathematical training.",
        },
        {
          value: "5x",
          label: "Demand-supply gap for quant skills",
          description:
            "Companies need quantitative thinkers desperately but struggle to identify and recruit them from math programs.",
        },
        {
          value: "34%",
          label: "Math grads end up in roles below their capacity",
          description:
            "A third of math graduates take jobs that don't use their quantitative skills — a massive waste of training.",
        },
      ],
    },
    solution: {
      badge: "Rigor Made Legible",
      headline: "Your math, their language.",
      description:
        "SkillPass calibrates your coursework in analysis, algebra, and probability at its true difficulty, then adds proctored assessments in data analysis, quantitative reasoning, and applied problem-solving. The result is a SkillScore that screams 'quant-ready' to every firm that needs one.",
      features: [
        {
          title: "Advanced Math Calibration",
          description:
            "Real analysis, abstract algebra, topology — your coursework scored at its actual difficulty level. These aren't gen-ed math classes and your score reflects that.",
        },
        {
          title: "Quantitative Reasoning Assessment",
          description:
            "Applied math, statistical inference, and quantitative problem-solving — proctored tests that bridge the gap between pure math and industry.",
        },
        {
          title: "Data Analysis Skills",
          description:
            "Programming, data manipulation, and statistical analysis — assessed to show you can apply mathematical thinking to real data.",
        },
        {
          title: "GMA and Problem-Solving",
          description:
            "General mental ability testing where math students consistently score in the top percentiles. Let the data prove what you already know.",
        },
      ],
    },
    proof: {
      headline: "Math students, quantified",
      testimonial: {
        quote:
          "I studied pure math at UChicago. Beautiful subject, terrible job-search keyword. My SkillScore was 771 — my GMA and quantitative reasoning scores were in the 95th percentile. A quant trading firm found my profile in their search. They said my scores were exactly the signal they use to find non-obvious candidates.",
        name: "Alex M.",
        role: "UChicago '25, Mathematics",
        detail: "SkillScore: 771",
      },
      stats: [
        { value: "771", label: "Avg math SkillScore" },
        { value: "95th", label: "Percentile on quant reasoning" },
      ],
    },
    cta: {
      headline: "You deal in proofs.",
      gradientText: "Here's yours.",
      description:
        "Translate your quantitative rigor into a score employers use. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Quant Assessments", href: "/assessments" },
    },
  },

  // 27. Economics Students
  {
    slug: "economics-students",
    category: "students-by-major",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Econ Students | Theory to Industry with Proof",
      description:
        "Econometrics, causal inference, and policy analysis are marketable skills. SkillPass verifies your analytical ability so employers see the economist, not just the degree.",
    },
    hero: {
      badge: "For Economics Students",
      headline: "Theory to industry",
      gradientText: "with proof.",
      subheadline:
        "You learned econometrics, game theory, and causal inference — skills tech companies, consulting firms, and banks all want. But your resume says 'economics' and recruiters don't know if that means you can run a regression or just read a textbook. Your SkillScore removes the ambiguity.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Econ-Relevant Assessments", href: "/assessments" },
      trustLine: "Econ students from 150+ programs",
    },
    problem: {
      badge: "The Econ Ambiguity",
      headline: "Econ means ten different things",
      gradientText: "to ten different recruiters.",
      description:
        "Economics sits in an awkward middle ground: too quantitative for humanities recruiters, not quantitative enough for quant firms, too theoretical for business roles. Everyone interprets your degree differently, and you spend every interview explaining what your program actually taught you.",
      stats: [
        {
          value: "78%",
          label: "Econ students say their skills are misunderstood",
          description:
            "Most econ graduates report that employers don't realize they can do regression analysis, data work, and quantitative modeling.",
        },
        {
          value: "6",
          label: "Different career paths econ grads pursue",
          description:
            "Finance, consulting, tech, policy, research, data science — econ students scatter across industries, making 'econ' hard to pin down.",
        },
        {
          value: "43%",
          label: "Econ students feel 'lost' in career search",
          description:
            "The versatility of an econ degree is both a strength and a curse. Too many options, too little signal.",
        },
      ],
    },
    solution: {
      badge: "Clarity Over Ambiguity",
      headline: "Let the data speak for you.",
      description:
        "SkillPass scores your econometrics coursework, quantitative reasoning, and analytical depth. Combined with data analysis assessments and structured references, your SkillScore tells employers exactly what kind of economist you are — without the 10-minute explanation.",
      features: [
        {
          title: "Econometrics Calibration",
          description:
            "Your grades in econometrics, statistics, and quantitative methods calibrated by course difficulty and program tier.",
        },
        {
          title: "Data Analysis Assessment",
          description:
            "Regression, data interpretation, statistical reasoning — proctored and scored. Show you can do the work, not just discuss the theory.",
        },
        {
          title: "Case & Consulting Assessment",
          description:
            "Market analysis, strategic reasoning, and quantitative problem-solving — for econ students targeting consulting or strategy roles.",
        },
        {
          title: "Quantitative References",
          description:
            "Structured references from econ professors, research advisors, and internship supervisors — with emphasis on analytical ability.",
        },
      ],
    },
    proof: {
      headline: "Econ grads, clarified",
      testimonial: {
        quote:
          "Every consulting interview started with 'so you studied econ, what does that mean you can do?' My SkillScore — 739, strong on data analysis and case consulting — answered that question before I walked in the room. Got an offer at a strategy firm that said my profile was 'refreshingly clear.'",
        name: "Nora S.",
        role: "Duke '25, Economics",
        detail: "SkillScore: 739",
      },
      stats: [
        { value: "739", label: "Avg econ SkillScore" },
        { value: "60%", label: "Faster to targeted role" },
      ],
    },
    cta: {
      headline: "Stop explaining your degree.",
      gradientText: "Start showing your score.",
      description:
        "Build your verified econ profile. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Econ Assessments", href: "/assessments" },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CATEGORY C — BY GOAL (7 pages)
  // ─────────────────────────────────────────────────────────────────────────────

  // 28. First Internship
  {
    slug: "first-internship",
    category: "students-by-goal",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Your First Internship | No Experience? No Problem.",
      description:
        "Can't get experience without experience? SkillPass gives you a verified SkillScore that replaces the 'experience required' catch-22 with actual proof of ability.",
    },
    hero: {
      badge: "For Internship Seekers",
      headline: "No experience?",
      gradientText: "Let verified skills be your experience.",
      subheadline:
        "Every internship wants experience. You need an internship to get experience. It's the oldest catch-22 in careers. SkillPass breaks the cycle — your verified SkillScore shows what you CAN do, even if you haven't done it professionally yet.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Thousands of students used SkillPass to land their first role",
    },
    problem: {
      badge: "The Experience Trap",
      headline: "Need experience to get experience.",
      gradientText: "The oldest trap in hiring.",
      description:
        "You're a sophomore or junior with a solid GPA, relevant coursework, and genuine skill. But your resume has no 'Experience' section because... you don't have any. Employers say they want potential. Their ATS systems say they want experience. You're caught in between.",
      stats: [
        {
          value: "65%",
          label: "Internship postings require prior experience",
          description:
            "Two-thirds of internships — which are supposed to be your first experience — require you to already have experience. Make it make sense.",
        },
        {
          value: "180",
          label: "Average applications per internship offer",
          description:
            "First-time applicants spray and pray because they have nothing to differentiate themselves. It's brutal.",
        },
        {
          value: "12%",
          label: "Callback rate for students with no work experience",
          description:
            "Without professional experience, your resume barely gets looked at. You need a different signal.",
        },
      ],
    },
    solution: {
      badge: "Ability Over Experience",
      headline: "Show what you can do, not what you've done.",
      description:
        "SkillPass replaces the empty 'Experience' section with something better: proctored assessments that prove your skills, calibrated coursework that shows your academic preparation, and structured references from professors and project teammates. You don't need experience when you have verified ability.",
      features: [
        {
          title: "Skill Assessments as Experience",
          description:
            "Proctored coding, analysis, writing, and reasoning tests give employers concrete evidence of your capability — no previous job required.",
        },
        {
          title: "Coursework That Counts",
          description:
            "Your calibrated grades show preparation for the role. Advanced coursework in relevant fields is weighted accordingly.",
        },
        {
          title: "Professor & Peer References",
          description:
            "Can't get a manager reference? Professor and project partner references, structured across 8 dimensions, fill the gap.",
        },
        {
          title: "Discoverable by Employers",
          description:
            "Employers on SkillPass search for candidates by score and skills. They'll find you before you even apply.",
        },
      ],
    },
    proof: {
      headline: "First internship, first SkillScore",
      testimonial: {
        quote:
          "Zero work experience. Sophomore at UT Austin. Applied to 120 internships with no callbacks. Built my SkillPass profile, scored 698, and three companies reached out within two weeks. One hiring manager said my coding assessment score was more useful than any resume he'd seen from someone at my level.",
        name: "Jason L.",
        role: "UT Austin '27, CS Sophomore",
        detail: "SkillScore: 698",
      },
      stats: [
        { value: "698", label: "Avg first-internship score" },
        { value: "3x", label: "More callbacks" },
      ],
    },
    cta: {
      headline: "Break the experience trap.",
      gradientText: "Start with skills.",
      description:
        "Build your profile now. Even before your first internship. Especially before your first internship. Free.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
  },

  // 29. Campus to Career
  {
    slug: "campus-to-career",
    category: "students-by-goal",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Campus-to-Career | One Link Replaces 200 Applications",
      description:
        "While others send 200 applications, you send one link. SkillPass gives graduating seniors a verified profile that lets employers come to you.",
    },
    hero: {
      badge: "For Graduating Seniors",
      headline: "While others send 200 apps,",
      gradientText: "you send one link.",
      subheadline:
        "The senior year job search is a full-time job. Customizing resumes, writing cover letters, filling out application forms — it's exhausting. Your SkillPass profile is one verified link: skillpass.io/yourname. Share it everywhere. Let employers find you.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See a Sample Profile", href: "/demo" },
      trustLine: "Graduating seniors across 300+ universities",
    },
    problem: {
      badge: "The Application Grind",
      headline: "200 applications.",
      gradientText: "Still waiting.",
      description:
        "Senior year should be about finishing strong. Instead, you're spending 20+ hours a week applying to jobs: customizing resumes, writing cover letters, navigating company portals. It's the most inefficient process in the professional world and it treats every application like you're starting from scratch.",
      stats: [
        {
          value: "200+",
          label: "Average applications per graduating senior",
          description:
            "Two hundred applications, each taking 20-40 minutes. That's over 100 hours of your last semester.",
        },
        {
          value: "87%",
          label: "Applications never seen by a human",
          description:
            "The vast majority of your carefully written applications get filtered out by software before any person reads them.",
        },
        {
          value: "22min",
          label: "Average time per job application",
          description:
            "Customizing, uploading, filling out redundant forms — nearly half an hour per application, most of which go nowhere.",
        },
      ],
    },
    solution: {
      badge: "One Profile, Every Opportunity",
      headline: "Apply with a link. Get found by a score.",
      description:
        "SkillPass replaces the 200-application grind with one verified profile. Your SkillScore, calibrated coursework, proctored assessments, and structured references — all at skillpass.io/yourname. Share it on LinkedIn, attach it to emails, or let employers find you in their search.",
      features: [
        {
          title: "One Link, Every Application",
          description:
            "Stop reformatting your resume for each ATS. Your SkillPass link works everywhere and shows everything.",
        },
        {
          title: "Employer Discovery",
          description:
            "50+ employers actively search SkillPass for candidates. High SkillScores get inbound recruiter messages.",
        },
        {
          title: "Complete Senior Profile",
          description:
            "Four years of coursework, references from professors and internship supervisors, and proctored assessments — all in one place.",
        },
        {
          title: "Application Efficiency",
          description:
            "Instead of 200 mediocre applications, send 20 strong ones with your verified SkillPass link attached.",
        },
      ],
    },
    proof: {
      headline: "One link, multiple offers",
      testimonial: {
        quote:
          "I was on application 178 when I built my SkillPass profile. Scored 741, added it to my LinkedIn and email signature. Got 5 recruiter messages in two weeks — more than I'd gotten in three months of applying. Accepted an offer from a company that found ME.",
        name: "Samantha K.",
        role: "Michigan '25, Information Science",
        detail: "SkillScore: 741",
      },
      stats: [
        { value: "5x", label: "More recruiter outreach" },
        { value: "60%", label: "Faster to offer" },
      ],
    },
    cta: {
      headline: "Stop applying to 200 jobs.",
      gradientText: "Start with one link.",
      description:
        "Build your verified profile before graduation. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Sample Profiles", href: "/examples" },
    },
  },

  // 30. On-Campus Recruiting
  {
    slug: "on-campus-recruiting",
    category: "students-by-goal",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for On-Campus Recruiting | QR Code Replaces Paper Resume",
      description:
        "Career fairs are noisy. Stand out with a verified SkillPass profile. One QR code gives recruiters your scores, references, and assessments instantly.",
    },
    hero: {
      badge: "For Career Fair Season",
      headline: "QR code replaces",
      gradientText: "the paper resume.",
      subheadline:
        "You'll spend 90 seconds with each recruiter at the career fair. They'll take your resume, put it in a pile with 400 others, and forget your name. OR: you hand them a QR code that opens your verified SkillPass profile — scores, references, assessments — on their phone in two seconds.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Used at career fairs on 100+ campuses",
    },
    problem: {
      badge: "The 90-Second Problem",
      headline: "400 resumes. One pile.",
      gradientText: "You're in there somewhere.",
      description:
        "On-campus recruiting events give you 90 seconds to make an impression. The recruiter takes your paper resume, says something polite, and adds it to a stack. Later — maybe — someone flips through the stack. Most resumes look identical. Most get recycled. Your 3.7 GPA and 'strong communication skills' disappear into the noise.",
      stats: [
        {
          value: "400+",
          label: "Resumes collected per career fair table",
          description:
            "Each recruiter at a career fair collects hundreds of resumes. The odds of yours getting a real look are low.",
        },
        {
          value: "90sec",
          label: "Average interaction at career fair",
          description:
            "That's not enough time to convey four years of education and experience. It's barely enough time to say your name.",
        },
        {
          value: "8%",
          label: "Career fair interactions that lead to interviews",
          description:
            "Fewer than 1 in 10 career fair conversations convert to an actual interview. The format is broken.",
        },
      ],
    },
    solution: {
      badge: "Instant Digital Profile",
      headline: "90 seconds. Complete picture.",
      description:
        "Your SkillPass QR code gives recruiters instant access to your verified profile: SkillScore, sub-scores, calibrated GPA, proctored assessment results, and structured references. In the time it takes them to scan a code, they have more information than they'd get from reading your resume ten times.",
      features: [
        {
          title: "QR Code Profile Access",
          description:
            "Print your QR code on a card, show it on your phone, or add it to your nametag. One scan opens your complete verified profile.",
        },
        {
          title: "Instant Differentiation",
          description:
            "When 400 other students hand over paper resumes and you show a verified 740 SkillScore, you're immediately memorable.",
        },
        {
          title: "Post-Fair Follow-Up Built In",
          description:
            "Recruiters save your profile digitally. No more lost paper resumes. Your data follows up for you.",
        },
        {
          title: "Complete at a Glance",
          description:
            "Your SkillScore, top sub-scores, and key references load in under two seconds. Recruiters see your whole story instantly.",
        },
      ],
    },
    proof: {
      headline: "Career fairs, reimagined",
      testimonial: {
        quote:
          "At Georgia Tech's career fair, I showed my SkillPass QR code to 12 recruiters. Every single one scanned it and spent time looking at my profile on their phone. I got callbacks from 4 — a 33% rate vs. the 8% average. One recruiter said my profile was 'the most prepared thing she'd seen all day.'",
        name: "Mike T.",
        role: "Georgia Tech '25, CS",
        detail: "SkillScore: 752",
      },
      stats: [
        { value: "33%", label: "Callback rate with QR code" },
        { value: "4x", label: "More memorable to recruiters" },
      ],
    },
    cta: {
      headline: "Career fair season is coming.",
      gradientText: "Bring more than paper.",
      description:
        "Build your profile before the next fair. Generate your QR code. Stand out. Free.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See QR Code Feature", href: "/features" },
    },
  },

  // 31. Get Noticed Before Graduation
  {
    slug: "get-noticed-before-graduation",
    category: "students-by-goal",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass for Sophomores & Juniors | Build Now, Get Found Early",
      description:
        "Don't wait until senior year. Build your SkillPass profile as a sophomore or junior and let employers find you before the competition even starts.",
    },
    hero: {
      badge: "For Sophomores & Juniors",
      headline: "Build in sophomore year.",
      gradientText: "Let employers find you.",
      subheadline:
        "Most students wait until senior year to think about hiring. By then, the best opportunities are taken. Build your SkillPass profile now — as a sophomore or junior — and start appearing in employer searches before your peers even set up a LinkedIn.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "Why Start Early?", href: "/how-it-works" },
    },
    problem: {
      badge: "The Senior-Year Scramble",
      headline: "September of senior year.",
      gradientText: "Panic.",
      description:
        "You've seen it happen: seniors scrambling to build profiles, take assessments, and beg for references during the busiest semester of their lives. Meanwhile, the students who started early have verified scores, established profiles, and employer messages already in their inbox.",
      stats: [
        {
          value: "73%",
          label: "Students wait until senior year to start job search",
          description:
            "Nearly three-quarters of students don't start seriously looking until it's almost too late.",
        },
        {
          value: "2x",
          label: "Earlier starters get offers faster",
          description:
            "Students who have their profiles and credentials ready before senior year find roles significantly faster.",
        },
        {
          value: "34%",
          label: "Best roles filled before senior year starts",
          description:
            "Top companies recruit early. If you're not visible by summer before senior year, you've already missed a third of the best roles.",
        },
      ],
    },
    solution: {
      badge: "Early Mover Advantage",
      headline: "Your future self will thank you.",
      description:
        "Build your SkillPass profile now, even with incomplete data. Add coursework as you take it. Take assessments when you're ready. Collect references from current professors and project partners. By the time you're a senior, your profile is mature, your score is established, and employers already know your name.",
      features: [
        {
          title: "Living Profile",
          description:
            "Your SkillPass profile grows with you. Add courses each semester, update references, take new assessments. Your SkillScore improves over time.",
        },
        {
          title: "Early Employer Visibility",
          description:
            "Employers searching for 'Class of 2027' candidates will find your profile — before your classmates even make one.",
        },
        {
          title: "Assessment Prep Time",
          description:
            "No rush. Take assessments when you're ready — after your algorithms class, after your statistics course. Build your score strategically.",
        },
        {
          title: "Reference Accumulation",
          description:
            "Ask professors for structured references while they still remember you. By senior year, you'll have references from six semesters of faculty.",
        },
      ],
    },
    proof: {
      headline: "Early starters win",
      testimonial: {
        quote:
          "I built my SkillPass profile as a sophomore at Northwestern. By junior year my score was 721 and I had references from five professors. Two companies reached out during the summer before senior year. I had an offer before classes even started.",
        name: "Amanda F.",
        role: "Northwestern '26, CS Junior",
        detail: "SkillScore: 721",
      },
      stats: [
        { value: "2x", label: "Earlier to first offer" },
        { value: "721", label: "Score by junior year" },
      ],
    },
    cta: {
      headline: "Senior year is too late.",
      gradientText: "Start now.",
      description:
        "Build your profile as a sophomore or junior. It's free and it grows with you.",
      primaryCta: { text: "Start Building", href: "/signup" },
      secondaryCta: { text: "See Early-Start Benefits", href: "/how-it-works" },
    },
  },

  // 32. Skip the Resume Black Hole
  {
    slug: "skip-resume-black-hole",
    category: "students-by-goal",
    audience: "talent",
    funnel: "tofu",
    seo: {
      title: "SkillPass to Skip the Resume Black Hole | Be Seen, Not Filtered",
      description:
        "87% of resumes never reach a human. Your SkillPass profile bypasses ATS filters with a verified score that's always visible to employers.",
    },
    hero: {
      badge: "For Students Tired of Silence",
      headline: "87% of resumes never seen.",
      gradientText: "Your SkillScore is always visible.",
      subheadline:
        "You've sent 50, 100, maybe 200 applications. Radio silence. It's not that you're unqualified — it's that your resume never made it past the software. Your SkillPass profile can't be filtered. It sits at a public URL, visible to every employer, every search, every time.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
    problem: {
      badge: "The Black Hole",
      headline: "You applied. They didn't notice.",
      description:
        "Applicant Tracking Systems reject most resumes before a human ever sees them. Wrong keyword density, wrong formatting, wrong school name, wrong GPA threshold — any one of these gets you filtered out. You're not being rejected by a person. You're being rejected by an algorithm that doesn't know you.",
      stats: [
        {
          value: "87%",
          label: "Resumes filtered out by ATS",
          description:
            "Nearly 9 out of 10 resumes are eliminated by software. Your carefully crafted application probably wasn't read by anyone.",
        },
        {
          value: "75%",
          label: "Students report 'application black hole' frustration",
          description:
            "Three-quarters of students say they've experienced applying to dozens of roles and hearing absolutely nothing back.",
        },
        {
          value: "6sec",
          label: "Human review time (if your resume gets through)",
          description:
            "Even the lucky 13% of resumes that reach a human get about six seconds of attention.",
        },
      ],
    },
    solution: {
      badge: "Always Visible",
      headline: "Can't filter what's publicly verified.",
      description:
        "Your SkillPass profile lives at skillpass.io/yourname. It's not trapped in an ATS. It's not buried in an email inbox. Any recruiter, any company, any time — they can see your verified SkillScore, sub-scores, assessments, and references. You're always visible.",
      features: [
        {
          title: "Public Verified Profile",
          description:
            "skillpass.io/yourname — a permanent, verified URL that any recruiter can access anytime. No application required.",
        },
        {
          title: "Employer Search Index",
          description:
            "50+ employers actively search SkillPass for candidates by score, skills, and field. Your profile appears in their results automatically.",
        },
        {
          title: "ATS-Proof",
          description:
            "Your SkillPass link works as a supplement to any application. Even if your resume gets filtered, your profile link survives in the system.",
        },
        {
          title: "Inbound Recruiter Contact",
          description:
            "High SkillScores attract direct recruiter outreach. Stop waiting for callbacks — let them come to you.",
        },
      ],
    },
    proof: {
      headline: "From silence to calls",
      testimonial: {
        quote:
          "I applied to 167 companies. Got 4 responses. Built my SkillPass profile, added the link to my LinkedIn headline, and got 8 recruiter messages in the first month. My score was 719 — not incredible, but it was visible. That's what mattered.",
        name: "Carlos M.",
        role: "Arizona State '25, IT",
        detail: "SkillScore: 719",
      },
      stats: [
        { value: "8x", label: "More visibility" },
        { value: "167 to 8", label: "Apps vs. inbound messages" },
      ],
    },
    cta: {
      headline: "Stop disappearing into the black hole.",
      gradientText: "Be visible.",
      description:
        "Build a profile that can't be filtered out. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Why It Works", href: "/how-it-works" },
    },
  },

  // 33. Targeting Top Tech
  {
    slug: "targeting-top-tech",
    category: "students-by-goal",
    audience: "talent",
    funnel: "bofu",
    seo: {
      title: "SkillPass for Top Tech Recruiting | Same Coding Test, Every Company, Once",
      description:
        "Google, Meta, Amazon all test the same skills. SkillPass lets you prove your coding, system design, and algorithms once — verified and shareable.",
    },
    hero: {
      badge: "For Top Tech Candidates",
      headline: "Same coding test.",
      gradientText: "Every company. Once.",
      subheadline:
        "Google, Meta, Amazon, Apple, Microsoft — they all want to know if you can solve graph problems and design scalable systems. You keep answering the same questions for different companies. SkillPass lets you answer once, with a proctored, verified score every tech company understands.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Tech Assessments", href: "/assessments" },
      trustLine: "Candidates hired at FAANG companies using SkillPass",
    },
    problem: {
      badge: "The Redundancy Tax",
      headline: "Five companies. Five identical interviews.",
      description:
        "You're applying to Google, Meta, Amazon, and two other tech companies. Each one gives you: online assessment, phone screen, technical phone screen, on-site with 4-5 rounds. That's roughly 25 interviews across 5 companies, testing the same algorithms, system design, and behavioral skills. It's the most expensive job application process in any industry.",
      stats: [
        {
          value: "25",
          label: "Total interviews across 5 FAANG applications",
          description:
            "Five companies, each with 4-5 rounds. You're essentially doing the same job interview 25 times.",
        },
        {
          value: "150hrs",
          label: "Average FAANG prep time",
          description:
            "Between LeetCode, system design practice, and behavioral prep, top-tech candidates invest months of full-time effort.",
        },
        {
          value: "$0",
          label: "Compensation for all that interview time",
          description:
            "You're donating weeks of your life to demonstrate skills that are identical across companies. Nobody pays you for this.",
        },
      ],
    },
    solution: {
      badge: "Test Once for All",
      headline: "One verified suite. Every tech company.",
      description:
        "SkillPass proctored assessments cover the exact skills FAANG companies test: algorithms, data structures, system design, and problem decomposition. Take each assessment once. Your verified scores are shareable with every company. Some participating employers accept SkillPass results in lieu of their first technical round.",
      features: [
        {
          title: "Algorithms & Data Structures",
          description:
            "The same BFS, DFS, dynamic programming, and tree problems every tech company asks — proctored, verified, done once.",
        },
        {
          title: "System Design Assessment",
          description:
            "Distributed systems, API design, database schema, scalability — scored against the same rubric senior engineers use.",
        },
        {
          title: "Coding Fluency Score",
          description:
            "Language proficiency, code quality, time-to-solution — all measured and reported alongside your algorithm scores.",
        },
        {
          title: "Behavioral Signal",
          description:
            "Structured peer references on collaboration, communication, and leadership. The 'culture fit' round, pre-answered with data.",
        },
      ],
    },
    proof: {
      headline: "From 25 interviews to 10",
      testimonial: {
        quote:
          "I was prepping for Google, Meta, and Amazon simultaneously. Same LeetCode problems, different company logos. Built my SkillPass profile — 781 on algorithms, 760 on system design. Two of the three companies accepted my scores for their first round. Cut my total interview count nearly in half.",
        name: "David W.",
        role: "University of Washington '25, CS",
        detail: "SkillScore: 774",
      },
      stats: [
        { value: "774", label: "Avg top-tech SkillScore" },
        { value: "60%", label: "Fewer redundant rounds" },
      ],
    },
    cta: {
      headline: "You're good enough for FAANG.",
      gradientText: "Prove it once.",
      description:
        "Take proctored tech assessments. Share with every company. Free.",
      primaryCta: { text: "Start Assessments", href: "/signup" },
      secondaryCta: { text: "See Assessment Details", href: "/assessments" },
    },
  },

  // 34. Targeting Consulting
  {
    slug: "targeting-consulting",
    category: "students-by-goal",
    audience: "talent",
    funnel: "bofu",
    seo: {
      title: "SkillPass for Consulting Recruiting | Case Skills Verified, No Marathon",
      description:
        "Case interviews at MBB and Big 4 all test the same skills. SkillPass verifies your case analysis, quantitative reasoning, and communication once.",
    },
    hero: {
      badge: "For Consulting Candidates",
      headline: "Case skills verified.",
      gradientText: "No 40-case marathon.",
      subheadline:
        "McKinsey, BCG, Bain, Deloitte — every firm tests market sizing, profitability, and quantitative reasoning. You've prepped 40 cases. SkillPass verifies those skills once, proctored, with a score that demonstrates your analytical and communication ability to any firm.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Consulting Assessments", href: "/assessments" },
      trustLine: "Used by candidates targeting MBB, Big 4, and boutique firms",
    },
    problem: {
      badge: "The Case Grind",
      headline: "Another market sizing question.",
      gradientText: "You could do this in your sleep.",
      description:
        "Consulting recruiting is a specialized grind: networking coffee chats, case prep groups, behavioral story development, case competition after case competition. Every firm tests the same frameworks. But you have to go through the full process at each one independently. There's no way to demonstrate your skills once and be done.",
      stats: [
        {
          value: "40+",
          label: "Cases practiced by serious MBB candidates",
          description:
            "Most competitive consulting candidates practice 40+ full cases, plus drills, plus mental math, plus fit stories. It's a part-time job.",
        },
        {
          value: "200hrs",
          label: "Consulting prep time investment",
          description:
            "Between case prep, networking, applications, and interview rounds, consulting recruiting consumes an entire semester's worth of time.",
        },
        {
          value: "15%",
          label: "MBB offer rate from target schools",
          description:
            "Even from target schools, only about 1 in 7 candidates gets an offer. From non-targets, it's dramatically worse.",
        },
      ],
    },
    solution: {
      badge: "Verified Consulting Skills",
      headline: "Frameworks, quantified. Communication, scored.",
      description:
        "SkillPass case consulting assessments test the exact skills firms screen for: structured problem-solving, market sizing, profitability analysis, and quantitative reasoning. Proctored, rubric-scored, and shareable. Your results demonstrate consulting readiness without the 40-case marathon.",
      features: [
        {
          title: "Case Analysis Assessment",
          description:
            "Market sizing, profitability, operations — structured case problems scored by rubric on structure, insight, and quantitative accuracy.",
        },
        {
          title: "Quantitative Reasoning",
          description:
            "Mental math, data interpretation, and analytical reasoning — the quant skills every consulting first round tests.",
        },
        {
          title: "Communication & Structure",
          description:
            "Writing assessment that evaluates clarity, structure, and persuasion — the consulting communication skills cases are really testing.",
        },
        {
          title: "Peer Leadership Signal",
          description:
            "Structured references emphasizing leadership, communication, and collaboration — the behavioral fit dimension of consulting recruiting.",
        },
      ],
    },
    proof: {
      headline: "Consulting candidates, verified",
      testimonial: {
        quote:
          "Non-target school, no consulting club, but strong analytical skills. My SkillPass case analysis score was in the 90th percentile and my SkillScore was 747. A boutique strategy firm found my profile and fast-tracked me past the case screen. They said my verified quant scores were more reliable than a 30-minute case interview.",
        name: "Rebecca L.",
        role: "University of Virginia '25, Economics",
        detail: "SkillScore: 747",
      },
      stats: [
        { value: "747", label: "Avg consulting candidate score" },
        { value: "90th", label: "Percentile on case analysis" },
      ],
    },
    cta: {
      headline: "You've cased enough.",
      gradientText: "Verify it and move on.",
      description:
        "Proctored consulting assessments. Verified scores. One profile for every firm. Free.",
      primaryCta: { text: "Take Assessments", href: "/signup" },
      secondaryCta: { text: "See Consulting Scoring", href: "/assessments" },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CATEGORY D — BY SCHOOL (8 pages)
  // ─────────────────────────────────────────────────────────────────────────────

  // 35. MIT Students
  {
    slug: "mit-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for MIT Students | MIT Taught You to Think. Prove It.",
      description:
        "MIT's rigor is legendary. SkillPass calibrates your coursework at its true difficulty and adds verified assessments so employers see the full MIT picture.",
    },
    hero: {
      badge: "For MIT Students",
      headline: "MIT taught you to think.",
      gradientText: "SkillPass proves it.",
      subheadline:
        "You survived 8.01, 18.06, and whatever brutal departmental courses your major threw at you. MIT's grading is tough, the coursework is relentless, and your 3.4 represents more rigor than a 4.0 almost anywhere else. SkillPass calibrates accordingly.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See MIT Calibration", href: "/how-it-works" },
      trustLine: "Built by an MIT alum who gets it",
    },
    problem: {
      badge: "The MIT Paradox",
      headline: "A 3.4 at MIT.",
      gradientText: "A 3.4 at state school. Same filter.",
      description:
        "Here's the absurd reality: your 3.4 GPA from one of the hardest institutions on earth gets treated the same as a 3.4 from a school with 90% grade inflation. ATS systems don't calibrate. Most recruiters don't either. Your MIT-grade B+ in 6.046 is harder than an A at most schools — and nobody's adjusting for that.",
      stats: [
        {
          value: "3.4",
          label: "MIT median GPA (among lowest nationally)",
          description:
            "MIT grades hard. A 3.4 here took more effort than a 3.9 at most universities. But the number on your resume doesn't say that.",
        },
        {
          value: "73%",
          label: "ATS systems don't calibrate for institution",
          description:
            "The software filtering your resume treats all 3.4s the same. MIT's rigor disappears behind a raw number.",
        },
        {
          value: "4.0",
          label: "GPA cutoff at many top firms",
          description:
            "Some prestigious firms use GPA cutoffs that MIT's grading curve makes nearly impossible to hit. The irony is brutal.",
        },
      ],
    },
    solution: {
      badge: "MIT-Calibrated",
      headline: "Your grades, weighted like they should be.",
      description:
        "SkillPass scores MIT coursework at its actual difficulty tier — the highest in our system. Your 6.006 grade, your 18.06 performance, your lab research — all calibrated against the institution that earned its reputation for being the hardest. Combine that with proctored assessments and peer references, and your SkillScore reflects the MIT you actually experienced.",
      features: [
        {
          title: "Top-Tier Academic Calibration",
          description:
            "MIT is scored at the highest institutional tier in SkillPass. Your B+ in algorithms is weighted against the actual difficulty of MIT's algorithms course.",
        },
        {
          title: "Course-Level Rigor",
          description:
            "6.006, 6.824, 18.06, 2.003 — each course scored individually for difficulty. Your transcript tells a nuanced story.",
        },
        {
          title: "Research and Lab References",
          description:
            "UROP advisors, lab supervisors, and research collaborators contribute structured references. MIT's research culture is captured.",
        },
        {
          title: "Cross-Validated with Assessments",
          description:
            "MIT students consistently score in the top percentiles on proctored assessments. Let that data confirm what your calibrated GPA already shows.",
        },
      ],
    },
    proof: {
      headline: "MIT students, properly scored",
      testimonial: {
        quote:
          "My 3.3 in Course 6 kept triggering GPA filters at companies that absolutely would have wanted me. After building my SkillPass profile — 784, with MIT calibration pulling my Academic sub-score way up — I started getting responses from the same companies that had filtered me out. Same person, same skills, different signal.",
        name: "James T.",
        role: "MIT '25, EECS",
        detail: "SkillScore: 784",
      },
      stats: [
        { value: "784", label: "Avg MIT SkillScore" },
        { value: "Top tier", label: "Institution calibration" },
      ],
    },
    cta: {
      headline: "MIT made you rigorous.",
      gradientText: "SkillPass makes it count.",
      description:
        "Build your MIT-calibrated profile. Free for every student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See MIT Calibration", href: "/how-it-works" },
    },
  },

  // 36. Stanford Students
  {
    slug: "stanford-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Stanford Students | Stanford Rigor, Verified Depth",
      description:
        "Stanford opens doors. Your SkillScore shows what's behind them. Calibrated coursework, verified assessments, and structured references from the Farm.",
    },
    hero: {
      badge: "For Stanford Students",
      headline: "Stanford opens doors.",
      gradientText: "Your SkillScore shows what's behind them.",
      subheadline:
        "You're at one of the best universities on the planet, surrounded by founders, researchers, and future leaders. That's the Stanford story. Your SkillPass profile tells YOUR story — your specific coursework, your assessments, your references — calibrated and verified.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Stanford Calibration", href: "/how-it-works" },
      trustLine: "Used by Stanford students across all departments",
    },
    problem: {
      badge: "The Stanford Halo",
      headline: "Everyone assumes you're brilliant.",
      gradientText: "Nobody checks.",
      description:
        "Stanford's brand is so strong that employers often fast-track you into interviews without understanding what you specifically can do. That's great until the interview, when they discover your strengths might not match their needs. The halo helps you get in rooms. It doesn't help you match to the RIGHT room.",
      stats: [
        {
          value: "89%",
          label: "Stanford grads get callbacks on name alone",
          description:
            "The name carries you far. But getting into the wrong interviews wastes everyone's time.",
        },
        {
          value: "3.8",
          label: "Average GPA expectation from Stanford grads",
          description:
            "Recruiters expect Stanford students to have near-perfect GPAs. If yours is 3.4, they wonder why — instead of asking what courses you took.",
        },
        {
          value: "42%",
          label: "Stanford grads say they feel 'mismatched' in first role",
          description:
            "Getting hired because of your school name, not your specific skills, leads to role mismatches.",
        },
      ],
    },
    solution: {
      badge: "Specificity Over Prestige",
      headline: "Move past the brand. Show the person.",
      description:
        "SkillPass differentiates you from other Stanford grads — and from the generic Stanford 'halo' — by showing your specific skills. Your calibrated coursework in CS, engineering, or humanities; your proctored assessment results; your structured peer references. It's YOUR profile, not Stanford's.",
      features: [
        {
          title: "Stanford-Calibrated Academics",
          description:
            "CS 106B, MATH 51, ENGR 40M — each course scored at Stanford's tier. Your specific academic strengths, not just the school name.",
        },
        {
          title: "Proctored Skill Proof",
          description:
            "Coding, system design, data analysis, writing — assessments that show what YOU can do, verified and differentiated from every other Stanford grad.",
        },
        {
          title: "Startup & Research References",
          description:
            "Stanford's entrepreneurial culture means your references come from research labs, startup teams, and projects — all structured and scored.",
        },
        {
          title: "Right-Fit Matching",
          description:
            "Your detailed SkillPass profile helps employers understand your specific strengths, leading to better role matches — not just brand-driven hiring.",
        },
      ],
    },
    proof: {
      headline: "Stanford students, individually verified",
      testimonial: {
        quote:
          "Stanford got me interviews everywhere, but I kept ending up in roles that didn't match my actual strengths. My SkillPass profile showed my specific skills — strong in system design and data analysis, weaker in frontend — and the roles I got matched started matching better. Ended up at a startup that needed exactly my skillset.",
        name: "Priya N.",
        role: "Stanford '25, CS",
        detail: "SkillScore: 778",
      },
      stats: [
        { value: "778", label: "Avg Stanford SkillScore" },
        { value: "3x", label: "Better role-skill match" },
      ],
    },
    cta: {
      headline: "Stanford got you in the room.",
      gradientText: "Show them who's in it.",
      description:
        "Build your individual profile. Free for every Stanford student.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Stanford Scoring", href: "/how-it-works" },
    },
  },

  // 37. CMU Students
  {
    slug: "cmu-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for CMU Students | CMU Rigor Deserves CMU-Level Scoring",
      description:
        "CMU's CS and engineering programs are among the toughest in the world. SkillPass calibrates your grades at their true difficulty. Your 3.2 here is elite.",
    },
    hero: {
      badge: "For CMU Students",
      headline: "CMU rigor deserves",
      gradientText: "CMU-level scoring.",
      subheadline:
        "15-213 almost broke you. 15-410 actually did. You survived some of the hardest CS and engineering courses in the country, and your GPA reflects that difficulty — not your lack of talent. SkillPass calibrates your grades at CMU's actual rigor level.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See CMU Calibration", href: "/how-it-works" },
      trustLine: "CMU students across SCS, ECE, and more",
    },
    problem: {
      badge: "The CMU GPA Problem",
      headline: "CMU grades hard. ATS doesn't care.",
      description:
        "CMU's School of Computer Science has some of the lowest average GPAs in the country — because the courses are extraordinarily difficult. But automated screening systems and many recruiters see a 3.2 and filter you below students with 3.8s from much easier programs. The calibration is completely missing.",
      stats: [
        {
          value: "3.2",
          label: "CMU SCS average GPA",
          description:
            "One of the lowest averages among top CS programs — because courses like 15-213 and 15-451 are brutally difficult.",
        },
        {
          value: "85%",
          label: "Employers don't adjust GPA expectations by school",
          description:
            "Most hiring processes use flat GPA cutoffs. A 3.5 cutoff eliminates most CMU CS students.",
        },
        {
          value: "15-213",
          label: "Legendary for difficulty",
          description:
            "CMU's Introduction to Computer Systems is famous for its workload. Getting a B in this course is a genuine achievement.",
        },
      ],
    },
    solution: {
      badge: "Properly Calibrated",
      headline: "Your 3.2 here means more than a 3.8 elsewhere.",
      description:
        "SkillPass places CMU at the highest institutional tier and scores individual courses like 15-213, 15-451, and 18-100 at their true difficulty. Your Academic sub-score reflects the CMU you actually attended — not a generic university. Combined with proctored assessments where CMU students consistently dominate, your SkillScore tells the real story.",
      features: [
        {
          title: "Course-Specific Difficulty Scoring",
          description:
            "15-213, 15-410, 15-451, 21-241 — each scored at its actual difficulty. A B in 15-410 is weighted like the achievement it is.",
        },
        {
          title: "Highest-Tier Calibration",
          description:
            "CMU's CS and engineering programs are at the top tier in SkillPass. Your GPA calibration reflects that reality.",
        },
        {
          title: "Assessment Validation",
          description:
            "CMU students consistently score in the top percentiles on proctored coding and system design assessments. Let those scores reinforce your calibrated GPA.",
        },
        {
          title: "Project and Lab References",
          description:
            "References from CMU's legendary project courses, research labs, and group work — structured across 8 dimensions.",
        },
      ],
    },
    proof: {
      headline: "CMU students, properly valued",
      testimonial: {
        quote:
          "I had a 3.1 in SCS. Companies with 3.5 cutoffs kept filtering me out, even though I'd taken 15-213, 15-410, and 15-451. My SkillPass profile calibrated those grades at CMU difficulty. My SkillScore was 776 and suddenly I was getting calls from the same companies that had rejected my resume.",
        name: "Brian K.",
        role: "CMU '25, SCS",
        detail: "SkillScore: 776",
      },
      stats: [
        { value: "776", label: "Avg CMU SkillScore" },
        { value: "Top tier", label: "Calibration level" },
      ],
    },
    cta: {
      headline: "CMU made it hard.",
      gradientText: "SkillPass makes it count.",
      description:
        "Build your CMU-calibrated profile. Free for every Tartan.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See CMU Scoring", href: "/how-it-works" },
    },
  },

  // 38. Georgia Tech Students
  {
    slug: "georgia-tech-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Georgia Tech Students | GT Engineering Strength, Scored",
      description:
        "Georgia Tech's engineering rigor is world-class. SkillPass calibrates your GT grades at their true difficulty and adds verified assessments.",
    },
    hero: {
      badge: "For Georgia Tech Students",
      headline: "GT engineering strength,",
      gradientText: "properly scored.",
      subheadline:
        "Georgia Tech is a top-5 engineering school with a public school price tag. You chose rigor AND value. SkillPass makes sure employers see both — your GT grades calibrated at their actual difficulty, plus proctored assessments and structured references.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See GT Calibration", href: "/how-it-works" },
      trustLine: "Yellow Jacket students across engineering and CS",
    },
    problem: {
      badge: "Public School, Private Rigor",
      headline: "Top-5 engineering.",
      gradientText: "Public school assumptions.",
      description:
        "Georgia Tech is consistently ranked in the top 5 for engineering. But some recruiters — especially at East Coast firms — still bucket it as 'a state school.' Your 3.3 in ME at GT took more effort than a 3.8 at most private universities. That context gets lost on a resume.",
      stats: [
        {
          value: "#5",
          label: "Engineering ranking nationally",
          description:
            "Georgia Tech is top-5 in engineering, competing directly with MIT and Stanford. The rigor matches.",
        },
        {
          value: "3.3",
          label: "Average GT engineering GPA",
          description:
            "GT grades tough across engineering departments. A 3.3 here represents serious academic achievement.",
        },
        {
          value: "48%",
          label: "GT students feel 'public school' bias in hiring",
          description:
            "Nearly half of GT students report encountering recruiters who undervalue their degree because it's from a public university.",
        },
      ],
    },
    solution: {
      badge: "GT-Calibrated",
      headline: "Public tuition. Private-school calibration.",
      description:
        "SkillPass scores Georgia Tech at its actual tier — alongside MIT, Stanford, and Caltech for engineering. Your grades in ME, ECE, CS, and other departments are calibrated against GT's real difficulty curves. Combined with proctored assessments and peer references, your SkillScore reflects the GT experience.",
      features: [
        {
          title: "Top-Tier Engineering Calibration",
          description:
            "GT engineering is scored at the same tier as MIT and Stanford. Because it should be. Your GPA calibration reflects that.",
        },
        {
          title: "Department-Level Scoring",
          description:
            "ME, ECE, CS, ChemE — each department's difficulty curve is scored individually. A 3.1 in ECE hits different than a 3.1 in business.",
        },
        {
          title: "Co-op and Research References",
          description:
            "GT's strong co-op program means real industry references. SkillPass captures both academic and professional references.",
        },
        {
          title: "Assessment Strength",
          description:
            "GT students consistently perform well on proctored technical assessments. Let verified scores confirm what your calibrated GPA shows.",
        },
      ],
    },
    proof: {
      headline: "GT students, fully calibrated",
      testimonial: {
        quote:
          "I interned through GT's co-op program and had a 3.2 in CS. Some companies on the East Coast treated me like I was from a random state school. My SkillScore was 761 with top-tier calibration. The same firms that had passed on my resume started responding when they saw my profile.",
        name: "Angela S.",
        role: "Georgia Tech '25, CS",
        detail: "SkillScore: 761",
      },
      stats: [
        { value: "761", label: "Avg GT SkillScore" },
        { value: "Top tier", label: "Engineering calibration" },
      ],
    },
    cta: {
      headline: "GT gave you the rigor.",
      gradientText: "SkillPass gives you the recognition.",
      description:
        "Build your GT-calibrated profile. Free for every Yellow Jacket.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See GT Scoring", href: "/how-it-works" },
    },
  },

  // 39. UC Berkeley Students
  {
    slug: "uc-berkeley-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for UC Berkeley Students | Public School Rigor, Properly Calibrated",
      description:
        "Berkeley is a top-5 CS and engineering school. SkillPass calibrates your grades at their actual difficulty — because your 3.3 here is not average.",
    },
    hero: {
      badge: "For UC Berkeley Students",
      headline: "Public school rigor,",
      gradientText: "properly calibrated.",
      subheadline:
        "Berkeley's EECS and engineering programs compete with any school in the country. CS 61A to CS 162, your coursework was relentless. SkillPass calibrates your Berkeley grades at their true difficulty — top tier, where they belong.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Berkeley Calibration", href: "/how-it-works" },
      trustLine: "Go Bears. Verified Bears.",
    },
    problem: {
      badge: "The Public-Private Perception Gap",
      headline: "Berkeley EECS. World-class.",
      gradientText: "Still called 'a state school.'",
      description:
        "UC Berkeley has the #1 or #2 CS program depending on who's ranking. But some East Coast recruiters still see 'University of California' and file it under 'state school.' Your 3.3 in EECS represents a level of rigor that most private school students never encounter. That context disappears on a flat resume.",
      stats: [
        {
          value: "#1",
          label: "Public university CS ranking",
          description:
            "Berkeley's CS department is consistently #1 among public universities and top-3 overall. The rigor is undeniable.",
        },
        {
          value: "3.3",
          label: "Average Berkeley EECS GPA",
          description:
            "Berkeley doesn't inflate grades. A 3.3 in EECS here took more work than a 3.8 at most private schools.",
        },
        {
          value: "40%",
          label: "Berkeley students report 'public school' bias",
          description:
            "Despite being world-class, Berkeley students still face perception gaps with some employers.",
        },
      ],
    },
    solution: {
      badge: "Berkeley-Calibrated",
      headline: "World-class program. World-class calibration.",
      description:
        "SkillPass calibrates UC Berkeley at the highest institutional tier for CS and engineering — right alongside MIT, Stanford, and CMU. Your CS 61B grade, your EE 16A performance, your research with Berkeley AI lab — all weighted at their actual difficulty.",
      features: [
        {
          title: "Top-Tier CS Calibration",
          description:
            "CS 61A, CS 61B, CS 170, CS 162 — each scored at Berkeley's true difficulty level. Your grades reflect the rigor, not just the number.",
        },
        {
          title: "Engineering Department Scoring",
          description:
            "ME, IEOR, BioE, CE — each department's difficulty curve individually calibrated. Berkeley engineering is scored where it belongs: at the top.",
        },
        {
          title: "Research Lab References",
          description:
            "Berkeley's research ecosystem means references from BAIR, RISELab, and dozens of other world-class labs — all structured and scored.",
        },
        {
          title: "Assessment Confirmation",
          description:
            "Berkeley students dominate proctored assessments. Your verified scores confirm what your calibrated GPA already shows.",
        },
      ],
    },
    proof: {
      headline: "Berkeley students, properly valued",
      testimonial: {
        quote:
          "Had a 3.2 in Berkeley EECS. Some companies treated it like a middling GPA. Built my SkillPass profile — 772 with top-tier calibration — and suddenly the same companies wanted to talk. One recruiter literally said 'I didn't realize Berkeley CS was that competitive.' Seriously.",
        name: "Michael Z.",
        role: "UC Berkeley '25, EECS",
        detail: "SkillScore: 772",
      },
      stats: [
        { value: "772", label: "Avg Berkeley SkillScore" },
        { value: "#1", label: "Public CS program" },
      ],
    },
    cta: {
      headline: "Berkeley is world-class.",
      gradientText: "Make sure they know it.",
      description:
        "Build your Berkeley-calibrated profile. Free for every Bear.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Berkeley Scoring", href: "/how-it-works" },
    },
  },

  // 40. Harvard Students
  {
    slug: "harvard-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Harvard Students | Even Harvard Students Re-Prove Themselves",
      description:
        "Harvard's name is legendary. But you still do coding tests, case interviews, and take-homes. SkillPass lets you verify your specific skills once.",
    },
    hero: {
      badge: "For Harvard Students",
      headline: "Even Harvard students",
      gradientText: "re-prove themselves.",
      subheadline:
        "You got into the hardest school to get into. And yet — you still whiteboard at Google, case prep at McKinsey, and build take-home projects for startups. The Harvard name gets you in the room, but you still re-prove everything once you're there. SkillPass makes the proving portable.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Harvard students across the Yard and SEAS",
    },
    problem: {
      badge: "The Re-Proving Paradox",
      headline: "Hardest school to enter.",
      gradientText: "Still LeetCoding at 2am.",
      description:
        "Harvard admission is the ultimate credentialing event. And yet, the moment you enter the job market, every company makes you start from scratch. Google doesn't accept your Harvard admission as proof of coding ability. McKinsey doesn't skip the case round because you took Economics 1010a. You re-prove everything, everywhere.",
      stats: [
        {
          value: "3.8%",
          label: "Harvard admission rate",
          description:
            "You survived the most selective admissions process in the world. Companies still make you solve two-sum.",
        },
        {
          value: "12",
          label: "Average interview rounds for Harvard seniors",
          description:
            "Even with the Harvard name, you go through a dozen interviews across companies. Each one starts from zero.",
        },
        {
          value: "76%",
          label: "Harvard students do interview prep despite the brand",
          description:
            "Three-quarters of Harvard students still grind LeetCode, case prep, or modeling tests. The name doesn't replace the test.",
        },
      ],
    },
    solution: {
      badge: "Prove Once, Portable Forever",
      headline: "Make your proof portable.",
      description:
        "SkillPass captures your specific skills — not just the Harvard name — in a verified, shareable profile. Proctored assessments, calibrated coursework, and structured references. Take the tests once, share with every employer. Your proof travels with you.",
      features: [
        {
          title: "Harvard-Calibrated Academics",
          description:
            "CS 50, Econ 1010a, Math 55 — your coursework scored at Harvard's calibration tier. Specific courses, specific difficulty.",
        },
        {
          title: "One-Time Assessment Suite",
          description:
            "Coding, system design, case analysis, data — take each assessment once. Share verified results with every company instead of re-testing.",
        },
        {
          title: "Differentiation from Other Harvard Grads",
          description:
            "When every applicant has 'Harvard' on their resume, your SkillScore differentiates you with specific verified abilities.",
        },
        {
          title: "Structured Peer Signal",
          description:
            "References from section leaders, research advisors, and organization co-founders. Harvard's collaborative culture, quantified.",
        },
      ],
    },
    proof: {
      headline: "Harvard students who proved it once",
      testimonial: {
        quote:
          "I was doing case prep, LeetCode, AND modeling tests simultaneously for different companies. Decided to build my SkillPass profile — 782, strong across all four sub-scores. Two firms accepted my SkillPass results in lieu of their initial assessments. Finally felt like the Harvard name worked FOR the process, not around it.",
        name: "Anna C.",
        role: "Harvard '25, Applied Math",
        detail: "SkillScore: 782",
      },
      stats: [
        { value: "782", label: "Avg Harvard SkillScore" },
        { value: "2x", label: "Fewer redundant tests" },
      ],
    },
    cta: {
      headline: "Harvard proved you're exceptional.",
      gradientText: "SkillPass makes it portable.",
      description:
        "Build your verified profile. Prove it once, share everywhere. Free.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Harvard Calibration", href: "/how-it-works" },
    },
  },

  // 41. Caltech Students
  {
    slug: "caltech-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Caltech Students | Small School, Massive Rigor",
      description:
        "Caltech's 3.2 GPA means more than a 3.9 elsewhere. SkillPass calibrates your grades at the rigor level Caltech actually demands.",
    },
    hero: {
      badge: "For Caltech Students",
      headline: "Small school. Massive rigor.",
      gradientText: "A 3.2 here means a lot.",
      subheadline:
        "Caltech has 1,000 undergrads and the most intense curriculum in the country. Your 3.2 GPA survived courses where half the class dropped. SkillPass calibrates your grades at Caltech's actual difficulty — which is, frankly, off the charts.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Caltech Calibration", href: "/how-it-works" },
      trustLine: "For the 1,000 undergrads who chose the hardest path",
    },
    problem: {
      badge: "The Small-School Paradox",
      headline: "1,000 students. Zero name recognition outside STEM.",
      description:
        "Here's Caltech's problem: within physics, engineering, and CS circles, everyone knows Caltech is extraordinary. Outside those circles? Many recruiters barely know it exists. A thousand undergrads don't generate the alumni network of a school with 30,000. Your school is elite. Its marketing budget isn't.",
      stats: [
        {
          value: "1,000",
          label: "Total Caltech undergrads",
          description:
            "The smallest top-5 school in the country. Amazing education, tiny alumni network.",
        },
        {
          value: "3.1",
          label: "Average Caltech GPA",
          description:
            "Caltech's grading is legendary for difficulty. A 3.1 here represents academic intensity most schools can't even conceptualize.",
        },
        {
          value: "38%",
          label: "Non-STEM recruiters who recognize Caltech",
          description:
            "Outside of tech and science, more than 60% of recruiters don't immediately recognize Caltech's caliber. That's a visibility problem.",
        },
      ],
    },
    solution: {
      badge: "Caltech-Calibrated",
      headline: "The hardest curriculum, properly scored.",
      description:
        "SkillPass scores Caltech at the absolute highest tier — because there's no harder undergraduate curriculum in America. Your physics sets, your CS courses, your math requirements — all calibrated at a level that makes a 3.1 here show up as the elite achievement it is.",
      features: [
        {
          title: "Highest-Tier Calibration",
          description:
            "Caltech is scored at the very top of SkillPass's institutional tiers. Your 3.1 calibrates above a 3.8 at most other schools.",
        },
        {
          title: "Core Curriculum Recognition",
          description:
            "Caltech's required core — physics, math, chemistry, biology — is one of the hardest in the world. Your grades in core courses are weighted accordingly.",
        },
        {
          title: "Research Depth",
          description:
            "At 1,000 undergrads, nearly everyone does research. Your advisor and lab references carry significant weight in your Peer Signal score.",
        },
        {
          title: "Assessment Dominance",
          description:
            "Caltech students consistently score in the top percentiles on proctored STEM assessments. Let that data speak alongside your calibrated GPA.",
        },
      ],
    },
    proof: {
      headline: "Caltech students, properly valued",
      testimonial: {
        quote:
          "A 3.0 at Caltech. I had to explain that to every single recruiter. 'It's like a 3.8 at most schools' got old fast. My SkillPass profile did the explaining for me — 788 SkillScore, top-tier calibration. A quant firm reached out saying my profile 'finally made Caltech's grading make sense to their system.'",
        name: "Andrew P.",
        role: "Caltech '25, Physics/CS",
        detail: "SkillScore: 788",
      },
      stats: [
        { value: "788", label: "Avg Caltech SkillScore" },
        { value: "Highest", label: "Institutional tier" },
      ],
    },
    cta: {
      headline: "Caltech is the hardest path.",
      gradientText: "SkillPass makes it visible.",
      description:
        "Build your Caltech-calibrated profile. Free for every Techer.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Caltech Scoring", href: "/how-it-works" },
    },
  },

  // 42. Princeton Students
  {
    slug: "princeton-students",
    category: "students-by-school",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "SkillPass for Princeton Students | Grade Deflation, Properly Reflected",
      description:
        "Princeton's grade deflation policy means your 3.3 is a serious achievement. SkillPass calibrates your GPA at Princeton's actual difficulty.",
    },
    hero: {
      badge: "For Princeton Students",
      headline: "Grade deflation,",
      gradientText: "properly reflected.",
      subheadline:
        "Princeton was one of the first elite schools to implement grade deflation. Your 3.3 here isn't what a 3.3 means anywhere else. SkillPass calibrates your GPA against Princeton's actual grading curves — so employers see the achievement, not just the number.",
      primaryCta: { text: "Build Your Profile Free", href: "/signup" },
      secondaryCta: { text: "See Princeton Calibration", href: "/how-it-works" },
      trustLine: "Tigers who refuse to be defined by a deflated GPA",
    },
    problem: {
      badge: "The Deflation Penalty",
      headline: "Princeton deflates grades.",
      gradientText: "ATS systems don't adjust.",
      description:
        "Princeton's grading policy was designed to maintain academic integrity. Noble goal. But the job market doesn't have a 'Princeton adjustment' button. Your 3.3 gets compared against 3.8s from schools with rampant grade inflation. You're being penalized for your school doing the right thing.",
      stats: [
        {
          value: "35%",
          label: "A-range grades at Princeton (vs 50%+ at peers)",
          description:
            "Princeton gives significantly fewer A's than Harvard, Yale, or Columbia. Your GPA is structurally lower.",
        },
        {
          value: "3.4",
          label: "Princeton average GPA (vs 3.7+ at many Ivies)",
          description:
            "The average Princeton GPA is noticeably lower than peer institutions — by design, not by deficit.",
        },
        {
          value: "67%",
          label: "Princeton students say deflation hurt their job search",
          description:
            "Two-thirds of Princeton students report that grade deflation negatively impacted their experience with GPA-filtered applications.",
        },
      ],
    },
    solution: {
      badge: "Deflation-Adjusted",
      headline: "Your grades, inflation-adjusted.",
      description:
        "SkillPass calibrates Princeton grades against the school's actual grading distribution — not against inflated Ivy League averages. Your 3.3 at Princeton is calibrated relative to what a 3.3 actually means here: top-third performance at one of the most rigorous schools in the world.",
      features: [
        {
          title: "Deflation-Aware Calibration",
          description:
            "SkillPass's algorithm accounts for Princeton's grading distribution. Your Academic sub-score reflects your standing relative to Princeton norms, not national averages.",
        },
        {
          title: "Princeton-Tier Institutional Score",
          description:
            "Princeton sits at the highest institutional tier. Your calibrated GPA starts from a position of recognized excellence.",
        },
        {
          title: "Department-Level Grading",
          description:
            "ORF, COS, ECE, MOL — each department's unique grading curve is factored in. Some Princeton departments deflate harder than others.",
        },
        {
          title: "Thesis and Research References",
          description:
            "Princeton's junior paper and senior thesis culture means advisor references are particularly meaningful. Structured and scored.",
        },
      ],
    },
    proof: {
      headline: "Princeton students, properly calibrated",
      testimonial: {
        quote:
          "My 3.2 at Princeton was consistently hurting me with companies that used 3.5 cutoffs. The irony of being penalized by a grade deflation policy my school implemented for integrity reasons was maddening. My SkillScore — 779 with deflation-adjusted calibration — finally showed what that 3.2 actually represents. Three companies that had previously passed reconsidered after seeing my profile.",
        name: "Catherine W.",
        role: "Princeton '25, ORF",
        detail: "SkillScore: 779",
      },
      stats: [
        { value: "779", label: "Avg Princeton SkillScore" },
        { value: "3x", label: "Better context for employers" },
      ],
    },
    cta: {
      headline: "Princeton deflated your GPA.",
      gradientText: "SkillPass shows the real number.",
      description:
        "Build your deflation-adjusted profile. Free for every Tiger.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Princeton Calibration", href: "/how-it-works" },
    },
  },
];

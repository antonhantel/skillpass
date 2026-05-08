import type { LandingPage } from "./types";

export const professionalPages: LandingPage[] = [
  // ─────────────────────────────────────────────────────────────
  // CATEGORY E: YOUNG PROFESSIONALS (16 pages)
  // ─────────────────────────────────────────────────────────────

  // 43. new-graduates
  {
    slug: "new-graduates",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "New Graduates: Your First Professional Credential | SkillPass",
      description:
        "You spent 4+ years building skills. SkillPass turns your GPA, coursework rigor, and verified abilities into a SkillScore (300-850) that employers actually trust. Free forever.",
    },
    hero: {
      badge: "Class of 2026",
      headline: "Your Diploma Says You Finished.",
      gradientText: "Your SkillScore Says What You Can Do.",
      subheadline:
        "A 3.7 from one school isn't the same as a 3.7 from another. SkillPass calibrates your academic record across 4,000+ institutions, adds verified assessments, and gives you a single number employers trust. Free, always.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Sample Profile", href: "/demo" },
      trustLine: "Free for talent. No credit card. No catch.",
    },
    problem: {
      badge: "The Reality",
      headline: "The Job Market Doesn't Know",
      gradientText: "What You're Worth",
      description:
        "You graduated. You're talented. And you're competing against thousands of people with nearly identical resumes. Here's what that looks like in numbers.",
      stats: [
        {
          value: "250+",
          label: "Applications per role",
          description:
            "Entry-level positions average 250 applicants. Most get filtered out by keyword matching, not ability.",
        },
        {
          value: "7.4 mo",
          label: "Average job search",
          description:
            "New grads spend over seven months searching. That's half a year of unpaid stress.",
        },
        {
          value: "6 sec",
          label: "Resume review time",
          description:
            "Recruiters spend about six seconds on your resume. Your senior thesis? They won't read it.",
        },
      ],
    },
    solution: {
      badge: "How It Works",
      headline: "One Profile That",
      gradientText: "Proves Everything",
      description:
        "SkillPass combines four verified signals into your SkillScore. No fluff, no self-reported claims. Just proof.",
      features: [
        {
          title: "Calibrated Academic Score",
          description:
            "Your GPA gets weighted by course rigor and institution tier. A 3.5 in Stanford CS and a 3.5 in underwater basket weaving aren't the same -- and now employers can see that.",
        },
        {
          title: "Proctored Assessments",
          description:
            "Take one set of tests -- coding, writing, data analysis, whatever fits your field. Results go to every employer you apply to. No more repeating HackerRank for every company.",
        },
        {
          title: "Verified References",
          description:
            "Professors and internship supervisors rate you across 8 dimensions, from technical ability to coachability. Structured, quantified, and impossible to fake.",
        },
        {
          title: "Public Profile",
          description:
            "Your SkillPass profile lives at skillpass.io/you. Drop it in your LinkedIn, email signature, or application. Employers see your score before they see your resume.",
        },
      ],
    },
    proof: {
      headline: "New Grads Are Already Getting Hired Faster",
      testimonial: {
        quote:
          "I applied to 80+ jobs with just my resume and got 2 callbacks. After building my SkillPass profile, I got 6 interviews in two weeks. The SkillScore just short-circuits the whole resume-screening thing.",
        name: "Priya M.",
        role: "CS Graduate, Georgia Tech",
        detail: "SkillScore: 742",
      },
      stats: [
        { value: "60%", label: "Faster time-to-hire" },
        { value: "742", label: "Avg grad SkillScore" },
        { value: "4,000+", label: "Institutions scored" },
        { value: "$0", label: "Cost for talent" },
      ],
    },
    cta: {
      headline: "Your Skills Are Real.",
      gradientText: "Make Them Visible.",
      description:
        "Build your SkillPass profile in under 30 minutes. It's free, it's yours, and it travels with you for your entire career.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/how-it-works" },
    },
  },

  // 44. career-changers
  {
    slug: "career-changers",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Career Changers: Your New Skills Matter More Than Your Old Title | SkillPass",
      description:
        "Switching careers? SkillPass verifies your new abilities with proctored assessments, structured references, and a SkillScore (300-850) that tells employers what you can do now -- not what you did before.",
    },
    hero: {
      badge: "New Chapter",
      headline: "Your Last Job Title Is",
      gradientText: "Irrelevant. Your Skills Aren't.",
      subheadline:
        "Career changers get penalized for not having 'relevant experience.' SkillPass proves what you can actually do right now -- verified, scored, and trusted by employers who care about ability over tenure.",
      primaryCta: { text: "Prove Your New Skills", href: "/signup" },
      secondaryCta: { text: "How Verification Works", href: "/how-it-works" },
      trustLine: "Free for all talent. Forever.",
    },
    problem: {
      badge: "The Catch-22",
      headline: "You Can't Get Experience Without",
      gradientText: "Experience",
      description:
        "You've invested in learning new skills. But hiring systems are built to filter people like you out.",
      stats: [
        {
          value: "85%",
          label: "Filtered by ATS",
          description:
            "Applicant tracking systems reject career changers because your prior job titles don't match keywords.",
        },
        {
          value: "2.3x",
          label: "Longer job search",
          description:
            "Career changers take more than twice as long to land a role compared to people with linear career paths.",
        },
        {
          value: "23%",
          label: "Pay cut on average",
          description:
            "Even when you land the role, changers typically take a significant salary hit despite having transferable skills.",
        },
      ],
    },
    solution: {
      badge: "The Fix",
      headline: "Show What You Know,",
      gradientText: "Not Where You've Been",
      description:
        "SkillPass was built for people whose resumes don't tell the full story. Four verified signals that prove your current abilities.",
      features: [
        {
          title: "Skills-First Assessment",
          description:
            "Take proctored tests in your new field. Coding, data analysis, case studies, system design -- pick what matches your target role. Results speak louder than job history.",
        },
        {
          title: "Transferable Skill Mapping",
          description:
            "Your 360-degree references capture leadership, communication, and work ethic from anyone who's worked with you. These skills cross industry lines.",
        },
        {
          title: "Course Rigor Scoring",
          description:
            "That bootcamp, that certificate program, that evening MBA -- SkillPass scores the rigor of your training across 4,000+ institutions so employers see it's legit.",
        },
        {
          title: "One Score, Fresh Start",
          description:
            "Your SkillScore (300-850) reflects your verified abilities today. No historical bias. No 'years of experience' gatekeeping.",
        },
      ],
    },
    proof: {
      headline: "Career Changers Who Made the Jump",
      testimonial: {
        quote:
          "I went from teaching high school to product management. Every recruiter asked why I didn't have PM experience. My SkillPass profile showed a 780 with strong scores in communication, analytical thinking, and my case study assessment. Got hired at a Series B startup within a month.",
        name: "David K.",
        role: "Former Teacher, Now PM",
        detail: "SkillScore: 780",
      },
      stats: [
        { value: "60%", label: "Faster hiring" },
        { value: "3x", label: "More interview callbacks" },
        { value: "8", label: "Verified skill dimensions" },
        { value: "$0", label: "Free forever" },
      ],
    },
    cta: {
      headline: "Your Career Changed.",
      gradientText: "Your Proof Should Too.",
      description:
        "Build a verified profile that shows employers what you're capable of today. Takes 30 minutes. Costs nothing.",
      primaryCta: { text: "Start Your Profile", href: "/signup" },
      secondaryCta: { text: "See How Scoring Works", href: "/how-it-works" },
    },
  },

  // 45. bootcamp-to-tech
  {
    slug: "bootcamp-to-tech",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Bootcamp Grads: Bridge the Credibility Gap | SkillPass",
      description:
        "Bootcamp grad competing against CS majors? SkillPass verifies your coding ability with proctored assessments and a SkillScore (300-850) that puts you on equal footing. Free.",
    },
    hero: {
      badge: "Bootcamp Grads",
      headline: "You Learned to Code in 12 Weeks.",
      gradientText: "Prove It in One Assessment.",
      subheadline:
        "Hiring managers still wonder if bootcamps 'count.' SkillPass doesn't care where you learned -- it verifies what you know through proctored coding assessments, peer references, and calibrated course rigor scoring.",
      primaryCta: { text: "Verify Your Skills", href: "/signup" },
      secondaryCta: { text: "See a Bootcamp Profile", href: "/demo" },
      trustLine: "Completely free for talent.",
    },
    problem: {
      badge: "The Stigma",
      headline: "Bootcamp Bias Is",
      gradientText: "Real",
      description:
        "You can build full-stack apps. You can ship production code. But some employers still toss your resume because you don't have a four-year degree.",
      stats: [
        {
          value: "37%",
          label: "Rejected for 'no degree'",
          description:
            "Over a third of tech companies still auto-filter candidates without a bachelor's in CS. Your skills don't matter if they never see them.",
        },
        {
          value: "5-8",
          label: "Coding tests per search",
          description:
            "Bootcamp grads take an average of 5-8 separate coding assessments during a job search. Same skills, tested over and over.",
        },
        {
          value: "$15K",
          label: "Salary gap",
          description:
            "Bootcamp grads earn roughly $15K less than CS grads in their first role -- even when they're doing identical work.",
        },
      ],
    },
    solution: {
      badge: "Level the Field",
      headline: "Same Test.",
      gradientText: "Same Score. Equal Footing.",
      description:
        "SkillPass measures ability, not pedigree. Your SkillScore puts you on the same scale as every other candidate.",
      features: [
        {
          title: "Proctored Coding Assessment",
          description:
            "Algorithms, system design, and practical coding -- all proctored and scored. One test, accepted by every employer on the platform. No more repeat HackerRanks.",
        },
        {
          title: "Bootcamp Rigor Scoring",
          description:
            "SkillPass rates your bootcamp's curriculum rigor against 4,000+ programs. A strong bootcamp gets credit. A weak one doesn't. Employers see the difference.",
        },
        {
          title: "Peer & Instructor References",
          description:
            "Structured references from your bootcamp cohort and instructors across 8 dimensions: technical ability, collaboration, coachability, and more.",
        },
        {
          title: "Portfolio + Proof",
          description:
            "Your GitHub shows what you built. Your SkillScore shows how well you think, communicate, and collaborate. Together, they're a complete picture.",
        },
      ],
    },
    proof: {
      headline: "Bootcamp Grads Breaking Through",
      testimonial: {
        quote:
          "Fullstack Academy gave me the skills. SkillPass gave me the credibility. My assessment scores were higher than most CS grads applying for the same roles, and hiring managers could see that. Got three offers in six weeks.",
        name: "Jasmine T.",
        role: "Fullstack Academy Graduate",
        detail: "SkillScore: 728",
      },
      stats: [
        { value: "728", label: "Avg bootcamp SkillScore" },
        { value: "1", label: "Assessment, all employers" },
        { value: "60%", label: "Faster hiring" },
        { value: "$0", label: "Always free" },
      ],
    },
    cta: {
      headline: "You Didn't Take a Shortcut.",
      gradientText: "Stop Being Treated Like You Did.",
      description:
        "One verified profile. One SkillScore. Every employer sees the same proof. Build yours free.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
    },
  },

  // 46. first-job-after-college
  {
    slug: "first-job-after-college",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "First Job After College: Position Your First Career Move | SkillPass",
      description:
        "Landing your first job is a positioning game. SkillPass gives you a verified SkillScore (300-850) that makes you stand out from thousands of identical new grads. Free.",
    },
    hero: {
      badge: "First Move",
      headline: "Everyone Has a Degree.",
      gradientText: "Not Everyone Has Proof.",
      subheadline:
        "Your first job sets the trajectory. Don't leave it to resume keywords and luck. SkillPass gives you a verified, quantified profile that puts you ahead of the stack before a recruiter even opens your resume.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Always free for job seekers.",
    },
    problem: {
      badge: "The Pile",
      headline: "You're One of",
      gradientText: "10 Million Grads This Year",
      description:
        "Graduation feels like an accomplishment until you realize everyone else just accomplished the same thing. Here's the math on standing out.",
      stats: [
        {
          value: "73%",
          label: "Underemployed at 6 months",
          description:
            "Nearly three-quarters of recent grads take roles that don't require their degree. Your first job matters -- don't settle.",
        },
        {
          value: "250",
          label: "Applicants per entry role",
          description:
            "You're not competing against 5 people. You're competing against 250 nearly identical candidates.",
        },
        {
          value: "$3,400",
          label: "Spent on job search",
          description:
            "Between resume services, interview prep, and lost income, the average grad spends thousands just trying to get hired.",
        },
      ],
    },
    solution: {
      badge: "Stand Out",
      headline: "A Number That",
      gradientText: "Means Something",
      description:
        "Your GPA is one data point. Your SkillScore is a comprehensive, verified signal built from four independent sources.",
      features: [
        {
          title: "Academic Calibration",
          description:
            "Your GPA gets contextualized against your institution's tier and your specific courses' rigor. A 3.4 in engineering hits different than a 3.4 in general studies.",
        },
        {
          title: "Assessment Portfolio",
          description:
            "Pick the assessments that match your target role. Coding, case analysis, writing, data -- take them once, share everywhere.",
        },
        {
          title: "Reference Network",
          description:
            "Professors, TAs, internship managers, project teammates. Structured 360-degree references across 8 dimensions that go way beyond 'great student.'",
        },
        {
          title: "Instant Credibility",
          description:
            "Drop your skillpass.io link in every application. Employers see a verified score before they decide whether to read further. It's like a credit score for hiring.",
        },
      ],
    },
    proof: {
      headline: "First Jobs, Faster",
      testimonial: {
        quote:
          "My roommate and I graduated with the same GPA from the same program. I built a SkillPass profile, she didn't. I had an offer in three weeks. She's still looking four months later. That's not luck -- it's proof.",
        name: "Marcus J.",
        role: "Recent Graduate, UMich",
        detail: "SkillScore: 756",
      },
      stats: [
        { value: "60%", label: "Faster time-to-hire" },
        { value: "3x", label: "Interview rate" },
        { value: "756", label: "Avg first-job SkillScore" },
        { value: "Free", label: "For every grad" },
      ],
    },
    cta: {
      headline: "Your First Job Defines Your Trajectory.",
      gradientText: "Don't Leave It to Chance.",
      description:
        "30 minutes to build. Free forever. Yours to share with every employer you apply to.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/how-it-works" },
    },
  },

  // 47. entry-level-swe
  {
    slug: "entry-level-swe",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Entry-Level SWE: Stop Retaking Coding Tests at Every Company | SkillPass",
      description:
        "Junior software engineers take 5-10 coding assessments per job search. SkillPass lets you take one proctored assessment and share verified results with every employer. Free.",
    },
    hero: {
      badge: "Junior SWEs",
      headline: "You've Solved Two Sum",
      gradientText: "47 Times. That's Enough.",
      subheadline:
        "Every company makes you take the same coding test. SkillPass lets you take one proctored assessment -- algorithms, system design, practical coding -- and share verified results with every employer. Stop proving the same thing over and over.",
      primaryCta: { text: "Take It Once", href: "/signup" },
      secondaryCta: { text: "See Assessment Types", href: "/assessments" },
      trustLine: "One test. Every employer. Free.",
    },
    problem: {
      badge: "Assessment Fatigue",
      headline: "The Same Test.",
      gradientText: "Over and Over and Over.",
      description:
        "You know how to code. The market knows you know how to code. But every company needs you to prove it again from scratch.",
      stats: [
        {
          value: "8.2",
          label: "Avg coding tests per search",
          description:
            "Junior SWEs take an average of 8 separate coding assessments during a job search. That's 30+ hours of redundant testing.",
        },
        {
          value: "67%",
          label: "Identical question overlap",
          description:
            "Two-thirds of the questions you'll see are the same problems recycled across companies. Array manipulation, tree traversal, repeat.",
        },
        {
          value: "23 days",
          label: "Lost to assessments",
          description:
            "Between prep, scheduling, and test-taking, nearly a month of your job search is spent on coding tests you've already passed elsewhere.",
        },
      ],
    },
    solution: {
      badge: "One and Done",
      headline: "Prove It Once.",
      gradientText: "Share It Everywhere.",
      description:
        "SkillPass gives you a single, verified, proctored coding assessment that every employer trusts. Here's what's in it.",
      features: [
        {
          title: "Algorithms & Data Structures",
          description:
            "The stuff you already know -- arrays, trees, graphs, dynamic programming. Proctored, timed, scored. Accepted everywhere.",
        },
        {
          title: "System Design Basics",
          description:
            "Design a URL shortener. Plan a notification system. The kind of problems you'll actually face on day one, not gotcha trivia.",
        },
        {
          title: "Practical Coding",
          description:
            "Build something real in a proctored environment. Not a whiteboard -- an actual IDE with real problems that reflect actual engineering work.",
        },
        {
          title: "Peer Signal",
          description:
            "References from professors, teammates, and internship leads. Structured across 8 dimensions including technical ability, collaboration, and reliability.",
        },
      ],
    },
    proof: {
      headline: "SWEs Who Stopped Repeating Themselves",
      testimonial: {
        quote:
          "I was so tired of taking HackerRank after HackerRank. Built my SkillPass profile, scored a 761 on the coding assessment, and just started dropping the link in applications. Three companies skipped their own technical screen because they trusted the score.",
        name: "Ryan L.",
        role: "Junior SWE",
        detail: "SkillScore: 761",
      },
      stats: [
        { value: "1", label: "Assessment needed" },
        { value: "30+", label: "Hours saved per search" },
        { value: "761", label: "Avg SWE SkillScore" },
        { value: "$0", label: "Cost" },
      ],
    },
    cta: {
      headline: "Take It Once.",
      gradientText: "Never Again.",
      description:
        "One proctored coding assessment. Every employer sees it. You're done. Build your profile free.",
      primaryCta: { text: "Start Your Assessment", href: "/signup" },
      secondaryCta: { text: "View Sample Results", href: "/demo" },
    },
  },

  // 48. military-to-civilian
  {
    slug: "military-to-civilian",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Military to Civilian: Translate Your Service Into Verified Skills | SkillPass",
      description:
        "Military experience doesn't translate neatly to corporate resumes. SkillPass verifies your leadership, technical ability, and teamwork with a SkillScore (300-850) civilians understand. Free.",
    },
    hero: {
      badge: "Veterans & Transitioning Military",
      headline: "You Led a Platoon.",
      gradientText: "A Recruiter Needs a Resume Bullet.",
      subheadline:
        "Military skills are real but hard to translate. SkillPass converts your leadership, technical training, and collaboration into a verified SkillScore that civilian hiring managers actually understand and trust.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Veteran Profile", href: "/demo" },
      trustLine: "Free for all service members and veterans.",
    },
    problem: {
      badge: "Lost in Translation",
      headline: "Civilian Hiring Can't",
      gradientText: "Read Your DD-214",
      description:
        "You have more leadership experience than most MBAs. But if it doesn't fit into a recruiter's keyword search, it might as well not exist.",
      stats: [
        {
          value: "53%",
          label: "Underemployed vets",
          description:
            "Over half of veterans take roles below their skill level within the first year of transition. Not because they lack ability -- because hiring systems can't parse military experience.",
        },
        {
          value: "33%",
          label: "Leave first civilian job in <1yr",
          description:
            "A third of veterans leave their first civilian job within a year, often because the role didn't match their actual capabilities.",
        },
        {
          value: "9.2 mo",
          label: "Average transition time",
          description:
            "The gap between leaving service and finding meaningful civilian employment averages over nine months.",
        },
      ],
    },
    solution: {
      badge: "Skills That Translate",
      headline: "Your Training Is Verified.",
      gradientText: "Now It's Visible.",
      description:
        "SkillPass captures the skills military service built and packages them in a format civilian employers actually use.",
      features: [
        {
          title: "Leadership Verification",
          description:
            "360-degree references from commanding officers, peers, and direct reports. Eight dimensions that map perfectly to corporate leadership: communication, reliability, work ethic, and more.",
        },
        {
          title: "Technical Skills Assessment",
          description:
            "Proctored assessments in your transition field -- IT, engineering, project management, analytics. One test, verified results, every employer.",
        },
        {
          title: "Training Calibration",
          description:
            "Military technical training programs get rigor-scored alongside 4,000+ civilian institutions. Your MOS school wasn't easy -- and now employers see that.",
        },
        {
          title: "Universal Language",
          description:
            "Your SkillScore (300-850) speaks the same language as every other candidate's. No translation needed. No jargon. Just verified ability.",
        },
      ],
    },
    proof: {
      headline: "Veterans Making the Transition",
      testimonial: {
        quote:
          "Six years in Army signals and I couldn't get past recruiters because my resume was full of military acronyms. SkillPass translated all of that into a 791 SkillScore with strong leadership and technical marks. Hired as a network engineer within five weeks.",
        name: "Staff Sgt. James W.",
        role: "US Army Veteran, 6 years",
        detail: "SkillScore: 791",
      },
      stats: [
        { value: "791", label: "Avg veteran SkillScore" },
        { value: "60%", label: "Faster placement" },
        { value: "8", label: "Verified dimensions" },
        { value: "$0", label: "Free for vets" },
      ],
    },
    cta: {
      headline: "You Served Your Country.",
      gradientText: "Let Your Skills Serve Your Career.",
      description:
        "Build a verified profile that speaks civilian. Free forever for every veteran and service member.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/how-it-works" },
    },
  },

  // 49. self-taught-developers
  {
    slug: "self-taught-developers",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Self-Taught Developers: No Degree, Verified Skills | SkillPass",
      description:
        "You taught yourself to code. SkillPass verifies what you know with proctored assessments, structured references, and a SkillScore (300-850) that bypasses the degree filter. Free.",
    },
    hero: {
      badge: "Self-Taught Devs",
      headline: "No One Handed You a Curriculum.",
      gradientText: "You Built Your Own.",
      subheadline:
        "Self-taught developers ship real products. But ATS systems still filter you out for lacking a bachelor's. SkillPass gives you proctored, verified proof of your actual coding ability -- no degree required.",
      primaryCta: { text: "Prove What You Know", href: "/signup" },
      secondaryCta: { text: "Assessment Details", href: "/assessments" },
      trustLine: "Free for every developer. Always.",
    },
    problem: {
      badge: "The Degree Wall",
      headline: "You Can Code.",
      gradientText: "The Filter Can't Tell.",
      description:
        "Automated resume screening doesn't measure ability. It measures credentials. And that's a problem for people who learned by doing.",
      stats: [
        {
          value: "40%",
          label: "Auto-rejected for no degree",
          description:
            "Nearly half of software roles still list a bachelor's as 'required.' Your portfolio won't save you if your resume gets tossed first.",
        },
        {
          value: "72%",
          label: "Self-taught devs say bias exists",
          description:
            "Almost three-quarters of self-taught developers report experiencing bias in hiring processes due to lacking formal education.",
        },
        {
          value: "$22K",
          label: "Starting salary gap",
          description:
            "Self-taught developers earn significantly less in their first role compared to CS grads -- even when their skills are equivalent or better.",
        },
      ],
    },
    solution: {
      badge: "Proof Over Paper",
      headline: "Your Code Works.",
      gradientText: "Now Your Credentials Do Too.",
      description:
        "SkillPass doesn't ask where you went to school. It tests what you can do and verifies how you work.",
      features: [
        {
          title: "Proctored Coding Tests",
          description:
            "Algorithms, system design, practical builds. Same tests CS grads take. Same scoring. Your results stand on their own merit.",
        },
        {
          title: "Self-Study Rigor Scoring",
          description:
            "Completed freeCodeCamp? Odin Project? Coursera specializations? SkillPass scores the rigor of self-study programs just like formal institutions.",
        },
        {
          title: "Work References",
          description:
            "Freelance clients, open-source collaborators, project leads. Structured 8-dimension references that prove how you work, not just that you can code.",
        },
        {
          title: "Bypass the Filter",
          description:
            "Employers on SkillPass search by SkillScore, not degree. A 740 is a 740 whether it came from MIT or your living room at 2am.",
        },
      ],
    },
    proof: {
      headline: "Self-Taught and Hired",
      testimonial: {
        quote:
          "I've been coding for four years. Built three production apps. Open-source contributor. Still couldn't get past the 'Bachelor's required' filter. My SkillPass assessment scored higher than most CS grads, and suddenly recruiters were reaching out to me instead.",
        name: "Alex R.",
        role: "Self-Taught Full-Stack Developer",
        detail: "SkillScore: 748",
      },
      stats: [
        { value: "748", label: "Avg self-taught score" },
        { value: "0", label: "Degree required" },
        { value: "8", label: "Assessment types" },
        { value: "Free", label: "Always" },
      ],
    },
    cta: {
      headline: "You Taught Yourself.",
      gradientText: "Now Let the World See.",
      description:
        "One verified profile that proves your skills, no matter how you learned them. Free forever.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "See Sample Scores", href: "/demo" },
    },
  },

  // 50. no-degree-professionals
  {
    slug: "no-degree-professionals",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "No Degree? Skills-First Hiring With SkillPass",
      description:
        "No college degree shouldn't mean no opportunity. SkillPass measures verified ability -- not pedigree -- with a SkillScore (300-850). Free for all talent.",
    },
    hero: {
      badge: "Skills-First",
      headline: "A Degree Proves You Sat in a Room for Four Years.",
      gradientText: "Your SkillScore Proves You Can Perform.",
      subheadline:
        "Apple, Google, and IBM dropped degree requirements years ago. But most companies haven't. SkillPass gives you the verified credential that makes the degree question irrelevant.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "How Scoring Works", href: "/how-it-works" },
      trustLine: "Free for every professional. No degree needed.",
    },
    problem: {
      badge: "The Paper Ceiling",
      headline: "70 Million Americans Don't Have a Degree.",
      gradientText: "Most Are Underemployed.",
      description:
        "The 'paper ceiling' is the invisible barrier that keeps skilled professionals without degrees locked out of roles they're qualified for.",
      stats: [
        {
          value: "70M",
          label: "Workers without degrees",
          description:
            "Over 70 million American workers don't have a four-year degree. Many of them are exceptional at their jobs.",
        },
        {
          value: "62%",
          label: "Of roles require degrees",
          description:
            "Nearly two-thirds of job postings still require a bachelor's, even when the role itself doesn't need one.",
        },
        {
          value: "$30K",
          label: "Lifetime earnings gap",
          description:
            "Per year. Over a career, the degree-vs-no-degree gap adds up to over $1M -- regardless of actual skill level.",
        },
      ],
    },
    solution: {
      badge: "Break Through",
      headline: "Skills, Verified.",
      gradientText: "Degree, Optional.",
      description:
        "SkillPass creates a credential that's based entirely on what you can do. Four verification methods, one score.",
      features: [
        {
          title: "Proctored Ability Testing",
          description:
            "Take assessments in your field -- coding, writing, data analysis, general mental ability. Proctored, scored, and trusted. Your results, not your transcript.",
        },
        {
          title: "Experience Validation",
          description:
            "Performance reviews analyzed by NLP. Your actual work history, quantified into a score that proves you've delivered results.",
        },
        {
          title: "360-Degree References",
          description:
            "Managers, peers, and clients rate you across 8 dimensions. Structured and verified. Way more useful than a reference letter from a professor you took one class with.",
        },
        {
          title: "SkillScore: The New Credential",
          description:
            "300-850, like a credit score for your career. Employers search by score, not by degree. Your number is your ticket in.",
        },
      ],
    },
    proof: {
      headline: "No Degree. Big Careers.",
      testimonial: {
        quote:
          "I dropped out of college after one year because I couldn't afford it. Spent six years building real skills on the job. SkillPass finally gave me a way to prove what I know without that piece of paper. Landed a $95K role at a fintech company.",
        name: "Tanya S.",
        role: "Operations Manager",
        detail: "SkillScore: 735",
      },
      stats: [
        { value: "735", label: "Avg no-degree SkillScore" },
        { value: "4", label: "Verification methods" },
        { value: "60%", label: "Faster hiring" },
        { value: "$0", label: "Free for talent" },
      ],
    },
    cta: {
      headline: "You Don't Need a Degree.",
      gradientText: "You Need Proof.",
      description:
        "SkillPass is the credential that's built on ability, not tuition. Free to build, yours forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/how-it-works" },
    },
  },

  // 51. h1b-candidates
  {
    slug: "h1b-candidates",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "H-1B Candidates: Stand Out in the Sponsorship-Competitive Market | SkillPass",
      description:
        "H-1B sponsorship is competitive. SkillPass gives you a verified SkillScore (300-850) that proves you're worth the investment. Make the sponsorship decision easy. Free.",
    },
    hero: {
      badge: "H-1B Professionals",
      headline: "They Won't Sponsor a Resume.",
      gradientText: "They'll Sponsor a SkillScore.",
      subheadline:
        "Sponsoring an H-1B costs employers $10K+ in legal fees. They need certainty. SkillPass gives them a verified, proctored, multi-dimensional assessment of your skills -- making you the low-risk, high-reward candidate.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free for all candidates. Any visa status.",
    },
    problem: {
      badge: "The Sponsorship Barrier",
      headline: "Companies Want to Hire You.",
      gradientText: "They're Afraid to Sponsor You.",
      description:
        "It's not that you're not good enough. It's that sponsorship is expensive and risky, and most companies can't tell how good you are from a resume.",
      stats: [
        {
          value: "$10K+",
          label: "Cost to sponsor",
          description:
            "Filing fees, legal costs, and processing time make every H-1B hire a significant investment. Employers need to be sure.",
        },
        {
          value: "25%",
          label: "Lottery selection rate",
          description:
            "Only about one in four H-1B applications gets selected. Employers are investing in an uncertain outcome.",
        },
        {
          value: "3x",
          label: "More scrutiny",
          description:
            "H-1B candidates face roughly three times more interview rounds than domestic candidates for the same roles.",
        },
      ],
    },
    solution: {
      badge: "De-Risk Yourself",
      headline: "Make the Decision",
      gradientText: "Obvious",
      description:
        "When an employer can see a verified 780 SkillScore with proctored assessments and calibrated credentials, sponsorship stops being a gamble.",
      features: [
        {
          title: "International Credential Calibration",
          description:
            "SkillPass rates 4,000+ institutions worldwide. Your IIT degree, your NUS transcript, your ETH Zurich coursework -- all calibrated against a universal standard.",
        },
        {
          title: "Proctored Technical Assessment",
          description:
            "Same tests, same proctoring, same scoring as domestic candidates. Your results are directly comparable. No advantage, no disadvantage -- just ability.",
        },
        {
          title: "Verified Peer Signal",
          description:
            "References from previous employers, professors, and colleagues -- structured across 8 dimensions. Proves you can collaborate across cultures and communicate clearly.",
        },
        {
          title: "Public Profile Link",
          description:
            "Share skillpass.io/you with any employer, recruiter, or immigration attorney. One link that answers every question about your qualifications.",
        },
      ],
    },
    proof: {
      headline: "H-1B Candidates Getting Sponsored",
      testimonial: {
        quote:
          "Three companies told me they 'don't sponsor.' After I shared my SkillPass profile with a 793 score, two of those companies reached back out. One ended up sponsoring me. The verified score made me worth the investment in their eyes.",
        name: "Arjun P.",
        role: "Software Engineer from India",
        detail: "SkillScore: 793",
      },
      stats: [
        { value: "793", label: "Avg H-1B SkillScore" },
        { value: "4,000+", label: "Global institutions" },
        { value: "60%", label: "Faster decision" },
        { value: "Free", label: "For every candidate" },
      ],
    },
    cta: {
      headline: "Worth Sponsoring.",
      gradientText: "Now Prove It.",
      description:
        "Build a verified profile that removes the guesswork. Free to create, globally calibrated, accepted everywhere.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Global Calibration", href: "/institutions" },
    },
  },

  // 52. opt-students
  {
    slug: "opt-students",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "OPT Students: 90 Days. Don't Waste 60 on Screens. | SkillPass",
      description:
        "OPT clock is ticking. SkillPass gives you a verified SkillScore (300-850) that helps employers skip screens and make faster offers. Free for all students.",
    },
    hero: {
      badge: "OPT / STEM OPT",
      headline: "90 Days on the Clock.",
      gradientText: "60 Wasted on Screening.",
      subheadline:
        "You graduated. Your OPT window is open. But standard hiring takes 45-60 days of screening, interviews, and assessments. SkillPass collapses that timeline by giving employers verified proof upfront.",
      primaryCta: { text: "Build Your Profile Now", href: "/signup" },
      secondaryCta: { text: "How It Speeds Things Up", href: "/how-it-works" },
      trustLine: "Free. Always. No strings.",
    },
    problem: {
      badge: "Time Pressure",
      headline: "The Clock Doesn't Care About",
      gradientText: "Hiring Timelines",
      description:
        "OPT gives you a window. Standard hiring processes don't fit in that window. And unemployment gaps trigger compliance issues.",
      stats: [
        {
          value: "90 days",
          label: "Unemployment grace period",
          description:
            "Miss this window and you're out of status. 90 days sounds like a lot until you realize most hiring processes take 60+.",
        },
        {
          value: "45-60",
          label: "Days to hire (avg)",
          description:
            "From application to offer, most companies take 45-60 days. That leaves you almost no margin for error.",
        },
        {
          value: "4-6",
          label: "Interview rounds typical",
          description:
            "Phone screen, technical screen, coding test, panel, hiring manager, offer negotiation. Each round adds days you don't have.",
        },
      ],
    },
    solution: {
      badge: "Speed Up the Process",
      headline: "Pre-Verified.",
      gradientText: "Pre-Assessed. Pre-Ready.",
      description:
        "When employers see your SkillPass profile, they already know what they need to know. That means fewer rounds and faster offers.",
      features: [
        {
          title: "Skip the Technical Screen",
          description:
            "Your proctored assessment results are already verified. Smart employers skip their own technical screens when they see a high SkillScore. That's one round gone.",
        },
        {
          title: "Calibrated US Transcript",
          description:
            "Your US degree gets full calibration -- institution tier, course rigor, GPA context. Employers see exactly what your academic record means.",
        },
        {
          title: "Ready-to-Hire Signal",
          description:
            "A high SkillScore tells employers you're verified, assessed, and referenced. The only thing left is a culture fit conversation.",
        },
        {
          title: "Visible to Employers",
          description:
            "Employers on SkillPass actively search for candidates. Your profile puts you in their pipeline before you even apply.",
        },
      ],
    },
    proof: {
      headline: "OPT Students Beating the Clock",
      testimonial: {
        quote:
          "I had 90 days and was panicking. Built my SkillPass profile on day one. A company found me through the platform on day twelve and made an offer by day twenty-eight. They told me my 768 SkillScore let them skip two interview rounds.",
        name: "Wei L.",
        role: "MS CS Graduate, STEM OPT",
        detail: "SkillScore: 768",
      },
      stats: [
        { value: "28 days", label: "Avg time to offer" },
        { value: "2", label: "Interview rounds skipped" },
        { value: "768", label: "Avg OPT SkillScore" },
        { value: "$0", label: "Free for students" },
      ],
    },
    cta: {
      headline: "The Clock Is Running.",
      gradientText: "Move Faster.",
      description:
        "Build your profile today. Start getting seen tomorrow. Free for every OPT student.",
      primaryCta: { text: "Start Now", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
  },

  // 53. teaching-to-tech
  {
    slug: "teaching-to-tech",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Teachers Moving to Tech: You Taught It, Now Prove You Can Build It | SkillPass",
      description:
        "Leaving teaching for tech? You know algorithms better than most interviewers. SkillPass verifies your technical and communication skills with a SkillScore employers trust. Free.",
    },
    hero: {
      badge: "Teachers to Tech",
      headline: "You Taught Algorithms to 150 Kids.",
      gradientText: "Now Prove You Can Ship Code.",
      subheadline:
        "Former teachers have deep content knowledge, extraordinary communication skills, and the patience of saints. SkillPass gives you verifiable proof of the technical chops to match -- so employers see the full picture.",
      primaryCta: { text: "Verify Your Skills", href: "/signup" },
      secondaryCta: { text: "See the Assessment", href: "/assessments" },
      trustLine: "Free for all career changers.",
    },
    problem: {
      badge: "The Perception Gap",
      headline: "They See 'Teacher.'",
      gradientText: "They Don't See 'Engineer.'",
      description:
        "You've been building and explaining complex systems for years. But 'high school teacher' on a resume triggers assumptions that are hard to shake.",
      stats: [
        {
          value: "88%",
          label: "Resume rejection rate",
          description:
            "Teachers transitioning to tech face one of the highest resume rejection rates of any career-change group.",
        },
        {
          value: "$45K",
          label: "Avg teacher salary",
          description:
            "Compared to $115K+ for mid-level software engineers. The pay gap is real, and it creates urgency to transition quickly.",
        },
        {
          value: "0",
          label: "Credit for teaching skills",
          description:
            "Communication, patience, debugging student logic, explaining complex ideas simply -- none of this shows up in a standard tech interview.",
        },
      ],
    },
    solution: {
      badge: "Full Picture",
      headline: "Technical Skills +",
      gradientText: "The Skills Only Teachers Have",
      description:
        "SkillPass captures both your coding ability and the soft skills that make ex-teachers exceptional hires.",
      features: [
        {
          title: "Technical Assessment",
          description:
            "Proctored coding tests in algorithms, data structures, and system design. You've been teaching this material -- now score it for yourself.",
        },
        {
          title: "Communication Score",
          description:
            "The writing assessment and peer references specifically capture your communication ability. This is your superpower, and now it's quantified.",
        },
        {
          title: "Coachability & Leadership",
          description:
            "360-degree references rate you on coachability, leadership, and collaboration. Former students, colleagues, and administrators all count.",
        },
        {
          title: "Course Rigor from Both Careers",
          description:
            "Your education degree AND your tech training (bootcamp, online courses, certificates) both get scored. Two careers' worth of learning, one profile.",
        },
      ],
    },
    proof: {
      headline: "From the Classroom to the Codebase",
      testimonial: {
        quote:
          "I taught AP CS for six years. I know more about algorithms than half the engineers I've met. But my resume said 'teacher' and doors closed. SkillPass scored my technical ability at the 90th percentile and highlighted my communication as exceptional. Hired as a senior developer within two months.",
        name: "Sarah M.",
        role: "Former AP CS Teacher",
        detail: "SkillScore: 772",
      },
      stats: [
        { value: "772", label: "Avg teacher-to-tech score" },
        { value: "90th", label: "Percentile communication" },
        { value: "60%", label: "Faster transition" },
        { value: "$0", label: "Free always" },
      ],
    },
    cta: {
      headline: "You Explained It to 16-Year-Olds.",
      gradientText: "You Can Definitely Do It.",
      description:
        "Build a profile that shows both your technical depth and the human skills that make ex-teachers the best hires in tech.",
      primaryCta: { text: "Start Your Profile", href: "/signup" },
      secondaryCta: { text: "View Assessments", href: "/assessments" },
    },
  },

  // 54. after-layoff
  {
    slug: "after-layoff",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "After a Layoff: Your Skills Didn't Get Laid Off | SkillPass",
      description:
        "Laid off? Your skills are intact. SkillPass gives you a verified SkillScore (300-850) that proves your ability hasn't changed -- just your employer. Free.",
    },
    hero: {
      badge: "Post-Layoff",
      headline: "The Company Downsized.",
      gradientText: "Your Skills Didn't.",
      subheadline:
        "A layoff is a business decision, not a performance review. But hiring managers don't always see it that way. SkillPass gives you fresh, verified proof that you're exactly as capable as you were the day before.",
      primaryCta: { text: "Rebuild Your Proof", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free for everyone. Especially right now.",
    },
    problem: {
      badge: "The Stigma",
      headline: "Getting Laid Off Is Normal.",
      gradientText: "Being Treated Like Damaged Goods Isn't.",
      description:
        "You know your layoff wasn't about performance. But you can't control the narrative once your resume hits a recruiter's desk.",
      stats: [
        {
          value: "42%",
          label: "Report hiring bias",
          description:
            "Over 40% of laid-off professionals report experiencing bias in their next job search. The stigma is quiet but real.",
        },
        {
          value: "5.2 mo",
          label: "Average re-employment time",
          description:
            "Finding the next role after a layoff takes over five months on average. Every week without income adds pressure to accept less.",
        },
        {
          value: "18%",
          label: "Salary cut at next role",
          description:
            "Many laid-off workers accept lower salaries just to get back to work, even when their skills warrant more.",
        },
      ],
    },
    solution: {
      badge: "Fresh Proof",
      headline: "Current Skills.",
      gradientText: "Current Verification.",
      description:
        "SkillPass gives you a timestamp on your abilities. Not what you did at your last company -- what you can do right now.",
      features: [
        {
          title: "Updated Assessment",
          description:
            "Take a proctored assessment that's dated today. Your skills haven't degraded since last week. Now there's proof.",
        },
        {
          title: "Performance History",
          description:
            "Your NLP-analyzed performance reviews from your previous role still count. Good reviews don't expire because a company decided to cut costs.",
        },
        {
          title: "Reference Refresh",
          description:
            "Former managers, teammates, and cross-functional partners. Get structured references from people who worked with you and know what you're capable of.",
        },
        {
          title: "Employer Visibility",
          description:
            "Your public profile puts you in front of employers actively searching. Don't just apply -- be found.",
        },
      ],
    },
    proof: {
      headline: "Back to Work, Faster",
      testimonial: {
        quote:
          "I was part of a 10,000-person layoff at a major tech company. Felt like starting from zero. Built my SkillPass profile in a weekend, scored a 782, and had three serious conversations within two weeks. The score told employers what the layoff couldn't: I'm really good at this.",
        name: "Chris D.",
        role: "Staff Engineer, post-layoff",
        detail: "SkillScore: 782",
      },
      stats: [
        { value: "782", label: "Avg post-layoff score" },
        { value: "60%", label: "Faster re-employment" },
        { value: "2 wks", label: "Avg to first interview" },
        { value: "$0", label: "Free" },
      ],
    },
    cta: {
      headline: "Your Skills Are Intact.",
      gradientText: "Prove It Today.",
      description:
        "Build your verified profile this weekend. Start getting interviews next week. It's free.",
      primaryCta: { text: "Start Now", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
  },

  // 55. relocating-professionals
  {
    slug: "relocating-professionals",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Relocating Professionals: New City, Same SkillScore | SkillPass",
      description:
        "Moving to a new city? Your reputation doesn't travel with you, but your SkillScore does. Verified skills, portable proof, trusted everywhere. Free.",
    },
    hero: {
      badge: "Relocating",
      headline: "New City. No Network.",
      gradientText: "Same SkillScore.",
      subheadline:
        "Your professional reputation is local. Your SkillScore isn't. Whether you're moving across the state or across the country, SkillPass gives you a verified credential that works everywhere you go.",
      primaryCta: { text: "Make Your Skills Portable", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free. Portable. Permanent.",
    },
    problem: {
      badge: "Starting Over",
      headline: "Your Reputation",
      gradientText: "Doesn't Have a Forwarding Address",
      description:
        "You built a career somewhere. People knew your work. Now you're in a new city where nobody knows you from anybody.",
      stats: [
        {
          value: "4.3 mo",
          label: "Job search when relocating",
          description:
            "Relocating professionals take 40% longer to find work because they lack local networks and references that recruiters can call.",
        },
        {
          value: "68%",
          label: "Say networking is hardest part",
          description:
            "Over two-thirds of relocating professionals cite rebuilding their professional network as the biggest challenge.",
        },
        {
          value: "Local",
          label: "Bias in hiring",
          description:
            "Many employers prefer local candidates. An out-of-state address on your resume can mean automatic rejection.",
        },
      ],
    },
    solution: {
      badge: "Portable Proof",
      headline: "Your Skills Travel.",
      gradientText: "Now Your Proof Does Too.",
      description:
        "SkillPass is location-independent. Your SkillScore, your references, your assessments -- they're all verified and accessible from anywhere.",
      features: [
        {
          title: "Location-Independent Score",
          description:
            "Your SkillScore doesn't care about zip codes. 750 in Chicago means 750 in Austin means 750 in New York.",
        },
        {
          title: "Remote Reference Network",
          description:
            "References from your previous city are verified and available. Employers in your new city see the same structured feedback.",
        },
        {
          title: "Instant Local Credibility",
          description:
            "Drop your skillpass.io link in applications. Local employers get verified proof of your abilities before you've even met.",
        },
        {
          title: "Employer Discovery",
          description:
            "Employers on SkillPass search by skills and score, not by location. Get found by companies in your new city before you even arrive.",
        },
      ],
    },
    proof: {
      headline: "Relocators Who Hit the Ground Running",
      testimonial: {
        quote:
          "Moved from Seattle to Austin with no Texas network whatsoever. In Seattle, I could get a warm intro anywhere. In Austin, I was nobody. Sent my SkillPass profile to three companies and all three moved me to final rounds. My 764 spoke for me when I had no one to vouch.",
        name: "Megan T.",
        role: "Product Designer, Seattle to Austin",
        detail: "SkillScore: 764",
      },
      stats: [
        { value: "764", label: "Avg relocator SkillScore" },
        { value: "60%", label: "Faster local hiring" },
        { value: "Anywhere", label: "Profile works globally" },
        { value: "$0", label: "Free forever" },
      ],
    },
    cta: {
      headline: "Moving Is Hard Enough.",
      gradientText: "Don't Start Your Career Over Too.",
      description:
        "Build your portable, verified profile before you move. Arrive in your new city with proof that travels.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Sample", href: "/demo" },
    },
  },

  // 56. associate-consultants
  {
    slug: "associate-consultants",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Associate Consultants: Go Beyond the Case Interview | SkillPass",
      description:
        "Case interviews test one skill. SkillPass verifies your full consulting toolkit -- analytical thinking, communication, leadership, client management -- in one SkillScore. Free.",
    },
    hero: {
      badge: "Early-Career Consulting",
      headline: "You Aced the Case.",
      gradientText: "Now Prove Everything Else.",
      subheadline:
        "Case interviews got you in the door. But moving up -- or moving firms -- requires proof of the full package: analytics, communication, leadership, client management. SkillPass verifies all of it in one portable score.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "Assessment Details", href: "/assessments" },
      trustLine: "Free for all professionals.",
    },
    problem: {
      badge: "The Narrow Lens",
      headline: "Consulting Interviews Test One Thing.",
      gradientText: "The Job Requires Twenty.",
      description:
        "You can solve a market-sizing problem. Great. But can you manage a client who changes scope every Tuesday? That doesn't come up in the case interview.",
      stats: [
        {
          value: "1",
          label: "Skill tested in cases",
          description:
            "Case interviews almost exclusively test structured analytical thinking. That's important, but it's one dimension of a complex job.",
        },
        {
          value: "67%",
          label: "Leave within 3 years",
          description:
            "Two-thirds of associate consultants leave their first firm within three years. When they do, they start the interview gauntlet all over again.",
        },
        {
          value: "8+ hrs",
          label: "Per firm's interview process",
          description:
            "Each consulting firm's process takes 8-12 hours of your time: cases, fit interviews, partner calls. Multiply by the number of firms.",
        },
      ],
    },
    solution: {
      badge: "Full Toolkit",
      headline: "The Case Is Solved.",
      gradientText: "Now Show the Rest.",
      description:
        "SkillPass verifies the complete consulting skill set, from analytical frameworks to client-facing communication.",
      features: [
        {
          title: "Case Study Assessment",
          description:
            "A proctored case consulting assessment that goes deeper than a 30-minute interview. Strategy, structure, quantitative analysis, and recommendation -- all scored.",
        },
        {
          title: "Communication Verified",
          description:
            "Writing assessment plus structured peer references on your communication clarity, persuasiveness, and ability to distill complexity.",
        },
        {
          title: "Client Management Signal",
          description:
            "References from project managers, partners, and clients. Structured across leadership, reliability, and collaboration dimensions.",
        },
        {
          title: "Portable Across Firms",
          description:
            "Thinking about lateral moves? Your SkillScore travels with you. No need to re-case at every firm you talk to.",
        },
      ],
    },
    proof: {
      headline: "Consultants Who Proved the Full Package",
      testimonial: {
        quote:
          "I wanted to move from a Big 4 to MBB. Everyone told me I'd have to case again from scratch. Built my SkillPass profile, scored a 788 with exceptional peer references from three partners I'd worked under. Got a first-round skip at one firm and an expedited process at another.",
        name: "Annika R.",
        role: "Associate Consultant, Big 4",
        detail: "SkillScore: 788",
      },
      stats: [
        { value: "788", label: "Avg consultant SkillScore" },
        { value: "8", label: "Verified dimensions" },
        { value: "60%", label: "Faster lateral moves" },
        { value: "Free", label: "For all talent" },
      ],
    },
    cta: {
      headline: "You're More Than a Case Study.",
      gradientText: "Prove It.",
      description:
        "Build a verified profile that captures your complete consulting toolkit. Free, portable, and ready for your next move.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Assessments", href: "/assessments" },
    },
  },

  // 57. career-gap-professionals
  {
    slug: "career-gap-professionals",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Career Gap? Your Skills Don't Expire | SkillPass",
      description:
        "Took time off? SkillPass verifies your current abilities with proctored assessments and a SkillScore (300-850) that proves skills don't have an expiration date. Free.",
    },
    hero: {
      badge: "Career Gap? So What.",
      headline: "You Took Time Off.",
      gradientText: "Your Skills Didn't.",
      subheadline:
        "Career gaps trigger assumptions. SkillPass replaces assumptions with data: a verified SkillScore that reflects what you can do today, not when you last had a paycheck.",
      primaryCta: { text: "Prove Your Skills Are Current", href: "/signup" },
      secondaryCta: { text: "How Verification Works", href: "/how-it-works" },
      trustLine: "Free for all professionals. No judgment.",
    },
    problem: {
      badge: "The Gap Penalty",
      headline: "Gaps Aren't Failures.",
      gradientText: "But Algorithms Think They Are.",
      description:
        "You took time for family, health, education, travel, or just life. Reasonable. But ATS systems and recruiters often see a gap and move on.",
      stats: [
        {
          value: "46%",
          label: "Penalized for gaps",
          description:
            "Nearly half of professionals with career gaps report being screened out or questioned extensively about their time away.",
        },
        {
          value: "2x",
          label: "Longer to get hired",
          description:
            "Professionals with gaps take roughly twice as long to land roles compared to those with continuous employment.",
        },
        {
          value: "22%",
          label: "Accept lower roles",
          description:
            "Many gap professionals take roles below their skill level just to get back in, then spend years working back up.",
        },
      ],
    },
    solution: {
      badge: "Current Proof",
      headline: "Dated Today.",
      gradientText: "Not Two Years Ago.",
      description:
        "SkillPass gives you a fresh, timestamped verification of your abilities. The gap doesn't matter when the proof is current.",
      features: [
        {
          title: "Current Assessment",
          description:
            "Take proctored tests that are dated today. Your results prove your skills are current, regardless of when you last worked.",
        },
        {
          title: "Pre-Gap References",
          description:
            "Previous managers and colleagues can still provide structured references. Those ratings don't expire because you took a break.",
        },
        {
          title: "Continuous Learning Credit",
          description:
            "Courses, certifications, and training you did during your gap all count. SkillPass scores their rigor and adds them to your profile.",
        },
        {
          title: "Score, Not Timeline",
          description:
            "Employers on SkillPass search by SkillScore, not by employment continuity. Your 740 is a 740, gap or no gap.",
        },
      ],
    },
    proof: {
      headline: "Gap Professionals Getting Back In",
      testimonial: {
        quote:
          "I took two years off to care for my mom. When I came back to job searching, every recruiter fixated on the gap. Built my SkillPass profile, scored 751, and suddenly the conversation shifted from 'why the gap' to 'when can you start.' That's what verified proof does.",
        name: "Jennifer H.",
        role: "Marketing Manager, 2-year gap",
        detail: "SkillScore: 751",
      },
      stats: [
        { value: "751", label: "Avg gap SkillScore" },
        { value: "60%", label: "Faster re-entry" },
        { value: "Today", label: "Verification date" },
        { value: "$0", label: "Free for all" },
      ],
    },
    cta: {
      headline: "The Gap Is Over.",
      gradientText: "Start With Proof.",
      description:
        "Build a fresh, verified profile that shows employers what you're capable of right now. Free and takes 30 minutes.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/how-it-works" },
    },
  },

  // 58. early-career-2-5yr
  {
    slug: "early-career-2-5yr",
    category: "young-professionals",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "2-5 Years In: Proved Yourself to One Employer. Now Prove It to All. | SkillPass",
      description:
        "You've grown since your first job. SkillPass captures your verified performance, skills, and peer feedback in a SkillScore (300-850) that every employer can see. Free.",
    },
    hero: {
      badge: "2-5 Year Professionals",
      headline: "Your Manager Knows You're Good.",
      gradientText: "Nobody Else Does.",
      subheadline:
        "You've got 2-5 years of real performance data locked inside one company. SkillPass makes it portable -- verified assessments, structured references, and performance analysis that travel with you to any employer.",
      primaryCta: { text: "Make Your Reputation Portable", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Free for all professionals.",
    },
    problem: {
      badge: "The Visibility Problem",
      headline: "Proven at One Company.",
      gradientText: "Invisible to Everyone Else.",
      description:
        "You've been promoted, praised in reviews, and trusted with bigger projects. But when you apply elsewhere, you're just another applicant with 3 years of experience.",
      stats: [
        {
          value: "87%",
          label: "Say reviews are private",
          description:
            "Performance reviews are internal. The great feedback you've gotten? New employers will never see it unless you make it visible.",
        },
        {
          value: "3 yrs",
          label: "Avg tenure before moving",
          description:
            "Most professionals start exploring new roles around year 3. By then, they've proven themselves -- but only internally.",
        },
        {
          value: "Same",
          label: "Interview as fresh grads",
          description:
            "Despite having years of proven performance, you often go through the same interview process as someone with zero experience.",
        },
      ],
    },
    solution: {
      badge: "Portable Proof",
      headline: "One Employer Knows.",
      gradientText: "Now Every Employer Will.",
      description:
        "SkillPass extracts your proven track record from inside one company and makes it visible to all of them.",
      features: [
        {
          title: "Performance Review Analysis",
          description:
            "NLP-analyzed performance reviews that quantify your growth, strengths, and impact. The great things your manager said? Now they're scored and verified.",
        },
        {
          title: "Updated Assessments",
          description:
            "You're better now than when you graduated. Proctored assessments that reflect your current, experienced abilities -- not your entry-level self.",
        },
        {
          title: "Professional References",
          description:
            "Managers, skip-levels, cross-functional partners, direct reports. Structured 360-degree references across 8 dimensions that prove how you work.",
        },
        {
          title: "Growth Trajectory",
          description:
            "Your SkillScore reflects where you are now: more experienced, more capable, and more valuable than your resume's date ranges suggest.",
        },
      ],
    },
    proof: {
      headline: "Early Career Professionals Leveling Up",
      testimonial: {
        quote:
          "Three years at one company, two promotions, stellar reviews. Applied elsewhere and was treated like any other applicant. Built my SkillPass profile with my manager's reference and performance reviews -- scored 774. Two companies moved me straight to final rounds.",
        name: "Tom P.",
        role: "Software Engineer, 3 years experience",
        detail: "SkillScore: 774",
      },
      stats: [
        { value: "774", label: "Avg 2-5yr SkillScore" },
        { value: "60%", label: "Faster next-role hiring" },
        { value: "$12K", label: "Avg salary bump" },
        { value: "Free", label: "For all talent" },
      ],
    },
    cta: {
      headline: "You've Already Proven Yourself.",
      gradientText: "Now Show Everyone.",
      description:
        "Make your track record portable. One verified profile, every employer. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Sample", href: "/demo" },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // CATEGORY F: MID-CAREER BY ROLE (14 pages)
  // ─────────────────────────────────────────────────────────────

  // 59. software-engineers
  {
    slug: "software-engineers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Software Engineers: One Assessment, Every Employer | SkillPass",
      description:
        "Stop retaking LeetCode for every company. SkillPass gives software engineers one proctored assessment and a SkillScore (300-850) accepted everywhere. Free.",
    },
    hero: {
      badge: "Software Engineers",
      headline: "You Write Code That Runs in Production.",
      gradientText: "Stop Proving It on a Whiteboard.",
      subheadline:
        "Every company wants you to invert a binary tree like it's 2015. SkillPass gives you one proctored assessment -- algorithms, system design, practical coding -- and a verified SkillScore that every employer accepts.",
      primaryCta: { text: "Take It Once", href: "/signup" },
      secondaryCta: { text: "See the Assessment", href: "/assessments" },
      trustLine: "One test. Every employer. Free forever.",
    },
    problem: {
      badge: "Broken Interviews",
      headline: "Tech Interviews Are",
      gradientText: "Broken. You Know It.",
      description:
        "You've been through it. The same algorithm questions, the same system design prompts, the same behavioral loops. Over and over, company after company.",
      stats: [
        {
          value: "40+ hrs",
          label: "Interview prep per search",
          description:
            "Mid-career engineers spend over 40 hours grinding LeetCode and prepping for interviews -- time that could be spent building things.",
        },
        {
          value: "6-8",
          label: "Interviews per company",
          description:
            "Phone screen, recruiter call, technical screen, system design, coding, behavioral, team fit, hiring committee. It's absurd.",
        },
        {
          value: "$15K",
          label: "Opportunity cost",
          description:
            "Between prep time and lost productivity, each job search costs engineers roughly $15K in opportunity cost.",
        },
      ],
    },
    solution: {
      badge: "The Fix",
      headline: "Assessed Once.",
      gradientText: "Trusted Everywhere.",
      description:
        "SkillPass replaces redundant technical interviews with a single, comprehensive, verified assessment.",
      features: [
        {
          title: "Algorithms & Data Structures",
          description:
            "Proctored and scored. The standard stuff: arrays, trees, graphs, DP. You know it. Prove it once. Move on with your life.",
        },
        {
          title: "System Design",
          description:
            "Real architecture problems. Design a distributed cache. Plan a payment system. Practical problems scored by actual criteria, not interviewer mood.",
        },
        {
          title: "Practical Coding",
          description:
            "Build in a real IDE, not on a whiteboard. Problems that reflect what engineers actually do on the job.",
        },
        {
          title: "Peer Engineering Signal",
          description:
            "Structured references from engineering managers, tech leads, and teammates. Eight dimensions including technical depth, reliability, and collaboration.",
        },
      ],
    },
    proof: {
      headline: "Engineers Who Stopped Interviewing",
      testimonial: {
        quote:
          "I have 7 years of experience, contributions to major open-source projects, and I was still grinding LeetCode every time I wanted to explore new roles. Built my SkillPass profile, scored 812, and three companies offered to skip their technical screens entirely. This is how it should work.",
        name: "Daniel S.",
        role: "Senior Software Engineer",
        detail: "SkillScore: 812",
      },
      stats: [
        { value: "812", label: "Avg SWE SkillScore" },
        { value: "40+ hrs", label: "Saved per search" },
        { value: "3x", label: "More efficient hiring" },
        { value: "$0", label: "Free for engineers" },
      ],
    },
    cta: {
      headline: "You Build Systems for a Living.",
      gradientText: "Stop Rebuilding Your Proof.",
      description:
        "One assessment. One score. Every employer. Build your profile free.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "View Assessment Details", href: "/assessments" },
    },
  },

  // 60. product-managers
  {
    slug: "product-managers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Product Managers: Strategy + Communication, Calibrated | SkillPass",
      description:
        "PM skills are notoriously hard to assess. SkillPass verifies strategic thinking, communication, and leadership with a SkillScore (300-850). Calibrated and portable. Free.",
    },
    hero: {
      badge: "Product Managers",
      headline: "Product Sense Is Hard to Interview For.",
      gradientText: "It's Easy to Verify.",
      subheadline:
        "PM interviews are broken: one company tests frameworks, another tests storytelling, another wants a product teardown. SkillPass gives you a calibrated, multi-dimensional score that covers strategy, communication, and leadership. Once.",
      primaryCta: { text: "Get Verified", href: "/signup" },
      secondaryCta: { text: "See PM Assessment", href: "/assessments" },
      trustLine: "Free for all PMs. Always.",
    },
    problem: {
      badge: "The PM Problem",
      headline: "Every Company Defines 'Good PM'",
      gradientText: "Differently",
      description:
        "There's no standard PM interview. One company asks you to design a toaster, another wants a PRD, another just wants vibes. You're retested on a different dimension every time.",
      stats: [
        {
          value: "12+",
          label: "Interview formats you'll see",
          description:
            "Product teardowns, execution cases, metric analysis, strategy presentations, mock PRDs, behavioral loops. Every company invents their own.",
        },
        {
          value: "No",
          label: "Standard assessment exists",
          description:
            "Unlike engineering (coding tests) or design (portfolios), PMs have no standardized way to prove competence.",
        },
        {
          value: "70%",
          label: "Say PM hiring is broken",
          description:
            "Most hiring managers admit their PM interview processes don't reliably predict on-the-job performance.",
        },
      ],
    },
    solution: {
      badge: "The Standard",
      headline: "Strategy. Communication.",
      gradientText: "Leadership. Verified.",
      description:
        "SkillPass gives PMs what they've never had: a standardized, multi-dimensional assessment that actually reflects what the job requires.",
      features: [
        {
          title: "Case Consulting Assessment",
          description:
            "Strategic analysis, market sizing, prioritization frameworks. Proctored and scored against consistent criteria, not interviewer preference.",
        },
        {
          title: "Writing Assessment",
          description:
            "PMs write all day -- PRDs, strategy docs, stakeholder updates. Your writing quality is assessed and scored as a first-class skill.",
        },
        {
          title: "Data Analysis",
          description:
            "Metric interpretation, A/B test analysis, funnel diagnostics. Proctored assessment of the quantitative skills PMs actually need.",
        },
        {
          title: "360-Degree Leadership Signal",
          description:
            "References from engineers, designers, executives, and stakeholders. Structured across communication, leadership, and collaboration dimensions.",
        },
      ],
    },
    proof: {
      headline: "PMs With Proof",
      testimonial: {
        quote:
          "I've done the PM interview at 15 different companies over my career. Every single one was different. SkillPass gave me one profile that captured everything -- my strategic thinking, my communication, my leadership references. Scored 797 and two companies gave me accelerated interview tracks.",
        name: "Rachel N.",
        role: "Senior Product Manager",
        detail: "SkillScore: 797",
      },
      stats: [
        { value: "797", label: "Avg PM SkillScore" },
        { value: "4", label: "Skill dimensions assessed" },
        { value: "60%", label: "Faster PM hiring" },
        { value: "$0", label: "Free for PMs" },
      ],
    },
    cta: {
      headline: "You Ship Products.",
      gradientText: "Ship Your Proof Too.",
      description:
        "One verified profile. Strategy, communication, leadership, and data chops -- all scored. Free.",
      primaryCta: { text: "Build Your PM Profile", href: "/signup" },
      secondaryCta: { text: "View Assessments", href: "/assessments" },
    },
  },

  // 61. data-scientists
  {
    slug: "data-scientists",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Data Scientists: Models Speak, SkillScore Makes Employers Listen | SkillPass",
      description:
        "Data science skills span statistics, coding, and communication. SkillPass verifies all three with a SkillScore (300-850) employers trust. Free.",
    },
    hero: {
      badge: "Data Scientists",
      headline: "Your Models Outperform Benchmarks.",
      gradientText: "Your Resume Doesn't Stand Out.",
      subheadline:
        "Data science interviews test SQL, then Python, then statistics, then case studies, then a take-home that takes 20 hours. SkillPass compresses all of that into one verified profile with proctored assessments and structured peer feedback.",
      primaryCta: { text: "Verify Your Skills", href: "/signup" },
      secondaryCta: { text: "See Data Assessments", href: "/assessments" },
      trustLine: "Free for data scientists. Always.",
    },
    problem: {
      badge: "Assessment Overload",
      headline: "Take-Homes That Take",
      gradientText: "Your Entire Weekend",
      description:
        "Data science interviews are the longest in tech. Multiple rounds of different skill tests, plus a take-home project that eats your weekend.",
      stats: [
        {
          value: "20 hrs",
          label: "Avg take-home project",
          description:
            "Data science take-homes routinely take 15-20+ hours. Many companies send these before even a phone screen.",
        },
        {
          value: "5",
          label: "Different skill areas tested",
          description:
            "SQL, Python/R, statistics, ML, business communication. Each company tests them in a different order and different format.",
        },
        {
          value: "34%",
          label: "Drop out mid-process",
          description:
            "A third of data scientists abandon interview processes because they're too long. Good candidates go where hiring is faster.",
        },
      ],
    },
    solution: {
      badge: "All-in-One",
      headline: "Stats. Code. Communication.",
      gradientText: "One Score.",
      description:
        "SkillPass covers every dimension of data science in a single verified profile. No 20-hour take-homes required.",
      features: [
        {
          title: "Data Analysis Assessment",
          description:
            "SQL, Python, statistical analysis, and data visualization. Proctored, timed, and scored against a consistent rubric. One test, every employer.",
        },
        {
          title: "Coding Algorithm Assessment",
          description:
            "The programming fundamentals that every DS needs. Assessed separately from data-specific skills so employers see the full picture.",
        },
        {
          title: "Communication Verification",
          description:
            "Writing assessment plus peer references on your ability to translate technical findings into business language. The skill that separates good DS from great DS.",
        },
        {
          title: "Academic Calibration",
          description:
            "Your stats degree, your ML coursework, your PhD research -- all calibrated by institution tier and course rigor. Context that a GPA alone can't provide.",
        },
      ],
    },
    proof: {
      headline: "Data Scientists Getting Hired Faster",
      testimonial: {
        quote:
          "I was doing two take-home projects per week during my last job search. Each one took a full weekend. After building my SkillPass profile and scoring 805, three companies accepted my SkillPass results in lieu of their own take-home. That gave me my weekends back.",
        name: "Kevin Z.",
        role: "Senior Data Scientist",
        detail: "SkillScore: 805",
      },
      stats: [
        { value: "805", label: "Avg DS SkillScore" },
        { value: "20+ hrs", label: "Saved per company" },
        { value: "60%", label: "Faster hiring" },
        { value: "Free", label: "For all talent" },
      ],
    },
    cta: {
      headline: "Your Data Tells a Story.",
      gradientText: "So Does Your SkillScore.",
      description:
        "One verified profile. Statistics, coding, communication -- all assessed. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "View Assessment Details", href: "/assessments" },
    },
  },

  // 62. ux-designers
  {
    slug: "ux-designers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "UX Designers: Beyond the Portfolio, Verified Collaboration | SkillPass",
      description:
        "Portfolios show your work. SkillPass verifies how you work -- collaboration, communication, problem-solving -- with a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "UX Designers",
      headline: "Your Portfolio Shows What You Made.",
      gradientText: "Not How You Made It.",
      subheadline:
        "Design hiring is obsessed with portfolios. But the best designers aren't just pixel-pushers -- they're collaborators, communicators, and problem solvers. SkillPass verifies the full picture.",
      primaryCta: { text: "Complete Your Story", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Free for all designers.",
    },
    problem: {
      badge: "The Portfolio Trap",
      headline: "Pretty Screens Don't Show",
      gradientText: "How You Handled the Disagreement",
      description:
        "Your portfolio is polished. But it doesn't show how you navigated stakeholder conflicts, facilitated research, or collaborated with engineers under tight deadlines.",
      stats: [
        {
          value: "90%",
          label: "Judged by portfolio alone",
          description:
            "Design hiring heavily weights portfolio quality. But portfolios are curated -- they show your best case studies, not your daily collaboration.",
        },
        {
          value: "0",
          label: "Collaboration signal in portfolio",
          description:
            "How well you work with PMs, engineers, and researchers? How you handle critique? None of this is in a Figma link.",
        },
        {
          value: "4-6 hrs",
          label: "Design challenge per company",
          description:
            "Take-home design challenges eat hours per company. And the scoring is wildly subjective from one team to the next.",
        },
      ],
    },
    solution: {
      badge: "Full Picture",
      headline: "Portfolio + Process +",
      gradientText: "People Skills. Verified.",
      description:
        "SkillPass adds the dimensions that portfolios miss. Keep your portfolio -- add verified proof of everything else.",
      features: [
        {
          title: "Collaboration Score",
          description:
            "Structured 360-degree references from PMs, engineers, researchers, and other designers. Eight dimensions that capture how you work with a team.",
        },
        {
          title: "Communication Assessment",
          description:
            "Writing assessment that tests your ability to articulate design decisions, present research findings, and document systems. Communication is design.",
        },
        {
          title: "Problem-Solving Verification",
          description:
            "Case consulting and situational judgment assessments that prove your design thinking goes beyond visual execution.",
        },
        {
          title: "Peer Signal on Creativity",
          description:
            "References specifically rate your creativity, coachability, and technical ability. The soft skills that make designers exceptional team members.",
        },
      ],
    },
    proof: {
      headline: "Designers Who Show the Full Picture",
      testimonial: {
        quote:
          "Every design interview went the same way: show the portfolio, do a whiteboard exercise, hope the interviewer likes your style. My SkillPass profile added verified references from three PMs and two engineers I'd worked closely with. The peer signal on collaboration and communication is what got me the offer at Stripe.",
        name: "Hana K.",
        role: "Senior UX Designer",
        detail: "SkillScore: 771",
      },
      stats: [
        { value: "771", label: "Avg UX SkillScore" },
        { value: "8", label: "Verified dimensions" },
        { value: "60%", label: "Faster design hiring" },
        { value: "$0", label: "Always free" },
      ],
    },
    cta: {
      headline: "Your Portfolio Is Half the Story.",
      gradientText: "Verify the Other Half.",
      description:
        "Collaboration, communication, and problem-solving -- verified and scored. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Sample", href: "/demo" },
    },
  },

  // 63. devops-engineers
  {
    slug: "devops-engineers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "DevOps Engineers: Your Uptime Record Is Impressive. Make It Portable. | SkillPass",
      description:
        "DevOps skills are hard to assess in interviews. SkillPass verifies your infrastructure, automation, and reliability skills with a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "DevOps / SRE",
      headline: "99.99% Uptime. Zero Proof Outside Your Company.",
      gradientText: "Fix That.",
      subheadline:
        "You keep systems running at scale. But interview processes test you on whiteboard algorithms, not on the chaos engineering and infrastructure design that define your actual work. SkillPass verifies what you really do.",
      primaryCta: { text: "Verify Your Skills", href: "/signup" },
      secondaryCta: { text: "See Assessments", href: "/assessments" },
      trustLine: "Free for all engineers.",
    },
    problem: {
      badge: "Wrong Test",
      headline: "They're Testing LeetCode.",
      gradientText: "You Build Infrastructure.",
      description:
        "DevOps interviews either test generic coding (irrelevant) or ask you to describe past projects (unverifiable). Neither actually measures your ability.",
      stats: [
        {
          value: "75%",
          label: "Say interviews don't reflect work",
          description:
            "Three-quarters of DevOps engineers say standard tech interviews don't test the skills they use daily. Because they don't.",
        },
        {
          value: "0",
          label: "Portable uptime records",
          description:
            "You maintained 99.99% uptime for 100K+ users. Good luck conveying that in a 45-minute behavioral interview.",
        },
        {
          value: "5+",
          label: "Rounds per company",
          description:
            "DevOps interviews are long because companies struggle to assess the role. More rounds, same uncertainty.",
        },
      ],
    },
    solution: {
      badge: "Real Assessment",
      headline: "Infrastructure. Automation.",
      gradientText: "Reliability. Verified.",
      description:
        "SkillPass tests what DevOps engineers actually do. System design, coding chops, and the collaboration skills that keep teams and systems running.",
      features: [
        {
          title: "System Design Assessment",
          description:
            "Design scalable infrastructure, plan failure modes, architect CI/CD pipelines. Proctored, scored, and relevant to your actual work.",
        },
        {
          title: "Coding Assessment",
          description:
            "Automation scripts, monitoring tooling, infrastructure-as-code patterns. Practical coding problems, not algorithm trivia.",
        },
        {
          title: "Reliability Peer Signal",
          description:
            "References from SWEs, managers, and incident commanders. Structured feedback on your reliability, technical depth, and crisis response.",
        },
        {
          title: "On-Call Performance",
          description:
            "NLP-analyzed performance reviews capture your incident response track record, system improvements, and infrastructure contributions.",
        },
      ],
    },
    proof: {
      headline: "DevOps Engineers With Portable Proof",
      testimonial: {
        quote:
          "I've managed infrastructure for a platform serving 2M daily users. In interviews, I couldn't prove any of it. SkillPass gave me a system design assessment score of 95th percentile and references from four SWEs who depend on my systems daily. Hired at a 30% raise.",
        name: "Mike B.",
        role: "Senior DevOps Engineer",
        detail: "SkillScore: 798",
      },
      stats: [
        { value: "798", label: "Avg DevOps SkillScore" },
        { value: "95th", label: "Top system design scores" },
        { value: "60%", label: "Faster hiring" },
        { value: "Free", label: "Always" },
      ],
    },
    cta: {
      headline: "Your Systems Don't Go Down.",
      gradientText: "Your Proof Shouldn't Either.",
      description:
        "One verified profile. System design, coding, and peer signal. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See Assessments", href: "/assessments" },
    },
  },

  // 64. full-stack-developers
  {
    slug: "full-stack-developers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Full-Stack Developers: Frontend, Backend, Infra — One Score | SkillPass",
      description:
        "Full-stack means you do everything. SkillPass verifies your breadth with a SkillScore (300-850) covering algorithms, system design, and practical coding. Free.",
    },
    hero: {
      badge: "Full-Stack Devs",
      headline: "Frontend. Backend. Infra.",
      gradientText: "One Score Covers It All.",
      subheadline:
        "You write React, design APIs, and deploy to AWS. Interviews test you on one at a time, like you're three different people. SkillPass captures your full stack in one verified profile.",
      primaryCta: { text: "Prove Your Stack", href: "/signup" },
      secondaryCta: { text: "See Assessment Scope", href: "/assessments" },
      trustLine: "Free for all developers.",
    },
    problem: {
      badge: "Too Broad to Test",
      headline: "Interviews Can't Test",
      gradientText: "Everything You Do",
      description:
        "Full-stack developers have the widest skill sets in engineering. Interviews test a narrow slice and miss the rest.",
      stats: [
        {
          value: "3",
          label: "Layers you work across",
          description:
            "Frontend, backend, infrastructure. Each one is a separate discipline. You do all three. Interviews test one.",
        },
        {
          value: "Specialist",
          label: "Bias in hiring",
          description:
            "Companies often favor specialists over generalists in interviews, even when the role actually needs someone full-stack.",
        },
        {
          value: "2x",
          label: "More prep needed",
          description:
            "Full-stack devs need to prep for frontend, backend, AND system design interviews. Double the prep for a single role.",
        },
      ],
    },
    solution: {
      badge: "Complete Coverage",
      headline: "Your Whole Stack.",
      gradientText: "Verified.",
      description:
        "SkillPass assessments cover the full breadth of what full-stack developers do. One profile, complete picture.",
      features: [
        {
          title: "Algorithm Assessment",
          description:
            "Core data structures and algorithms. The foundation under everything you build, proctored and scored.",
        },
        {
          title: "System Design",
          description:
            "Architecture decisions, scalability planning, API design. The high-level thinking that separates senior full-stack devs from juniors.",
        },
        {
          title: "Practical Coding",
          description:
            "Real-world problems in a real IDE. Frontend rendering, API endpoints, data pipelines -- problems that reflect your actual daily work.",
        },
        {
          title: "Cross-Functional References",
          description:
            "Designers, PMs, backend specialists, and DevOps engineers all weigh in. Your collaboration across the stack is verified.",
        },
      ],
    },
    proof: {
      headline: "Full-Stack Devs With Full Proof",
      testimonial: {
        quote:
          "I build entire features end-to-end: React frontend, Node backend, Terraform infra. In interviews, they'd only test one layer and assume I was mid at the others. My SkillPass profile shows strong scores across all three plus great collaboration references. Finally, the full picture.",
        name: "Nina V.",
        role: "Full-Stack Developer, 5 years",
        detail: "SkillScore: 783",
      },
      stats: [
        { value: "783", label: "Avg full-stack SkillScore" },
        { value: "3", label: "Layers verified" },
        { value: "60%", label: "Faster hiring" },
        { value: "$0", label: "Free" },
      ],
    },
    cta: {
      headline: "You Build the Whole Thing.",
      gradientText: "Prove the Whole Thing.",
      description:
        "One profile. Every layer of your stack, verified. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "View Assessments", href: "/assessments" },
    },
  },

  // 65. security-engineers
  {
    slug: "security-engineers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Security Engineers: Certifications Show Study, SkillScore Shows Ability | SkillPass",
      description:
        "CISSP shows you studied. SkillPass shows you can actually secure systems. Proctored assessments, peer references, and a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Security Engineers",
      headline: "Your CISSP Says You Studied.",
      gradientText: "Your SkillScore Says You Can Do It.",
      subheadline:
        "Security certifications prove you passed an exam. SkillPass proves you can find vulnerabilities, design secure architectures, and communicate risk to stakeholders. Verified, scored, and free.",
      primaryCta: { text: "Go Beyond Certifications", href: "/signup" },
      secondaryCta: { text: "Assessment Details", href: "/assessments" },
      trustLine: "Free for all security professionals.",
    },
    problem: {
      badge: "Cert Inflation",
      headline: "Everyone Has the Cert.",
      gradientText: "Not Everyone Has the Skill.",
      description:
        "Security hiring is drowning in certifications. CISSP, CEH, CompTIA Security+, OSCP. They prove you studied, not that you can perform under pressure.",
      stats: [
        {
          value: "12+",
          label: "Common security certs",
          description:
            "The security industry has over a dozen widely-recognized certifications. Having them is table stakes. They don't differentiate.",
        },
        {
          value: "$3K-8K",
          label: "Per certification",
          description:
            "Between exam fees, training courses, and study materials, each cert costs thousands. And you need several to be competitive.",
        },
        {
          value: "Low",
          label: "Correlation to job performance",
          description:
            "Studies consistently show certifications are weak predictors of on-the-job security performance. They test memorization, not ability.",
        },
      ],
    },
    solution: {
      badge: "Proof of Ability",
      headline: "Certifications + Verified Skills =",
      gradientText: "Complete Security Professional",
      description:
        "Keep your certs. Add SkillPass for the verified, proctored proof of what you can actually do.",
      features: [
        {
          title: "Technical Security Assessment",
          description:
            "Proctored tests on real security scenarios: vulnerability analysis, architecture review, incident response planning. Not multiple choice -- practical.",
        },
        {
          title: "Coding Assessment",
          description:
            "Security engineers write code. Automation, tooling, detection rules. Your coding ability is assessed and scored alongside your security knowledge.",
        },
        {
          title: "Risk Communication",
          description:
            "Writing assessment focused on communicating risk to non-technical stakeholders. The skill that gets security teams budget and board attention.",
        },
        {
          title: "Trust Network References",
          description:
            "References from SWEs, architects, CISOs, and compliance teams. Structured feedback on your technical depth, reliability, and collaboration.",
        },
      ],
    },
    proof: {
      headline: "Security Pros Who Proved More Than Certs",
      testimonial: {
        quote:
          "I have CISSP, CEH, and OSCP. So do 500 other applicants. My SkillPass profile showed a 808 SkillScore with 95th percentile on practical security assessment and stellar references from two CISOs. That's what got me the principal security engineer role.",
        name: "Omar F.",
        role: "Principal Security Engineer",
        detail: "SkillScore: 808",
      },
      stats: [
        { value: "808", label: "Avg security SkillScore" },
        { value: "95th", label: "Top practical scores" },
        { value: "60%", label: "Faster hiring" },
        { value: "Free", label: "Unlike certifications" },
      ],
    },
    cta: {
      headline: "Certs Get You in the Door.",
      gradientText: "SkillScore Gets You the Offer.",
      description:
        "Verified practical ability on top of your certifications. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "View Security Assessment", href: "/assessments" },
    },
  },

  // 66. management-consultants
  {
    slug: "management-consultants",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Management Consultants: Case Skills + Client Management, Verified | SkillPass",
      description:
        "You've solved hundreds of cases. SkillPass verifies your analytical, communication, and client management skills in one SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Management Consultants",
      headline: "You've Solved Cases for a Living.",
      gradientText: "Time to Solve Your Own Career.",
      subheadline:
        "Moving firms or going in-house? Every transition means re-casing, re-interviewing, and re-proving skills you've demonstrated for years. SkillPass verifies your consulting toolkit once, and it travels with you.",
      primaryCta: { text: "Verify Your Toolkit", href: "/signup" },
      secondaryCta: { text: "See Consulting Assessment", href: "/assessments" },
      trustLine: "Free for all consultants.",
    },
    problem: {
      badge: "The Treadmill",
      headline: "Every Move Means",
      gradientText: "Starting From Zero",
      description:
        "You've delivered for Fortune 500 clients. But when you want to move firms or go in-house, it's back to case prep and behavioral interviews as if none of that happened.",
      stats: [
        {
          value: "100+ hrs",
          label: "Case prep per move",
          description:
            "Lateral consultant moves require extensive case prep. You've solved real cases for years, but the interview wants textbook frameworks.",
        },
        {
          value: "6-8",
          label: "Interview rounds per firm",
          description:
            "Case rounds, partner interviews, fit assessments, reference checks. Each firm runs its own full evaluation from scratch.",
        },
        {
          value: "Locked",
          label: "Client work is confidential",
          description:
            "Your best work is under NDA. You can't show the deliverable that saved a client $50M in due diligence.",
        },
      ],
    },
    solution: {
      badge: "Portable Consulting Proof",
      headline: "Case Skills. Client Skills.",
      gradientText: "All Verified.",
      description:
        "SkillPass captures the full consultant skill set without violating any NDA. Assessments and references, not deliverables.",
      features: [
        {
          title: "Case Consulting Assessment",
          description:
            "Structured problem-solving, market sizing, strategic recommendations. Proctored and scored against rigorous criteria. Harder than most interview cases.",
        },
        {
          title: "Data & Quantitative Assessment",
          description:
            "Financial modeling aptitude, metric analysis, and quantitative reasoning. The analytical backbone of consulting, verified.",
        },
        {
          title: "Client Management References",
          description:
            "Partners, engagement managers, and even clients rate you across leadership, communication, reliability, and collaboration. The soft skills that define great consultants.",
        },
        {
          title: "Writing Assessment",
          description:
            "Clear, structured, persuasive writing. The kind that fills executive decks and board memos. Scored and verified.",
        },
      ],
    },
    proof: {
      headline: "Consultants Who Proved It Once",
      testimonial: {
        quote:
          "Moving from Deloitte to a boutique strategy firm. Was dreading 50 hours of case prep on top of my 60-hour work weeks. My SkillPass profile with a 815 SkillScore and references from three partners got me an expedited process. Two rounds instead of six.",
        name: "Olivia C.",
        role: "Senior Consultant, Deloitte",
        detail: "SkillScore: 815",
      },
      stats: [
        { value: "815", label: "Avg consultant SkillScore" },
        { value: "100+ hrs", label: "Prep time saved" },
        { value: "60%", label: "Faster lateral moves" },
        { value: "$0", label: "Free for all" },
      ],
    },
    cta: {
      headline: "You Advise Clients on Efficiency.",
      gradientText: "Be Efficient About Your Own Career.",
      description:
        "One verified profile. Every firm, every in-house opportunity. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "View Assessments", href: "/assessments" },
    },
  },

  // 67. senior-ics
  {
    slug: "senior-ics",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Senior ICs: Your Expertise Is Rare. Make It Findable. | SkillPass",
      description:
        "Senior individual contributors have deep expertise that's hard to evaluate in interviews. SkillPass makes your depth visible with a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Senior ICs",
      headline: "You're the Person Everyone Calls When It's Broken.",
      gradientText: "New Employers Can't See That.",
      subheadline:
        "Senior ICs are the backbone of engineering orgs. But your depth of expertise, your mentorship, your architectural judgment -- none of it shows up in a standard interview. SkillPass makes it visible.",
      primaryCta: { text: "Make Your Depth Visible", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Free for all senior professionals.",
    },
    problem: {
      badge: "The Seniority Paradox",
      headline: "The More Senior You Are,",
      gradientText: "The Worse Interviews Test You",
      description:
        "Standard interviews are designed for mid-level candidates. They test breadth, not the deep expertise and judgment that define senior ICs.",
      stats: [
        {
          value: "Misaligned",
          label: "Interview vs. actual work",
          description:
            "Senior ICs architect systems, mentor juniors, and make critical technical decisions. Interviews test LeetCode and whiteboard design.",
        },
        {
          value: "83%",
          label: "Say interviews undervalue them",
          description:
            "The vast majority of senior ICs feel that standard interview processes fail to capture their actual contributions and expertise.",
        },
        {
          value: "Invisible",
          label: "Mentorship & influence",
          description:
            "Your architectural decisions and mentorship shaped your team. None of that is testable in a 45-minute interview.",
        },
      ],
    },
    solution: {
      badge: "Depth, Verified",
      headline: "Expertise Runs Deep.",
      gradientText: "Now It Shows.",
      description:
        "SkillPass captures the signals that matter for senior ICs: technical depth, architectural judgment, mentorship, and organizational impact.",
      features: [
        {
          title: "Advanced Technical Assessment",
          description:
            "System design at scale, architecture trade-offs, performance optimization. Problems calibrated for senior-level depth, not generic coding puzzles.",
        },
        {
          title: "Mentorship & Influence Signal",
          description:
            "References from people you've mentored, engineers who've learned from your code reviews, and managers who've relied on your judgment.",
        },
        {
          title: "Performance Track Record",
          description:
            "NLP-analyzed reviews that capture your sustained impact over years, not a single interview snapshot. Growth trajectory matters.",
        },
        {
          title: "Architectural Portfolio",
          description:
            "Your SkillScore reflects the depth and breadth of your technical contributions. Calibrated to recognize senior-level work.",
        },
      ],
    },
    proof: {
      headline: "Senior ICs Who Made Depth Visible",
      testimonial: {
        quote:
          "I'm a staff engineer who designed the real-time infrastructure serving 50M users. In interviews, they asked me to reverse a linked list. My SkillPass profile captured my system design expertise, references from 6 engineers I've mentored, and my performance history. Scored 834 and got recruited directly by a CTO.",
        name: "Elena G.",
        role: "Staff Engineer, 10 years",
        detail: "SkillScore: 834",
      },
      stats: [
        { value: "834", label: "Avg senior IC SkillScore" },
        { value: "10+", label: "Years of expertise captured" },
        { value: "6", label: "Reference dimensions" },
        { value: "$0", label: "Free" },
      ],
    },
    cta: {
      headline: "Your Expertise Deserves",
      gradientText: "Better Than a Whiteboard.",
      description:
        "Make your depth visible. One verified profile that captures years of senior-level contributions. Free.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See Senior Assessments", href: "/assessments" },
    },
  },

  // 68. director-level
  {
    slug: "director-level",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Director-Level: Leadership Verified by People You Led | SkillPass",
      description:
        "Director-level leadership is hard to assess in interviews. SkillPass verifies it through structured 360-degree references from your direct reports, peers, and executives. Free.",
    },
    hero: {
      badge: "Directors & VPs",
      headline: "You Led Teams That Shipped.",
      gradientText: "Prove It With More Than Stories.",
      subheadline:
        "Director-level interviews rely on behavioral questions and gut feel. SkillPass replaces that with verified 360-degree references from the people you actually led, managed, and partnered with.",
      primaryCta: { text: "Verify Your Leadership", href: "/signup" },
      secondaryCta: { text: "How References Work", href: "/how-it-works" },
      trustLine: "Free for all leaders.",
    },
    problem: {
      badge: "The Leadership Interview",
      headline: "Tell Me About a Time You Led...",
      gradientText: "Isn't Leadership Verification.",
      description:
        "Director-level hiring is largely vibes. Behavioral interviews, exec presentations, and reference calls to people you hand-pick. None of it reliably predicts leadership quality.",
      stats: [
        {
          value: "50%",
          label: "Exec hires fail within 18 months",
          description:
            "Half of director-and-above hires don't work out. The interview process that produced them is fundamentally broken.",
        },
        {
          value: "3-6 mo",
          label: "Director hiring timeline",
          description:
            "Director-level searches take months because companies don't know how to efficiently assess leadership. More rounds don't mean better outcomes.",
        },
        {
          value: "Cherry-picked",
          label: "Reference problem",
          description:
            "Traditional reference checks let candidates choose who to list. Of course those people say nice things.",
        },
      ],
    },
    solution: {
      badge: "Verified Leadership",
      headline: "Leadership Measured by",
      gradientText: "The People You Led",
      description:
        "SkillPass captures leadership signal from direct reports, peers, skip-levels, and cross-functional partners. Structured, quantified, and impossible to cherry-pick.",
      features: [
        {
          title: "360-Degree Reference System",
          description:
            "Direct reports, peer directors, skip-level managers, and cross-functional partners all provide structured feedback across 8 dimensions. Real signal, not curated references.",
        },
        {
          title: "Leadership Dimensions",
          description:
            "Communication, reliability, work ethic, collaboration, and more. Each scored independently. You'll see where you're strong and where there's room to grow.",
        },
        {
          title: "Strategic Assessment",
          description:
            "Case consulting and situational judgment assessments calibrated for director-level strategic thinking. Not entry-level cases -- executive scenarios.",
        },
        {
          title: "Performance History",
          description:
            "NLP-analyzed performance reviews that capture your leadership trajectory. Promotions, team growth, and organizational impact, quantified.",
        },
      ],
    },
    proof: {
      headline: "Directors With Verified Leadership",
      testimonial: {
        quote:
          "I managed a 40-person engineering org. In interviews, I could only tell stories. With SkillPass, I had structured references from 12 people across my org -- direct reports, peers, my VP. The hiring committee at my new company said the reference data was the deciding factor. Scored 821.",
        name: "Patricia L.",
        role: "Director of Engineering",
        detail: "SkillScore: 821",
      },
      stats: [
        { value: "821", label: "Avg director SkillScore" },
        { value: "12", label: "Avg references submitted" },
        { value: "60%", label: "Faster exec hiring" },
        { value: "Free", label: "For all leaders" },
      ],
    },
    cta: {
      headline: "Leadership Is Proven by",
      gradientText: "The People Who Followed You.",
      description:
        "Verified 360-degree references from your actual team. Free forever.",
      primaryCta: { text: "Start Your Profile", href: "/signup" },
      secondaryCta: { text: "See Reference System", href: "/how-it-works" },
    },
  },

  // 69. customer-success
  {
    slug: "customer-success",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Customer Success: Relationship Skills Verified, Retention Scored | SkillPass",
      description:
        "CS skills -- relationship building, communication, problem-solving -- are hard to prove in interviews. SkillPass verifies them with a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Customer Success",
      headline: "Your Renewal Rate Speaks Volumes.",
      gradientText: "Now Make It Portable.",
      subheadline:
        "Customer Success is built on relationships, communication, and problem-solving. None of that shows up in a resume bullet point. SkillPass verifies the skills that make great CSMs great -- and makes them visible to every employer.",
      primaryCta: { text: "Verify Your Skills", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Free for all professionals.",
    },
    problem: {
      badge: "Soft Skills, Hard to Prove",
      headline: "Your Best Work Is",
      gradientText: "Invisible on Paper",
      description:
        "The relationship you saved. The expansion you drove. The churn you prevented. None of it translates well to a resume or a 30-minute interview.",
      stats: [
        {
          value: "Unverifiable",
          label: "'Saved $2M in renewals'",
          description:
            "You can claim any number on your resume. New employers can't verify retention or expansion metrics from your previous company.",
        },
        {
          value: "Soft",
          label: "Skills are seen as 'soft'",
          description:
            "Relationship management, de-escalation, and client empathy are critical skills. But hiring processes treat them as nice-to-haves.",
        },
        {
          value: "No",
          label: "Standard CS assessment exists",
          description:
            "Engineering has coding tests. Design has portfolios. Customer Success has... nothing standardized to prove capability.",
        },
      ],
    },
    solution: {
      badge: "CS Skills, Verified",
      headline: "Communication. Empathy.",
      gradientText: "Problem-Solving. Scored.",
      description:
        "SkillPass gives Customer Success professionals what they've never had: a verified, quantified profile of the skills that matter most.",
      features: [
        {
          title: "Communication Assessment",
          description:
            "Writing clarity, persuasive communication, and the ability to distill complex technical issues for non-technical audiences. Proctored and scored.",
        },
        {
          title: "Situational Judgment Test",
          description:
            "Real CS scenarios: angry customers, at-risk renewals, cross-functional escalations. How you respond, scored against best practices.",
        },
        {
          title: "Relationship References",
          description:
            "Clients, sales partners, product managers, and engineering teammates. Structured references across collaboration, communication, and reliability.",
        },
        {
          title: "Performance Review Analysis",
          description:
            "NLP analysis of your performance reviews captures retention impact, customer satisfaction, and account growth. Quantified and verified.",
        },
      ],
    },
    proof: {
      headline: "CS Pros With Proof",
      testimonial: {
        quote:
          "I've maintained a 96% renewal rate for three years running. But when I interviewed at a new company, they had no way to verify that. My SkillPass profile included references from four clients and my direct manager, plus a communication score in the 92nd percentile. Got the Senior CSM role with a 25% raise.",
        name: "Lauren M.",
        role: "Senior Customer Success Manager",
        detail: "SkillScore: 762",
      },
      stats: [
        { value: "762", label: "Avg CS SkillScore" },
        { value: "92nd", label: "Percentile communication" },
        { value: "8", label: "Verified dimensions" },
        { value: "$0", label: "Free" },
      ],
    },
    cta: {
      headline: "Your Clients Love You.",
      gradientText: "Now Future Employers Will Too.",
      description:
        "Verified relationship skills, communication, and problem-solving. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See Assessment Types", href: "/assessments" },
    },
  },

  // 70. technical-pms
  {
    slug: "technical-pms",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Technical PMs: Hardest Role to Interview For, Easiest to Verify | SkillPass",
      description:
        "Technical PMs need engineering depth AND product breadth. SkillPass verifies both with proctored assessments and a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Technical PMs",
      headline: "Half the Interviewers Test Product.",
      gradientText: "Half Test Engineering. Neither Tests Both.",
      subheadline:
        "Technical PM interviews are a mess. You bounce between product sense questions and system design whiteboarding, with each interviewer testing a different skill. SkillPass verifies the complete technical PM toolkit in one profile.",
      primaryCta: { text: "Verify Both Halves", href: "/signup" },
      secondaryCta: { text: "See TPM Assessment", href: "/assessments" },
      trustLine: "Free for all PMs.",
    },
    problem: {
      badge: "The TPM Dilemma",
      headline: "Too Technical for Product Loops.",
      gradientText: "Too Product for Engineering Loops.",
      description:
        "Technical PMs live at the intersection. But interview processes are built for one side or the other, never both.",
      stats: [
        {
          value: "2x",
          label: "Interview loops needed",
          description:
            "TPMs often go through both a product interview loop AND a technical interview loop. Double the time, double the prep.",
        },
        {
          value: "Inconsistent",
          label: "What companies test",
          description:
            "One company tests you as a PM who happens to be technical. Another tests you as an engineer who happens to do product. The role is the same.",
        },
        {
          value: "8-12",
          label: "Interview rounds typical",
          description:
            "Combined product and technical rounds make TPM interview processes some of the longest in tech.",
        },
      ],
    },
    solution: {
      badge: "Complete TPM Profile",
      headline: "Technical Depth +",
      gradientText: "Product Breadth. One Score.",
      description:
        "SkillPass was practically designed for the TPM role. Technical assessments and product assessments in one unified, verified profile.",
      features: [
        {
          title: "System Design Assessment",
          description:
            "Architecture, scalability, trade-offs. The technical depth that makes TPMs credible with engineering teams. Proctored and scored.",
        },
        {
          title: "Case & Strategy Assessment",
          description:
            "Product strategy, prioritization, metric analysis. The product chops that make TPMs effective at roadmap decisions.",
        },
        {
          title: "Cross-Functional References",
          description:
            "Engineers, designers, product peers, and executives. References that prove you bridge the gap between technical and product teams.",
        },
        {
          title: "Communication Verification",
          description:
            "Writing assessment that tests both technical documentation and product communication. The dual fluency that defines great TPMs.",
        },
      ],
    },
    proof: {
      headline: "TPMs With Unified Proof",
      testimonial: {
        quote:
          "I went through 11 interviews at one company because they couldn't decide if I was 'technical enough' or 'product enough.' My SkillPass profile settled both questions: 92nd percentile system design, 88th percentile case strategy, and references from both my engineering lead and my product VP. Next company? Three rounds total.",
        name: "Raj D.",
        role: "Technical PM, 6 years",
        detail: "SkillScore: 801",
      },
      stats: [
        { value: "801", label: "Avg TPM SkillScore" },
        { value: "2", label: "Skill domains verified" },
        { value: "60%", label: "Fewer interview rounds" },
        { value: "Free", label: "For all PMs" },
      ],
    },
    cta: {
      headline: "You're Technical AND Product.",
      gradientText: "Prove Both at Once.",
      description:
        "One profile that verifies both sides of the TPM role. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "View TPM Assessment", href: "/assessments" },
    },
  },

  // 71. ml-engineers
  {
    slug: "ml-engineers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "ML Engineers: Models and Code, Verified in One Score | SkillPass",
      description:
        "ML engineering spans research, coding, and production systems. SkillPass verifies it all with a SkillScore (300-850) that captures your full ML toolkit. Free.",
    },
    hero: {
      badge: "ML Engineers",
      headline: "You Train Models AND Ship Them.",
      gradientText: "Finally, One Score Proves Both.",
      subheadline:
        "ML engineering sits at the intersection of research and production. Interviews either test you on theory (papers, math) or coding (LeetCode). SkillPass verifies the full picture: model development, engineering rigor, and real-world deployment skills.",
      primaryCta: { text: "Verify Your ML Skills", href: "/signup" },
      secondaryCta: { text: "See ML Assessment", href: "/assessments" },
      trustLine: "Free for all ML professionals.",
    },
    problem: {
      badge: "Split Identity",
      headline: "Research Interviews Don't Test Engineering.",
      gradientText: "Engineering Interviews Don't Test Research.",
      description:
        "You're not a researcher. You're not just a software engineer. You're both. And no interview process knows how to handle that.",
      stats: [
        {
          value: "2",
          label: "Distinct skill sets tested",
          description:
            "ML engineers need both deep ML knowledge (theory, papers, math) and strong software engineering skills. Interviews test them separately.",
        },
        {
          value: "Take-homes",
          label: "Still the norm",
          description:
            "ML interviews frequently include multi-day take-home projects. Build a model, deploy it, write up results. Per company.",
        },
        {
          value: "Exploding",
          label: "Demand vs. supply",
          description:
            "ML engineer demand is surging. But broken interview processes mean qualified candidates get stuck in months-long pipelines.",
        },
      ],
    },
    solution: {
      badge: "Full ML Profile",
      headline: "Theory. Code.",
      gradientText: "Production. Verified.",
      description:
        "SkillPass captures the complete ML engineering skill set. Research depth, coding ability, and the collaboration skills that matter in production environments.",
      features: [
        {
          title: "Data Analysis & ML Assessment",
          description:
            "Statistical reasoning, model selection, feature engineering, evaluation metrics. The ML fundamentals, proctored and scored.",
        },
        {
          title: "Coding Assessment",
          description:
            "Algorithms, data structures, and practical coding. The engineering backbone that gets models from notebooks to production.",
        },
        {
          title: "System Design for ML",
          description:
            "ML pipelines, model serving architectures, data infrastructure. System design problems specific to ML production environments.",
        },
        {
          title: "Research + Engineering References",
          description:
            "References from research advisors, engineering leads, and cross-functional partners. Proof you can bridge the lab and the codebase.",
        },
      ],
    },
    proof: {
      headline: "ML Engineers With Complete Proof",
      testimonial: {
        quote:
          "Every ML interview was different. One tested Transformers theory, another wanted me to grind LeetCode, another gave me a week-long take-home. My SkillPass profile captured all of it: ML assessment, coding, system design, plus references from my research advisor and engineering manager. Score: 818. Three offers in a month.",
        name: "Yuki S.",
        role: "Senior ML Engineer",
        detail: "SkillScore: 818",
      },
      stats: [
        { value: "818", label: "Avg ML SkillScore" },
        { value: "3", label: "Assessment types covered" },
        { value: "60%", label: "Faster hiring" },
        { value: "$0", label: "Free" },
      ],
    },
    cta: {
      headline: "Research Meets Production.",
      gradientText: "One Score Covers Both.",
      description:
        "The complete ML engineering profile, verified and scored. Free forever.",
      primaryCta: { text: "Build Your ML Profile", href: "/signup" },
      secondaryCta: { text: "View ML Assessment", href: "/assessments" },
    },
  },

  // 72. solutions-engineers
  {
    slug: "solutions-engineers",
    category: "mid-career-role",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Solutions Engineers: Technical Depth + Communication, Verified | SkillPass",
      description:
        "Solutions engineers need technical skill AND client-facing polish. SkillPass verifies both with a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Solutions Engineers",
      headline: "You Speak Engineering AND Business.",
      gradientText: "That's Rare. Make It Visible.",
      subheadline:
        "Solutions Engineers are the rarest breed: deep technical skills combined with exceptional communication and client management. SkillPass is the first platform that verifies both in one score.",
      primaryCta: { text: "Verify Your Dual Skills", href: "/signup" },
      secondaryCta: { text: "See SE Assessment", href: "/assessments" },
      trustLine: "Free for all SEs.",
    },
    problem: {
      badge: "The SE Problem",
      headline: "Interview Processes Can't Assess",
      gradientText: "Hybrid Roles",
      description:
        "SEs fall between sales and engineering. Both sides interview you, neither fully understands what you do, and the assessment is fragmented.",
      stats: [
        {
          value: "Split",
          label: "Between two interview tracks",
          description:
            "SE candidates typically go through a sales-side evaluation AND a technical evaluation. Two tracks, double the time, neither perfectly aligned.",
        },
        {
          value: "Demo",
          label: "Is the only real test",
          description:
            "Most SE interviews hinge on a demo presentation. That's one data point for a role that requires dozens of different skills.",
        },
        {
          value: "Undervalued",
          label: "Technical depth often missed",
          description:
            "Because SEs are client-facing, their deep technical skills often go unassessed. Hiring managers hire for polish and miss the substance.",
        },
      ],
    },
    solution: {
      badge: "Both Sides Verified",
      headline: "Technical Depth.",
      gradientText: "Client Polish. One Profile.",
      description:
        "SkillPass verifies the complete SE toolkit. Technical assessments, communication assessment, and structured references from both technical and business partners.",
      features: [
        {
          title: "Technical Assessment",
          description:
            "System design, coding fundamentals, and architecture reasoning. Proctored proof of the technical depth that makes great SEs credible with engineering teams.",
        },
        {
          title: "Communication Assessment",
          description:
            "Writing clarity, explanation ability, and persuasive communication. Scored and verified -- the client-facing skills that close deals.",
        },
        {
          title: "Dual-Track References",
          description:
            "References from account executives AND engineering counterparts. Structured feedback that proves you're effective on both sides of the house.",
        },
        {
          title: "Situational Judgment",
          description:
            "Real SE scenarios: technical objections, competitive positioning, scope negotiation. How you navigate complex client situations, scored.",
        },
      ],
    },
    proof: {
      headline: "Solutions Engineers With Proof on Both Sides",
      testimonial: {
        quote:
          "I got tired of SE interviews where the sales team thought I was 'too technical' and the engineering team thought I was 'too salesy.' My SkillPass profile showed 90th percentile technical assessment AND 93rd percentile communication. Nobody questions the hybrid anymore. Scored 795.",
        name: "Jordan B.",
        role: "Senior Solutions Engineer",
        detail: "SkillScore: 795",
      },
      stats: [
        { value: "795", label: "Avg SE SkillScore" },
        { value: "2", label: "Skill tracks verified" },
        { value: "60%", label: "Faster SE hiring" },
        { value: "Free", label: "For all SEs" },
      ],
    },
    cta: {
      headline: "Technical + Communicative.",
      gradientText: "Prove You're Both.",
      description:
        "One profile that speaks to sales and engineering. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "View SE Assessment", href: "/assessments" },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // CATEGORY G: NICHE / SPECIALIST (8 pages)
  // ─────────────────────────────────────────────────────────────

  // 73. neurodiverse-professionals
  {
    slug: "neurodiverse-professionals",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Neurodiverse Professionals: Skills-First Removes Interview Bias | SkillPass",
      description:
        "Traditional interviews penalize neurodiversity. SkillPass measures skills through structured assessments and references, not social performance. SkillScore 300-850. Free.",
    },
    hero: {
      badge: "Neurodiversity",
      headline: "You're Exceptional at Your Job.",
      gradientText: "Terrible at Performing in Interviews.",
      subheadline:
        "Standard interviews reward confidence, eye contact, and small talk. None of that correlates with job performance. SkillPass measures what actually matters: verified skills, structured peer feedback, and proctored assessments. No social performance required.",
      primaryCta: { text: "Let Your Skills Speak", href: "/signup" },
      secondaryCta: { text: "How Assessment Works", href: "/how-it-works" },
      trustLine: "Free. Structured. Bias-reduced.",
    },
    problem: {
      badge: "Interview Bias",
      headline: "Interviews Measure Social Performance.",
      gradientText: "Not Job Performance.",
      description:
        "For neurodiverse professionals -- people with ADHD, autism, dyslexia, and other neurodivergent traits -- standard interviews are a minefield of irrelevant social tests.",
      stats: [
        {
          value: "85%",
          label: "Neurodiverse adults underemployed",
          description:
            "The vast majority of neurodiverse adults are underemployed or unemployed -- not because of ability, but because of how ability is assessed.",
        },
        {
          value: "Social",
          label: "Interviews favor social fluency",
          description:
            "Eye contact, firm handshake, 'tell me about yourself.' These social rituals have zero correlation with coding ability, analytical thinking, or job performance.",
        },
        {
          value: "$0",
          label: "Accommodation in most processes",
          description:
            "Most interview processes offer minimal accommodation. The 'standard' process is designed for neurotypical candidates.",
        },
      ],
    },
    solution: {
      badge: "Skills, Not Social Signals",
      headline: "Structured. Objective.",
      gradientText: "Skills-First.",
      description:
        "SkillPass replaces subjective social assessment with structured, objective skill verification. Your work speaks. Your score speaks. You don't have to perform.",
      features: [
        {
          title: "Structured Assessments",
          description:
            "Clear instructions, consistent format, no ambiguous social cues. Proctored tests measure what you know and can do -- not how you present it.",
        },
        {
          title: "Written Communication Option",
          description:
            "Communication skills are assessed through writing, not live conversation. If you're brilliant on paper and awkward in person, that's reflected accurately.",
        },
        {
          title: "Quantified Peer Feedback",
          description:
            "References from colleagues who've actually worked with you. Structured 8-dimension ratings that capture your real-world performance, not interview performance.",
        },
        {
          title: "Score-Based Discovery",
          description:
            "Employers search by SkillScore, not by interview impression. A 770 is a 770, regardless of how much eye contact you made.",
        },
      ],
    },
    proof: {
      headline: "Neurodiverse Professionals Thriving",
      testimonial: {
        quote:
          "I'm autistic. I'm also an exceptional software engineer. But I bomb interviews because I don't do well with vague questions and social pressure. SkillPass let me prove my skills through structured assessments and written communication. Scored 789. Three companies reached out based on my score alone. No awkward chit-chat required.",
        name: "Sam T.",
        role: "Software Engineer, Autistic",
        detail: "SkillScore: 789",
      },
      stats: [
        { value: "789", label: "Avg neurodiverse SkillScore" },
        { value: "85%", label: "Underemployment addressed" },
        { value: "Structured", label: "Every assessment" },
        { value: "$0", label: "Always free" },
      ],
    },
    cta: {
      headline: "Your Brain Works Differently.",
      gradientText: "Your Skills Work Exceptionally.",
      description:
        "Structured, objective, skills-first verification. No social performance needed. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See How It's Structured", href: "/how-it-works" },
    },
  },

  // 74. parents-returning
  {
    slug: "parents-returning",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Parents Returning to Work: Your Skills Didn't Take Parental Leave | SkillPass",
      description:
        "Returning from parental leave? SkillPass verifies your current skills with proctored assessments and a SkillScore (300-850). Proof that skills don't expire. Free.",
    },
    hero: {
      badge: "Parents Returning to Work",
      headline: "You Managed a Household.",
      gradientText: "That's Harder Than Most Sprints.",
      subheadline:
        "You stepped away to raise humans. Now the job market acts like your skills evaporated. SkillPass gives you current, verified proof that your abilities are intact and ready to deploy.",
      primaryCta: { text: "Prove You're Ready", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
      trustLine: "Free for every returning parent.",
    },
    problem: {
      badge: "The Parental Penalty",
      headline: "Skills Don't Take",
      gradientText: "Parental Leave",
      description:
        "You were a high performer before you left. Your abilities didn't dissolve because you changed diapers for two years. But hiring systems think they did.",
      stats: [
        {
          value: "43%",
          label: "Penalized on return",
          description:
            "Nearly half of parents returning to work report being offered roles at lower levels than when they left. Same skills, lower title.",
        },
        {
          value: "2-3 yr",
          label: "Typical parental gap",
          description:
            "Most parents return within 2-3 years. That's not long enough for skills to decay, but it's long enough for hiring algorithms to flag.",
        },
        {
          value: "$16K",
          label: "Average salary loss on return",
          description:
            "Returning parents lose roughly $16K in annual salary compared to their pre-leave compensation. The 'motherhood penalty' is well-documented.",
        },
      ],
    },
    solution: {
      badge: "Fresh Verification",
      headline: "Current Skills.",
      gradientText: "Current Proof.",
      description:
        "SkillPass timestamps your abilities to today. Take assessments now, get references now, prove you're ready now.",
      features: [
        {
          title: "Today's Assessment",
          description:
            "Proctored skill assessments dated today. Not 'what did you do three years ago' -- 'what can you do right now.' The answer is: a lot.",
        },
        {
          title: "Pre-Leave References",
          description:
            "Your former managers and teammates can still provide structured references. Great performance reviews don't expire because you took leave.",
        },
        {
          title: "Upskilling Credit",
          description:
            "Did you take courses during your leave? SkillPass scores any continued education and adds it to your profile. Your learning didn't stop.",
        },
        {
          title: "Return-Ready Signal",
          description:
            "Your SkillScore tells employers you're not rusty -- you're verified. Search by score, not by gap, and get matched with roles that fit your skills.",
        },
      ],
    },
    proof: {
      headline: "Parents Who Came Back Strong",
      testimonial: {
        quote:
          "I took three years off for my twins. When I started interviewing again, every recruiter asked about the gap instead of my skills. Built my SkillPass profile over a weekend -- assessments, references from my old team, the works. Scored 758 and got hired at a level higher than when I left. The gap didn't matter because the proof was current.",
        name: "Michelle R.",
        role: "Returning PM, 3-year leave",
        detail: "SkillScore: 758",
      },
      stats: [
        { value: "758", label: "Avg returning parent SkillScore" },
        { value: "Current", label: "All verification dates" },
        { value: "60%", label: "Faster return-to-work" },
        { value: "Free", label: "For every parent" },
      ],
    },
    cta: {
      headline: "You Raised Kids.",
      gradientText: "That's the Hard Part. This Is Easy.",
      description:
        "Build your verified profile in 30 minutes. Show employers you're ready today. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "Learn More", href: "/how-it-works" },
    },
  },

  // 75. over-50-professionals
  {
    slug: "over-50-professionals",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Professionals Over 50: Decades of Experience, Cuts Through Age Bias | SkillPass",
      description:
        "Age bias is real. SkillPass replaces assumptions with verified data -- proctored assessments, peer references, and a SkillScore (300-850). Your experience, quantified. Free.",
    },
    hero: {
      badge: "Experienced Professionals",
      headline: "25 Years of Expertise.",
      gradientText: "Reduced to 'Overqualified.'",
      subheadline:
        "Age bias hides behind words like 'culture fit' and 'overqualified.' SkillPass doesn't know your age. It knows your SkillScore -- a verified, objective measure of what you can do. That's what employers see first.",
      primaryCta: { text: "Let Data Speak", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free. Age-blind. Skills-first.",
    },
    problem: {
      badge: "Age Bias",
      headline: "'Overqualified' Is Code for",
      gradientText: "'Too Old.'",
      description:
        "You have decades of experience, deep expertise, and proven results. But in many hiring processes, your age works against you before you even get a chance to speak.",
      stats: [
        {
          value: "78%",
          label: "Of 50+ report age discrimination",
          description:
            "Over three-quarters of professionals over 50 believe they've experienced age discrimination in their job search. It's the most common form of workplace bias.",
        },
        {
          value: "2x",
          label: "Longer job search",
          description:
            "Workers over 50 take roughly twice as long to find new employment compared to younger workers with similar qualifications.",
        },
        {
          value: "'Culture fit'",
          label: "The euphemism",
          description:
            "When companies say 'not a culture fit' for an experienced candidate, they often mean 'too old for our team.' It's legal, common, and damaging.",
        },
      ],
    },
    solution: {
      badge: "Age-Blind Verification",
      headline: "Your Score Doesn't Know",
      gradientText: "How Old You Are",
      description:
        "SkillPass measures skills, not demographics. Your SkillScore is based entirely on verified ability -- assessments, references, and performance data.",
      features: [
        {
          title: "Current Skill Verification",
          description:
            "Proctored assessments that reflect what you can do today. Not assumptions based on when you graduated. Current skills, current proof.",
        },
        {
          title: "Decades of References",
          description:
            "25 years of colleagues, managers, and collaborators. That's not a weakness -- it's the deepest reference network of any candidate in the pool.",
        },
        {
          title: "Performance History Depth",
          description:
            "NLP-analyzed performance reviews spanning your career. Sustained excellence over decades is a powerful signal that younger candidates simply can't match.",
        },
        {
          title: "Score-Based Matching",
          description:
            "Employers search by SkillScore. A 790 is a 790, whether you're 28 or 58. The number leads; the resume follows.",
        },
      ],
    },
    proof: {
      headline: "Experience Recognized",
      testimonial: {
        quote:
          "I'm 54 with three decades of engineering leadership. I kept getting ghosted by companies that were clearly hiring younger. Built my SkillPass profile, scored 826 with references from 15 people across my career. A startup CTO saw my score, read my references, and offered me a VP role. He told me later he didn't notice my graduation year until after the offer.",
        name: "Robert K.",
        role: "VP of Engineering, 30 years experience",
        detail: "SkillScore: 826",
      },
      stats: [
        { value: "826", label: "Avg 50+ SkillScore" },
        { value: "15+", label: "Avg references available" },
        { value: "60%", label: "Faster hiring" },
        { value: "$0", label: "Free for all" },
      ],
    },
    cta: {
      headline: "Experience Isn't a Liability.",
      gradientText: "It's Your Biggest Asset.",
      description:
        "A verified score that leads with skills, not demographics. Free forever.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See How Scoring Works", href: "/how-it-works" },
    },
  },

  // 76. immigrants-refugees
  {
    slug: "immigrants-refugees",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Immigrants & Refugees: Your Skills Crossed Borders. Your Credentials Can Too. | SkillPass",
      description:
        "International credentials often aren't recognized domestically. SkillPass calibrates 4,000+ global institutions and verifies your skills with a SkillScore (300-850). Free.",
    },
    hero: {
      badge: "Immigrants & Refugees",
      headline: "You Were a Doctor Back Home.",
      gradientText: "Here, You're Starting Over. You Shouldn't Be.",
      subheadline:
        "International credentials often aren't recognized. SkillPass calibrates your education across 4,000+ global institutions and verifies your current skills with proctored assessments. Your abilities didn't stop at the border.",
      primaryCta: { text: "Verify Your Skills", href: "/signup" },
      secondaryCta: { text: "Global Calibration", href: "/institutions" },
      trustLine: "Free for everyone, everywhere.",
    },
    problem: {
      badge: "The Credential Gap",
      headline: "Your Degree Is Valid.",
      gradientText: "The System Doesn't Know That.",
      description:
        "You have education, training, and professional experience from another country. Much of it is excellent. But domestic hiring systems can't parse it.",
      stats: [
        {
          value: "2M+",
          label: "Immigrants underemployed in US",
          description:
            "Over two million immigrants in the US are working in jobs that don't use their full education or professional training.",
        },
        {
          value: "Unrecognized",
          label: "International degrees",
          description:
            "Many US employers don't recognize international universities, even when those programs are rigorous and globally respected.",
        },
        {
          value: "Years",
          label: "To re-credential domestically",
          description:
            "Formal credential recognition processes can take years and cost thousands. Meanwhile, your skills are going to waste.",
        },
      ],
    },
    solution: {
      badge: "Global Skills, Local Proof",
      headline: "4,000+ Institutions.",
      gradientText: "One Universal Score.",
      description:
        "SkillPass calibrates education from around the world and verifies your current abilities. One score that domestic employers trust.",
      features: [
        {
          title: "Global Institution Calibration",
          description:
            "IIT, Peking University, University of Lagos, ETH Zurich, University of Buenos Aires -- 4,000+ institutions scored and calibrated against a universal standard.",
        },
        {
          title: "Current Skill Assessment",
          description:
            "Proctored assessments in your field that prove your abilities today. Language-accessible and culturally neutral testing.",
        },
        {
          title: "International References",
          description:
            "References from previous employers and colleagues, wherever they are in the world. Structured and verified across 8 standard dimensions.",
        },
        {
          title: "Domestic Credibility",
          description:
            "Your SkillScore is on the same 300-850 scale as every domestic candidate. Employers don't need to interpret foreign credentials -- they see a number they trust.",
        },
      ],
    },
    proof: {
      headline: "Global Skills, Recognized",
      testimonial: {
        quote:
          "I was a civil engineer in Syria for eight years. Here, nobody recognized my degree. I drove Uber for two years. SkillPass calibrated my university, scored my engineering assessment, and collected references from my former colleagues. Scored 746 and got hired as a structural engineer. First professional role in four years.",
        name: "Ahmad H.",
        role: "Civil Engineer, Syrian Refugee",
        detail: "SkillScore: 746",
      },
      stats: [
        { value: "746", label: "Avg immigrant SkillScore" },
        { value: "4,000+", label: "Global institutions" },
        { value: "Universal", label: "Score scale" },
        { value: "$0", label: "Free for everyone" },
      ],
    },
    cta: {
      headline: "Your Skills Have No Borders.",
      gradientText: "Neither Does Your SkillScore.",
      description:
        "Calibrated globally, recognized locally. Build your profile free.",
      primaryCta: { text: "Start Your Profile", href: "/signup" },
      secondaryCta: { text: "See Global Institutions", href: "/institutions" },
    },
  },

  // 77. open-source-contributors
  {
    slug: "open-source-contributors",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Open Source Contributors: GitHub Shows What You Built, SkillPass Shows How You Work | SkillPass",
      description:
        "Your GitHub shows code. SkillPass adds verified peer references, proctored assessments, and a SkillScore (300-850) that captures how you collaborate. Free.",
    },
    hero: {
      badge: "Open Source Contributors",
      headline: "Your Commit History Is Public.",
      gradientText: "Your Collaboration Skills Aren't.",
      subheadline:
        "GitHub shows what you built. It doesn't show how you reviewed PRs, mentored new contributors, or navigated design disagreements. SkillPass adds the human layer to your open-source work.",
      primaryCta: { text: "Complete Your Story", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free for all contributors.",
    },
    problem: {
      badge: "Half the Picture",
      headline: "Code Is Only Part of",
      gradientText: "Open Source",
      description:
        "You maintain repos, review PRs, onboard contributors, and make architectural decisions. Your GitHub profile shows commits, not community leadership.",
      stats: [
        {
          value: "Commits",
          label: "Are all that's visible",
          description:
            "GitHub contribution graphs show quantity, not quality. A thousand commits don't tell an employer about your code review quality or design judgment.",
        },
        {
          value: "0",
          label: "Collaboration signal on GitHub",
          description:
            "How well you communicate in issues, how you handle disagreements in PRs, how you mentor newcomers -- none of this is quantified.",
        },
        {
          value: "Undervalued",
          label: "OSS in traditional hiring",
          description:
            "Many hiring processes treat open-source contributions as a nice-to-have rather than the serious professional work it is.",
        },
      ],
    },
    solution: {
      badge: "Code + Character",
      headline: "What You Built +",
      gradientText: "How You Work. Verified.",
      description:
        "SkillPass adds verified collaboration, communication, and technical depth signals to your public code contributions.",
      features: [
        {
          title: "Proctored Technical Assessment",
          description:
            "Algorithms, system design, practical coding. Your open-source work shows you can build. Assessment scores prove the fundamentals are strong too.",
        },
        {
          title: "Contributor References",
          description:
            "Fellow maintainers, regular contributors, and users who interact with your projects. Structured references that capture your open-source collaboration style.",
        },
        {
          title: "Communication Score",
          description:
            "Writing assessment that reflects how you communicate in technical contexts. Issue descriptions, PR reviews, RFC documents -- communication is code.",
        },
        {
          title: "Mentorship & Leadership Signal",
          description:
            "References specifically rate your mentorship of new contributors, your design leadership, and your community building. The human side of OSS.",
        },
      ],
    },
    proof: {
      headline: "OSS Contributors Showing the Full Picture",
      testimonial: {
        quote:
          "I maintain a library with 12K stars. Employers would look at my GitHub and say 'cool project.' But they'd still make me do their full interview loop. With SkillPass, I added references from five co-maintainers and scored 803 on the technical assessment. Two companies skipped their coding rounds entirely.",
        name: "Adrian P.",
        role: "OSS Maintainer, 12K GitHub Stars",
        detail: "SkillScore: 803",
      },
      stats: [
        { value: "803", label: "Avg OSS SkillScore" },
        { value: "5+", label: "Collaborator references" },
        { value: "60%", label: "Faster hiring" },
        { value: "Free", label: "For every contributor" },
      ],
    },
    cta: {
      headline: "Your Code Is Open.",
      gradientText: "Open Up the Rest.",
      description:
        "Add verified collaboration, mentorship, and communication to your open-source work. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See a Sample", href: "/demo" },
    },
  },

  // 78. research-scientists
  {
    slug: "research-scientists",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Research Scientists: Peer-Reviewed Papers AND Peer-Reviewed Profile | SkillPass",
      description:
        "Publications show your research. SkillPass verifies how you collaborate, communicate, and apply skills beyond academia. SkillScore 300-850. Free.",
    },
    hero: {
      badge: "Research Scientists",
      headline: "H-Index Measures Impact.",
      gradientText: "SkillScore Measures Everything Else.",
      subheadline:
        "Your publications show you can research. SkillPass shows you can collaborate, communicate, mentor, and deliver results in team environments. The complete scientist profile -- peer-reviewed in a different way.",
      primaryCta: { text: "Build Your Full Profile", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free for all researchers.",
    },
    problem: {
      badge: "The Publication Trap",
      headline: "Papers Prove You Publish.",
      gradientText: "They Don't Prove You Collaborate.",
      description:
        "Academic metrics measure research output. But whether you're staying in academia or going to industry, the skills that make you effective go far beyond your publication list.",
      stats: [
        {
          value: "1",
          label: "Metric that matters (h-index)",
          description:
            "Academic careers are reduced to publication count and citation metrics. An entire career of mentorship, teaching, and collaboration is invisible.",
        },
        {
          value: "Invisible",
          label: "Collaboration quality",
          description:
            "How well you work in a lab, how you support junior researchers, how you navigate multi-institution projects -- none of this has a metric.",
        },
        {
          value: "Siloed",
          label: "Reputation is field-specific",
          description:
            "Your reputation exists within your narrow research community. Outside it, nobody knows who you are.",
        },
      ],
    },
    solution: {
      badge: "Beyond Publications",
      headline: "Research + Collaboration +",
      gradientText: "Communication. Verified.",
      description:
        "SkillPass adds verified, structured feedback on the skills that make scientists effective in any environment -- not just at a bench.",
      features: [
        {
          title: "Academic Score Calibration",
          description:
            "Your PhD program, your institution's ranking, your coursework rigor -- all calibrated against 4,000+ institutions worldwide.",
        },
        {
          title: "Lab & Team References",
          description:
            "PIs, post-docs, grad students, and industry collaborators. Structured 8-dimension references that capture your collaboration quality.",
        },
        {
          title: "Communication Assessment",
          description:
            "Can you explain your research to a non-specialist? Can you write a clear grant proposal? Your communication skills, assessed and scored.",
        },
        {
          title: "Technical Assessment",
          description:
            "Data analysis, coding, statistical reasoning. The applied skills that translate from research to industry roles.",
        },
      ],
    },
    proof: {
      headline: "Scientists With Complete Profiles",
      testimonial: {
        quote:
          "I have 40+ publications and an h-index of 22. But when I started exploring industry roles, companies wanted proof I could work in a team, communicate clearly, and write production code. SkillPass let me add references from 8 collaborators and score 94th percentile on the data analysis assessment. Hired as a principal research scientist at a biotech firm.",
        name: "Dr. Maria L.",
        role: "Computational Biologist, PhD",
        detail: "SkillScore: 811",
      },
      stats: [
        { value: "811", label: "Avg researcher SkillScore" },
        { value: "94th", label: "Data assessment percentile" },
        { value: "4,000+", label: "Institutions calibrated" },
        { value: "$0", label: "Free for researchers" },
      ],
    },
    cta: {
      headline: "Your Research Speaks for Itself.",
      gradientText: "Now Let Your Skills Speak Too.",
      description:
        "Add collaboration, communication, and applied skills to your publication record. Free forever.",
      primaryCta: { text: "Build Your Profile", href: "/signup" },
      secondaryCta: { text: "See Academic Calibration", href: "/institutions" },
    },
  },

  // 79. phds-entering-industry
  {
    slug: "phds-entering-industry",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "PhDs Entering Industry: Translate Depth Into Industry Credentials | SkillPass",
      description:
        "Your PhD trained you to go deep. SkillPass translates that depth into a SkillScore (300-850) that industry employers understand. Free.",
    },
    hero: {
      badge: "PhDs to Industry",
      headline: "You Spent 5 Years Going Deeper Than Anyone.",
      gradientText: "Industry Needs You to Go Broader.",
      subheadline:
        "Your dissertation proves mastery of a narrow topic. Industry wants to know: can you code, can you collaborate, can you communicate to non-experts? SkillPass verifies all of it alongside your academic depth.",
      primaryCta: { text: "Translate Your PhD", href: "/signup" },
      secondaryCta: { text: "See the Assessment", href: "/assessments" },
      trustLine: "Free for all PhDs.",
    },
    problem: {
      badge: "The Translation Problem",
      headline: "Your Dissertation Is 200 Pages.",
      gradientText: "Recruiters Read Zero.",
      description:
        "PhDs entering industry face a fundamental translation problem. Your expertise is real but communicated in a language industry doesn't speak.",
      stats: [
        {
          value: "5-7 yr",
          label: "PhD investment",
          description:
            "Half a decade of intense specialization. The depth of knowledge is extraordinary. But industry hiring systems can't assess it.",
        },
        {
          value: "Entry-level",
          label: "Offers despite expertise",
          description:
            "Many PhDs receive entry-level offers because companies can't verify their practical skills beyond their academic record.",
        },
        {
          value: "Different",
          label: "Language entirely",
          description:
            "Academic CVs, publication lists, and conference talks don't translate to industry requirements. Different system, different vocabulary.",
        },
      ],
    },
    solution: {
      badge: "PhD + Industry Skills",
      headline: "Academic Depth +",
      gradientText: "Industry Readiness. One Score.",
      description:
        "SkillPass validates your academic training AND verifies the applied skills industry employers are looking for.",
      features: [
        {
          title: "Academic Calibration",
          description:
            "Your PhD program, your advisor's standing, your coursework rigor -- all calibrated. A Stanford PhD and a mid-tier PhD aren't weighted the same.",
        },
        {
          title: "Applied Skills Assessment",
          description:
            "Coding, data analysis, and practical problem-solving. Proctored assessments that prove you can apply your knowledge in industry contexts.",
        },
        {
          title: "Communication Verification",
          description:
            "Can you explain your work to a product manager? To a CEO? Writing assessment that tests your ability to translate expertise for non-expert audiences.",
        },
        {
          title: "Collaboration References",
          description:
            "Lab mates, advisors, industry collaborators, and internship supervisors. Structured references that prove you work well beyond solo research.",
        },
      ],
    },
    proof: {
      headline: "PhDs Who Made the Jump",
      testimonial: {
        quote:
          "My PhD is in NLP. I've published at ACL, EMNLP, and NeurIPS. But tech companies still wanted me to prove I could 'actually code.' My SkillPass profile showed 97th percentile on coding assessment, strong collaboration references from my lab, and calibrated academic credentials. Got a senior ML engineer offer -- not entry-level. The score made the difference.",
        name: "Dr. Tariq N.",
        role: "NLP PhD, now Senior ML Engineer",
        detail: "SkillScore: 823",
      },
      stats: [
        { value: "823", label: "Avg PhD SkillScore" },
        { value: "97th", label: "Coding assessment" },
        { value: "Senior", label: "Level offers, not entry" },
        { value: "$0", label: "Free for PhDs" },
      ],
    },
    cta: {
      headline: "You Went Deep.",
      gradientText: "Now Go Everywhere.",
      description:
        "Translate your academic depth into an industry credential. Free forever.",
      primaryCta: { text: "Build Your PhD Profile", href: "/signup" },
      secondaryCta: { text: "View PhD Calibration", href: "/institutions" },
    },
  },

  // 80. employment-gap
  {
    slug: "employment-gap",
    category: "niche-specialist",
    audience: "talent",
    funnel: "mofu",
    seo: {
      title: "Employment Gap? Gaps in Timeline, Not in Skills | SkillPass",
      description:
        "Employment gaps shouldn't define you. SkillPass verifies your current skills with a SkillScore (300-850) that proves ability over history. Free.",
    },
    hero: {
      badge: "Employment Gaps",
      headline: "There's a Gap on Your Resume.",
      gradientText: "There's No Gap in Your Skills.",
      subheadline:
        "Health, caregiving, education, travel, burnout recovery -- gaps happen for good reasons. SkillPass shifts the conversation from 'why were you away' to 'here's what you can do.' Verified, scored, and dated today.",
      primaryCta: { text: "Close the Perception Gap", href: "/signup" },
      secondaryCta: { text: "How It Works", href: "/how-it-works" },
      trustLine: "Free. Non-judgmental. Skills-first.",
    },
    problem: {
      badge: "The Gap Problem",
      headline: "Hiring Algorithms See a Gap.",
      gradientText: "They Don't See a Person.",
      description:
        "ATS systems flag employment gaps automatically. Before a human ever sees your resume, the algorithm has already downranked you.",
      stats: [
        {
          value: "58%",
          label: "Flagged by ATS",
          description:
            "Over half of resumes with employment gaps of 6+ months get automatically deprioritized by applicant tracking systems.",
        },
        {
          value: "First",
          label: "Question in every interview",
          description:
            "'Tell me about the gap.' It's always the first question. Not your skills, not your achievements -- the gap. Every time.",
        },
        {
          value: "12-18 mo",
          label: "Is where bias peaks",
          description:
            "Gaps of 12-18 months trigger the strongest hiring bias. Long enough to be noticed, not long enough to be 'explained' by a degree or certification.",
        },
      ],
    },
    solution: {
      badge: "Skills Over Gaps",
      headline: "What You Can Do Today",
      gradientText: "Matters More Than When You Left",
      description:
        "SkillPass replaces the timeline obsession with current skill verification. Your profile is dated today, scored today, and relevant today.",
      features: [
        {
          title: "Current Assessment",
          description:
            "Proctored tests taken right now. The gap was then. Your abilities are now. There's verified, timestamped proof that you're ready.",
        },
        {
          title: "Gap-Period Learning",
          description:
            "Online courses, certifications, volunteer work, freelance projects -- anything you did during the gap gets scored and added to your profile.",
        },
        {
          title: "Historical References",
          description:
            "Former colleagues and managers can still provide structured references. Good work doesn't lose its value because time passed.",
        },
        {
          title: "Score-First Matching",
          description:
            "Employers on SkillPass search by SkillScore and skills, not by employment continuity. Your number does the talking.",
        },
      ],
    },
    proof: {
      headline: "Back From the Gap, Stronger",
      testimonial: {
        quote:
          "I took 18 months off for my mental health. Best decision I ever made. Worst thing for my resume. Every interview started with 'so, tell me about this gap.' Built my SkillPass profile, scored 744, and started leading with my score instead of my timeline. Hired in five weeks. Nobody asked about the gap.",
        name: "Casey N.",
        role: "Data Analyst, 18-month gap",
        detail: "SkillScore: 744",
      },
      stats: [
        { value: "744", label: "Avg gap SkillScore" },
        { value: "5 wks", label: "Avg time to hire" },
        { value: "Today", label: "Verification timestamp" },
        { value: "$0", label: "Free always" },
      ],
    },
    cta: {
      headline: "The Gap Doesn't Define You.",
      gradientText: "Your Skills Do.",
      description:
        "Verified, current, and free. Build your profile today and lead with proof, not explanations.",
      primaryCta: { text: "Get Your SkillScore", href: "/signup" },
      secondaryCta: { text: "See How It Works", href: "/how-it-works" },
    },
  },
];

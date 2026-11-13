import {
  Baby,
  Banknote,
  BriefcaseBusiness,
  BriefcaseMedical,
  Building2,
  CalendarDays,
  Cigarette,
  CreditCard,
  GraduationCap,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  Laptop,
  House,
  MessageCircle,
  PiggyBank,
  Plane,
  ShieldCheck,
  Sprout,
  TreePine,
  Umbrella,
  Users,
  UsersRound,
  WalletCards,
  Car,
  HandHeart,
  BadgeDollarSign,
  ClipboardCheck,
  FileText,
  CircleDollarSign,
  MapPinned,
  RefreshCcw,
  Headphones,
  Luggage,
  Repeat2,
  PlaneTakeoff,
  ClipboardPlus,
  ShieldPlus,
  TrendingUp,
  SlidersHorizontal,
  Gift,
  Bus,
  Landmark,
  Wallet,
  ChartNoAxesCombined,
  Clock3,
  BookOpen,
  CalendarRange,
  Hospital,
  RouteOff,
  CalendarX,
  Ambulance,
  Stamp,
  PlaneLanding,
  Route,
  SearchCheck,
  ShoppingBasket,
  Shield,
  Building,
  UserRoundCheck,
  Hourglass,
  Briefcase,
  Target,
  Palmtree,
  HousePlus,
  Gauge,
  ReceiptText,
  Milestone,
} from "lucide-react";

import type { FinancialServicePageContent } from "@/financial/pages/financial-service-page";

export const lifeInsuranceServicePageContent = {
  hero: {
    eyebrow: "Life Insurance",
    title: "Protect the people who depend on you.",
    description:
      "Life insurance provides financial security for your loved ones, helping them stay protected through life's uncertainty. I'll help you find the right coverage for your unique situation with clear advice and personalized support.",
    primaryButtonLabel: "Get a Life Insurance Quote",
    secondaryButtonLabel: "Book a Free Consultation",
    highlights: [
      {
        label: "Personalized Guidance",
        description: "Solutions tailored to your goals.",
        icon: UsersRound,
      },
      {
        label: "Multiple Providers",
        description: "Access to leading insurance partners.",
        icon: ShieldCheck,
      },
      {
        label: "Clear Explanations",
        description: "No jargon. Just honest advice.",
        icon: HeartHandshake,
      },
      {
        label: "Serving British Columbia",
        description: "Local knowledge. A brighter tomorrow.",
        icon: TreePine,
      },
    ],
  },

  overview: {
    title: "What is life insurance?",
    description:
      "Life insurance is a financial safety net that provides a tax-free payment to your beneficiaries if you pass away. It can help your loved ones cover living expenses, pay off debts, and maintain their quality of life during a difficult time.",
    audience: {
      title: "Who is it for?",
      description:
        "Life insurance can be valuable for many different situations.",
      items: [
        {
          title: "Families",
          description: "Provide for your loved ones",
          icon: UsersRound,
        },
        {
          title: "Homeowners",
          description: "Help cover your mortgage",
          icon: Home,
        },
        {
          title: "Parents",
          description: "Secure your children's future",
          icon: Baby,
        },
        {
          title: "Business owners",
          description: "Protect your business and family",
          icon: BriefcaseBusiness,
        },
        {
          title: "Newcomers",
          description: "Build security in Canada",
          icon: Plane,
        },
      ],
    },
  },

  feature: {
    image: {
      src: "/financial/who-i-help/life-insurance-family.png",
      alt: "A family looking toward Vancouver mountains and skyline",
      className: "object-[50%_center]",
    },
    title: "Why it matters",
    description:
      "Life is unpredictable. Life insurance helps ensure your loved ones are financially supported, even when you're no longer there. It can replace lost income, cover outstanding debts, and give your family the stability they need to move forward with confidence.",
    quote:
      "It's not just about life insurance. It's about the people you love.",
    attribution: "Gisele Pecapedra",
  },

  support: {
    title: "What it can help with",
    description: "Life insurance can provide financial support for:",
    items: [
      {
        title: "Mortgage protection",
        description: "Help your family stay in their home",
        icon: House,
      },
      {
        title: "Living expenses",
        description: "Support day-to-day needs",
        icon: PiggyBank,
      },
      {
        title: "Children's education",
        description: "Keep future plans moving",
        icon: GraduationCap,
      },
      {
        title: "Debt repayment",
        description: "Reduce financial pressure",
        icon: CreditCard,
      },
      {
        title: "Final expenses",
        description: "Prepare for immediate costs",
        icon: Heart,
      },
      {
        title: "Future goals",
        description: "Protect a long-term legacy",
        icon: Sprout,
      },
    ],
  },

  coverageTypes: {
    title: "Types of life insurance",
    description:
      "There are two main types of life insurance. I'll help you understand the differences and find the right option for your goals.",
    items: [
      {
        title: "Term Life Insurance",
        description:
          "Coverage for a set period of time, such as 10, 20 or 30 years. It's an affordable option that can provide significant protection during your working years.",
        bullets: [
          "Lower premiums",
          "Simple and straightforward",
          "Ideal for temporary needs",
        ],
        icon: Sprout,
      },
      {
        title: "Permanent Life Insurance",
        description:
          "Lifelong coverage that can build cash value over time. It offers long-term protection and can be part of a broader financial strategy.",
        bullets: [
          "Lifetime coverage",
          "Builds cash value",
          "Can be used for estate planning",
        ],
        icon: TreePine,
      },
    ],
    resourceLink: {
      label: "Read our Term vs. Permanent Life Insurance Guide",
      href: "/financial#resources",
    },
  },

  planning: {
    process: {
      title: "How it works",
      description: "A simple, supportive process from start to finish.",
      steps: [
        {
          title: "Understand your needs",
          description: "We'll discuss your goals, family situation and budget.",
        },
        {
          title: "Review your options",
          description:
            "I'll compare plans from trusted providers and explain the differences clearly.",
        },
        {
          title: "Apply for coverage",
          description:
            "I'll guide you through the application process and answer any questions.",
        },
        {
          title: "Keep your coverage aligned",
          description:
            "As your life changes, I'll help ensure your coverage continues to meet your needs.",
        },
      ],
    },
    factors: {
      title: "What affects the cost or eligibility?",
      description: "Your premium and eligibility can depend on:",
      items: [
        {
          title: "Age",
          description: "Generally, younger applicants pay less",
          icon: CalendarDays,
        },
        {
          title: "Health",
          description: "Your medical history and current health",
          icon: HeartPulse,
        },
        {
          title: "Lifestyle",
          description: "Activities and occupation",
          icon: Umbrella,
        },
        {
          title: "Coverage amount",
          description: "Higher coverage may increase cost",
          icon: Banknote,
        },
        {
          title: "Smoking status",
          description: "Non-smokers typically qualify for lower rates",
          icon: Cigarette,
        },
        {
          title: "Policy type",
          description: "Term or permanent coverage",
          icon: ShieldCheck,
        },
      ],
    },
  },

  advisor: {
    image: {
      src: "/financial/headshot.png",
      alt: "Gisele Pecapedra smiling",
      className: "object-[50%_38%]",
    },
    title: "Why work with Gisele?",
    description:
      "I make the insurance process simple and stress-free. I'll help you compare options from leading providers, explain the differences in plain language, and guide you to a solution that fits your unique circumstances and goals.",
    bullets: [
      "Access to multiple trusted providers",
      "Clear, unbiased advice",
      "Solutions tailored to your needs",
      "Ongoing support as your life changes",
    ],
  },

  faqs: {
    title: "Common questions",
    items: [
      {
        question: "How much life insurance do I need?",
        answer:
          "The right amount depends on your income, debts, mortgage, family needs, and future goals. I can help you estimate a practical coverage amount during a consultation.",
      },
      {
        question:
          "What's the difference between term and permanent life insurance?",
        answer:
          "Term insurance covers a specific period and is often more affordable. Permanent insurance can provide lifelong coverage and may include cash value features.",
      },
      {
        question: "Is life insurance expensive?",
        answer:
          "It depends on your age, health, coverage amount, and policy type. Many families are surprised to learn that simple term coverage can be quite affordable.",
      },
      {
        question: "Do I need a medical exam?",
        answer:
          "Some policies require medical questions or exams, while others offer simplified underwriting. We'll review what each option requires before you apply.",
      },
      {
        question: "Can I change my coverage later?",
        answer:
          "Yes, coverage can often be adjusted as your life changes. Reviewing your plan regularly helps keep it aligned with your needs.",
      },
    ],
  },

  relatedGuides: {
    title: "Related Guides",
    description:
      "Helpful articles to learn more about life insurance and financial planning.",
    action: {
      label: "View all resources",
      href: "/financial#resources",
    },
    items: [
      {
        title: "How Much Life Insurance Do I Need?",
        excerpt:
          "A simple guide to help you determine the right coverage for your situation.",
        href: "/financial#resources",
        image: {
          src: "/financial/who-i-help/life-insurance-family.png",
          alt: "Family looking across a mountain landscape",
          className: "object-[50%_center]",
        },
      },
      {
        title: "Term vs. Permanent Life Insurance",
        excerpt:
          "Key differences, pros and cons, and how to choose what's right for you.",
        href: "/financial#resources",
        image: {
          src: "/financial/who-i-help/critical-illness-lake.jpg",
          alt: "Mountain lake surrounded by evergreen forest",
        },
      },
      {
        title: "Life Insurance as Part of Your Financial Plan",
        excerpt: "How life insurance fits into your bigger financial picture.",
        href: "/financial#resources",
        image: {
          src: "/financial/family-guidance-banner-v2.png",
          alt: "Notebook and financial planning materials on a table",
          className: "object-[62%_center]",
        },
      },
    ],
  },

  cta: {
    title: "Let's find the right coverage for your family",
    subtitle:
      "Get personalized advice and a quote today - no pressure, just support",
  },
} satisfies FinancialServicePageContent;

export const criticalIllnessServicePageContent = {
  hero: {
    eyebrow: "CRITICAL ILLNESS INSURANCE",
    title: "Protect your finances while you focus on recovery.",
    description:
      "A serious illness can affect much more than your health. Critical illness insurance can provide a lump-sum benefit when a covered condition meets the policy requirements, helping you manage the financial impact of treatment, recovery, time away from work, and changes at home.",
    highlights: [
      {
        label: "Financial Flexibility",
        description:
          "A lump-sum benefit that can generally be used based on your priorities.",
        icon: WalletCards,
      },
      {
        label: "Income Protection Support",
        description:
          "Help manage expenses when illness affects your ability to work.",
        icon: BriefcaseMedical,
      },
      {
        label: "Family Support",
        description:
          "Create additional financial breathing room for you and your family.",
        icon: Users,
      },
      {
        label: "Personalized Guidance",
        description:
          "Understand available options and how coverage may fit your circumstances.",
        icon: MessageCircle,
      },
    ],
    primaryButtonLabel: "Get a Critical Illness Quote",
    primaryButtonHref: "/contact?service=critical-illness",
    secondaryButtonLabel: "Book a Free Consultation",
    secondaryButtonHref: "/contact",
  },

  overview: {
    title: "What is critical illness insurance?",
    description:
      "Critical illness insurance is designed to provide a lump-sum payment if you are diagnosed with a condition covered by your policy and satisfy the applicable policy requirements. Unlike health insurance, the benefit is not normally tied to specific medical bills. It can provide financial flexibility while you concentrate on treatment and recovery.",
    audience: {
      title: "Who may consider critical illness insurance?",
      description:
        "It may be particularly relevant when a serious illness could significantly affect your household finances.",
      items: [
        {
          title: "Working Professionals",
          description:
            "People whose household depends heavily on their ability to earn income.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Parents",
          description:
            "Families balancing income, childcare, housing, and long-term responsibilities.",
          icon: Baby,
        },
        {
          title: "Homeowners",
          description:
            "People carrying a mortgage or significant household expenses.",
          icon: House,
        },
        {
          title: "Business Owners",
          description:
            "Entrepreneurs who may face both personal and business disruption.",
          icon: Building2,
        },
        {
          title: "Self-Employed Clients",
          description:
            "People who may have limited paid sick leave or employer benefits.",
          icon: Laptop,
        },
      ],
    },
  },

  feature: {
    image: {
      src: "/images/services/critical-illness-recovery.jpg",
      alt: "Family spending time together during recovery",
    },
    title: "Why financial protection during recovery matters",
    description:
      "Surviving a serious illness can bring unexpected financial pressure. You may need time away from work, help at home, additional childcare, travel for treatment, home modifications, or simply more flexibility while your family adjusts. Critical illness insurance is designed to provide money you can use according to your needs rather than restricting the benefit to one particular expense.",
    quote:
      "The goal is to give your finances more flexibility when your health needs your attention.",
    attribution: "Gisele Pecapedra",
  },

  support: {
    title: "What can the benefit help with?",
    description:
      "Depending on your circumstances, a critical illness benefit may help provide financial flexibility for:",
    items: [
      {
        title: "Income Replacement",
        description:
          "Help cover household expenses during time away from work.",
        icon: BadgeDollarSign,
      },
      {
        title: "Mortgage & Housing",
        description:
          "Help maintain mortgage, rent, and regular household costs.",
        icon: House,
      },
      {
        title: "Treatment-Related Costs",
        description:
          "Help manage eligible or non-reimbursed expenses surrounding your recovery.",
        icon: HeartPulse,
      },
      {
        title: "Childcare & Home Support",
        description: "Pay for additional assistance while you recover.",
        icon: HandHeart,
      },
      {
        title: "Travel & Transportation",
        description:
          "Help with transportation or accommodation related to treatment.",
        icon: Car,
      },
      {
        title: "Financial Breathing Room",
        description:
          "Maintain savings and reduce pressure on your family's finances.",
        icon: PiggyBank,
      },
    ],
  },

  coverageTypes: {
    title: "How is it different from life insurance?",
    description:
      "Life insurance and critical illness insurance protect against different financial risks. They can complement each other rather than replace one another.",
    items: [
      {
        title: "Critical Illness Insurance",
        description:
          "Designed to provide a benefit to you after a qualifying diagnosis while you are living.",
        bullets: [
          "Benefit is triggered by policy-defined conditions and requirements",
          "Provides financial flexibility during treatment and recovery",
          "Designed around the financial impact of surviving a serious illness",
        ],
        icon: HeartPulse,
      },
      {
        title: "Life Insurance",
        description:
          "Designed primarily to provide a benefit to your beneficiaries after your death.",
        bullets: [
          "Helps protect dependants financially",
          "Can help with mortgages, debts, and ongoing family expenses",
          "Addresses a different financial risk than critical illness coverage",
        ],
        icon: ShieldCheck,
      },
    ],
    resourceLink: {
      label: "Read the Critical Illness Insurance Guide",
      href: "/guides/critical-illness-insurance",
    },
  },

  planning: {
    process: {
      title: "How it works",
      description:
        "A straightforward process to determine whether coverage fits your needs.",
      steps: [
        {
          title: "Understand your financial exposure",
          description:
            "We discuss your income, family responsibilities, existing benefits, savings, and concerns.",
        },
        {
          title: "Review available options",
          description:
            "Gisele explains available coverage amounts, policy structures, and important differences.",
        },
        {
          title: "Apply for coverage",
          description:
            "You complete an application and any insurer underwriting requirements.",
        },
        {
          title: "Review coverage over time",
          description:
            "Revisit your protection when your family, career, debts, or financial circumstances change.",
        },
      ],
    },

    factors: {
      title: "What affects cost or eligibility?",
      description:
        "Pricing and eligibility vary between insurers and applicants.",
      items: [
        {
          title: "Age",
          description:
            "Age is an important factor in pricing and available coverage.",
          icon: CalendarDays,
        },
        {
          title: "Health",
          description:
            "Current health and medical history may affect underwriting.",
          icon: HeartPulse,
        },
        {
          title: "Coverage Amount",
          description:
            "Higher benefit amounts generally result in higher premiums.",
          icon: CircleDollarSign,
        },
        {
          title: "Smoking Status",
          description: "Tobacco or nicotine use may affect pricing.",
          icon: Cigarette,
        },
        {
          title: "Policy Design",
          description:
            "Term length, benefit options, and policy features influence cost.",
          icon: FileText,
        },
        {
          title: "Insurer Underwriting",
          description: "Each insurer may assess an application differently.",
          icon: ClipboardCheck,
        },
      ],
    },
  },

  advisor: {
    image: {
      src: "/financial/headshot.png",
      alt: "Gisele Pecapedra",
    },
    title: "Why work with Gisele?",
    description:
      "Critical illness policies can differ in structure, definitions, available benefits, and underwriting. Gisele helps you understand the options without overwhelming you with policy language.",
    bullets: [
      "Compare available solutions from multiple providers",
      "Understand how critical illness fits alongside existing life and workplace coverage",
      "Choose coverage based on your family's financial exposure",
      "Get clear explanations of important policy differences",
      "Review your protection as your circumstances change",
    ],
  },

  faqs: {
    title: "Common questions",
    items: [
      {
        question: "What is a lump-sum critical illness benefit?",
        answer:
          "It is a one-time benefit payable when a claim satisfies the terms and conditions of the policy. Unlike reimbursement-style insurance, the payment is generally not limited to one particular expense.",
      },
      {
        question: "Can I use the benefit however I want?",
        answer:
          "In most individual critical illness policies, the benefit is not tied to specific medical bills. How the proceeds may be used depends on the policy and your circumstances.",
      },
      {
        question: "Is critical illness insurance the same as life insurance?",
        answer:
          "No. Life insurance primarily protects your beneficiaries financially if you die, while critical illness insurance is intended to provide financial support to you after a qualifying diagnosis while you are living.",
      },
      {
        question: "Does every illness qualify?",
        answer:
          "No. Covered conditions, definitions, survival periods, exclusions, and other requirements vary by policy. The detailed Critical Illness Guide explains these concepts further.",
      },
      {
        question: "How much coverage should I consider?",
        answer:
          "That depends on factors such as your income, savings, debts, workplace benefits, household expenses, and how long your finances could comfortably absorb an interruption.",
      },
    ],
  },

  relatedGuides: {
    eyebrow: "LEARN MORE",
    title: "Critical Illness Guides",
    description:
      "Explore the details when you're ready to understand coverage more deeply.",
    action: {
      label: "View All Guides",
      href: "/guides",
    },
    items: [
      {
        title: "Critical Illness Insurance: A Complete Guide",
        excerpt:
          "Understand how coverage works, policy definitions, and what to review before applying.",
        href: "/guides/critical-illness-insurance",
        image: {
          src: "/images/guides/critical-illness-guide.jpg",
          alt: "Critical illness insurance guide",
        },
      },
      {
        title: "Critical Illness vs. Life Insurance",
        excerpt:
          "Understand the different financial risks each type of insurance addresses.",
        href: "/guides/critical-illness-vs-life-insurance",
        image: {
          src: "/images/guides/critical-vs-life.jpg",
          alt: "Critical illness and life insurance comparison",
        },
      },
      {
        title: "How Much Critical Illness Coverage Might You Need?",
        excerpt:
          "Consider income, household expenses, savings, and other financial obligations.",
        href: "/guides/how-much-critical-illness-coverage",
        image: {
          src: "/images/guides/critical-illness-amount.jpg",
          alt: "Family reviewing financial needs",
        },
      },
    ],
  },

  cta: {
    title: "Let's prepare for life's unexpected turns.",
    subtitle:
      "Talk with Gisele about whether critical illness coverage belongs in your family's protection strategy.",
  },
} satisfies FinancialServicePageContent;

export const travelInsuranceServicePageContent = {
  hero: {
    eyebrow: "TRAVEL INSURANCE",
    title: "Travel with greater confidence.",
    description:
      "Whether you're leaving Canada, visiting family here, welcoming parents from overseas, studying abroad, or travelling frequently, travel insurance can help protect you from unexpected medical and trip-related costs.",
    highlights: [
      {
        label: "Emergency Medical Coverage",
        description:
          "Protection against eligible emergency medical costs while travelling.",
        icon: Hospital,
      },
      {
        label: "Visitors to Canada",
        description:
          "Coverage options for family members and other visitors coming to Canada.",
        icon: PlaneLanding,
      },
      {
        label: "Flexible Options",
        description:
          "Coverage for single trips, longer stays, or frequent travel.",
        icon: Route,
      },
      {
        label: "Personalized Quotes",
        description:
          "Compare options based on your destination, age, trip length, and needs.",
        icon: SearchCheck,
      },
    ],
    primaryButtonLabel: "Get a Travel Insurance Quote",
    primaryButtonHref: "/financial/services/travel-insurance/get-a-quote",
    secondaryButtonLabel: "Book a Free Consultation",
  },

  overview: {
    title: "What is travel insurance?",
    description:
      "Travel insurance helps protect against certain unexpected costs that can arise while travelling or staying outside your usual province or country of residence. Depending on the plan, coverage may include emergency medical expenses and optional trip-related protection.",
    audience: {
      title: "Who can travel insurance help?",
      description:
        "Different travellers have different needs, which is why the right policy depends on the purpose and length of the trip.",
      items: [
        {
          title: "Canadians Travelling Abroad",
          description:
            "For vacations, business travel, family visits, and international trips.",
          icon: Plane,
        },
        {
          title: "Visitors to Canada",
          description:
            "For family members, friends, and other visitors staying temporarily in Canada.",
          icon: MapPinned,
        },
        {
          title: "Parents Visiting Family",
          description:
            "Coverage options for parents and relatives spending extended periods in Canada.",
          icon: Users,
        },
        {
          title: "Super Visa Visitors",
          description:
            "Insurance solutions designed to help satisfy applicable Super Visa insurance requirements.",
          icon: Stamp,
        },
        {
          title: "Students",
          description:
            "Coverage options for eligible students studying away from their home country or province.",
          icon: GraduationCap,
        },
        {
          title: "Seniors",
          description:
            "Travel medical options that consider age, trip duration, and medical history.",
          icon: HeartHandshake,
        },
        {
          title: "Frequent Travellers",
          description:
            "Multi-trip options may be more convenient for people travelling several times each year.",
          icon: RefreshCcw,
        },
      ],
    },
  },

  feature: {
    image: {
      src: "/images/services/travel-airport-family.jpg",
      alt: "Family preparing for international travel",
    },
    title: "Why travel medical coverage matters",
    description:
      "Medical treatment outside your home province or country can be expensive, and provincial health coverage may not cover the full cost of care abroad. Travel medical insurance is designed to help protect against eligible emergency expenses such as physician services, hospitalization, ambulance transportation, and other covered emergency treatment, subject to the terms of the policy.",
    quote:
      "The best time to understand your travel coverage is before you need to use it.",
    attribution: "Gisele Pecapedra",
  },

  support: {
    title: "What can travel insurance help with?",
    description:
      "Available benefits depend on the plan selected, but coverage may include:",
    items: [
      {
        title: "Emergency Medical Care",
        description:
          "Eligible physician, hospital, diagnostic, and treatment costs.",
        icon: Hospital,
      },
      {
        title: "Emergency Transportation",
        description:
          "Eligible ambulance or medically necessary transportation expenses.",
        icon: Ambulance,
      },
      {
        title: "Trip Cancellation",
        description:
          "Optional protection for certain eligible prepaid costs if a covered event prevents travel.",
        icon: CalendarX,
      },
      {
        title: "Trip Interruption",
        description:
          "Optional coverage for certain expenses if a covered event disrupts a trip already underway.",
        icon: RouteOff,
      },
      {
        title: "Baggage",
        description:
          "Some plans offer protection for eligible lost, delayed, or damaged baggage.",
        icon: Luggage,
      },
      {
        title: "Travel Assistance",
        description:
          "Many policies provide emergency assistance resources while you are travelling.",
        icon: Headphones,
      },
    ],
  },

  coverageTypes: {
    title: "Travel insurance for different situations",
    description:
      "There is no single travel policy that fits everyone. The goal is to match the coverage to the traveller and the trip.",
    items: [
      {
        title: "Emergency Medical Insurance",
        description:
          "Designed primarily to protect against eligible unexpected emergency medical costs while travelling.",
        bullets: [
          "Canadians travelling outside their province or country",
          "Visitors coming to Canada",
          "Longer stays and family visits",
        ],
        icon: Hospital,
      },
      {
        title: "Trip Protection",
        description:
          "Optional coverage focused on certain financial risks associated with cancelling or interrupting a trip.",
        bullets: [
          "Trip cancellation",
          "Trip interruption",
          "Certain baggage or travel disruption benefits depending on the policy",
        ],
        icon: PlaneTakeoff,
      },
      {
        title: "Single-Trip & Multi-Trip Options",
        description:
          "Coverage can be structured for one specific trip or multiple trips during a policy period.",
        bullets: [
          "Single-trip travellers",
          "Frequent travellers",
          "Different maximum trip durations available",
        ],
        icon: Repeat2,
      },
    ],
    resourceLink: {
      label: "Read the Complete Travel Insurance Guide",
      href: "/guides/travel-insurance",
    },
  },

  planning: {
    process: {
      title: "How getting a quote works",
      description:
        "Travel insurance can often be quoted quickly once the key trip details are known.",
      steps: [
        {
          title: "Tell me about the traveller",
          description:
            "Share the travellers' ages, residency or visitor status, and relevant trip circumstances.",
        },
        {
          title: "Tell me about the trip",
          description:
            "Destination, departure and return dates, length of stay, and type of travel help determine appropriate options.",
        },
        {
          title: "Review available plans",
          description:
            "Gisele compares suitable options and explains key differences in benefits and policy terms.",
        },
        {
          title: "Select your coverage",
          description:
            "Choose the plan that best fits your trip, circumstances, and budget.",
        },
      ],
    },

    factors: {
      title: "What affects the price or available coverage?",
      description:
        "Travel insurance pricing depends heavily on the traveller and the trip.",
      items: [
        {
          title: "Age",
          description:
            "Premiums and available plans can vary significantly by age.",
          icon: CalendarDays,
        },
        {
          title: "Trip Duration",
          description: "Longer stays generally cost more than shorter trips.",
          icon: CalendarRange,
        },
        {
          title: "Destination",
          description:
            "Destination and geographic coverage can affect available options.",
          icon: MapPinned,
        },
        {
          title: "Coverage Amount",
          description:
            "The selected medical coverage limit can affect premium.",
          icon: CircleDollarSign,
        },
        {
          title: "Medical History",
          description:
            "Health history may affect eligibility, pricing, or policy conditions.",
          icon: ClipboardPlus,
        },
        {
          title: "Coverage Type",
          description:
            "Emergency medical only versus broader trip protection affects cost.",
          icon: ShieldPlus,
        },
      ],
    },
  },

  advisor: {
    image: {
      src: "/financial/headshot.png",
      alt: "Gisele Pecapedra",
    },
    title: "Why work with Gisele?",
    description:
      "Travel policies can look similar at first but differ in eligibility, benefit limits, medical questionnaires, and policy conditions. Gisele helps you compare appropriate options and understand the important differences before you travel.",
    bullets: [
      "Options for Canadians and visitors to Canada",
      "Super Visa insurance support",
      "Single-trip and multi-trip solutions",
      "Help comparing available providers",
      "Clear explanation of important policy conditions",
    ],
  },

  faqs: {
    title: "Common questions",
    items: [
      {
        question: "Do Canadians really need travel medical insurance?",
        answer:
          "Provincial health plans may provide limited coverage outside your province or Canada and may not cover the full cost of emergency care. Travel medical insurance can help address that financial exposure.",
      },
      {
        question: "Can I buy insurance for family visiting Canada?",
        answer:
          "Yes. Visitor-to-Canada insurance is available for eligible parents, relatives, friends, and other visitors.",
      },
      {
        question: "Do you offer Super Visa insurance?",
        answer:
          "Gisele can help review insurance options intended for eligible Super Visa applicants and visitors, subject to current government requirements and insurer terms.",
      },
      {
        question: "Can seniors get travel insurance?",
        answer:
          "Yes, although pricing, medical questionnaires, policy terms, and available coverage can vary based on age and health.",
      },
      {
        question: "What about pre-existing medical conditions?",
        answer:
          "Policy treatment of pre-existing conditions varies considerably. This is an important area to review carefully before purchasing coverage. See the detailed Travel Insurance Guide for more information.",
      },
    ],
  },

  relatedGuides: {
    eyebrow: "TRAVEL WITH CONFIDENCE",
    title: "Travel Insurance Guides",
    description:
      "Explore policy details and common travel insurance questions before your next trip.",
    action: {
      label: "View All Guides",
      href: "/guides",
    },
    items: [
      {
        title: "Travel Insurance: The Complete Guide",
        excerpt:
          "Understand travel medical coverage, trip protection, eligibility, and important policy terms.",
        href: "/guides/travel-insurance",
        image: {
          src: "/images/guides/travel-guide.jpg",
          alt: "International travel insurance guide",
        },
      },
      {
        title: "Travel Insurance & Pre-Existing Conditions",
        excerpt:
          "Learn why stability periods and medical history can matter when buying coverage.",
        href: "/guides/travel-insurance-pre-existing-conditions",
        image: {
          src: "/images/guides/travel-medical.jpg",
          alt: "Travel medical insurance",
        },
      },
      {
        title: "Credit Card Travel Insurance: Is It Enough?",
        excerpt:
          "Understand what to check before relying solely on coverage included with a credit card.",
        href: "/guides/credit-card-travel-insurance",
        image: {
          src: "/images/guides/travel-credit-card.jpg",
          alt: "Credit card and travel insurance comparison",
        },
      },
    ],
  },

  cta: {
    title: "Let's find coverage that fits your trip.",
    subtitle:
      "Tell Gisele where you're going, who's travelling, and for how long, and she can help you review suitable options.",
  },
} satisfies FinancialServicePageContent;

export const respServicePageContent = {
  hero: {
    eyebrow: "RESP & EDUCATION PLANNING",
    title: "Help build a brighter future for your children.",
    description:
      "A Registered Education Savings Plan can help families save for a child's future education while potentially benefiting from government incentives. Gisele can help you create a practical education savings strategy that fits your family's goals and budget.",
    highlights: [
      {
        label: "Education Savings",
        description:
          "Build dedicated savings for your child's future education.",
        icon: GraduationCap,
      },
      {
        label: "Government Incentives",
        description:
          "Eligible contributions may attract government incentives such as the CESG.",
        icon: Landmark,
      },
      {
        label: "Flexible Planning",
        description:
          "Choose a contribution strategy that works with your family's budget.",
        icon: SlidersHorizontal,
      },
      {
        label: "Long-Term Growth",
        description:
          "Starting earlier can provide more time for savings and investment growth.",
        icon: TrendingUp,
      },
    ],
    primaryButtonLabel: "Start an RESP Conversation",
    primaryButtonHref: "/contact?service=resp",
    secondaryButtonLabel: "Explore How It Works",
    secondaryButtonHref: "/contact",
  },

  overview: {
    title: "What is an RESP?",
    description:
      "A Registered Education Savings Plan, or RESP, is a registered account designed to help save for a beneficiary's post-secondary education. Contributions can be invested within the plan, and eligible families may receive government education incentives that can add to their savings.",
    audience: {
      title: "Who is an RESP designed for?",
      description:
        "RESPs can be useful for families who want to intentionally set aside money for a child's future education.",
      items: [
        {
          title: "Parents",
          description:
            "Build education savings gradually while children are growing.",
          icon: Users,
        },
        {
          title: "New Parents",
          description:
            "Starting early provides the longest possible saving horizon.",
          icon: Baby,
        },
        {
          title: "Growing Families",
          description:
            "Coordinate education savings alongside other family financial priorities.",
          icon: HeartHandshake,
        },
        {
          title: "Newcomer Families",
          description:
            "Understand how Canada's education savings system and incentives work.",
          icon: MapPinned,
        },
        {
          title: "Grandparents & Family",
          description:
            "Family members may want to contribute toward a child's future education.",
          icon: Gift,
        },
      ],
    },
  },

  feature: {
    image: {
      src: "/images/services/resp-family-child.jpg",
      alt: "Family planning for a child's future education",
    },
    title: "Why starting early can make a difference",
    description:
      "Education may feel years away when your child is young, but starting earlier gives your contributions more time to accumulate and potentially grow. It can also make education savings easier to manage by spreading contributions over a longer period instead of trying to catch up later.",
    quote:
      "Small contributions made consistently can become part of a much bigger opportunity for your child.",
    attribution: "Gisele Pecapedra",
  },

  support: {
    title: "What can an RESP help you prepare for?",
    description:
      "RESP savings can support eligible post-secondary education costs when the beneficiary attends a qualifying program.",
    items: [
      {
        title: "Tuition",
        description:
          "Help prepare for future college, university, or other eligible education costs.",
        icon: GraduationCap,
      },
      {
        title: "Books & Supplies",
        description:
          "Education savings can help reduce pressure from study-related expenses.",
        icon: BookOpen,
      },
      {
        title: "Living Expenses",
        description: "Help support eligible education-related living costs.",
        icon: House,
      },
      {
        title: "Transportation",
        description:
          "Education costs can extend beyond tuition, particularly when students study away from home.",
        icon: Bus,
      },
      {
        title: "Financial Flexibility",
        description:
          "Create a dedicated education fund instead of relying entirely on future household income.",
        icon: WalletCards,
      },
      {
        title: "Reduced Borrowing Pressure",
        description:
          "Building savings can help reduce reliance on future student borrowing.",
        icon: PiggyBank,
      },
    ],
  },

  coverageTypes: {
    title: "How RESP savings can grow",
    description:
      "An RESP combines your family's contributions with potential investment growth and, when eligible, government education incentives.",
    items: [
      {
        title: "Your Contributions",
        description:
          "You decide how much and how often to contribute within applicable RESP rules.",
        bullets: [
          "Regular or occasional contributions",
          "Strategy can reflect your household budget",
          "Contributions can change as circumstances change",
        ],
        icon: PiggyBank,
      },
      {
        title: "Government Incentives",
        description:
          "Eligible RESP beneficiaries may receive government incentives such as the Canada Education Savings Grant.",
        bullets: [
          "CESG may add to eligible contributions",
          "Additional incentives may be available depending on eligibility",
          "Detailed calculations belong in the RESP Guide",
        ],
        icon: Landmark,
      },
      {
        title: "Investment Growth",
        description:
          "Funds inside an RESP can generally be invested according to the available plan options and your strategy.",
        bullets: [
          "Longer timelines may provide more opportunity for growth",
          "Investment choices should reflect time horizon and risk tolerance",
          "Strategy can become more conservative as education approaches",
        ],
        icon: TrendingUp,
      },
    ],
    resourceLink: {
      label: "Read the Complete RESP Guide",
      href: "/guides/resp",
    },
  },

  planning: {
    process: {
      title: "How education planning works",
      description:
        "The goal is not simply to open an account. It is to build an education savings strategy your family can maintain.",
      steps: [
        {
          title: "Define your education goals",
          description:
            "Discuss your child's age, expected timeline, family priorities, and the amount you hope to save.",
        },
        {
          title: "Build a contribution strategy",
          description:
            "Determine a realistic contribution approach based on your household budget and available incentives.",
        },
        {
          title: "Choose an investment approach",
          description:
            "Select appropriate available investment options based on your timeline and circumstances.",
        },
        {
          title: "Review as your child grows",
          description:
            "Adjust contributions and investment strategy as education gets closer and family circumstances change.",
        },
      ],
    },

    factors: {
      title: "What affects your RESP strategy?",
      description:
        "Unlike insurance premiums, RESP planning is primarily about contribution capacity, timeline, incentives, and investment strategy.",
      items: [
        {
          title: "Child's Age",
          description:
            "The number of years before post-secondary education affects the savings timeline.",
          icon: CalendarDays,
        },
        {
          title: "Starting Balance",
          description:
            "Existing education savings affect how much additional saving may be needed.",
          icon: Wallet,
        },
        {
          title: "Contribution Amount",
          description:
            "Your regular contribution level has a major impact on projected savings.",
          icon: CircleDollarSign,
        },
        {
          title: "Government Incentives",
          description:
            "Eligibility for CESG and other programs can affect the overall strategy.",
          icon: Landmark,
        },
        {
          title: "Time Horizon",
          description:
            "More time before education generally provides greater planning flexibility.",
          icon: Clock3,
        },
        {
          title: "Investment Approach",
          description:
            "Expected growth and investment risk depend on the options selected.",
          icon: ChartNoAxesCombined,
        },
      ],
    },
  },

  advisor: {
    image: {
      src: "/financial/headshot.png",
      alt: "Gisele Pecapedra",
    },
    title: "Why work with Gisele?",
    description:
      "Education planning involves more than choosing an RESP. Gisele can help you understand how education savings fit alongside your family's other priorities and create a contribution approach that feels sustainable.",
    bullets: [
      "Understand RESP fundamentals in plain language",
      "Learn how government incentives fit into your strategy",
      "Set a realistic contribution target",
      "Coordinate education savings with other family goals",
      "Review and adjust the strategy as your child grows",
    ],
  },

  faqs: {
    title: "Common questions",
    items: [
      {
        question: "What is an RESP?",
        answer:
          "An RESP is a registered account designed to help save for a beneficiary's future post-secondary education.",
      },
      {
        question: "What is the CESG?",
        answer:
          "The Canada Education Savings Grant is a federal incentive that may add government funds to eligible RESP contributions. Eligibility and amounts depend on applicable program rules.",
      },
      {
        question: "When should I start an RESP?",
        answer:
          "Many families benefit from starting when their child is young because it provides more time to contribute and potentially grow the savings. Starting later can still be worthwhile depending on your circumstances.",
      },
      {
        question: "How much should I contribute?",
        answer:
          "There is no single contribution amount that fits every family. The right strategy depends on your budget, child's age, education goals, available incentives, and other financial priorities.",
      },
      {
        question: "What happens when my child starts school?",
        answer:
          "RESP withdrawals have specific rules for contributions, investment earnings, and government incentives. The detailed RESP Guide explains how education withdrawals work.",
      },
    ],
  },

  relatedGuides: {
    eyebrow: "PLAN AHEAD",
    title: "RESP & Education Guides",
    description:
      "Go deeper into contribution rules, grants, withdrawals, and education planning.",
    action: {
      label: "View All Guides",
      href: "/guides",
    },
    items: [
      {
        title: "RESP: The Complete Guide for Parents",
        excerpt:
          "Understand how RESPs work, government incentives, contributions, and withdrawals.",
        href: "/guides/resp",
        image: {
          src: "/images/guides/resp-guide.jpg",
          alt: "RESP education savings guide",
        },
      },
      {
        title: "How the CESG Works",
        excerpt:
          "Learn how eligible RESP contributions can receive federal education grants.",
        href: "/guides/cesg",
        image: {
          src: "/images/guides/cesg.jpg",
          alt: "Canada Education Savings Grant guide",
        },
      },
      {
        title: "RESP Contribution Limits Explained",
        excerpt:
          "Understand contribution limits and how they affect long-term education planning.",
        href: "/guides/resp-contribution-limits",
        image: {
          src: "/images/guides/resp-contributions.jpg",
          alt: "RESP contribution planning",
        },
      },
    ],
  },

  cta: {
    title: "Give your child's education more time to grow.",
    subtitle:
      "Talk with Gisele about building an RESP contribution strategy that fits your family, your timeline, and your financial priorities.",
  },
} satisfies FinancialServicePageContent;

export const disabilityInsuranceServicePageContent = {
  hero: {
    eyebrow: "DISABILITY INSURANCE",
    title: "Protect the income your life depends on.",
    description:
      "Your ability to earn an income is one of your most valuable financial assets. Disability insurance can help replace part of your income if an illness or injury prevents you from working, helping you continue meeting everyday financial obligations while you recover.",
    highlights: [
      {
        label: "Income Protection",
        description:
          "Help replace part of your income if a covered disability prevents you from working.",
        icon: WalletCards,
      },
      {
        label: "Financial Stability",
        description:
          "Help keep regular household expenses manageable while you recover.",
        icon: ShieldCheck,
      },
      {
        label: "Flexible Protection",
        description:
          "Coverage can be structured around your income, occupation, and existing benefits.",
        icon: SlidersHorizontal,
      },
      {
        label: "Personalized Guidance",
        description:
          "Understand how disability coverage fits with workplace benefits and your overall protection plan.",
        icon: MessageCircle,
      },
    ],
    primaryButtonLabel: "Get a Disability Insurance Quote",
    primaryButtonHref: "/contact?service=disability-insurance",
    secondaryButtonLabel: "Book a Free Consultation",
    secondaryButtonHref: "/contact",
  },

  overview: {
    title: "What is disability insurance?",
    description:
      "Disability insurance is designed to provide income replacement if a covered illness or injury leaves you unable to work. Instead of protecting your family only in the event of death, disability coverage focuses on protecting your ability to continue supporting yourself and your household while you are living.",
    audience: {
      title: "Who may consider disability insurance?",
      description:
        "It can be especially important for people whose lifestyle and financial obligations depend heavily on employment income.",
      items: [
        {
          title: "Working Professionals",
          description:
            "Protect the income that supports your lifestyle, savings, and financial commitments.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Self-Employed Professionals",
          description:
            "Create additional protection when employer disability benefits are limited or unavailable.",
          icon: Laptop,
        },
        {
          title: "Business Owners",
          description:
            "Protect personal income while managing the financial responsibilities of running a business.",
          icon: Building2,
        },
        {
          title: "Parents",
          description:
            "Help maintain household stability when your family depends on your income.",
          icon: Users,
        },
        {
          title: "High-Income Earners",
          description:
            "Employer coverage may not replace enough income to maintain existing financial commitments.",
          icon: TrendingUp,
        },
      ],
    },
  },

  feature: {
    image: {
      src: "/images/services/disability-income-protection.jpg",
      alt: "Professional reviewing finances at home",
    },
    title: "Why protecting your income matters",
    description:
      "Most long-term financial plans depend on continued income. Your mortgage, rent, groceries, childcare, savings contributions, debt payments, and other goals do not necessarily stop if you become unable to work. Disability insurance can help reduce the financial disruption caused by an extended illness or injury.",
    quote: "Your income supports almost every other financial goal you have.",
    attribution: "Gisele Pecapedra",
  },

  support: {
    title: "What can disability insurance help protect?",
    description:
      "Income replacement can help you continue managing important financial responsibilities while you recover.",
    items: [
      {
        title: "Housing Costs",
        description: "Help continue mortgage or rent payments.",
        icon: House,
      },
      {
        title: "Everyday Expenses",
        description:
          "Help maintain groceries, utilities, transportation, and other household costs.",
        icon: ShoppingBasket,
      },
      {
        title: "Family Expenses",
        description:
          "Help support childcare and other family responsibilities.",
        icon: Users,
      },
      {
        title: "Debt Payments",
        description:
          "Help keep loans, credit obligations, and other payments on track.",
        icon: CreditCard,
      },
      {
        title: "Savings Goals",
        description:
          "Reduce the need to rely entirely on emergency savings during a long recovery.",
        icon: PiggyBank,
      },
      {
        title: "Financial Independence",
        description:
          "Provide greater flexibility without depending exclusively on family or other resources.",
        icon: Shield,
      },
    ],
  },

  coverageTypes: {
    title: "Individual coverage and workplace coverage",
    description:
      "Employer disability benefits can be valuable, but they may not always provide the level, duration, or portability of protection you need. Individual coverage can sometimes complement workplace benefits.",
    items: [
      {
        title: "Workplace Disability Benefits",
        description:
          "Coverage provided through an employer benefits plan, where available.",
        bullets: [
          "May include short-term or long-term disability benefits",
          "Coverage limits are set by the employer plan",
          "Coverage may change if you change employers",
        ],
        icon: Building,
      },
      {
        title: "Individual Disability Insurance",
        description:
          "Personally owned coverage designed around your income, occupation, and needs.",
        bullets: [
          "Can complement employer coverage",
          "May remain with you when changing jobs",
          "Policy features can be selected based on your circumstances",
        ],
        icon: UserRoundCheck,
      },
    ],
    resourceLink: {
      label: "Read the Disability Insurance Guide",
      href: "/guides/disability-insurance",
    },
  },

  planning: {
    process: {
      title: "How the process works",
      description:
        "The goal is to understand how much of your income is already protected and whether there is a meaningful gap.",
      steps: [
        {
          title: "Review your income and obligations",
          description:
            "We look at your income, monthly expenses, debt, family responsibilities, and savings.",
        },
        {
          title: "Review existing benefits",
          description:
            "We consider employer disability benefits or other income protection you already have.",
        },
        {
          title: "Compare available coverage",
          description:
            "Gisele helps you review suitable benefit amounts, waiting periods, benefit periods, and policy options.",
        },
        {
          title: "Apply for coverage",
          description:
            "You complete the insurer's application and applicable underwriting requirements.",
        },
      ],
    },

    factors: {
      title: "What affects cost or eligibility?",
      description:
        "Disability insurance is closely connected to your occupation, income, health, and policy design.",
      items: [
        {
          title: "Age",
          description: "Age can influence both premium and available coverage.",
          icon: CalendarDays,
        },
        {
          title: "Occupation",
          description:
            "The duties and risk profile of your occupation are important underwriting factors.",
          icon: Briefcase,
        },
        {
          title: "Income",
          description:
            "Benefit amounts are generally related to earned income.",
          icon: CircleDollarSign,
        },
        {
          title: "Health",
          description:
            "Medical history and current health can affect underwriting.",
          icon: HeartPulse,
        },
        {
          title: "Waiting Period",
          description:
            "The length of time before benefits begin can influence premium.",
          icon: Hourglass,
        },
        {
          title: "Benefit Period",
          description:
            "How long eligible benefits may continue affects policy cost.",
          icon: CalendarRange,
        },
      ],
    },
  },

  advisor: {
    image: {
      src: "/financial/headshot.png",
      alt: "Gisele Pecapedra",
    },
    title: "Why work with Gisele?",
    description:
      "Disability insurance can be more technical than it first appears. Gisele helps you understand how much income is already protected, identify potential gaps, and compare available individual options.",
    bullets: [
      "Review workplace disability benefits alongside individual coverage",
      "Compare options from available providers",
      "Understand waiting periods and benefit periods",
      "Choose coverage based on your actual income and obligations",
      "Review protection as your career and income change",
    ],
  },

  faqs: {
    title: "Common questions",
    items: [
      {
        question:
          "Do I need disability insurance if I already have coverage through work?",
        answer:
          "Maybe. Employer benefits can provide valuable protection, but the amount, duration, definitions, and portability of coverage vary. Reviewing your workplace plan can help identify whether there is a gap.",
      },
      {
        question: "How much income can disability insurance replace?",
        answer:
          "Benefit amounts depend on income, occupation, insurer guidelines, and existing coverage. Disability insurance is generally intended to replace only part of your earned income.",
      },
      {
        question: "What is a waiting period?",
        answer:
          "The waiting period is the period you generally need to remain disabled before eligible benefits begin. Different options may be available depending on the policy.",
      },
      {
        question: "How long can benefits last?",
        answer:
          "Benefit periods vary by policy. Coverage may provide benefits for a defined period or, in some policies, potentially to a specified age, subject to policy terms.",
      },
      {
        question: "Does disability insurance cover every illness or injury?",
        answer:
          "No. Eligibility for benefits depends on the policy definition of disability, exclusions, limitations, and other terms. The Disability Insurance Guide explains these concepts in more detail.",
      },
    ],
  },

  relatedGuides: {
    eyebrow: "PROTECT YOUR INCOME",
    title: "Disability Insurance Guides",
    description:
      "Learn more about income protection and the policy features that matter most.",
    action: {
      label: "View All Guides",
      href: "/guides",
    },
    items: [
      {
        title: "Disability Insurance: A Complete Guide",
        excerpt:
          "Understand how disability insurance works and what to consider when choosing coverage.",
        href: "/guides/disability-insurance",
        image: {
          src: "/images/guides/disability-guide.jpg",
          alt: "Disability insurance guide",
        },
      },
      {
        title: "Employer Disability Insurance vs. Individual Coverage",
        excerpt:
          "Learn where workplace benefits may end and individual protection may begin.",
        href: "/guides/employer-vs-individual-disability",
        image: {
          src: "/images/guides/workplace-benefits.jpg",
          alt: "Employee reviewing workplace benefits",
        },
      },
      {
        title: "How Much Disability Insurance Do You Need?",
        excerpt:
          "Consider income, household expenses, savings, and existing workplace protection.",
        href: "/guides/how-much-disability-insurance",
        image: {
          src: "/images/guides/disability-amount.jpg",
          alt: "Income protection planning",
        },
      },
    ],
  },

  cta: {
    title: "Let's protect the income behind your financial plans.",
    subtitle:
      "Talk with Gisele about your income, existing workplace benefits, and whether additional disability protection makes sense for you.",
  },
} satisfies FinancialServicePageContent;

export const financialSolutionsServicePageContent = {
  hero: {
    eyebrow: "FINANCIAL SOLUTIONS",
    title: "Build your financial future with a clearer plan.",
    description:
      "From building emergency savings and investing for the future to buying a home, preparing for retirement, and saving for your family, the right accounts and strategies can help turn financial goals into practical next steps.",
    highlights: [
      {
        label: "Registered Accounts",
        description:
          "Understand how TFSA, RRSP, FHSA, RESP, and other available accounts may fit your goals.",
        icon: Landmark,
      },
      {
        label: "Goal-Based Planning",
        description:
          "Connect your savings and investment decisions to specific financial priorities.",
        icon: Target,
      },
      {
        label: "Long-Term Growth",
        description:
          "Create a disciplined strategy for building wealth over time.",
        icon: TrendingUp,
      },
      {
        label: "Personalized Guidance",
        description:
          "Choose solutions based on your timeline, priorities, and financial circumstances.",
        icon: MessageCircle,
      },
    ],
    primaryButtonLabel: "Book a Financial Consultation",
    primaryButtonHref: "/contact?service=financial-solutions",
    secondaryButtonLabel: "Explore Registered Accounts",
    secondaryButtonHref: "#registered-accounts",
  },

  overview: {
    title: "What are financial solutions?",
    description:
      "Financial planning is about organizing your money around the life you want to build. That can include creating savings, investing for long-term goals, using registered accounts efficiently, preparing for retirement, saving for education, buying a first home, and coordinating those goals with appropriate insurance protection.",
    audience: {
      title: "Who can benefit from financial planning?",
      description:
        "You do not need to be wealthy to benefit from having a clearer strategy.",
      items: [
        {
          title: "Young Professionals",
          description:
            "Start building savings, investments, and good financial habits early.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Families",
          description:
            "Balance education, home ownership, retirement, and family protection.",
          icon: Users,
        },
        {
          title: "First-Time Home Buyers",
          description:
            "Coordinate savings and eligible accounts toward a future home purchase.",
          icon: House,
        },
        {
          title: "Newcomers to Canada",
          description:
            "Understand Canada's registered accounts and build a financial foundation.",
          icon: MapPinned,
        },
        {
          title: "People Preparing for Retirement",
          description:
            "Coordinate savings, registered accounts, and longer-term income goals.",
          icon: Palmtree,
        },
      ],
    },
  },

  feature: {
    image: {
      src: "/images/services/financial-planning-family.jpg",
      alt: "Family reviewing long-term financial goals",
    },
    title: "Why having a plan matters",
    description:
      "Financial goals often compete with one another. You may want to buy a home, build retirement savings, save for your child's education, create an emergency fund, and enjoy life today. A clear strategy helps determine which goals should come first, which accounts may support them, and how much you can reasonably allocate to each.",
    quote: "A good financial plan gives every dollar a purpose.",
    attribution: "Gisele Pecapedra",
  },

  support: {
    title: "What can financial planning help you work toward?",
    description:
      "Your strategy should reflect both your current priorities and the future you want to build.",
    items: [
      {
        title: "Emergency Savings",
        description:
          "Build accessible savings for unexpected expenses and financial disruptions.",
        icon: ShieldCheck,
      },
      {
        title: "Home Ownership",
        description:
          "Create a savings strategy for a future down payment and home purchase.",
        icon: House,
      },
      {
        title: "Retirement",
        description:
          "Build long-term savings and investments for future financial independence.",
        icon: Palmtree,
      },
      {
        title: "Education",
        description:
          "Save for children's future education through an appropriate education strategy.",
        icon: GraduationCap,
      },
      {
        title: "Investing",
        description:
          "Build a portfolio aligned with your goals, time horizon, and risk tolerance where appropriate.",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Family Protection",
        description:
          "Coordinate savings and investing with appropriate insurance protection.",
        icon: HeartHandshake,
      },
    ],
  },

  coverageTypes: {
    title: "Registered accounts in Canada",
    description:
      "Registered accounts are different tools for different financial goals. The right choice depends on what you are saving for, your timeline, and your tax situation.",
    items: [
      {
        title: "TFSA",
        description:
          "A flexible registered account that can be used for short-, medium-, or long-term savings and investing.",
        bullets: [
          "Investment growth and eligible withdrawals are generally tax-free",
          "Useful for many different financial goals",
          "Contribution room is governed by federal rules",
        ],
        icon: PiggyBank,
      },
      {
        title: "RRSP",
        description:
          "A registered retirement account designed primarily to support long-term retirement savings.",
        bullets: [
          "Eligible contributions may reduce taxable income",
          "Investments can grow tax-deferred inside the account",
          "Withdrawals are generally taxable",
        ],
        icon: Landmark,
      },
      {
        title: "FHSA",
        description:
          "A registered account intended to help eligible first-time home buyers save toward a qualifying home purchase.",
        bullets: [
          "Eligible contributions may be tax-deductible",
          "Qualifying withdrawals may be tax-free",
          "Designed specifically around first-home savings",
        ],
        icon: HousePlus,
      },
      {
        title: "RESP",
        description:
          "A registered education savings account designed to help families save for a beneficiary's future post-secondary education.",
        bullets: [
          "May qualify for government education incentives",
          "Supports long-term education savings",
          "Best used as part of a broader family savings strategy",
        ],
        icon: GraduationCap,
      },
    ],
    resourceLink: {
      label: "Read the Guide to Registered Accounts in Canada",
      href: "/guides/registered-accounts-canada",
    },
  },

  planning: {
    process: {
      title: "How financial planning works",
      description:
        "The focus should be on your goals first and the financial products second.",
      steps: [
        {
          title: "Understand where you are today",
          description:
            "Review income, expenses, savings, debts, existing investments, insurance, and current accounts.",
        },
        {
          title: "Define your priorities",
          description:
            "Clarify goals such as buying a home, retirement, education, travel, or building long-term wealth.",
        },
        {
          title: "Build a strategy",
          description:
            "Determine which accounts and financial solutions may best support each goal.",
        },
        {
          title: "Review and adjust",
          description:
            "Update the strategy as your income, family, career, priorities, and financial circumstances change.",
        },
      ],
    },

    factors: {
      title: "What shapes your financial strategy?",
      description:
        "There is no single account or investment strategy that is right for everyone.",
      items: [
        {
          title: "Goals",
          description:
            "Different financial goals require different strategies and accounts.",
          icon: Target,
        },
        {
          title: "Time Horizon",
          description:
            "The amount of time before you need the money affects how it should be managed.",
          icon: Clock3,
        },
        {
          title: "Income",
          description:
            "Your income influences contribution capacity and the relative value of certain registered accounts.",
          icon: BadgeDollarSign,
        },
        {
          title: "Tax Situation",
          description:
            "Your current and expected future tax position may affect account selection.",
          icon: ReceiptText,
        },
        {
          title: "Risk Tolerance",
          description:
            "Investment choices should reflect your comfort with market fluctuations.",
          icon: Gauge,
        },
        {
          title: "Life Stage",
          description:
            "Marriage, children, home purchases, career changes, and retirement can all shift financial priorities.",
          icon: Milestone,
        },
      ],
    },
  },

  advisor: {
    image: {
      src: "/financial/headshot.png",
      alt: "Gisele Pecapedra",
    },
    title: "Why work with Gisele?",
    description:
      "Financial accounts can be easy to open but harder to coordinate effectively. Gisele helps connect the accounts and solutions you use with the goals they are intended to achieve.",
    bullets: [
      "Understand your registered account options in plain language",
      "Prioritize competing financial goals",
      "Build a contribution strategy that fits your cash flow",
      "Coordinate savings, investments, education, and insurance",
      "Review the plan as your circumstances change",
    ],
  },

  faqs: {
    title: "Common questions",
    items: [
      {
        question: "Should I contribute to a TFSA or an RRSP first?",
        answer:
          "It depends on your income, tax situation, goals, timeline, available contribution room, and expected future needs. Neither account is automatically better for everyone.",
      },
      {
        question: "Can I have a TFSA, RRSP, FHSA, and RESP at the same time?",
        answer:
          "Potentially, yes, if you are eligible for the respective accounts. The more important question is how to prioritize contributions across them based on your goals and cash flow.",
      },
      {
        question: "Which account is best for buying my first home?",
        answer:
          "For eligible first-time buyers, an FHSA can be particularly relevant. RRSP funds may also potentially be accessed through the Home Buyers' Plan subject to applicable rules. A broader home-buying strategy should consider your full financial situation.",
      },
      {
        question: "How much should I save for retirement?",
        answer:
          "There is no universal percentage that works for everyone. Retirement planning depends on your desired lifestyle, current savings, retirement age, expected income sources, investment returns, and other financial goals.",
      },
      {
        question: "Do registered accounts guarantee investment growth?",
        answer:
          "No. A registered account is primarily a tax structure. Investment performance depends on the investments held inside the account and can fluctuate.",
      },
    ],
  },

  relatedGuides: {
    eyebrow: "BUILD YOUR FINANCIAL KNOWLEDGE",
    title: "Financial Planning Guides",
    description:
      "Learn how Canada's registered accounts and financial planning strategies work in greater detail.",
    action: {
      label: "View All Guides",
      href: "/guides",
    },
    items: [
      {
        title: "TFSA vs. RRSP: Which Should You Use First?",
        excerpt:
          "Compare how these two accounts work and the situations where each may be more useful.",
        href: "/guides/tfsa-vs-rrsp",
        image: {
          src: "/images/guides/tfsa-vs-rrsp.jpg",
          alt: "TFSA and RRSP comparison",
        },
      },
      {
        title: "FHSA: A Guide for First-Time Home Buyers",
        excerpt:
          "Understand how the FHSA works and how it may fit into your home-buying strategy.",
        href: "/guides/fhsa",
        image: {
          src: "/images/guides/fhsa.jpg",
          alt: "First-time home buyer planning",
        },
      },
      {
        title: "Registered Accounts in Canada",
        excerpt:
          "A practical overview of TFSA, RRSP, FHSA, RESP, and how each account serves a different purpose.",
        href: "/guides/registered-accounts-canada",
        image: {
          src: "/images/guides/registered-accounts.jpg",
          alt: "Registered accounts in Canada",
        },
      },
      {
        title: "How to Prioritize Your Financial Goals",
        excerpt:
          "Learn how to balance emergency savings, debt, investing, a home purchase, education, and retirement.",
        href: "/guides/prioritizing-financial-goals",
        image: {
          src: "/images/guides/financial-goals.jpg",
          alt: "Family planning multiple financial goals",
        },
      },
    ],
  },

  cta: {
    title: "Let's turn your financial goals into a practical strategy.",
    subtitle:
      "Talk with Gisele about your savings, registered accounts, investments, family goals, and the next financial steps that make sense for you.",
  },
} satisfies FinancialServicePageContent;

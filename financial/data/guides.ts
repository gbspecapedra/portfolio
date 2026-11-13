export const guideCategories = [
  "All Guides",
  "Life Insurance",
  "Critical Illness",
  "Travel Insurance",
  "RESP",
  "Newcomers",
  "Families",
] as const;

export type GuideCategory = (typeof guideCategories)[number];

export type FinancialGuide = {
  title: string;
  excerpt: string;
  href: string;
  category: Exclude<GuideCategory, "All Guides">;
  isFeatured?: boolean;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
};

export const financialGuides: FinancialGuide[] = [
  {
    title: "Life Insurance Basics: What You Need to Know",
    excerpt:
      "A straightforward guide to how life insurance works, the different types of coverage, and how to choose what's right for your family.",
    href: "/financial/services/life-insurance",
    category: "Life Insurance",
    isFeatured: true,
    image: {
      src: "/financial/who-i-help/life-insurance-family.png",
      alt: "A family looking toward Vancouver mountains and skyline",
    },
  },
  {
    title: "Travel Insurance for Newcomers and Visitors to Canada",
    excerpt:
      "Get peace of mind while you explore, visit or settle in. Learn about coverage options, what's included, and tips for a smooth experience.",
    href: "/financial/services/travel-insurance",
    category: "Travel Insurance",
    isFeatured: true,
    image: {
      src: "/financial/who-i-help/travel-insurance-plane.jpg",
      alt: "Traveler with a backpack looking at planes through an airport window",
    },
  },
  {
    title: "RESPs: Investing in Their Brighter Tomorrow",
    excerpt:
      "Learn how a Registered Education Savings Plan works, the government grants available, and how to start planning for your child's future.",
    href: "/financial/services/resp",
    category: "RESP",
    isFeatured: true,
    image: {
      src: "/financial/who-i-help/resp-education-plan.png",
      alt: "A child writing beside school books with a brighter tomorrow note",
    },
  },
  {
    title: "Critical Illness Insurance: Protection When It Matters Most",
    excerpt:
      "Understand how critical illness insurance works and how it can help protect your finances and your family.",
    href: "/financial/services/critical-illness",
    category: "Critical Illness",
    image: {
      src: "/financial/who-i-help/critical-illness-lake.jpg",
      alt: "A peaceful mountain lake surrounded by evergreen trees",
    },
  },
  {
    title: "Financial Protection for Growing Families",
    excerpt:
      "Practical tips and solutions to help you protect what matters most as your family grows.",
    href: "/financial/contact",
    category: "Families",
    image: {
      src: "/financial/who-i-help/life-insurance-family.png",
      alt: "Parents walking with their child through a forest path",
    },
  },
  {
    title: "A Newcomer's Guide to Insurance in Canada",
    excerpt:
      "Key information for newcomers to understand your options and feel confident from day one.",
    href: "/financial/who-i-help/newcomers-to-canada",
    category: "Newcomers",
    image: {
      src: "/financial/story/story-city.jpg",
      alt: "Canadian flag in front of Vancouver city buildings",
    },
  },
  {
    title: "Travel Insurance vs. Provincial Health Coverage",
    excerpt:
      "Learn the key differences, what's covered, and why travel insurance is so important.",
    href: "/financial/services/travel-insurance",
    category: "Travel Insurance",
    image: {
      src: "/financial/travel-insurance-banner.png",
      alt: "Packed luggage near a bright window before a trip",
      className: "object-[45%_center]",
    },
  },
  {
    title: "Money Conversations with Your Kids",
    excerpt:
      "Simple ways to talk to your children about money, savings and building a bright future.",
    href: "/financial/services/resp",
    category: "RESP",
    image: {
      src: "/financial/family-guidance-banner-v2.png",
      alt: "A warm family table scene with a small sign about big futures",
    },
  },
  {
    title: "Planning for Life's What-Ifs",
    excerpt:
      "How to prepare for the unexpected and keep your financial goals on track, no matter what life brings.",
    href: "/financial/services/life-insurance",
    category: "Life Insurance",
    image: {
      src: "/financial/hero-vancouver-waterfront.png",
      alt: "A person looking toward mountains and water in British Columbia",
      className: "object-[60%_center]",
    },
  },
  {
    title: "First Steps for Families New to British Columbia",
    excerpt:
      "A practical guide to setting up financial protection and planning conversations in your new community.",
    href: "/financial/who-i-help/newcomers-to-canada",
    category: "Newcomers",
    image: {
      src: "/financial/story/story-boardwalk.jpg",
      alt: "A family walking along a boardwalk in British Columbia",
    },
  },
  {
    title: "How Critical Illness Coverage Supports Recovery",
    excerpt:
      "See how a lump-sum benefit can help with bills, recovery costs and daily life during a serious diagnosis.",
    href: "/financial/services/critical-illness",
    category: "Critical Illness",
    image: {
      src: "/financial/story/story-mother-child.png",
      alt: "A mother and child sharing a quiet moment outdoors",
    },
  },
  {
    title: "RESP Grants Parents Should Know About",
    excerpt:
      "A simple overview of education savings grants and how they can support your child's future education.",
    href: "/financial/services/resp",
    category: "RESP",
    image: {
      src: "/financial/who-i-help/resp-education-plan.png",
      alt: "School books and a child working on education plans",
    },
  },
];

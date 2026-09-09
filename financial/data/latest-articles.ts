export type FinancialArticle = {
  title: string;
  excerpt: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export const latestArticles: FinancialArticle[] = [
  {
    title: "How Much Life Insurance Do I Really Need?",
    excerpt:
      "A practical guide to help you determine the right coverage for your stage of life.",
    href: "/financial#contact",
    image: {
      src: "/financial/family-guidance-banner.png",
      alt: "Family spending time together at home",
    },
  },
  {
    title: "RESP Explained: How the Government Can Help",
    excerpt:
      "Learn how government grants can help you save for your child's education.",
    href: "/financial#contact",
    image: {
      src: "/financial/family-guidance-banner.png",
      alt: "Child looking toward a mountain view",
    },
  },
  {
    title: "Travel Insurance: What Should You Check Before Leaving Canada?",
    excerpt: "Key things to consider before your trip this year.",
    href: "/financial#contact",
    image: {
      src: "/financial/travel-insurance-banner.png",
      alt: "Mountain lake travel destination",
    },
  },
];

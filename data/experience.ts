export type Experience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  summary: string; // 1 linha forte
  impact: string[]; // 2–4 bullets, outcome-driven
  skills: string[]; // chips curtos
};

export const experience: Experience[] = [
  {
    company: "WineDirect Ecommerce",
    title: "Frontend Engineer",
    location: "Hybrid (Vancouver, Canada)",
    dates: "Jan 2022 - Jan 2025",
    summary:
      "Built React + React Native features for thousands of merchants, focusing on UI quality, reliability, and scalable component architecture.",
    impact: [
      "Improved usability and uptime by 25% through UI enhancements and architecture improvements.",
      "Introduced Jest + React Testing Library, significantly reducing issue resolution time by catching regressions earlier.",
      "Reduced release rollbacks by 40% by standardizing components and improving consistency across the UI.",
      "Collaborated daily with design, backend, and QA across multiple time zones.",
    ],
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Testing",
      "Component Architecture",
      "Accessibility",
    ],
  },
  {
    company: "Up Learn",
    title: "Frontend Engineer",
    location: "Remote",
    dates: "Apr 2021 - Nov 2021",
    summary:
      "Shipped accessible learning experiences and improved performance while migrating a production codebase to TypeScript.",
    impact: [
      "Migrated the platform from JavaScript to TypeScript, reducing bugs by 20%.",
      "Delivered responsive, accessible learning modules with a strong focus on WCAG/ARIA-friendly UI patterns.",
      "Improved load performance by ~15% through architectural enhancements.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Performance", "A11y"],
  },
  {
    company: "Laboratório Bridge",
    title: "Full Stack Engineer",
    location: "Remote",
    dates: "Mar 2020 - Mar 2021",
    summary:
      "Redesigned healthcare UI used by 500k+ professionals, building reusable components and improving accessibility at scale.",
    impact: [
      "Redesigned healthcare UI (React + Java) for 500k+ professionals, improving clarity and usability for complex workflows.",
      "Built and standardized 20+ reusable components to support an internal design system.",
      "Improved accessibility and responsiveness across nationwide systems.",
    ],
    skills: ["React", "Design Systems", "UI Engineering", "Accessibility"],
  },
];

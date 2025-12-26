export type Experience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  summary: string; // 1 linha forte
  impact: string[]; // 3–5 bullets, outcome-driven
  skills: string[]; // chips curtos
};

export const experience: Experience[] = [
  {
    company: "WineDirect Ecommerce",
    title: "Frontend Engineer",
    location: "Remote",
    dates: "Jan 2022 – Jan 2025",
    summary:
      "Built and maintained React + React Native experiences used by thousands of merchants, with a focus on UI quality, reliability, and scalable component architecture.",
    impact: [
      "Built and maintained key React/React Native features used by thousands of merchants.",
      "Improved usability and uptime by 25% through UI enhancements and architecture improvements.",
      "Implemented Jest + Testing Library, significantly reducing issue resolution time by catching regressions earlier.",
      "Reduced release rollbacks by 40% through component standardization and UI consistency.",
      "Collaborated across design, backend, and QA across multiple time zones.",
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
    dates: "Apr 2021 – Nov 2021",
    summary:
      "Shipped responsive, accessible learning experiences while improving performance and migrating a production codebase to TypeScript.",
    impact: [
      "Migrated the platform from JavaScript to TypeScript, reducing bugs by 20%.",
      "Delivered responsive, accessible learning modules with WCAG/ARIA-friendly patterns.",
      "Improved load performance by ~15% through architectural enhancements.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Performance", "A11y"],
  },
  {
    company: "Laboratório Bridge",
    title: "Full Stack Engineer",
    location: "Remote",
    dates: "Mar 2020 – Mar 2021",
    summary:
      "Redesigned a healthcare UI (React + Java) used by 500k+ professionals, improving clarity and usability for complex workflows.",
    impact: [
      "Redesigned healthcare UI (React + Java) for 500k+ professionals.",
      "Built and standardized 20+ reusable components for the internal design system.",
      "Improved accessibility and responsiveness across nationwide systems.",
    ],
    skills: ["React", "Design Systems", "UI Engineering", "Accessibility"],
  },
];

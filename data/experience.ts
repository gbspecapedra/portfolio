type Experience = {
  id: string;
  company: string;
  title: string;
  location: string;
  dates: string;
  summary: string;
  impact: readonly string[];
  skills: readonly string[];
  additionalSkills: readonly string[];
};

export const experience = [
  {
    id: "commerce7",
    company: "Commerce7",
    title: "Frontend Engineer",
    location: "Remote",
    dates: "Mar 2026 – Present",
    summary:
      "Builds frontend interfaces with React and TypeScript, with a focus on reusable components, accessibility, and testing.",
    impact: [],
    skills: ["React", "TypeScript", "Accessibility", "Testing"],
    additionalSkills: ["Component Architecture", "JavaScript"],
  },
  {
    id: "winedirect",
    company: "WineDirect Ecommerce",
    title: "Frontend Engineer",
    location: "Remote",
    dates: "Jan 2022 – Jan 2025",
    summary:
      "Built core React and React Native features for thousands of merchants, improved usability and reliability, and reduced release rollbacks by standardizing components.",
    impact: [
      "Built and maintained key React/React Native features used by thousands of merchants.",
      "Improved usability and uptime by 25% through UI enhancements and architecture improvements.",
      "Implemented Jest + Testing Library, significantly reducing issue resolution time by catching regressions earlier.",
      "Reduced release rollbacks by 40% through component standardization and UI consistency.",
      "Collaborated across design, backend, and QA across multiple time zones.",
    ],
    skills: ["React", "React Native", "TypeScript", "Design Systems"],
    additionalSkills: ["Testing", "Component Architecture", "Accessibility"],
  },
  {
    id: "up-learn",
    company: "Up Learn",
    title: "Frontend Engineer",
    location: "Remote",
    dates: "Apr 2021 – Nov 2021",
    summary:
      "Led the migration from JavaScript to TypeScript, delivered accessible learning experiences aligned with WCAG, and improved page performance.",
    impact: [
      "Migrated the platform from JavaScript to TypeScript, reducing bugs by 20%.",
      "Delivered responsive, accessible learning modules with WCAG/ARIA-friendly patterns.",
      "Improved load performance by ~15% through architectural enhancements.",
    ],
    skills: ["React", "TypeScript", "Accessibility", "Performance"],
    additionalSkills: ["JavaScript"],
  },
  {
    id: "bridge",
    company: "Laboratório Bridge",
    title: "Full Stack Engineer",
    location: "Remote",
    dates: "Mar 2020 – Mar 2021",
    summary:
      "Redesigned healthcare interfaces used by 500k+ professionals, standardized reusable components, and improved accessibility across nationwide systems.",
    impact: [
      "Redesigned healthcare UI (React + Java) for 500k+ professionals.",
      "Built and standardized 20+ reusable components for the internal design system.",
      "Improved accessibility and responsiveness across nationwide systems.",
    ],
    skills: ["React", "Java", "Design Systems"],
    additionalSkills: ["Accessibility", "UI Engineering"],
  },
  {
    id: "feesc",
    company: "FEESC (Fundação de Ensino e Engenharia de Santa Catarina)",
    title: "Full Stack Developer",
    location: "Florianópolis, Brazil (On-site)",
    dates: "Apr 2015 – Feb 2020",
    summary:
      "Maintained internal systems supporting 400+ research projects across 18+ Brazilian states, improved workflows for 800+ research groups, and strengthened code and documentation.",
    impact: [
      "Maintained and evolved internal platforms supporting 400+ active projects across 18+ Brazilian states.",
      "Improved usability and workflow efficiency for 800+ research groups, streamlining complex administrative processes.",
      "Delivered long-term system improvements through better coding standards, documentation, and gradual refactors.",
      "Collaborated closely with non-technical stakeholders to translate institutional requirements into reliable, shippable solutions.",
    ],
    skills: ["Full Stack", "UI Engineering", "Complex Workflows"],
    additionalSkills: ["Long-term Maintenance", "Stakeholder Collaboration"],
  },
] as const satisfies readonly Experience[];

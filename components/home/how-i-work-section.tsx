import { CodeXml, Flag, Handshake, Layers } from "lucide-react";
import { FaUniversalAccess } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi2";
import {
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTypescript,
} from "react-icons/si";

import { Badge } from "@/components/ui/badge";

const workflow = [
  {
    title: "Collaborate",
    icon: Handshake,
    description:
      "Work closely with designers, product managers, and engineers to turn ideas into solid, feasible solutions.",
  },
  {
    title: "Implement",
    icon: CodeXml,
    description:
      "Build high-quality, accessible, and maintainable interfaces with a focus on reuse, consistency, and long-term evolution.",
  },
  {
    title: "Optimize",
    icon: HiOutlineChartBar,
    description:
      "Continuously improve performance, accessibility, and usability based on data, feedback, and product goals.",
  },
  {
    title: "Deliver",
    icon: Flag,
    description:
      "Ship with quality and ownership, balancing technical excellence, user experience, and business impact.",
  },
];

const technologies = [
  { label: "React", icon: SiReact, color: "text-[#237889] dark:text-[#61dafb]" },
  {
    label: "TypeScript",
    icon: SiTypescript,
    color: "text-[#276ba7] dark:text-[#75b6f1]",
  },
  { label: "Next.js", icon: SiNextdotjs },
  {
    label: "Storybook",
    icon: SiStorybook,
    color: "text-[#d72d63] dark:text-[#ff77a2]",
  },
  { label: "Accessibility", icon: FaUniversalAccess },
  { label: "Design Systems", icon: Layers },
  { label: "Git & GitHub", icon: SiGithub },
];

export function HowIWorkSection() {
  return (
    <section
      aria-labelledby="how-i-work-heading"
      className="mx-auto max-w-[1456px] px-4 pt-12 min-[480px]:px-6 lg:pt-16 min-[1200px]:px-[30px]"
    >
      <div className="grid gap-6 rounded-[20px] bg-secondary p-6 sm:gap-8 sm:px-8 sm:py-7 min-[1100px]:grid-cols-[26%_minmax(0,1fr)] xl:gap-10 xl:px-10">
        <div className="border-b border-border pb-6 min-[1100px]:border-r min-[1100px]:border-b-0 min-[1100px]:pt-2 min-[1100px]:pr-6 min-[1100px]:pb-0">
          <h2
            id="how-i-work-heading"
            className="text-[clamp(2rem,3.3vw,2.625rem)] leading-tight font-bold tracking-tight [font-family:Georgia,'Times_New_Roman',serif]"
          >
            How I work
          </h2>
          <div aria-hidden="true" className="mt-4 h-[3px] w-16 bg-brand-clay" />
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            A practical, collaborative, and user-centered approach to building
            and scaling frontend experiences.
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:gap-8"
        >
          {workflow.map(({ title, icon: Icon, description }) => (
            <li key={title}>
              <Icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-9 text-brand-clay xl:size-11"
              />
              <h3 className="mt-2.5 text-[1.375rem] leading-tight font-bold tracking-tight [font-family:Georgia,'Times_New_Roman',serif] xl:text-[1.625rem]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-snug text-muted-foreground xl:text-base">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5 px-2 lg:mt-11 xl:px-3 min-[1400px]:gap-x-8 min-[1400px]:px-8">
        <div>
          <h3 className="text-[clamp(1.375rem,2vw,1.5625rem)] leading-tight font-bold tracking-tight [font-family:Georgia,'Times_New_Roman',serif]">
            Technologies &amp; Practices
          </h3>
          <div aria-hidden="true" className="mt-2.5 h-[3px] w-14 bg-brand-clay" />
        </div>

        <ul role="list" className="flex flex-wrap gap-2 xl:grow xl:justify-between min-[1400px]:gap-2.5">
          {technologies.map(({ label, icon: Icon, color }) => (
            <li key={label}>
              <Badge
                variant="outline"
                className="gap-1.5 border-border/70 px-2.5 py-2 text-[13px] font-semibold [&>svg]:size-[18px] min-[1400px]:gap-2 min-[1400px]:px-3 min-[1400px]:py-2.5 min-[1400px]:text-sm min-[1400px]:[&>svg]:size-5"
              >
                <Icon aria-hidden="true" className={color} />
                {label}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

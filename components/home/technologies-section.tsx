import { Layers } from "lucide-react";
import { FaUniversalAccess } from "react-icons/fa6";
import {
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTypescript,
} from "react-icons/si";

import { Badge } from "@/components/ui/badge";
import type { Homepage } from "@/lib/prismic/map-content";

const technologyIcons = {
  react: { Icon: SiReact, color: "text-[#237889] dark:text-[#61dafb]" },
  typescript: { Icon: SiTypescript, color: "text-[#276ba7] dark:text-[#75b6f1]" },
  next: { Icon: SiNextdotjs, color: undefined },
  storybook: { Icon: SiStorybook, color: "text-[#d72d63] dark:text-[#ff77a2]" },
  accessibility: { Icon: FaUniversalAccess, color: undefined },
  design: { Icon: Layers, color: undefined },
  git: { Icon: SiGithub, color: undefined },
};

export function TechnologiesSection({ technologies }: { technologies: Homepage["technologies"] }) {
  return (
    <section
      aria-labelledby="technologies-heading"
      className="mx-auto flex max-w-[1456px] flex-wrap items-center gap-x-6 gap-y-5 px-4 pt-10 min-[480px]:px-6 lg:pt-12 min-[1200px]:px-[42px] min-[1400px]:gap-x-8 min-[1400px]:px-[58px]"
    >
      <div>
        <h2
          id="technologies-heading"
          className="text-[clamp(1.375rem,2vw,1.5625rem)] leading-tight font-bold tracking-tight font-editorial"
        >
          {technologies.heading}
        </h2>
        <div aria-hidden="true" className="mt-2.5 h-[3px] w-14 bg-brand-clay" />
      </div>

      <ul
        role="list"
        className="flex flex-wrap gap-2 xl:grow xl:justify-between min-[1400px]:gap-2.5"
      >
        {technologies.items.map(({ label, icon }) => {
          const mark = icon ? technologyIcons[icon] : undefined;
          return (
            <li key={label}>
              <Badge
                variant="outline"
                className="gap-1.5 border-border/70 px-2.5 py-2 text-[13px] font-semibold [&>svg]:size-[18px] min-[1400px]:gap-2 min-[1400px]:px-3 min-[1400px]:py-2.5 min-[1400px]:text-sm min-[1400px]:[&>svg]:size-5"
              >
                {mark && <mark.Icon aria-hidden="true" className={mark.color} />}
                {label}
              </Badge>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

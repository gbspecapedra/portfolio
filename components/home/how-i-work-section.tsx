import { CodeXml, Flag, Handshake } from "lucide-react";
import { HiOutlineChartBar } from "react-icons/hi2";
import type { Homepage } from "@/lib/prismic/map-content";

const workflowIcons = {
  collaborate: Handshake,
  implement: CodeXml,
  optimize: HiOutlineChartBar,
  deliver: Flag,
};

export function HowIWorkSection({ workflow }: { workflow: Homepage["workflow"] }) {
  return (
    <section
      aria-labelledby="how-i-work-heading"
      className="mx-auto max-w-364 px-4 pt-12 min-[480px]:px-6 lg:pt-16 min-[1200px]:px-7.5"
    >
      <div className="grid gap-6 rounded-[20px] bg-secondary p-6 sm:gap-8 sm:px-8 sm:py-7 min-[1100px]:grid-cols-[26%_minmax(0,1fr)] xl:gap-10 xl:px-10">
        <div className="border-b border-border pb-6 min-[1100px]:border-r min-[1100px]:border-b-0 min-[1100px]:pt-2 min-[1100px]:pr-6 min-[1100px]:pb-0">
          <h2
            id="how-i-work-heading"
            className="text-[clamp(2rem,3.3vw,2.625rem)] leading-tight font-bold tracking-tight font-editorial"
          >
            {workflow.heading}
          </h2>
          <div aria-hidden="true" className="mt-4 h-0.75 w-16 bg-brand-clay" />
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {workflow.intro}
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:gap-8"
        >
          {workflow.items.map(({ title, icon, description }) => {
            const Icon = icon && workflowIcons[icon];
            return (
              <li key={title}>
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="size-9 text-brand-clay xl:size-11"
                  />
                )}
                <h3 className="mt-2.5 text-[1.375rem] leading-tight font-bold tracking-tight font-editorial xl:text-[1.625rem]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-snug text-muted-foreground xl:text-base">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

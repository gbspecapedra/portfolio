import { Cross, Grape, Play } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Experience } from "@/lib/prismic/map-content";
import { homeSectionIds } from "@/data/site";
import { cn } from "@/lib/utils";

type CompanyMark = {
  useShortName?: boolean;
  className: string;
  icon?: typeof Grape;
  iconClassName?: string;
};

const companyMarks: Partial<Record<string, CompanyMark>> = {
  commerce7: {
    className: "bg-[#dce9dc] text-[#203e30]",
  },
  winedirect: {
    className: "bg-[#572641] text-white",
    icon: Grape,
    iconClassName: "size-5 @min-[42rem]:size-7",
  },
  "up-learn": {
    className: "bg-[#eadef4] text-[#261e36]",
    icon: Play,
    iconClassName:
      "size-6 rounded-full bg-[#713bd0] fill-white p-1.5 text-white @min-[42rem]:size-8 @min-[42rem]:p-2",
  },
  bridge: {
    className: "bg-[#deefe7] text-[#173730] leading-tight",
    icon: Cross,
    iconClassName: "size-6 text-[#0b8069] @min-[42rem]:size-8",
  },
  feesc: {
    useShortName: true,
    className: "bg-[#d9ebf8] text-[#0966a3] text-2xl @min-[42rem]:text-3xl",
  },
};

function SkillsList({
  label,
  skills,
  className,
}: {
  label: string;
  skills: readonly string[];
  className: string;
}) {
  return (
    <ul aria-label={label} role="list" className={`flex flex-wrap ${className}`}>
      {skills.map((skill) => (
        <li key={skill}>
          <Badge
            variant="outline"
            className="border-border bg-surface-soft/50 px-2 py-1 text-[11px] leading-tight font-semibold"
          >
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection({ heading, experience }: { heading: string; experience: Experience[] }) {
  return (
    <section
      id={homeSectionIds.experience}
      aria-labelledby="experience-heading"
      className="@container min-w-0 scroll-mt-32 lg:scroll-mt-28 min-[1100px]:flex min-[1100px]:flex-col min-[1100px]:self-stretch"
    >
      <h2
        id="experience-heading"
        className="font-editorial text-[clamp(2rem,6.1cqw,2.875rem)] leading-tight font-bold tracking-[-0.04em] text-pretty after:mt-3 after:block after:h-0.75 after:w-14 after:rounded-full after:bg-brand-clay after:content-['']"
      >
        {heading}
      </h2>

      {/* About sets the height of the shared row when the sections sit side by side. */}
      <Accordion
        type="multiple"
        role="region"
        aria-label="Career timeline"
        tabIndex={0}
        className="mt-5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:mt-6 min-[1100px]:-ml-1 min-[1100px]:min-h-0 min-[1100px]:flex-1 min-[1100px]:overflow-y-auto min-[1100px]:contain-size min-[1100px]:scrollbar-thin min-[1100px]:scrollbar-gutter-stable min-[1100px]:scrollbar-thumb-brand-clay min-[1100px]:scrollbar-track-surface-soft min-[1100px]:py-1 min-[1100px]:pr-2 min-[1100px]:pl-1"
      >
        <ol
          aria-label="Employment history"
          role="list"
          className="grid gap-2.5"
        >
          {experience.map((item) => {
            const mark = companyMarks[item.id];
            const Icon = mark?.icon;
            const markLabel = item.companyShort || item.company;
            const company = mark?.useShortName ? markLabel : item.company;

            return (
              <li
                key={item.id}
                className="relative pl-5 before:absolute before:top-0 before:-bottom-2.5 before:left-1 before:w-px before:bg-brand-clay/45 after:absolute after:top-9 after:left-0 after:size-2.25 after:-translate-y-1/2 after:rounded-full after:bg-brand-clay first:before:top-9 last:before:bottom-auto last:before:h-9 @min-[26rem]:pl-7 @min-[26rem]:after:top-12 @min-[26rem]:first:before:top-12 @min-[26rem]:last:before:h-12"
              >
                <AccordionItem value={item.id} className="border-none">
                  <Card className="gap-0 rounded-[1.25rem] border-border/50 bg-card/75 py-0 shadow-[0_4px_12px_-5px_var(--color-border)]">
                    <CardContent className="grid min-w-0 items-center gap-x-3 gap-y-2.5 p-3 @min-[26rem]:grid-cols-[7rem_minmax(0,1fr)] @min-[38rem]:grid-cols-[clamp(7rem,19cqw,10.5rem)_minmax(0,1fr)_12rem] @2xl:gap-x-4 @2xl:p-3.5">
                      <div
                        aria-hidden="true"
                        className={cn(
                          "flex min-h-11 w-fit max-w-full items-center justify-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-bold tracking-tight @min-[26rem]:row-span-2 @min-[26rem]:min-h-20 @min-[26rem]:w-full @min-[38rem]:row-span-1 @2xl:min-h-22 @2xl:gap-2 @2xl:text-base",
                          mark?.className ?? "bg-secondary text-secondary-foreground",
                        )}
                      >
                        {Icon && (
                          <Icon
                            strokeWidth={1.75}
                            className={cn("shrink-0", mark?.iconClassName)}
                          />
                        )}
                        <span>{markLabel}</span>
                      </div>

                      <div className="min-w-0">
                        <AccordionTrigger
                          className="font-editorial min-h-8 w-fit flex-none cursor-pointer items-center justify-start gap-1.5 py-0 text-xl leading-tight font-bold tracking-tight hover:text-brand-clay hover:no-underline aria-expanded:text-brand-clay @2xl:text-[1.375rem] [&>svg]:size-3.5 [&>svg]:translate-y-0"
                        >
                          {item.title}
                          <span className="sr-only"> at {company}</span>
                        </AccordionTrigger>
                        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] leading-snug font-medium text-muted-foreground">
                          <span>{company}</span>
                          <span className="inline-flex items-center gap-2 whitespace-nowrap">
                            <span
                              aria-hidden="true"
                              className="hidden @min-[44rem]:inline"
                            >
                              ·
                            </span>
                            {item.dates}
                          </span>
                        </p>
                        <p className="mt-1.5 text-[13px] leading-snug @2xl:text-sm">
                          {item.summary}
                        </p>
                      </div>

                      <SkillsList label="Key skills" skills={item.skills} className="gap-1.5" />
                    </CardContent>

                    <AccordionContent className="mx-3 border-t border-border/70 pt-3 @2xl:mx-3.5">
                      <p className="text-sm font-medium text-muted-foreground">
                        {mark?.useShortName && <>{item.company}{item.location && " · "}</>}
                        {item.location}
                      </p>
                      {item.impact.length > 0 && (
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-brand-clay">
                          {item.impact.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <SkillsList
                        label="Additional skills"
                        skills={item.additionalSkills}
                        className="mt-3 gap-2"
                      />
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </li>
            );
          })}
        </ol>
      </Accordion>
    </section>
  );
}

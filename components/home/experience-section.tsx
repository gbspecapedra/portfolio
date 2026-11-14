import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function StatPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground dark:bg-white/5">
      {children}
    </span>
  );
}

export function ExperienceSection() {
  const defaultOpen = experience
    .slice(0, 2)
    .map((item) => `${item.company}-${item.title}`);

  return (
    <section id="experience" className="pt-20">
      <Reveal trigger="inView" delay={0}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Front-End Engineer (6+ years) focused on design systems,
              accessibility (WCAG/ARIA), performance, testing, and clean
              component architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatPill>React • TypeScript • Next.js</StatPill>
            <StatPill>WCAG/ARIA</StatPill>
            <StatPill>Jest + RTL</StatPill>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 space-y-4">
        <Accordion
          type="multiple"
          defaultValue={defaultOpen}
          className="space-y-4"
        >
          {experience.map((item, idx) => {
            const value = `${item.company}-${item.title}`;

            return (
              <Reveal key={value} trigger="inView" delay={140 + idx * 140}>
                <AccordionItem value={value} className="border-none">
                  <Card className="card-sig">
                    <CardContent className="p-0">
                      <AccordionTrigger className="px-6 py-0 hover:no-underline">
                        <div className="flex w-full flex-col gap-2 text-left sm:flex-row sm:items-start sm:justify-between">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <h3 className="text-base font-semibold sm:text-lg">
                                {item.title}
                              </h3>
                              <span className="text-sm text-muted-foreground">
                                @ {item.company}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span>{item.location}</span>
                              <span className="opacity-60">•</span>
                              <span>{item.dates}</span>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 py-3">
                        <div className="space-y-3">
                          <p className="max-w-3xl text-sm text-muted-foreground">
                            {item.summary}
                          </p>

                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {item.impact.map((b) => (
                              <li key={b} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--signature)]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 pt-1">
                            {item.skills.map((s) => (
                              <Badge key={s} variant="secondary">
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </CardContent>
                  </Card>
                </AccordionItem>
              </Reveal>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Heart, Leaf, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { homeSectionIds, siteName } from "@/data/site";
import headshot from "@/public/images/headshot.png";

const values = [
  {
    title: "People-focused",
    description: "I value collaboration, empathy and diverse perspectives.",
    icon: Heart,
  },
  {
    title: "Curious & open-minded",
    description: "I’m always learning, exploring new ideas and sharing knowledge.",
    icon: Leaf,
  },
  {
    title: "Detail-oriented",
    description: "I care about quality, accessibility and long-term maintainability.",
    icon: Sparkles,
  },
];

export function AboutSection() {
  return (
    <section
      id={homeSectionIds.about}
      aria-labelledby="about-heading"
      className="@container min-w-0 scroll-mt-32 lg:scroll-mt-28"
    >
      <p className="mb-5 text-xs font-bold tracking-[0.2em] text-brand-clay uppercase sm:text-sm">
        About me
      </p>
      <div className="grid items-start gap-6 @min-[31rem]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] @min-[46rem]:gap-10">
        <div>
          <h2
            id="about-heading"
            className="text-[clamp(1.8125rem,4.75cqw,2.375rem)] leading-[1.1] font-bold tracking-[-0.04em] text-pretty font-editorial @min-[37rem]:[&>span]:block"
          >
            <span>A frontend engineer</span>{" "}
            <span>who cares about people,</span>{" "}
            <span>products and impact.</span>
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base @min-[31rem]:mt-5">
            I’m a senior frontend engineer focused on building accessible,
            scalable and maintainable interfaces. I enjoy solving complex
            problems, collaborating with different perspectives, and turning
            ideas into practical, reliable solutions that create real value
            for users.
          </p>
        </div>

        <div className="relative isolate w-full max-w-72 justify-self-center @min-[31rem]:-mt-2 @min-[31rem]:max-w-80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-4 -right-2 size-2/3 rounded-full bg-brand-clay/10" />
            <Leaf
              className="absolute -top-6 -right-4 size-16 -rotate-75 fill-brand-clay/25 text-brand-clay/40"
              strokeWidth={1.1}
            />
            <Leaf
              className="absolute -bottom-5 -left-5 size-16 -rotate-80 fill-brand-clay/25 text-brand-clay/40"
              strokeWidth={1.1}
            />
          </div>
          <Image
            src={headshot}
            alt={siteName}
            sizes="auto, (max-width: 319px) calc(100vw - 32px), (max-width: 1099px) 320px, 18vw"
            className="aspect-square w-full rounded-[1.75rem] border border-border/70 bg-[radial-gradient(ellipse_at_45%_20%,var(--color-secondary),var(--color-accent))] object-cover shadow-sm"
          />
        </div>
      </div>

      <Card className="mt-8 gap-0 rounded-3xl border-none bg-secondary/85 py-0 shadow-none @min-[31rem]:mt-7">
        <CardContent className="px-4 sm:px-5">
          <ul role="list" className="divide-y divide-border/70">
            {values.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex items-start gap-4 py-3.5 sm:gap-5 sm:py-4"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.65}
                  className="mt-0.5 size-7 shrink-0 text-brand-clay sm:size-8"
                />
                <div>
                  <h3 className="text-base leading-snug font-bold">{title}</h3>
                  <p className="mt-0.5 max-w-[35ch] text-sm leading-snug text-muted-foreground sm:text-[15px]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

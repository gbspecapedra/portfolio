import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { FiFigma } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

import { NavButton } from "@/components/navigation/nav-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const projectLinkStyles = new Map([
  ["Live Demo", { order: 0, icon: Globe }],
  ["GitHub", { order: 1, icon: SiGithub }],
  ["Figma", { order: 2, icon: FiFigma }],
]);

export function ProjectHero({ project }: { project: Project }) {
  const { title, subtitle, meta, tags, image, links } = project;
  const badges = [meta?.role, meta?.duration, meta?.year].filter(Boolean);
  const facts = [
    { label: "Role", value: meta?.summaryRole ?? meta?.role },
    { label: "Focus", value: meta?.focus },
    { label: "Outcome", value: meta?.outcome },
  ].filter(({ value }) => value);
  const sortedLinks = links?.toSorted(
    (a, b) =>
      (projectLinkStyles.get(a.label)?.order ?? 3) -
      (projectLinkStyles.get(b.label)?.order ?? 3),
  );

  return (
    <section
      aria-labelledby="project-title"
      className={cn(
        "sm:px-3",
        image && "grid items-center gap-7 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[900px]:gap-8 lg:gap-10 xl:gap-14",
      )}
    >
      <div className="min-w-0">
        <NavButton variant="text" />

        {meta?.type || badges.length ? (
          <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
            {meta?.type && (
              <Badge className="badge-sig max-w-full px-2.5 py-1 text-sm wrap-break-word whitespace-normal">
                {meta.type}
              </Badge>
            )}
            {badges.map((value) => (
              <Badge
                key={value}
                variant="secondary"
                className="max-w-full px-2.5 py-1 text-sm wrap-break-word whitespace-normal"
              >
                {value}
              </Badge>
            ))}
          </div>
        ) : null}

        <h1
          id="project-title"
          className="mt-5 text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.04] font-bold tracking-[-0.045em] wrap-break-word [font-family:Georgia,'Times_New_Roman',serif]"
        >
          {title}
        </h1>
        <div
          aria-hidden="true"
          className="mt-3 h-0.5 w-16 rounded-full bg-brand-clay"
        />
        <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-foreground sm:text-xl">
          {subtitle}
        </p>

        {tags?.length ? (
          <ul
            aria-label="Project skills"
            role="list"
            className="mt-5 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <li key={tag} className="min-w-0 max-w-full">
                <Badge
                  variant="secondary"
                  className="max-w-full px-3 py-1 text-sm wrap-break-word whitespace-normal"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}

        {facts.length ? (
          <dl className="mt-5 flex flex-wrap gap-2 text-sm">
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="flex min-w-0 flex-wrap gap-x-1 rounded-lg border border-border bg-card/70 px-2.5 py-1.5"
              >
                <dt className="font-semibold">{label}</dt>
                <dd className="min-w-0 wrap-break-word text-muted-foreground">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {sortedLinks?.length ? (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {sortedLinks.map(
              ({ label, href, external = /^https?:\/\//i.test(href) }) => {
                const Icon = projectLinkStyles.get(label)?.icon;
                const ResourceLink = external ? "a" : Link;

                return (
                  <Button
                    key={href}
                    asChild
                    variant={label === "Live Demo" ? "secondary" : "outline"}
                    className="h-auto min-h-11 max-w-full rounded-xl px-4 py-2 text-sm font-semibold wrap-break-word whitespace-normal motion-reduce:transition-none"
                  >
                    <ResourceLink
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      {Icon && (
                        <Icon aria-hidden="true" className="size-4 text-brand-clay" />
                      )}
                      <span className="min-w-0">{label}</span>
                      {external && (
                        <>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-3.5 text-muted-foreground"
                          />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </>
                      )}
                    </ResourceLink>
                  </Button>
                );
              },
            )}
          </div>
        ) : null}
      </div>

      {image && (
        <div className="relative isolate min-w-0 self-stretch sm:px-6 sm:py-6 min-[900px]:grid min-[900px]:place-items-center min-[900px]:px-4 lg:py-8 xl:px-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 inset-y-1 -z-10 rotate-[-4deg] rounded-[44%_56%_61%_39%/49%_38%_62%_51%] bg-linear-to-br from-accent/80 via-secondary/70 to-transparent sm:inset-x-3 min-[900px]:inset-y-[13%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-1 inset-y-2 -z-10 rotate-3 rounded-[55%_45%_51%_49%/43%_56%_44%_57%] border border-brand-clay/20 sm:inset-x-5 min-[900px]:inset-y-[15%]"
          />
          <div className="w-full rounded-2xl border border-border bg-card/85 p-2 shadow-lg shadow-foreground/10 sm:rounded-3xl sm:p-3">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="block h-auto w-full rounded-xl"
              sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) calc(100vw - 146px), (max-width: 1279px) 43vw, 525px"
              preload
            />
          </div>
        </div>
      )}
    </section>
  );
}

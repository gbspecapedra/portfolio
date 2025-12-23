import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { projects, getProjectBySlug } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: Promise<{ slug: string }>;
};

type LinkLabel = "Live Demo" | "GitHub" | "Figma";

function LinkButton({ label, href }: { label: LinkLabel; href: string }) {
  return (
    <Button
      asChild
      variant={label === "Live Demo" ? "secondary" : "outline"}
      className={label === "Live Demo" ? "" : "border-foreground/10"}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}

function SectionBlock({
  title,
  bullets,
  body,
  delay = 0,
}: {
  title: string;
  bullets?: string[];
  body?: string[];
  delay?: number;
}) {
  return (
    <Reveal trigger="inView" delay={delay}>
      <Card className="card-sig">
        <CardContent className="p-6">
          <div className="space-y-3">
            <h2 className="text-base font-semibold sm:text-lg">{title}</h2>

            {body?.length ? (
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : null}

            {bullets?.length ? (
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const { title, subtitle, tags, meta, links, heroImage, sections, card } =
    project;

  // Consistent link order
  const linkOrder: Record<LinkLabel, number> = {
    "Live Demo": 0,
    GitHub: 1,
    Figma: 2,
  };

  const sortedLinks = (links ?? [])
    .slice()
    .sort((a, b) => linkOrder[a.label] - linkOrder[b.label]);

  const base = 140;
  const d = (i: number) => base + i * 90;

  return (
    <>
      <Navbar />

      <main className="hero-bg bg-background">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-14 sm:py-18">
          {/* Header */}
          <section className="space-y-5">
            <Reveal trigger="mount" delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                {meta.type && <Badge className="badge-sig">{meta.type}</Badge>}
                {meta.role && <Badge variant="secondary">{meta.role}</Badge>}
                {meta.duration && (
                  <Badge variant="secondary">{meta.duration}</Badge>
                )}
                {meta.year && <Badge variant="secondary">{meta.year}</Badge>}
              </div>
            </Reveal>

            <Reveal trigger="mount" delay={d(1)}>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {title}
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal trigger="mount" delay={d(2)}>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </Reveal>

            {/* Highlights */}
            {card?.highlights?.length ? (
              <Reveal trigger="mount" delay={d(3)}>
                <div className="flex flex-wrap gap-2 pt-1">
                  {card.highlights.map((h) => (
                    <Badge
                      key={h}
                      variant="outline"
                      className="border-foreground/10"
                    >
                      {h}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {/* Links */}
            {sortedLinks.length ? (
              <Reveal trigger="mount" delay={d(4)}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {sortedLinks.map((l) => (
                    <LinkButton key={l.label} label={l.label} href={l.href} />
                  ))}
                </div>
              </Reveal>
            ) : null}
          </section>

          {/* Hero media */}
          {heroImage?.src ? (
            <section className="mt-8">
              <Reveal trigger="inView" delay={d(1)}>
                <Card className="card-sig overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="h-auto w-full"
                      width={900}
                      height={600}
                      priority
                    />
                  </CardContent>
                </Card>
              </Reveal>
            </section>
          ) : null}

          {/* Content */}
          <section className="mt-10 space-y-4">
            <SectionBlock {...sections.challenge} delay={0} />

            {sections.context && (
              <SectionBlock {...sections.context} delay={d(1)} />
            )}

            {/* Process */}
            <Reveal trigger="inView" delay={d(2)}>
              <div className="pt-2">
                <h2 className="text-lg font-semibold sm:text-xl">
                  Process & Key Decisions
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Steps, decisions, and tradeoffs made along the way.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {sections.process.map((step, idx) => (
                <SectionBlock key={step.title} {...step} delay={d(3 + idx)} />
              ))}
            </div>

            {sections.solution && (
              <SectionBlock {...sections.solution} delay={d(4)} />
            )}

            <SectionBlock {...sections.outcome} delay={d(5)} />
            <SectionBlock {...sections.takeaways} delay={d(6)} />
            <SectionBlock {...sections.technologies} delay={d(7)} />
          </section>

          {/* Back */}
          <section className="mt-10">
            <Reveal trigger="inView" delay={d(2)}>
              <Button
                asChild
                variant="outline"
                className="border-foreground/10"
              >
                <Link href="/#projects">Back to projects</Link>
              </Button>
            </Reveal>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

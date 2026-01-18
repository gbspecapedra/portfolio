"use client";

import { useRouter } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { ProjectLinks } from "./project-links";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const router = useRouter();
  const tech = project.card?.tech ?? project.tags;

  return (
    <Reveal trigger="inView" delay={delay}>
      <Card
        className="card-sig h-full cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => router.push(`/projects/${project.slug}`)}
      >
        <CardContent className="p-5 flex h-full flex-col">
          <div className="relative">
            <div className="flex flex-nowrap gap-2 overflow-x-auto pr-10 scrollbar-width">
              {tech.map((t) => (
                <Badge key={t} variant="secondary" className="shrink-0">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-15 bg-linear-to-l from-background to-transparent" />
          </div>

          <div className="mt-3 flex-1">
            <h3 className="font-semibold leading-snug">{project.title}</h3>

            <p className="mt-1 text-sm text-muted-foreground line-clamp-4">
              {project.card?.pitch ?? project.subtitle}
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {project.card?.highlights?.[0] ? (
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-foreground/10">
                  {project.card.highlights[0]}
                </Badge>
              </div>
            ) : (
              <div className="min-h-[28px]" />
            )}

            <div className="flex flex-nowrap items-center gap-2">
              <span
                className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/projects/${project.slug}`);
                }}
                onMouseDown={(e) => e.stopPropagation()}
                role="link"
              >
                Case
              </span>

              <ProjectLinks
                links={project.links}
                size="sm"
                className="flex flex-nowrap gap-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

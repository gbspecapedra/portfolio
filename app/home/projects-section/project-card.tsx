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
  const tech = (project.card?.tech ?? project.tags).slice(0, 3);

  return (
    <Reveal trigger="inView" delay={delay}>
      <Card
        className="card-sig cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => router.push(`/projects/${project.slug}`)}
      >
        <CardContent className="p-5">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>

            <div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.card?.pitch ?? project.subtitle}
              </p>
            </div>

            {project.card?.highlights?.[0] ? (
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-foreground/10">
                  {project.card.highlights[0]}
                </Badge>
              </div>
            ) : null}

            <div className="flex flex-nowrap items-center gap-2 pt-1">
              <span
                className="inline-flex items-center rounded-md px-2.5 py-1.5 text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
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

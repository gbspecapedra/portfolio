"use client";

import { useRouter } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { ProjectLinks } from "./project-links";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const tech = (project.card?.tech ?? project.tags).slice(0, 3);

  return (
    <Reveal trigger="inView" delay={140}>
      <Card
        className={[
          "card-sig",
          "cursor-pointer",
          "transition-shadow",
          "hover:shadow-md",
        ].join(" ")}
        onClick={() => router.push(`/projects/${project.slug}`)}
      >
        <CardContent className="p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="badge-sig">
                  {project.card?.eyebrow ?? "Featured"}
                </Badge>
                {tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg font-semibold sm:text-xl">
                {project.title}
              </h3>

              <p className="max-w-2xl text-sm text-muted-foreground">
                {project.card?.pitch ?? project.subtitle}
              </p>

              {project.card?.highlights?.length ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.card.highlights.slice(0, 3).map((h) => (
                    <Badge
                      key={h}
                      variant="outline"
                      className="border-foreground/10"
                    >
                      {h}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>

            {/* ✅ botões em uma linha */}
            <div className="flex flex-nowrap items-center gap-2 sm:justify-end">
              {/* Case study (interno) */}
              <span
                className={[
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 transition-opacity",
                ].join(" ")}
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
                className="flex flex-nowrap gap-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

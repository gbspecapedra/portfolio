import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";
import { getFeaturedAndSecondary } from "./utils";

export function ProjectsSection() {
  const { featured, secondary } = getFeaturedAndSecondary(projects);

  return (
    <section id="projects" className="pt-20">
      <Reveal trigger="inView" delay={0}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Featured projects
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Real work, real decisions. Case studies focus on tradeoffs and
              outcomes.
            </p>
          </div>
        </div>
      </Reveal>

      {featured ? (
        <div className="mt-6">
          <FeaturedProjectCard project={featured} />
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondary.map((p, idx) => (
          <ProjectCard key={p.slug} project={p} delay={260 + idx * 180} />
        ))}
      </div>
    </section>
  );
}

import type { Project } from "@/data/project-types";
import { homeSectionIds } from "@/data/site";

import { ProjectCard } from "./project-card";

export function ProjectsSection({ heading, projects }: { heading: string; projects: Project[] }) {
  return (
    <section
      id={homeSectionIds.projects}
      aria-labelledby="projects-heading"
      className="mx-auto max-w-364 scroll-mt-24 px-4 pt-12 min-[480px]:px-6 lg:pt-16 min-[1200px]:px-7.5"
    >
      <h2
        id="projects-heading"
        className="text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.15] font-bold tracking-tight text-balance font-editorial"
      >
        {heading}
      </h2>
      <div
        aria-hidden="true"
        className="mt-3.5 h-0.5 w-14 bg-brand-clay"
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

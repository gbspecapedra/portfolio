import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact-info";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";
import { getFeaturedAndSecondary } from "./utils";

export function ProjectsSection() {
  const { featured, secondary } = getFeaturedAndSecondary(projects);
  const caseStudies = featured ? [featured, ...secondary] : secondary;
  const repositoriesUrl = contactInfo.githubUrl
    ? new URL(contactInfo.githubUrl)
    : undefined;
  repositoriesUrl?.searchParams.set("tab", "repositories");

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-[1456px] scroll-mt-24 px-4 pt-12 min-[480px]:px-6 lg:pt-16 min-[1200px]:px-[30px]"
    >
      <h2
        id="projects-heading"
        className="text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.15] font-bold tracking-tight text-balance [font-family:Georgia,'Times_New_Roman',serif] sm:ml-2"
      >
        System-level impact through frontend architecture
      </h2>
      <div
        aria-hidden="true"
        className="mt-3.5 h-0.5 w-14 bg-brand-clay sm:ml-2"
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {caseStudies.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {repositoriesUrl && (
        <div className="mt-7 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <a
              href={repositoriesUrl.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub aria-hidden="true" />
              View more on GitHub
            </a>
          </Button>
        </div>
      )}
    </section>
  );
}

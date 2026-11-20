import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NavButton } from "@/components/navigation/nav-button";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectSections } from "@/components/projects/project-sections";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteName } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
      alternates: { canonical: null },
      robots: { index: false },
    };
  }

  const { title, subtitle: description, image } = project;
  const canonical = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: canonical,
      images: image
        ? [{ url: image.src, width: image.width, height: image.height, alt: image.alt }]
        : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [{ url: image.src, alt: image.alt }] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="hero-bg bg-background">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:pt-10 lg:pb-12 xl:px-8">
        <ProjectHero project={project} />
        <ProjectSections sections={project.sections} />
        <nav aria-label="Project navigation" className="mt-7 sm:mt-9">
          <NavButton />
        </nav>
      </div>
    </main>
  );
}

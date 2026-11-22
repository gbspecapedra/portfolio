import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { NavButton } from "@/components/navigation/nav-button";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectSections } from "@/components/projects/project-sections";
import { SiteMain } from "@/components/site-shell";
import { getProjectBySlug, projectPath, projects } from "@/data/projects";
import { homeSectionIds, siteUrl } from "@/data/site";
import { pageMetadata, personId, websiteId } from "@/lib/seo";

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

  if (!project) notFound();

  const { image } = project;
  const title = `${project.title} Case Study`;

  return {
    ...pageMetadata({
      url: new URL(projectPath(slug), siteUrl).href,
      title,
      description: project.seoDescription ?? project.subtitle,
      image: image && {
        url: image.src,
        width: image.width,
        height: image.height,
        alt: image.alt,
      },
    }),
    title,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { image } = project;
  const url = new URL(projectPath(slug), siteUrl).href;
  const breadcrumbId = `${url}#breadcrumb`;
  const projectData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: project.title,
        description: project.seoDescription ?? project.subtitle,
        inLanguage: "en",
        genre: "Case study",
        author: { "@id": personId },
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: image && {
          "@type": "ImageObject",
          contentUrl: new URL(image.src, siteUrl).href,
          width: { "@type": "QuantitativeValue", value: image.width, unitText: "px" },
          height: { "@type": "QuantitativeValue", value: image.height, unitText: "px" },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Case Studies",
            item: new URL(`/#${homeSectionIds.projects}`, siteUrl).href,
          },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <SiteMain className="hero-bg bg-background">
      <JsonLd data={projectData} />
      <article
        aria-labelledby="project-title"
        className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:pt-10 lg:pb-12 xl:px-8"
      >
        <ProjectHero project={project} />
        <ProjectSections sections={project.sections} />
        <nav aria-label="Project navigation" className="mt-7 sm:mt-9">
          <NavButton />
        </nav>
      </article>
    </SiteMain>
  );
}

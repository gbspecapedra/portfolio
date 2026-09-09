import { DeveloperProjectPage } from "@/developer/pages/project-page";
import { projects } from "@/developer/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  return <DeveloperProjectPage params={params} />;
}

import type { Project } from "@/data/projects";

export function getFeaturedAndSecondary(all: Project[]) {
  const list = all
    .filter((p) => p.card)
    .sort((a, b) => Number(!!b.card?.featured) - Number(!!a.card?.featured));

  const featured = list.find((p) => p.card?.featured) ?? list[0] ?? null;
  const secondary = list.filter((p) => p.slug !== featured?.slug).slice(0, 4);

  return { featured, secondary };
}

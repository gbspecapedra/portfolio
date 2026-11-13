import type { Project } from "@/developer/data/projects";

export function groupLinks(links: Project["links"] | undefined) {
  const byLabel = new Map<string, string>();

  (links ?? []).forEach((l) => {
    if (l?.href) byLabel.set(l.label, l.href);
  });

  return {
    liveDemo: byLabel.get("Live Demo"),
    github: byLabel.get("GitHub"),
    figma: byLabel.get("Figma"),
  };
}

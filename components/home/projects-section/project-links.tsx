import { Button } from "@/components/ui/button";
import type { ProjectLink } from "@/data/projects";

type Props = {
  links?: ProjectLink[];
  size?: "default" | "sm";
  className?: string;
};

function groupLinks(links?: ProjectLink[]) {
  const out: Partial<Record<ProjectLink["label"], string>> = {};
  links?.forEach((l) => (out[l.label] = l.href));
  return out;
}

export function ProjectLinks({ links, size = "default", className }: Props) {
  const grouped = groupLinks(links);

  const items = [
    grouped["Live Demo"] ? { label: "Live", href: grouped["Live Demo"] } : null,
    grouped["GitHub"] ? { label: "Code", href: grouped["GitHub"] } : null,
    grouped["Figma"] ? { label: "Figma", href: grouped["Figma"] } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  if (!items.length) return null;

  return (
    <div className={className}>
      {items.map((it) => (
        <Button
          key={it.label}
          asChild
          size={size}
          variant="outline"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <a href={it.href} target="_blank" rel="noreferrer">
            {it.label}
          </a>
        </Button>
      ))}
    </div>
  );
}

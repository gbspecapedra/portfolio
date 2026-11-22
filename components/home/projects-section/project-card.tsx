import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectPath, type Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, subtitle, image, card, meta } = project;
  const titleId = `project-title-${slug}`;
  const linkLabelId = `project-link-${slug}`;

  return (
    <Card className="group relative min-w-0 gap-0 overflow-hidden border-border/75 bg-linear-to-b from-card to-surface-soft/60 py-0 shadow-sm transition-[border-color,box-shadow] hover:border-brand-clay/50 hover:shadow-md focus-within:border-brand-clay motion-reduce:transition-none">
      {image && (
        <div className="border-b border-border/70 bg-secondary px-[5%] pt-[3.5%]">
          <div className="relative aspect-[2] overflow-hidden rounded-t-md shadow-sm">
            <Image
              src={image.src}
              alt=""
              fill
              sizes="auto, (min-width: 1456px) 297px, (min-width: 1280px) 21vw, (min-width: 640px) 44vw, 85vw"
              className="object-cover object-left"
            />
          </div>
        </div>
      )}

      <CardContent className="flex flex-1 flex-col items-start px-5 pt-3.5 pb-4">
        <h3
          id={titleId}
          className="text-2xl leading-tight font-bold tracking-tight font-editorial"
        >
          {title}
        </h3>

        {(meta?.type || meta?.role) && (
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            {meta.type && <Badge variant="secondary">{meta.type}</Badge>}
            {meta.role && <span>{meta.role}</span>}
          </div>
        )}

        <p className="mt-2 mb-3 flex-1 text-sm leading-relaxed text-card-foreground">
          {card?.pitch ?? subtitle}
        </p>

        <Button
          asChild
          variant="link"
          className="h-auto min-h-6 w-fit gap-2 p-0 text-base font-semibold focus-visible:underline group-hover:underline has-[>svg]:px-0"
        >
          <Link
            href={projectPath(slug)}
            aria-labelledby={`${linkLabelId} ${titleId}`}
            className="after:absolute after:inset-0"
          >
            <span id={linkLabelId}>View case study</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

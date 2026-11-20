import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, subtitle, image, card } = project;
  const titleId = `project-title-${slug}`;
  const linkLabelId = `project-link-${slug}`;

  return (
    <Card className="relative min-w-0 gap-0 overflow-hidden border-border/75 bg-linear-to-b from-card to-surface-soft/60 py-0 shadow-sm transition-[border-color,box-shadow] hover:border-brand-clay/50 hover:shadow-md focus-within:border-brand-clay/50 motion-reduce:transition-none">
      {image && (
        <div className="border-b border-border/70 bg-secondary px-[5%] pt-[3.5%]">
          <div className="relative aspect-[2] overflow-hidden rounded-t-md shadow-sm">
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(min-width: 1456px) 297px, (min-width: 1024px) 21vw, (min-width: 640px) 44vw, 85vw"
              className="object-cover object-left"
            />
          </div>
        </div>
      )}

      <CardContent className="flex flex-1 flex-col items-start px-5 pt-3.5 pb-4">
        <h3
          id={titleId}
          className="text-2xl leading-tight font-bold tracking-tight font-[Georgia,'Times_New_Roman',serif]"
        >
          {title}
        </h3>

        <p className="mt-2 mb-3 flex-1 text-sm leading-snug text-card-foreground">
          {card?.pitch ?? subtitle}
        </p>

        <Button
          asChild
          variant="link"
          className="h-auto w-fit gap-2 p-0 text-base font-semibold motion-reduce:transition-none has-[>svg]:px-0"
        >
          <Link
            href={`/projects/${slug}`}
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

import Image from "next/image";
import {
  Accessibility,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  Laptop,
  Layers,
  Lightbulb,
  Scale,
  Search,
  Smartphone,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import type { ProjectSection } from "@/data/projects";
import { cn } from "@/lib/utils";

const sectionIcons: Record<NonNullable<ProjectSection["icon"]>, LucideIcon> = {
  target: Target,
  clipboard: ClipboardList,
  search: Search,
  scale: Scale,
  smartphone: Smartphone,
  layers: Layers,
  accessibility: Accessibility,
  lightbulb: Lightbulb,
  chart: ChartNoAxesColumnIncreasing,
  star: Star,
  laptop: Laptop,
};

const headingTags = ["h2", "h3", "h4", "h5", "h6"] as const;
const headingClassName =
  "font-bold leading-tight tracking-[-0.025em] wrap-break-word [font-family:Georgia,'Times_New_Roman',serif]";

function hasSectionBody(section: ProjectSection): boolean {
  return Boolean(
    section.body?.some((paragraph) => paragraph.trim()) ||
      section.bullets?.some((bullet) => bullet.trim()) ||
      section.decision?.trim() ||
      section.tradeOff?.trim() ||
      section.image,
  );
}

function hasSectionContent(section: ProjectSection): boolean {
  return hasSectionBody(section) || Boolean(section.sections?.some(hasSectionContent));
}

function SectionContent({ section }: { section: ProjectSection }) {
  const { body, bullets, decision, tradeOff, image } = section;
  const paragraphs = body?.filter((paragraph) => paragraph.trim());
  const items = bullets?.filter((bullet) => bullet.trim());

  return (
    <>
      {decision?.trim() && (
        <p className="rounded-e-lg border-s-2 border-brand-clay/65 bg-secondary/55 px-3 py-2">
          <strong className="text-accent-foreground">Decision.</strong> {decision}
        </p>
      )}
      {paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {tradeOff?.trim() && (
        <p className="rounded-e-lg border-s-2 border-brand-clay/65 bg-secondary/55 px-3 py-2">
          <strong className="text-accent-foreground">Trade-off.</strong> {tradeOff}
        </p>
      )}
      {items?.length ? (
        <ul className="list-disc space-y-1 ps-5 marker:text-brand-clay">
          {items.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 767px) 85vw, (max-width: 1279px) 75vw, 960px"
          className="h-auto max-w-full rounded-xl border border-border"
        />
      )}
    </>
  );
}

function ProjectSectionBlock({
  section,
  depth,
  parentId,
}: {
  section: ProjectSection;
  depth: number;
  parentId?: string;
}) {
  const id = parentId ? `${parentId}-${section.id}` : section.id;
  const Heading = headingTags[Math.min(depth, headingTags.length - 1)];
  const Icon = section.icon ? sectionIcons[section.icon] : undefined;
  const subsections = section.sections?.filter(hasSectionContent);
  const contentClassName =
    "min-w-0 space-y-2 text-base leading-relaxed wrap-break-word";
  const sectionIcon = Icon && (
    <span
      aria-hidden="true"
      className="grid size-10 shrink-0 place-items-center self-center rounded-xl bg-secondary text-brand-clay sm:size-13 sm:self-start sm:rounded-2xl"
    >
      <Icon strokeWidth={1.7} className="size-6 sm:size-7" />
    </span>
  );

  if (subsections?.length) {
    return (
      <section id={id} className="scroll-mt-32 space-y-4 py-2 sm:py-3">
        <div className="space-y-2 px-1 sm:px-5">
          <div className="flex items-center gap-3">
            {sectionIcon}
            <Heading className={cn(headingClassName, "min-w-0 text-3xl sm:text-4xl")}>
              {section.title}
            </Heading>
          </div>
          <div
            aria-hidden="true"
            className="h-0.5 w-12 rounded-full bg-brand-clay"
          />
          {hasSectionBody(section) && (
            <div className={cn(contentClassName, "max-w-[94ch] text-muted-foreground")}>
              <SectionContent section={section} />
            </div>
          )}
        </div>
        <div className="space-y-3 sm:space-y-4">
          {subsections.map((subsection) => (
            <ProjectSectionBlock
              key={subsection.id}
              section={subsection}
              depth={depth + 1}
              parentId={id}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <Card
      asChild
      className={cn(
        "grid min-w-0 scroll-mt-32 grid-cols-1 items-start gap-3 rounded-2xl bg-linear-to-br from-card to-surface-soft/50 p-4 sm:p-5",
        Icon && "grid-cols-[2.5rem_minmax(0,1fr)] sm:grid-cols-[3.75rem_minmax(0,1fr)] sm:gap-5 lg:grid-cols-[4.25rem_minmax(0,1fr)] lg:gap-6 lg:px-6",
      )}
    >
      <section id={id}>
        {sectionIcon}
        <div
          className={cn(
            "min-w-0",
            Icon && "contents sm:block sm:border-s sm:border-border sm:ps-5 lg:ps-6",
          )}
        >
          <Heading
            className={cn(
              headingClassName,
              "min-w-0 self-center",
              depth === 0 ? "text-2xl sm:text-[1.75rem]" : "text-xl sm:text-2xl",
            )}
          >
            {section.title}
          </Heading>
          <div
            className={cn(
              contentClassName,
              "max-w-[100ch] text-card-foreground",
              Icon ? "col-span-full sm:mt-2" : "mt-2",
            )}
          >
            <SectionContent section={section} />
          </div>
        </div>
      </section>
    </Card>
  );
}

export function ProjectSections({ sections }: { sections?: ProjectSection[] }) {
  const populatedSections = sections?.filter(hasSectionContent);
  if (!populatedSections?.length) return null;

  return (
    <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4 lg:mt-11">
      {populatedSections.map((section) => (
        <ProjectSectionBlock key={section.id} section={section} depth={0} />
      ))}
    </div>
  );
}

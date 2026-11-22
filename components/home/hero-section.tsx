import Image from "next/image";
import {
  Accessibility,
  Grid2X2,
  Layers,
  UsersRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Homepage } from "@/lib/prismic/map-content";
import { cn } from "@/lib/utils";

const strengthIcons = {
  architecture: Layers,
  accessibility: Accessibility,
  systems: Grid2X2,
  performance: Zap,
  collaboration: UsersRound,
};

const heroButtonClassName =
  "h-11 rounded-lg px-4 text-sm font-semibold min-[1200px]:h-12 min-[1200px]:px-5 min-[1200px]:text-base";

export function HeroSection({ name, hero }: { name: string; hero: Homepage["hero"] }) {
  const { strengths, image } = hero;
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-364 px-4 pt-6.5 pb-2 min-[480px]:px-6 min-[480px]:pt-8 min-[480px]:pb-3 min-[960px]:pt-5 min-[1200px]:px-7.5 min-[1200px]:pt-0"
    >
      <div className="mx-auto grid min-h-115 max-w-170 grid-cols-1 items-center min-[960px]:max-w-none min-[960px]:grid-cols-[41%_59%] min-[960px]:pl-2 min-[1200px]:min-h-127.5 min-[1200px]:pl-7.5">
        <div className="relative z-2 min-w-0 min-[960px]:py-5.5">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-brand-clay uppercase sm:mb-4 sm:text-sm">
            {name}
          </p>
          <h1
            id="hero-heading"
            className="max-w-[18ch] text-[clamp(1.875rem,5vw,2.875rem)] leading-[1.14] font-bold tracking-[-0.04em] text-balance font-editorial min-[960px]:text-[clamp(2rem,3.25vw,2.875rem)]"
          >
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted-foreground min-[480px]:text-lg min-[960px]:text-base min-[1200px]:mt-5 min-[1200px]:text-lg">
            {hero.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            <Button asChild size="lg" className={heroButtonClassName}>
              <a href={`#${hero.primary.id}`}>{hero.primary.label}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                heroButtonClassName,
                "bg-transparent",
              )}
            >
              <a href={`#${hero.secondary.id}`}>{hero.secondary.label}</a>
            </Button>
          </div>
        </div>
        <div className="mt-8 min-w-0 w-full min-[480px]:mt-7 min-[960px]:mt-0">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt=""
            className="block h-auto w-full"
            sizes="(width < 480px) calc(100vw - 32px), (width < 728px) calc(100vw - 48px), (width < 960px) 680px, (width < 1200px) calc(59vw - 33px), (width < 1456px) calc(59vw - 53px), 806px"
            preload
            fetchPriority="high"
          />
        </div>
      </div>
      <ul
        className="mt-6 grid list-none grid-cols-2 gap-y-5 rounded-[18px] bg-surface-soft/85 px-1.5 py-5.5 min-[480px]:mt-7 min-[480px]:grid-cols-6 min-[480px]:gap-y-6.5 min-[480px]:rounded-3xl min-[480px]:px-2.5 min-[480px]:py-6 min-[960px]:mt-6.25 min-[960px]:grid-cols-5 min-[960px]:gap-y-0 min-[960px]:py-5.75 min-[1200px]:mt-10"
        aria-label="Core strengths"
        role="list"
      >
        {strengths.map(({ icon, label, detail }, index) => {
          const Icon = icon && strengthIcons[icon];
          return (
            <li
              key={label}
              className={cn(
                "flex items-center gap-2.5 border-accent px-2.5 text-xs leading-[1.35] font-[550] min-[480px]:col-span-2 min-[480px]:justify-center min-[480px]:gap-3 min-[480px]:text-[15px] min-[960px]:col-span-1 min-[960px]:text-sm min-[1200px]:gap-5 min-[1200px]:px-3.75 min-[1200px]:text-[17px]",
                index % 2 === 1 && "border-l",
                index > 0 && "min-[480px]:border-l",
                index === 3 &&
                  "min-[480px]:max-[960px]:col-start-2 min-[480px]:max-[960px]:border-l-0",
                index === strengths.length - 1 &&
                  "col-span-full justify-center min-[480px]:col-span-2 min-[960px]:col-span-1",
              )}
            >
              {Icon && (
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-7 shrink-0 text-brand-clay min-[480px]:size-7.5 min-[1200px]:size-9"
                />
              )}
              <span>
                {label}
                {detail && (
                  <>
                    <br />
                    {detail}
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import Image from "next/image";
import {
  Accessibility,
  ArrowRight,
  Grid2X2,
  Layers,
  UsersRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/public/images/hero-image.png";

const strengths = [
  { icon: Layers, label: "UI Architecture" },
  { icon: Accessibility, label: "Accessibility", detail: "(WCAG/ARIA)" },
  { icon: Grid2X2, label: "Design Systems" },
  { icon: Zap, label: "Performance &", detail: "Scalability" },
  { icon: UsersRound, label: "Cross-functional", detail: "Collaboration" },
];

const heroButtonClassName =
  "h-12 rounded-[11px] px-4 text-sm font-semibold min-[480px]:px-5 min-[480px]:text-[15px] min-[1200px]:h-[55px] min-[1200px]:px-[30px] min-[1200px]:text-lg";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-[1456px] px-4 pt-[26px] pb-2 min-[480px]:px-6 min-[480px]:pt-8 min-[480px]:pb-3 min-[960px]:pt-5 min-[1200px]:px-[30px] min-[1200px]:pt-0"
    >
      <div className="mx-auto grid min-h-[460px] max-w-[680px] grid-cols-1 items-center min-[960px]:max-w-none min-[960px]:grid-cols-[41%_59%] min-[960px]:pl-2 min-[1200px]:min-h-[510px] min-[1200px]:pl-[30px]">
        <div className="relative z-2 min-w-0 min-[960px]:py-[22px]">
          <p className="mb-[18px] text-[11px] font-[750] tracking-[0.2em] text-brand-clay uppercase min-[480px]:mb-[22px] min-[480px]:text-sm">
            Frontend Engineer
          </p>
          <h1
            id="hero-heading"
            className="text-[clamp(20px,6.5vw,31px)] leading-[1.14] font-bold tracking-[-0.04em] [font-family:Georgia,'Times_New_Roman',serif] min-[480px]:text-[clamp(29px,5.4vw,46px)] min-[960px]:text-[clamp(30px,3.25vw,40px)] min-[1200px]:text-[clamp(32px,3.05vw,45px)] [&>span]:block [&>span]:whitespace-nowrap"
          >
            <span>Building reliable, accessible,</span>{" "}
            <span>and scalable interfaces</span>{" "}
            <span>
              with{" "}
              <span className="relative after:absolute after:bottom-[-12px] after:left-[-4%] after:h-3 after:w-[110%] after:rotate-[-2deg] after:rounded-[50%] after:border-t-[3px] after:border-brand-clay after:content-['']">
                clarity
              </span>{" "}
              and care.
            </span>
          </h1>
          <p className="mt-7 max-w-[600px] text-base leading-[1.55] text-foreground min-[480px]:mt-[30px] min-[480px]:text-lg min-[480px]:leading-[1.44] min-[960px]:max-w-[570px] min-[960px]:text-base min-[1200px]:mt-9 min-[1200px]:text-[clamp(16px,1.38vw,20px)]">
            I translate complex product requirements into maintainable frontend
            systems, collaborating closely with designers, product managers, and
            backend engineers. My focus is on accessibility, UI architecture, and
            design systems that scale with the product and the team.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 min-[480px]:mt-7 min-[480px]:gap-3.5 min-[1200px]:mt-[34px] min-[1200px]:gap-6">
            <Button
              asChild
              size="lg"
              className={cn(
                heroButtonClassName,
                "gap-2.5 border border-[#c37b65] bg-[linear-gradient(115deg,#b65e43,var(--primary))] text-[#fffaf6] has-[>svg]:px-4 min-[480px]:gap-[18px] min-[480px]:has-[>svg]:px-5 min-[1200px]:has-[>svg]:px-[30px] dark:bg-none dark:text-primary-foreground",
              )}
            >
              <a href="#projects">
                Explore case studies <ArrowRight aria-hidden="true" className="size-[23px]" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                heroButtonClassName,
                "border-[1.5px] border-brand-clay bg-transparent text-accent-foreground",
              )}
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
        <div className="mt-8 min-w-0 w-full min-[480px]:mt-7 min-[960px]:mt-0">
          <Image
            src={heroImage}
            alt=""
            className="block h-auto w-full"
            sizes="(max-width: 727px) calc(100vw - 32px), (max-width: 959px) 680px, (max-width: 1455px) 59vw, 825px"
            priority
          />
        </div>
      </div>
      <ul
        className="mt-6 grid list-none grid-cols-2 gap-y-5 rounded-[18px] bg-surface-soft/85 px-1.5 py-[22px] min-[480px]:mt-7 min-[480px]:grid-cols-6 min-[480px]:gap-y-[26px] min-[480px]:rounded-3xl min-[480px]:px-2.5 min-[480px]:py-6 min-[960px]:mt-[25px] min-[960px]:grid-cols-5 min-[960px]:gap-y-0 min-[960px]:py-[23px] min-[1200px]:mt-10"
        aria-label="Core strengths"
      >
        {strengths.map(({ icon: Icon, label, detail }, index) => (
          <li
            key={label}
            className={cn(
              "flex items-center gap-2.5 border-accent px-2.5 text-xs leading-[1.35] font-[550] min-[480px]:col-span-2 min-[480px]:justify-center min-[480px]:gap-3 min-[480px]:text-[15px] min-[960px]:col-span-1 min-[960px]:text-sm min-[1200px]:gap-5 min-[1200px]:px-[15px] min-[1200px]:text-[17px]",
              index % 2 === 1 && "border-l",
              index > 0 && "min-[480px]:border-l",
              index === 3 &&
                "min-[480px]:max-[960px]:col-start-2 min-[480px]:max-[960px]:border-l-0",
              index === strengths.length - 1 &&
                "col-span-full justify-center min-[480px]:col-span-2 min-[960px]:col-span-1",
            )}
          >
            <Icon
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-7 shrink-0 text-brand-clay min-[480px]:size-[30px] min-[1200px]:size-9"
            />
            <span>{label}{detail && <><br />{detail}</>}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /** animation delay in ms */
  delay?: number;
  /** "inView" for scroll reveal, "mount" for immediate (hero) reveal */
  trigger?: "inView" | "mount";
};

export function Reveal({
  className,
  delay = 0,
  trigger = "inView",
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  React.useEffect(() => {
    if (reduceMotion) {
      setShown(true);
      return;
    }

    if (trigger === "mount") {
      const t = window.setTimeout(() => {
        requestAnimationFrame(() => setShown(true));
      }, 60);
      return () => window.clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setShown(true));
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -14% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, trigger]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transform-gpu will-change-transform transition-[opacity,transform] duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[7px]",
        className
      )}
      {...props}
    />
  );
}

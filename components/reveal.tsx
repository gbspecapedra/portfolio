"use client";

import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  /** animation delay in ms */
  delay?: number;
  /** "inView" for scroll reveal, "mount" for immediate (hero) reveal */
  trigger?: "inView" | "mount";
};

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function Reveal({
  children,
  delay = 0,
  trigger = "inView",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);
  const reduceMotion = React.useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );

  React.useEffect(() => {
    if (reduceMotion) return;

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
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, trigger]);

  const visibility =
    shown || reduceMotion
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-[7px]";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: reduceMotion ? "0ms" : `${delay}ms` }}
      className={`transform-gpu will-change-transform transition-[opacity,transform] duration-950 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${visibility}`}
    >
      {children}
    </div>
  );
}

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export function HeroSection() {
  return (
    <section className="space-y-6">
      <Reveal trigger="mount" delay={0}>
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[color:var(--signature)]" />
          Available for Frontend roles • React • Next.js • TypeScript
        </div>
      </Reveal>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        <Reveal trigger="mount" delay={240} className="inline-block">
          <span className="inline-block">UX-driven</span>
        </Reveal>{" "}
        <Reveal trigger="mount" delay={520} className="inline-block">
          <span className="text-gradient">Front-End Engineer</span>
        </Reveal>
      </h1>

      <Reveal trigger="mount" delay={760}>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build fast, accessible, and maintainable web products. Strong UI
          systems, thoughtful interactions, and clean architecture.
        </p>
      </Reveal>

      <Reveal trigger="mount" delay={980}>
        <div className="flex flex-wrap gap-2">
          <Badge className="badge-sig">React</Badge>
          <Badge className="badge-sig">Next.js</Badge>
          <Badge className="badge-sig">TypeScript</Badge>
          <Badge className="badge-sig">UI Engineering</Badge>
        </div>
      </Reveal>

      <Reveal trigger="mount" delay={1200}>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild className="btn-sig">
            <a href="#projects">View projects</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

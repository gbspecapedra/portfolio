import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-20">
      <Reveal trigger="inView" delay={0}>
        <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Short timeline goes here (we&apos;ll refine next).
        </p>
      </Reveal>
    </section>
  );
}

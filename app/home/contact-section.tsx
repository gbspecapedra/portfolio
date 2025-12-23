import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="pt-20">
      <Reveal trigger="inView" delay={0}>
        <h2 className="text-xl font-semibold sm:text-2xl">Let&apos;s talk</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Email me at{" "}
          <a
            href="mailto:you@email.com"
            className="underline underline-offset-4 hover:text-[color:var(--signature)]"
          >
            you@email.com
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}

import { contactInfo } from "@/data/contact-info";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyEmailButton } from "@/components/copy-email-button";

export function ContactSection() {
  const { email, location, availability, linkedinUrl, githubUrl } = contactInfo;

  const outlineHover =
    "border-foreground/15 bg-background/40 hover:bg-foreground/10 hover:border-foreground/30 " +
    "dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/30 transition-colors";

  return (
    <section id="contact" className="pt-20">
      <Reveal trigger="inView" delay={0}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Let&apos;s talk
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              If you&apos;re hiring, I can jump in quickly and deliver polished
              UI with strong engineering fundamentals.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{availability}</Badge>
            <Badge variant="secondary">{location}</Badge>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Primary CTA */}
        <Reveal trigger="inView" delay={140}>
          <Card className="card-sig">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Preferred contact
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${email}`}
                      className="text-base font-semibold underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/50 hover:text-[color:var(--signature)] transition-colors"
                    >
                      {email}
                    </a>

                    <CopyEmailButton email={email} />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    For interviews, take-homes, or to talk about a role and what
                    you need shipped.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild className="btn-sig">
                    <a href={`mailto:${email}?subject=Let%27s%20talk`}>
                      Email me
                    </a>
                  </Button>

                  <Button asChild variant="outline" className={outlineHover}>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open LinkedIn profile"
                    >
                      LinkedIn
                    </a>
                  </Button>

                  <Button asChild variant="outline" className={outlineHover}>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open GitHub profile"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        {/* Secondary: what you can help with */}
        <Reveal trigger="inView" delay={260}>
          <Card className="card-sig">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    What I&apos;m great at
                  </p>
                  <h3 className="text-base font-semibold">
                    UI that feels premium and stays maintainable
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I care about clarity, accessibility, and performance.
                    I&apos;m comfortable shaping requirements and making
                    tradeoffs.
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--signature)]" />
                    Design systems + component architecture
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--signature)]" />
                    Complex flows: validation, edge cases, UX states
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--signature)]" />
                    Performance, a11y, and clean refactors
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild variant="secondary">
                    <Link href="/#projects">View projects</Link>
                  </Button>

                  <Button asChild variant="outline" className={outlineHover}>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

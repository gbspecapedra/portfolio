import { contactInfo } from "@/developer/data/contact-info";
import Link from "next/link";

import { Reveal } from "@/developer/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyEmailButton } from "@/developer/components/copy-email-button";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { NavButton } from "@/developer/components/navigation/nav-button";

export function ContactSection() {
  const { email, location, availability, linkedinUrl, githubUrl, resumeUrl } =
    contactInfo;

  const outlineHover =
    "border-foreground/15 bg-background/40 hover:bg-foreground/10 hover:border-foreground/35 " +
    "dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/35 transition-colors";

  return (
    <section id="contact" className="pt-20">
      <Reveal trigger="inView" delay={0}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Let&apos;s talk
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Interested in working together or discussing a frontend challenge?
              I&apos;m always open to thoughtful conversations about products,
              UX, and engineering tradeoffs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {availability ? (
              <Badge variant="secondary">{availability}</Badge>
            ) : null}
            {location ? <Badge variant="secondary">{location}</Badge> : null}
            <Badge className="badge-sig">PST</Badge>
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
                    For interviews, take-homes, or aligning on what needs to
                    ship next.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild className="btn-sig">
                    <a
                      href={`mailto:${email}?subject=${encodeURIComponent(
                        "Let's talk — Frontend role"
                      )}`}
                    >
                      Email me
                    </a>
                  </Button>

                  {linkedinUrl ? (
                    <NavButton
                      href={linkedinUrl}
                      label="LinkedIn profile"
                      icon={<SiLinkedin className="h-4 w-4" />}
                    />
                  ) : null}

                  {githubUrl ? (
                    <NavButton
                      href={githubUrl}
                      label="GitHub profile"
                      icon={<SiGithub className="h-4 w-4" />}
                    />
                  ) : null}
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

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
                    I optimize for clarity first, then performance and polish.
                    Comfortable shaping requirements and making tradeoffs.
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--signature)]" />
                    Design systems + component architecture
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--signature)]" />
                    Complex flows: validation, edge cases, UX states
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--signature)]" />
                    Performance, accessibility, and clean refactors
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild variant="secondary">
                    <Link href="/#projects">Explore projects</Link>
                  </Button>

                  {resumeUrl ? (
                    <Button asChild variant="outline" className={outlineHover}>
                      <a href={resumeUrl} target="_blank" rel="noreferrer">
                        Resume
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { groupLinks } from "@/lib/project-utils";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="hero-bg bg-background">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-20">
          {/* HERO */}
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
                I build fast, accessible, and maintainable web products. Strong
                UI systems, thoughtful interactions, and clean architecture.
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

          {/* PROJECTS */}
          <section id="projects" className="pt-20">
            <Reveal trigger="inView" delay={0}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Featured projects
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Real work, real decisions. Case studies focus on tradeoffs
                    and outcomes.
                  </p>
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="hidden sm:inline">Tip:</span>{" "}
                  <span>Start with the case study.</span>
                </div>
              </div>
            </Reveal>

            {(() => {
              const list = projects
                .filter((p) => p.card) // only projects with cards
                .sort(
                  (a, b) =>
                    Number(!!b.card?.featured) - Number(!!a.card?.featured)
                );

              const featured = list.find((p) => p.card?.featured) ?? list[0];
              const secondary = list
                .filter((p) => p.slug !== featured?.slug)
                .slice(0, 4);

              const featuredLinks = featured
                ? groupLinks(featured.links)
                : null;

              return (
                <>
                  {/* Featured (big) */}
                  {featured ? (
                    <div className="mt-6">
                      <Reveal trigger="inView" delay={140}>
                        <Card className="card-sig">
                          <CardContent className="p-6">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                              <div className="space-y-3">
                                <div className="flex flex-wrap items-center gap-2">
                                  <Badge className="badge-sig">
                                    {featured.card?.eyebrow ?? "Featured"}
                                  </Badge>

                                  {(featured.card?.tech ?? featured.tags)
                                    .slice(0, 3)
                                    .map((t) => (
                                      <Badge key={t} variant="secondary">
                                        {t}
                                      </Badge>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold sm:text-xl">
                                  {featured.title}
                                </h3>

                                <p className="max-w-2xl text-sm text-muted-foreground">
                                  {featured.card?.pitch ?? featured.subtitle}
                                </p>

                                {featured.card?.highlights?.length ? (
                                  <div className="flex flex-wrap gap-2 pt-1">
                                    {featured.card.highlights
                                      .slice(0, 3)
                                      .map((h) => (
                                        <Badge
                                          key={h}
                                          variant="outline"
                                          className="border-foreground/10"
                                        >
                                          {h}
                                        </Badge>
                                      ))}
                                  </div>
                                ) : null}
                              </div>

                              <div className="flex gap-2 sm:flex-wrap sm:justify-end">
                                <Button asChild variant="secondary">
                                  <a href={`/projects/${featured.slug}`}>
                                    Case
                                  </a>
                                </Button>

                                {featuredLinks?.liveDemo ? (
                                  <Button
                                    asChild
                                    variant="outline"
                                    className="border-foreground/10"
                                  >
                                    <a
                                      href={featuredLinks.liveDemo}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Live
                                    </a>
                                  </Button>
                                ) : null}

                                {featuredLinks?.github ? (
                                  <Button
                                    asChild
                                    variant="outline"
                                    className="border-foreground/10"
                                  >
                                    <a
                                      href={featuredLinks.github}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Code
                                    </a>
                                  </Button>
                                ) : null}

                                {featuredLinks?.figma ? (
                                  <Button
                                    asChild
                                    variant="outline"
                                    className="border-foreground/10"
                                  >
                                    <a
                                      href={featuredLinks.figma}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Figma
                                    </a>
                                  </Button>
                                ) : null}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Reveal>
                    </div>
                  ) : null}

                  {/* Secondary grid */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {secondary.map((p, idx) => {
                      const links = groupLinks(p.links);

                      return (
                        <Reveal
                          key={p.slug}
                          trigger="inView"
                          delay={260 + idx * 180}
                        >
                          <Card className="card-sig">
                            <CardContent className="p-5">
                              <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                  {(p.card?.tech ?? p.tags)
                                    .slice(0, 3)
                                    .map((t) => (
                                      <Badge key={t} variant="secondary">
                                        {t}
                                      </Badge>
                                    ))}
                                </div>

                                <div>
                                  <h3 className="font-semibold">{p.title}</h3>
                                  <p className="mt-1 text-sm text-muted-foreground">
                                    {p.card?.pitch ?? p.subtitle}
                                  </p>
                                </div>

                                {p.card?.highlights?.[0] ? (
                                  <div className="flex flex-wrap gap-2">
                                    <Badge
                                      variant="outline"
                                      className="border-foreground/10"
                                    >
                                      {p.card.highlights[0]}
                                    </Badge>
                                  </div>
                                ) : null}

                                <div className="flex flex-wrap gap-2 pt-1">
                                  <Button asChild variant="secondary" size="sm">
                                    <a href={`/projects/${p.slug}`}>Case</a>
                                  </Button>

                                  {links.liveDemo ? (
                                    <Button
                                      asChild
                                      variant="outline"
                                      size="sm"
                                      className="border-foreground/10"
                                    >
                                      <a
                                        href={links.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Live
                                      </a>
                                    </Button>
                                  ) : null}

                                  {links.github ? (
                                    <Button
                                      asChild
                                      variant="outline"
                                      size="sm"
                                      className="border-foreground/10"
                                    >
                                      <a
                                        href={links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Code
                                      </a>
                                    </Button>
                                  ) : null}

                                  {links.figma ? (
                                    <Button
                                      asChild
                                      variant="outline"
                                      size="sm"
                                      className="border-foreground/10"
                                    >
                                      <a
                                        href={links.figma}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Figma
                                      </a>
                                    </Button>
                                  ) : null}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Reveal>
                      );
                    })}
                  </div>
                </>
              );
            })()}
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="pt-20">
            <Reveal trigger="inView" delay={0}>
              <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Short timeline goes here (we&apos;ll refine next).
              </p>
            </Reveal>
          </section>

          {/* CONTACT */}
          <section id="contact" className="pt-20">
            <Reveal trigger="inView" delay={0}>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Let&apos;s talk
              </h2>
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
        </div>
      </main>

      <Footer />
    </>
  );
}

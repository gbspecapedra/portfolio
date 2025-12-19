import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

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
              <h2 className="text-xl font-semibold sm:text-2xl">
                Featured projects
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A few highlights — case studies coming next.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3].map((i) => (
                <Reveal key={i} trigger="inView" delay={160 + i * 140}>
                  <Card className="card-sig">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-2">
                          <p className="font-medium">Project {i}</p>
                          <p className="text-sm text-muted-foreground">
                            One-line impact statement. What problem it solves
                            and why it matters.
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <Badge variant="secondary">Next.js</Badge>
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">UI</Badge>
                          </div>
                        </div>

                        <Badge
                          variant="outline"
                          className="border-foreground/10"
                        >
                          Case
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
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

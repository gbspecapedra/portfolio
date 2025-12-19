import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="hero-bg bg-background">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-20">
          {/* HERO */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--signature)]" />
              Available for Frontend roles • React • Next.js • TypeScript
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              UX-driven{" "}
              <span className="text-gradient">Front-End Engineer</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build fast, accessible, and maintainable web products. Strong UI
              systems, thoughtful interactions, and clean architecture.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="badge-sig">React</Badge>
              <Badge className="badge-sig">Next.js</Badge>
              <Badge className="badge-sig">TypeScript</Badge>
              <Badge className="badge-sig">UI Engineering</Badge>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="btn-sig">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="pt-20">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Featured projects
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A few highlights — case studies coming next.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="card-sig">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <p className="font-medium">Project {i}</p>
                        <p className="text-sm text-muted-foreground">
                          One-line impact statement. What problem it solves and
                          why it matters.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <Badge variant="secondary">Next.js</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">UI</Badge>
                        </div>
                      </div>

                      <Badge variant="outline" className="border-foreground/10">
                        Case
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="pt-20">
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Short timeline goes here (we’ll refine next).
            </p>
          </section>

          {/* CONTACT */}
          <section id="contact" className="pt-20">
            <h2 className="text-xl font-semibold sm:text-2xl">Let’s talk</h2>
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
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

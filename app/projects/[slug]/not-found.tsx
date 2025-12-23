import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="hero-bg bg-background">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <p className="mt-2 text-muted-foreground">
            This project page doesn&apos;t exist yet.
          </p>
          <div className="mt-6">
            <Button asChild className="btn-sig">
              <Link href="/#projects">Back to projects</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

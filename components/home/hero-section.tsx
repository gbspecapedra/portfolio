import Image from "next/image";
import {
  Accessibility, ArrowRight, Grid2X2, Layers, UsersRound, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/images/hero-image.png";
import styles from "./hero-section.module.css";

const strengths = [
  { icon: Layers, label: "UI Architecture" },
  { icon: Accessibility, label: "Accessibility", detail: "(WCAG/ARIA)" },
  { icon: Grid2X2, label: "Design Systems" },
  { icon: Zap, label: "Performance &", detail: "Scalability" },
  { icon: UsersRound, label: "Cross-functional", detail: "Collaboration" },
];

export function HeroSection() {
  return (
    <section id="about" aria-labelledby="hero-heading" className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Frontend Engineer</p>
          <h1 id="hero-heading" className={styles.heading}>
            <span>Building reliable, accessible,</span>{" "}
            <span>and scalable interfaces</span>{" "}
            <span>with <span className={styles.underline}>clarity</span> and care.</span>
          </h1>
          <p className={styles.description}>
            I translate complex product requirements into maintainable frontend
            systems, collaborating closely with designers, product managers, and
            backend engineers. My focus is on accessibility, UI architecture, and
            design systems that scale with the product and the team.
          </p>
          <div className={styles.actions}>
            <Button asChild size="lg" className={styles.primaryAction}>
              <a href="#projects">Explore case studies <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className={styles.secondaryAction}>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            src={heroImage}
            alt=""
            className={styles.heroImage}
            sizes="(max-width: 727px) calc(100vw - 32px), (max-width: 959px) 680px, (max-width: 1455px) 59vw, 825px"
            priority
          />
        </div>
      </div>
      <ul className={styles.strengths} aria-label="Core strengths">
        {strengths.map(({ icon: Icon, label, detail }) => (
          <li key={label}>
            <Icon aria-hidden="true" strokeWidth={1.5} />
            <span>{label}{detail && <><br />{detail}</>}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

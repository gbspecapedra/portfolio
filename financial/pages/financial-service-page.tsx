import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon, Quote } from "lucide-react";

import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialHero } from "@/financial/components/financial-hero";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialQuestionAccordionList } from "@/financial/components/financial-question-accordion-list";
import { FinancialFinalCtaBanner } from "../components/financial-final-cta-banner";
import { ReactNode } from "react";

type ServiceHighlight = {
  label: string;
  value?: string;
  description: string;
  icon: LucideIcon;
};

type ServiceIconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServiceImage = {
  src: string;
  alt: string;
  className?: string;
};

type ServiceCoverageType = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

type ServiceProcessStep = {
  title: string;
  description: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

type ServiceGuide = {
  title: string;
  excerpt: string;
  href: string;
  image: ServiceImage;
};

export type FinancialServicePageContent = {
  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    highlights?: ServiceHighlight[];
    values?: ServiceHighlight[];
    primaryButtonLabel?: string;
    primaryButtonHref?: string;
    secondaryButtonLabel?: string;
    secondaryButtonHref?: string;
  };
  overview: {
    title: string;
    description: string;
    audience: {
      title: string;
      description?: string;
      items: ServiceIconItem[];
    };
  };
  feature: {
    image: ServiceImage;
    title: string;
    description: string;
    quote?: string;
    attribution?: string;
  };
  support: {
    title: string;
    description?: string;
    items: ServiceIconItem[];
  };
  coverageTypes: {
    title: string;
    description: string;
    items: ServiceCoverageType[];
    resourceLink?: {
      label: string;
      href: string;
    };
  };
  planning: {
    process: {
      title: string;
      description?: string;
      steps: ServiceProcessStep[];
    };
    factors: {
      title: string;
      description?: string;
      items: ServiceIconItem[];
    };
  };
  advisor: {
    image: ServiceImage;
    title: string;
    description: string;
    bullets: string[];
  };
  faqs: {
    title: string;
    items: ServiceFaq[];
  };
  relatedGuides?: {
    eyebrow?: string;
    title: string;
    description?: string;
    action?: {
      label: string;
      href: string;
    };
    items: ServiceGuide[];
  };
  cta?: {
    title?: string;
    subtitle?: string;
    primaryButtonLabel?: string;
    primaryButtonHref?: string;
    secondaryButtonLabel?: string;
    secondaryButtonHref?: string;
  };
};

type FinancialServicePageProps = {
  content: FinancialServicePageContent;
  heroPrimaryButton?: (props: {
    className: string;
    children: ReactNode;
  }) => ReactNode;
  heroSecondaryButton?: (props: {
    className: string;
    children: ReactNode;
  }) => ReactNode;
};

export function FinancialServicePage({
  content,
  heroPrimaryButton,
  heroSecondaryButton,
}: FinancialServicePageProps) {
  const {
    hero,
    overview,
    feature,
    support,
    coverageTypes,
    planning,
    advisor,
    faqs,
    relatedGuides,
    cta,
  } = content;

  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main id="financial-main" tabIndex={-1}>
        <FinancialHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
              {hero.description}
            </p>
          }
          highlights={hero.highlights}
          values={hero.values}
          primaryButtonLabel={hero.primaryButtonLabel}
          primaryButtonHref={hero.primaryButtonHref}
          primaryButton={heroPrimaryButton}
          secondaryButtonLabel={
            hero.secondaryButtonLabel ?? "Book a Free Consultation"
          }
          secondaryButtonHref={hero.secondaryButtonHref}
          secondaryButton={heroSecondaryButton}
        />

        <section
          id="service-details"
          aria-labelledby="service-overview-title"
          className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="lg:border-r lg:border-[#dfe6dc] lg:pr-9">
              <h2
                id="service-overview-title"
                className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl"
              >
                {overview.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[#617087]">
                {overview.description}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl">
                {overview.audience.title}
              </h2>
              {overview.audience.description && (
                <p className="mt-2 text-base leading-7 text-[#617087]">
                  {overview.audience.description}
                </p>
              )}
              <IconGrid items={overview.audience.items} columns="five" />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="service-feature-title"
          className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <div className="lg:border-r lg:border-[#dfe6dc] lg:pr-9">
              <h2
                id="service-feature-title"
                className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl"
              >
                {feature.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[#617087]">
                {feature.description}
              </p>

              {feature.quote && (
                <figure className="mt-5 rounded-md bg-[#f3f0e8] p-5">
                  <Quote className="size-7 text-[#526f46]" aria-hidden="true" />
                  <blockquote className="mt-2 font-serif text-xl font-semibold leading-snug text-[#526f46]">
                    {feature.quote}
                  </blockquote>
                  {feature.attribution && (
                    <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#755d31]">
                      {feature.attribution}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl">
                {support.title}
              </h2>
              {support.description && (
                <p className="mt-2 text-base leading-7 text-[#617087]">
                  {support.description}
                </p>
              )}
              <IconGrid items={support.items} columns="three" />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="service-coverage-types-title"
          className="border-b border-[#dfe6dc] bg-[#f8faf6] px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="flex flex-col justify-center">
              <h2
                id="service-coverage-types-title"
                className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl"
              >
                {coverageTypes.title}
              </h2>
              <p className="mt-2 text-base leading-7 text-[#617087]">
                {coverageTypes.description}
              </p>
            </div>

            <div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {coverageTypes.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-md border border-[#dfe6dc] bg-white p-5 shadow-[0_10px_28px_rgba(16,33,59,0.04)]"
                    >
                      <Icon
                        className="size-9 stroke-[1.8] text-[#526f46]"
                        aria-hidden="true"
                      />
                      <h3 className="mt-4 font-serif text-xl font-semibold leading-tight text-[#10213b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#617087]">
                        {item.description}
                      </p>
                      <ul className="mt-4 grid gap-2 text-sm leading-5 text-[#617087]">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0 text-[#526f46]"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>

              {coverageTypes.resourceLink && (
                <Link
                  href={coverageTypes.resourceLink.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf6]"
                >
                  {coverageTypes.resourceLink.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="service-coverage-details-title"
          className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="lg:border-r lg:border-[#dfe6dc] lg:pr-9">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl">
                {planning.process.title}
              </h2>
              {planning.process.description && (
                <p className="mt-2 text-base leading-7 text-[#617087]">
                  {planning.process.description}
                </p>
              )}
              <div className="mt-5 grid gap-4">
                {planning.process.steps.map((step, index) => (
                  <article key={step.title} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#526f46] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold leading-tight text-[#10213b]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#617087]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div>
                <h2
                  id="service-coverage-details-title"
                  className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl"
                >
                  {planning.factors.title}
                </h2>
                {planning.factors.description && (
                  <p className="mt-2 text-base leading-7 text-[#617087]">
                    {planning.factors.description}
                  </p>
                )}
                <IconGrid items={planning.factors.items} columns="two" />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="service-advisor-title"
          className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="grid gap-5 sm:grid-cols-[12rem_1fr] sm:items-start">
              <div>
                <div className="relative min-h-56 overflow-hidden rounded-md bg-[#e8eee7] sm:min-h-48">
                  <Image
                    src={advisor.image.src}
                    alt={advisor.image.alt}
                    fill
                    sizes="(min-width: 1024px) 11rem, 100vw"
                    className={`object-cover ${advisor.image.className ?? ""}`}
                  />
                </div>
                <h2
                  id="service-advisor-title"
                  className="font-serif text-3xl font-semibold leading-tight text-[#10213b] mt-4"
                >
                  {advisor.title}
                </h2>
              </div>
              <div>
                <p className="text-base leading-7 text-[#617087]">
                  {advisor.description}
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-5 text-[#617087]">
                  {advisor.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-[#526f46]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl">
                {faqs.title}
              </h2>
              <div className="mt-4">
                <FinancialQuestionAccordionList
                  items={faqs.items}
                  idPrefix="service-faq"
                />
              </div>
            </div>
          </div>
        </section>

        {relatedGuides && <RelatedGuidesSection guides={relatedGuides} />}

        <FinancialFinalCtaBanner title={cta?.title} subtitle={cta?.subtitle} />
      </main>
      <FinancialFooter />
    </div>
  );
}

function IconGrid({
  items,
  columns,
}: {
  items: ServiceIconItem[];
  columns: "two" | "three" | "five";
}) {
  const gridClass =
    columns === "five"
      ? "sm:grid-cols-3 lg:grid-cols-5"
      : columns === "three"
        ? "sm:grid-cols-2 xl:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className={`mt-5 grid gap-3 ${gridClass}`}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="rounded-md border border-[#dfe6dc] bg-white p-4 text-center shadow-[0_8px_24px_rgba(16,33,59,0.035)]"
          >
            <Icon
              className="mx-auto size-8 stroke-[1.8] text-[#526f46]"
              aria-hidden="true"
            />
            <h3 className="mt-2 text-sm font-semibold leading-tight text-[#10213b]">
              {item.title}
            </h3>
            <p className="mt-1 text-xs leading-5 text-[#617087]">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function RelatedGuidesSection({
  guides,
}: {
  guides: NonNullable<FinancialServicePageContent["relatedGuides"]>;
}) {
  return (
    <section
      aria-labelledby="service-guides-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {guides.eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
                {guides.eyebrow}
              </p>
            )}
            <h2
              id="service-guides-title"
              className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl"
            >
              {guides.title}
            </h2>
            {guides.description && (
              <p className="mt-2 text-base leading-7 text-[#617087]">
                {guides.description}
              </p>
            )}
          </div>

          {guides.action && (
            <Link
              href={guides.action.href}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {guides.action.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {guides.items.map((guide) => (
            <article
              key={guide.title}
              className="group grid overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_10px_28px_rgba(16,33,59,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_18px_42px_rgba(16,33,59,0.07)] sm:grid-cols-[10rem_1fr]"
            >
              <div className="relative min-h-40 bg-[#e8eee7] sm:min-h-full">
                <Image
                  src={guide.image.src}
                  alt={guide.image.alt}
                  fill
                  sizes="(min-width: 1024px) 160px, (min-width: 640px) 10rem, 100vw"
                  className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                    guide.image.className ?? ""
                  }`}
                />
              </div>

              <div className="flex min-w-0 flex-col p-4">
                <h3 className="text-base font-semibold leading-snug text-[#10213b]">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#617087]">
                  {guide.excerpt}
                </p>
                <Link
                  href={guide.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-3 text-sm font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Read more about ${guide.title}`}
                >
                  Read More
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import {
  CalendarCheck,
  Headphones,
  Quote,
  ShieldCheck,
} from "lucide-react";

import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialHero } from "@/financial/components/financial-hero";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialTravelQuoteSelector } from "@/financial/components/get-a-quote/financial-travel-quote-selector";
import ConsultationBookingButton from "../components/calendar/consultation-booking-button";

export function FinancialTravelInsuranceQuotePage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main id="financial-main" tabIndex={-1}>
        <FinancialHero
          eyebrow="Travel Insurance"
          title="Find the Travel Insurance Option That Fits Your Trip"
          description={
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#10213b] sm:text-lg">
              Choose the type of coverage you need and continue directly to an
              insurer&apos;s secure quote system. It&apos;s quick, easy and a
              great way to compare your options.
            </p>
          }
          values={[
            {
              label: "Trusted insurers",
              description: "Compare recognizable travel coverage providers.",
              icon: ShieldCheck,
            },
            {
              label: "Get a quote online",
              description: "Continue to a secure insurer quote experience.",
              icon: CalendarCheck,
            },
            {
              label: "Support when you need it",
              description: "Gisele can help you choose with more confidence.",
              icon: Headphones,
            },
          ]}
          isPrimaryButtonVisible={false}
          isSecondaryButtonVisible={false}
          isSupportingDescriptionVisible={false}
        />

        <FinancialTravelQuoteSelector />
        <AdvisorHelpSection />
        <TravelConfidenceBanner />
      </main>
      <FinancialFooter />
    </div>
  );
}

function AdvisorHelpSection() {
  return (
    <section className="bg-white px-4 pb-9 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-md border border-[#dfe6dc] bg-[#f8faf6] shadow-[0_18px_45px_rgba(16,33,59,0.06)] lg:grid-cols-[0.85fr_1.95fr_0.9fr]">
        <div className="relative min-h-72 bg-[#e7eee5] lg:min-h-full">
          <Image
            src="/financial/headshot.png"
            alt="Gisele Pecapedra"
            fill
            sizes="(min-width: 1024px) 22rem, 100vw"
            className="object-cover object-[center_18%]"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d314a]">
            Prefer help choosing?
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl">
            Talk to Gisele
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#526175]">
            Not sure which travel insurance option is right for you? I&apos;m
            here to help. I can answer your questions, explain the differences
            and help you choose the coverage that fits your trip and your
            situation.
          </p>
          <ConsultationBookingButton className="mt-6 min-h-12 w-fit items-center justify-center whitespace-nowrap rounded-md bg-[#526f46] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(82,111,70,0.2)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-white xl:px-6">
            Book a Free Consultation
          </ConsultationBookingButton>
        </div>

        <figure className="relative flex min-h-64 flex-col justify-center border-t border-[#dfe6dc] px-7 py-8 lg:border-l lg:border-t-0">
          <Quote className="size-9 fill-[#8aa17f] text-[#8aa17f]" />
          <blockquote className="mt-4 text-base italic leading-7 text-[#526175]">
            Travel with confidence, knowing you&apos;re protected along the way.
          </blockquote>
          <figcaption className="mt-4 text-sm text-[#617087]">
            - Gisele Pecapedra
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function TravelConfidenceBanner() {
  return (
    <section
      aria-labelledby="travel-confidence-title"
      className="relative overflow-hidden bg-[#0d314a] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16"
    >
      <Image
        src="/financial/travel-insurance-banner.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[40%_center]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,49,74,0.9)_0%,rgba(13,49,74,0.72)_48%,rgba(13,49,74,0.24)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/78 sm:text-sm">
          Travel Insurance
        </p>
        <h2
          id="travel-confidence-title"
          className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Explore the World with Confidence
        </h2>
        <p className="mt-3 max-w-3xl text-base font-medium leading-7 text-white/86 sm:text-lg">
          The right coverage lets you focus on what matters most, making great
          memories.
        </p>
        <p
          className="pointer-events-none absolute right-4 top-2 hidden rotate-[-8deg] font-[cursive] text-3xl italic leading-tight text-white/86 lg:block"
          aria-hidden="true"
        >
          Same today
          <span className="ml-7 block">Further tomorrow</span>
        </p>
      </div>
    </section>
  );
}

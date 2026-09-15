"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Info,
  Luggage,
  PlaneTakeoff,
  ShieldCheck,
  User,
  UsersRound,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TravelSituationId =
  | "canadians-abroad"
  | "visitors-to-canada"
  | "super-visa"
  | "students"
  | "seniors"
  | "frequent-travellers";

type TravelSituation = {
  id: TravelSituationId;
  title: string;
  shortLabel: string;
  description: string;
  icon: typeof PlaneTakeoff;
};

type Provider = {
  name: string;
  description: string;
  features: string[];
  href: string;
  brand: "manulife" | "sun-life" | "tugo" | "blue-cross";
  availability: TravelSituationId[];
};

const travelSituations: TravelSituation[] = [
  {
    id: "canadians-abroad",
    title: "Canadians Travelling Abroad",
    shortLabel: "Canadians travelling abroad",
    description: "Trips outside Canada",
    icon: PlaneTakeoff,
  },
  {
    id: "visitors-to-canada",
    title: "Visitors to Canada",
    shortLabel: "visitors to Canada",
    description: "Family and friends visiting Canada",
    icon: UsersRound,
  },
  {
    id: "super-visa",
    title: "Super Visa",
    shortLabel: "Super Visa visitors",
    description: "For parents and grandparents",
    icon: ShieldCheck,
  },
  {
    id: "students",
    title: "Students",
    shortLabel: "students",
    description: "Study, travel and exchange programs",
    icon: GraduationCap,
  },
  {
    id: "seniors",
    title: "Seniors",
    shortLabel: "seniors",
    description: "Travel at any age",
    icon: User,
  },
  {
    id: "frequent-travellers",
    title: "Frequent Travellers",
    shortLabel: "frequent travellers",
    description: "Multi-trip and annual plans",
    icon: Luggage,
  },
];

const providers: Provider[] = [
  {
    name: "Manulife",
    description:
      "Comprehensive travel insurance with a range of plans for different types of trips.",
    features: [
      "Single or multi-trip plans",
      "Emergency medical coverage",
      "Trip cancellation and interruption",
    ],
    href: "https://www.manulifetravelinsurance.ca/mfti/quote/apply.html",
    brand: "manulife",
    availability: [
      "canadians-abroad",
      "visitors-to-canada",
      "super-visa",
      "students",
      "seniors",
      "frequent-travellers",
    ],
  },
  {
    name: "Sun Life",
    description:
      "Travel insurance options through Sun Life's trusted travel partner, TuGo.",
    features: [
      "Emergency medical coverage",
      "Trip interruption",
      "Options for frequent travellers",
    ],
    href: "https://www.sunlife.ca/en/insurance/travel/",
    brand: "sun-life",
    availability: [
      "canadians-abroad",
      "visitors-to-canada",
      "super-visa",
      "students",
      "seniors",
      "frequent-travellers",
    ],
  },
  {
    name: "TuGo",
    description:
      "Travel insurance designed for Canadians, with easy online quote and purchase options.",
    features: [
      "Single or multi-trip plans",
      "COVID-19 coverage options",
      "24/7 emergency assistance",
    ],
    href: "https://travellers.tugo.com/travel-with-tugo/",
    brand: "tugo",
    availability: [
      "canadians-abroad",
      "visitors-to-canada",
      "super-visa",
      "students",
      "seniors",
      "frequent-travellers",
    ],
  },
  {
    name: "Blue Cross",
    description:
      "Travel insurance with flexible options and added benefits for different travellers.",
    features: [
      "Emergency medical coverage",
      "Trip cancellation and interruption",
      "Options for snowbirds and frequent travellers",
    ],
    href: "https://travelinsurance.bluecross.ca/",
    brand: "blue-cross",
    availability: [
      "canadians-abroad",
      "visitors-to-canada",
      "super-visa",
      "students",
      "seniors",
      "frequent-travellers",
    ],
  },
];

export function FinancialTravelQuoteSelector() {
  const [selectedSituation, setSelectedSituation] =
    useState<TravelSituationId>("canadians-abroad");

  const selected = travelSituations.find(
    (situation) => situation.id === selectedSituation,
  );

  const visibleProviders = useMemo(
    () =>
      providers.filter((provider) =>
        provider.availability.includes(selectedSituation),
      ),
    [selectedSituation],
  );

  return (
    <section
      aria-labelledby="travel-quote-selector-title"
      className="bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-4">
          <StepMarker>1</StepMarker>
          <div>
            <h2
              id="travel-quote-selector-title"
              className="font-serif text-2xl font-semibold leading-tight text-[#10213b] sm:text-3xl"
            >
              Select your travel situation
            </h2>
            <p className="mt-2 max-w-4xl text-base leading-7 text-[#617087]">
              Choose the option that best describes your trip. We&apos;ll then
              show you the available insurance providers.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {travelSituations.map((situation) => {
            const Icon = situation.icon;
            const isSelected = situation.id === selectedSituation;

            return (
              <button
                key={situation.id}
                type="button"
                onClick={() => setSelectedSituation(situation.id)}
                aria-pressed={isSelected}
                className={`group flex min-h-44 flex-col items-center justify-start rounded-md border bg-white p-5 text-center shadow-[0_12px_30px_rgba(16,33,59,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#9fb09a] hover:shadow-[0_18px_44px_rgba(16,33,59,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 ${
                  isSelected
                    ? "border-[#0d314a] bg-[#f0f7fb] shadow-[0_16px_40px_rgba(13,49,74,0.12)]"
                    : "border-[#dfe6dc]"
                }`}
              >
                <Icon
                  className={`size-10 stroke-[1.9] ${
                    isSelected ? "text-[#0d314a]" : "text-[#10213b]"
                  }`}
                  aria-hidden="true"
                />
                <span className="mt-4 text-base font-semibold leading-tight text-[#10213b]">
                  {situation.title}
                </span>
                <span className="mt-3 text-sm leading-5 text-[#617087]">
                  {situation.description}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-11 flex gap-4">
          <StepMarker>2</StepMarker>
          <div>
            <h2 className="font-serif text-2xl font-semibold leading-tight text-[#10213b] sm:text-3xl">
              Compare providers and get a quote
            </h2>
            <p className="mt-2 text-base leading-7 text-[#617087]">
              Some of the trusted insurers available for{" "}
              {selected?.shortLabel ?? "your trip"}:
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {visibleProviders.map((provider) => (
            <ProviderCard key={provider.name} provider={provider} />
          ))}
        </div>

        <div className="mt-5 flex gap-3 rounded-md bg-[#eef4f7] px-5 py-4 text-sm leading-6 text-[#10213b]">
          <Info
            className="mt-0.5 size-5 shrink-0 text-[#526f46]"
            aria-hidden="true"
          />
          <p>
            You&apos;ll be redirected to the insurer&apos;s secure website to
            get a quote. Pricing, eligibility, benefits and policy terms are
            determined by the insurer. Gisele may receive a referral fee from
            some insurance providers at no extra cost to you.
          </p>
        </div>
      </div>
    </section>
  );
}

function StepMarker({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#d8e6d2] text-lg font-semibold text-[#10213b]">
      {children}
    </span>
  );
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="rounded-md border-[#dfe6dc] bg-white py-0 shadow-[0_16px_38px_rgba(16,33,59,0.06)]">
      <CardHeader className="px-5 pt-6">
        <ProviderLogo provider={provider} />
        <CardTitle className="mt-4 min-h-0 text-xl font-semibold leading-tight text-[#10213b]">
          {provider.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col px-5">
        <p className="text-base leading-6 text-[#526175]">
          {provider.description}
        </p>
        <ul className="mt-5 grid gap-2.5 text-sm leading-5 text-[#10213b]">
          {provider.features.map((feature) => (
            <li key={feature} className="flex gap-2.5">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 fill-[#526f46] text-white"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-6">
        <Button
          asChild
          className="min-h-12 w-full bg-[#0d314a] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(13,49,74,0.16)] hover:bg-[#09283d]"
        >
          <Link
            href={provider.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get a quote from ${provider.name}`}
          >
            Get a Quote
            <ExternalLink className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProviderLogo({ provider }: { provider: Provider }) {
  if (provider.brand === "manulife") {
    return (
      <div className="flex h-11 items-center gap-4" aria-hidden="true">
        <div className="flex gap-1">
          <span className="h-8 w-2 skew-y-[-18deg] bg-[#00a758]" />
          <span className="h-8 w-2 skew-y-[-18deg] bg-[#00a758]" />
          <span className="h-8 w-2 skew-y-[-18deg] bg-[#00a758]" />
        </div>
        <span className="text-3xl font-semibold tracking-normal text-black">
          Manulife
        </span>
      </div>
    );
  }

  if (provider.brand === "sun-life") {
    return (
      <div className="flex h-11 items-center gap-3" aria-hidden="true">
        <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#f4bd22] text-lg font-bold text-[#f4bd22]">
          S
        </span>
        <span className="text-3xl font-serif font-semibold text-[#10213b]">
          Sun Life
        </span>
      </div>
    );
  }

  if (provider.brand === "tugo") {
    return (
      <div className="flex h-11 items-center" aria-hidden="true">
        <span className="text-4xl font-bold tracking-tight text-[#27c7a8]">
          tu
        </span>
        <span className="text-4xl font-bold tracking-tight text-[#1398d2]">
          Go
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-11 items-center gap-3" aria-hidden="true">
      <span className="relative size-10 bg-[#1888d4]">
        <span className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 bg-white" />
        <span className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 bg-white" />
      </span>
      <span className="text-xl font-bold uppercase tracking-normal text-[#1888d4]">
        Blue Cross
      </span>
    </div>
  );
}

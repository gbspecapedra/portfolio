import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";

export function FinancialTravelBanner() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#dfe6dc] bg-[#0d314a]">
      <div className="relative min-h-[32rem] sm:min-h-[28rem] lg:min-h-[20rem]">
        <Image
          src="/financial/travel-insurance-banner.png"
          alt="Traveler overlooking a mountain lake"
          fill
          sizes="100vw"
          className="object-cover object-[24%_center]"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,49,74,0.18)_0%,rgba(13,49,74,0.72)_54%,rgba(13,49,74,0.9)_100%),linear-gradient(90deg,rgba(13,49,74,0.05)_0%,rgba(13,49,74,0.28)_36%,rgba(13,49,74,0.9)_68%,rgba(13,49,74,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(13,49,74,0.02)_0%,rgba(13,49,74,0.22)_38%,rgba(13,49,74,0.86)_62%,rgba(13,49,74,0.96)_100%)]"
          aria-hidden="true"
        />

        <Plane
          className="absolute right-8 top-8 hidden size-14 -rotate-12 text-white/20 sm:block lg:right-20 lg:top-10 lg:size-20"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-7xl items-end px-4 py-7 sm:min-h-[28rem] sm:px-6 sm:py-10 lg:min-h-[20rem] lg:items-center lg:justify-end lg:px-8">
          <div className="max-w-xl text-white lg:mr-48">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/76 sm:text-sm">
              Travel With Confidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
              Travelling Soon?
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-white/82 sm:text-lg">
              Get the right travel insurance for your next adventure. Whether
              you&apos;re a Canadian traveller, a visitor to Canada, or helping
              family members come here, I can help.
            </p>

            <Link
              href="/financial#contact"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-white px-6 text-base font-semibold text-[#0d314a] shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#f5f8f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d314a] sm:w-auto"
            >
              Get a Travel Insurance Quote
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>

          <p className="absolute bottom-8 right-6 hidden max-w-48 font-serif text-3xl italic leading-tight text-white/76 md:block lg:bottom-12 lg:right-14">
            Explore today. Travel with peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}

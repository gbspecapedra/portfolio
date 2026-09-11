import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinancialFinalCtaBanner() {
  return (
    <section
      id="contact"
      aria-labelledby="financial-cta-title"
      className="relative overflow-hidden border-y border-[#dfe6dc] bg-[#f6faf3]"
    >
      <Image
        src="/financial/travel-insurance-banner.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[18%_center]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.82)),linear-gradient(90deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.94)_26%,rgba(255,255,255,0.98)_50%,rgba(255,255,255,0.94)_74%,rgba(255,255,255,0.12)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="financial-cta-title"
            className="text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl"
          >
            Let&apos;s Talk About Your Financial Goals
          </h2>
          <p className="mt-2 text-base font-medium leading-7 text-[#617087] sm:text-lg">
            No pressure, no obligation, just a conversation.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/financial#contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#526f46] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.22)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book a Free Consultation
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>

          <Link
            href="/financial#contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-2 text-base font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Send Me a Message
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinancialLanguageSection() {
  return (
    <section
      id="portuguese-speaking-clients"
      className="overflow-hidden border-y border-[#dfe6dc] bg-[#f4f8f1]"
      aria-labelledby="financial-language-title"
    >
      <div className="relative">
        <Image
          src="/financial/family-guidance-banner-v2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[64%_center]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.72)),linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_44%,rgba(255,255,255,0.35)_72%,rgba(255,255,255,0.08)_100%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-center lg:px-8 lg:py-0">
          <div className="relative z-10 max-w-2xl lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f835f] sm:text-sm">
              At Your Side, In Your Language
            </p>
            <h2
              id="financial-language-title"
              className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl"
            >
              Financial Guidance in English or Portuguese
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#526175] sm:text-xl">
              Supporting Portuguese-speaking families, professionals and
              newcomers with clear, personalized advice.
            </p>
            <p className="mt-3 text-lg font-semibold leading-8 text-[#31415b] sm:text-xl">
              Atendimento em português disponível.
            </p>

            <Link
              href="/financial#contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#526f46] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.24)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Serviços em Português
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative z-10 min-h-[10rem] sm:min-h-[16rem] lg:min-h-[30rem]">
            <p className="absolute bottom-3 right-4 whitespace-nowrap font-serif text-base italic leading-tight text-[#31415b] sm:bottom-6 sm:right-8 sm:text-xl lg:bottom-16 lg:right-10 lg:text-2xl">
              Planos hoje. Mais conquistas amanhã.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

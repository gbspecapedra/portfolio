import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Languages,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const highlights = [
  {
    label: "Personalized Advice",
    description: "Solutions tailored to your needs.",
    icon: UsersRound,
  },
  {
    label: "Multilingual Provider",
    description: "Guidance without language barriers.",
    icon: ShieldCheck,
  },
  {
    label: "Based in British Columbia",
    description: "Proudly serving B.C. communities.",
    icon: MapPin,
  },
  {
    label: "Bilingual Service",
    description: "English & Portuguese.",
    icon: MessageCircle,
  },
];

export function FinancialHero() {
  return (
    <section
      aria-labelledby="financial-hero-title"
      className="overflow-hidden border-b border-[#dfe6dc] bg-[#f8faf6]"
    >
      <div className="relative bg-[#eef4f1]">
        <Image
          src="/financial/hero-vancouver-waterfront.png"
          alt="Gisele Pecapedra in front of a soft Vancouver waterfront with mountains and city towers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_center] sm:object-[58%_center] lg:object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_42%,rgba(255,255,255,0.54)_100%),linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_48%,rgba(255,255,255,0.2)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_37%,rgba(255,255,255,0.38)_58%,rgba(255,255,255,0.06)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.62))]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[42rem] max-w-7xl items-start px-4 py-10 sm:min-h-[39rem] sm:px-6 sm:py-14 lg:min-h-[39rem] lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d7442] sm:text-sm">
              Insurance & Financial Solutions
            </p>

            <h1
              id="financial-hero-title"
              className="text-4xl font-semibold leading-[1.05] tracking-normal text-[#10213b] sm:text-5xl lg:text-6xl"
            >
              Protect What You&apos;ve Built. Plan What Comes Next.
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#425169] sm:text-xl">
              Personalized insurance and financial solutions for families,
              professionals and newcomers in Canada.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#617087] sm:text-lg">
              Life insurance, critical illness coverage, travel insurance,
              education planning and other financial solutions available in
              English and Portuguese.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/financial#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#075f78] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(7,95,120,0.24)] transition-colors hover:bg-[#054e63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Book a Free Consultation
              </Link>

              <Link
                href="/financial#services"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#c8d2c3] bg-white/82 px-6 text-base font-semibold text-[#10213b] shadow-sm transition-colors hover:bg-white hover:text-[#49633f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Explore Services
                <ArrowRight
                  className="size-5 text-[#526f46]"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-[#526175] sm:flex-row sm:items-center sm:text-base">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-5 text-[#49633f]" aria-hidden="true" />
                Serving clients across British Columbia
              </span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#8d7442] sm:block" />
              <span className="inline-flex items-center gap-2">
                <Languages
                  className="size-5 text-[#49633f]"
                  aria-hidden="true"
                />
                English & Portuguese
              </span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-[6vw] z-10 hidden md:block lg:bottom-10 xl:right-[7.5vw]">
          <Image
            src="/financial/logo-signature-cropped.png"
            alt="Gisele Pecapedra, Financial Advisor"
            width={1393}
            height={451}
            sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, 15rem"
            className="h-auto w-full opacity-90"
          />
        </div>
      </div>

      <div className="bg-white/95">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex min-w-0 items-start gap-4">
                <Icon
                  className="mt-1 size-8 shrink-0 text-[#6f835f]"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-base font-semibold text-[#10213b]">
                    {item.label}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#617087]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

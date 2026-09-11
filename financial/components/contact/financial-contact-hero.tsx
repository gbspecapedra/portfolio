import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function FinancialContactHero() {
  return (
    <section
      aria-labelledby="financial-contact-title"
      className="relative isolate overflow-hidden border-b border-[#dfe6dc] bg-[#f5f8f5]"
    >
      <Image
        src="/financial/hero-vancouver-waterfront.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] sm:object-[68%_center] lg:object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.88)_48%,rgba(255,255,255,0.7)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_35%,rgba(255,255,255,0.5)_51%,rgba(255,255,255,0.08)_77%,rgba(255,255,255,0.72)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.72))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto min-h-[36rem] max-w-7xl px-4 pb-8 pt-12 lg:min-h-[42rem] sm:px-6 sm:pt-16 lg:px-8 lg:pt-14">
        <div className="max-w-[48rem]">
          <h1
            id="financial-contact-title"
            className="max-w-[11ch] font-serif text-5xl leading-[0.95] text-[#10213b] sm:text-6xl lg:text-[5.75rem]"
          >
            Let&apos;s Start the Conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526175] sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
            I&apos;m Gisele Pecapedra, and I help families, professionals and
            newcomers explore insurance and financial solutions with clarity and
            confidence. Whether you&apos;re planning for your family, building
            your career, or starting a new chapter in Canada, I&apos;m here to
            listen and help you find the right solutions for your unique
            journey.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact-details"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#526f46] px-7 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.24)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg"
            >
              Book a Free Consultation
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>

            <Link
              href="#contact-details"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-[#c4cec0] bg-white/76 px-7 text-base font-semibold text-[#526f46] shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <p
          className="pointer-events-none absolute bottom-10 left-12 hidden max-w-[31rem] rotate-[-7deg] font-[cursive] text-[1.3rem] italic leading-[0.98] text-[#526f46] opacity-90 sm:block lg:left-16 lg:text-[1.8rem]"
          aria-hidden="true"
        >
          A brighter tomorrow
          <span className="ml-12 block">starts with a conversation.</span>
          <Heart className="absolute -right-12 top-8 size-9 stroke-[1.8]" />
        </p>
      </div>
    </section>
  );
}

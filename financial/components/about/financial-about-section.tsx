import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function FinancialAboutSection() {
  return (
    <section
      className="border-b border-[#dfe6dc] bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      aria-labelledby="financial-about-title"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(16rem,24rem)_minmax(0,1fr)] lg:items-center">
        <div className="relative overflow-hidden rounded-md bg-[#dfe6dc] shadow-[0_20px_50px_rgba(16,33,59,0.12)] lg:h-[25rem]">
          <Image
            src="/financial/headshot.png"
            alt="Gisele Pecapedra"
            width={1254}
            height={1254}
            className="aspect-[4/3] w-full object-cover object-[50%_18%] lg:h-full lg:aspect-auto"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f835f] sm:text-sm">
              About Gisele
            </p>
            <h2
              id="financial-about-title"
              className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl"
            >
              Advice Starts With Understanding Your Goals
            </h2>
            <p className="mt-5 text-base leading-7 text-[#617087] sm:text-lg">
              As a financial professional, my focus is to provide tailored
              guidance, honest advice, and clear options. Together, we can find
              the right insurance and financial solutions for your unique goals.
            </p>
            <p className="mt-3 text-base leading-7 text-[#617087] sm:text-lg">
              My approach is simple: listen first, explain clearly, and be a
              long-term partner you can trust.
            </p>

            <Link
              href="/financial#contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#526f46] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.22)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Meet Gisele
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>

          <figure className="border-l-0 border-[#dfe6dc] pl-0 lg:border-l lg:pl-8">
            <Quote
              className="size-7 fill-[#6f835f] text-[#6f835f]"
              aria-hidden="true"
            />
            <blockquote className="mt-4 font-serif text-2xl italic leading-9 text-[#526175]">
              Your goals matter. I&apos;m here to help you achieve them.
            </blockquote>
            <figcaption className="mt-5 text-base font-semibold text-[#31415b]">
              Gisele Pecapedra
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

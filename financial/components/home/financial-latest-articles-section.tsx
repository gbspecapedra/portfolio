import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { latestArticles } from "@/financial/data/latest-articles";

export function FinancialLatestArticlesSection() {
  return (
    <section
      id="resources"
      aria-labelledby="latest-articles-title"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6f835f] sm:text-sm">
              Latest Articles
            </p>
            <h2
              id="latest-articles-title"
              className="mt-2 text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl"
            >
              Financial Insights
            </h2>
            <p className="mt-2 text-base leading-7 text-[#617087] sm:text-lg">
              Practical tips and expert advice to make informed financial
              decisions.
            </p>
          </div>

          <Link
            href="/financial#resources"
            className="inline-flex w-fit items-center gap-3 text-base font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            View All Resources
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {latestArticles.map((article) => (
            <article
              key={article.title}
              className="group grid overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_16px_40px_rgba(16,33,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_22px_54px_rgba(16,33,59,0.08)] sm:grid-cols-[11rem_1fr] lg:grid-cols-[10.5rem_1fr]"
            >
              <div className="relative min-h-48 bg-[#dfe6dc] sm:min-h-full">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(min-width: 1024px) 170px, (min-width: 640px) 176px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex min-w-0 flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug text-[#10213b]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#617087]">
                  {article.excerpt}
                </p>

                <Link
                  href={article.href}
                  className="mt-auto inline-flex w-fit items-center gap-3 pt-5 text-sm font-semibold text-[#234a61] transition-colors hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Read more about ${article.title}`}
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

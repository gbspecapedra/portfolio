"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

import {
  financialGuides,
  guideCategories,
  type GuideCategory,
  type FinancialGuide,
} from "@/financial/data/guides";

const guidesPerPage = 6;

function getMatchesSearch(guide: FinancialGuide, searchTerm: string) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return true;
  }

  return [guide.title, guide.excerpt, guide.category]
    .join(" ")
    .toLowerCase()
    .includes(normalizedSearch);
}

export function FinancialGuidesBrowser() {
  const [activeCategory, setActiveCategory] =
    useState<GuideCategory>("All Guides");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const visibleGuides = useMemo(() => {
    return financialGuides.filter((guide) => {
      const matchesCategory =
        activeCategory === "All Guides" || guide.category === activeCategory;

      return matchesCategory && getMatchesSearch(guide, searchTerm);
    });
  }, [activeCategory, searchTerm]);

  const featuredGuides = visibleGuides.filter((guide) => guide.isFeatured);
  const latestGuides = visibleGuides.filter((guide) => !guide.isFeatured);
  const hasResults = visibleGuides.length > 0;
  const isFiltering =
    activeCategory !== "All Guides" || searchTerm.trim().length > 0;
  const articleGridGuides = isFiltering ? visibleGuides : latestGuides;
  const totalPages = Math.ceil(articleGridGuides.length / guidesPerPage);
  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginatedArticleGuides = articleGridGuides.slice(
    (safeCurrentPage - 1) * guidesPerPage,
    safeCurrentPage * guidesPerPage,
  );

  const resetFilters = () => {
    setActiveCategory("All Guides");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <section
      id="guides"
      aria-label="Guides"
      className="border-b border-[#dfe6dc] bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-3 lg:grid-cols-[minmax(16rem,27rem)_1fr] lg:items-center">
          <label className="relative block" htmlFor="guides-search">
            <span className="sr-only">Search guides</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#617087]"
              aria-hidden="true"
            />
            <input
              id="guides-search"
              type="search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search guides..."
              className="min-h-11 w-full rounded-md border border-[#7b8775] bg-white pl-11 pr-4 text-sm font-medium text-[#10213b] shadow-sm outline-none transition-colors placeholder:text-[#617087] focus:border-[#526f46] focus:ring-2 focus:ring-[#80652f]"
            />
          </label>

          <div
            role="group"
            className="flex flex-wrap gap-2 lg:justify-end"
            aria-label="Filter guides by topic"
          >
            {guideCategories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`min-h-9 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-[#526f46] bg-[#526f46] text-white"
                      : "border-[#dfe6dc] bg-[#f8faf6] text-[#617087] hover:border-[#c8d2c3] hover:text-[#526f46]"
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {hasResults
            ? `${visibleGuides.length} ${visibleGuides.length === 1 ? "guide" : "guides"} found. Page ${safeCurrentPage} of ${Math.max(totalPages, 1)}.`
            : "No guides found. Try another keyword or browse all guide topics."}
        </p>

        {hasResults ? (
          isFiltering ? (
            <>
              <GuideArticleGrid guides={paginatedArticleGuides} />
              <GuidePagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <>
              <div className="mt-10 flex items-center justify-between gap-5">
                <h2
                  id="featured-guides-title"
                  className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl lg:text-5xl"
                >
                  Featured Guides
                </h2>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-3 lg:gap-6">
                {featuredGuides.map((guide) => (
                  <FeaturedGuideCard key={guide.title} guide={guide} />
                ))}
              </div>

              <div className="mt-12 flex items-center justify-between gap-5">
                <h2
                  id="latest-guides-title"
                  className="font-serif text-3xl font-semibold leading-tight text-[#10213b] sm:text-4xl lg:text-5xl"
                >
                  Latest Guides
                </h2>
              </div>

              <GuideArticleGrid guides={paginatedArticleGuides} />
              <GuidePagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )
        ) : (
          <div className="mt-10 rounded-md border border-[#dfe6dc] bg-[#f8faf6] px-6 py-8 text-center">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#10213b]">
              No guides found
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#617087]">
              Try another keyword or browse all guide topics.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#526f46] px-5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(82,111,70,0.2)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf6]"
            >
              View all guides
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function GuideArticleGrid({ guides }: { guides: FinancialGuide[] }) {
  return (
    <div className="mt-5 grid gap-x-6 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
      {guides.map((guide) => (
        <LatestGuideCard key={guide.title} guide={guide} />
      ))}
    </div>
  );
}

function GuidePagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
      aria-label="Guides pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex size-10 items-center justify-center rounded-md border border-[#dfe6dc] bg-white text-[#234a61] transition-colors hover:border-[#c8d2c3] hover:bg-[#f8faf6] hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45"
        aria-label="Previous guides page"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`inline-flex size-10 items-center justify-center rounded-md border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 ${
              isActive
                ? "border-[#526f46] bg-[#526f46] text-white"
                : "border-[#dfe6dc] bg-white text-[#234a61] hover:border-[#c8d2c3] hover:bg-[#f8faf6] hover:text-[#526f46]"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Guides page ${pageNumber}`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex size-10 items-center justify-center rounded-md border border-[#dfe6dc] bg-white text-[#234a61] transition-colors hover:border-[#c8d2c3] hover:bg-[#f8faf6] hover:text-[#526f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45"
        aria-label="Next guides page"
      >
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </nav>
  );
}

function FeaturedGuideCard({ guide }: { guide: FinancialGuide }) {
  return (
    <article className="group overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_16px_40px_rgba(16,33,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_22px_54px_rgba(16,33,59,0.08)]">
      <Link
        href={guide.href}
        className="grid h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <div className="relative aspect-[1.8] bg-[#dfe6dc]">
          <Image
            src={guide.image.src}
            alt={guide.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] ${guide.image.className ?? ""}`}
          />
        </div>

        <div className="flex min-h-52 flex-col p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#526f46]">
            {guide.category}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#10213b]">
            {guide.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#617087] sm:text-base sm:leading-7">
            {guide.excerpt}
          </p>

          <span className="mt-auto inline-flex w-fit items-center gap-3 pt-5 text-sm font-semibold text-[#234a61] transition-colors group-hover:text-[#526f46]">
            Read More
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

function LatestGuideCard({ guide }: { guide: FinancialGuide }) {
  return (
    <article className="group overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_14px_34px_rgba(16,33,59,0.045)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_20px_48px_rgba(16,33,59,0.075)]">
      <Link
        href={guide.href}
        className="grid h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80652f] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:grid-cols-[9.5rem_1fr]"
        aria-label={`Read more about ${guide.title}`}
      >
        <div className="relative min-h-44 bg-[#dfe6dc] sm:min-h-full">
          <Image
            src={guide.image.src}
            alt={guide.image.alt}
            fill
            sizes="(min-width: 1280px) 152px, (min-width: 640px) 152px, 100vw"
            className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] ${guide.image.className ?? ""}`}
          />
        </div>

        <div className="flex min-w-0 flex-col p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#526f46]">
            {guide.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug text-[#10213b]">
            {guide.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#617087]">
            {guide.excerpt}
          </p>

          <span className="mt-auto inline-flex w-fit items-center gap-3 pt-4 text-sm font-semibold text-[#234a61] transition-colors group-hover:text-[#526f46]">
            Read More
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

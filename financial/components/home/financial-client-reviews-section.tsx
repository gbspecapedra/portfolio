import { Star } from "lucide-react";

import {
  googleBusinessReviews,
  previewClientReviews,
} from "@/financial/data/client-reviews";

export function FinancialClientReviewsSection() {
  const reviews = googleBusinessReviews.length
    ? googleBusinessReviews
    : previewClientReviews;

  return (
    <section
      aria-labelledby="client-reviews-title"
      className="bg-[#fbfcfa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="client-reviews-title"
            className="text-3xl font-semibold leading-tight tracking-normal text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            What Clients Say
          </h2>
          <p className="mt-3 text-base leading-7 text-[#617087] sm:text-lg">
            Real stories from people who trust the guidance I provide.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.quote}`}
              className="rounded-md border border-[#dfe6dc] bg-white p-6 shadow-[0_16px_40px_rgba(16,33,59,0.05)]"
            >
              <div
                className="flex gap-1 text-[#f5a623]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-base font-medium leading-7 text-[#526175]">
                &quot;{review.quote}&quot;
              </blockquote>

              <footer className="mt-5 text-sm leading-6">
                <p className="font-semibold text-[#10213b]">{review.author}</p>
                <p className="text-[#617087]">{review.location}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

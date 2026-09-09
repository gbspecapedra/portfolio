export type ClientReview = {
  quote: string;
  author: string;
  location: string;
  rating: number;
};

export const googleBusinessReviews: ClientReview[] = [];

export const previewClientReviews: ClientReview[] = [
  {
    quote:
      "Google Business Profile reviews will appear here once they are connected.",
    author: "Google Business Profile",
    location: "Verified review",
    rating: 5,
  },
  {
    quote:
      "This space is ready for real client stories from people who trust your guidance.",
    author: "Google Business Profile",
    location: "Verified review",
    rating: 5,
  },
  {
    quote:
      "Reviews can be pulled into this section when the business profile integration is available.",
    author: "Google Business Profile",
    location: "Verified review",
    rating: 5,
  },
];

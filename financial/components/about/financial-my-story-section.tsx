import Image from "next/image";

const storyImages = [
  {
    src: "/financial/story/story-city.jpg",
    alt: "Vancouver waterfront and mountains",
  },
  {
    src: "/financial/story/story-mother-child.png",
    alt: "A mother holding her child while looking over a mountain landscape",
  },
  {
    src: "/financial/story/story-boardwalk.jpg",
    alt: "A wooden boardwalk leading through a tall evergreen forest",
  },
];

export function FinancialMyStorySection() {
  return (
    <section
      id="my-story"
      aria-labelledby="financial-my-story-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.95fr)] lg:items-center lg:gap-16">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {storyImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden bg-[#e8eee7]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 23vw, 46vw"
                className="object-cover"
              />
            </div>
          ))}

          <div className="flex aspect-square items-center justify-center bg-[#f1f4ef] px-5 text-center sm:px-8">
            <p className="max-w-52 font-serif text-2xl italic leading-[1.15] text-[#526f46] sm:text-3xl">
              A healthier today, a brighter tomorrow.
              <span className="mt-4 block font-sans text-3xl not-italic text-[#526f46]">
                ♡
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526f46] sm:text-sm">
            My Story
          </p>
          <h2
            id="financial-my-story-title"
            className="mt-5 max-w-xl font-serif text-4xl leading-[1.08] text-[#10213b] sm:text-5xl"
          >
            A Journey Rooted
            <br />
            in People and Purpose
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-[#617087] sm:text-lg sm:leading-8">
            <p>
              I was born in Brazil and have always been passionate about people,
              learning and making a positive impact. After moving to Canada, I
              fell in love with this country, its opportunities, its diversity
              and its strong sense of community.
            </p>
            <p>
              My own experience as an immigrant and as a mother has given me a
              deep understanding of the importance of protection, stability and
              peace of mind. I know how important it is to plan for life&apos;s
              unexpected moments, while also building a future full of
              possibilities.
            </p>
            <p>
              That&apos;s why I became a financial advisor, to support
              individuals, families and newcomers in finding the right solutions
              for their unique needs.
            </p>
            <p>
              When you work with me, you&apos;re not just a client, you&apos;re
              a part of my journey, and I&apos;m here to help you achieve yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

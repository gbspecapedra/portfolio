import Image from "next/image";
import Link from "next/link";

type TalkBannerProps = {
  eyebrown: string;
  title: string;
  subtitle: string;
};

export function FinancialLetsTalkBanner({
  eyebrown,
  title,
  subtitle,
}: TalkBannerProps) {
  return (
    <section
      aria-labelledby="financial-lets-talk-title"
      className="relative overflow-hidden border-b border-[#dfe6dc] bg-[#f7f4ec]"
    >
      <Image
        src="/financial/lets-talk-banner-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[58%_center]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_33%,rgba(255,255,255,0.42)_58%,rgba(255,255,255,0.08)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto min-h-[24rem] max-w-7xl px-4 py-12 sm:min-h-[25rem] sm:px-6 lg:min-h-[29rem] lg:px-8 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526f46] sm:text-sm">
            {eyebrown}
          </p>
          <h2
            id="financial-lets-talk-title"
            className="mt-5 font-serif text-4xl leading-[1.08] text-[#10213b] max-w-2xl sm:text-5xl lg:text-[4.25rem]"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#626b71] sm:text-2xl sm:leading-9">
            {subtitle}
          </p>

          <Link
            href="/financial#contact"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-[#526f46] px-8 text-base font-semibold text-white shadow-[0_14px_30px_rgba(82,111,70,0.24)] transition-colors hover:bg-[#465f3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg"
          >
            Book a Free Consultation
          </Link>
        </div>

        <p
          className="pointer-events-none absolute right-[18%] top-16 hidden max-w-[16rem] rotate-[-8deg] font-[cursive] text-4xl italic leading-[0.92] text-[#526f46] opacity-90 md:block lg:right-[22%] lg:top-20 lg:text-5xl"
          aria-hidden="true"
        >
          Your future
          <span className="ml-10 block">matters.</span>
          <span className="absolute -right-10 top-9 font-sans text-5xl not-italic leading-none lg:-right-12 lg:text-6xl">
            ♡
          </span>
        </p>
      </div>
    </section>
  );
}

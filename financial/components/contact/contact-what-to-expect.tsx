import Image from "next/image";
import { FileText, Heart, Leaf, UsersRound } from "lucide-react";

const processSteps = [
  {
    title: "Share Your Goals",
    description:
      "We'll start with a friendly conversation about your current situation, hopes for the future, and what matters most to you.",
    icon: UsersRound,
  },
  {
    title: "Review Your Options",
    description:
      "I'll explain your options in clear, straightforward language - no jargon - so you can feel informed and confident.",
    icon: FileText,
  },
  {
    title: "Build Your Next Step",
    description:
      "Together, we'll create a personalized plan and next steps that fit your goals, your life, and your timeline.",
    icon: Leaf,
  },
];

export function ContactWhatToExpect() {
  return (
    <div className="overflow-hidden rounded-md border border-[#e5e9e1] bg-white/82 shadow-[0_18px_55px_rgba(16,33,59,0.06)]">
      <div className="relative min-h-44 overflow-hidden bg-[#e8eee7] sm:min-h-52">
        <Image
          src="/financial/lets-talk-banner-bg.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="object-cover object-[64%_center]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.32)_62%,rgba(255,255,255,0.62))]"
          aria-hidden="true"
        />
        <p
          className="absolute right-8 top-7 hidden max-w-64 rotate-[-7deg] font-[cursive] text-3xl italic leading-[0.98] text-[#526f46] sm:block"
          aria-hidden="true"
        >
          Good conversations
          <span className="ml-5 block">today. Brighter</span>
          <span className="ml-10 block">tomorrows ahead.</span>
          <Heart className="ml-24 mt-1 size-8 stroke-[1.8]" />
        </p>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
          What to Expect
        </p>
        <h2 className="mt-3 font-serif text-4xl leading-[1.08] text-[#10213b] sm:text-5xl">
          A Simple, Supportive Process
        </h2>

        <div className="mt-7 space-y-7">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="flex gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#eef2ec] text-[#526f46] sm:size-20">
                  <Icon className="size-9 stroke-[1.7]" aria-hidden="true" />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[#10213b]">
                    <span className="mr-3">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#617087] sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-9 border-t border-[#dfe6dc] pt-6">
          <p
            className="relative mx-auto w-fit rotate-[-4deg] pr-12 font-[cursive] text-2xl italic leading-tight text-[#526f46]"
            aria-hidden="true"
          >
            You don&apos;t have to figure it out alone.
            <Heart className="absolute right-0 top-0 size-8 stroke-[1.8]" />
          </p>
        </div>
      </div>
    </div>
  );
}

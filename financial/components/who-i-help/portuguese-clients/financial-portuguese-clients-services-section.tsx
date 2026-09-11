import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Life Insurance",
    description: "Financial protection for the people who matter most.",
    image: {
      src: "/financial/who-i-help/life-insurance-family.png",
      alt: "A family looking toward Vancouver mountains and skyline",
    },
    href: "/financial#life-insurance",
    imageClassName: "object-[50%_center]",
  },
  {
    title: "Travel Insurance",
    description:
      "Stay protected while you explore, visit or bring family to Canada.",
    image: {
      src: "/financial/who-i-help/travel-insurance-plane.jpg",
      alt: "Airplane wing above mountains at sunset",
    },
    href: "/financial#travel-insurance",
    imageClassName: "object-center",
  },
  {
    title: "RESP & Education Planning",
    description: "Help your children reach their full potential in Canada.",
    image: {
      src: "/financial/who-i-help/resp-education-plan.png",
      alt: "A child with a backpack looking toward a city skyline",
    },
    href: "/financial#resp-education-planning",
    imageClassName: "object-[50%_34%]",
  },
  {
    title: "Critical Illness Insurance",
    description: "Added protection for life's unexpected challenges.",
    image: {
      src: "/financial/who-i-help/critical-illness-lake.jpg",
      alt: "Mountain lake surrounded by evergreen forest",
    },
    href: "/financial#critical-illness-insurance",
    imageClassName: "object-center",
  },
];

export function FinancialPortugueseClientsServicesSection() {
  return (
    <section
      aria-labelledby="portuguese-clients-services-title"
      className="border-b border-[#dfe6dc] bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
            Key Services for Portuguese Clients
          </p>
          <h2
            id="portuguese-clients-services-title"
            className="mt-3 font-serif text-3xl leading-[1.08] text-[#10213b] sm:text-4xl lg:text-5xl"
          >
            Solutions for Today and Tomorrow
          </h2>
          <p className="mt-3 text-base leading-7 text-[#617087] sm:text-lg">
            Here are some of the services that can make a real difference for
            newcomers and immigrant families.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-md border border-[#dfe6dc] bg-white shadow-[0_14px_38px_rgba(16,33,59,0.055)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8d2c3] hover:shadow-[0_20px_50px_rgba(16,33,59,0.085)]"
            >
              <div className="relative aspect-[16/8] bg-[#e8eee7]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] ${service.imageClassName}`}
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[#10213b]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-[#617087]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#526f46] transition-colors hover:text-[#234a61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b89b5e] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
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

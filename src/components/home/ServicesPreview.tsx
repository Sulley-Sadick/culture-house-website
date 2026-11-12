import Link from "next/link";
import { homeServices } from "@/data/home-services";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesPreview() {
  return (
    <Reveal as="section" className="bg-culture-cream px-6 py-14 md:flex md:items-start md:gap-28 md:px-16 md:py-24">
      <div className="mb-8 flex flex-col gap-5 md:mb-0 md:w-[400px] md:shrink-0">
        <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
          HOW WE CAN HELP
        </p>
        <h2 className="font-display text-[36px] font-bold leading-[1.2] text-culture-brown-dark md:text-[48px]">
          A place for every
          <br />
          next step.
        </h2>
        <p className="text-[15px] leading-[1.2] text-culture-brown md:text-base">
          From a room for today to land for tomorrow, let’s find what works for you.
        </p>
      </div>

      <ul className="w-full md:min-w-0 md:flex-1">
        {homeServices.map((service, index) => (
          <Reveal
            key={service.n}
            as="li"
            delayMs={80 + index * 70}
            className="border-t border-culture-sand last:border-b"
          >
            <Link
              href={service.href}
              className="group flex items-start gap-4 py-[22px] md:gap-7 md:py-[25px]"
            >
              <span className="font-display w-7 shrink-0 text-[18px] font-bold text-culture-brown md:text-[22px]">
                {service.n}
              </span>
              <span className="min-w-0 flex-1">
                <span className="font-display block text-[23px] font-bold leading-[1.2] text-culture-brown-dark md:text-[29px]">
                  {service.title}
                </span>
                <span className="mt-2 block text-[13px] leading-[1.2] text-culture-brown md:text-sm">
                  {service.summary}
                </span>
              </span>
              <span
                aria-hidden
                className="w-6 shrink-0 text-[21px] text-culture-brown transition-transform group-hover:translate-x-1 md:text-[26px]"
              >
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Reveal>
  );
}

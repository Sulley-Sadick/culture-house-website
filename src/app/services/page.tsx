import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Find a room, a home or land—with local guidance at every step from Culture’s House.",
};

export default function ServicesPage() {
  return (
    <>
      <Reveal className="bg-culture-sand px-6 pb-12 pt-10 md:px-16 md:pb-16 md:pt-14">
        <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
          OUR SERVICES
        </p>
        <h1 className="font-display mt-5 text-[36px] font-bold leading-[1.08] text-culture-brown-dark md:mt-6 md:text-[68px]">
          Local guidance.
          <br />
          The right next move.
        </h1>
        <p className="mt-5 max-w-4xl text-[16px] leading-[1.55] text-culture-brown md:mt-6 md:text-[19px]">
          Find a room, a home or land—with local guidance at every step.
        </p>
      </Reveal>

      <div className="bg-culture-cream">
        {services.map((service, index) => (
          <Reveal key={service.number} delayMs={60 + index * 70}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

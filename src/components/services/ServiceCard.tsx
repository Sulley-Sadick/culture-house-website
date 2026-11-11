import type { Service } from "@/data/services";
import { withBasePath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="relative border-t border-culture-sand px-6 py-10 md:px-16 md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
        <div className="flex shrink-0 gap-4 md:w-[600px] md:max-w-[46%] md:gap-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-culture-gold md:size-14">
            <span className="text-lg font-bold leading-none text-culture-brown-dark">
              {service.number}
            </span>
          </div>
          <h2 className="font-display text-[28px] font-bold leading-[1.13] text-culture-brown-dark md:text-[40px] md:leading-[1.13]">
            {service.title}
          </h2>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <p className="max-w-[648px] text-[16px] leading-[1.6] text-culture-brown md:text-[18px]">
            {service.summary}
          </p>

          <ul className="flex flex-col gap-2.5">
            {service.details.map((item) => (
              <li key={item} className="flex items-center gap-3.5">
                {/* Figma asset: keep intrinsic 5×5 from the SVG root */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath("/images/benefit-bullet.svg")}
                  alt=""
                  width={5}
                  height={5}
                  className="shrink-0"
                />
                <span className="text-[15px] leading-[1.6] text-culture-brown md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={buildWhatsAppUrl(service.whatsappMessage)}
            external
            variant="whatsapp"
            className="w-full sm:w-40"
          >
            WhatsApp →
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

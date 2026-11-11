import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  const whatsappHref = buildWhatsAppUrl(
    "Hi Culture’s House, I’d like to talk about a property.",
  );
  const primaryPhone = siteConfig.phones[0];

  return (
    <Reveal as="section" className="bg-culture-brown px-6 py-12 md:flex md:items-start md:gap-20 md:p-16">
      <div className="mb-7 flex flex-1 flex-col gap-4 md:mb-0">
        <p className="text-[11px] font-bold tracking-[0.12em] text-culture-gold">
          LET’S TALK
        </p>
        <h2 className="font-display text-[34px] font-bold leading-[1.12] text-culture-cream md:text-[43px]">
          Your next move
          <br />
          starts with a conversation.
        </h2>
        <p className="text-[15px] leading-[1.55] text-culture-cream md:text-[17px]">
          Visit us opposite Sweet FM.
        </p>
      </div>

      <div className="flex w-full flex-col gap-5 md:w-[365px] md:shrink-0 md:pt-5">
        <p className="text-[15px] leading-[1.55] text-culture-cream">
          Tell us what you’re looking for.
          <br />
          We’ll help you take the next step.
        </p>
        <div className="flex gap-3">
          <ButtonLink
            href={whatsappHref}
            external
            variant="whatsapp"
            className="min-w-0 flex-1 md:w-40 md:flex-none"
          >
            WhatsApp →
          </ButtonLink>
          <ButtonLink
            href={`tel:${primaryPhone.number}`}
            variant="call"
            className="min-w-0 flex-1 md:w-40 md:flex-none"
          >
            Call us →
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}

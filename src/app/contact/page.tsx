import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${siteConfig.name} — ${siteConfig.address}`,
};

export default function ContactPage() {
  const whatsappHref = buildWhatsAppUrl("Hello, I'd like to get in touch about a property.");
  const primaryPhone = siteConfig.phones[0];

  return (
    <>
      <Reveal
        as="section"
        className="bg-culture-brown px-6 py-12 md:flex md:items-start md:gap-20 md:px-16 md:py-16"
      >
        <div className="mb-8 flex flex-1 flex-col gap-4 md:mb-0">
          <p className="text-[11px] font-bold tracking-[0.12em] text-culture-gold">
            LET’S TALK
          </p>
          <h1 className="font-display text-[34px] font-bold leading-[1.12] text-culture-cream md:text-[43px]">
            Your next move
            <br />
            starts with a conversation.
          </h1>
          <p className="text-[15px] leading-[1.55] text-culture-cream md:text-[17px]">
            Visit us opposite Sweet FM.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 md:w-[365px] md:shrink-0">
          <p className="text-[15px] leading-[1.55] text-culture-cream">
            Tell us what you’re looking for.
            <br />
            We’ll help you take the next step.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref} external variant="whatsapp" className="flex-1">
              WhatsApp →
            </ButtonLink>
            <ButtonLink
              href={`tel:${primaryPhone.number}`}
              variant="call"
              className="flex-1"
            >
              Call us →
            </ButtonLink>
          </div>
          <ul className="space-y-3 text-sm text-culture-cream/90">
            {siteConfig.phones.map((phone) => (
              <li key={phone.number}>
                <span className="font-semibold text-culture-gold">{phone.label}</span>
                <br />
                <a href={`tel:${phone.number}`} className="hover:underline">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="bg-culture-cream px-6 py-12 md:px-16" delayMs={120}>
        <h2 className="font-display text-[28px] font-bold text-culture-brown-dark md:text-[36px]">
          Send a message
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-culture-brown">
          Prefer a form? Leave your details and we’ll follow up.
        </p>
        <div className="mt-8 max-w-xl">
          <ContactForm />
        </div>
      </Reveal>
    </>
  );
}

import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ContactActionPanelProps = {
  as?: "h1" | "h2";
  whatsappMessage?: string;
  /** Show labeled phone numbers under the action buttons (contact page). */
  showPhoneList?: boolean;
};

const defaultWhatsappMessage =
  "Hi Culture’s House, I’d like to talk about a property.";

export function ContactActionPanel({
  as: Heading = "h2",
  whatsappMessage = defaultWhatsappMessage,
  showPhoneList = false,
}: ContactActionPanelProps) {
  const whatsappHref = buildWhatsAppUrl(whatsappMessage);
  const primaryPhone = siteConfig.phones[0];

  return (
  <div className="bg-culture-brown px-6 py-12 md:flex md:items-start md:gap-20 md:p-16">
    <div className="mb-7 flex flex-1 flex-col gap-4 md:mb-0">
      <p className="text-[11px] font-bold tracking-[0.12em] text-culture-gold">
        LET’S TALK
      </p>
      <Heading className="font-display text-[34px] font-bold leading-[1.12] text-culture-cream md:text-[43px]">
        Your next move
        <br />
        starts with a conversation.
      </Heading>
      <p className="text-[15px] leading-[1.55] text-culture-cream md:text-[17px]">
        Visit us at {siteConfig.address}.
      </p>
    </div>

    <div className="flex w-full flex-col gap-5 md:w-[365px] md:shrink-0 md:pt-5">
      <p className="text-[15px] leading-[1.55] text-culture-cream">
        Tell us what you’re looking for.
        <br />
        We’ll help you take the next step.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink
          href={whatsappHref}
          external
          variant="whatsapp"
          className="w-full min-w-0 sm:flex-1 md:w-40 md:flex-none"
        >
          WhatsApp →
        </ButtonLink>
        <ButtonLink
          href={`tel:${primaryPhone.number}`}
          variant="call"
          className="w-full min-w-0 sm:flex-1 md:w-40 md:flex-none"
        >
          Call us →
        </ButtonLink>
      </div>
      {showPhoneList ? (
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
      ) : null}
    </div>
  </div>
  );
}

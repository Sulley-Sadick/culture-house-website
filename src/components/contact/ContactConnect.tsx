"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { SocialIcon, type SocialName } from "@/components/contact/SocialIcon";
import { useTyping } from "@/hooks/useTyping";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const whatsappMessage = "Hello, I'd like to get in touch about a property.";

const socialBrandStyles: Record<
  SocialName,
  { badge: string; icon: string; hover: string }
> = {
  Instagram: {
    badge:
      "bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]",
    icon: "text-white",
    hover: "hover:border-[#dc2743]/40",
  },
  Twitter: {
    badge: "bg-black",
    icon: "text-white",
    hover: "hover:border-black/30",
  },
  WhatsApp: {
    badge: "bg-[#25D366]",
    icon: "text-white",
    hover: "hover:border-[#25D366]/50",
  },
  TikTok: {
    badge: "bg-black",
    icon: "text-white",
    hover: "hover:border-black/30",
  },
};

export function ContactConnect() {
  const {
    output,
    ref,
    isComplete,
  } = useTyping({
    text: siteConfig.socialConnectTagline,
    whileInView: true,
    speedInSeconds: 0.48,
  });

  const socials = siteConfig.socials.map((item) => ({
    ...item,
    href:
      item.href === "whatsapp"
        ? buildWhatsAppUrl(whatsappMessage)
        : item.href,
  }));

  return (
    <section className="bg-culture-cream px-6 py-12 md:px-16 md:py-16">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Mobile: socials on top · Desktop: socials on left */}
        <div className="w-full lg:w-[42%] lg:shrink-0">
          <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
            STAY CONNECTED
          </p>
          <h2
            ref={ref}
            aria-label={siteConfig.socialConnectTagline}
            className="mt-3 min-h-[3.4em] font-display text-[28px] font-bold leading-[1.15] text-culture-brown-dark md:min-h-[2.8em] md:text-[36px]"
          >
            <span aria-hidden="true">
              {output}
              {output.length > 0 && (
                <span
                  className={`typing-caret${isComplete ? " typing-caret--settle" : ""}`}
                />
              )}
            </span>
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.55] text-culture-brown">
            Follow Culture’s House for new rooms, homes, and land — then message
            us when you’re ready to take the next step.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {socials.map((social) => {
              const brand = socialBrandStyles[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded border border-culture-sand bg-white px-5 py-4 text-culture-brown-dark transition-colors hover:bg-culture-sand/30 md:gap-3 md:px-4 md:py-3.5 ${brand.hover}`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded md:h-9 md:w-9 ${brand.badge} ${brand.icon}`}
                    >
                      <SocialIcon name={social.label} />
                    </span>
                    <span className="text-[15px] font-bold md:text-sm">
                      {social.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile: form below · Desktop: form on right */}
        <div className="w-full lg:min-w-0 lg:flex-1">
          <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
            SEND A MESSAGE
          </p>
          <h3 className="mt-3 font-display text-[28px] font-bold leading-[1.15] text-culture-brown-dark md:text-[36px]">
            Tell us what you need
          </h3>
          <p className="mt-3 max-w-xl text-[15px] leading-[1.55] text-culture-brown">
            Leave your details and we’ll follow up. Prefer chat? Start on WhatsApp
            from the social links.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

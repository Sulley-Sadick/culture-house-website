"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useTyping } from "@/hooks/useTyping";

export function Hero() {
  const whatsappHref = buildWhatsAppUrl(
    "Hi, I saw your website and I'd like help with a property.",
  );
  const primaryPhone = siteConfig.phones[0];

  const {
    output: tagline,
    ref: taglineRef,
    isComplete,
  } = useTyping({
    text: siteConfig.tagline,
    whileInView: true,
    // Calm pace — slower than the portfolio default so the headline feels measured
    speedInSeconds: 0.52,
  });

  return (
    <section className="overflow-hidden bg-culture-cream">
      <div className="hero-media relative flex min-h-[420px] w-full items-center justify-center overflow-hidden md:min-h-[560px] md:h-[70vh] md:max-h-[720px]">
        <Image
          src="/images/hero-home.jpg"
          alt="Ghana home exterior — Culture’s House"
          fill
          priority
          className="hero-media__image object-cover object-[center_65%]"
          sizes="100vw"
        />
        {/* Compass.com-style cloudy dark hero veil for readable centered copy */}
        <div className="hero-media__veil" aria-hidden="true" />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-7 px-6 py-16 text-center md:gap-8 md:px-16 md:py-20">
          <h1
            ref={taglineRef}
            aria-label={siteConfig.tagline}
            className="min-h-[2.4em] font-display text-[32px] font-bold uppercase leading-[1.12] tracking-[-0.02em] text-culture-cream [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] md:text-[52px] md:leading-[1.1]"
          >
            <span aria-hidden="true">
              {tagline}
              {tagline.length > 0 && (
                <span
                  className={`typing-caret${isComplete ? " typing-caret--settle" : ""}`}
                />
              )}
            </span>
          </h1>

          <div className="animate-culture-fade-delay-2 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink
              href={whatsappHref}
              external
              variant="whatsapp"
              className="min-w-0 flex-1 sm:flex-none sm:w-40"
            >
              WhatsApp →
            </ButtonLink>
            <ButtonLink
              href={`tel:${primaryPhone.number}`}
              variant="call"
              className="min-w-0 flex-1 border-culture-cream bg-culture-cream/95 sm:flex-none sm:w-40"
            >
              Call us →
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 md:px-16 md:py-10">
        <p className="mx-auto max-w-2xl text-center text-[15px] leading-[1.55] text-culture-brown md:text-[17px]">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}

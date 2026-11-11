"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    `Hi ${siteConfig.name}, I would like to inquire about your properties.`,
  );

  return (
    <header className="sticky top-0 z-50 border-b-2 border-culture-gold/60 bg-culture-cream/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <LogoMark className="h-11 w-11 shrink-0 shadow-sm ring-2 ring-culture-gold transition group-hover:ring-culture-gold-dark" />
          <div className="max-w-[11rem] leading-tight sm:max-w-xs md:max-w-sm">
            <p className="font-display text-sm font-bold text-culture-brown sm:text-base md:text-lg">
              {siteConfig.name}
            </p>
            <p className="text-xs text-culture-brown/70">{siteConfig.address}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-culture-brown"
                    : "text-culture-brown/70 hover:text-culture-brown"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={whatsappHref} external variant="secondary" className="py-2.5 text-xs">
            WhatsApp us
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-lg border border-culture-sand p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-culture-brown" />
          <span className="mt-1.5 block h-0.5 w-6 bg-culture-brown" />
          <span className="mt-1.5 block h-0.5 w-6 bg-culture-brown" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-culture-sand bg-culture-cream px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 font-medium text-culture-brown"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ButtonLink href={whatsappHref} external variant="primary" className="w-full">
                WhatsApp us
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

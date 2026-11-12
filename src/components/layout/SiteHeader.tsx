"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { isNavLinkActive } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const whatsappHref = buildWhatsAppUrl(
    `Hi ${siteConfig.name}, I would like to inquire about your properties.`,
  );

  // Close the mobile menu when the route changes (adjust state during render).
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-culture-sand bg-culture-cream/95 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-6 py-3.5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:px-16 md:py-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3 justify-self-start">
          <LogoMark className="h-10 w-10 shrink-0 md:h-11 md:w-11" />
          <div className="min-w-0 leading-tight">
            <p className="font-display truncate text-lg font-bold text-culture-brown md:text-xl">
              {siteConfig.brandFull}
            </p>
            <p className="truncate text-[10px] font-semibold tracking-[0.12em] text-culture-brown/70">
              {siteConfig.eyebrow}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => {
            const active = isNavLinkActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  active
                    ? "text-culture-brown-dark"
                    : "text-culture-brown/65 hover:text-culture-brown-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end md:block">
          <ButtonLink
            href={whatsappHref}
            external
            variant="whatsapp"
            className="h-11 w-auto px-5 text-sm"
          >
            WhatsApp →
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-culture-sand text-culture-brown md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`border-t border-culture-sand bg-culture-cream md:hidden ${
          open ? "block" : "hidden"
        }`}
        aria-label="Mobile"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {siteConfig.nav.map((item) => {
            const active = isNavLinkActive(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded px-2 py-3 text-base font-semibold transition-colors ${
                    active
                      ? "bg-culture-sand/70 text-culture-brown-dark"
                      : "text-culture-brown hover:bg-culture-sand/50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <ButtonLink
              href={whatsappHref}
              external
              variant="whatsapp"
              className="w-full"
            >
              WhatsApp →
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

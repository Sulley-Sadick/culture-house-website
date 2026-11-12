import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "whatsapp" | "call" | "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  whatsapp:
    "bg-culture-gold text-culture-brown-dark hover:bg-culture-gold-dark border border-transparent",
  call: "bg-culture-cream text-culture-brown-dark border border-culture-brown hover:bg-culture-sand",
  primary:
    "bg-culture-gold text-culture-brown-dark hover:bg-culture-gold-dark border border-transparent",
  secondary:
    "bg-culture-brown text-culture-cream hover:bg-culture-brown-dark border border-transparent",
  outline:
    "bg-transparent text-culture-brown-dark border border-culture-brown hover:bg-culture-sand",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonLinkProps) {
  const classes = [
    "inline-flex cursor-pointer items-center justify-center rounded text-base font-bold transition-colors md:text-[15px]",
    // Roomier padding on small screens; desktop keeps the tighter formal size
    "min-h-[56px] px-8 py-4 md:h-[54px] md:min-h-0 md:px-6 md:py-0",
    variants[variant],
    className,
  ].join(" ");

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

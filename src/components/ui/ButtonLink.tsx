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
    "inline-flex items-center justify-center rounded text-[15px] font-bold transition-colors",
    "h-[54px] px-6",
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

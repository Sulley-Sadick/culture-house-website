"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms once the section enters view */
  delayMs?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const show = prefersReducedMotion || visible;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal${show ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

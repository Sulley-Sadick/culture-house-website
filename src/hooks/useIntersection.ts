"use client";

import { useEffect, useState } from "react";
import { useElRef } from "./useElRef";

export function useIntersection({
  rootMargin = "0px",
  threshold = 0.5,
  once,
}: {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
} = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { refObject, ref } = useElRef();

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    frame = requestAnimationFrame(() => {
      const currentRef = refObject.current;
      if (!(currentRef instanceof HTMLElement)) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;

          setIsIntersecting(true);
          if (once) observer?.unobserve(entry.target);
        },
        { threshold, rootMargin },
      );

      observer.observe(currentRef);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [refObject, rootMargin, threshold, once]);

  return { isIntersecting, ref };
}

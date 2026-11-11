"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useIntersection } from "./useIntersection";

type UseTypingOptions = {
  text: string;
  enabled?: boolean;
  whileInView?: boolean;
  /** Portfolio-style pace knob. Higher = slower. ~0.45–0.55 feels calm for short headlines. */
  speedInSeconds?: number;
};

export function useTyping(props: {
  text: string;
  whileInView?: boolean;
  enabled: true;
  speedInSeconds?: number;
}): { output: string; isTyping: boolean; isComplete: boolean };

export function useTyping(props: {
  text: string;
  whileInView: true;
  speedInSeconds?: number;
}): {
  output: string;
  ref: <T>(el: T | null) => void;
  isTyping: boolean;
  isComplete: boolean;
};

export function useTyping({
  text,
  enabled: defaultEnabled,
  whileInView,
  speedInSeconds = 0.48,
}: UseTypingOptions) {
  const [current, setCurrent] = useState<string | null>(null);
  const { ref, isIntersecting } = useIntersection({ once: true });
  const timeoutRefId =
    useRef<Record<number, ReturnType<typeof setTimeout>>>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldRun =
    !prefersReducedMotion &&
    (whileInView ? isIntersecting : Boolean(defaultEnabled)) &&
    current !== text;

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      setCurrent(text);
      return;
    }

    if (!shouldRun) return;

    text.split("").forEach((_, index) => {
      if (!timeoutRefId.current) timeoutRefId.current = {};

      const timeoutId = setTimeout(
        () => {
          setCurrent(text.slice(0, index + 1));
        },
        // Same cadence formula as the portfolio hook: index * speed * 100ms
        index * speedInSeconds * 100,
      );

      timeoutRefId.current[index] = timeoutId;
    });

    return () => {
      if (timeoutRefId.current) {
        Object.values(timeoutRefId.current).forEach((id) => clearTimeout(id));
      }
    };
  }, [shouldRun, text, speedInSeconds, prefersReducedMotion]);

  const output = current ?? "";
  const isComplete = current === text;
  const isTyping = Boolean(current) && !isComplete;

  if (defaultEnabled) {
    return { output, isTyping, isComplete };
  }

  return { output, ref, isTyping, isComplete };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

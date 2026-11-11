"use client";

import { useCallback, useRef, useState } from "react";

export function useElRef(el?: HTMLElement | null) {
  const [, forceRender] = useState(0);
  const ref = useRef<HTMLElement | null>(el ?? null);

  const captureRef = useCallback(<T,>(node: T | null) => {
    if (!(node instanceof HTMLElement)) return;

    const isFirstAttach = ref.current === null;
    ref.current = node;

    if (isFirstAttach) forceRender(1);
  }, []);

  return { refObject: ref, ref: captureRef };
}

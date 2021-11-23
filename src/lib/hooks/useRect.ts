// source: https://gist.github.com/morajabi/523d7a642d8c0a2f71fcfa0d8b3d2846#gistcomment-3925412
import type { MutableRefObject } from "react";

import { useEffect, useRef, useState } from "react";

export default function useRect<T extends Element>(): [
  DOMRect | undefined,
  MutableRefObject<T | null>
] {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<DOMRect>();

  const set = () => setRect(ref.current?.getBoundingClientRect());

  const useEffectInEvent = (
    event: "resize" | "scroll",
    useCapture?: boolean
  ) => {
    useEffect(() => {
      set();
      window.addEventListener(event, set, useCapture);
      return () => window.removeEventListener(event, set, useCapture);
    }, []);
  };

  useEffectInEvent("resize");
  useEffectInEvent("scroll", true);

  return [rect, ref];
};

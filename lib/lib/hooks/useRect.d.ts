import type { MutableRefObject } from "react";
export default function useRect<T extends Element>(): [
    DOMRect | undefined,
    MutableRefObject<T | null>
];

import type { ComponentType, HTMLAttributes } from "react";
import type { PieceType } from "../types";
declare type Props = HTMLAttributes<HTMLDivElement> & {
    component: ComponentType<{
        piece: PieceType;
    }>;
    index: number;
    piece: PieceType | null;
    wrapper: ComponentType<{
        piece: PieceType | null;
        index: number;
    } & HTMLAttributes<HTMLDivElement>>;
    onTarget: (index: number) => void;
    onUpdateRect: (rect: DOMRect) => void;
};
export default function Dropzone({ component: Component, index, piece, wrapper: Wrapper, onTarget, onUpdateRect, ...props }: Props): JSX.Element;
export {};

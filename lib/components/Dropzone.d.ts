import type { ComponentType, HTMLAttributes } from "react";
import type { PieceType } from "../types";
declare type Props = HTMLAttributes<HTMLDivElement> & {
    component: ComponentType<{
        piece: PieceType;
    }>;
    piece: PieceType | null;
    wrapper: ComponentType<{
        piece: PieceType | null;
    } & HTMLAttributes<HTMLDivElement>>;
    onTarget: (index: number) => void;
    onUpdateRect: (rect: DOMRect) => void;
};
export default function Dropzone({ component: Component, piece, wrapper: Wrapper, onTarget, onUpdateRect, ...props }: Props): JSX.Element;
export {};

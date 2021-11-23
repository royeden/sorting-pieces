import type { ComponentType, HTMLAttributes } from "react";
import type { PieceType } from "../types";
declare type Props = HTMLAttributes<HTMLDivElement> & {
    component: ComponentType<{
        piece: PieceType;
    } & {
        index: number;
    }>;
};
export default function PiecesContainer({ component: Component, ...props }: Props): JSX.Element;
export {};

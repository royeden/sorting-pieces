import type { ComponentType, HTMLAttributes } from "react";
import type { PieceType } from "../types";
declare type Props = HTMLAttributes<HTMLDivElement> & {
    component: ComponentType<{
        piece: PieceType;
    }>;
    wrapper: ComponentType<{
        piece: PieceType | null;
        index: number;
    } & HTMLAttributes<HTMLDivElement>>;
};
export default function Targets({ component, wrapper, ...props }: Props): JSX.Element;
export {};

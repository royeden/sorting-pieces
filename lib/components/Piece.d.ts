import type { HTMLAttributes } from "react";
import type { PieceType } from "../types";
declare type Props = HTMLAttributes<HTMLDivElement> & PieceType & {
    onTarget: (index: number) => void;
};
export default function Piece({ children, id, name, onTarget }: Props): JSX.Element;
export {};

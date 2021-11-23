import type { Dispatch, HTMLAttributes, PropsWithChildren } from "react";
import type { GameState, LevelType } from "../../types";
import type { GameStateAction } from "../../lib/hooks/useGameState";
export declare type PlaygroundContextType = GameState & {
    dispatch: Dispatch<GameStateAction>;
    hasWon: boolean;
};
export declare const PlaygroundContext: import("react").Context<PlaygroundContextType>;
declare type PlaygroundProps = HTMLAttributes<HTMLDivElement> & {
    levels: LevelType[];
};
export default function PlaygroundProvider({ children, levels, ...props }: PropsWithChildren<PlaygroundProps>): JSX.Element;
export {};

import type { Dispatch, PropsWithChildren } from "react";
import type { GameState, LevelType } from "../../types";
import type { GameStateAction } from "../../lib/hooks/useGameState";
export declare type PlaygroundContextType = GameState & {
    dispatch: Dispatch<GameStateAction>;
    hasWon: boolean;
};
export declare const PlaygroundContext: import("react").Context<PlaygroundContextType>;
declare type PlaygroundProps = {
    levels: LevelType[];
};
export default function PlaygroundProvider({ children, levels, }: PropsWithChildren<PlaygroundProps>): JSX.Element;
export {};

/// <reference types="react" />
import type { GameState, LevelType } from "../../types";
declare type Action<T, P = undefined> = {
    type: T;
    payload: P;
};
export declare type GameStateAction = Action<"SET_LEVEL", {
    level: number;
}> | Action<"UPDATE_TARGET_RECT", {
    rect: DOMRect;
    index: number;
}> | Action<"SWAP_PIECE_WITH_TARGET", {
    pieceIndex: number;
    targetIndex: number;
}> | Action<"SWAP_PIECE_WITH_TARGET", {
    pieceIndex: number;
    targetIndex: number;
}> | Action<"SWAP_TARGET_PIECES", {
    fromTargetIndex: number;
    toTargetIndex: number;
}> | Action<"REMOVE_TARGET_PIECE", {
    index: number;
}>;
export default function useGameState(levels: LevelType[]): [GameState, import("react").Dispatch<GameStateAction>];
export {};

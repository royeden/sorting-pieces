import type { GameState, LevelType } from "../../types";

import arrayShuffle from "../utils/arrayShuffle";
import { useReducer } from "react";

type Action<T, P = undefined> = { type: T; payload: P };

export type GameStateAction =
  | Action<"SET_LEVEL", { level: number; }>
  | Action<"UPDATE_TARGET_RECT", { rect: DOMRect; index: number }>
  | Action<
      "SWAP_PIECE_WITH_TARGET",
      { pieceIndex: number; targetIndex: number }
    >
  | Action<
      "SWAP_PIECE_WITH_TARGET",
      { pieceIndex: number; targetIndex: number }
    >
  | Action<
      "SWAP_TARGET_PIECES",
      { fromTargetIndex: number; toTargetIndex: number }
    >
  | Action<"REMOVE_TARGET_PIECE", { index: number }>;

type GameStateReducer = (
  state: GameState,
  action: GameStateAction
) => GameState;

const gameStateReducer: GameStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_LEVEL": {
      const { level } = action.payload;
      return {
        ...state,
        level,
        pieces: arrayShuffle(state.levels[level].pieces.slice(0)),
        targets: Array(state.levels[level].winstate.length).fill({
          rect: new DOMRect(),
          piece: null,
        }),
      };
    }
    case "UPDATE_TARGET_RECT": {
      return {
        ...state,
        targets: state.targets.map((target, index) =>
          index === action.payload.index
            ? { piece: target.piece, rect: action.payload.rect }
            : target
        ),
      };
    }
    case "SWAP_PIECE_WITH_TARGET": {
      const { pieceIndex, targetIndex } = action.payload;
      return {
        ...state,
        pieces: state.pieces.map((piece, index) =>
          index === pieceIndex ? state.targets[targetIndex].piece : piece
        ),
        targets: state.targets.map((target, index) =>
          index === targetIndex
            ? {
                rect: target.rect,
                piece: state.pieces[pieceIndex],
              }
            : target
        ),
      };
    }
    case "SWAP_TARGET_PIECES": {
      const { fromTargetIndex, toTargetIndex } = action.payload;
      return {
        ...state,
        targets: state.targets.map((target, index) =>
          index === fromTargetIndex
            ? {
                rect: target.rect,
                piece: state.targets[toTargetIndex].piece,
              }
            : index === toTargetIndex
            ? {
                rect: target.rect,
                piece: state.targets[fromTargetIndex].piece,
              }
            : target
        ),
      };
    }
    case "REMOVE_TARGET_PIECE": {
      const pieceIndex = state.pieces.findIndex((piece) => piece === null);
      return {
        ...state,
        pieces: state.pieces.map((piece, index) =>
          index === pieceIndex
            ? state.targets[action.payload.index].piece
            : piece
        ),
        targets: state.targets.map((target, index) =>
          index === action.payload.index
            ? {
                rect: target.rect,
                piece: null,
              }
            : target
        ),
      };
    }
    default:
      throw new Error("Incorrect action provided to gameStateReducer!");
  }
};

export default function useGameState(levels: LevelType[]) {
  if (!levels.length)
    throw new Error("Levels should exist for the game to work!");
  return useReducer<GameStateReducer>(gameStateReducer, {
    level: 0,
    levels,
    pieces: arrayShuffle(levels[0].pieces.slice(0)),
    targets: levels[0].winstate.map(() => ({
      piece: null,
      rect: new DOMRect(),
    })),
  });
}

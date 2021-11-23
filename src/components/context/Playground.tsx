import type { Dispatch, HTMLAttributes, PropsWithChildren } from "react";

import type { GameState, LevelType } from "../../types";
import type { GameStateAction } from "../../lib/hooks/useGameState";

import useGameState from "../../lib/hooks/useGameState";
import { AnimateSharedLayout } from "framer-motion";
import { createContext } from "react";

export type PlaygroundContextType = GameState & {
  dispatch: Dispatch<GameStateAction>;
  hasWon: boolean;
};

export const PlaygroundContext = createContext<PlaygroundContextType>(null!);

type PlaygroundProps = HTMLAttributes<HTMLDivElement> & {
  levels: LevelType[];
};

export default function PlaygroundProvider({
  children,
  levels,
  ...props
}: PropsWithChildren<PlaygroundProps>) {
  const [gameState, dispatch] = useGameState(levels);

  const hasWon = levels[gameState.level].winstate.every(
    (piece, index) => piece.id === gameState.targets[index].piece?.id
  );

  return (
    <div {...props} style={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <AnimateSharedLayout>
        <PlaygroundContext.Provider key={`${gameState.level}`} value={{ ...gameState, hasWon, dispatch }}>
          {children}
        </PlaygroundContext.Provider>
      </AnimateSharedLayout>
    </div>
  );
}

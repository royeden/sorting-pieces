import React, { useEffect } from "react";
import {
  PiecesContainer,
  PlaygroundProvider,
  Targets,
  usePlaygroundContext,
} from "sorting-game";
import logo from "./logo.svg";

import mocklevels from "./mocklevels";

function Game() {
  const { hasWon, level, levels, dispatch } = usePlaygroundContext();

  useEffect(() => {
    if (hasWon && level < levels.length - 1) {
      dispatch({ type: "SET_LEVEL", payload: { level: level + 1 } });
    }
  }, [dispatch, hasWon, level, levels.length]);

  return hasWon && level === levels.length - 1 ? (
    <div>You win!</div>
  ) : (
    <div className="flex flex-col items-center justify-between w-full h-full space-y-72">
      <PiecesContainer
        component={(props) => (
          <div className="flex items-center justify-center w-40 h-40 bg-white">
            {props.piece.name}
          </div>
        )}
        className="flex flex-wrap justify-around w-full p-8 bg-gray-600 rounded-lg"
      />
      <Targets
        component={(props) => (
          <div className="flex items-center justify-center w-40 h-40 bg-white">
            {props.piece.name}
          </div>
        )}
        wrapper={(props) => (
          <div className="w-40 h-40 bg-black">{props.children}</div>
        )}
        className="flex flex-wrap justify-around w-full p-8 bg-gray-600 rounded-lg"
      />
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-700">
      <img src={logo} className="w-40 h-40 animate-bounce" alt="logo" />
      <PlaygroundProvider levels={mocklevels}>
        <Game />
      </PlaygroundProvider>
    </div>
  );
}

export default App;

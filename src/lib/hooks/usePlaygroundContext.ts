import type { PlaygroundContextType } from "../../components/context/Playground";

import { useContext } from "react";

import { PlaygroundContext } from "../../components/context/Playground";

export default function usePlaygroundContext(): PlaygroundContextType {
  return useContext(PlaygroundContext)
}
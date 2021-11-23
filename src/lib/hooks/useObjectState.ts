import type { Dispatch, SetStateAction } from "react";

import { useState } from "react";

export type SetPartialStateAction<T> =
  | Partial<T>
  | ((prevState: T) => Partial<T>);
type ObjectStateHook<T> = [
  T,
  {
    setState: Dispatch<SetStateAction<T>>;
    mergeState: Dispatch<SetPartialStateAction<T>>;
  }
];

export default function useObjectState<T extends Record<string, any>>(
  initialState: T
): ObjectStateHook<T> {
  const [state, setState] = useState(initialState);

  const mergeState = (partialState: SetPartialStateAction<T>) =>
    setState((prevState) =>
      Object.assign(
        {},
        prevState,
        typeof partialState === "function"
          ? partialState(prevState)
          : partialState
      )
    );

  return [state, { setState, mergeState }];
}

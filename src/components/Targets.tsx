import type { ComponentType, HTMLAttributes } from "react";

import type { PieceType } from "../types";

import usePlaygroundContext from "../lib/hooks/usePlaygroundContext";

import Dropzone from "./Dropzone";

type Props = HTMLAttributes<HTMLDivElement> & {
  component: ComponentType<{ piece: PieceType }>;
  wrapper: ComponentType<
    { piece: PieceType | null, index: number } & HTMLAttributes<HTMLDivElement>
  >;
};

export default function Targets({ component, wrapper, ...props }: Props) {
  const { level, targets, dispatch } = usePlaygroundContext();

  return (
    <div key={`targets-${level}`} {...props}>
      {targets.map(({ piece }, index) => (
        <Dropzone
          key={`dropzone-${index}-${piece?.id ?? "empty"}`}
          component={component}
          index={index}
          piece={piece}
          wrapper={wrapper}
          onTarget={(targetIndex) =>
            targetIndex < 0
              ? dispatch({ type: "REMOVE_TARGET_PIECE", payload: { index } })
              : dispatch({
                  type: "SWAP_TARGET_PIECES",
                  payload: {
                    fromTargetIndex: index,
                    toTargetIndex: targetIndex,
                  },
                })
          }
          onUpdateRect={(rect) =>
            dispatch({ type: "UPDATE_TARGET_RECT", payload: { rect, index } })
          }
        />
      ))}
    </div>
  );
}

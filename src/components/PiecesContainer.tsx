import type { ComponentType, HTMLAttributes } from "react";

import type { PieceType } from "../types";

import { useRef } from "react";

import usePlaygroundContext from "../lib/hooks/usePlaygroundContext";

import Piece from "./Piece";

type Props = HTMLAttributes<HTMLDivElement> & {
  component: ComponentType<{ piece: PieceType } & { index: number }>;
};

export default function PiecesContainer({
  component: Component,
  ...props
}: Props) {
  const { level, pieces, dispatch } = usePlaygroundContext();
  const container = useRef<HTMLDivElement>(null!);
  return (
    <div key={`pieces-${level}`} ref={container} {...props}>
      {pieces.map(
        (piece, index) =>
          piece && (
            <Piece
              key={piece.id}
              id={piece.id}
              name={piece.name}
              onTarget={(targetIndex) =>
                targetIndex >= 0 &&
                dispatch({
                  type: "SWAP_PIECE_WITH_TARGET",
                  payload: { pieceIndex: index, targetIndex },
                })
              }
            >
              <Component piece={piece} index={index} />
            </Piece>
          )
      )}
    </div>
  );
}

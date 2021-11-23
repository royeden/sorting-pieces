import type { ComponentType, HTMLAttributes } from "react";

import type { PieceType } from "../types";

import { useEffect } from "react";

import Piece from "../components/Piece";
import useRect from "../lib/hooks/useRect";

type Props = HTMLAttributes<HTMLDivElement> & {
  component: ComponentType<{ piece: PieceType }>;
  piece: PieceType | null;
  wrapper: ComponentType<
    { piece: PieceType | null } & HTMLAttributes<HTMLDivElement>
  >;
  onTarget: (index: number) => void;
  onUpdateRect: (rect: DOMRect) => void;
};

export default function Dropzone({
  component: Component,
  piece,
  wrapper: Wrapper,
  onTarget,
  onUpdateRect,
  ...props
}: Props) {
  const [rect, ref] = useRect<HTMLDivElement>();

  useEffect(() => {
    if (rect) onUpdateRect(rect);
  }, [rect]);

  return (
    <div ref={ref} {...props}>
      <Wrapper piece={piece}>
        {piece && (
          <Piece id={piece.id} name={piece.name} onTarget={onTarget}>
            <Component piece={piece} />
          </Piece>
        )}
      </Wrapper>
    </div>
  );
}

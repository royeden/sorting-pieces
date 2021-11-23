import type { HTMLAttributes } from "react";

import type { PieceType } from "../types";

import { motion } from "framer-motion";

import usePlaygroundContext from "../lib/hooks/usePlaygroundContext";

type Props = HTMLAttributes<HTMLDivElement> &
  PieceType & {
    onTarget: (index: number) => void;
  };

export default function Piece({ children, id, name, onTarget }: Props) {
  const { targets } = usePlaygroundContext();
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={1}
      layoutId={id}
      onDragEnd={(event, info) => {
        const { clientWidth: width, clientHeight: height } =
          event.target as Element;
        const intersectingTargetIndex = targets.findIndex(({ rect }) => {
          return (
            info.point.y > rect.top - height / 2 &&
            info.point.y < rect.bottom + height / 2 &&
            info.point.x > rect.left - width / 2 &&
            info.point.x < rect.right + width / 2
          );
        });
        onTarget(intersectingTargetIndex);
      }}
      title={name}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
}

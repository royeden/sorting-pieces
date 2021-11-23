import type { PieceType } from "sorting-game";

function createMockPiece(index: number): PieceType {
  const string = index + "";
  return {
    id: string,
    // image: `#${Math.floor(Math.random() * 16777215)
    //   .toString(16)
    //   .padStart(6, "0")}`,
    name: string,
  };
}

const mocklevels = [
  {
    pieces: Array.from(Array(4)).map((_, index) => createMockPiece(index)),
    winstate: Array.from(Array(3)).map((_, index) => createMockPiece(index)),
  },
  {
    pieces: Array.from(Array(6)).map((_, index) => createMockPiece(index)),
    winstate: Array.from(Array(3)).map((_, index) => createMockPiece(index)),
  },
];

export default mocklevels;

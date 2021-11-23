export type PieceType = {
  id: string;
  name: string;
  data?: Record<string, any>;
};

export type LevelType = {
  pieces: PieceType[];
  winstate: PieceType[];
};

export type TargetType = {
  rect: DOMRect;
  piece: PieceType | null;
};

export type GameState = {
  level: number;
  levels: LevelType[];
  pieces: Array<PieceType | null>;
  targets: TargetType[];
};

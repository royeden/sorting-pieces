export declare type PieceType = {
    id: string;
    name: string;
    data?: Record<string, any>;
};
export declare type LevelType = {
    pieces: PieceType[];
    winstate: PieceType[];
};
export declare type TargetType = {
    rect: DOMRect;
    piece: PieceType | null;
};
export declare type GameState = {
    level: number;
    levels: LevelType[];
    pieces: Array<PieceType | null>;
    targets: TargetType[];
};

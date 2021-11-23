import type { Dispatch, SetStateAction } from "react";
export declare type SetPartialStateAction<T> = Partial<T> | ((prevState: T) => Partial<T>);
declare type ObjectStateHook<T> = [
    T,
    {
        setState: Dispatch<SetStateAction<T>>;
        mergeState: Dispatch<SetPartialStateAction<T>>;
    }
];
export default function useObjectState<T extends Record<string, any>>(initialState: T): ObjectStateHook<T>;
export {};

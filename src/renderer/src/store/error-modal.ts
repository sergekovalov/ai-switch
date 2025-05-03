import { atom, useAtom } from "jotai";

type TBody = { title?: string; message: string };

export const ErrorModalAtom = atom<TBody | null>(null);

export const useErrorModal = (): [TBody | null, (TBody) => void] => useAtom(ErrorModalAtom);

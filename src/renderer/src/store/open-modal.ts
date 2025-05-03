import { ModalStatus } from "@/types/modal-status.enum";
import { ModalTypes } from "@/types/modal-types.enum";
import { atom, useAtom } from "jotai";

type TBody = { type: ModalTypes; status: ModalStatus; payload: Record<string, any> };

export const OpenModalAtom = atom<TBody | null>(null);

export const useOpenModal = (): [TBody | null, (TBody) => void] => useAtom(OpenModalAtom);

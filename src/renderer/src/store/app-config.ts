import { atom, useAtom } from 'jotai'
import { TStoreConfig } from 'src/renderer/types/store-config.type'

export const ConfigAtom = atom<TStoreConfig | undefined>()

export const useConfig = (): [TStoreConfig | undefined, (TStoreConfig) => void] =>
  useAtom(ConfigAtom)

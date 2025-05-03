import { atom, useAtom } from 'jotai'
import { TAppConfig } from '@/types/app-config.type'
import { DEFAULT_STORE_CONFIG } from '@/utils/constants'

export const AppConfigAtom = atom<TAppConfig>(DEFAULT_STORE_CONFIG)

export const useAppConfig = (): [TAppConfig, (TAppConfig) => void] => useAtom(AppConfigAtom)

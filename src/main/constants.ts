import { TStoreConfig } from './types/store-config.type'

export const CURRENT_DEFAULT_STORE_CONFIG_VERSION = 1

export const DEFAULT_STORE_CONFIG: TStoreConfig = {
  version: 1,
  sources: {
    openai: {
      apiKey: undefined
    },
    deepseek: {
      apiKey: undefined
    }
  },
  chats: []
}

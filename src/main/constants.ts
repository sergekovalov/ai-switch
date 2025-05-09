import { TAppConfig } from './types/app-config.type'

export const REPO_URL = 'https://raw.githubusercontent.com/sergekovalov/ai-switch/refs/heads/main'

export const DEFAULT_STORE_CONFIG: TAppConfig = {
  version: '',
  aiModels: undefined,
  sources: [],
  chats: {
    selectedChatIndex: -1,
    list: []
  }
}

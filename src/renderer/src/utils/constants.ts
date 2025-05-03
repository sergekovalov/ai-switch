import { TAppConfig } from '@/types/app-config.type'

export enum AISources {
  openai = 'openai',
  deepseek = 'deepseek'
}

export const DEFAULT_STORE_CONFIG: TAppConfig = {
  version: '',
  aiModels: undefined,
  sources: [],
  chats: {
    selectedChatIndex: -1,
    list: []
  }
}

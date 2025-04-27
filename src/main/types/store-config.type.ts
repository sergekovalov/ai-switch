import { TChat } from "./chat.type"

export type TStoreConfig = {
  version: number
  sources: {
    openai: {
      apiKey?: string
    }
    deepseek: {
      apiKey?: string
    }
  }
  chats: TChat[]
}

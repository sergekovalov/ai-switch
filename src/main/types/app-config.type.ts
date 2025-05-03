export type TModelsConfig = Record<
  string,
  [{ name: string; price: { input: number; output: number } }]
>

export type TAIModelsConfig = {
  chat: TModelsConfig
  reasoning: TModelsConfig
  images: string[]
}

export type TAISource = {
  name: string
  apiKey: string
}

export enum TChatMessageRole {
  system = 'system',
  user = 'user'
}

export type TChatMessage = {
  role: TChatMessageRole
  content: string
}

export type TChat = {
  name: string
  model: string
  selected?: boolean
  messages: TChatMessage[]
}

export type TChats = {
  selectedChatIndex: number
  list: TChat[]
}

export type TAppConfig = {
  version: string
  aiModels?: TAIModelsConfig
  sources: TAISource[]
  chats: TChats
}

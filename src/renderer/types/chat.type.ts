export type TChatMessage = {
  role: 'system' | 'user'
  content: string
}

export type TChat = {
  model: string
  messages: TChatMessage[]
}

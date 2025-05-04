import { TChatMessage } from '@/types/app-config.type'
import OpenAI from 'openai'

type TConfig = {
  source: string
  apiKey: string
  model: string
}

const BASE_URL = {
  deepseek: 'https://api.deepseek.com'
}

export class AIClient {
  private readonly client: OpenAI
  private readonly config: TConfig

  constructor(config: TConfig) {
    this.config = config

    const cfg = {
      apiKey: config.apiKey,
      dangerouslyAllowBrowser: true
    }
    if (config.source !== 'openai') {
      cfg['baseURL'] = BASE_URL[config.source]
    }

    this.client = new OpenAI(cfg)
  }

  public async sendChatMessage(prompt: string, history: TChatMessage[] = []): Promise<string> {
    const resp = await this.client.chat.completions.create({
      model: this.config.model,
      temperature: 0.5,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [
        ...history,
        {
          role: 'user',
          content: prompt
        }
      ]
    })

    return resp.choices[0].message.content as string
  }
}

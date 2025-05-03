import { app } from 'electron'
import fs from 'node:fs'
import path from 'node:path'
import { Singleton } from './decorators/singleton.decorator'
import { TAISource, TAppConfig } from './types/app-config.type'
import { DEFAULT_STORE_CONFIG } from './constants'

@Singleton
export class Store {
  private config: TAppConfig
  private filePath: string

  constructor() {
    this.filePath = path.join(app.getPath('userData'), 'config.json')
  }

  public load() {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify(DEFAULT_STORE_CONFIG), 'utf-8')
    }

    this.config = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
    console.log('>>>', this.config)
  }

  public getConfig(): TAppConfig {
    return this.config
  }

  public setSources(aiSources: TAISource[]) {
    this.config.sources = aiSources
    this.commit()
  }

  private async commit(): Promise<void> {
    await fs.promises.writeFile(this.filePath, JSON.stringify(this.config), 'utf-8')
  }
}

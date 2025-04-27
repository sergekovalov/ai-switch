import { app } from 'electron'
import fs from 'node:fs'
import path from 'node:path'
import { Singleton } from './decorators/singleton.decorator'
import { TStoreConfig } from './types/store-config.type'
import { DEFAULT_STORE_CONFIG } from './constants'

@Singleton
export class Store {
  public config: TStoreConfig
  private filePath: string

  constructor() {
    this.filePath = path.join(app.getPath('userData'), 'config.json')
  }

  public load() {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify(DEFAULT_STORE_CONFIG), 'utf-8')
    }

    this.data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
  }

  public async persist(): Promise<void> {
    await fs.promises.writeFile(this.filePath, JSON.stringify(this.data), 'utf-8')
  }
}

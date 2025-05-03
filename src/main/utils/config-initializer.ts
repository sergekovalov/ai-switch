import { REPO_URL } from '../constants'
import { Store } from '../store'
import axios, { Axios } from 'axios'
import packageJson from '../../../package.json'
import { TAIModelsConfig } from '../types/app-config.type'

export class ConfigInitializer {
  private readonly store: Store
  private readonly repoEndpoint: Axios

  constructor() {
    this.store = new Store()
    this.repoEndpoint = axios.create({
      baseURL: REPO_URL
    })
  }

  public async load(): Promise<void> {
    await this.loadAIModels()
    this.loadPackageJson()
  }

  private async loadAIModels(): Promise<void> {
    const aiModels = await this.repoEndpoint
      .get<TAIModelsConfig>('/ai-models.json')
      .then(({ data }) => data)

    this.store.config.aiModels = aiModels
  }

  private loadPackageJson() {
    this.store.config.version = packageJson.version
  }
}

import { Store } from '../../store'
import { TAISource, TAppConfig } from '../../types/app-config.type'

export class ConfigService {
  constructor(private readonly store: Store) {}

  public getConfig(): TAppConfig {
    return this.store.getConfig()
  }

  public updateAISources(sources: TAISource[]) {
    this.store.setSources(sources)
  }
}

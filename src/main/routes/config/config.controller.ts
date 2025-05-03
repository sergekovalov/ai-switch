import { IpcMainEvent } from 'electron'
import { ConfigService } from './config.service'
import { TAISource } from '../../types/app-config.type'

export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  public getConfig(event: IpcMainEvent) {
    event.sender.send('get/config', this.configService.getConfig())
  }

  public updateAISources(event: IpcMainEvent, aiSources: TAISource[]) {
    this.configService.updateAISources(aiSources)
  }
}

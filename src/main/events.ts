import { ipcMain } from 'electron'
import { ConfigController } from './routes/config/config.controller'
import { ConfigService } from './routes/config/config.service'
import { Store } from './store'
import { TAISource } from './types/app-config.type'

const configController = new ConfigController(new ConfigService(new Store()))

export const registerEvents = () => {
  ipcMain.on('get/config', (event) => configController.getConfig(event))
  ipcMain.on('put/config/ai-sources', (event, data: TAISource[]) =>
    configController.updateAISources(event, data)
  )
}

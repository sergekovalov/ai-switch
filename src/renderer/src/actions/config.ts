import { TAISource, TAppConfig } from '@/types/app-config.type'

const { ipcRenderer } = window.electron

export const getConfig = (): Promise<TAppConfig> => {
  return new Promise((resolve) => {
    ipcRenderer.once('get/config', (event, resp) => {
      resolve(resp as TAppConfig)
    })
    ipcRenderer.send('get/config')
  })
}

export const updateAISources = (aiSources: TAISource[]): Promise<void> => {
  return new Promise((resolve) => {
    ipcRenderer.once('put/config/ai-sources', () => resolve())
    ipcRenderer.send('put/config/ai-sources', aiSources)
  })
}

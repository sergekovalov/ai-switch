const { ipcRenderer } = window.electron

export const getConfig = () => {
  ipcRenderer.once('pong', (resp) => {
    console.log('>>>', resp)
  })
  ipcRenderer.send('ping')
}

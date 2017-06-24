const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win
app.on('ready', () => {
   win = new BrowserWindow({
      width: 1024,
      height: 720
   })

   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
   }))

   win.webContents.openDevTools()

   win.on('closed', () => {
      win = null
   })
})

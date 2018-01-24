'use strict'

import { app, screen, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  let size = screen.getPrimaryDisplay().workAreaSize
  let xOffSet = (size.width - 1000) / 2 // top
  console.log(xOffSet)
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000, // center:520,top:1000,main:920,dialog:460,screen:size.width
    height: 66, // center:340,top:66, main:610,dialog:355,screen:size.height
    useContentSize: true,
    resizable: false,
    // transparent: true,
    x: xOffSet, // top
    y: 0, // top
    show: false,
    center: true,
    frame: false
  })

  mainWindow.loadURL(winURL)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    mainWindow.openDevTools()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

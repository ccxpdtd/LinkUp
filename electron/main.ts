import { app, BrowserWindow } from 'electron'
import { join } from 'path'

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: true,         // ✅ 控制是否显示系统标题栏
    autoHideMenuBar: true, // ✅ 隐藏菜单栏（Windows/Linux）
    webPreferences: {
      preload: join(__dirname, 'preload.js'), // 可以先留空
    }
  })

  // 开发环境加载 Vite/Vue 的本地地址
  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173')
  } else {
    // 打包后加载打包好的 index.html
    win.loadFile(join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

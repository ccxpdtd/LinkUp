"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 1000,
        height: 600,
        frame: true, // ✅ 控制是否显示系统标题栏
        autoHideMenuBar: true, // ✅ 隐藏菜单栏（Windows/Linux）
        webPreferences: {
            preload: (0, path_1.join)(__dirname, 'preload.js'), // 可以先留空
        }
    });
    // 开发环境加载 Vite/Vue 的本地地址
    if (!electron_1.app.isPackaged) {
        win.loadURL('http://localhost:5173');
    }
    else {
        // 打包后加载打包好的 index.html
        win.loadFile((0, path_1.join)(__dirname, '../dist/index.html'));
    }
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});

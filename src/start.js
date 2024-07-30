const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

app.setPath('userData', path.join(__dirname, 'userData'));

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900
  });

  win.loadFile('src/index.html');
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

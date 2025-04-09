const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Optional: preload script
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: true // Enable Node.js integration
        },
    });

    // Load the main HTML file
    win.loadFile('Home Page HTML.html'); 

    // Handle navigation
    ipcMain.on('navigate', (event, page) => {
        win.loadFile(page); // Load the requested page
    });
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

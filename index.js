const { app, BrowserWindow } = require('electron');
app.on('ready', () => {
    let mainwindow = new BrowserWindow();
    mainwindow.maximize();
    mainwindow.loadURL(`file://${__dirname}/app/dist/index.html`);
});

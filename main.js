/* eslint strict: 0 */
'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const crashReporter = electron.crashReporter;
const shell = electron.shell;

const DEV = process.env.NODE_ENV === 'development';
const OSX = process.platform === 'darwin'

let menu;
let template;
let mainWindow = null;

crashReporter.start();

// 仅开发模式下 启用electron-debug 方便调试
if (DEV) require('electron-debug')();


app.on('window-all-closed', () => {
  if (!OSX) app.quit();
});


app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1024, height: 728 });

  if (process.env.HOT) {
    mainWindow.loadURL(`file://${__dirname}/app/hot-dev-app.html`);
  } else {
    mainWindow.loadURL(`file://${__dirname}/app/app.html`);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (DEV) {
    mainWindow.openDevTools();
  }

  if (OSX) {
    template = [{
      label: 'ElectronReact',
      submenu: [{
        label: 'About ElectronReact',
        selector: 'orderFrontStandardAboutPanel:'
      // 暂时没有Services
      // }, {
      //   type: 'separator'
      // }, {
      //   label: 'Services',
      //   submenu: []
      }, {
        type: 'separator'
      }, {
        label: 'Hide ElectronReact',
        accelerator: 'Command+H',
        selector: 'hide:'
      }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      }, {
        label: 'Show All',
        selector: 'unhideAllApplications:'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() {
          app.quit();
        }
      }]
    }, {
      label: 'Edit',
      submenu: [{
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
      }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
      }, {
        type: 'separator'
      }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
      }, {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
      }, {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
      }, {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
      }]
    // Window菜单 不方便做自动更新 暂时禁用
    // }, {
    //   label: 'Window',
    //   submenu: [{
    //     label: 'Minimize',
    //     accelerator: 'Command+M',
    //     selector: 'performMiniaturize:'
    //   }, {
    //     label: 'Close',
    //     accelerator: 'Command+W',
    //     selector: 'performClose:'
    //   }, {
    //     type: 'separator'
    //   }, {
    //     label: 'Bring All to Front',
    //     selector: 'arrangeInFront:'
    //   }]
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('https://github.com/fritx');
        }
      }]
    }];

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  } else {
    template = [{
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('https://github.com/fritx');
        }
      }]
    }];
    menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
  }
});

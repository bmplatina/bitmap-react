"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var isDev = require("electron-is-dev");
var remote = require("@electron/remote/main");
var BASE_URL = "http://localhost:3000";
var isMac = process.platform === "darwin";
// BrowserWindow 객체는 전역으로 관리합니다.
// 전역이 아닌 경우 자바스크립트 가비지 컬렉팅 발생 시 의도치 않게 browser window가 닫힐 수 있습니다.
var mainWindow = null;
remote.initialize();
var createWindow = function () {
    // browser window를 생성합니다.
    mainWindow = new electron_1.BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        fullscreenable: true,
        titleBarStyle: "hiddenInset",
        frame: isMac,
        title: "Bitmap",
        webPreferences: {
            devTools: isDev,
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        }
    });
    // 앱의 index.html을 로드합니다.
    if (isDev) {
        // 개발 모드인 경우
        mainWindow.loadURL(BASE_URL); // 개발 도구에서 호스팅하는 주소로 로드합니다.
        mainWindow.webContents.openDevTools({ mode: "detach" }); // DevTools를 엽니다.
    }
    else {
        // 프로덕션 모드인 경우
        mainWindow.loadFile(path.join(__dirname, "./build/index.html")); //
    }
    remote.enable(mainWindow.webContents);
};
// Electron이 준비되면 whenReady 메서드가 호출되어,
// 초기화 및 browser window를 생성합니다.
electron_1.app.whenReady().then(function () {
    createWindow();
    // Linux와 Winodws 앱은 browser window가 열려 있지 않을 때 종료됩니다.
    // macOS는 browser window가 열려 있지 않아도 계속 실행되기 때문에,
    // browser window가 열려 있지 않을 때 앱을 활성화 하면 새로운 browser window를 열어줍니다.
    electron_1.app.on("activate", function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
// Linux와 Winodws에서는 모든 창을 종료하면 일반적으로 앱이 완전히 종료됩니다.
// macOS(darwin)가 아닌 경우, 'window-all-closed' 이벤트가 발생했을 때, 앱을 종료합니다.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});

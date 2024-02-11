const { BrowserWindow } = require("electron");
const path = require("node:path");
const {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} = require("../../../common/config/win-config");
const { initMenu } = require("./menu");
const initWindow = () => {
  let win = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    maximizable: false,
    webPreferences: {
      zoomFactor: 1.0,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile(path.join(__dirname, "index.html"));
  win.on("closed", () => {
    win = null;
  });
  initMenu(win);
};

module.exports = { initWindow };

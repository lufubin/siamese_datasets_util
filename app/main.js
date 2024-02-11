const { app } = require("electron");
const { initWindow } = require("./browserWindows/src/main/window");
require("./ipc/ipc-handle");

app.whenReady().then(initWindow);
app.on("window-all-closed", () => {
  app.quit();
});

const { ipcMain } = require("electron");
const {
  getFileTree,
  getFileList,
  siameseFile,
  deleteFiles,
} = require("../common/util/file-util");

ipcMain.handle("getFileTree", (event, path) => {
  return getFileTree(path);
});
ipcMain.handle("getFileList", (event, path) => {
  return getFileList(path);
});
ipcMain.handle("siameseFile", (event, paths) => {
  return siameseFile(paths);
});
ipcMain.handle("deleteFiles", (event, paths) => {
  return deleteFiles(paths);
});

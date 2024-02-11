const { contextBridge, ipcRenderer, contentTracing } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", {
  on: (channel, listener) => {
    ipcRenderer.on(channel, (event, data) => listener(data));
  },
});

contextBridge.exposeInMainWorld("file", {
  tree: async (path) => {
    return await ipcRenderer.invoke("getFileTree", path);
  },
  list: async (path) => {
    return await ipcRenderer.invoke("getFileList", path);
  },
  siamese: async (paths) => {
    if (paths.length != 2) {
      return { success: false, error: "请选择相似的两张图片" };
    }
    try {
      await ipcRenderer.invoke("siameseFile", paths);
    } catch (err) {
      return { success: false, error: err.message };
    }
    return { success: true };
  },
  delete: async (paths) => {
    try {
      await ipcRenderer.invoke("deleteFiles", paths);
    } catch (err) {
      return { success: false, error: err.message };
    }
    return { success: true };
  },
});

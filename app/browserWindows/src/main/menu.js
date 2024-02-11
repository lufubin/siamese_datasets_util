const { Menu, dialog } = require("electron");

const initMenu = (win) => {
  const loadDatasets = () => {
    const data = dialog.showOpenDialogSync(win, {
      properties: ["openDirectory"],
    });
    if (!data) return;
    win.webContents.send("loadDatasets", data[0]);
  };

  const menuTemplate = [
    {
      label: "加载数据集",
      click: loadDatasets,
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

module.exports = { initMenu };

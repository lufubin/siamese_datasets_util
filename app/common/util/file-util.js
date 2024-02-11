const fs = require("fs");
const path = require("path");
const uuid = require("node-uuid");

const getFileTree = (datasetPath) => {
  const dirList = fs.readdirSync(datasetPath);
  const fileTreeList = [];

  let index = 0;
  dirList.forEach((dirname) => {
    const fileList = [];
    const fileTree = {
      id: index,
      title: dirname,
      path: path.join(datasetPath, dirname),
      children: fileList,
    };
    fileTreeList.push(fileTree);
    index += 1;
  });
  return fileTreeList;
};
const getFileList = (dirPath) => {
  const fileList = fs.readdirSync(dirPath);
  return fileList;
};
const siameseFile = (paths) => {
  const filename = uuid.v4().replace(/-/g, "");
  for (let index = 0; index < paths.length; index++) {
    const filePath = paths[index];
    const dirname = path.dirname(filePath);
    fs.renameSync(filePath, `${dirname}\\${filename}_${index + 1}.jpg`);
  }
};
const deleteFiles = (paths) => {
  paths.forEach((filePath) => {
    fs.unlinkSync(filePath);
  });
};

module.exports = {
  getFileTree,
  getFileList,
  siameseFile,
  deleteFiles,
};

const path = require("path");
const paths = require("./paths");

exports.assetPath = (_path) => path.posix.join(paths.assetsSubdirectory, _path);
exports.resovle = (dir) => path.join(__dirname, "./../", dir);

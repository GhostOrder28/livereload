const { promises: fs } = require("fs");
const { getOutputPath } = require("../utils");

async function removePath (path) {
  try {
    const siblingPath = getOutputPath(path);
    await fs.rmdir(siblingPath)
  } catch (err) {
    console.error(err)
  }
};

module.exports = removePath;

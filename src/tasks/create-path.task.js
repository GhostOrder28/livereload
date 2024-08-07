const { promises: fs } = require("fs");
const { getOutputPath } = require("../utils");

async function createPath (path) {
  try {
    const siblingPath = getOutputPath(path);
    await fs.mkdir(siblingPath, { recursive: true })
  } catch (err) {
    console.error(err)
  }
};

module.exports = createPath;

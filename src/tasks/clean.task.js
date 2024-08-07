const { promises: fs } = require("fs");
const reload = require("./reload.task");
const { getOutputPath } = require("../utils");

async function clean (path) {
  const siblingPath = getOutputPath(path);
  await fs.rm(siblingPath, { recursive: true })
  reload();
};

module.exports = clean;

function getOutputPath (path) {
  const siblingPath = path.replace("input", "output");
  return siblingPath;
};

module.exports = {
  getOutputPath
}

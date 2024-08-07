const bsInstance = require("../config/browser-sync.config");

function reload (cb) {
  bsInstance.reload()
  cb && cb()
};

module.exports = reload;

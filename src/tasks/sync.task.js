const bsInstance = require("../config/browser-sync.config");

function sync (cb) {
  bsInstance.init({
    proxy: "http://localhost:4000",
  });
  cb()
};

module.exports = sync;

const { src, dest } = require("gulp");
const header = require("gulp-header");
const footer = require("gulp-footer");

function injectTagsInPhp (cb) {
  src("/srv/input/**/*.php")
  .pipe(header("<body>"))
  .pipe(footer("?>"))
  .pipe(footer("</body>"))
  .pipe(dest("/srv/output"))
  cb()
};

module.exports = injectTagsInPhp;

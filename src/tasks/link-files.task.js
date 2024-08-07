const { src, symlink } = require("gulp");

function linkFiles (cb) {
  src([
    "/srv/input/**/*.html",
    "/srv/input/**/*.css",
    "/srv/input/**/*.js",
  ])
  .pipe(symlink("/srv/output"))
  cb()
};

module.exports = linkFiles;

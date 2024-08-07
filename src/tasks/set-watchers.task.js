const { watch, series  } = require("gulp");

const injectTagsInPhp = require("./inject-tags-in-php.task");
const linkFiles = require("./link-files.task");
const reload = require("./reload.task");
const createPath = require("./create-path.task");
const removePath = require("./remove-path.task");
const clean = require("./clean.task");

function setWatchers () {
  // php handling
  watch(
    "/srv/input/**/*.php",
    { events: [ "add", "change" ] },
    series(injectTagsInPhp, reload)
  )   

  // other file types handling
  watch([
    "/srv/input/**/*.html",
    "/srv/input/**/*.css",
    "/srv/input/**/*.js",
  ], { events: [ "add" ] }, linkFiles)

  watch([
    "/srv/input/**/*.html",
    "/srv/input/**/*.css",
    "/srv/input/**/*.js",
  ], { events: [ "change" ] }, reload)

  watch([
    "/srv/input/**/*.html",
    "/srv/input/**/*.css",
    "/srv/input/**/*.js",
    "/srv/input/**/*.php",
  ]).on("unlink", async (path) => await clean(path))
  // how can I change this to the watch(globs, options, task) form?

  watch("/srv/input/")
    .on("addDir", async (path) => await createPath(path))

  watch("/srv/input/")
    .on("unlinkDir", async (path) => await removePath(path))
};

module.exports = setWatchers;

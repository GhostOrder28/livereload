const { series } = require("gulp");

const injectTagsInPhp = require("./src/tasks/inject-tags-in-php.task");
const linkFiles = require("./src/tasks/link-files.task");
const connectPHP = require("./src/tasks/connect-php.task");
const sync = require("./src/tasks/sync.task");
const setWatchers = require("./src/tasks/set-watchers.task");

exports.default = series(
  linkFiles, 
  injectTagsInPhp, 
  connectPHP, 
  sync, 
  setWatchers
);

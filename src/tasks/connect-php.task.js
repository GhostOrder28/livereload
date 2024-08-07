const connect = require("gulp-connect-php");

function connectPHP (cb) {
  connect.server({
    base: "/srv/output",
    port: 4000,
    debugger: true
  });
  cb()
}

module.exports = connectPHP

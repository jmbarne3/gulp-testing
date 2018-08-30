/**
 * `watch` module
 *
 * ==============
 *
 * Defines the watch task
 */
const {config} = require('../config/paths');
const gulp     = require('gulp');
const server   = require('../lib/server');

module.exports = (gulp, plugins) => {
  return (done) => {
    server.serverServe(done);

    gulp.watch(`${config.src.scssPath}/**/*.scss`, gulp.series('css', server.serverReload));
    gulp.watch(`${config.src.jsPath}/**/*.js`, gulp.series('js', server.serverReload));
    gulp.watch('./**/*.php', server.serverReload);
  };
};

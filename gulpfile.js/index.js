/*
 *  `gulpfile.js` index module
 *  ==========================
 *
 *  Rather than managing one big file containing multiple Gulp tasks and
 *  helper functions, the whole collection has been split and organized under
 *  the `tasks/` directory. User tasks are exposed below.
 */

const gulp    = require('gulp');
const plugins = require('gulp-load-plugins');

const getTask = (task) => {
  return require(`./tasks/${task}`)(gulp, plugins);
};

// CSS Tasks
gulp.task('scss-lint-theme', getTask('scss-lint-theme'));
gulp.task('scss-build-theme', getTask('scss-build-theme'));
gulp.task('css', gulp.series('scss-lint-theme', 'scss-build-theme'));

// JS Tasks
gulp.task('es-lint-theme', getTask('es-lint-theme'));
gulp.task('js-build-theme', getTask('js-build-theme'));
gulp.task('js', gulp.series('es-lint-theme', 'js-build-theme'));

gulp.task('watch', getTask('watch'));
gulp.task('default', gulp.series('css', 'js'));

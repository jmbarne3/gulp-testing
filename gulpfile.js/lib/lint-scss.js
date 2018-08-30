/*
 * `lintSCSS` module
 * ===============
 *
 * Describes a projects working tree
 */
const gulp     = require('gulp');
const sassLint = require('gulp-sass-lint');

const lintSCSS = (src) => {
  return gulp.src(src)
    .pipe(sassLint());
};

module.exports = lintSCSS;

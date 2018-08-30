/**
 * `lint-js` module
 *
 * =================
 *
 * Handles linting and fixing of js files
 */
const {config} = require('../config/paths');
const gulp     = require('gulp');
const eslint   = require('gulp-eslint');
const isFixed  = require('gulp-eslint-if-fixed');


const lintJS = (src, dest) => {
  dest = dest || config.src.jsPath;

  return gulp.src(src)
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(isFixed(dest));
};

module.exports = lintJS;

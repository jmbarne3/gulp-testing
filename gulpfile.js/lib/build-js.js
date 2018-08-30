/**
 * `build-js` module
 *
 * =================
 *
 * Handles the building of javascript files.
 */
const {config} = require('../config/paths');
const gulp     = require('gulp');
const include  = require('gulp-include');
const babel    = require('gulp-babel');
const uglify   = require('gulp-uglify');
const rename   = require('gulp-rename');

const buildJS = (src, dest) => {
  dest = dest || config.dist.jsPath;

  return gulp.src(src)
    .pipe(include({
      includePaths: [config.packagesPath, config.src.jsPath]
    }))
    .on('error', console.log)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(dest));
};

module.exports = buildJS;

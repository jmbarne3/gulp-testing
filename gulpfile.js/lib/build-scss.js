/*
 * `build-scss` module
 * ===============
 *
 * Describes a projects working tree
 */
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const gulp         = require('gulp');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const {config}     = require('../config/paths');

const buildCSS = done = (src, dest) => {
  dest = dest || config.config.dist.cssPath;

  return gulp.src(src)
    .pipe(sass({
      includePaths: [config.src.scssPath, config.packagesPath]
    }))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(dest));
};

module.exports = buildCSS;

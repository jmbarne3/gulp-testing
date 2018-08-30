/*
 * `scss-lint-theme.js` module
 * ===============
 *
 * Handles linting SCSS files.
 */
const config   = require('../config/paths');
const lintSCSS = require('../lib/lint-scss');

module.exports = (gulp, plugins) => {
  return () => {
    return lintSCSS(`${config.config.src.scssPath}/**/*.scss`);
  }
};

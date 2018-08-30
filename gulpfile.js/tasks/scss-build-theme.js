/*
 * `scss-build-theme.js` module
 * ===============
 *
 * Handles building the theme scss assets
 */
const {config} = require('../config/paths');
const buildCSS = require('../lib/build-scss');

module.exports = (gulp, plugins) => {
  return () => {
    return buildCSS(`${config.src.scssPath}/style.scss`, config.dist.cssPath);
  };
};

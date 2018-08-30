/**
 * `js-build-theme` module
 *
 * =======================
 *
 * Handles the building of the theme js files
 */
const {config} = require('../config/paths');
const buildJS  = require('../lib/build-js');

module.exports = (gulp, plugins) => {
  return () => {
    return buildJS(`${config.src.jsPath}/script.js`, config.dist.jsPath);
  };
};

/**
 * `es-lint-theme` module
 *
 * ======================
 *
 * Defines the es-lint-theme task
 */
const {config} = require('../config/paths');
const lintJS   = require('../lib/lint-js');

module.exports = (gulp, plugins) => {
  return () => {
    return lintJS(`${config.src.jsPath}/**/*.js`, config.src.jsPath);
  }
};

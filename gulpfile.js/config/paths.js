/*
 * `paths` module
 * ===============
 *
 * Describes a projects working tree
 */

const {resolve} = require('path');
const fs        = require('fs');
const merge     = require('merge');

module.exports.root = process.cwd();

let config = {
  src: {
    jsPath: resolve(exports.root, 'src/js'),
    scssPath: resolve(exports.root, 'src/scss')
  },
  dist: {
    jsPath: resolve(exports.root, 'static/js'),
    cssPath: resolve(exports.root, 'static/css'),
    fontPath: resolve(exports.root, 'static/fonts')
  },
  packagesPath: './node_modules',
  sync: true,
  syncTarget: 'http://localhost/wordpress/'
};

if (fs.existsSync('./gulp-config.json')) {
  const overrides = JSON.parse(fs.readFileSync('./gulp-config.json'));
  config = merge(config, overrides);
}

module.exports.config = config;

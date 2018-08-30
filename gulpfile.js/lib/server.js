/**
 * `server` module
 */
const {config}    = require('../config/paths');
const browserSync = require('browser-sync').create();

const server = {
  serverReload: (done) => {
    if (config.sync) {
      browserSync.reload();
    }

    done();
  },
  serverServe: (done) => {
    if (config.sync) {
      browserSync.init({
        proxy: {
          target: config.syncTarget
        }
      });
    }

    done();
  }
};

module.exports = server;

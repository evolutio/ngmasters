var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    'test/mocha.conf.js',
    'test/unit/**/*.js'
  ]);

  config.set(conf);
};
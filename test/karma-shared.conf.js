module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      'lib/angular.js',
      'lib/angular-mocks.js',
      'lib/angular-route.min.js',
      'lib/jquery-1.11.0.js',
      'js/base.js',
      'js/ajax.js',
      // 'js/github_api2.js',
      'js/github_api_mock.js',
      'js/mock_utils.js',
      'js/githubmodel.js',
      'js/phone_api.js',
      'js/components/gh_*/**/*.js',
      'js/components/popup.js',
      'js/components/phones3/phonedirectives.js',
      'grunt4/build/js/myapp-templates.js',

      //Test-Specific Code
      'grunt4/node_modules/chai/chai.js',
      'test/lib/**/*.js'
      // {pattern: 'js/**/*.html', included: false}
    ],

    customLaunchers: {
      'PhantomJS_debug': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: ['--remote-debugger-port=9000', '--remote-debugger-autorun=yes']
      }
    }
  };
};
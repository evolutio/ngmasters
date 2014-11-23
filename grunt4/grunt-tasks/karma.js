module.exports = function(grunt, options){
    var phantom = grunt.option('phantom') || false;

    var reporters = ['progress', 'coverage'];

    var preprocessors = {
        'js/*.js': ['coverage'],
        'js/components/gh-*/**/*.js': ['coverage'],
        'js/components/popup.js': ['coverage'],
        'js/components/phonedirectives.js': ['coverage']
    };
    var coverageReporter = {
        reporters: [
            { type : 'html', dir : 'coverage/' },
            { type : 'cobertura'},
        ]
    };

    return {
		unit: {
			configFile: '../test/karma-unit.conf.js',
			autoWatch: false,
			browsers: phantom ? ["PhantomJS"] : ["Chrome"],
			singleRun: true,
			reporters: reporters,
			preprocessors: preprocessors,
			coverageReporter: coverageReporter
		}
    };
};
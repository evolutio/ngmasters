module.exports = function(grunt, options){
    return {
		unit: {
			configFile: '../test/karma-unit.conf.js',
			autoWatch: false,
			browsers: options.phantom ? ["PhantomJS"] : ["Chrome"],
			singleRun: true
		}
    };
};
module.exports = function(grunt, options){
    var phantom = grunt.option('phantom') || false; // roda os testes no phantom
    var coverage = grunt.option('coverage') || false; // habilita/desabilita cobertura de testes
    var debug = grunt.option('debug') || false; // permite debugar os testes

    if(debug){
        coverage = false;
        phantom = false;
    }

    var karma_unit = {
        configFile: '../test/karma-unit.conf.js',
        browsers: phantom ? ["PhantomJS"] : ["Chrome"],
    }

    if(debug){
        karma_unit.autoWatch = true;
    } else {
        karma_unit.singleRun = true;
    }

    if(coverage){
        karma_unit.reporters = ['progress', 'coverage'];
        karma_unit.preprocessors = {
            'js/*.js': ['coverage'],
            'js/components/gh_*/**/*.js': ['coverage'],
            'js/components/popup.js': ['coverage'],
            'js/components/phonedirectives.js': ['coverage']
        };
        karma_unit.coverageReporter = {
            reporters: [
                { type : 'html', dir : 'coverage/' },
                { type : 'cobertura'},
            ]
        };
    }

    return {
		unit: karma_unit,
    };
};
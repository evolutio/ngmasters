////////// requires
var gulp = require('gulp');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglifyjs');
var htmlmin = require('gulp-htmlmin');
var merge = require('merge-stream');
var ngTemplates = require('gulp-ng-templates');
var ngmin = require('gulp-ngmin');
var karma = require('karma').server;
var argv = require('yargs').argv;
var watch = require('gulp-watch');
var batch = require('gulp-batch');

////////// code location
var app = {
    js: [
        '../js/base.js',
        '../js/ajax.js',
        '../js/github_api2.js',
        '../js/githubmodel.js',
        '../js/components/gh_*/**/*.js',
        '../js/components/popup.js',
        '../js/phone_api.js',
        '../js/components/popup.js',
        '../js/components/phones3/phonedirectives.js',
    ],
    nghtml: [
        "../js/**/*.html",
    ],
    libjs: [
        '../lib/angular.js',
        '../lib/angular-mocks.js',
        '../lib/angular-route.min.js',
        '../lib/jquery-1.11.0.js',
    ],
    mockjs: [
        '../js/github_api_mock.js',
        '../js/mock_utils.js',
    ],
    testlibjs: [
        'node_modules/chai/chai.js',
        '../test/lib/**/*.js'
    ],
    testjs: [
        '../test/mocha.conf.js',
        '../test/unit/**/*.js'
    ]
};


////////// Tasks

gulp.task('templates', function(){
    return gulp.src(app.nghtml)
        .pipe(debug())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplates({
            filename: 'myapp_templates.js',
            module: 'myapp',
            standalone: false,
            path: function (path, base) {
                var result = '/js/' + path.replace(base, '');
                //  console.log(path + '||' + base);
                return result;
            },
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('concat', ['templates'], function() {
    return gulp.src(app.js.concat(['./build/myapp_templates.js']))
        .pipe(debug())
        .pipe(concat('myapp.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('minify', ['concat'], function() {
    return gulp.src('build/myapp.js')
        .pipe(debug())
        .pipe(ngmin())
        .pipe(uglifyjs('myapp.min.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('test', ['templates'], function (done) {
    var singleRun = argv.singleRun == 'true';
    var coverage = argv.coverage == 'true';
    var grep = argv.grep;

    var karmacfg = {
        basePath: './',
        frameworks: ['mocha'],
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        // browsers: ['Chrome'],
        autoWatch: true,
        singleRun: singleRun,
        client: {
            mocha: {
                grep: grep,
            }
        },
        colors: true,
        files : concatall([
            app.libjs,
            app.testlibjs,
            app.js,
            ['build/myapp_templates.js'],
            app.mockjs,
            app.testjs,
        ]),
    };
    if(coverage){
        karmacfg.reporters = ['progress', 'coverage'];
        karmacfg.preprocessors = {};
        app.js.map(function(f){
            karmacfg.preprocessors[f] = ['coverage'];
        })
        karmacfg.coverageReporter = {
            reporters: [
                { type : 'html', dir : 'coverage/' },
                { type : 'cobertura'},
            ]
        };
    }

    karma.start(karmacfg, done);
});

gulp.task('watch', function () {
    watch(concatall(app.js, app.nghtml), batch(function (events, done) {
        gulp.start('minify', done);
    }));
});


/////// utils

function concatall(arrays){
    var result = [];
    arrays.map(function(arr){
        result = result.concat(arr);
    });
    return result;
}

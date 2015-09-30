////////// requires
var gulp = require('gulp');
var debug = require('gulp-debug');
var concat = require('gulp-concat');

////////// code location
var app = {
    js: [
        '../js/base.js',
        '../js/ajax.js',
        '../js/github_api2.js',
        '../js/githubmodel.js',
        '../js/components/gh_*/**/*.js',
        '../js/components/popup.js',
    ],
};

////////// Tasks

gulp.task('concat', function() {
    return gulp.src(app.js)
        .pipe(debug())
        .pipe(concat('a.js'))
        .pipe(gulp.dest('build/'));
});

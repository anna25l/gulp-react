//var config = require('./gulp.config')();
var gulp = require('gulp');
var gbabel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('react', function(){
    return gulp
        .src([
            './src/**/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(gbabel({
            presets: ['react','es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/debug/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.jsx', ['react']);
});
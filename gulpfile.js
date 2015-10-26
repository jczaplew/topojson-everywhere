var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('topojson', function() {
  return browserify(['./src/topojsonSetup.js'])
    .bundle()
    .pipe(source('topojsonAll.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['topojson']);

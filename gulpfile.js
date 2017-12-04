const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
var gulp = require('gulp');


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
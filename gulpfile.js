const gulp = require('gulp');
const connect = require('gulp-connect');
const express = require('express');

//setup middleware
var app = express();
app.get('/', function(req, res) {
  res.sendfile('index.html', { root: __dirname + "/public" } );
});
app.use(express.static('public'))


gulp.task('webserver', function() {
  connect.server({
    livereload: true,
	  https: true,
	  middleware: function(connect, opt) {
      return [app];
    }
  });
});
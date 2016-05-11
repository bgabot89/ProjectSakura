//allows gulp for use in app
var gulp = require('gulp');
//constant logging in of our build process
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
//figures what parts of our code works, make sure it's in correct order
var browserify = require('browserify');
//automatically rerun gulp file whenever our code changes
var watchify = require('watchify');
//convert jsx into js
var reactify = require('reactify');


//declares gulp a task
gulp.task('default', function() {
  //runs browserify on our code
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));
  //function that builds our file
  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./public/js/'));
  };
  build();
  bundler.on('update', build);
});

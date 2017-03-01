var gulp = require('gulp'),
    pug = require('gulp-pug'),
    plum = require('gulp-plumber'),
    brow = require('browser-sync').create(),
    reload = brow.reload,
    strm = reload({stream: true});

var src = './01/';

gulp.task('pug', function () {
  return gulp.src(src + '*.pug')
    .pipe(plum())
    .pipe(pug({pretty: true}))
    .pipe(plum.stop())
    .pipe(gulp.dest(src));
})

gulp.task('default', ['pug'], function () {
  brow.init({server: src});

  gulp.watch(src + '*.pug', ['pug']);
  gulp.watch(src + '*.html').on('change', reload);
  gulp.watch(src + '*.css').on('change', reload);
})

var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  pref = require('gulp-autoprefixer'),
  plum = require('gulp-plumber'),
  brow = require('browser-sync').create(),
  reload = brow.reload

gulp.task('pug', function () {
  return gulp.src('./dev/views/*.pug')
    .pipe(plum())
    .pipe(pug({pretty: true}))
    .pipe(plum.stop())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('styles', function () {
  return gulp.src('./dev/scss/styles.scss')
    .pipe(plum())
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(pref({browsers: 'last 5 versions', cascade: true}))
    .pipe(plum.stop())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream: true}))
})

gulp.task('default', ['pug', 'styles'], function () {
  brow.init({server: './dist/'})

  gulp.watch('./dev/views/**/*.pug', ['pug'])
  gulp.watch('./dev/scss/**/*.scss', ['styles'])
  gulp.watch('./dist/*.html').on('change', reload)
  gulp.watch('./dist/js/*.js').on('change', reload)
})

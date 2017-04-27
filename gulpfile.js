const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

gulp.task('minifyCss', function () {
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
  return gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'copy', 'minifyCss']);

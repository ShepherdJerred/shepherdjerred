const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');

gulp.task('bundle', function () {
  return gulp.src('dist/css/*.css')
    .pipe(concatCss('dist/css/bundle.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('normalize', function () {
  return gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('flexboxgrid', function () {
  return gulp.src('./node_modules/flexboxgrid/css/flexboxgrid.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['normalize', 'flexboxgrid', 'sass', 'bundle']);

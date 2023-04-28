const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('sass');

gulp.task('cdw', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('cdw'));
});

gulp.task('default', gulp.series('cdw', 'watch'));
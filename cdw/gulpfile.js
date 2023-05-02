// 'use strict'
const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const Fiber = require('fibers');
const sourcemaps = require('gulp-sourcemaps'); 


gulp.task('cdw', function(){
  return gulp
    .src("scss/*.scss") 
    .pipe(sourcemaps.init()) 
    .pipe(sass({fiber:Fiber}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps')) 
    .pipe(gulp.dest("dist/css")) 
});

// ★★★★ add start : 감시대상 scss가 변동되면 자동으로 업데이트!
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('cdw')); // 감시해야할 scss 위치 지정
});
// ★★★★ add end

gulp.task(
    "default",
    gulp.parallel("cdw", "watch") 
);
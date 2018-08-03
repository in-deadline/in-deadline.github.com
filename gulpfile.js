var gulp = require('gulp')
var pug = require('gulp-pug')
var sass = require('gulp-sass')
var minifyCSS = require('gulp-csso')
var rimraf = require('gulp-rimraf')

gulp.task('clean', () => gulp.src('assets')
    .pipe(rimraf()))

gulp.task('html', () => gulp.src('src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./')))

gulp.task('css', () => gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css')))

gulp.task('js', () => gulp.src('src/js/*.js')
    .pipe(gulp.dest('assets/js')))

gulp.task('default', ['clean', 'html', 'css', 'js'])

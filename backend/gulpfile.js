var babel = require('gulp-babel')
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

var paths = {
  babel: ['./index.js', './src/**/*.js'],
  babelDest: './build'
}

gulp.task('babel', function () {
  return gulp.src(paths.babel)
    .pipe(babel())
    .pipe(gulp.dest(paths.babelDest))
})

gulp.task('start', function () {
  nodemon({
    script: `${paths.babelDest}/index.js`,
    ext: 'js',
    env: {NODE_ENV: 'development'}
  })
})

gulp.task('watch', function () {
  gulp.watch(paths.babel, ['babel'])
})

gulp.task('default', ['start', 'watch'])

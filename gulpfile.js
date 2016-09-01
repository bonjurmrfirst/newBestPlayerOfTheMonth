const
  gulp         = require('gulp'),
  sass         = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss    = require('gulp-minify-css'),
  rename       = require('gulp-rename'),
  browserSync  = require('browser-sync').create(),
  concat       = require('gulp-concat'),
  uglify       = require('gulp-uglifyjs'),
  babel        = require('gulp-babel');

gulp.task('browser-sync', ['scripts'], function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    },
    notify: false,
    browser: "firefox"
  });
});

gulp.task('scripts', function() {
  return gulp.src([
    './bower/angular/angular.min.js',

    './js/**/*.js'
  ])
    /*.pipe(babel({
      presets: ['es2015']
    }))*/
    .pipe(concat('lib.js'))
    //.pipe(uglify()) //Minify libs.js
    .pipe(gulp.dest('./app/lib/'));
});

gulp.task('styles', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
    .pipe(minifycss())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('js/**/*.js').on("change", browserSync.reload);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);

// ES6 -> ES2015
gulp.task('transpile', function() {
  gulp.src(['./js/**/*.js', '!./js/original'])
    .pipe(gulp.dest('./js/original'));

  return gulp.src(['./js/**/*.js', '!./js/original'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./js'));
});

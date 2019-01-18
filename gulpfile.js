const gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  del = require('del'),
  runSequence = require('run-sequence'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  csswring = require('csswring'),
  autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  refresh = require('gulp-refresh'),
  browserSync = require('browser-sync').create();

const distDir = './dist';
const srcStyles = ['src/assets/scss/**/*.scss', 'src/assets/libs/**/*.scss|.css'];
const srcJs = ['src/**/*.js', 'src/assets/**/*.js'];
const srcHtml = ['src/**/*.html'];
const srcAssets = [
  'src/assets/**/*.png|.gif|.jpg',
  'src/assets/**/images/*.*',
  'src/assets/**/fonts/**.*',
  'src/assets/libs/**/*.js',
  'src/assets/libs/**/*.css'
];

const src = [...srcStyles, ...srcJs, ...srcHtml, ...srcAssets];

const styles = () => {
  let processors = [
    csswring,
    autoprefixer
  ];

  return gulp.src(srcStyles[0])
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(`${distDir}/assets/css/`))
    .pipe(browserSync.stream({ match: '**/*.css' }));
};

const babelTask = () => {
  gulp.src(srcJs)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(distDir));
};

const webpackTask = () => {
  return gulp.src(srcJs)
    .pipe(webpack(require('./webpack.config.babel')))
    .pipe(gulp.dest(distDir));
};

const html = () => {
  return gulp.src(srcHtml)
    .pipe(gulp.dest(distDir));
};

const assets = () => {
  return gulp.src(srcAssets)
    .pipe(gulp.dest(`${distDir}/assets/`));
};

const clean = () => {
  return del(['./dist/**']);
};

const watch = () => {
  gulp.watch(srcStyles, gulp.series(styles));
  gulp.watch(srcJs, gulp.series(webpackTask));
  gulp.watch(srcHtml, gulp.series(html));
  gulp.watch(srcAssets, gulp.series(assets));
  gulp.watch(src).on('change', browserSync.reload);
}

const build = gulp.series(clean, html, webpackTask, styles, assets);

const serve = () => {
  console.log('serve');
  browserSync.init({
    server: {
      baseDir: ['./', './dist'],
      routes: {
        './': './node_modules'
      }
    }
  });
}

const develop = gulp.parallel(serve, watch);

module.exports = {
  serve,
  watch,
  build,
  develop,
  styles,
  webpackTask,
  html,
  assets,
  clean
};

module.exports.default = develop;

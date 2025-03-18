import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import csso from 'postcss-csso'
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import imagemin from "gulp-imagemin";
import optipng from "imagemin-optipng"; // Плагин для оптимизации PNG
import jpegtran from "imagemin-jpegtran"; // Плагин для оптимизации JPEG
import svgo from "imagemin-svgo"; // Плагин для оптимизации SVG
import Webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import { deleteAsync } from "del";

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream())
};



// HTML

const html = () => {
  return gulp.src ('source/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build'))
}

export {html}

// Scripts

const scripts = () => {
  return gulp.src ('source/js/scripts.js')
  .pipe(terser())
  .pipe(rename('scripts.min.js'))
  .pipe(gulp.dest('build/js'))
}

export {scripts}

// Images

const optimizeImages = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      optipng({ optimizationLevel: 3 }),
      jpegtran({ progressive: true }),
      svgo()
    ]))
    .pipe(gulp.dest("build/img"));
};

export {optimizeImages}

const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(gulp.dest('build/img'))
}

export {copyImages}

// Webp

const webp = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
  .pipe(Webp({quality: 90}))
  .pipe(gulp.dest('build/img'))
}

export {webp}

// Sprite

const sprite =() => {
  return gulp.src('source/img/icons/*.svg')
  .pipe(svgstore({inlineSvg: true}))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'))
}

export {sprite}

// Copy

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/img/**/*.{jpg,png,svg}',
    '!source/img/icons/*.svg',
    'source/*.webmanifest'
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
  done();
}

export {copy}

// Clean

const clean = () => {
  return deleteAsync("build");
};

export {clean}
// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}

// Build 

const build = gulp.series (
  clean,
  copy,
  optimizeImages,
  webp,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite
  ),
  gulp.series(
    server
  )
);

export {build}

// Defoult

export default gulp.series(
  clean,
  copy,
  copyImages,
  webp,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite
  ),
  gulp.series(
    server,
    watcher
  )
);

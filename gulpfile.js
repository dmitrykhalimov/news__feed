"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore")
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/markup/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(rename("news-widget.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("markup/css"))
    .pipe(server.stream());
});

gulp.task("css-min", function () {
  return gulp.src("source/markup/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename("news-widget.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("markup/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "markup/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/markup/sass/**/*.{scss,sass}", gulp.series("css", "css-min"));
  gulp.watch("source/markup/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/markup/*.html", gulp.series("html", "refresh"));
  // gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("images", function() {
  return gulp.src("source/markup/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))

    .pipe(gulp.dest("source/markup/img"));

});

gulp.task("webp", function () {
  return gulp.src("source/markup/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/markup/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/markup/img/{icon-*,htmlacademy*}.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("markup/img"));
});

gulp.task("js", function () {
  return gulp.src("source/markup/js/**", {
      base: "source"
    })
  .pipe(gulp.dest("markup"));
});

gulp.task("html", function () {
  return gulp.src("source/markup/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("markup"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/markup/fonts/**/*.{woff,woff2}",
    "source/markup/img/**",
    "source/markup/js/**",
    "source//*.ico"
    ], {
      base: "source/markup"
    })
  .pipe(gulp.dest("markup"));
});

gulp.task("clean", function () {
  return del("markup");
});

gulp.task("build", gulp.series("clean", "copy", "css", "css-min", "sprite", "html"));
gulp.task("start", gulp.series("build", "server"));

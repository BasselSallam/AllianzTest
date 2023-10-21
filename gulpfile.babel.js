import gulp from "gulp";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import webpack from "webpack-stream";
import named from "vinyl-named";
import cssnano from "cssnano";
import rtlcss from "rtlcss";
import rename from "gulp-rename";
import dartSass from "sass";
import autoprefixer from "autoprefixer";
import { deleteAsync } from "del";
import replace from "gulp-replace";
import zip from "gulp-zip";
import info from "./package.json" assert { type: "json" };
import browserSync from "browser-sync";

const sass = gulpSass(dartSass);

const PRODUCTION = yargs(hideBin(process.argv)).argv.prod;

export const styles = () => {
  return gulp
    .src(["src/scss/**/*.scss"])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest("dist/assets/css/"))
};

export const rtlStyles = () => {
  return gulp
    .src(["dist/assets/css/**/*.css", "!dist/assets/css/**/*-rtl.css"])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(postcss([rtlcss()]))
    .pipe(
      rename({
        suffix: "-rtl",
      })
    )
    .pipe(gulp.dest("dist/assets/css"))
};

export const postStyles = () => {
  return gulp
    .src(["dist/assets/css/**/*.css"])
    .pipe(gulpif(PRODUCTION, cleanCss({ level: 2 })))
    .pipe(
      gulpif(
        PRODUCTION,
        postcss([
          cssnano({
            preset: ["advanced", { reduceIdents: false }],
            plugins: [autoprefixer],
          }),
        ])
      )
    )
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(gulpif(!PRODUCTION, server.stream()))
};

export const scripts = () => {
  return gulp
    .src(["src/js/bundle.js", "src/js/bundle-rtl.js"])
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? "production" : "development",
        devtool: false,
        output: {
          filename: "[name].js",
        },
        externals: {},
      })
    )
    .pipe(gulp.dest("dist/assets/js"));
};

export const copy = () => {
  return gulp
    .src(["src/**/*", "!src/{js,scss,html}", "!src/{js,scss,html}/**/*"])
    .pipe(gulp.dest("dist"));
};

export const compress = () => {
  return gulp.src(["**/*", "!src", "!src/**/*", "!gulpfile.babel.js", "!package.json", "!package-lock.json", "!.gitignore", "!.babelrc", "!node_modules", "!node_modules/**/*"])
    .pipe(
      gulpif(
        (file) => file.relative.split(".").pop() !== "zip",
        replace("_themename", info.name)
      )
    )
    .pipe(zip(`${info.name}-${info.version}.zip`))
    .pipe(gulp.dest("bundled"));
};

export const clean = () => deleteAsync(["dist", "bundled"]);

const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: "http://bassel.local"
  });
  done();
};
export const reload = done => {
  server.reload();
  done();
};

export const watchForChanges = () => {
  gulp.watch(["src/scss/**/*.scss"]).on("all", gulp.series(styles, rtlStyles, postStyles));
  gulp
    .watch(["src/**/*", "!src/{js,scss}", "!src/{js,scss}/**/*"])
    .on("all", copy, reload);
  gulp.watch("src/js/**/*.js").on("all", gulp.series(scripts, reload));
  gulp.watch("**/*.php", reload);
};

export const dev = gulp.series(
  clean,
  gulp.parallel(styles, copy, scripts),
  rtlStyles,
  serve,
  watchForChanges
);
export const build = gulp.series(
  clean,
  scripts,
  gulp.parallel(styles, copy),
  rtlStyles,
  postStyles,
  compress
);
export default dev;

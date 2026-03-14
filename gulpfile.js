const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function styles() {
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({style: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function images () {
    return gulp.src("./src/images/**/*", {encoding:false})
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

function scripts() {
    return gulp.src("./src/scripts/*.js")
    .pipe(uglify())
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
}
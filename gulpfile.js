const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

var prefixerOptions = {
    browsers: ['last 2 versions']
};

function buildStyles() {
    return src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(dest('assets/css'))
        .pipe(prefix())
}

function watchTask() {
    watch(['assets/sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
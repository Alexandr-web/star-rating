const { dest, watch, parallel, src } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  return src('./src/assets/scss/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      cascade: true,
      overrideBrowsersList: ['last 5 versions']
    }))
    .pipe(concat('main.css'))
    .pipe(dest('./public/css/'));
}

function watching() {
  watch('./src/assets/scss/*.scss', parallel(styles));
}

exports.build = parallel(styles);
exports.default = parallel(exports.build, watching);
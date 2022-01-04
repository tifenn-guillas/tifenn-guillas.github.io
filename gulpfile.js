let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    replace = require('gulp-replace')
;

exports.default = function() {
    gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
        './node_modules/urijs/src/URI.min.js',
        './node_modules/slick-carousel/slick/slick.min.js'
    ])
    .pipe(concat('assets/dist/libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));

    gulp.src(['./node_modules/@fortawesome/fontawesome-free/webfonts/**/*'])
        .pipe(gulp.dest('assets/dist'));

    gulp.src(['./node_modules/slick-carousel/slick/fonts/**/*'])
        .pipe(gulp.dest('assets/dist'));
    gulp.src(['./node_modules/slick-carousel/slick/ajax-loader.gif'])
        .pipe(gulp.dest('assets/dist'));

    return gulp.src([
        './node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        './node_modules/magnific-popup/dist/magnific-popup.css',
        './node_modules/slick-carousel/slick/slick.css',
        './node_modules/slick-carousel/slick/slick-theme.css'
    ])
    .pipe(concat('assets/dist/libs.css'))
    .pipe(replace('../webfonts/fa-', 'fa-'))
    .pipe(replace('fonts/slick', 'slick'))
    .pipe(replace('../ajax-loader.gif', 'ajax-loader.gif'))
    .pipe(uglifycss())
    .pipe(gulp.dest('./'));
}

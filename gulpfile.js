var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minifycss = require("gulp-clean-css");
var webserver = require('gulp-webserver');
var watson = require('watson-developer-cloud');
var urlAdjuster = require('gulp-css-url-adjuster');


gulp.task('script', function(){
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function(){
    gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'assets/css/*.css'])
    .pipe(minifycss())
    .pipe(urlAdjuster({
        replace:  ['/dist/images/../../../../assets/css/dist/images/','dist/images/'],
    }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('webserver', function(){
    gulp.src('./')
    .pipe(webserver({
        fallback: 'index.html',
        livereload: true,
        directoryListing: false,
        open: true
    }));
});

gulp.task('images', function(){
    gulp.src(['assets/images/*'])
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('watch', function() {
    gulp.watch('assets/css/*css', ['style']);
});

gulp.task('watchjs', function() {
    gulp.watch('assets/js/*.js', ['script']);
});



gulp.task('default', ['script', 'style', 'webserver', 'images', 'watch', 'watchjs']);
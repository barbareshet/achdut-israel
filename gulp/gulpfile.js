var path = "..";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
//timestamp
var d = new Date();
var ts = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
gulp.task('serve', ['sass'], function() {


    console.log("Last update at " + ts);
    browserSync.init({
        server: "..",
        notify: false
    });

    gulp.watch(path +"/assets/scss/*.scss", ['sass']);
    gulp.watch(path + "/*.html",['html']);
    gulp.watch(path +"/**/*", browserSync.reload);
});
gulp.task('html', function(){
   console.log('You Have Changed an html file at ' + ts);
});
gulp.task('sass', function() {
    console.log('You Have Sassed your files at ' + ts);
    return gulp.src(path + "/assets/scss/*.scss")
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass())
        .pipe(gulp.dest(path +"/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
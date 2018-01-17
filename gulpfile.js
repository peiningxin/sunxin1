var gulp = require('gulp');
var uglifyJs = require('gulp-uglify');
var connect  = require('gulp-connect');
var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');




// 编译Sass
gulp.task('sass', function () {
    return rubySass('./scss/*.scss', {
        sourcemap: false,
        style: 'expanded',
    }).pipe(gulp.dest('./css/'));
});

// 压缩JS
gulp.task('minifyJs', function () {
    return gulp.src('./js/*.js')
        .pipe(uglifyJs())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js/dist/'));
});
// 监听Html
gulp.task('html', ['sass', 'minifyJs'], function () {
    return gulp.src('./*.html').pipe(connect.reload());
});

// 监听
gulp.task('default', ['sass', 'minifyJs'], function () {
    // 开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./scss/*.scss', ['html']); 
    gulp.watch('./js/*.js', ['html']);
    gulp.watch('./*.html', ['html']);
});
module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./src/scss/**/*.scss', $.gulp.series('sass'))
        $.gulp.watch('./src/*.html', $.gulp.series('html'))
    });
}
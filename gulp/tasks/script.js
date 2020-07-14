module.exports = function() {
    $.gulp.task('script', function() {
        return $.gulp.src('./src/js/*.js')
                .pipe($.gulp.dest('./build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    
    });
}


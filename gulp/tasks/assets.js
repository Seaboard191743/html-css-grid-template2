module.exports = function() {
    
    $.gulp.task("assets", function() {
        return $.gulp.src('./src/assets/*')
            .pipe($.gulp.dest('./build/assets'))
    });

}
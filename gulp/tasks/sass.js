module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src('./src/scss/style.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer({ grid: 'autoplace' }))
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Error occured"
              }))
            .pipe($.csso())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('./build/style'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    
    });
}


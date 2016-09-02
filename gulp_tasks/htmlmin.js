module.exports = function(gulp, plugins, src, dest) {
    return function(){
        return gulp.src(src)
            .pipe(plugins.htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(dest));
    };
};

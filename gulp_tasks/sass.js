module.exports = function(gulp, plugins, src, dest) {
	return function(){
		return gulp.src(src)
			.pipe(plugins.sass())
			.pipe(gulp.dest(dest));
	};
};
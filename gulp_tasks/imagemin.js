module.exports = function(gulp, plugins, src, dest) {
	return function(){
		return gulp.src(src)
			.pipe(plugins.imagemin({
				progressive: true,
				optimizationLevel: 5
			}))
			.pipe(gulp.dest(dest));
	};
};
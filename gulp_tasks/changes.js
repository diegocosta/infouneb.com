module.exports = function(gulp, plugins, src) {
	return function(){
		return gulp.src(src)
			.pipe(plugins.connect.reload());
	};
};
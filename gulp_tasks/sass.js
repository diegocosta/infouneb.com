module.exports = function(gulp, plugins, src, dest) {
	return function(){
		return gulp.src(src)
			.pipe(plugins.sass({discardUnused: {fontFace: false}}))
			.pipe(gulp.dest(dest));
	};
};

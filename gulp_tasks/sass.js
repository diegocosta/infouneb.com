module.exports = function(gulp, plugins, src, dest) {
	return function(){
		return gulp.src(src)
			.pipe(plugins.sass({discardUnused: {fontFace: false}, outputStyle: 'compressed'}))
                .on('error', plugins.sass.logError)
			.pipe(gulp.dest(dest));
	};
};

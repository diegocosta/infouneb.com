module.exports = function(gulp, plugins, src, dest) {
	return function(){
		return gulp.src(src)
			.pipe(plugins.usemin({
				css : [function(){ return plugins.cleanCss(); }],
				js  : [function(){ return plugins.uglify(); }]
			}))
			.pipe(gulp.dest(dest));
	};
};

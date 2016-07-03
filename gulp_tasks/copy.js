module.exports = function(gulp, plugins, files) {
	return function(){
		files.forEach(function(f){
			gulp.src(f.src).pipe(plugins.flatten()).pipe(gulp.dest(f.dest));
		});
	};
};

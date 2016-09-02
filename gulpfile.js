(function(){
	'use strict';

	var gulp = require('gulp');
	var plugins = require('gulp-load-plugins')({DEBUG: false, pattern: ['*']});

	// server, watch and reload
	gulp.task('connect', task('connect', 'src'));
	gulp.task('changes', task('changes', 'src/**/*'));
	gulp.task('watch', task('watch', 'src/', [{ tasks: ['sass'], src : 'sass/**/*.sass' }] ));
	gulp.task('server', ['sass', 'connect', 'watch']);

	// compile
	gulp.task('sass', task('sass', 'src/sass/main.sass', 'src/styles'));

	// compress
	gulp.task('imagemin', task('imagemin', 'src/images/**/*', 'dist/images'));
    gulp.task('htmlmin', task('htmlmin', 'dist/*', 'dist'));

	// build
	gulp.task('usemin', task('usemin', 'src/*.html', 'dist/'));
	gulp.task('copy', task('copy', [{ src: 'src/fonts/*', dest: 'dist/fonts' }, { src: 'src/others/*', dest: 'dist/others' }]));
    gulp.task('build', ['usemin', 'imagemin', 'copy'])

	function task(name) {
		var args = Array.prototype.slice.call(arguments, 1);
		args.unshift(gulp, plugins);

		return require('./gulp_tasks/' + name).apply({}, args);
	}
})();

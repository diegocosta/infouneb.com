module.exports = function(gulp, plugins, base, src) {
	return function(){
		var others = [];
		others.push(base + '**/*');

		src.forEach(function(t){
			others.push('!' + base + t.src);
			gulp.watch(base + t.src, t.tasks);
		});
		
		gulp.watch(others, ['changes']);
	};
};
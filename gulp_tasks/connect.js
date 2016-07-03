module.exports = function(gulp, plugins, src) {
	return function(){
		return plugins.connect.server({
			root: src,
			livereload: true
		});
	};
};
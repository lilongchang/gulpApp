var gulp = require('gulp'),
	less = require('gulp-less'),
	livereload = require('gulp-livereload'),
	copy = require("gulp-copy"),
	del = require('del'),
	server = require('gulp-express');

gulp.task('less', function() {
	gulp.src('less/mobileWeb/*.less')
	.pipe(less())
	.pipe(gulp.dest('css/mobileWeb'))
	

});

gulp.task('watch', function() {
	gulp.watch('less/mobileWeb/*.less', ['less']);
});

gulp.task('server', function () {
	server.run(['server.js'],{},{host:"192.168.23.117",port:35728});
	livereload();
	gulp.watch(['css/mobileWeb/*.css'], function(event){
		server.notify(event);
	});
});

gulp.task('default',['server','watch'], function() {
});

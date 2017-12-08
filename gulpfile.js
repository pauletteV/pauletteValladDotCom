var gulp = require('gulp'),
	processSass = require('gulp-sass'),
	processhtmlHtml = require('gulp-processhtml'),
	//processhtmlImgs = require('gulp-image-optimization');
	gutil = require('gulp-util');

//file sources
var htmlSrc = ['src/index.html'],
	sassSrc = ['sass/main.scss'],
	imageSrc = ['src/images/*.{png, jpg}']
	fontsSrc = ['fonts/*.*'];
	asssetSrc = ['banners/'];


gulp.task('sass', function(){
	return gulp.src(sassSrc)
	.pipe(processSass())
	.on('errror', gutil.log)
	.pipe(gulp.dest('src/css'));
});

gulp.task('html', function(){
	return gulp.src(htmlSrc)
	.pipe(processhtmlHtml())
	.pipe(gulp.dest('dist/'));

});

/*gulp.task('images', function(){
	return gulp.src(imageSrc)
	.pipe(processhtmlImgs())
	.pipe(gulp.dest('dist/images'));

});*/

gulp.task('copySass', function(){
	return gulp.src('src/css/main.css')
	.pipe(gulp.dest('dist/css'));

});

gulp.task('copyFonts', function(){
	return gulp.src(fontsSrc)
	.pipe(gulp.dest('dist/fonts'));

});

gulp.task('copyAssets', function(){
	return gulp.src(asssetSrc)
	.pipe(gulp.dest('dist/banners'));

});

gulp.task('watch', function(){
	gulp.watch(sassSrc, ['sass']);
});

//gulp.task('build', ['sass', 'html', 'images', 'copySass', 'copyFonts', 'copyAssets']);
gulp.task('build', ['sass', 'html', 'copySass', 'copyFonts', 'copyAssets']);

//gulp.task('default', [ 'sass', 'html', 'images']);
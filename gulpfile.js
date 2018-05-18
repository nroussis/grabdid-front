'use strict'
// Connect our dependencies
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	preFixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	sourceMaps = require ('gulp-sourcemaps'),
	cssMin = require ('gulp-clean-css'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	rigger = require('gulp-rigger'),
	uglify = require('gulp-uglify');

//Paths

var path = {

	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/images/',
        fonts: 'build/fonts/'
	},

	src: {
		html: 'src/*.html',
		js: 'src/js/*.js',
		jscss: 'src/js/*.css',
		style: 'src/sass/main.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
	},

	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/sass/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
	},

	clean: './build'
};

gulp.task('style:build', function() {
	gulp.src(path.src.style)
		.pipe(sourceMaps.init()) // Initiate source mapper
		.pipe(plumber())
		.pipe(sass())  //Sass compiling
		.pipe(sass().on('error', sass.logError)) //handling sass errors
		.pipe(preFixer()) //Autoprefix
		.pipe(cssMin({compatibility: 'ie9'}))   //Minify code
		.pipe(sourceMaps.write()) // Make sourcemaps
		.pipe(rename('style.css')) //
		.pipe(gulp.dest(path.build.css));


});

gulp.task('html:build', function(){
	gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html));
});

gulp.task('js:build', function(){
	gulp.src(path.src.js)
	    .pipe(rigger())
	    .pipe(sourceMaps.init())
	    .pipe(uglify())
	    .pipe(sourceMaps.write())
	    .pipe(gulp.dest(path.build.js));

});

gulp.task('jscss:build', function(){
	gulp.src(path.src.jscss)
	    .pipe(rigger())
	    .pipe(sourceMaps.init())
	    .pipe(sourceMaps.write())
	    .pipe(gulp.dest(path.build.js));

});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


gulp.task('watch', function(){
	watch([path.watch.style], function(ev, callback){
		gulp.start('style:build');
	});

	watch([path.watch.js], function(ev, callback){
		gulp.start('style:build');
	});

	watch([path.watch.html], function(ev, callback){
		gulp.start('style:build');
	});
});


gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('default', ['build', 'watch']);

/* Plugins list and details

LiveReload (https://www.npmjs.com/package/gulp-livereload/): refreshes the browser automatically when you save files

JSHint (https://www.npmjs.com/package/gulp-jshint/): a JavaScript linter that checks your code for errors and gives you warnings if you stray from best practices

Bower (https://www.npmjs.com/package/gulp-bower): a package manager, similar to NPM, that handles front end dependencies

Rename (https://www.npmjs.com/package/gulp-rename/): a Gulp plugin that allows you to easily rename files without breaking your projects

Browserify (https://www.npmjs.com/package/browserify): lets you use require() in the browser by bundling up all of your NPM module dependencies

Concat (https://www.npmjs.com/package/gulp-concat/): concatenates multiple files in your dev environment into single files to be used in your production environment

UglifyJS (https://www.npmjs.com/package/gulp-uglify/): minifies your JavaScript, removing unnecessary characters from your code

Minify HTML (https://www.npmjs.com/package/gulp-minify-html/): minifies your HTML files

Imagemin (https://www.npmjs.com/package/gulp-imagemin): Minifies and optimizes image files (PNG, JPEG, GIF, and SVG)

Sass (https://www.npmjs.com/package/gulp-sass/): a CSS preprocessor that you will learn all about in the next lesson



To install all of the dependencies listed above, run the following command:

npm install --save-dev gulp-connect gulp-jshint gulp-bower gulp-rename gulp-concat gulp-uglify gulp-minify-html gulp-imagemin gulp-sass node-bourbon node-neat browserify vinyl-source-stream vinyl-buffer

*/



var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// JavaScript linting task
gulp.task('jshint', function () {
    return gulp.src('js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Sass task
gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});


// Minify index
gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(minifyHTML({
            conditionals: true,
            quotes: true
        }))
        .pipe(gulp.dest('build/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function () {
    return browserify('js/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// Including the font awesome
gulp.task('fonts', function () {
    return gulp.src('fonts/*')
        .pipe(gulp.dest('build/fonts'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function () {
    return gulp.src('css/*.css')
        .pipe(gulp.dest('build/css'));
});

// Image optimization task
gulp.task('images', function () {
    return gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch('js/app.js', ['jshint']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);

// Build task
gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'fonts', 'styles', 'images']);

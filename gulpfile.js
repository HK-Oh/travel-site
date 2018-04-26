var gulp = require('gulp'),
postcss =require('gulp-postcss'),
watch = require('gulp-watch'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function(){
    console.log("Horray!!!!!!!!!!!!!");
});

gulp.task('html', function() {
    console.log("HTML HTML HTML HTML");
})

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    })

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })
})
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    spawn      = require('child_process').spawn,
    util       = require('gulp-util');

gulp.task('default',  function(){
    var concat = require('gulp-concat'),
        uglify = require('gulp-uglify');
    return gulp.src('find.js', { read: false })
        .pipe(browserify({standalone: "find"}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('version', function(done){
    var versionType = util.env.versionType;
    spawn('npm', ['version', versionType], { stdio: 'inherit' }).on('close', done);
});

gulp.task('publish', ['version'], function(done) {
    spawn('npm', ['publish', '.'], { stdio: 'inherit' }).on('close', done);
});

gulp.task('release', ['default', 'publish']);

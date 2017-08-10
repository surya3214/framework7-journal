const gulp = require('gulp');
const pug = require('gulp-pug');
const server = require('gulp-server-livereload');

let paths = {
    root: './',
    jade: './src/index.jade',
    dist: './dist/'
}

gulp.task('jade', () => {
    gulp.src(paths.jade)
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
    gulp.watch([ paths.jade ]);
});

gulp.task('webserver', () => {
    gulp.src(paths.root)
    .pipe(server({
        livereload: true,
        directoryListing: true
    }));
});
    
gulp.task('default', [ 'jade', 'watch', 'webserver' ]);
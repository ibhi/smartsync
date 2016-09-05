var gulp = require('gulp'),
    shell = require('gulp-shell');

var paths = {
    src: './bower_components/SalesforceMobileSDK-Shared/libs/smartsync.js',
    dest: './dist'
}

gulp.task('update', shell.task([
    'bower update SalesforceMobileSDK-Shared'
]));

gulp.task('build', ['update'], () => {
    gulp
        .src(paths.src)
        .pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['build']);

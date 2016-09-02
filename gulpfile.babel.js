var gulp = require('gulp');
var LiveServer =  require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify =  require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})

gulp.task('bundle',['copy'], function(){
    return browserify({
        entries:'app/main.jsx',
        jquery : 'jquery-browserify',
        debug:true,
    })
        .transform(babelify,
            {
                "presets": ["es2015", "react", "stage-1"],
                "plugins": ["transform-decorators-legacy", "transform-function-bind"],
                extensions: [".jsx", ".js",]
            })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));
})

gulp.task('copy', function() {
    gulp.src(['app/*.css', 'app/Icons/**/*','app/stores/**/*', 'app/helper/**/*', 'app/dispatcher.js','bundle.js', 'app/helpers/RestHelper.js',
            'app/actions/OperationActionCreator.jsx', 'app/actions/SurgeonActionCreator.jsx',
            'app/actions/PatientActionCreator.jsx','app/actions/ORActionCreator.jsx','app/actions/LoginActionCreator.jsx',
            'node_modules/guid/guid.js','node_modules/jquery/**/*', 'bower_components*/**/*'])
        .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve', ['bundle', 'live-server'], function(){
    browserSync.init(null,{
        proxy:"http://localhost:7777",
        port: 9001
    })
})

gulp.run('serve')
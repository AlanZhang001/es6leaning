var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var named = require('vinyl-named-with-path');
var extend = require('extend');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
var path = require('path');

var devConfig = {
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'text'
        }, {
            test: /\.(?:png|jpe?g|gif)(?:\?\s*)?/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name]-[hash].[ext]'
            }
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: './node_modules/',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            exclude: './node_modules/',
            loader: 'style-loade!css-loader'
        }]
    },
    externals: {
        jquery: 'jQuery'
    },
    watch: false,
    plugins: [],
    devtool: 'source-map',
};

gulp.task('clean', function() {
    return gulp.src(['./web/scripts/dist'], {
            read: false
        })
        .pipe(clean());
});

//js开发环境
gulp.task('webpackDev', function() {
    return gulp.src('./web/scripts/source/**/*Main.js')
        .pipe(named())
        .pipe(plumber())
        .pipe(gulpWebpack(devConfig))
        .pipe(gulp.dest('./web/scripts/dist'));
});

//监控文件变化
gulp.task('watch', function() {
    gulp.watch(['./web/scripts/source/**/*.js'], ['webpackDev']);
});

gulp.task('default', function() {
    return runSequence('clean', 'webpackDev', 'watch');
});

gulp.task('dev', ['default']);

gulp.task('npm-install', function(cb) {
    exec('npm install', function(err, stdout, stderr) {
        console.log('stdout : ' + stdout);
        console.log('stderr : ' + stderr);
        cb(err);
    });
});

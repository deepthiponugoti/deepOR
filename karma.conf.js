var webpack = require('webpack');

module.exports = function(config) {
    config.set({

        basePath: '',


        frameworks: ['mocha', 'chai'],


        files: [
            'tests.webpack.js',
            'node_modules/guid/guid.js',
            'node_modules/jquery/dist/jquery.js',
            './app/dispatcher.js',
            './app/actions/*.jsx',
            './app/helpers/RestHelper.js',
            './app/stores/PatientStore.jsx',
            './app/stores/ORStore.jsx',
            './app/stores/SurgeonStore.jsx',
            './app/stores/LoginStore.jsx',
            './app/stores/OperationStore.jsx'
            //'./app/components/Operation.jsx',
        ],

        plugins: [ 'karma-chrome-launcher', 'karma-chai', 'karma-mocha',
            'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
            'karma-mocha-reporter', 'karma-clear-screen-reporter'
        ],



        exclude: [
        ],


        preprocessors: { 
          './app/**/*.js*': 'coverage',
          'tests.webpack.js': [ 'webpack', 'sourcemap'],
        },

        reporters: ['mocha', 'coverage'],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query:
                        {
                            presets:['react', 'es2015', 'stage-0'],
                            cacheDirectory: true,
                            compact: false
                        }
                    }
                ],
                postLoaders: [ {
                test: /\.jsx?$/,
                exclude: /(test|node_modules)/,
                loader: 'istanbul-instrumenter' } ]
            }
        },
        webpackServer: {
          noInfo: true,
          quiet: true
        },


        port: 9876,

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },


        colors: true,



        logLevel: config.LOG_INFO,


        autoWatch: false,


        browsers: ['Chrome'],


        singleRun: true,

        concurrency: Infinity
    })
}

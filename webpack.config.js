/* jshint node:true */
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var files = glob.sync('./*/static/js');
var rootJsDirs = [];

files.forEach(function(file) {
    rootJsDirs.push(path.resolve(file));
});


module.exports = {
    entry: {
        'module1/static/js/module1/narrowJumbotron': './module1/static/js/module1/narrowJumbotron',
    },
    output: {
        path: __dirname,
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
    },
    externals: {
        'jquery': 'jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        root: rootJsDirs
    },
    plugins: [
        // Necessary to only include the required languages.
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|fr)$/)
    ]
};


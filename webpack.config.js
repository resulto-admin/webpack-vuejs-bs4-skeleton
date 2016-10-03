/* jshint node:true */
var process = require('process');
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var files = glob.sync('./*/static/js');
var rootJsDirs = [];

files.forEach(function(file) {
    rootJsDirs.push(path.resolve(file));
});

var isProduction = process.env.NODE_ENV == 'production';


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
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
        ]
    },
    resolve: {
        root: rootJsDirs,
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        // Necessary to only include the required languages.
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|fr)$/)
    ]
};

if (isProduction) {
	module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
		}),
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
		})
	]);
}


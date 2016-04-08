var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    //devtool: 'eval',
    entry: {
        app: ['./src']
    },
    node: {
        net: 'empty',
        module: 'empty',
        fs: 'empty'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        target: 'web',
        pathinfo: true
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
        noParse: [/\.min\.js$/]
    }
};
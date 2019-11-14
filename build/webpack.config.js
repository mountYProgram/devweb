const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Utils = require('./utils');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: Utils.getEntry(),
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve('src')
        }
    },
    plugins: [
        ...Utils.getHtmlWebpackPlugin(),
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader', 'file-loader']
            },
            {
                test:/\.scss$/,
                loader:"vue-style-loader!css-loader!sass-loader"
            }
        ]
    }
};
var fs = require('fs');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var getEntry = function() {
    var pagePath = path.resolve('src/page');
    var pageFolderName = fs.readdirSync(pagePath);
    var entryArr = {};
    pageFolderName.forEach(function(item) {
        entryArr[item] = './src/page/' + item + '/main.js';
    });
    return entryArr;
}

var getHtmlWebpackPlugin = function() {
    var pagePath = path.resolve('src/page');
    var pageFolderName = fs.readdirSync(pagePath);
    var pluginArr = [];
    pageFolderName.forEach(function(item) {
        pluginArr.push(new HtmlWebpackPlugin({
            title: item,
            filename: item + '.html',
            template: './src/page/' + item + '/index.html',
            chunks: ['common', item]
        }));
    });
    return pluginArr;
}
module.exports = {
    getEntry: getEntry,
    getHtmlWebpackPlugin: getHtmlWebpackPlugin
}
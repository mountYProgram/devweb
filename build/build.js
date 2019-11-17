var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.config');

webpack(webpackConfig, function(err, stats) {
	if (err) {
		throw err;
	}
});
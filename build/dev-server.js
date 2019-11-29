var express = require('express');
var webpack = require('webpack');
var path = require('path');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = require('./webpack.config');
var apiMocker = require('mocker-api');

var app = express();

// webpack编译器
var compiler = webpack(webpackConfig);

// 使用webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

app.use(devMiddleware);

if (process.env.REQUEST_TYPE === 'proxy') {
	var proxyConfig = {
		target: process.env.PROXY_HTTP,
		changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
		ws: true,
		pathRewrite: {
		},
		router: {
		}
	}
	app.use(proxyMiddleware(proxyConfig));
} else {
	app.use(apiMocker(app, path.resolve('./mock/api.js')));
}
		
app.listen(8080, function() {
	console.log('服务启动在端口8080');
});
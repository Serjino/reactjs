const webpack = require('webpack');
const [ webpackServerCfg, webpackClientHotDevCfg ] = require('../cfg/webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientCompiler = webpack(webpackClientHotDevCfg);

hmrServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientHotDevCfg.output.publickPath,
    serverSideRender: true, 
    noInfo: true,
    watchOptions: {
        ignore: /dist/,
    },
    writeToDisk: true,
    stats: 'error-only',
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
}));

hmrServer.listen(3002, () => {
    console.log('HMR Server successfully started');
})

// ========================================

const compiler = webpack(webpackServerCfg);

compiler.run((err) => {
    if (err) {
        console.log('Compilation failed: ', err);
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('Compilation failed: ', err);
        }
        console.log('Compiled successfully');
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
            path.resolve(__dirname, '../src'),
        ]
    });
});
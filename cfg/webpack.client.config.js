const path = require('path');
// const HTMLWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;


module.exports = {
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: true,
    // },
    // devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    mode: 'production',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader'],
        }],
    },
    // plugins: [
    //     new HTMLWebpackPlugin ({template: path.resolve(__dirname, 'index.html')})
    // ],
};
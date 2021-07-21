const path = require('path');
// const HTMLWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: true,
    // },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'hmr'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3002/static/__webpack_hmr',
        path.resolve(__dirname, '../src/client/index.jsx'),
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
            {
                test:  /\.scss$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local}--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ],
};
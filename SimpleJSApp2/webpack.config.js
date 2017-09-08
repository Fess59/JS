/// <binding AfterBuild='Run - Development' Clean='Run - Production' ProjectOpened='Hot' />
"use strict";

var webpack = require('webpack');
var path = require('path');
var isProduction = process.env.NODE_ENV === 'production ';
var entryPoint = './scripts/index.jsx';
var app = isProduction ? [entryPoint] : [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    entryPoint
];

module.exports = {
    entry: {
        app: app
    },
    output: {
        path: path.resolve(__dirname, "./wwwroot/app"),
        filename: "[name].js",
        publicPath: 'http://localhost:3000/static/'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "react-hot-loader/webpack",
                exclude: (/(node_modules)/),
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: (/node_modules/),
                query: {
                    presets: ["es2015", "react"]
                }
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

    ],
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx"],
        alias: {
            DCT: path.resolve(__dirname, "./scripts/tools/dct"),
            Global: path.resolve(__dirname, "./scripts/global"),
            Forms: path.resolve(__dirname, "./scripts/forms")
        }
    },
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    }
};

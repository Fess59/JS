/// <binding AfterBuild='Profile - Development, Run - Development' Clean='Run - Production' />
"use strict";

var webpack = require('webpack');
var path = require('path');
var outFolder = path.resolve(__dirname, "./wwwroot/js");
var isProduction = process.env.NODE_ENV === 'production ';
var jsxLoaders = isProduction ?
    ["babel-loader"] :
    ["react-hot-loader", "babel-loader"]; // only react hot load in debug build
var entryPoint = './Scripts/index.jsx';
var app = isProduction ? [entryPoint] : [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    entryPoint
];

module.exports = {
    entry: {
        app: app
    },
    output: {
        path: outFolder,
        filename: "bundle.js",
        publicPath: 'http://localhost:3000/static/'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: (/(node_modules)/),
                loader: 'react-hot-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: (/(node_modules)/),
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx"],
        alias: {
            DCT: path.resolve(__dirname, "./scripts/tools/dct"),
            Global: path.resolve(__dirname, "./scripts/global"),
            Forms: path.resolve(__dirname, "./scripts/forms")
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        inline: false,
        headers: { "Access-Control-Allow-Origin": "*" }
    }
};
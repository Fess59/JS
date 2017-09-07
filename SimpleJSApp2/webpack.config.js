/// <binding AfterBuild='Run - Development' />
"use strict";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [ "./Scripts/app.jsx"],
    output: {
        filename: "./wwwroot/js/bundle.js"
    },
    module: {
        loaders: [
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
        extensions: ["", ".js", ".jsx"],
        root: path.resolve(__dirname),
        alias: {
            DCT: "scripts/tools/dct",
            Global: "scripts/global",
            Forms: "scripts/forms"
        }
    }
};
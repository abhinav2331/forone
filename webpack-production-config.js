﻿const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const dotenv = require('dotenv');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');



module.exports = () => {
    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed;
    //const env = dotenv.config();

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        devtool: 'source-map',        
        entry: {
            main: "./app/main.tsx",
            login: "./app/login.tsx"            
        },
        mode: "production",
        output: {
            path: __dirname + '/dist',            
            filename: "[name].entry.js",
            chunkFilename: '[name].js',            
            publicPath: '/dist/'
        },
        resolve: {
            extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'ts-loader'
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                }
            ]
        },
        optimization: {
            minimizer: [new UglifyJsPlugin()],           
        },        

        plugins: [            
            new NodemonPlugin(),
            new webpack.DefinePlugin(envKeys),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.AggressiveMergingPlugin(),            
            new AsyncChunkNames()     
            
        ],
               
        devServer: {
            historyApiFallback: true,
            // Delay the rebuild after the first change
            aggregateTimeout: 300,
            // Poll using interval (in ms, accepts boolean too)
            poll: 1000           
        }
    }
}


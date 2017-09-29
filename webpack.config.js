const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;

const extractSass = env === "production" && new ExtractTextWebpackPlugin({
        filename: "[hash].css",
        disable: env === "development"
    });

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            /*JS*/
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            /*SCSS and CSS*/
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]
                // use: extractSass && extractSass.extract({
                //     use: [
                //         {
                //             loader: "css-loader",
                //             options: {
                //                 sourceMap: true
                //             }
                //         },
                //         {
                //             loader: "sass-loader",
                //             options: {
                //                 sourceMap: true
                //             }
                //         },
                //     ],
                //     fallback: 'style-loader'
                // }) ||
            },
            /*HTML*/
            // {
            //     test: /(!ng)\.html$/,
            //     use: ['html-loader']
            // },
            /*IMAGES*/
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{loader: 'file-loader', options: {name: 'assets/[name].[ext]'}}]
            },
            /*FONTS*/
            {
                test: /\.(woff|woff2|eot|ttf|otf)(\?\S*)?$/,
                use: ['file-loader']
            },
            /*NG TEMPLATES*/
            {
                test: /\.ng\.html$/,
                use: ["ngtemplate-loader", "html-loader"]
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './includes/templates/index.ejs'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        historyApiFallback: true,
        port: 3000
    }
};
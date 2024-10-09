const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle-[fullhash].js',
        clean: true
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new MiniCssPlugin({
            filename: '[name]-[fullhash].css'
        })
    ],
    devServer: {
        port: 5555,
        static: {
            directory: path.join(__dirname, 'build')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssPlugin.loader,
                "css-loader"
            ]
        },
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                "targets": {
                                    //"ie": "8",
                                    "edge": "17",
                                    "firefox": "60",
                                    "chrome": "67",
                                    "safari": "11.1"
                                }
                            }
                        ]
                    ]
                }
            }
        }
    ]
    }
}
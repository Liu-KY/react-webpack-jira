const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ProgressPlugin, ProvidePlugin} = require('webpack')

module.exports = {
    entry: {
        app: {
            import: path.resolve(__dirname, '../', 'src/main.js')
        }
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: "js/[name].[chunkhash:8].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public/index.html'),
            inject: 'body',
            title: 'jira',
            filename: 'index.html',
            // icon
            // favicon:''
        }),
        //进度条
        new ProgressPlugin(),
        //全局导入
        new ProvidePlugin({
            React: 'react'
        })

    ],

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[contenthash:8][ext]'
                }
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../', 'src/')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, '../', 'node_modules')]
    },

    target: 'web'
}

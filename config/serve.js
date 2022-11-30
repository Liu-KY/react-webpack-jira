const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    mode: "development", //开发环境
    devtool: "inline-source-map",
    optimization: {
        //不压缩
        minimize: false,
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            exclude: ['node_modules'],
            fix: false,
            eslintPath: 'eslint'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", 'css-loader', 'sass-loader']
            },
            {
                test: /\.(less)$/,
                use: ["style-loader", 'css-loader', 'less-loader']
            },
        ],
    },

    devServer: {
        port: 8080,
        open: true,
        hot: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        },
        proxy: {}
    }
}

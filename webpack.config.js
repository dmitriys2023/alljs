const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        port:3000
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from:path.resolve(__dirname, "src/other/favicon.ico"),
                to:path.resolve(__dirname, "dist")
            }]

        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
}
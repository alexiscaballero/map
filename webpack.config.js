const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForJS = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
}

const rules = [rulesForJS]

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 80,
    },
    module: {
        rules: rules
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
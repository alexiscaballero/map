const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForJS = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
}

const rulesForStyles = {
    test: /\.(css|sass|scss)$/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader'
        },
        {
            loader: 'sass-loader'
        }
    ]
}

const rules = [rulesForJS, rulesForStyles]

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
        port: 8080,
    },
    module: {
        rules: rules
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
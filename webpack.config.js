var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            { context: 'src', from: 'images/**/*', to: '' },
            ], 
            {
                copyUnmodified: false
            }
        ),
        new WriteFilePlugin()
    ],
    // Configuration options for the module loaders (aka babel transpiler, sass transpiler etc)
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader' // -loader suffix can no longer be omitted!
            ]},
            {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]}
        ]
    },
    // Configuration options for the webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                'file-loader?name=images/[name].[ext]',
                'image-webpack-loader'
                ]
            },
            {
                test: /\.pdf/,
                use: [
                "file-loader?name=docs/[name].[ext]",
                'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            template: "./src/index.html"
        })
    ]
};
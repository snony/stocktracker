const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: './public',
        hot: true,
        open: true,
        historyApiFallback: true
    },
    watch: true
})
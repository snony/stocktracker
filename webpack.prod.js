const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const buildPath = path.join(__dirname, 'dist');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',

})
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true,
        open: true,
        historyApiFallback: true
    },
    watch: true
})
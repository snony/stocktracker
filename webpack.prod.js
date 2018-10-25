const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-source-map',
    entry: {
        client: ['./src/index.tsx'],
        vendor: ['react', 'react-dom', 'redux'],
    },
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false
                    }
                }
            })
        ],
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor_app',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.bundle\.js$/,
                use: 'bundle-loader'
            }
        ]
    }
})
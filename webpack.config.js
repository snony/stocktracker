var path = require('path')

module.exports = {
    entry: {
        app:["./src/index.js"]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
        
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    mode: "development",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.(js|tsx)?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
            {
                test: /\.css$/,
                use:[
                  {
                      loader: 'style-loader'
                  },{
                      loader: 'css-loader'
                  }
              ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    watch: true
};
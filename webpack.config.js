var config = {
    entry: './router.js',

    output: {
        path: './',
        filename: 'index.js',
    },
    /*webpack-dev-server....
    ......
    */


    //Module bundle
    module: {
        loaders: [{
            // loaders add file have target jsx*....
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;

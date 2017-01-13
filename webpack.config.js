var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'less']
            },
        ]
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: path.join(__dirname, 'public/')
    }
};
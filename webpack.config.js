let path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/components/Toast/Toast.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Toast.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader', // post process the compiled CSS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
}

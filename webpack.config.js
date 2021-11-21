const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        goods: './src/modules/goods.js',
        search: './src/modules/search.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map'
}
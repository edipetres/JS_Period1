module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                 test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                 loader: "file-loader"
            }
        ]
    }
};
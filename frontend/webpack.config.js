const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const bootstrapCSSURL = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';



const dynamicHTMLGenerator = new HtmlWebpackPlugin({
    title: 'Web Application',
    minify: true,
    favicon: path.resolve(__dirname, './webapp/source/images/icon.png'),
    template: path.resolve(__dirname, './webapp/source/index.html')

});

const copyPlugin = new CopyPlugin([
    { from: './webapp/source/images', to: 'images' }
])

const additionalCSS = new HtmlWebpackTagsPlugin({
    tags: [bootstrapCSSURL],
    append: true
});

const WebpackConfig = {
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, './webapp/source/app.main.js'),
    output: {
        path: path.resolve(__dirname, './webapp/build'),
        filename: 'bundle.js'
    },
    performance: {
        hints: false
    },
    devServer: {
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        dynamicHTMLGenerator,
        additionalCSS,
        copyPlugin
    ],
    module: {
        rules: [
            /*{
                test:/\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: `jshint-loader`,
                        options: {}
                    }
                ]
            },*/
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.less$/,
                loader: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    }
                ]
            }
        ]
    }
};

module.exports = WebpackConfig;
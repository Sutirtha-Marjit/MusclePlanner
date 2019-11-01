const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const bootstrapCSSURL= 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

const dynamicHTMLGenerator = new HtmlWebpackPlugin({
    title: 'Muscle Planner',
    minify: true,
    favicon:path.resolve(__dirname,'./webapp/source/images/icon.png'),
    template:path.resolve(__dirname,'./webapp/source/index.html')
    
});

const additionalCSS = new HtmlWebpackTagsPlugin({
    tags:[bootstrapCSSURL],
    append:true
});

const WebpackConfig = {
    mode:'production',
    devtool: 'source-map',
    //entry: path.resolve(__dirname,'./webapp/source/app.tsx'),
    entry: path.resolve(__dirname,'./webapp/source/app.main.js'),
    output:{
        path:path.resolve(__dirname,'./webapp/build'),
        filename:'bundle.js'
    },
    performance: {
        hints: false
    },
    devServer:{
        compress:true,
        port:9000
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins:[
        new CleanWebpackPlugin(),
        dynamicHTMLGenerator,
        additionalCSS
    ],
    module:{
        rules:[
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
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }


};

module.exports = WebpackConfig;
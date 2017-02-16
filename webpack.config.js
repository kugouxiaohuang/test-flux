var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports={
    entry:"./index.jsx",
    output:{
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module:{
        loaders:[{
            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:"babel-loader",
            query:{
                presets:["es2015","react"]
            }
        }]
    },
    plugins:[
        new CommonsChunkPlugin({name:"init",filename:"init.js"}),
        new OpenBrowserPlugin({
                url:"http://127.0.0.1:8080"
            })
    ]
}
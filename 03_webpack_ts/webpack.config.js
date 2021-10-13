const path = require('path')
const HtmlWebpackPluign = require("html-webpack-plugin")

module.exports = {
  mode:'development',
  entry:"./src/main.ts",
  output:{
    path: path.resolve(__dirname, './dist'),
    filename:'bundle.js'
  },
  devServer:{},
  module:{
    rules:[
      {
        test:/\.ts$/,
        loader:"ts-loader"
      }
    ]
  },
  resolve:{
    // 忽略扩展名
    extensions:['.ts','.css','.js','.vue','.cjs','.json']
  },
  plugins:[
    new HtmlWebpackPluign({
      template:'./index.html'
    })
  ]
}
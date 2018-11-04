const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


const webAppPath = "./src";
const appEntry = "/index.js";
const htmlTemplatePath = "/index.html";

module.exports = {
  entry: {
    bundle: ["babel-polyfill", webAppPath + appEntry],
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      { 
        test: /\.js|.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { modules: false }], "@babel/react"] 
          }
        },
        exclude: [path.resolve(__dirname, "node_modules")] 
      },
      {
        test: /\.s?css$/,
        use: [
          {
          loader: MiniCssExtractPlugin.loader
          }, 
             "css-loader",
             "sass-loader"
          ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "fonts/[name].[ext]?[hash]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]?[hash]"
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false,
      exclude: ["node_modules"]
    }),
    new HtmlWebpackPlugin({
      template: webAppPath + htmlTemplatePath,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    })
  ]
}




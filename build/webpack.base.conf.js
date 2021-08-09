const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.s[c|a]ss$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html',
      inlineSource: '.(js|css)$',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/img/favicon.png',
      prefix: 'icons/',
      background: '#663399',
      title: 'Jerred Shepherd',
      inject: true,
      cache: true,
      publicPath: './',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),
    new MiniCssExtractPlugin(),
  ]
};

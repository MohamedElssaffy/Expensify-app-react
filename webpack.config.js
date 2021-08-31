const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (!process.env.NODE_ENV) {
  require('dotenv').config({ path: '.env.dev' });
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      linkType: 'text/css',
    }),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(
        process.env.FIREBASE_API_KEY
      ),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.FIREBASE_AUTH_DOMAIN
      ),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
        process.env.FIREBASE_PROJECT_ID
      ),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
        process.env.FIREBASE_API_KEY
      ),
      'process.env.FIREBASE_MESSAGEING_SENDER_ID': JSON.stringify(
        process.env.FIREBASE_MESSAGEING_SENDER_ID
      ),
      'process.env.FIREBASE_APP_ID': JSON.stringify(
        process.env.FIREBASE_APP_ID
      ),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
        process.env.FIREBASE_DATABASE_URL
      ),
    }),
  ],
  devtool: isProd ? 'source-map' : 'eval-nosources-cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      // publicPath: '/dist/',
    },
    historyApiFallback: true,
  },
};

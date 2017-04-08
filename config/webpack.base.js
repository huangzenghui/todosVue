const webpack = require('webpack');
const config = require('./config');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = {
  _entry: {
    app: config.srcDir + '/main.js',
    vue: ['vue', 'vuex']
  },
  _output: {
    filename: 'scripts/[name].js',
    path: config.buildDir + '/assert/',
  },
  _module: {
    rules: [{
      test: /\.vue$/,
      include: [
        path.resolve(config.srcDir+'/components'),
      ],
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: [ 'css-loader?sourceMap', 'postcss-loader'],
            fallback: 'vue-style-loader'
          }),
          js: {
            loader: 'babel-loader',
          }
        }
      }
    }, {
      test: /\.js$/,
      include: [
        path.resolve(config.srcDir)
      ],
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      loader: 'babel-loader',
    }],
  },
  _devtool: 'source-map',
  _plugins: [
    new ExtractTextPlugin({ filename: 'styles/[name].css', disable: false, allChunks: true }),
  ]
}

module.exports = baseConfig;

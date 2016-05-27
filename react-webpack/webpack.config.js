var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');



module.exports = {
  entry: {
    index: APP_PATH + '/index.js',
  },
  output: {
    path: BUILD_PATH,
    filename: './[name].bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js|jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
        test: /\.css$/,
        loaders: ['style', 'css']
      }],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: 'ejs!' + APP_PATH + '/app.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
}

var path = require('path');
var webpack = require('webpack');

module.exports = {
  // debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './src/index.tsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      root: path.resolve('./src')
    },
    extensions: ['.jsx', '.js', '.tsx', '.ts']
    // root: [path.resolve('./src')],
  }
};

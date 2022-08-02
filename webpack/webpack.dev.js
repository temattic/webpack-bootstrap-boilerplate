const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"]
                ],
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
});

const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const paths = {
  src: {
    favicon: './src/favicon',
    fonts: './src/fonts',
    images: './src/images',
    js: './src/js',
    scss: './src/scss',
    vendor: './src/vendor',
  },
  dist: {
    css: './assets/css',
    favicon: './assets/favicon',
    fonts: './assets/fonts',
    images: './assets/images',
    js: './assets/js',
    vendor: './assets/vendor',
  }
};

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: paths.dist.css + '/[name].bundle.css',
    }),
  ]
});

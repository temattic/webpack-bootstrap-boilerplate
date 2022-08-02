const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HandlebarsPlugin = require('handlebars-webpack-plugin');

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

module.exports = {
  entry: {
    'libs': [paths.src.scss + '/libs.scss'],
    'theme': [...[paths.src.js + '/theme.js', paths.src.scss + '/theme.scss']]
  },
  output: {
    publicPath: "/",
    filename: paths.dist.js + '/[name].bundle.js',
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  stats: {
    // Turn off information about the built modules.
    modules: false,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"],
          cacheDirectory: true
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: paths.src.favicon,
          to: paths.dist.favicon,
          noErrorOnMissing: true,
        },
        {
          from: paths.src.fonts,
          to: paths.dist.fonts,
          noErrorOnMissing: true,
        },
        {
          from: paths.src.images,
          to: paths.dist.images,
          noErrorOnMissing: true,
        },
      ]
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), 'src', 'html', '**', '*.html'),
      output: path.join(process.cwd(), 'dist', '[path]', '[name].html'),
      partials: [path.join(process.cwd(), 'src', 'partials', '**', '*.{html,svg}')],
      helpers: {
        is: function (v1, v2, options) {
          const variants = v2.split(' || ');
          const isTrue = variants.some(variant => v1 === variant);

          return isTrue ? options.fn(this) : options.inverse(this);
        },
        isnt: function (v1, v2, options) {
          return v1 !== v2 ? options.fn(this) : options.inverse(this);
        },
        webRoot: function () {
          return '{{webRoot}}';
        },
      },
      onBeforeSave: function (Handlebars, resultHtml, filename) {
        const level = filename.split('//').pop().split('/').length;
        const finalHtml = resultHtml.split('{{webRoot}}').join('.'.repeat(level));

        return finalHtml;
      },
    }),
  ]
}

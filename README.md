# Webpack 5 + Bootstrap 5 + SASS Boilerplate

Webpack boilerplate for Bootstrap 5 templates

### Installation

```
npm install
```

All dependencies will be downloaded to the node_modules directory.

### Dev Server

```
npm start
```

Now you're ready to modify the source files and generate new dist/ files. File changes are automatically detected thanks to the webpack-dev-server.

### Build

```
npm run build
```

### Features:

- Bundling via [Webpack 5](https://webpack.js.org/)
- ES6+ Support via [Babel 7](https://babeljs.io/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- Latest version of Bootstrap 5
- Vanilla JS, no jQuery dependencies
- Clean code that adheres to Bootstrap's guidelines

### File Structure:

```
boilerplate/
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .stylelintrc
├── README.md
├── package.json
├── webpack/
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── src/
│   ├── favicon/
│   ├── fonts/
│   ├── html/
│   ├── images/
│   ├── js/
│   │   ├── modules/
│   │   └── app.js
│   ├── partials/
│   └── scss/
│       ├── 1-variables/
│       ├── 2-mixins/
│       ├── 3-components/
│       ├── 4-utilities/
│       ├── 5-vendor/
│       └── app.scss
└── dist/
    ├── css/
    │   └── app.css
    └── js/
        └── app.js
```

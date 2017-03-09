# boilerplate-frontend

a lightweight template for simple frontend sites


### features

- JS bundling provided by the webpack core
- SASS transpilation: "sass-loader" transforms SASS into CSS. "css-loader" parses the CSS into JS and resolves any dependencies. "style-loader" outputs our CSS into a style tag in the document.
- "html-webpack-plugin" will inject all bundled js and css files into the html file
- JS sourcemaps (provided by the "devtool" property)
- "webpack-dev-server" provides live-reloading
- "copy-webpack-plugin" selects files that need to be copied from src to dist (https://github.com/kevlened/copy-webpack-plugin)
- "write-file-webpack-plugin" is needed to force webpack-dev-server to copy watched files to dist folder instead from only serving them up from memory. files will still get served from memory but also copied. (https://github.com/gajus/write-file-webpack-plugin)
- "optimize-css-assets-webpack-plugin" minifies css. this module is necessary as webpack isnt able to minify css anymore, when we dont inject css via js but instead use the "extract-text-webpack-plugin"
- "file-loader" and "url-loader" are resolving image references in css files
- "eslint" installed as a local npm package with associated .eslintrc config to allow your code editor (e.g. vscode) make use of linting-plugins

### todo


### other ressources

https://webpack.js.org/guides/  
https://webpack.js.org/configuration/  
http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/  
https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/  
https://github.com/NMFR/optimize-css-assets-webpack-plugin  
https://survivejs.com/webpack/loading/images/
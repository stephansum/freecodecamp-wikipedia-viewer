# boilerplate-frontend

a lightweight template for simple frontend sites


### Features

- JS bundling (webpack core functionality)
- SASS transpilation (sass-loader transforms Sass into CSS. css-loader parses the CSS into JavaScript and resolves any dependencies. style-loader outputs our CSS into a style tag in the document.)
- JS + CSS injection (html-webpack-plugin)
- JS sourcemaps
- webpack-dev-server with live-reload

### Todo

- Linting
- Copy ressources to /dist (images etc)
- Deployment script (deploy:surge, deploy:localtunnel, deploy:ftp, deploy:github-pages)
- Inline-CSS causes flash of unstyled content problem -> dedicated css files ?
- Better sourcemaps for production build?
- Include polyfill and modernizr to bundle


### Ressources

https://webpack.js.org/guides/  
https://webpack.js.org/configuration/  

http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/  
https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/  
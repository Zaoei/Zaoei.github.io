# 压缩代码

## js 压缩

目前最成熟的 JavaScript 代码压缩工具是 [UglifyJS](https://github.com/mishoo/UglifyJS#minify-options)， 它会分析 JavaScript 代码语法树，理解代码含义，从而能做到诸如去掉无效代码、去掉日志输出代码、缩短变量名等优化。

webpack v5 带有最新版本的 terser-webpack-plugin。底层就是使用 UglifyJS 实现。


## 样式文件压缩
CSS 代码也可以像 JS 那样被压缩，目前比较成熟可靠的 CSS 压缩工具是 cssnano，cssnano 是能理解 CSS 代码的含义，而不仅仅是删掉空格，例如：

对于 webpack v5 或更高版本，官方推荐使用 CssMinimizerWebpackPlugin，该插件是使用 cssnano 优化和压缩 CSS，支持缓存和并发模式下运行。

**install**
```js
npm install css-minimizer-webpack-plugin --save-dev
```

**用法**
```js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // ...
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
```

## 压缩 HTML
HtmlWebpackPlugin 插件除了可以帮助我们简化 HTML 文件的创建，也可以压缩 HTML 文件。

在生产模式下（production），默认为对html文件进行压缩。
**install**
```js
npm install --save-dev html-webpack-plugin
```

**用法**
```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [new HtmlWebpackPlugin()],
};
```

## 图片压缩

### image-webpack-loader

安装报错，待使用。

### base64
url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
**install**
```js
npm install --save-dev url-loader
```

**用法**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 作为数据URL的内联文件的字节限制
            }
          }
        ]
      }
    ]
  }
}
```

结果：
```js
export default "data:image/png;base64,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LXPsy6hGbHMFW13Vfy+dL59dHvOaNxoeyGTklwDskA3lEW+PHZdxeAmxpHsboWMe2N2/qwG6CnT/WPAZ4zH3RparK18tzas/6bnoA8XR+HLlElbgf8530+6gJ/M57kEaPRrDOS7H65j962qAeD1tON8nnjCM78BSisFLRc/fma28wOO7l8XMVXu1zEq/kbu87ci3HyXJPobzP1oAUYMXuYOZRygUn4QEcYTI71Tn1R/ja9GN9RpstxZTvB7/Aenhs15v0O8kpVOfrlNhL88fR7yXQWkKq3p6anG6+txGKymutLaeF5M2A7frAC7DW6guxn92y6FdN8FVtLtmftLqAgI3JGP61eKl6G+deItg1bO35bBrAN6eqf412yf+2e615LZQSrhI1wD0K0ap6515eyDh+TfdtV7HtukbbdULpAA3+cvK+v9Clv7vba2RrHNLJbA1bg2jU4ANSFprSAG2xqthdAqwAUlrDSnA1ng1jE4BNiBprSEF2BqvhtEpwAYkrTWkAFvj1TA6BdiApLWGFGBrvBpGpwAbkLTWkAJsjVfD6PcLqvXqQsOItCGRQCqBiXiad/4X80sQITDFrQIAAAAASUVORK5CYII="
```
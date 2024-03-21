# resolve

webpack 构建流程：
...

## resolve 阶段优化

resolve 阶段在做的事情，找各个文件的绝对路径。

如果我们反过来理解，提供给 webpack 的都是绝对路径，那么是不是这一步就可以省略？

理论上来说是的，但是并不现实，想想代码里引用文件的地址都是从电脑桌面到文件地址这么一长串的路径，想想就可怕...

我们能做的是，尽量多的提供完整路径，减少解析的次数。

### [resolve.alias](https://webpack.docschina.org/configuration/resolve/#resolvealias)

创建 import 或 require 的别名，来确保模块引入变得更简单。

```js
const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, 'src/utilities/'),
            Templates: path.resolve(__dirname, 'src/templates/')
        }
    }
};
```

虽然在开发中使用 alias 比较方便，但是在打包时需要对 alias 进行解析，所以在需要合理使用，不能滥用。

默认情况下，webpack 会从⼊⼝⽂件./node_modules/bin/react/index 开始递归解析和处理依赖的⽂件。我们可以直接指定⽂件，避免这处的耗时。

```js
module.exports = {
  //...
 resolve: {
    alias: {
        react: path.resolve(__dirname, "../node_modules/react/umd/react.production.min.js"),
        "react-dom": path.resolve(__dirname, "../node_modules/react-dom/umd/react-dom.production.min.js"),
        "react-redux": path.resolve(__dirname, "../node_modules/react-redux/dist/react-redux.min.js"),
        "react-router": path.resolve(__dirname, "../node_modules/react-router/umd/ReactRouter.min.js"),
    },
  }
}
```

优化前：Done in 9.04s.

优化后：Done in 8.63s.

3次结果平均值，优化 200ms 左右

### [resolve.extensions](https://webpack.docschina.org/configuration/resolve/#resolveextensions)

尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。

```js
module.exports = {
  //...
  resolve: {
    extensions: ['.js', '.json', '.wasm'],
  },
};
```

按照顺序进行解析，如果设置的越多，解析的次数也会随之增多，也是不可滥用的。


### [resolve.modules](https://webpack.docschina.org/configuration/resolve/#resolvemodules)

告诉 webpack 解析模块时应该搜索的目录。

```js
module.exports = {
  //...
  resolve: {
    modules: ['node_modules'],
  },
};
```


> 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数。
> 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。
> 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false
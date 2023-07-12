# cli

启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。Watch 模式默认关闭。

`webpack` 执行 `Complier.run()`

``` js
const run = () => {
    this.hooks.beforeRun.callAsync(this, err => {
        if (err) return finalCallback(err);

        this.hooks.run.callAsync(this, err => {
            if (err) return finalCallback(err);

            this.readRecords(err => {
                if (err) return finalCallback(err);

                this.compile(onCompiled);
            });
        });
    });
};
```
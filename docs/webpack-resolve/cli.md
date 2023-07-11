


webpack 执行 Complier.run()
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
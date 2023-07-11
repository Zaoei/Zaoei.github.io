var waitingUpdateResolves = {};

(function () {
    var __webpack_modules__ = {
        './src/index.js': (module, __module_export__, __webpack_require__) => {
            let input = document.createElement('input');
            document.body.appendChild(input);

            let title = __webpack_require__('./src/title.js');
            let div = document.createElement('div');
            div.innerHTML = title;
            document.body.appendChild(div);
            

            __webpack_require__
                .e('src_app_js')
                .then(
                    __webpack_require__.bind(
                        __webpack_require__,
                        './src/app.js'
                    )
                )
                .then((app) => {
                    app();
                });
        },
        './src/title.js': (module, exports, __webpack_require__) => {
            // module.exports = {
            //     name: 'name'
            // }
            moduleexports.name = 'a'
        }
    };

    var __webpack_module_cache__ = {};

    var __webpack_require__ = (moduleId) => {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            if (cachedModule.error !== undefined) throw cachedModule.error;
            return cachedModule.exports;
        }
        var module = (__webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: 'webpack-runtime'
        });

        __webpack_modules__[moduleId].call(
            module,
            module,
            module.exports,
            __webpack_require__
        );
        console.log(module)
        return module.exports;
    };

    __webpack_require__.e = (chunkId) => {
        return new Promise((resolve) => {
            waitingUpdateResolves[chunkId] = resolve;
            hmrC(chunkId);
        });
    };

    function hmrC(chunkId) {
        script = document.createElement('script');
        script.src = 'http://127.0.0.1:3009/' + chunkId;
        script.onload = () => {
            self['webpackChunkwebpack_loader'].forEach((item) => {
                const chunkId = item[0][0];
                const module = item[1]; // { moduleId: code }
                __webpack_modules__ = { ...__webpack_modules__, ...module };

                waitingUpdateResolves[chunkId]();
            });
        };
        document.head.appendChild(script);
    }

    self['webpackChunkwebpack_loader'] = [];

    var __webpack_exports__ = __webpack_require__('./src/index.js');
})();

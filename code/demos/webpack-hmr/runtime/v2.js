(function () {
    var __webpack_modules__ = {
        "./src/index.js": (module, __module_export__, __webpack_require__) => {
            let input = document.createElement("input");
            document.body.appendChild(input);

            let title = __webpack_require__("./src/title.js");
            let div = document.createElement("div");
            div.innerHTML = title;
            document.body.appendChild(div);
            module.hot.accept('./src/title.js', () => {})
        },
        "./src/title.js": (module, __module_export__, __webpack_require__) => {
            module.exports = "webpack-runtime";
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
            exports: {},
            parents: [],
            children: []
        });

        var execOptions = {
            id: moduleId,
            module: module,
            factory: __webpack_modules__[moduleId],
            require: __webpack_require__,
        };
        
        handleModule(execOptions);

        execOptions.factory.call(
            module.exports,
            module,
            module.exports,
            execOptions.require
        );
        return module.exports;
    };

    function handleModule(option) {
        const module = option.module;
        module.hot = createModuleHotObject(option, module);
    }

    function createModuleHotObject(option, module) {
        var hot = {
            _acceptedDependencies: {},
            check: hotCheck,
            accept: (dep, callback, errorHandle) => {
                hot._acceptedDependencies[dep] = callback;
            },
        };

        return hot;
    }


    function hotCheck() {}

    var __webpack_exports__ = __webpack_require__("./src/index.js");
})();

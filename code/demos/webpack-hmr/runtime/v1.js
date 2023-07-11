(function () {
    var __webpack_modules__ = {
        './src/index.js': (module, __module_export__, __webpack_require__) => {
            let title = __webpack_require__('./src/title.js');
            console.log(title)
        },
        './src/title.js': (module, __module_export__, __webpack_require__) => {
            module.exports = 'webpack-runtime';
        }
    };

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            if (cachedModule.error !== undefined) throw cachedModule.error;
            return cachedModule.exports;
        }
        var module = (__webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        });

        __webpack_modules__[moduleId].call(
            module,
            module,
            module.exports,
            __webpack_require__
        );
        return module.exports;
    }

    __webpack_require__('./src/index.js')
})();

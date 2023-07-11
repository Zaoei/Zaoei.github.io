var lastHash = "";
var currentHash = "";
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, fn) {
        this.events[eventName] = fn;
    }
    emit(eventName, ...arg) {
        this.events[eventName](...arg);
    }
}

var hotEmitter = new EventEmitter();

(function () {
    var __webpack_modules__ = {
        "./src/index.js": (module, __module_export__, __webpack_require__) => {
            let input = document.createElement("input");
            document.body.appendChild(input);

            let title = __webpack_require__("./src/title.js");
            let div = document.createElement("div");
            div.innerHTML = title;
            document.body.appendChild(div);
            module.hot.accept("./src/title.js", () => {});
        },
        "./src/title.js": (module, __module_export__, __webpack_require__) => {
            module.exports = "webpack-runtime";
        },
        "webpack-dev-server/client.js": () => {
            var socket = () => {
                var ws = new WebSocket("ws://localhost:9000/ws");

                ws.onmessage = function (e) {
                    var data = JSON.parse(e.data);

                    if (data.type === "hash") {
                        lastHash = currentHash;
                        console.log("记录当前hash，和上一次hash，用于回退啥的");
                        currentHash = data.data;
                        console.log(lastHash, currentHash);
                    }

                    if (data.type === "ok") {
                        function reloadApp() {
                            hotEmitter.emit("webpackModuleUpdate");
                        }
                        reloadApp();
                    }
                };
            };
            socket();
        },
        "webpack/hot/dev-server.js": (module) => {
            hotEmitter.on("webpackModuleUpdate", () => {
                console.log("webpackModuleUpdate");
                module.hot.check(true);
            });
        },
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
            children: [],
        });

        var execOptions = {
            id: moduleId,
            module: module,
            factory: __webpack_modules__[moduleId],
            require: __webpack_require__,
        };

        handleModule(execOptions);

        console.log(execOptions, "execOptions");

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

    function hotCheck() {
        hmrM()
            .then((update) => {
                console.log(update, "update");
                return hmrC();
            })
            .then(() => {
                console.log(__webpack_module_cache__, "module");
            });
    }

    function hmrM() {
        return new Promise((resolve, reject) => {
            const url = "main." + lastHash + ".hot-update.json";
            fetch(url).then((response) => {
                resolve(response.json());
            });
        });
    }

    function hmrC() {
        script = document.createElement("script");
        script.src = "main." + lastHash + ".hot-update.js";
        document.head.appendChild(script);
    }

    self["webpackHotUpdateebpack_loader"] = (
        chunkId,
        moreModules,
        runtime
    ) => {
        for (var moduleId in moreModules) {
            __webpack_modules__[moduleId] = moreModules[moduleId];
        }
        console.log(moreModules, __webpack_modules__, "__webpack_modules__");
    };

    __webpack_require__("webpack-dev-server/client.js");
    __webpack_require__("webpack/hot/dev-server.js");
    var __webpack_exports__ = __webpack_require__("./src/index.js");
})();

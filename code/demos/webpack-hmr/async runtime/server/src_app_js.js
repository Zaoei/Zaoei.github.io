'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunkwebpack_loader'] =
    self['webpackChunkwebpack_loader'] || []).push([
    ['src_app_js'],
    {
        './src/app.js': (module, __module_export__, __webpack_require__) => {
            let div = document.createElement('div');
            div.innerHTML = '我是异步模块app';
            document.body.appendChild(div);
            function app() {
                console.log('我是app');
            };
            module.exports = app;
        }
    }
]);

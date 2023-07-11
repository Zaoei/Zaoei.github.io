(() => {
    'use strict';
    var e = {
            d: (t, r) => {
                for (var o in r)
                    e.o(r, o) &&
                        !e.o(t, o) &&
                        Object.defineProperty(t, o, {
                            enumerable: !0,
                            get: r[o]
                        });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }
        },
        t = {};
    e.r(t), e.d(t, { default: () => n, firstName: () => r, getName: () => o });
    const r = 'firstName';
    function o(e) {
        return e.a;
    }
    o({ a: 123 });
    const n = function (e) {
        return e * e * e;
    };
    console.log(function () {
        return t.square(1), '我是index';
    });
})();

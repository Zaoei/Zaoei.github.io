function currying(fn, ...params) {
  return function (...args) {
    const newParams = params.concat(args);
    if (newParams.length !== fn.length) {
      return currying.call(this, fn, ...newParams);
    } else {
      return fn.apply(this, newParams);
    }
  };
}

function a(a, b, c) {
  console.log(a + b + c)
}

const cu = currying(a);
cu(1)(1)

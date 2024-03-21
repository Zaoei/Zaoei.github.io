const PADDING = 'PADDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class NewPromise {
  constructor(executor) {
    this.status = PADDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];

    const resolve = (value) => {
      if (value instanceof NewPromise) {
        return value.then(resolve, reject);
      }
      if (this.status === PADDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallback.forEach((cb) => cb());
      }
    };
    const reject = (reason) => {
      if (this.status === PADDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallback.forEach((cb) => cb());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err;
          };

    const thenPromise = new NewPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            if (thenPromise === x) {
              throw new Error('xxxx');
            }
            if (typeof x === 'function' || (typeof x === 'object' && x != null)) {
              if (x.then) {
                x.then.call(
                  x,
                  (v) => {},
                  (e) => {
                    reject(e);
                  }
                );
              } else {
                resolve(x);
              }
            } else {
              resolve(x);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === REJECTED) {
        onRejected(this.reason);
      }
      if (this.status === PADDING) {
        this.onFulfilledCallback.push(() => onFulfilled(this.value));
        this.onRejectedCallback.push(() => onRejected(this.reason));
      }
    });

    return thenPromise;
  }
  resolve(value) {
    return new NewPromise((resolve) => {
      resolve(value);
    });
  }
  reject(value) {
    return new NewPromise((undefined, reject) => {
      reject(value);
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(cb) {
    return this.then(
      (value) => {
        return NewPromise.resolve(cb()).then(() => value);
      },
      (reason) => {
        return NewPromise.reject(cb()).then(() => {
          throw reason;
        });
      }
    );
  }
}

const resolvePromise = (promise, x, resolve, reject) => {
  if (promise === x) {
    throw new error('xxx');
  }
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            resolvePromise(promise, y, resolve, reject);
          },
          (e) => {
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    resolve(x);
  }
};

NewPromise.all = function (values) {
  if (!Array.isArray(values)) {
    return 'xxxx';
  }

  return new NewPromise((resolve, reject) => {
    const result = [];
    let index = 0;
    const processResult = (value, i) => {
      result[i] = value;
      index++;
      if (index === values.length) {
        resolve(result);
      }
    };

    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'function') {
        values[i].then((value) => {
          processResult(value, i);
        }, reject);
      } else {
        processResult(value, i);
      }
    }
  });
};

NewPromise.race = function (values) {
  return new NewPromise((resolve, reject) => {
    for (let i = 0; i < values.length; i++) {
      const val = values[i];
      if (val && typeof val.then === 'function') {
        val.then(resolve, reject)
      } else {
        resolve(val)
      }
    }
  });
};

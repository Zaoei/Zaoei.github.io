class newPromise {
  constructor(executor) {
    this.status = 'padding';
    this.result = null;
    this.error = null;
    this.successHandlers = [];
    this.errorHandlers = [];

    const resolve = (result) => {
      if (this.status === 'padding') {
        this.status = 'resolve';
        this.result = result;
        this.successHandlers.forEach((handler) => handler(this.result));
      }
    };

    const reject = (result) => {
      if (this.status === 'padding') {
        this.status = 'reject';
        this.result = result;
        this.errorHandlers.forEach((handler) => handler(this.result));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(successHandler) {
    return new Promise((resolve, reject) => {
      const handlerWrapper = (result) => {
        try {
          const newResult = successHandler(result);
          if (newResult instanceof Promise) {
            newResult.then(resolve).catch(reject);
          } else {
            resolve(newResult);
          }
        } catch (error) {
          reject(error);
        }
      };
      if (this.status === 'resolve') {
        handlerWrapper(this.result);
      } else if (this.status === 'reject') {
        reject(this.error);
      } else {
        this.successHandlers.push(handlerWrapper);
        this.errorHandlers.push(reject);
      }
    });
  }
  catch(errorHandlers) {
    return new Promise((resolve, reject) => {
      const handleWrapper = (error) => {
        try {
          const newResult = errorHandlers(error);
          resolve(newResult);
        } catch (error) {
          reject(error);
        }
      };
      if (this.status === 'reject') {
        handleWrapper(this.error);
      } else if (this.status === 'resolve') {
        resolve(this.result);
      } else if (this.status === 'padding') {
        this.errorHandlers.push(handleWrapper);
        this.successHandlers.push(resolve);
      }
    });
  }
}

new newPromise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(2);
  }, 1000);
})
  .then((result) => {
    console.log(result);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  });

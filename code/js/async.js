function generatorToAsync(generatorFunc) {
  // 返回一个 promise 对象
  return new Promise((resolve, reject) => {
    // 调用 generatorFunc 方法，获取迭代器
    const gen = generatorFunc();

    // key 为迭代器的方法名 next throw
    // arg 为每次迭代器返回的值，用于后续的迭代使用
    function step(key, arg) {
      let generatorResult;

      // 包裹在 try/catch 中，如果报错了，外部也可以通过 .catch 调用
      try {
        generatorResult = gen[key](arg);
      } catch (error) {
        return reject(error);
      }
      // gen.next() 得到的结果是一个 { value, done } 的结构
      const { value, done } = generatorResult;

      // done 为 true 说明迭代结束，通过 resolve 返回结果，外部也可以通过 .then 继续调用
      if (done) {
        return resolve(value);
      }

      // value 为值时，执行 onResolve 方法，触发下一个 gen.next
      // 当 value 值为 promise 对象，根据 promise 的状态，如果是 resolve 则执行 gen.next
      // 如果是 reject 则执行 gen.throw，最终被 try/catch 捕获
      Promise.resolve(value).then(
        function onResolve(val) {
          step('next', val);
        },
        function onReject(err) {
          step('throw', err);
        }
      );
    }
    step('next');
  });
}

const getData = () => new Promise((resolve) => setTimeout(() => resolve('data'), 1000));
const getDataError = () =>
  new Promise((_, reject) => setTimeout(() => reject('error'), 1000));

function* testG() {
  // await被编译成了yield
  const data = yield getData();
  console.log('data: ', data);
  const data2 = yield getDataError();
  console.log('data2: ', data2);
  const data3 = yield getData();
  console.log('data3: ', data3);

  return 'success';
}

generatorToAsync(testG);

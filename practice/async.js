function generatorToAsync(generatorFunc) {
  const gen = generatorFunc();
  return new Promise((resolve, reject) => {
    const step = (key, args) => {
      let generatorResult;
      try {
        generatorResult = gen[key](args);
      } catch (error) {
        return reject(error);
      }
      const { value, done } = generatorResult;

      if (done) {
        return resolve(value);
      }
      Promise.resolve(value).then(
        function onResolve(val) {
          step('next', val);
        },
        function onReject(err) {
          step('throw', err);
        }
      );
    };
    step('next');
  });
};

const getData = () => new Promise((resolve) => setTimeout(() => resolve('data'), 1000));
const getDataError = () => new Promise((_, reject) => setTimeout(() => reject('error'), 1000));

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

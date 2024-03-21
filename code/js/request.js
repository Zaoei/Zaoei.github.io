// 设计一个函数，可以限制请求的并发，同时请求结束之后，调用callback函数
// sendRequest(requestList:,limits,callback):void

const requestList = [
  () => request('1'),
  () => request('2'),
  () => request('3'),
  () => request('4')
];
const limits = 3;

const callback = (res) => {
  console.log(res);
};

sendRequest(requestList, limits, callback);

// 其中request 可以是：
function request(url, time = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('请求结束：' + url);

      if (Math.random() > 0.5) {
        resolve('成功');
      } else {
        reject('错误;');
      }
    }, time * 1e3);
  });
}

async function sendRequest2(requestList, limits, callback) {
  const length = requestList.length; // 请求列表长度
  const result = new Array(length); // 存储请求结果的数组
  let index = 0; // 当前待处理的请求索引
  while (index < length) {
    // 当待处理请求索引小于请求列表长度时，执行以下操作
    const currentLimits = Math.min(limits, length - index); // 计算当前可处理的请求数量
    const promises = [];
    for (let i = 0; i < currentLimits; i++) {
      // 循环创建Promise对象
      promises.push(requestList[index++]());
    }
    const res = await Promise.allSettled(promises); // 等待所有Promise对象执行完毕并返回结果
    for (let i = 0; i < res.length; i++) {
      // 遍历结果数组
      if (res[i].status === 'fulfilled') {
        // 如果Promise对象成功执行，则将结果存储到结果数组中
        result[index - currentLimits + i] = res[i].value;
      } else {
        // 如果Promise对象执行出错，则将错误信息存储到结果数组中
        result[index - currentLimits + i] = res[i].reason;
      }
    }
  }
  callback(result); // 执行回调函数，将结果数组作为参数传递给回调函数
}

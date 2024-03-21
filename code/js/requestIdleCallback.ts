const genId = (function () {
  let id = 0;
  return function () {
    return ++id;
  };
})();

const idMap: {
  [key: number]: number;
} = {};

const _requestIdleCallback: (
  cb: (idleDeadline: IdleDeadline) => void,
  options?: { timeout: number }
) => number = function (cb, options) {
  const channel = new MessageChannel();
  const port1 = channel.port1;
  const port2 = channel.port2;
  let deadlineTime: number; // 超时时间
  let frameDeadlineTime: number; // 当前帧的截止时间
  let callback: (idleDeadline: IdleDeadline) => void;

  const id = genId();

  port2.onmessage = () => {
    const frameTimeRemaining = () => frameDeadlineTime - performance.now(); // 获取当前帧剩余时间
    const didTimeout = performance.now() >= deadlineTime; // 是否超时

    if (didTimeout || frameTimeRemaining() > 0) {
      const idleDeadline = {
        timeRemaining: frameTimeRemaining,
        didTimeout
      };
      callback && callback(idleDeadline);
    } else {
      idMap[id] = requestAnimationFrame((timeStamp) => {
        frameDeadlineTime = timeStamp + 16.7;
        port1.postMessage(null);
      });
    }
  };

  idMap[id] = window.requestAnimationFrame((timeStamp) => {
    frameDeadlineTime = timeStamp + 16.7; // 当前帧截止时间，按照 60fps 计算
    deadlineTime = options?.timeout ? timeStamp + options.timeout : Infinity; // 超时时间
    callback = cb;
    port1.postMessage(null);
  });

  return id;
};

const _cancelIdleCallback = function (id: number) {
  if (!idMap[id]) return;
  window.cancelAnimationFrame(idMap[id]);
  delete idMap[id];
};

export const requestIdleCallback = window.requestIdleCallback || _requestIdleCallback;
export const cancelIdleCallback = window.cancelIdleCallback || _cancelIdleCallback;

function addMarkersByRid() {
  cancelIdleCallback(this.ridId);
  const { markerList, points, genMarker } = this;
  let index = 0;
  const ridOption = { timeout: 20 };
  const handler = (idleDeadline) => {
    const { timeRemaining } = idleDeadline;
    // 只在空闲时间生成点位
    while (timeRemaining() > 0 && index < points.length) {
      const device = points[index];
      const marker = genMarker(device);
      markerList.push(marker);
      index++;
    }
    if (index < points.length) {
      this.ridId = requestIdleCallback(handler, ridOption);
    } else {
      console.log('done'); // 全部点位生成完毕
    }
  };
  this.ridId = requestIdleCallback(handler, ridOption);
}

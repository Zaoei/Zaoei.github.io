# thread-loader

## 原理

- 启动时，以 pitch 方式拦截 Loader 执行链
- 分析 Webpack 配置对象，获取 thread-loader 后面的 Loader 列表
- 调用 child_process.spawn 创建 worker 进程，并将 Loader 列表、文件路径、上下文等参数传递到子进程
- 子进程中调用 loader-runner，转译文件内容
- 转译完毕后，将结果传回主进程

## worker 的个数

worker 启动的个数根据传入配置项 workers 决定，如果没有传，则根据当前电脑的 cpu 个数决定。存在两种情况：

1. 如果当前机器 cpu 个数为 1，那么 worker 数量则为 1.
1. 如果当前机器 cpu 个数大于 1，那么 worker 数据则为当前 cpu 个数总和 - 1.

`options.workers || calculateNumberOfWorkers()`

```js
function calculateNumberOfWorkers() {
  const cpus = os.cpus() || { length: 1 };
  return Math.max(1, cpus.length - 1);
}
```

thread-loader 的 pitch 方法拦截它后面的所有 loader；

1. 创建 WorkerPool 实例 workerPool，它是个进程池子，用以调度进程；调度工作依赖使用 neo-async/queue.js 创建的 poolQueue 队列；
1. poolQueue.push(data, callback)；
1. poolQueue.push 后会执行 poolQueue 的 worker 函数 —— distributeJob 创建子进程；
1. distributeJob 创建子进程，通过自定义管道通信，利用 readPipe 接收子进程消息，利用 writePipe 向子进程发送消息，通信的数据载体是 JSON 格式字符串；
1. 子进程接收来自父进程发送过来的消息运行 loader，碍于进程间通信限制，子进程自己构造了一个 loaderContext 对象，当用到父进程 loaderContext 中的方法时，构造的 loaderContext 对象会通过进程间通信委托父进程实现；
   当子进程完成 runLoaders 工作后，在回调中利用管道向父进程发送结果；
1. 父进程收到消息后，找到本次运行 loader 时对应的回调函数，在回调函数中把这些结果 —— 各种类型的依赖，添加到构建中；

## 数据结构

- workerPools： 是进程池，用来管理进程。
  - workerPool：进程
    - poolQueue：当前进程中的任务队列。poolParallelJobs 是用来表示当前任务队列中的最大的并发数。
    - workers：进程中的线程池。
      - worker：线程
        - queue： 线程的任务队列。

```js
workerPools : {
  workerPool : {
    poolQueue: [job, job, job, job, job, job] , poolParallelJobs

    workers : [
      worker: {
        queue: [job, job, job, job, job] -- workerParallelJobs
      }

      worker: {
        queue: [job, job] -- workerParallelJobs
      }
    ]
  },
  workerPool : {
    poolQueue: [job, job, job, job, job, job] , poolParallelJobs

    workers : [
      worker: {
        queue: [job, job, job, job, job] -- workerParallelJobs
      },
      worker: {
        queue: [job, job] -- workerParallelJobs
      }

    ]
  }
}
```

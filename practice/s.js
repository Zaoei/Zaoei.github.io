class Scheduler {
  constructor(max){
    this.running = 0
    this.max = max
    this.queue = []
  }

  add(fn){
    new Promise((resolve) => {
      fn.resolve = resolve
      if(this.running < this.max){
        this.run(fn)
      } else {
        this.queue.push(fn)
      }
    })
  }

  async run(fn){
    this.running++
    await fn()
    fn.resolve()
    this.running++
    if(this.queue.length){
      const nextFn = this.queue.pop()
      this.run(nextFn)
    }
  }
}
Array.prototype.newReduce = function (callback, initialValue) {
  const accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const deepCopy = (data) => {
  if (data instanceof Array) {
    return arrClone(data);
  }
  if (data instanceof Object) {
    return objClone(data);
  }
  
  return data;
};

const objClone = (obj) => {
  const result = {};
  for (o in obj) {
    if (obj.hasOwnProperty(o)) {
      result[o] = deepCopy(obj[o]);
    }
  }
  return result
};

const arrClone = (arr) => {
  return arr.map((item) => deepCopy(item));
};

const obj = {
  a: 1,
  b: {
    c: [{ d: 2 }]
  },
  e: Symbol()
};

const newObj = deepCopy(obj)

console.log(newObj)
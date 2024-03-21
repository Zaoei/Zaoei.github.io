Function.prototype.newApply = function (content, args) {
  content.fn = this;
  const res = args ? content.fn(...args) : content.fn();
  delete content.fn;
  return res;
};

Function.prototype.newCall = function () {
  const [content, ...args] = arguments;
  content.fn = this;
  const res = content.fn(...args);
  delete content.fn;
  return res;
};

Function.prototype.newBind = function (content) {
  // 将当前函数的this存放起来
  var _self = this;
  // 绑定bind传入的参数，从第二个开始
  var args = Array.prototype.slice.call(arguments, 1);

  var fBound = function () {
    // 绑定bind返回新的函数，执行所带的参数
    const bindArgs = Array.prototype.slice.apply(arguments);
    // 合并数组
    args.push.apply(args, bindArgs);
    let res
    if(this instanceof fBound){
      res = new _self(...args)
    } else {
      res = _self.apply(content, args)
    }
    return res
  };

  return fBound;
};

var value = 1;
var obj = {
  value: 100
};
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this)
  console.log(this.value); // undefined
  console.log(name); // jack
  console.log(age); // 35
}

var bindPerson = Person.newBind(obj, 'jack');
var bp = new bindPerson(35);

function createNew(){
  const obj = {}

  const constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = constructor.prototype

  const res = constructor.apply(obj, arguments)

  return typeof res === 'object' ? res : obj
}

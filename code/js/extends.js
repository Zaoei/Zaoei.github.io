function newExtends(ChildClass, SuperClass) {
  const p = Object.create(SuperClass.prototype);
  p.constructor = ChildClass;
  ChildClass.prototype = p;
}
function Father(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
Father.prototype.sayName = function () {
  console.log(this.name);
};
function Son(name, age) {
  Father.call(this, name); //继承实例属性，第一次调用Father()
  this.age = age;
}
newExtends(Son, Father); //继承父类方法,此处并不会第二次调用Father()
Son.prototype.sayAge = function () {
  console.log(this.age);
};
var instance1 = new Son('louis', 5);
instance1.colors.push('black');
console.log(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //louis
instance1.sayAge(); //5

var instance1 = new Son('zhai', 10);
console.log(instance1.colors); //"red,blue,green"
instance1.sayName(); //zhai
instance1.sayAge(); //10

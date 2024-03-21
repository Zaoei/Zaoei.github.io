function add(str1, str2) {
  //判断最大长度
  const len1 = str1.length;
  const len2 = str2.length;
  const len = Math.max(len1, len2);
  // 定义字符串
  let arr = '';
  // 进位数
  let w = 0;
  // 从最小位开始进行位运算
  for (let i = 0; i < len; i++) {
    // 根据位次取出相应数字
    let num1 = str1.charAt(len1 - i - 1);
    let num2 = str2.charAt(len2 - i - 1);
    // 两数相加
    let sum = Number(num1) + Number(num2);
    // 两数之和加上进位数
    sum = sum + w;
    // 重置进位数
    w = 0;
    // 对两数之和进行判断
    if (sum >= 10) {
      w++;
      sum = sum - 10;
    }
    arr = sum + arr;
    if (i === len - 1 && w === 1) {
      arr = w + arr;
    }
  }
  return arr;
}

console.log(add(0.1, 0.2)); // => 0.3
console.log(add(10, 11)); // => 21
console.log(add(0.001, 0.003)); // => 0.004
console.log(add(0.001, 0.003, 0.005)); // => 0.009
console.log(add(0.001)); // => 0.001

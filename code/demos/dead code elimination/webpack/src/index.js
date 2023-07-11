// 1*********************************************
import App from './app'

export function main() {
    var test = '我是index';
    return test;
}

console.log(main)

// 2*********************************************

// import App from './app'

// export function main() {
//     var test = '我是index';
//     console.log(App(1))
//     return test;
// }

// console.log(main)


// 3*********************************************

// import App from './app'

// export function main() {
//     var test = '我是index';
//     App.getName(1)
//     return test;
// }

// console.log(main)


// 4*********************************************

// import App from './app'

// export function main() {
//     var test = '我是index';
//     let methodName = 'getName'
//     App[methodName](1)
//     return test;
// }

// console.log(main)

// 6*********************************************

import * as App from './app'

export function main() {
    var test = '我是index';
    App.getName(1)
    return test;
}

console.log(main)

// 7*********************************************

import * as App from './app'

export function main() {
    var test = '我是index';
    let methodName = 'square'
    App[methodName](1)
    return test;
}

console.log(main)
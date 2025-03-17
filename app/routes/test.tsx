// 实现一个 function error 的包装函数
// 设计一个 errorWrapper 函数，要求针对函数 function A 进行包装，当函数 A 执行报错的时候，可以用公共的  errorHandle 函数处理错误，并且把这个错误继续向上抛出，否则正常返回A 的执行结果。

// function errorHandle(e: Error) {
// // .... 不需要填充代码
// }

// function errorWrapper(func: Function) {
//  // 你的代码
// }

// function A(param: string){
//     console.log(`hello ${param}`)
// }
// const wrapperA = errorWrapper(A);
// wrapperA('world'); // hello world

function errorHandle(e: Error) {
// .... 不需要填充代码
}

function errorWrapper(func: Function) {
 // 你的代码
    try {
        return func;
    } catch (e) {
        return errorHandle(e as Error);
    }
}

function A(param: string){
    console.log(`hello ${param}`);
}
const wrapperA = errorWrapper(A);
wrapperA('world'); // hello world

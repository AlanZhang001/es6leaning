/**
 * overview ：模块的继承
 */

// 除数calculate所有的方法
export * from '../demo1_basic/calculate.js';

// 除数其他的方法，以此来实现模块继承
export function division(a,b){
    if(b === 0 ) {
        return NaN;
    }
    return a/b;
}
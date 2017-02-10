/**
 * 模块的基本用法
 */

function sum(a,b) {
    return a+b;
}

function sub(a,b) {
    return a - b;
}

// 整体输出
export {
    sum,
    sub
};

// 默认输出
export default sum;
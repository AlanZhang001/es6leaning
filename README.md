# es6leaning
学习es6的实例

## 学习资料
- [阮一峰 ECMAScript 6入门](http://es6.ruanyifeng.com/)
- [Promise迷你书](http://liubin.org/promises-book/)

当前进度：[module](http://es6.ruanyifeng.com/#docs/module)

## es6 Node相关
1. 检测Node版本对ES6的支持：`node --v8-options | grep harmony`
2. 使用[nvm-windows](https://github.com/coreybutler/nvm-windows)可以自由切换不同版本的node

## 学习笔记
**记录不容易理解及需要注意的地方，不设计具体的api**

1. **[let、const关键字](let-const%E5%85%B3%E9%94%AE%E5%AD%97.md)**
2. **[变量的解构赋值](%E5%8F%98%E9%87%8F%E7%9A%84%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC.md)**
3. **[数组的扩展](%E6%95%B0%E7%BB%84%E7%9A%84%E6%89%A9%E5%B1%95.md)**
4. **[函数的扩展](%E5%87%BD%E6%95%B0%E7%9A%84%E6%89%A9%E5%B1%95.md)**
5. **[对象的扩展](%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95.md)**
6. **[Iterator和forof循环](Iterator%E5%92%8Cforof%E5%BE%AA%E7%8E%AF.md)**
7. **[Set和Map数据结构](Set%E5%92%8CMap%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md)**
8. **[Promise 及异步编程的学习](Promise%20%E5%8F%8A%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%84%E5%AD%A6%E4%B9%A0.md)**
9. **[Generator 函数](Generator%E5%87%BD%E6%95%B0.md)**
10. **[Symbol](Symbol.md)**
11. **[Class](Class.md)**
12. **[Proxy](Proxy.md)**
13. **[module](module.md)**

## TODO：
前期未理解，需要后期花时间去学习

1. 函数的扩展
    - 尾递归优化
    - 递归函数的改写
2. Set和Map数据结构
    - Weakset的用处是什么
    - WeakMap的用处是什么

## 说明
- 需要做babel处理的代码在`/demosource/babelCode`目录中
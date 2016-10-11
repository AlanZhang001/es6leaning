# Set和Map数据结构

## 1. Set
- set内部判断2个值是否相等是使用===来判断的，但是NaN比较特殊，在set内部，认为NaN是等于自身的。

    ```
    var set = new Set([NaN,NaN]);
    [...set]
    //output:[NaN]
    ```
- 简易数组去重
    ```
    [...new Set([1,2,3,3,3,3,4])];
    ```
- 遍历方法
    * keys()：返回键名的遍历器
    * values()：返回键值的遍历器，与keys值相同
    * entries()：返回键值对的遍历器，key和value值均相同
    * forEach()：使用回调函数遍历每个成员
- [详细api](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## 2. weakset
# Set和Map数据结构

## 1. `Set`
- set内部判断2个值是否相等是使用===来判断的，但是`NaN`比较特殊，在set内部，认为`NaN`是等于自身的。

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
    * `keys()`：返回键名的遍历器
    * `values()`：返回键值的遍历器，与keys值相同
    * `entries()`：返回键值对的遍历器，key和value值均相同
    * `forEach()`：使用回调函数遍历每个成员
- [详细api](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## 2. `weakset`
- `WeakSet`的成员只能是对象，而不能是其他类型的值。
- `WeakSet`中的对象都是弱引用，垃圾回收机制不考虑`WeakSet`对该对象的引用，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于`WeakSet`之中。
- `WeakSet`可以接受一个数组或类似数组的对象作为参数
- 没有length方法，且不能遍历，因为你不知道遍历的时候某个对象还是否存在。
- 用处待补充，目前还没搞清楚他的作用。

## 3. `Map`
- map和对象类似，也是键值对的集合，但是与对象不同的是，map的key不限于字符创，可以是任何类型（包括对象）的值。包括`null`，`undefined`，`NaN`。
- map的构造函数可以接受如：`[ [key,value],[key,value] ]`的二维数组作为参数。
构造时，其实际执行的是如下代码：
    ```
    var items = [
      ['name', '张三'],
      ['title', 'Author']
    ];
    var map = new Map();
    items.forEach(([key, value]) => map.set(key, value));
    ```
- Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
- 如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。
- 虽然NaN不严格相等于自身，但Map将其视为同一个键。
- 与对象不同，map中的元素有顺序，而普通对象的元素不一定有顺序。
    ```
    // 遍历map
    map = new Map([
      ["10","no"],
      ["2","end"], 
      ["1","yes"]
    ]);
     
    for (let key of map.keys()) {
      console.log(key);
    }
    // 10 2 1

    // 遍历对象
    obj = {"10":"no","2":"end","1":"yes"}
    for(key in obj){
        console.log(key)
    }
    // 1 2 10
    ```
- 注意map并没有map和filter方法。但存在forEach方法

## 4. WeakMap
1. 只接受对象作为键名（null除外），不接受其他类型的值作为键名，而且**键名**所指向的对象，**不计入垃圾回收机制**。
2. weakMap没有遍历操作（即没有key()、values()和entries()方法）。也无法被清空，不支持clear方法。

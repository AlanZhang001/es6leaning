# Symbol笔记

## 笔记内容

1. ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、Boolean、String、Number、Object。

2. Symbol值通过Symbol函数生成，Symbol函数前不能使用new命令，否则会报错；由于Symbol值不是对象，所以不能添加属性。基本上，它是一种**类似于字符串**的数据类型。

3. Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述
```
let s1 = Symbol('alan');

typeof s1
// "symbol"

s1 
// Symbol(alan)

typeof s1
//Symbol(alan)

```

4. 相同参数的Symbol函数的返回值是不相等的。
```
// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false
```
# Symbol笔记

## 笔记内容

###### 1. ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、Boolean、String、Number、Object。

###### 2. Symbol值通过Symbol函数生成，Symbol函数前不能使用new命令，否则会报错；由于Symbol值不是对象，所以不能添加属性。基本上，它是一种**类似于字符串**的数据类型。

###### 3. Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述
```
let s1 = Symbol('alan');

typeof s1
// "symbol"

s1 
// Symbol(alan)

typeof s1
//Symbol(alan)

```

###### 4. 相同参数的Symbol函数的返回值是不相等的。
```
// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false
```

###### 5. 将symbol值作为对象属性名

注意：
- 作为对象属性名时，不能通过点操作符来处理
- 作为对象字面量时，需要使用[]包裹
- Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
- Object.getOwnPropertySymbols可以获得对象的Symbol属性

```
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

##### 6. Symbol.for() 与 Symbol.keyFor()
- Symbol.for() :不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
- Symbol.keyFor(): 返回一个已登记的 Symbol 类型值的key。
```
Symbol.for("aaa") === Symbol.for("aaa")
// true

var a = Symbol.for("aaa") ;
Symbol.keyFor(a);
// aaa
```
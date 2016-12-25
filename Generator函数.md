# Generator 函数

## 笔记

##### 定义

- 从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。
- 执行Generator函数会返回一个遍历器对象，返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。

##### 特性

- function关键字与函数名之间有一个星号；
- 函数体内部使用yield语句，定义不同的内部状态；
- 调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象；
- 调用遍历器对象的next方法，使得指针移向下一个状态；
- 每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。
- 遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值
- 如果该函数没有return语句，则返回的对象的value属性值为undefined。

```
function * helloYou(){
    yield 'hello';
    yield 'world';
    return "end";
}

var hello = helloYou();

hello.next();//{value: "hello", done: false}

hello.next();//{value: "world", done: false}

hello.next();//{value: "end", done: false}
```

##### function 与 \* 的位置关系
ES6没有规定，function关键字与函数名之间的星号，写在哪个位置，因此只要心号出现在function与函数名之间即可，但是一般推荐这种方式:function 与\*间无空格，\*与函数名保留至少一个空格。
```
function* funName(){}
```

##### return 与yield的区别
相同：

- 都能返回紧跟在语句后面的那个表达式的值

不同：

- 每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行；
- yield不能出现在普通函数中。

##### next方法的参数

- next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。
```
function* sayHello(){
    var a = yield 1;
    alert(a);
    var b = yield 2;
    alert(b);
    return b;
}
var hello = sayHello();

hello.next('1.5');  // {value: 1, done: false}
hello.next('2.5');  // alert(2.5); {value: 2, done: false}
hello.next(3);      // {value: "3", done: true}
```

- 通过next方法的参数，就有办法在Generator函数开始运行之后，继续向函数体内部注入值。也就是说，可以在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为

##### for of 循环
- 除for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们都可以将Generator函数返回的Iterator对象，作为参数。
```
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2
```

- 使用for of循环遍历的值中，不包括return的值

##### Generator.prototype.return()
 Generator.prototype.return() 可以返回给定的值，并且终结遍历Generator函数。
```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
```

##### yield*语句
- 如果yield命令后面跟的是一个遍历器对象，需要在yield命令后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*语句.
- yield*语句用来在一个Generator函数里面执行另一个Generator函数。
```
function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}

// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}

// 等同于
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}
```

- 何数据结构只要有Iterator接口，就可以被yield*遍历 。具有iterator接口的结构见 <Iterator%E5%92%8Cforof%E5%BE%AA%E7%8E%AF.md>
```
function* gen(){
  yield* ["a", "b", "c"];
}

gen().next() // { value:"a", done:false }
```

##### Generator函数的this
- Generator函数总是返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，也继承了Generator函数的prototype对象上的方法
```
function* g() {}

g.prototype.hello = function () {
  return 'hi!';
};
let obj = g();
obj instanceof g // true
obj.hello() // 'hi!'
```
- Generator函数不能与new 一同使用



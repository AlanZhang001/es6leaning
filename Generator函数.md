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

```
function * helloYou(){
    yield 'hello';
    yield 'world';
    return "end";
}

var hello = helloYou();

hello.next();//{value: "hello", done: false}

hello.next();//{value: "hello", done: false}

hello.next();//{value: "hello", done: false}
```

##### function 与 \* 的位置关系
ES6没有规定，function关键字与函数名之间的星号，写在哪个位置，因此只要心号出现在function与函数名之间即可，但是一般推荐这种方式:function 与\*间无空格，\*与函数名保留至少一个空格。
```
function* funName(){}
```
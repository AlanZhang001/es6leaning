## async 笔记

#### 1.基本用法

- 当调用一个 async 函数时，会返回一个 Promise 对象。
- 当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；
- 当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。
- await关键字只能用在aync定义的函数内

```
// async方法返回的是一个Promise
async function Hello(){
    // 返回值做为该Promise resolve的值
    // return 'hello async';
    // 如果async方法有抛出异常，则异常作为reject的值
    throw Error('hello catch');
}

Hello().then(v => {
    console.log(v);
}).catch(e=>{
    console.log(e);
});
```

- async 函数中可能会有 await 表达式，这会使 async 函数暂停执行，等待表达式中的 Promise 解析完成后继续执行 async 函数并返回解决结果
```
 function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

async function add1(x) {
    var a = await resolveAfter2Seconds(x);
    return a;
}

add1(10).then(v => {
    console.log(v);//20
});
```
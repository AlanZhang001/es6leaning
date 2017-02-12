# module 笔记

截止至2017年2月，尚无浏览器支持import，export语法，需要通过babel-loader来转换处理。

##### 1. 严格模式
- ES6 的模块自动采用严格模式，不管是否有加上`use strict`;
-  严格模式的限制：
    - 变量必须声明后再使用
    - 函数的参数不能有同名属性，否则报错
    - 不能使用with语句
    - 不能对只读属性赋值，否则报错
    - 不能使用前缀0表示八进制数，否则报错
    - 不能删除不可删除的属性，否则报错
    - 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
    - eval不会在它的外层作用域引入变量
    - eval和arguments不能被重新赋值
    - arguments不会自动反映函数参数的变化
    - 不能使用arguments.callee
    - 不能使用arguments.caller
    - 禁止this指向全局对象
    - 不能使用fn.caller和fn.arguments获取函数调用的堆栈
    - 增加了保留字（比如protected、static和interface）

#####  2. export

错误的实例

```
// 报错
export 1;

// 报错
var m = 1;
export m;

// 报错
function f() {}
export f;
```
正确的方式：

```
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 正确
export function f() {};

// 正确
function f() {}
export {f};
```

##### 3. import 
- import 具有提升效果，会提升到整个模块的头部，首先执行；import命令是编译阶段执行的，在代码运行之前
```
// 不报错
foo();
import { foo } from 'my_module';
```

- import是静态执行，所以不能使用表达式和变量；在静态分析阶段，只有在运行时才能得到结果的语法结构是无法运算的。
```
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```
- 整体加载模块
用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
```
import * as circle from './circle';
circle.xx();
```

##### 4. export default
与直接export 不同，`export default`的方式可以采用如下方式：
```
// 正确
export default 42;

// 正确
function foo() {
  console.log('foo');
}
export default foo;

// 报错
export 42;

// 错误
export default var a = 1;
```

##### 5. ES6 模块加载的机制，与 CommonJS 模块完全不同 [见demosource\babelCode\web\scripts\source\modulesDemo\demo3_commonjsVSmodule]
- ommonJS模块输出的对象上的基本类型属性，是对应值的拷贝，而 ES6 模块输出的是值的引用
commonjs方式

```
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```

module方式:
```
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```

- ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值
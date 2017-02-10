# module 笔记

0. 截止至2017年2月，尚无浏览器支持import，export语法，需要通过babel-loader来转换处理。

1. 严格模式
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

2. export

	- 错误的实例
	
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

3. import 
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

4. export default
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

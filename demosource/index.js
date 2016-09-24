//  let  块级作用域有效
{
    let a = 10;
    var b = 20;
}
try {
    console.log(a);
} catch (e) {
    console.log(e);
}
console.log(b);

// 花括号中的块，每进入一次花括号就生成了一个块级域
// 所以每次引用的i都不是一样，根据闭包的知识就能解释.输出的是6。
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}

a[6]();// 6

// ES6的浏览器环境
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function
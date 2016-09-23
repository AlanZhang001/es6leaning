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

//
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}

a[6]();
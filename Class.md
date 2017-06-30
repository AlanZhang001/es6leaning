# Class笔记
 
##### 1. class中定义的所有方法都定义在其prototype的属性上面,类的实例上面调用方法，其实就是调用原型上的方法

```
Class Point {
  constructor(){}
  toValue(){}
}

// 等同于

Point.prototype = {
  toValue(){}
};
```

##### 2. 类的内部所有定义的方法，都是不可枚举的,如果要枚举，必须通过其prototype属性来实现

```
for(var key in Point.prototype){console.log(key)}
output: undefined
```

可通过`Object.getOwnPropertyNames(Point.prototype)` 来获取其属性值

```
Object.getOwnPropertyNames(Point.prototype)
// output: ["constructor", "toValue"]
```

##### 3. Class不存在变量提升，必须先申明class，才能使用new进行产生实例。

##### 4. 立即执行的Class（不应该推荐这种写法）

```
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"
```

##### 5. class内部不能定义属性

```
class Person{
    let a = 1;//报错
}
```
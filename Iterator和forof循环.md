# Iterator和for of循环笔记

1. 一下几种结构可以进行for of操作
    - jQuery3.0 集合是一个可迭代对象,支持for of 操作
    - Set,Map实例
    - 类数组，nodelist，arguments等

2. Iterator的遍历过程是这样的。

  （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

  （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

  （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

  （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

3. Iterator的作用有三个：
	- 一是为各种数据结构，提供一个统一的、简便的访问接口；
	- 二是使得数据结构的成员能够按某种次序排列；
	- 三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of使用

4. 一个对象如果要有可被for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）;当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。

	```
	class RangeIterator {
	  constructor(start, stop) {
	    this.value = start;
	    this.stop = stop;
	  }
	
	  [Symbol.iterator]() { return this; }
	
	  next() {
	    var value = this.value;
	    if (value < this.stop) {
	      this.value++;
	      return {done: false, value: value};
	    } else {
	      return {done: true, value: undefined};
	    }
	  }
	}
	
	function range(start, stop) {
	  return new RangeIterator(start, stop);
	}
	
	for (var value of range(0, 3)) {
	  console.log(value);
	}
	```

5.  由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。

6.  使用generator实现Symbol.iterator

	```
	var demo = {
	    [Symbol.iterator] : function *(){
	        yield 1;
	        yield 2;
	        yield 3;
	    }
	};
	for(var i of demo) {
	    console.log(i);
	}
	```

7. ES6的数组、Set、Map都部署了以下三个方法，调用后都返回遍历器对象
- entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值；对于Set，键名与键值相同。Map结构的iterator接口，默认就是调用entries方法。
- keys() 返回一个遍历器对象，用来遍历所有的键名。
- values() 返回一个遍历器对象，用来遍历所有的键值。
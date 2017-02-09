// 加载单个方法
import {sum} from './calculate.js';
import {sub} from './calculate.js';

// 加载整个模块
import * as cal from './calculate.js';
alert('1+2='+sum(1,2));
console.log(cal);
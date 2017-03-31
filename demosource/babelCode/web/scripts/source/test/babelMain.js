'use strict';

require('core-js/modules/es6.object.to-string');
require('core-js/modules/es6.function.name');
require('core-js/modules/es6.function.has-instance');
require('core-js/modules/es6.string.iterator');
require('core-js/modules/es6.string.code-point-at');
require('core-js/modules/es6.string.ends-with');
require('core-js/modules/es6.string.includes');
require('core-js/modules/es6.string.repeat');
require('core-js/modules/es6.string.starts-with');
require('core-js/modules/es6.date.to-string');
require('core-js/modules/es6.date.to-primitive');
require('core-js/modules/es6.array.copy-within');
require('core-js/modules/es6.array.fill');
require('core-js/modules/es6.array.find');
require('core-js/modules/es6.array.find-index');
require('core-js/modules/es6.array.species');
require('core-js/modules/es6.array.iterator');
require('core-js/modules/es6.regexp.constructor');       //regexp, ES6 fix: can alter flags (IE9+)
require('core-js/modules/es6.regexp.flags');
require('core-js/modules/web.immediate');
require('core-js/modules/web.dom.iterable');

// 避免重复打包
if (global._babelPolyfill) {
  throw new Error('only one instance of babel-polyfill is allowed');
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = 'defineProperty';
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

// 防止原生方法被重写
'pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,'+
'find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,'+
'reduce,reduceRight,copyWithin,fill'.split(',').forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
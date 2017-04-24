/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 模块的基本用法
	 */
	
	function sum(a, b) {
	    return a + b;
	}
	
	function sub(a, b) {
	    return a - b;
	}
	
	var test = Symbol('1234534');
	alert(test);
	
	// 整体输出
	exports.sum = sum;
	exports.sub = sub;
	
	// 默认输出
	
	exports.default = sum;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _calculatePlus = __webpack_require__(10);
	
	alert('1+2=' + (0, _calculatePlus.sum)(1, 2));
	alert('1/2=' + (0, _calculatePlus.division)(1, 2));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _calculate = __webpack_require__(8);
	
	Object.keys(_calculate).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _calculate[key];
	        }
	    });
	});
	exports.division = division;
	
	
	// 除数其他的方法，以此来实现模块继承
	function division(a, b) {
	    if (b === 0) {
	        return NaN;
	    }
	    return a / b;
	} /**
	   * overview ：模块的继承
	   */
	
	// 除数calculate所有的方法

/***/ }
/******/ ]);
//# sourceMappingURL=indexMain.js.map
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

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Stars = __webpack_require__(4);
	
	var _Stars2 = _interopRequireDefault(_Stars);
	
	var _Moon = __webpack_require__(5);
	
	var _Moon2 = _interopRequireDefault(_Moon);
	
	var _Meteor = __webpack_require__(6);
	
	var _Meteor2 = _interopRequireDefault(_Meteor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FESTIVAL = {
	    size: {
	        width: window.innerWidth,
	        height: window.innerHeight
	    },
	
	    conut: {
	        stars: 250
	    },
	
	    maxFrameInterval: 10,
	
	    initial: function initial(canvas) {
	        canvas.width = this.size.width;
	        canvas.height = this.size.height;
	        this.ctx = canvas.getContext('2d');
	
	        this.genarateItems();
	        this.flash();
	    },
	
	    genarateItems: function genarateItems() {
	        this.stars = new _Stars2.default(this.ctx, this.size.width, this.size.height, this.conut.stars);
	        this.moon = new _Moon2.default(this.ctx, this.size.width, this.size.height, this.size.width);
	        this.meteors = [];
	        this.meteorGenerator();
	    },
	
	    //流星生成函数
	    meteorGenerator: function meteorGenerator() {
	        var _this = this;
	
	        //x位置偏移，以免经过月亮
	        var x = Math.random() * this.size.width + 800;
	        this.meteors.push(new _Meteor2.default(this.ctx, x, this.size.height));
	
	        //每隔随机时间，生成新流星
	        setTimeout(function () {
	            _this.meteorGenerator();
	        }, Math.random() * 2000);
	    },
	
	    flash: function flash() {
	        this.frameInterval = this.frameInterval || 0;
	        this.frameInterval++;
	        this.frameInterval % this.maxFrameInterval === 0 && this.stars.blink();
	
	        this.moon.draw();
	        this.stars.draw();
	
	        this.meteors.forEach(function (meteor, index, arr) {
	            //如果流星离开视野之内，销毁流星实例，回收内存
	            if (meteor.flow()) {
	                meteor.draw();
	            } else {
	                arr.splice(index, 1);
	            }
	        });
	
	        requestAnimationFrame(this.flash.bind(this));
	    }
	
	};
	
	FESTIVAL.initial(document.getElementById('canvas'));

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 星星为一堆集合，而不是具体的一个
	 */
	var Star = function () {
	    /**
	     * [contructor 构造多个星星]
	     * @param  {[type]} ctx    [画布]
	     * @param  {[type]} height [星星可以存在的区域的高度]
	     * @param  {[type]} width  [星星可以存在的区域宽度]
	     * @param  {[type]} amount [需要产生的星星的]
	     * @return {[type]}        [description]
	     */
	    function Star(ctx, height, width, amount) {
	        _classCallCheck(this, Star);
	
	        this.ctx = ctx;
	        this.height = height;
	        this.width = height;
	        this.stars = this.generateStars(amount);
	    }
	
	    /**
	     * [generateStars 生产一定数量的星星，并保存在stars中]
	     * @param  {Number} amount [星星的数量]
	     * @return {[Object]}      [包含星星的属性]
	     */
	
	
	    _createClass(Star, [{
	        key: 'generateStars',
	        value: function generateStars(amount) {
	            var stars = [];
	            while (amount--) {
	                stars.push({
	                    x: this.width * Math.random(),
	                    y: this.height * Math.random(),
	                    r: Math.random() + 0.55
	                });
	            }
	            return stars;
	        }
	
	        /**
	         * [draw 画星星]
	         * @return {[type]} [description]
	         */
	
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            ctx.save();
	            ctx.fillStyle = '#fff';
	            this.stars.forEach(function (item) {
	                ctx.beginPath();
	                ctx.arc(item.x, item.y, item.r, 0, 2 * Math.PI);
	                ctx.fill();
	            });
	            ctx.restore();
	        }
	
	        /**
	         * [blink 动态改变星星的半径，制造闪烁效果]
	         * @return {[type]} [description]
	         */
	
	    }, {
	        key: 'blink',
	        value: function blink() {
	            this.stars.forEach(function (item) {
	                var offset = Math.random() > 0.5 ? 0.4 : -0.4;
	                item.r = Math.abs(item.r + offset);
	                item.r > 1.5 && (item.r -= offset);
	            });
	        }
	    }]);
	
	    return Star;
	}();
	
	exports.default = Star;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 画月亮
	 */
	var Moon = function () {
	    // 初始化Moon所在画布
	    function Moon(ctx, width, height, canvasWidth) {
	        _classCallCheck(this, Moon);
	
	        this.ctx = ctx;
	        this.width = width;
	        this.height = height;
	        this.canvasWidth = canvasWidth;
	    }
	
	    _createClass(Moon, [{
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            //  渐变开始的圆的位置
	            var startCircule = {
	                x: 200,
	                y: 200,
	                r: 80
	            };
	            // 渐变结束的圆的位置
	            var stopCircule = {
	                x: 200,
	                y: 200,
	                r: 800
	            };
	            var gradient = ctx.createRadialGradient(startCircule.x, startCircule.y, startCircule.r, stopCircule.x, stopCircule.y, stopCircule.r);
	
	            //径向渐变,为开始圆和结束圆之间添加颜色渐变
	            gradient.addColorStop(0, 'rgb(255,255,255)');
	            gradient.addColorStop(0.01, 'rgb(70,70,80)');
	            gradient.addColorStop(0.2, 'rgb(40,40,50)');
	            gradient.addColorStop(0.4, 'rgb(20,20,30)');
	            gradient.addColorStop(1, 'rgb(0,0,10)');
	
	            ctx.save();
	            ctx.fillStyle = gradient;
	            ctx.fillRect(0, 0, this.width, this.height);
	            ctx.restore();
	        }
	    }, {
	        key: 'move',
	        value: function move() {}
	    }]);
	
	    return Moon;
	}();
	
	exports.default = Moon;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 流星
	 */
	var Metor = function () {
	    /**
	     * [constructor description]
	     * @param  {[type]} ctx [description]
	     * @param  {[type]} x   [description]
	     * @param  {[type]} h   [description]
	     * @return {[type]}     [description]
	     */
	    function Metor(ctx, x, h) {
	        _classCallCheck(this, Metor);
	
	        this.ctx = ctx;
	        this.x = x;
	        this.y = 0;
	        this.h = h;
	        this.vx = -(4 + Math.random() * 4);
	        this.vy = -this.vx;
	        this.len = Math.random() * 300 + 500;
	    }
	
	    _createClass(Metor, [{
	        key: 'flow',
	        value: function flow() {
	            //判定流星出界
	            if (this.x < -this.len || this.y > this.h + this.len) {
	                return false;
	            }
	            this.x += this.vx;
	            this.y += this.vy;
	            return true;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            //径向渐变，从流星头尾圆心，半径越大，透明度越高
	            var gra = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.len);
	
	            var PI = Math.PI;
	            gra.addColorStop(0, 'rgba(255,255,255,1)');
	            gra.addColorStop(1, 'rgba(0,0,0,0)');
	            ctx.save();
	            ctx.fillStyle = gra;
	            ctx.beginPath();
	            // 画流星头,半圆
	            ctx.arc(this.x, this.y, 1, PI / 4, PI * 5 / 4);
	
	            //绘制流星尾，三角形
	            ctx.lineTo(this.x + this.len, this.y - this.len);
	            ctx.closePath();
	            ctx.fill();
	            ctx.restore();
	        }
	    }]);
	
	    return Metor;
	}();
	
	exports.default = Metor;

/***/ }
/******/ ]);
//# sourceMappingURL=indexMain.js.map
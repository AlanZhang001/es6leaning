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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _browser = __webpack_require__(11);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	alert('Is this a window browser？' + _browser2.default.isWindows());

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var browser = {
	    isIE: function isIE() {
	        return (/msie/.test(navigator.userAgent.toLowerCase()) || this.isAfterIE11()
	        );
	    },
	
	    isAfterIE11: function isAfterIE11() {
	        return Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;
	    },
	
	    getIEVersion: function getIEVersion() {
	        if (this.isIE()) {
	            var rv = null;
	            if (navigator.appName == 'Microsoft Internet Explorer') {
	                var ua = navigator.userAgent;
	                var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
	                if (re.exec(ua) != null) {
	                    rv = parseFloat(RegExp.$1);
	                }
	            } else if (navigator.appName == 'Netscape') {
	                var ua = navigator.userAgent;
	                var re = new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})');
	                if (re.exec(ua) != null) {
	                    rv = parseFloat(RegExp.$1);
	                }
	            }
	            return rv;
	        }
	        return null;
	    },
	
	    isAndroid: function isAndroid() {
	        return navigator.userAgent.match(/Android/i) ? true : false;
	    },
	
	    isBlackBerry: function isBlackBerry() {
	        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	    },
	
	    isIOS: function isIOS() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	    },
	
	    isWindows: function isWindows() {
	        return navigator.platform.match(/win/i) && !this.isAndroid() && !this.isIOS();
	    },
	
	    isMac: function isMac() {
	        return navigator.platform.match(/mac/i) && !this.isAndroid() && !this.isIOS();
	    },
	
	    /**
	     * 检测是否微信webview
	     *
	     * @returns {boolean}
	     */
	    isWx: function isWx() {
	        return navigator.userAgent.match(/micromessenger/i) ? true : false;
	    },
	
	    /**
	     * 检测是否手Q webview
	     * @returns {boolean} 是否是手Q webview
	     */
	    isMobileQQ: function isMobileQQ() {
	        var ua = navigator.userAgent;
	        return (/(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(ua) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(ua)
	        );
	    },
	
	    isSafari: function isSafari() {
	        return navigator.userAgent.match(/safari/i) ? true : false;
	    },
	
	    /**
	     * [isMobileUA 检测是否是移动客户端UA]
	     * @return {Boolean} [是否为移动客户端]
	     */
	    isMobileUA: function isMobileUA() {
	        return navigator.userAgent.match(/(blackberry|configuration\/cldc|hp |hp-|htc |htc_|htc-|iemobile|kindle|midp|mmp|motorola|mobile|nokia|opera mini|opera |Googlebot-Mobile|YahooSeeker\/M1A1-R2D2|android|iphone|ipod|mobi|palm|palmos|pocket|portalmmm|ppc;|smartphone|sonyericsson|sqh|spv|symbian|treo|up.browser|up.link|vodafone|windows ce|xda |xda_)/i) ? true : false;
	    }
	};
	
	exports.default = browser;

/***/ }

/******/ });
//# sourceMappingURL=demoMain.js.map
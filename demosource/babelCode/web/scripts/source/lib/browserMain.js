var browser = {
    isIE : function() {
        return /msie/.test(navigator.userAgent.toLowerCase()) || this.isAfterIE11();
    },

    isAfterIE11 : function() {
        return Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;
    },

    getIEVersion : function() {
        if (this.isIE()) {
            var rv = null;
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re  = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
                if (re.exec(ua) != null) {
                    rv = parseFloat( RegExp.$1 );
                }
            } else if (navigator.appName == 'Netscape') {
                var ua = navigator.userAgent;
                var re  = new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})');
                if (re.exec(ua) != null) {
                    rv = parseFloat( RegExp.$1 );
                }
            }
            return rv;
        }
        return null;
    },

    isAndroid : function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },

    isBlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },

    isIOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },

    isWindows: function() {
        return navigator.platform.match(/win/i) && !this.isAndroid() && !this.isIOS();
    },

    isMac : function() {
        return navigator.platform.match(/mac/i) && !this.isAndroid() && !this.isIOS();
    },

    /**
     * 检测是否微信webview
     *
     * @returns {boolean}
     */
    isWx : function() {
        return navigator.userAgent.match(/micromessenger/i) ? true : false;
    },

    /**
     * 检测是否手Q webview
     * @returns {boolean} 是否是手Q webview
     */
    isMobileQQ : function(){
        var ua = navigator.userAgent;
        return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(ua) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(ua);
    },

    isSafari : function() {
        return navigator.userAgent.match(/safari/i) ? true : false;
    },

    /**
     * [isMobileUA 检测是否是移动客户端UA]
     * @return {Boolean} [是否为移动客户端]
     */
    isMobileUA : function() {
        return navigator.userAgent.match(/(blackberry|configuration\/cldc|hp |hp-|htc |htc_|htc-|iemobile|kindle|midp|mmp|motorola|mobile|nokia|opera mini|opera |Googlebot-Mobile|YahooSeeker\/M1A1-R2D2|android|iphone|ipod|mobi|palm|palmos|pocket|portalmmm|ppc;|smartphone|sonyericsson|sqh|spv|symbian|treo|up.browser|up.link|vodafone|windows ce|xda |xda_)/i) ? true : false;
    }
};

export default browser;
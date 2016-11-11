if (typeof Promise.prototype.done === "undefined") {
    Promise.prototype.done = function(onFulfilled, onRejected) {
        this.then(onFulfilled, onRejected).catch(function(error) {

            // 此处应抛出异常到外部，显示提供给外部，否则此处捕获之后外界无法感知，增加定位问题的成本
            // 除非明确知道要做什么，否则扩展的功能不应该处理异常的情况
            setTimeout(function() {
                throw error;
            }, 0);
        });
    };
}

// demo
var promise = new Promise(function(resolve, reject) {
    if (+new Date() % 2) {
        resolve("success");
    } else {
        throw Error("this is a error");
    }
});

promise.done(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
});
var requestMap = {};

function createXHRPromise(url) {

    "use strict";

    var req = new XMLHttpRequest();
    var promise = new Promise(function(resolve, reject) {
        req.open('GET', URL, true);
        req.onreadystatechange = function() {
            if (req.readyState === XMLHttpRequest.DONE) {
                delete requestMap[URL];
            }
        };
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(new Error(req.statusText));
        };
        req.onabort = function() {
            reject(new Error('abort this req'));
        };
        req.send();
    });

    requestMap[url] = {
        promise: promise,
        request: req
    };

    return promise;
}

function abortPromise(promise) {

    "use strict";

    if (typeof promise === "undefined") {
        return;
    }
    var request;
    Object.keys(requestMap).some(function (URL) {
        if (requestMap[URL].promise === promise) {
            request = requestMap[URL].request;
            return true;
        }
    });

    if (request !== null && request.readyState !== XMLHttpRequest.UNSENT) {
        request.abort();
    }
}
module.exports.createXHRPromise = createXHRPromise;
module.exports.abortPromise = abortPromise;

/*instance*/
var xhrPromise = createXHRPromise('http://httpbin.org/get');
xhrPromise.catch(function (error) {
    // 调用 abort 抛出的错误
});
abortPromise(xhrPromise);
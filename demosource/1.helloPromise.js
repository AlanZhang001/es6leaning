//Hello Promise
function asyncFunction(greetings){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(greetings);
        },100);
    });
}

// 与asyncFunction等同
function asyncFunction2(greetings){
    return Promise.resolve(greetings);
}

// 应该尽量使用catch而不是直接使用reject方法
asyncFunction("hello promise").then(function(args){
    console.log(args);
}).catch(function(error){
    console(error);
}).then(function(){
    console.log("done!");
});

// 应该尽量使用catch而不是直接使用reject方法
asyncFunction2("hello promise").then(function(args){
    console.log(args);
}).catch(function(error){
    console(error);
}).then(function(){
    console.log("done!");
});

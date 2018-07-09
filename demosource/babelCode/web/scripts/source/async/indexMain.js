// async方法返回的是一个Promise
async function Hello(flag){
    // 返回值做为该Promise resolve的值

    if(flag) {
        return 'hello async';
    }

    // 如果async方法有抛出异常，则异常作为reject的值
    throw Error('hello catch');
}

Hello(true).then(v => {
    console.log(v);
}).catch(e=>{
    console.log(e);
});


Hello(false).then(v => {
    console.log(v);
}).catch(e=>{
    console.log(e);
});

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

async function add1(x) {
    var a = await resolveAfter2Seconds(x);
    return a;
}

add1(10).then(v => {
    console.log(v);
});

//----------------------------------------------------------------
// function p(v) {
//     if (v % 2 === 0) {
//         return Promise.resolve(v * 5);
//     }
//     return Promise.reject(v);
// }

// p(2).then(v => {
//     if (v > 5) {
//         return p(4).then(r => {
//             console.log('then1 ' + r);
//             return p(2);
//         });
//     }
// }).then(v => {
//     console.log('then2:' + v);
// }).catch(e => {
//     console.log(e);
// });
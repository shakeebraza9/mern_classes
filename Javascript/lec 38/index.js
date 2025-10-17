function fun1(){
    return 'hello' ;
}
let retf = fun1();
console.log(retf);

async function fun2(){
    return 'hello' ;
}

let ret = fun2();
console.log(ret);
// Async functions return promise

function fun3(){
    // return Promise.resolve("hello")
    return new Promise(function(res,rej){
        res("hello")
    }) 
}

let res3 = fun3();
console.log(res3)
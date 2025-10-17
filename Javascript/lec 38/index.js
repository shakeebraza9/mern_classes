// function fun1(){
//     return 'hello' ;
// }
// let retf = fun1();
// console.log(retf);

// async function fun2(){
//     return 'hello' ;
// }
// fun2().then((data)=>{
// console.log(data)
// })
// // let ret = fun2();
// // console.log(ret);
// // Async functions return promise

// function fun3(){
//     return Promise.resolve("hello")
//     // return new Promise(function(res,rej){
//     //     res("hello")
//     // }) 
// }
// fun3().then((data)=>{
// console.log(data)
// })
// let res3 = fun3();
// console.log(res3)


function pro(){
    return new Promise(function pro1(res,rej){
        res("hello");
    })
}

async function fun2(){
    let x = await pro();
    console.log(x);
    return 'M Shakeeb raza' ;
}
fun2().then((data)=>{
console.log(data)
})
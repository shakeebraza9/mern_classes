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


// function pro(){
//     // return new Promise(function pro1(res,rej){
//     //     setTimeout(() => {
//     //         res("hello");
//     //     }, 1000); 
//     // })

//     return setTimeout(()=>{
//         console.log("hello");
//     },10000);
// }

// async function fun2(){
//     console.log("start")
//     let x = await pro();
//     console.log(x);
//     return 'M Shakeeb raza' ;
// }
// fun2().then((data)=>{
// console.log(data)
// })

// for(i = 0 ; i<10000;i++){
// console.log("for loop ")
// }



// short the code by the help of async function in lec 37 

function searchFood(item) {
    return new Promise(function fun1(res, rej) {
        console.log("searching start for", item, ".....");
        setTimeout(function timer1() {
            let data = `list of ${item}`;
            res({ item, data });
        }, 3000);
    });
}

function orderFood(item) {
    return new Promise(function fun2(res, rej) {
        console.log("Select ", item);
        setTimeout(function timer2() {
            let id = Math.floor(Math.random() * 999999);
            res({ id, item });
        }, 4000);
    });
}

function payment(item, id) {
    return new Promise(function fun3(res, rej) {
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3() {
            let status = true;
            res(status);
        }, 6000);
    });
}

async function foodorder(item) {
    let res1 = await searchFood(item);
    let res2 = await orderFood(res1.item);
    let res3 = await payment(res2.item,res2.id);
    if(res3){
        console.log("Payment successfull with status", res3);
    }
    
}
foodorder("Bugers")
// let result = searchFood("dal chawal")
//     .then(function consume1(detail) {
//         console.log(detail.data);
//         return orderFood(detail.item);
//     })
//     .then(function consume2(detail2) {
//         console.log("order created successfully with id no.", detail2.id);
//         return payment(detail2.item, detail2.id);
//     })
//     .then(function consume3(status) {
//         console.log("Payment successfull with status", status);
//     });
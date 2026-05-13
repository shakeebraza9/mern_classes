function api1(){
    return new Promise((res , rej)=>{
        setTimeout(()=>{
            res("api1");
        },1000);
    })
}
function api2(){
    return new Promise((res , rej)=>{
        setTimeout(()=>{
            // res("api2");
            rej("api2");
        },3000);
    })
}
let api3=
     new Promise((res , rej)=>{
        setTimeout(()=>{
            res("api3");
        },2000);
    });


// let x = api1();
// console.log(x);
// let y = api2();
// console.log(y);
// let z = api3();
// console.log(z);
// api1().then((data)=>{
//     console.log(data);
// });
// api2().then((data)=>{
//     console.log(data);
// });
// api3().then((data)=>{
//     console.log(data);
// });

// let x = Promise.allSettled([api1(),api2(),api3]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

/* allsettled ma ma value reject ho ya response aye ya return kry ga ap ko json return kry ga status k sath value return kry ga 
[
  { status: 'fulfilled', value: 'api1' },
  { status: 'rejected', reason: 'api2' },
  { status: 'fulfilled', value: 'api3' }
]

*/


// let x = Promise.race([api1(),api2(),api3]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })


/* 
is ma race ho gi jo phely functions return kr dy ga wo jeet jay ga race ma simple ya fullfil ho ya reject ho jo b ho ga wo ajay ga 


*/

let x = Promise.any([api1(),api2(),api3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error(err);
})


/* 
any b race wala hi kam hi krta ha jo phely retun ho ga us ko dhkhy ga sirf bus frq ya ha is ma reject wala nhi ata ha fullfil waly aty ha 

*/


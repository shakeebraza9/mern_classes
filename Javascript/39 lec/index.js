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

let x = Promise.all([api1(),api2(),api3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error(err);
})

//  Promise . all ma ya masala ata ha k ager ek b reject howa to wo error dydy ga ya phir ap ko try or catch lagna ho ga 
// and jo value sab se phely rejected ho gi wohi ajay gi output ma bus 




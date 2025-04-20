// const promise1 = new Promise((resolve, reject) => {
//     console.log("inside promise");
//     resolve("resolve promise ")
//     // reject("reject promise")
// }).then(
//     (result) => {
//         console.log(result)
//     },
//     function reject(err) {
//         console.log(err)
//     }
// )

// promise1.then((resolve) => {
//     console.log(resolve)
// }, function reject(err) {
//     console.log(err)
// })


function isData(item) {
    const promise1 = new Promise(function fun1(resolve, reject) {
        if (item) {
            resolve("promise resolve");
        } else {
            reject("dataa is empty");
        }
    });

    return promise1;
}

let result = isData("rbgdfgc");
let x = result
    .then(function success(result) {
        console.log(result);
        return "heelllo from .then()";
    })
    .then(function secondFun(e) {
        console.log(e);
        return "nishant";
    })
    .then(function nish(data) {
        console.log("data", data);
    });

const promise1 = new Promise((resolve, reject) => {
    console.log("inside promise");
    resolve("resolve promise ")
    // reject("reject promise")
}).then(
    (result) => {
        console.log(result)
    },
    function reject(err) {
        console.log(err)
    }
)

// promise1.then((resolve) => {
//     console.log(resolve)
// }, function reject(err) {
//     console.log(err)
// })
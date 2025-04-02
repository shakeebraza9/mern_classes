// function hello(text, para) {
//     console.log("inside hello");
//     // console.log(para);
//     para(text);
// }

// function cb() {
//     console.log("inside callback");
// }
// hello("hello world", (data) => {
//     console.log("inside callback", data);
// });

// function fun1(text) {
//     let a = 50;

//     function fun2() {
//         console.log(text);
//         console.log(a);
//     }
//     a = 60;
//     // fun2();

//     return fun2;
// }

// var res = fun1("hello world");
// res();

// setinterval

// setInterval(() => {
//     console.log("hello");
// }, 1000);



function colorchnage() {
    let body = document.getElementsByTagName("body");
    let colorString = "123456789abcdef"
    var color = "";
    for (i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * colorString.length);
        color = color + colorString[randNum];

    }
    body[0].style.backgroundColor = `#${color}`
}
setInterval(colorchnage, 1000)
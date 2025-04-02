function hello(text, para) {
    console.log("inside hello");
    // console.log(para);
    para(text);
}

// function cb() {
//     console.log("inside callback");
// }
hello("hello world", (data) => {
    console.log("inside callback", data);
});
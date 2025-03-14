const mainDiv = document.getElementById('mainDiv');
const div1 = document.getElementById('div1');


// Event Bubbling
// div1.addEventListener('click',()=>{
//     console.log("div1")
// })
// mainDiv.addEventListener('click',()=>{
//     console.log("mainDiv")
// })

// document.body.addEventListener('click',()=>{
//     console.log("body")
// })

// Event Capturing
div1.addEventListener('click',()=>{
    console.log("div1")
},true)
mainDiv.addEventListener('click',()=>{
    console.log("mainDiv")
},true)

document.body.addEventListener('click',()=>{
    console.log("body")
},true)
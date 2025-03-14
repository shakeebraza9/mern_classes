// const mainDiv = document.getElementById('mainDiv');
// const div1 = document.getElementById('div1');


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
// div1.addEventListener('click',()=>{
//     console.log("div1")
// },true)
// mainDiv.addEventListener('click',()=>{
//     console.log("mainDiv")
// },true)

// document.body.addEventListener('click',()=>{
//     console.log("body")
// },true)




    // item.addEventListener('dragend', () => {
    //     console.log("dragover dragend")
    // })
    // item.addEventListener('dragover', () => {
    //     console.log("drag dragover")
    // })
    // item.addEventListener('dragleave', () => {
    //     console.log("drag dragleave")
    // })
    // item.addEventListener('dragenter', () => {
    //     console.log("drag dragenter")
    // })

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const items = document.getElementsByClassName("item");

for(let item of items){

    item.addEventListener("dragstart",(e)=>{
        let data = e.target;
       box2.addEventListener("dragover",(e)=>{
        e.preventDefault();
        e.stopPropagation();
       });
       box2.addEventListener("drop",()=>{
        box2.append(data);
        data ='';
       })


       box1.addEventListener("dragover",(e)=>{
        e.preventDefault();
        e.stopPropagation();
       });
       box1.addEventListener("drop",()=>{
        box1.append(data);
        data ='';
       })


       
    });
}
// const btn = document.getElementById('btn');
// const body = document.querySelector('body');

// btn.onclick =()=>{
//     console.log("hello brother")
// }
// btn.onclick =()=>{
//     console.log("hello brother")
// }

// btn.addEventListener('click',function(){
// console.log('click the btn fun')
// });

// btn.addEventListener('click',(e)=>{
//     console.log(e.target.tagName)
//     // alert("Error");
//     e.target.innerText = "chnage the text";
//     const confirmed = confirm("are u sure to change the backgrund color");
//     if(confirmed){
        
//         const color = prompt('which Color');
//         body.style.backgroundColor = `${color}`;
//     }
    
//     console.log('click the btn arrow fun')
    
// });


// const btn = document.getElementById('submit');
// const colorName = document.getElementById('colorname');
// const body = document.querySelector('body');
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     colornamevalue = colorName.value;
//     body.style.backgroundColor = `${colornamevalue}`;

// });


const btn = document.querySelector("#btn");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
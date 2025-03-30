const tictac = document.querySelector('.tictac');
let currentPlayer = "X"
tictac.addEventListener('click',(e)=>{
   if(e.target.className !== "tictac"){
    if(e.target.innerText ===""){
        e.target.textContent = currentPlayer;
        currentPlayer = (currentPlayer === "X") ? "O" : "X"
        }
   }



})


const box = document.querySelector('.box');
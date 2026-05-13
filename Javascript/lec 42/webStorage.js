document.getElementById("btn").addEventListener("click", (e) => {
    let name = document.getElementById('name').value 
    let rollNo = document.getElementById('rollNo').value 

    localStorage.setItem('data' , JSON.stringify({name : name , rollNo : rollNo}))
    document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name
    document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo
      
});
document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name 
document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo



// document.getElementById("btn2").addEventListener("click", (e) => {
//     let name2 = document.getElementById('name2').value 
//     let rollNo2 = document.getElementById('rollNo2').value 

//     sessionStorage.setItem('data' , JSON.stringify({name2 : name2 , rollNo2 : rollNo2}))
//     document.getElementById('h12').innerText = JSON.parse(sessionStorage.getItem('data')).name2
//     document.getElementById('h22').innerText = JSON.parse(sessionStorage.getItem('data')).rollNo2
      
// });
// document.getElementById('h12').innerText = JSON.parse(sessionStorage.getItem('data')).name2 
// document.getElementById('h22').innerText = JSON.parse(sessionStorage.getItem('data')).rollNo2
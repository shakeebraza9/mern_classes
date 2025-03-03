// ways of element seelct
// const h1 =document.getElementById('heading');
// h1[0].innerText = "changes can be done"


// const h1 =document.getElementsByClassName('hallo');
// h1[0].innerHTML = "changes can be done"


// const h1 =document.getElementsByTagName('h1');
// h1[0].textContent = "changes can be done by text content"
// h1[1].innerHTML = "<i>changes can be done</i>"


// const heading = document.querySelector("h1"); //select the fisrt element
// const heading = document.querySelectorAll("h1"); // select the all elelemnt
// const heading = document.querySelector("#heading"); 
// console.log(heading)

// const submit = document.querySelector('input[type=submit]');
// console.log(submit);


// console.log(h1.innerText)


// chnage the background color

// const heading =document.querySelector('h1');
// heading.style.backgroundColor = "red";
// heading.style.color = "white";
// heading.style.border = "1px solid black";
// heading.style.borderRadius = "5px"


// heading.setAttribute("class","hello hello3");
// heading.setAttribute("style","background-color :red;");


// heading.removeAttribute("class","hello");



// create a tag by the help of javacsript

// const createPTag = document.createElement("p");
// createPTag.setAttribute("id","para");
// createPTag.innerText = "hello this is phara";

// const body = document.getElementsByTagName("body")
// body[0].appendChild(createPTag);
// console.log(createPTag)


let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard",  "Phone"];

let ul = document.getElementById('specs');
for(i = 0 ; i <= data.length; i++){
    let litag = document.createElement('li');
    litag.style.backgroundColor  ="pink"
    litag.style.margin = "5px"
    litag.style.padding = "5px"
    litag.style.borderRadius = "5px"
    litag.style.textAlign = "center"
    litag.innerText = data[i];
    ul.append(litag);
}










// const ul = document.getElementById("specs");
// // const liTag = document.createElement('li')
// // liTag.innerText = "Monitor"
// // ul.append(liTag)

// for (let i = 0; i < data.length; i++) {
//     // console.log(data[i])
//     const liTag = document.createElement("li");
//     liTag.style.backgroundColor  ="pink"
//     liTag.style.margin = "5px"
//     liTag.style.padding = "5px"
//     liTag.style.borderRadius = "5px"
//     liTag.style.textAlign = "center"
//     liTag.innerText = data[i];
//     ul.appendChild(liTag);
    
// }

// heading.remove()
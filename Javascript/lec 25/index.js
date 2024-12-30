function sum (a,...num){ //rest operator
  console.log(num)
  let total = a+num[0]+num[1];
  console.log(total)
}

sum(5,6,7);


let obj ={
  title:"lecture 25",
  tags:["lec30","rest"],
  dsc:"hello world"
}

let {title,...remaning}=obj;
console.log(remaning)

function obj1(...hello){
  console.log(hello)

}
obj1(obj);
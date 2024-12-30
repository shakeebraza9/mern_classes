function sum (a,...num){ //rest operator
  console.log(num)
  let total = a+num[0]+num[1];
  console.log(total)
}

sum(5,6,7);


let obj ={
  title:"lecture 25",
  tags:"lec30,rest,world,shakeeb",
  dsc:"hello world"
}

let {title,...remaning}=obj;
console.log(remaning)

// function obj1(...hello){
function obj1({title,tags,dsc}){
  let tagsarray=tags.split(",")
  console.log(tagsarray)
  
}
// obj1(obj.title,obj.tags,obj.dsc); call like this function obj1(title,tags,dsc)
obj1(obj); //call like this function obj1({title,tags,dsc})


// let arr = [4,5,67,42,5,334,345]
// let arr2 = [7,0,6,2,45,456]
// let newArray = [...arr] //spread
// console.log(newArray)


let arr = [4,5,67,42,5,334,345];
arr.forEach(function(val){
console.log(val)
});
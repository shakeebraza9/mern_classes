// function sum (a,...num){ //rest operator
//   console.log(num)
//   let total = a+num[0]+num[1];
//   console.log(total)
// }

// sum(5,6,7);


// let obj ={
//   title:"lecture 25",
//   tags:"lec30,rest,world,shakeeb",
//   dsc:"hello world"
// }

// let {title,...remaning}=obj;
// console.log(remaning)

// function obj1(...hello){
// function obj1({title,tags,dsc}){
//   let tagsarray=tags.split(",")
//   console.log(tagsarray)
  
// }
// obj1(obj.title,obj.tags,obj.dsc); call like this function obj1(title,tags,dsc)
// obj1(obj); //call like this function obj1({title,tags,dsc})


// let arr = [4,5,67,42,5,334,345]
// let arr2 = [7,0,6,2,45,456]
// let newArray = [...arr] //spread
// console.log(newArray)


// let arr = [4,5,67,42,5,334,345];
// arr.forEach(function(val){
// console.log(val)
// // return val; foreach return kuch nhi krwata ha 
// });

let arr = [4,5,67,42,5,334,345];
// function print(val){
//   console.log(val)

// }
// arr.forEach(print);
// arr.forEach((val)=>console.log(val));

// let newarrayre=arr.map(function(val){
//   val+=5;
//   return val;
// });|

// let newarrayre=arr.map((val)=>val+=5);
// console.log(newarrayre);

// Filter 
// const newfilters=arr.filter((val)=>{
  //   if(val < 23){
    
  //     return val;
  //   }
  // });
// const newfilters=arr.filter((val)=> val <= 23);
// console.log(newfilters);

// arrow fun
// let arr2 = [4,5,67,42,5,334,345];
// const hello=(arr2)=>{
// console.log(arr)
// }
// hello(arr2);

//like reduce example
// let sum =0;
// for(let i=0;i< arr.length; i++){
//   sum += arr[i];
// }
// console.log(sum)


// reduce
// const newreduce = arr.reduce((accumulator,currentValue)=>{
//   accumulator = accumulator + currentValue;
//   return accumulator;
// },0);
// const newreduce = arr.reduce((acc,cur)=> acc += cur,0);

// console.log(newreduce)



let students = [
  { name: "Rinku", course: "Btech", branch: "cse" },
  { name: "Rohit", course: "Btech", branch: "civil" },
  { name: "Virat", course: "Btech", branch: "cse" },
  { name: "Mukesh", course: "Btech", branch: "mechanical" },
  { name: "Aksar", course: "Btech", branch: "civil" },
];
// const newArr = students.filter((val) => val.branch =='civil');
const newArr = students.filter((val) => {
  if(val.branch === 'civil'){
      return val
  }
}).map((val) => val.name)


console.log(newArr)

const obj = {
  name1: "Nishant",
  id1: 23134563,
  course1: "B.tech",
  Branch1: "Cse",
  hosteller1: false,
};

const obj2 = {
  name: "Nishant",
  id: 23134563,
  course: "B.tech",
  Branch: "Cse",
  hosteller: false,
};

const newObj = {...obj, ...obj2}

let objjj = {
  name: "nishant",
  name:"rahul"
}
console.log(objjj)

// console.log(newObj)
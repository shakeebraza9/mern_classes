{

}//scope

// type of scope
/*
1.global scope
2.block scope
1.function scope

*/


// let naam = "Nishant"

// for (let i = 0; i < 5; i++) {
    
//     console.log(naam)
// }


function heelo1(){
  const channelName = "CodeThread"
  console.log("inside function")
  
  function helllo2 () {
      const naam  = "Nishant"
      console.log(channelName)

      {
          console.log(naam)
      }
  }

  
  helllo2()
  
}
heelo1()

import './App.css'
import React from 'react'
function App() {


  // return (
    
  // <div>
  //   hello world this is html like syntax convert by the help of Babel 
  // </div>
  //   )

  return React.createElement('div', null, 'hello world')
}
let a = App();
console.log(a);

export default App

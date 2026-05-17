import { useState } from "react";

  function App() {
    let count = 0;
    let [data,setData] = useState(2);
    console.log(data);
    function incressval(){
      count = count + 1;

    }
    function incressval(){
      count = count + 1;
      console.log(count);

    }
    function Drecessval(){
      count = count - 1;
      console.log(count);

    }
  return(
    <div>
      <h1>Hello, World!</h1>
      <button onClick={incressval}>Increment</button>
      <h2>{count}</h2>
      <button onClick={Drecessval}>Decrment</button>
    </div>
  )
    

  }

  export default App

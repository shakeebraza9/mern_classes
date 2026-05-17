import { useState } from "react";

  function App() {
    // let count = 0;

    let [data,setData] = useState(0);

    // console.log(data);

    function incressval(){
      // setData(data + 1);
      setData((data) => data + 1);
      // count = count + 1;
      // console.log(count);

    }
    function Drecessval(){
      // setData(data - 1);
      setData((data) => data - 1);
      // count = count - 1;
      // console.log(count);

    }
  return(
    <div>
      <h1>Hello, World!</h1>
      <button onClick={incressval}>Increment</button>
      <h2>{data}</h2>
      <button onClick={Drecessval}>Decrment</button>
    </div>
  )
    

  }

  export default App

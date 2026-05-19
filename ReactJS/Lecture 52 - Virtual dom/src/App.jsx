import { use, useState } from "react";

  function App() {

    const [data,setData] = useState(0)


    function handdleIncress(){
      setData((preValue) => preValue + 1);
    }
  return(
    <div>
      {data}
      <button onClick={handdleIncress}>Increment</button>
    </div>
  )
    

  }

  export default App

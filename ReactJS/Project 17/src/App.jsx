import { useState } from "react";
import Heading from "./component/Heading";
import AllCards from "./component/AllCards";
import {data} from "./utilis/data.js";
  
function App() {
  function filterHandler(){
    console.log("filter handler called")
  }
  return(
    <div>
      <Heading />
      <input type="text" placeholder="Kya Cheya..." />
      <button onClick={filterHandler}>Search</button>
      <AllCards data={data} />
    </div>
  )
    

  }

  export default App

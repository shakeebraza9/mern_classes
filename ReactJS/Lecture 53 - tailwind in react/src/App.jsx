import { useState } from "react";
import Heading from "./component/Heading";
import AllCards from "./component/AllCards";
import {data} from "./utilis/data.js";
  
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  
  function filterHandler(){
    let res = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredData(res)
  
  }
  return(
    <div>
      <Heading />
      <input type="text" placeholder="Kya Cheya..."  onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={filterHandler}>Search</button>
      <AllCards data={filteredData} />
    </div>
  )
    

  }

  export default App

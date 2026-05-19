import { useState } from "react";
// import Heading from "./component/Heading";
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
      <h1 className="font-bold text-3xl text-center my-10">Rasty Ka Mall Sasty Ma</h1>  
      <input className="text-blue-50 border-amber-200" type="text" placeholder="Kya Cheya..."  onChange={(e) => setSearchTerm(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 rounded-xl " onClick={filterHandler}>Search</button>
      <AllCards data={filteredData} />
    </div>
  )
    

  }

  export default App

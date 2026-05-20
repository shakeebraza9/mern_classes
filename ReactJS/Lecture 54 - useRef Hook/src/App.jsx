import { useState } from "react";

  
function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function fromSubmite(e){
    e.preventDefault();
    console.log({ email, password });
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handlePassword(event){
    setPassword(event.target.value)
  }

  return(
    <div>
      <form action="">
        <input type="text" placeholder="Email" onChange={handleEmail} />
        <br />
        <input type="password" placeholder="password" onChange={handlePassword}/>
        <br />
        <br />
        <button onClick={fromSubmite}>Submit</button>
      </form>
    </div>
  )
    

  }

  export default App

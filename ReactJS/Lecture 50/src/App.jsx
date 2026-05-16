import './App.css'


function Product(){
  return (
    <>
      <h1>Product Name: Apple</h1>
      <h2>Price: $1.00</h2>
    </>
  )
}

function App() {
// let a = 10  
// let b = 20
// let c = a + b
// console.log(c)
  return (
  // <div>{c}</div>
  <div>
    <Product />
    <Product />

  </div>
  
  )
}

export default App

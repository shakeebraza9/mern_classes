import './App.css'


// function Product(props){
//   return (
//     <>
//       <h1>Product Name: {props.title}</h1>
//       <h2>Price: {props.price}</h2>
//     </>
//   )
// }

// destracting props
function Product({title, price}){
  return (
    <>
      <h1>Product Name: {title}</h1>
      <h2>Price: {price}</h2>
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
    <Product title="Apple" price="$1.00"/>
    <Product title="Banana" price="$0.50"/>
    {/* <Product /> */}

  </div>
  
  )
}

export default App

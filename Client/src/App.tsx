const products = [
  {name:"product 1", price:1000},
  {name:"product 2", price:2000},
  {name:"product 3", price:3000},
];

function App() {

  return (
    <>
      <Header/>
      <ProductList/>
    </>
  )
}

function Header(){
  return(
    <h1>Header</h1>
  );
}

function ProductList(){
  return(
    <div>
      <h2>ProductList</h2>
      <Product/>
      <Product/>
    </div>
  );
}

function Product(){
  return(
    <h3>Product</h3>
  );
}

export default App

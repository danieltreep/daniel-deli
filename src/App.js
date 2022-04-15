import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import data from './data';
import Checkout from './components/Checkout';


function App() {

  const { products } = data; 

  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  function handleRemove(product) {
    const itemIndex = cart.indexOf(product);
    const notRemoved = cart.filter(item => cart.indexOf(item) !== itemIndex);
    product.amount = 1;
    setCart(notRemoved);
    handlePrice();
  }

  function handlePrice() {
    let totalPrice = 0;
    cart.map(item => totalPrice += item.price * item.amount);
    setPrice(totalPrice);
  }

  function handleAddCart(item) {
    if (cart.indexOf(item) !== -1) {
      return;
    }
    setCart([...cart, item]);
    handlePrice();
  }

  function handleChange(item, difference) {
    const index = cart.indexOf(item);
    cart[index].amount += difference;

    if (cart[index].amount === 0) {
      cart[index].amount = 1;
    }
    
    setCart([...cart]);
    handlePrice();
  }

  function handleEmpty() {
    setCart([]);
    handlePrice();
    for (let i = 0; i < cart.length; i++) {
      cart[i].amount = 1;
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={
          <ProductPage 
            products={products}
            handleCart={handleAddCart} 
            cart={cart}
            count={cart.length}
          />
        }>
        </Route> 
        <Route exact path="/cart" element={
          <Cart 
            cart={cart}
            emptyCart={handleEmpty}
            handleRemove={handleRemove}
            handleChange={handleChange}
            handlePrice={handlePrice}
            price={price}
          />
        }>
        </Route>
        <Route exact path='/checkout' element={
          <Checkout 
            cart={cart}
            totalPrice={price}
          />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

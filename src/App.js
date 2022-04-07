import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import { useState } from 'react';
import data from './data';

function App() {

  // const [cart, setCart] = useState([])

  const { products } = data; 

  return (
    <div className="App">
      <Header />
      <Main products={products}/>
    </div>
  );
}

export default App;

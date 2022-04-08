import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {

  const { products } = data; 
  const [search, setSearch] = useState(null);

  function handleSearch(searchTerm) {
    setSearch(searchTerm);

    const itemCards = document.querySelectorAll('.itemCard');

    for (let i = 0; i < products.length; i++) {
      itemCards[i].classList.add("hide");

      if (products[i].name.toUpperCase().includes(searchTerm.toUpperCase())) {
        itemCards[i].classList.remove("hide");
      } 
  }
}

  return (
    <div className="App">
      <Header search={handleSearch} />
      <Main products={products} />
    </div>
  );
}

export default App;

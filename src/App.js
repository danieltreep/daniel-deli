import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {

  const { products } = data; 
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header search={setSearch} searchTerm={search}/>
      <Main products={products} searchTerm={search}/>
    </div>
  );
}

export default App;

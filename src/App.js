import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterGrid from './Characters/CharacterGrid.js';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios
      ("https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul");
      
      setItems(result.data);
      console.log(result.data);
      
    }
    fetchItems();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Better Call Saul Characters
        </p>
        <CharacterGrid items={items} />
      </header>

    </div>
  );
}

// bcs api: https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul


export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterGrid from './Characters/CharacterGrid.js';

function App() {
  const [items, setItems] = useState([])

  //Fetching the api
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios
      ("https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul");
      
      const data = result.data;
      setItems(result.data);
      data[5].nickname = "Francesca";
      console.log(result.data);
      console.log(data[5].nickname);
    }
    fetchItems();
  }, []);

  //main visuals
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

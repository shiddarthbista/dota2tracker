import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Hero from './Hero';

function App() {
  const [Heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    axios
      .get(
        "https://api.opendota.com/api/heroStats")
      .then(res => {
        setHeroes(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredHeroes = Heroes.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className='hero-app'>
      <div className='hero-search'>
        <h1 className='hero-text'>Search a Hero</h1>
        <form>
          <input
            className='hero-input'
            type='text'
            onChange={handleChange}
            placeholder='Search a Hero'
          />
        </form>
       
      </div>
      <div className="hero-title">
          <li>Hero</li>
          <li>Picks</li>
          <li>Bans</li>
          <li>Wins</li>
          <li>Win-Rate</li>
      </div>
      {filteredHeroes.map(hero => {
        return (
          
          <Hero
            key={hero.id}
            name={hero.localized_name}
            pro_win={hero.pro_win}
            pro_pick={hero.pro_pick}
            pro_ban={hero.pro_ban}
            icon={hero.icon}
            winrate={((hero.pro_win/hero.pro_pick)*100).toFixed(2)}
            
           
           
            
          />
        );
      })}
    </div>
  );
}

export default App;
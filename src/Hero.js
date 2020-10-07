import React from 'react';
import "./Hero.css"


const Hero = ({ 
  pro_pick,
  pro_win,
  icon,
  name,
  pro_ban,
  winrate,
}) => {
  return (
<> 
  <div className='hero-container'>  
    <div className='hero-row'>
      <div className='hero'>
        <img src={`${'http://cdn.dota2.com'}${icon}` }alt="" />
        <h1> {name}</h1>
      </div>
     <div className='hero-data'>
          <p className='hero-pick'>{pro_pick}</p>
          <p className='hero-ban'>{pro_ban}</p>
          <p className='hero-win'>{pro_win}</p>
          {winrate < 50 ? (
            <p className='winrate red'>{winrate}% v</p>
          ) : (
            <p className='winrate green'>{winrate}% ^</p>
          )}
     </div>
    </div>
  </div>
</> 
  );
};

export default Hero;

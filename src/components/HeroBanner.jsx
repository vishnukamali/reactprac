// src/components/HeroBanner.js
import React from 'react';
import './HeroBanner.css'; // We'll style this component in a separate CSS file.

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src="/images/hero-banner.png" alt="Hero Banner" className="hero-image" />
      <div className="overlay-box">
        <img src="/images/alb1.png" alt="Album Cover" className="album" />
        <div className="text-container">
          <h2>"Trash" by BGYO is OUT NOW!</h2>
         </div>
         <div >
            <a href='https://orcd.co/bgyo-trash' target="_blank"> 
            <button className = "now-button">
                Stream Now
            </button>
            </a>
         </div>
      </div>
    </div>
  );
}

export default HeroBanner;

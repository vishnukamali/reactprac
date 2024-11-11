import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Merch from './components/merch';
import Events from './components/Events';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Artists from './components/Artists';
import Music from './components/Music';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className="App">
      <Header /> 
      <HeroBanner />
      {/* <img src="/images/hero-banner.png" alt="Full-Screen Background" className="full-screen-image" /> */}
      <section id="artists">
        <Artists />
      </section>
      <section id="music">
        <Music />
      </section>
      <section id="video">
        <Videos />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="merch">
        <Merch />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="subscribe">
        <Subscribe />
      </section>
      <Footer />
    </div>
  );
}

export default App;

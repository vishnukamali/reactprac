import React from 'react';
import './Header.css';
import { useState,useEffect } from 'react';
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="nav">
        <a href="#music">Music</a>
        <a href="#video">Video</a>
        <a href="#gallery">Gallery</a>
        <img src="/images/bgyologo.webp" alt="BGYO Logo" className="logo" />
        <a href="#merch">Merch</a>
        <a href="#events">Events</a>
        <a href="#subscribe">Subscribe</a>
      </nav>
    </header>
  );
};

export default Header;

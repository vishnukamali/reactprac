import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/images/npcSeal.png" alt="NPC Seal of Registration" className="npc-seal" />
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#personal-info">Do Not Sell My Personal Information</a>
      </div>
      <p className="footer-text">© 2024 ABS-CBN Corporation. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

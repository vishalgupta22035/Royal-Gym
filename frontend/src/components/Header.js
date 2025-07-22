import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ user, onJoinClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <a href="#home" className="logo">
        Royal <span>Gym</span>
      </a>

      <div
        id="menu-icon"
        className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>

      <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#plans">Pricing</a></li>
        <li><a href="#review">Review</a></li>
      </ul>

      <div className="top-btn">
        <a className="nav-btn" onClick={onJoinClick}>Join Us</a>
      </div>
    </header>
  );
};

export default Header;

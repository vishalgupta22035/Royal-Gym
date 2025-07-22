// src/components/Footer.js
import React from 'react';
import './Footer.css'; // optional

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#"><i className="bx bxl-facebook"></i></a>
        <a href="#"><i className="bx bxl-instagram"></i></a>
        <a href="#"><i className="bx bxl-linkedin"></i></a>
      </div>

      <p className="copyright">
        &copy; Royal Gym 2025 - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

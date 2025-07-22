// src/components/Home.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css'; // optional

const Home = ({ onJoinClick }) => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content" data-aos="zoom-in-right">
        <h3>Build Your</h3>
        <h1>Dream Physique</h1>
        <h3><span className="multiple-text"></span></h3>
        <p>Join Royal Gym and transform your body with expert guidance, proven routines, and a vibrant fitness community.</p>
        <a href="#plans" className="btn" onClick={onJoinClick}>Join Us</a>
      </div>

      <div className="home-img" data-aos="zoom-in-left">
        <img src="/assets/heroImage.png" alt="Fitness Hero" />
      </div>
    </section>
  );
};

export default Home;

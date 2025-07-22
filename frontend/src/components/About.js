// src/components/About.js
import React from 'react';
import './About.css'; // optional

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img" data-aos="zoom-in-left">
        <img src="/assets/about.jpg" alt="About Royal Fitness" />
      </div>

      <div className="about-content" data-aos="fade-left">
        <h2 className="heading">Why Choose Us?</h2>

        <p>At Royal Gym, we believe fitness is a lifestyle. Our expert coaches, diverse workout plans, and premium facilities help members of all levels achieve their goals.</p>
        <p>Whether you're gaining mass, losing weight, or just improving stamina—our programs are tailored to you.</p>
        <p>Our community is motivating, supportive, and built to keep you going.</p>
        <p>Join us today and take the first step towards a stronger you.</p>

        <a href="#plans" className="btn">Book a Free Class</a>
      </div>
    </section>
  );
};

export default About;

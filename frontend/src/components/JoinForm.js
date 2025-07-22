import axios from 'axios';
import React, { useState } from 'react';
import './JoinForm.css';

const JoinForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    plan: 'Basic'
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/join', formData);
      alert(`Thanks ${formData.name}! We’ll contact you soon.`);
      onClose();
    } catch (error) {
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="join-overlay">
      <div className="join-form" data-aos="zoom-in">
        <h2>Join Royal Gym</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="text" name="goal" placeholder="Your Goal (e.g. Weight Loss)" required onChange={handleChange} />
          <select name="plan" onChange={handleChange}>
            <option>Basic</option>
            <option>Pro</option>
            <option>Premium</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default JoinForm;

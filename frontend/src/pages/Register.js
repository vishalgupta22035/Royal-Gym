import React, { useState } from 'react';
import api from '../api';
import './AuthForm.css';

const Register = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/users/register', formData);
      alert('Registration successful! You can now log in.');
      onSwitch(); // Switch to login
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Register</button>
        <p>
          Already have an account? <span onClick={onSwitch}>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;

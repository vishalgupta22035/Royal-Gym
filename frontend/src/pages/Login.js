// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';

const Login = ({ onSwitch, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);

      // ✅ Redirect to main site
      onLoginSuccess(res.data.user); // passes user back to App

    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <span onClick={onSwitch}>Register here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Plans from './components/Plans';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

import Login from './pages/Login';
import Register from './pages/Register';
import JoinForm from './components/JoinForm';




import './App.css';




function App() {
  const [authMode, setAuthMode] = useState('login'); // 'login', 'register', 'site'
  const [user, setUser] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80
    });
  }, []);


  const handleJoinClick = () => setShowJoinForm(true);
  const handleJoinClose = () => setShowJoinForm(false);

  return (
    <>
      {authMode === 'login' ? (
        <Login
          onSwitch={() => setAuthMode('register')}
          onLoginSuccess={(userData) => {
            setUser(userData);
            setAuthMode('site');
          }}
        />
      ) : authMode === 'register' ? (
        <Register onSwitch={() => setAuthMode('login')} />
      ) : (
        <>
          <Header user={user} onJoinClick={handleJoinClick} />
          <main>
            <Home onJoinClick={handleJoinClick} />
            <Services />
            <About />
            <Plans onJoinClick={handleJoinClick} />
            <Reviews />
          </main>
          <Footer />

          {showJoinForm && <JoinForm onClose={handleJoinClose} />}
        </>
      )}
    </>
  );
}

export default App;

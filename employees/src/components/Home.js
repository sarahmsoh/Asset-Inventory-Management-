import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Asset Management System</h1>
        <p>Effortlessly manage requests, repairs, and allocated assets.</p>
        <div className="home-buttons">
          <button className="home-btn signup-btn" onClick={() => navigate('/signup')}>Get Started</button>
          <button className="home-btn login-btn" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

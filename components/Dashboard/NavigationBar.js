import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navigation.css';

const NavigationBar = () => {
  const navigate = useNavigate(); 

  const handleDashboardClick = () => {
    navigate('/dashboard'); // Navigate to the dashboard route
  };

  return (
    <div className="navigation-container">
      <nav className="card">
        <h1 className="heading">Asset Management System</h1>
        <h2>Welcome back, Manager</h2>
        <ul>
          <li>
            <button onClick={handleDashboardClick} className="dashboard-btn">
              Dashboard
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;

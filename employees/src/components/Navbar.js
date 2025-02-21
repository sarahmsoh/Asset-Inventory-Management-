// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';  // Redirect to login page (if necessary)
  };

  return (
    <nav>
      <Link to="/employee-dashboard">Dashboard</Link>
      <Link to="/request-form">Request Asset</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

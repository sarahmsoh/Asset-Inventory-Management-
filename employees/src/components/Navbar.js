// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   window.location.href = '/';  // Redirect to login page (if necessary)
  // };

  return (
    <nav>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
      {/* <Link to="/employeedashboard">Dashboard</Link>
      <Link to="/requestform">Request Asset</Link>
      <Link to="/RepairForm">Request Repair</Link> */}

      {/* <button onClick={handleLogout}>Logout</button> */}
    </nav>
  );
};

export default Navbar;

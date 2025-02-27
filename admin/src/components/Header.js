import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Header.css';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showDashboard, setShowDashboard] = useState(false);


  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };


  // You might fetch this from your user state; for now, it's hardcoded.
  const userName = "John Doe";

  return (
    <header
      style={{
        position: 'fixed', // Fixed position so it stays at the top
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(90deg, #007bff, #0056b3)',
        color: '#fff',
        zIndex: 1000, // High z-index so content scrolls under it
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        paddingBottom: '0.5rem'
      }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between py-3">
          {/* Branding */}
          <h1 className="h4 mb-0" style={{ fontWeight: 'bold' }}>
            shulee
          </h1>

          {/* Search Input */}
          <div className="position-relative flex-grow-1 mx-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.5rem', borderRadius: '50px' }}
            />
            <FaSearch
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999'
              }}
            />
          </div>

          {/* Profile Section with Icon, Name, and Logout Button */}
          <div className="d-flex align-items-center">
            <FaUserCircle size={40} className="me-2" />
            <span className="me-3">{userName}</span>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>

          </div>
        </div>

        {/* Navigation Bar */}
        <AppNavbar />
      </div>
      
      
    </header>
  );
};

export default Header;

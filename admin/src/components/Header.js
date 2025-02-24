// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import Navbar from './Navbar'; // Import the separate navbar

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-primary text-white">
      <div className="container-fluid">
        {/* Top Row: Company Title, Search Bar, Logout Button */}
        <div className="d-flex align-items-center justify-content-between py-2">
          <h1 className="h3 mb-0">shulee</h1>
          <div className="flex-grow-1 mx-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
        {/* Bottom Row: Imported Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

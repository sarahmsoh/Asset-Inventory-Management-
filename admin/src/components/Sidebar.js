import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaTachometerAlt, FaUsers, FaBox, FaFileAlt, FaHistory, FaCog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import './Sidebar.css';


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Replace with dynamic user data if available
  const userName = "John Doe";

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      {/* Navigation Items */}
      <div className="p-3 flex-grow-1">
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink to="/admin/dashboard" className="nav-link">
              <FaTachometerAlt className="me-2" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/admin/users" className="nav-link">
              <FaUsers className="me-2" />
              Users
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/admin/assets" className="nav-link">
              <FaBox className="me-2" />
              Assets
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/admin/requests" className="nav-link">
              <FaFileAlt className="me-2" />
              Requests
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/admin/system-config" className="nav-link">
              <FaCog className="me-2" />
              System Config
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Profile Section at the Bottom */}
      <div className="p-3 border-top">
        <div className="d-flex align-items-center">
          <FaUserCircle size={40} className="me-2" />
          <div className="flex-grow-1">
            <div className="fw-bold">{userName}</div>
            <button onClick={handleLogout} className="btn btn-sm btn-danger mt-1">
              <FaSignOutAlt className="me-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

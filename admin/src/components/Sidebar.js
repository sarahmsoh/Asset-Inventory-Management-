// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ handleLogout }) => {
  return (
    <div className="d-flex flex-column vh-100 border-end bg-light">
      <div className="p-3">
        <h4>Admin Panel</h4>
      </div>
      <ul className="nav nav-pills flex-column mb-auto p-3">
        <li className="nav-item mb-2">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/users" className="nav-link">
            Manage Users
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/assets" className="nav-link">
            Manage Assets
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/requests" className="nav-link">
            Requests
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/audit-logs" className="nav-link">
            Audit Logs
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/system-config" className="nav-link">
            System Config
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/reports" className="nav-link">
            Reports
          </Link>
        </li>
      </ul>
      <div className="p-3 mt-auto">
        <button onClick={handleLogout} className="btn btn-danger w-100">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

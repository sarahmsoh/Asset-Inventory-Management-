import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faUsers, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 border-end bg-light">
      <div className="p-3">
        <h4>Admin Panel</h4>
      </div>
      <ul className="nav nav-pills flex-column mb-auto p-3">
        <li className="nav-item mb-2">
          <Link to="/admin/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <span className="nav-link disabled">Assets Management</span>
          <ul className="nav flex-column ms-3">
            <li className="nav-item">
              <Link to="/admin/assets" className="nav-link">
                <FontAwesomeIcon icon={faBox} className="me-2" /> List Assets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/assets/add" className="nav-link">
                <FontAwesomeIcon icon={faBox} className="me-2" /> Add Asset
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/assets/categories" className="nav-link">
                <FontAwesomeIcon icon={faBox} className="me-2" /> Categories
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item mb-2">
          <span className="nav-link disabled">Requests</span>
          <ul className="nav flex-column ms-3">
            <li className="nav-item">
              <Link to="/admin/requests/pending" className="nav-link">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Pending Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/requests/completed" className="nav-link">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Completed Requests
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/users" className="nav-link">
            <FontAwesomeIcon icon={faUsers} className="me-2" /> User Management
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/reports" className="nav-link">
            <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Reports
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/settings" className="nav-link">
            <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
          </Link>
        </li>
      </ul>
      <div className="p-3 mt-auto">
        <button className="btn btn-danger w-100" disabled>
          <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout (Disabled)
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
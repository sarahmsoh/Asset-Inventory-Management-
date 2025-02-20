// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-light py-2">
      <div className="container-fluid text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/users">Users</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/assets">Assets</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/requests">Requests</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/audit-logs">Audit Logs</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/system-config">System Config</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none" to="/admin/reports">Reports</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

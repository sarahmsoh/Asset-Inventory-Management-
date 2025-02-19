import React from 'react';
import Sidebar from './Sidebar';
import './Dash.css'; // Import the CSS file

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* Content Card */}
      <div className="content-card">
        <h2>Welcome to the Dashboard</h2>
        <p>Here you can manage all your assets and requests.</p>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;

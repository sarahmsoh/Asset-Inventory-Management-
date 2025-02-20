// src/components/AdminDashboard.js
import React from 'react';
import UserForm from '../components/UserForm';
import AssetForm from '../components/AssetForm';

const AdminDashboard = () => {
  return (
    <div className="container my-4">
      <h1>Admin Dashboard</h1>
      <p>Overview of system status, key metrics, and recent activity.</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Add User</h2>
          {/* UserForm handles user creation */}
          <UserForm />
        </div>
        <div className="col-md-6">
          <h2>Add Asset</h2>
          {/* AssetForm handles asset configuration */}
          <AssetForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

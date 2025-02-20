// src/pages/AdminUsers.js
import React from 'react';
import UserForm from '../components/UserForm';

const AdminUsers = () => {
  return (
    <div className="container my-4">
      <h1>Manage Users</h1>
      <p>Onboard new employees, assign roles, and manage permissions.</p>
      <UserForm />
      {/* Additional UI for listing/updating/deleting users can be added here */}
    </div>
  );
};

export default AdminUsers;

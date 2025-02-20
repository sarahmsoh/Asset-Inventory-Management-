// frontend/src/pages/AdminUsers.js
import React from 'react';
import UserForm from '../components/UserForm';

const AdminUsers = () => {
  return (
    <div>
      <h1>Manage Users</h1>
      <UserForm />
      {/* Add user list display logic here if needed */}
    </div>
  );
};

export default AdminUsers;
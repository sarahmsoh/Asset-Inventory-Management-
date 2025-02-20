// frontend/src/components/AdminDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import UserForm from './UserForm';
import AssetForm from './AssetForm';

const AdminDashboard = () => {
  const { role } = useSelector((state) => state.auth);
  if (role !== 'admin') return <p>Access Denied</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserForm />
      <AssetForm />
    </div>
  );
};

export default AdminDashboard;
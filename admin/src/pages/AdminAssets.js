// src/pages/AdminAssets.js
import React from 'react';
import AssetForm from '../components/AssetForm';

const AdminAssets = () => {
  return (
    <div className="container my-4">
      <h1>Manage Assets</h1>
      <p>Add new assets, update existing assets, and assign assets to departments.</p>
      <AssetForm />
      {/* Placeholder for asset list or details */}
    </div>
  );
};

export default AdminAssets;

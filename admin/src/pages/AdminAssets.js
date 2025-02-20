// frontend/src/pages/AdminAssets.js
import React from 'react';
import AssetForm from '../components/AssetForm';

const AdminAssets = () => {
  return (
    <div>
      <h1>Manage Assets</h1>
      <AssetForm />
      {/* Add asset list display logic here if needed */}
    </div>
  );
};

export default AdminAssets;
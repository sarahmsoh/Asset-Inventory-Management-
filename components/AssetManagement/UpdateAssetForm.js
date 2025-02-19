// UpdateAssetForm.js

import React, { useState, useEffect } from 'react';
import { getAssets, updateAsset } from '../DataLogic/assetLogic';

const UpdateAssetForm = ({ assetId }) => {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    // Fetch asset by ID to pre-fill form
    getAssets().then((assets) => {
      const selectedAsset = assets.find((asset) => asset.id === assetId);
      setAsset(selectedAsset);
    });
  }, [assetId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAsset(asset.id, asset)
      .then((response) => {
        if (response.success) {
          alert('Asset updated successfully');
        }
      })
      .catch((error) => {
        alert('Error updating asset');
      });
  };

  if (!asset) return <div>Loading...</div>;

  return (
    <div>
      <h2>Update Asset</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Asset Name</label>
          <input
            type="text"
            value={asset.name}
            onChange={(e) => setAsset({ ...asset, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={asset.category}
            onChange={(e) => setAsset({ ...asset, category: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={asset.quantity}
            onChange={(e) => setAsset({ ...asset, quantity: e.target.value })}
            min="1"
            required
          />
        </div>
        <button type="submit">Update Asset</button>
      </form>
    </div>
  );
};

export default UpdateAssetForm;

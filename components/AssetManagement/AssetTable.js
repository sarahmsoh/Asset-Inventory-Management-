// AssetTable.js

import React, { useState, useEffect } from 'react';
import { getAssets } from '../DataLogic/assetLogic';

const AssetTable = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // Fetch all assets
    getAssets().then(setAssets);
  }, []);

  return (
    <div>
      <h2>All Assets</h2>
      <table>
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.category}</td>
              <td>{asset.quantity}</td>
              <td>
                {/* Actions like Update or Delete can be added here */}
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;

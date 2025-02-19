import React, { useState, useEffect } from 'react';
import assetLogic from '../DataLogic/assetLogic';  // Import default export

const AssetManagement = () => {
  const [assets, setAssets] = useState([]); // State to store assets
  const [assetId, setAssetId] = useState(null); // State to store the ID of the asset being updated
  const [assetName, setAssetName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all assets on initial load
    assetLogic.getAssets()
      .then((data) => {
        if (Array.isArray(data)) {
          setAssets(data);
        } else {
          setAssets([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching assets:', err);
        setError('Failed to load assets');
      });
  }, []);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const assetData = { name: assetName, category, quantity, image };
    assetLogic.addAsset(assetData)
      .then((response) => {
        if (response.success) {
          setAssets([...assets, response.asset]); // Add new asset to state
          alert('Asset added successfully');
        }
      })
      .catch((error) => {
        alert('Error adding asset');
      });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedAsset = { id: assetId, name: assetName, category, quantity, image };
    assetLogic.updateAsset(updatedAsset)
      .then((response) => {
        if (response.success) {
          setAssets(
            assets.map((asset) => (asset.id === assetId ? response.asset : asset))
          ); // Update asset in state
          alert('Asset updated successfully');
          setAssetId(null); // Clear the assetId to switch back to adding mode
        }
      })
      .catch((error) => {
        alert('Error updating asset');
      });
  };

  const handleDelete = (id) => {
    assetLogic.deleteAsset(id)
      .then((response) => {
        if (response.success) {
          setAssets(assets.filter((asset) => asset.id !== id)); // Remove deleted asset from state
          alert('Asset deleted successfully');
        }
      })
      .catch((error) => {
        alert('Error deleting asset');
      });
  };

  const handleSelectAsset = (id) => {
    const selectedAsset = assets.find((asset) => asset.id === id);
    if (selectedAsset) {
      setAssetId(selectedAsset.id);
      setAssetName(selectedAsset.name);
      setCategory(selectedAsset.category);
      setQuantity(selectedAsset.quantity);
      setImage(selectedAsset.image);
    }
  };

  return (
    <div>
      <h2>Asset Management</h2>

      {/* Add or Update Asset Form */}
      <form onSubmit={assetId ? handleUpdateSubmit : handleAddSubmit}>
        <div>
          <label>Asset Name</label>
          <input
            type="text"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>
        <div>
          <label>Asset Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">{assetId ? 'Update Asset' : 'Add Asset'}</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Assets Table */}
      <h3>All Assets</h3>
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
          {assets.length > 0 ? (
            assets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.name}</td>
                <td>{asset.category}</td>
                <td>{asset.quantity}</td>
                <td>
                  <button onClick={() => handleSelectAsset(asset.id)}>Update</button>
                  <button onClick={() => handleDelete(asset.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No assets available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssetManagement;

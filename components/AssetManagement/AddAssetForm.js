import React, { useState } from 'react';
import assetLogic from '../DataLogic/assetLogic';  // Correct import for default export

const AddAssetForm = () => {
  const [assetName, setAssetName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const assetData = { name: assetName, category, quantity, image };

    // Use assetLogic.addAsset to call the addAsset function
    assetLogic.addAsset(assetData)
      .then((response) => {
        if (response.success) {
          alert('Asset added successfully');
        }
      })
      .catch((error) => {
        alert('Error adding asset');
      });
  };

  return (
    <div>
      <h2>Add New Asset</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
};

export default AddAssetForm;

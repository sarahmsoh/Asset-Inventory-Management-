// frontend/src/components/AssetForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsset } from '../redux/adminSlice';

const AssetForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', category: '', image_url: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAsset(formData));
    setFormData({ name: '', category: '', image_url: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Asset Name"
      />
      <input
        type="text"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        placeholder="Category"
      />
      <input
        type="text"
        value={formData.image_url}
        onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
        placeholder="Image URL (optional)"
      />
      <button type="submit">Add Asset</button>
    </form>
  );
};

export default AssetForm;
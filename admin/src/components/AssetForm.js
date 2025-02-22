// frontend/src/components/AssetForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsset } from '../redux/assetsSlice'; // Updated import

const AssetForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    department: '',
    urgency: 'Medium',
    image_url: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the asset addition action (simulated in our mock backend)
    dispatch(addAsset(formData));
    // Reset form fields
    setFormData({
      name: '',
      category: '',
      department: '',
      urgency: 'Medium',
      image_url: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      {/* Asset Name */}
      <div className="mb-3">
        <label className="form-label">Asset Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          placeholder="Enter asset name"
          required
        />
      </div>

      {/* Category */}
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        >
          <option value="">Select Category</option>
          <option value="IT Equipment">IT Equipment</option>
          <option value="Furniture">Furniture</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Department */}
      <div className="mb-3">
        <label className="form-label">Department</label>
        <select
          className="form-select"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
          required
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Procurement">Procurement</option>
          <option value="Operations">Operations</option>
        </select>
      </div>

      {/* Urgency Level */}
      <div className="mb-3">
        <label className="form-label">Urgency Level</label>
        <select
          className="form-select"
          value={formData.urgency}
          onChange={(e) =>
            setFormData({ ...formData, urgency: e.target.value })
          }
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Image URL */}
      <div className="mb-3">
        <label className="form-label">Image URL (optional)</label>
        <input
          type="text"
          className="form-control"
          value={formData.image_url}
          onChange={(e) =>
            setFormData({ ...formData, image_url: e.target.value })
          }
          placeholder="Enter image URL"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Asset
      </button>
    </form>
  );
};

export default AssetForm;

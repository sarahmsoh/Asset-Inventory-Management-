// src/components/UserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/usersSlice'; // Updated import

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '', role: 'employee' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({ username: '', password: '', role: 'employee' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          placeholder="Enter username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <select
          className="form-select"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="admin">Admin</option>
          <option value="procurement">Procurement</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;

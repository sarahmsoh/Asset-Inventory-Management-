// frontend/src/components/UserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/adminSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '', role: 'employee' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({ username: '', password: '', role: 'employee' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        placeholder="Username"
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
      />
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="admin">Admin</option>
        <option value="procurement">Procurement</option>
        <option value="employee">Employee</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
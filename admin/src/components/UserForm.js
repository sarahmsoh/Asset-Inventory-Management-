import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/usersSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', role: 'employee', department: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim()) {
      setError('Username is required.');
      return;
    }
    try {
      await dispatch(addUser(formData)).unwrap();
      // Reset all form fields including department
      setFormData({ username: '', role: 'employee', department: '' });
      setError(null);
    } catch (err) {
      setError('Failed to add user. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          id="username"
          type="text"
          className="form-control"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          placeholder="Enter username"
          required
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select
          id="role"
          className="form-select"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="admin">Admin</option>
          <option value="procurement">Procurement</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      
      {/* New Department Input Field */}
      <div className="mb-3">
        <label htmlFor="department" className="form-label">Department</label>
        <input
          id="department"
          type="text"
          className="form-control"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          placeholder="Enter department"
        />
      </div>
      
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;

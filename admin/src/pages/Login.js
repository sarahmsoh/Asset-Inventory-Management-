// src/pages/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';

const Login = () => {
  const [credentials, setCredentialsState] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      const token = 'fake-jwt-token';
      localStorage.setItem('token', token);
      // Hard-coding 'admin' role for demo
      dispatch(setCredentials({ token, role: 'admin' }));
    }, 500);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleLogin} className="border p-4 bg-light rounded" style={{ minWidth: '300px' }}>
        <h2 className="mb-3">Login</h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={credentials.username}
            onChange={(e) => setCredentialsState({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={credentials.password}
            onChange={(e) => setCredentialsState({ ...credentials, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

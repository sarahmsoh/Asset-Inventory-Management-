import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';
import { mockUsers } from '../mocks/data';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication
    const user = mockUsers.find(u => 
      u.username === credentials.username && 
      u.password === credentials.password
    );

    if (user) {
      dispatch(setCredentials({
        token: 'fake-jwt-token',
        role: user.role,
        user: { id: user.id, name: user.name }
      }));
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleLogin} className="border p-4 bg-light rounded" style={{ minWidth: '300px' }}>
        <h2 className="mb-3">Asset Manager Login</h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            required
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
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
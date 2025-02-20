// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';

const Login = () => {
  const [credentials, setCredentialsState] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API call for login with a delay
    setTimeout(() => {
      const token = 'fake-jwt-token';
      localStorage.setItem('token', token);
      // In a real scenario, the role would be decoded from the token or fetched from an API.
      dispatch(setCredentials({ token, role: 'admin' }));
    }, 500);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentialsState({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentialsState({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
 import axios from 'axios';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('', { name, password })
      .then(response => {
        console.log(response.data);
        // Handle login response here
      })
      .catch(error => {
        console.error(error);
        // Handle login error here
      });

    if (name && password) {
      // Handle login directly here (e.g., setting a logged-in state)
      localStorage.setItem('isLoggedIn', 'true'); // Save login status in localStorage
      navigate('/home'); // Redirect to the home page after login
    } else {
      alert('Please enter your username and password');
    }
  };

  return (
    

    <div className='login'>
       <p>Hello User <br></br>Please log in first to gain access.</p>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='loginForm'>
        <div className='formGroup'>
          <label htmlFor="username" className='label'>Name:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={handleUsernameChange}
            className={Login}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="password" className='label'>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={Login}
            required
          />
        </div>
        <select class="form-select" aria-label="Default select example">
           <option selected>Roles</option>
           <option value="1">Admin</option>
           <option value="2">Manager</option>
           <option value="3">Employee</option>
        </select>
        <button type="submit" className='loginButton'>Login</button>
      </form>
    </div>
  );
}

export default Login;

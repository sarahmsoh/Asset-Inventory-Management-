// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCredentials } from '../redux/authSlice';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ username: '' }); // No password
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Placeholder for backend API call
//     // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) })
//     // For now, simulate backend response
//     const mockResponse = {
//       token: 'backend-provided-token',
//       role: 'admin', // Assume admin for testing; backend will set this
//       user: { id: 'user1', name: 'John Doe' },
//     };
//     dispatch(setCredentials(mockResponse));
//     localStorage.setItem('auth', JSON.stringify(mockResponse));
//     navigate('/admin/dashboard');
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <form onSubmit={handleLogin} className="border p-4 bg-light rounded" style={{ minWidth: '300px' }}>
//         <h2 className="mb-3">Asset Manager Login</h2>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username</label>
//           <input
//             id="username"
//             type="text"
//             className="form-control"
//             required
//             value={credentials.username}
//             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//           />
//         </div>
//         {/* Password field removed; handled by backend */}
//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
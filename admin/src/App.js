// frontend/src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout } from './redux/authSlice';
import Login from './pages/Login';
import AdminDashboard from './components/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminAssets from './pages/AdminAssets';

const App = () => {
  const { token, role } = useSelector((state) => state.auth); // Get auth state from Redux
  const dispatch = useDispatch();

  // Check for existing token on app load (e.g., persisted in localStorage)
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Assuming token contains role info; in practice, decode JWT or fetch user info
      dispatch(setCredentials({ token: storedToken, role: 'admin' })); // Simplified for demo
    }
  }, [dispatch]);

  // PrivateRoute component to restrict access based on role
  const PrivateRoute = ({ children, allowedRole }) => {
    if (!token) return <Navigate to="/login" />;
    if (role !== allowedRole) return <p>Access Denied</p>;
    return children;
  };

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="app">
        {/* Navigation bar for authenticated users */}
        {token && (
          <nav>
            <h2>Asset Management</h2>
            {role === 'admin' && (
              <>
                <a href="/admin/users">Manage Users</a> |{' '}
                <a href="/admin/assets">Manage Assets</a> |{' '}
              </>
            )}
            <button onClick={handleLogout}>Logout</button>
          </nav>
        )}

        {/* Define routes */}
        <Routes>
          {/* Public route */}
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/admin" />}
          />

          {/* Admin-only routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRole="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <PrivateRoute allowedRole="admin">
                <AdminUsers />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/assets"
            element={
              <PrivateRoute allowedRole="admin">
                <AdminAssets />
              </PrivateRoute>
            }
          />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to={token ? '/admin' : '/login'} />} />
          <Route path="*" element={<p>404 - Page Not Found</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
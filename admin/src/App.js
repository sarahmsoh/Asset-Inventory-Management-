// src/App.js
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout } from './redux/authSlice';

import Header from './components/Header';
import Sidebar from './components/Sidebar';


import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminAssets from './pages/AdminAssets';
import AdminRequests from './pages/AdminRequests';
import AuditLogs from './pages/AuditLogs';
import SystemConfig from './pages/SystemConfig';
import Reports from './pages/Reports';

// PrivateRoute component for role-based access
const PrivateRoute = ({ children, allowedRole }) => {
  const { token, role } = useSelector((state) => state.auth);
  if (!token) return <Navigate to="/login" />;
  if (role !== allowedRole)
    return <p className="text-center mt-5">Access Denied</p>;
  return children;
};

// AdminLayout uses the Header and sidebars to wrap admin routes
const AdminLayout = () => {
  const location = useLocation();

  // Determine the active section from the pathname (e.g., "/admin/assets" → "assets")
  const path = location.pathname;
  let activeSection = '';
  if (path.includes('/admin/dashboard')) activeSection = 'dashboard';
  else if (path.includes('/admin/users')) activeSection = 'users';
  else if (path.includes('/admin/assets')) activeSection = 'assets';
  else if (path.includes('/admin/requests')) activeSection = 'requests';
  else if (path.includes('/admin/audit-logs')) activeSection = 'audit-logs';
  else if (path.includes('/admin/system-config')) activeSection = 'system-config';
  else if (path.includes('/admin/reports')) activeSection = 'reports';

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Primary Sidebar */}
          <div className="col-2 p-0">
            <Sidebar handleLogout={() => {}} />
          </div>
          {/* Secondary Sidebar (if an active section exists) */}
          {activeSection && (
            <div className="col-2 p-0">
              {/* <SecondarySidebar activeSection={activeSection} /> */}
            </div>
          )}
          {/* Main Content */}
          <div className={activeSection ? 'col-8' : 'col-10'}>
            <Routes>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/assets" element={<AdminAssets />} />
              <Route path="/admin/requests" element={<AdminRequests />} />
              <Route path="/admin/audit-logs" element={<AuditLogs />} />
              <Route path="/admin/system-config" element={<SystemConfig />} />
              <Route path="/admin/reports" element={<Reports />} />
              <Route path="/" element={<Navigate to="/admin/dashboard" />} />
              <Route path="*" element={<p>404 - Page Not Found</p>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        dispatch(setCredentials({ token: storedToken, role: 'admin' }));
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, [dispatch]);

  return (
    <Router>
      {token ? (
        <PrivateRoute allowedRole="admin">
          <AdminLayout />
        </PrivateRoute>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;

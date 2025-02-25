import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminAssets from './pages/AdminAssets';
import AdminRequests from './pages/AdminRequests';
import AuditLogs from './pages/AuditLogs';
import SystemConfig from './pages/SystemConfig';
import Reports from './pages/Reports';

const AdminLayout = () => (
  <div>
    <Header />
    <div className="container-fluid" style={{ paddingTop: '120px' }}>
      <div className="row">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-10">
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

const App = () => {
  return (
    <Router>
      <AdminLayout />
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard'; // Admin Dashboard
import RequestAsset from './components/RequestForm';
import RequestRepair from './components/RepairForm';
import Login from './components/Login';
import Signup from './components/Signup';
import Requests from './components/Requests';
import Repairs from './components/Repairs';
import Assets from './components/Assets';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <div className="main-content" style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          {/* Default Route - Redirect to Signup */}
          <Route path="/" element={<Navigate to="/signup" />} />

          {/* Signup - Redirects to Dashboard Based on Role */}
          <Route path="/signup" element={<Signup />} />

          {/* Dashboards */}
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Forms */}
          <Route path="/requestform" element={<RequestAsset />} />
          <Route path="/repairform" element={<RequestRepair />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />

          {/* Pages */}
          <Route path="/requests" element={<Requests />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

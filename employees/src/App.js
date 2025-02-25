import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import EmployeeDashboard from './components/EmployeeDashboard';
import RequestAsset from './components/RequestForm';
import RequestRepair from './components/RepairForm';
import Login from './components/Login';
import Signup from './components/Signup';
import Requests from './components/Requests';  // Import Requests page
import Repairs from './components/Repairs';    // Import Repairs page
import Assets from './components/Assets';      // Import Assets page
import './App.css';
import Home from './components/Home';

const App = () => {
  return (
    <Router>

      <Home />

      {/* <Navbar />
      <Sidebar /> */}

      <div className="main-content" style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          {/* Main Routes */}
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/requestform" element={<RequestAsset />} />
          <Route path="/RepairForm" element={<RequestRepair />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          {/* Additional Routes for Requests, Repairs, and Assets */}
          <Route path="/requests" element={<Requests />} />   {/* Requests page */}
          <Route path="/repairs" element={<Repairs />} />   {/* Repairs page */}
          <Route path="/assets" element={<Assets />} />     {/* Assets page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

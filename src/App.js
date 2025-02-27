import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import DashboardComponent from './EmployeeDashboard.js';
// import RequestFormComponent from './RequestForm.js';

// import EmployeeDashboard from './EmployeeDashboard';
// import RequestFormComponent from './RequestForm';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/request" element={<RequestFormComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/DashboardLayout';
import allocationLogic from './components/DataLogic/allocationLogic';
import ApprovedRequestsPage from './components/RequestManagement/ApproveRequestModal';
import RejectedRequestsPage from './components/RequestManagement/RejectRequestModal';
import './App.css';
import AllocationForm from './components/AssetAllocation/AllocationForm';
import AssetManagement from './components/AssetManagement/AssetManagent';
import AssertAllocationTable from './components/AssetAllocation/AssetAllocationTable';
import PendingRequestsTable from './components/RequestManagement/ApproveRequestModal';
import CompletedRequestsTable from './components/RequestManagement/CompletedRequestsTable';
import Header from './components/Dashboard/header';

function App() {
  const [allocations, setAllocations] = useState([]);  

  useEffect(() => {
    // Fetch allocations when the component 
    allocationLogic.getAllocations()
      .then((data) => setAllocations(data || []))  
      .catch((error) => console.error('Error fetching allocations:', error));
  }, []);

  const handleAllocationSuccess = (newAllocation) => {
    setAllocations((prevAllocations) => [...prevAllocations, newAllocation]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard allocations={allocations} onAllocationSuccess={handleAllocationSuccess} />} 
        />
        <Route path="/approved" element={<ApprovedRequestsPage />} />
        <Route path="/rejected" element={<RejectedRequestsPage />} />
        <Route path="/allocation-assert" element={<AllocationForm />} />
        <Route path="/asset-allocated" element={<AssertAllocationTable />} />
        <Route path="/manage-assets" element={<AssetManagement />} />
        <Route path="/pending-requests" element={<PendingRequestsTable />} />
        
        <Route path="/completed-requests" element={<CompletedRequestsTable />} />
      </Routes>
    </Router>
  );
}

export default App;

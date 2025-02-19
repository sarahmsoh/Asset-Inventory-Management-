import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import NavigationBar from './components/Dashboard/NavigationBar';
import allocationLogic from './components/DataLogic/allocationLogic';  // Assuming allocation logic is imported

function App() {
  const [allocations, setAllocations] = useState([]);  // Initialize as empty array

  useEffect(() => {
    // Fetch allocations when the component mounts
    allocationLogic.getAllocations()
      .then((data) => setAllocations(data || []))  // Ensure the data is always an array
      .catch((error) => console.error('Error fetching allocations:', error));
  }, []);

  // Handle successful allocation from AllocationForm
  const handleAllocationSuccess = (newAllocation) => {
    setAllocations((prevAllocations) => [...prevAllocations, newAllocation]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route 
          path="/dashboard" 
          element={<DashboardLayout allocations={allocations} onAllocationSuccess={handleAllocationSuccess} />} 
        />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

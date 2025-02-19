import React from 'react';
import Sidebar from './Sidebar';
import AllocationForm from '../AssetAllocation/AllocationForm';
import AssertAllocationTable from '../AssetAllocation/AssetAllocationTable';



const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <h2>Welcome to the Dashboard</h2>
      <p>Here you can manage all your assets and requests.</p>
      <Sidebar />
      <AllocationForm />
      <AssertAllocationTable />
    </div>
  );
};

export default DashboardLayout;

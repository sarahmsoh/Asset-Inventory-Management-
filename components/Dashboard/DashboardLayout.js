import React from 'react';
import Sidebar from './Sidebar';
import AllocationForm from '../AssetAllocation/AllocationForm';
import AssertAllocationTable from '../AssetAllocation/AssetAllocationTable';
import AssetManagement from '../AssetManagement/AssetManagent';  
// import PendingRequestTable from '../RequestManagement/PendingRequestsTable'
import ApproveRequestModal from '../RequestManagement/ApproveRequestModal';
//import Filter from '../RequestManagement/Filters';
// import CompletedRequestsTable from '../RequestManagement/CompletedRequestsTable';
import RejectedRequestModal from '../RequestManagement/RejectRequestModal'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <h2>Welcome to the Dashboard</h2>
      <p>Here you can manage all your assets and requests.</p>
      <Sidebar />
      <AllocationForm />
      <AssertAllocationTable />
      <AssetManagement />
      {/* <PendingRequestTable /> */}
      <ApproveRequestModal />
      <RejectedRequestModal />
      {/* <Filter /> */}
      {/* <CompletedRequestsTable /> */}
    
    </div>
  );
};

export default DashboardLayout;

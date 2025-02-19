import React, { useState, useEffect } from 'react';
import ApproveRequestModal from './ApproveRequestModal';
import RejectRequestModal from './RejectRequestModal';
import Filters from './Filters'; // Import the Filters component

const PendingRequestsTable = ({ requests = [] }) => {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState(requests);

  // Handle the filter change from the Filters component
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Apply filter based on selected filter
  useEffect(() => {
    if (selectedFilter === '') {
      setFilteredRequests(pendingRequests); // No filter, show all requests
    } else {
      setFilteredRequests(
        pendingRequests.filter((request) => request.urgency === selectedFilter)
      );
    }
  }, [selectedFilter, pendingRequests]);

  // Open modals for Approve/Reject
  const openApproveModal = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const openRejectModal = (request) => {
    setSelectedRequest(request);
    setShowRejectModal(true);
  };

  // Handle approve action
  const handleApprove = (requestId) => {
    const updatedRequest = filteredRequests.find((request) => request.id === requestId);
    updatedRequest.status = 'approved'; // Update the request status

    // Move the request to the approved list
    setApprovedRequests([...approvedRequests, updatedRequest]);

    // Remove it from the pending list
    setPendingRequests(pendingRequests.filter((request) => request.id !== requestId));
    
    console.log('Request Approved:', requestId);
    setShowApproveModal(false);
  };

  // Handle reject action
  const handleReject = (requestId) => {
    const updatedRequest = filteredRequests.find((request) => request.id === requestId);
    updatedRequest.status = 'rejected'; // Update the request status

    // Move the request to the rejected list
    setRejectedRequests([...rejectedRequests, updatedRequest]);

    // Remove it from the pending list
    setPendingRequests(pendingRequests.filter((request) => request.id !== requestId));
    
    console.log('Request Rejected:', requestId);
    setShowRejectModal(false);
  };

  // Handle the "Pending" button click (if needed, for your use case)
  const handlePending = (requestId) => {
    console.log('Request set to Pending:', requestId);
    // You can either leave it in the pending list or reassign it based on your logic
  };

  return (
    <div className="pending-requests-table">
      <h2>Pending Requests</h2>

      {/* Filters component for handling urgency filtering */}
      <Filters onFilterChange={handleFilterChange} />

      {/* Display message if no requests */}
      {filteredRequests.length === 0 ? (
        <p>No pending requests available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Employee Name</th>
              <th>Asset Type</th>
              <th>Reason</th>
              <th>Urgency</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.employeeName}</td>
                <td>{request.assetType}</td>
                <td>{request.reason}</td>
                <td>{request.urgency}</td>
                <td>
                  <button onClick={() => openApproveModal(request)}>Approve</button>
                  <button onClick={() => openRejectModal(request)}>Reject</button>
                  <button onClick={() => handlePending(request.id)}>Pending</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Approve Request Modal */}
      {showApproveModal && (
        <ApproveRequestModal
          request={selectedRequest}
          onApprove={handleApprove}
          onClose={() => setShowApproveModal(false)}
        />
      )}

      {/* Reject Request Modal */}
      {showRejectModal && (
        <RejectRequestModal
          request={selectedRequest}
          onReject={handleReject}
          onClose={() => setShowRejectModal(false)}
        />
      )}

      {/* You can render approved/rejected requests here if you want */}
      {/* <div>
        <h3>Approved Requests</h3>
        {approvedRequests.length > 0 ? (
          <ul>
            {approvedRequests.map((req) => (
              <li key={req.id}>{req.employeeName} - {req.assetType}</li>
            ))}
          </ul>
        ) : (
          <p>No approved requests</p>
        )}
      </div> */}

      {/* <div>
        <h3>Rejected Requests</h3>
        {rejectedRequests.length > 0 ? (
          <ul>
            {rejectedRequests.map((req) => (
              <li key={req.id}>{req.employeeName} - {req.assetType}</li>
            ))}
          </ul>
        ) : (
          <p>No rejected requests</p>
        )}
      </div> */}
    </div>
  );
};

export default PendingRequestsTable;

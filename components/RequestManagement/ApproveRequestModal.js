import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import ApproveRequestModal from './ApproveRequestModal';
import RejectRequestModal from './RejectRequestModal';
import Filters from './Filters'; // Import the Filters component

const PendingRequestsTable = ({ requests = [] }) => {
  const navigate = useNavigate();  // Hook for navigation
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [selectedFilter, setSelectedFilter] = useState('');

  // Handle the filter change from the Filters component
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Apply filter based on selected filter
  useEffect(() => {
    if (selectedFilter === '') {
      setFilteredRequests(requests); // No filter, show all requests
    } else {
      setFilteredRequests(
        requests.filter((request) => request.urgency === selectedFilter)
      );
    }
  }, [selectedFilter, requests]);

  // Open modals for Approve/Reject
  const openApproveModal = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const openRejectModal = (request) => {
    setSelectedRequest(request);
    setShowRejectModal(true);
  };

  // Handle approve action and navigate to approved page
  const handleApprove = (requestId) => {
    console.log('Request Approved:', requestId);
    // Post the request data to the approved page
    navigate('/approved', { state: { requestId, status: 'approved' } }); // Navigate to approved page

    setShowApproveModal(false);
  };

  // Handle reject action and navigate to rejected page
  const handleReject = (requestId) => {
    console.log('Request Rejected:', requestId);
    // Post the request data to the rejected page
    navigate('/rejected', { state: { requestId, status: 'rejected' } }); // Navigate to rejected page

    setShowRejectModal(false);
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
    </div>
  );
};

export default PendingRequestsTable;

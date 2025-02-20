import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import ApproveRequestModal from './ApproveRequestModal';
import RejectRequestModal from './RejectRequestModal';
import Filters from './Filters'; 

const PendingRequestsTable = ({ requests = [] }) => {
  const navigate = useNavigate(); 
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    if (selectedFilter === '') {
      setFilteredRequests(requests); 
    } else {
      setFilteredRequests(
        requests.filter((request) => request.urgency === selectedFilter)
      );
    }
  }, [selectedFilter, requests]);

  const openApproveModal = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const openRejectModal = (request) => {
    setSelectedRequest(request);
    setShowRejectModal(true);
  };

  const handleApprove = (requestId) => {
    console.log('Request Approved:', requestId);
    navigate('/approved', { state: { requestId, status: 'approved' } }); 

    setShowApproveModal(false);
  };

  const handleReject = (requestId) => {
    console.log('Request Rejected:', requestId);
    navigate('/rejected', { state: { requestId, status: 'rejected' } }); 

    setShowRejectModal(false);
  };

  return (
    <div className="pending-requests-table">
      <h2>Pending Requests</h2>
      <Filters onFilterChange={handleFilterChange} />
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

      {showApproveModal && (
        <ApproveRequestModal
          request={selectedRequest}
          onApprove={handleApprove}
          onClose={() => setShowApproveModal(false)}
        />
      )}

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

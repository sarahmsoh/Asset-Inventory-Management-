import React, { useState } from 'react';
import ApproveRequestModal from './ApproveRequestModal';
import RejectRequestModal from './RejectRequestModal';

const PendingRequestsTable = ({ requests = [] }) => {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

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
    // Integrate your approval logic with the backend here
  };

  const handleReject = (requestId) => {
    console.log('Request Rejected:', requestId);
    // Integrate your rejection logic with the backend here
  };

  return (
    <div className="pending-requests-table">
      <h2>Pending Requests</h2>

      {/* Check if requests is an array and has data */}
      {requests.length === 0 ? (
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
            {requests.map((request) => (
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

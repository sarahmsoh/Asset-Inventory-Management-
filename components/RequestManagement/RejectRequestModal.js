import React from 'react';

const RejectRequestModal = ({ request, onReject, onClose }) => {
  const handleReject = () => {
    onReject(request.id); // Pass request ID to the handler
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Reject Request</h2>
        <p>Are you sure you want to reject this request?</p>
        <p><strong>Employee:</strong> {request.employeeName}</p>
        <p><strong>Asset Type:</strong> {request.assetType}</p>
        <p><strong>Reason:</strong> {request.reason}</p>
        <button onClick={handleReject}>Reject</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default RejectRequestModal;

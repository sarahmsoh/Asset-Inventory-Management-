import React, { useState } from 'react';

const ApproveRequestModal = ({ request, onApprove, onClose }) => {
  const [comments, setComments] = useState('');

  const handleApprove = () => {
    onApprove(request.id, comments);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Approve Request</h2>
        <p>Are you sure you want to approve this request?</p>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Add your comments"
        />
        <button onClick={handleApprove}>Approve</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ApproveRequestModal;

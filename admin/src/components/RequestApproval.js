import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { approveRequest, rejectRequest } from '../../slices/requestSlice';

const RequestApprovalPanel = ({ request }) => {
  const dispatch = useDispatch();
  const [decisionNote, setDecisionNote] = useState('');

  const handleApprove = () => {
    dispatch(approveRequest({
      requestId: request.id,
      note: decisionNote
    }));
  };

  const handleReject = () => {
    dispatch(rejectRequest({
      requestId: request.id,
      note: decisionNote
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
      <div className="mb-4">
        <h4 className="font-medium mb-2">{request.employeeName} - {request.type}</h4>
        <p className="text-gray-600 mb-2">{request.reason}</p>
        <p className="text-sm text-gray-500">
          Urgency: <span className="capitalize">{request.urgency}</span>
        </p>
      </div>

      <textarea
        value={decisionNote}
        onChange={(e) => setDecisionNote(e.target.value)}
        placeholder="Add approval/rejection notes..."
        className="w-full p-2 border rounded mb-4"
        rows="3"
      />

      <div className="flex gap-2 justify-end">
        <button
          onClick={handleReject}
          className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Reject
        </button>
        <button
          onClick={handleApprove}
          className="px-4 py-2 bg-green-100 text-green-600 rounded hover:bg-green-200"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default RequestApprovalPanel;
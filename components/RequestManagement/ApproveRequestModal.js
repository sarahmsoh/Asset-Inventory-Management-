import React, { useEffect, useState } from 'react';
import ApproveRequest from './ApproveRequestModal';
import RejectRequest from './RejectRequestModal';
import Filters from './Filters';

const PendingRequestTable = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    fetch() // Adjust the API URL
      .then(response => response.json())
      .then(data => {
        setRequests(data);
        setFilteredRequests(data);
      })
      .catch(error => console.error("Error fetching requests:", error));
  }, []);

  const handleApprove = (requestId, comment) => {
    setRequests(prev => prev.map(req => req.id === requestId ? { ...req, status: "approved" } : req));
    setFilteredRequests(prev => prev.filter(req => req.id !== requestId));
    console.log(`Request ${requestId} approved. Comment: ${comment}`);
    setSelectedRequest(null);
  };

  const handleReject = (requestId, comment) => {
    fetch("http://localhost:5000/rejectedRequests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId, comment })
    })
      .then(() => {
        setRequests(prev => prev.filter(req => req.id !== requestId));
        setFilteredRequests(prev => prev.filter(req => req.id !== requestId));
        console.log(`Request ${requestId} rejected.`);
        setSelectedRequest(null);
      })
      .catch(error => console.error("Error rejecting request:", error));
  };

  const handleFilterChange = (filter) => {
    if (filter === '') {
      setFilteredRequests(requests);
    } else {
      setFilteredRequests(requests.filter(request => request.urgency === filter));
    }
  };

  return (
    <div>
      <h2>Pending Requests</h2>
      <Filters onFilterChange={handleFilterChange} />
      {filteredRequests.length === 0 ? <p>No pending requests.</p> : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Asset</th>
              <th>Reason</th>
              <th>Urgency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(request => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.employeeName}</td>
                <td>{request.assetType}</td>
                <td>{request.reason}</td>
                <td>{request.urgency}</td>
                <td>
                  <button onClick={() => { setSelectedRequest(request); setActionType("approve"); }}>Approve</button>
                  <button onClick={() => { setSelectedRequest(request); setActionType("reject"); }}>Reject</button>
                  <button>Pending</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedRequest && (
        <div className="modal">
          {actionType === "approve" ? (
            <ApproveRequest 
              request={selectedRequest} 
              onApprove={handleApprove} 
              onCancel={() => setSelectedRequest(null)} 
            />
          ) : (
            <RejectRequest 
              request={selectedRequest} 
              onReject={handleReject} 
              onCancel={() => setSelectedRequest(null)} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PendingRequestTable;

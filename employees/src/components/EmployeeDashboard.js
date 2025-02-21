// src/pages/EmployeeDashboard.js
import React, { useState, useEffect } from 'react';
import { getEmployeeRequests } from './api.js';

const EmployeeDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to view your requests.');
        setLoading(false);
        return;
      }

      try {
        const data = await getEmployeeRequests(token);
        setRequests(data);
      } catch (err) {
        setError('Failed to fetch requests: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Your Asset Requests</h2>
      {loading && <p>Loading requests...</p>}
      {error && <p>{error}</p>}
      <ul>
        {requests.length > 0 ? (
          requests.map((request) => (
            <li key={request.id}>
              <p>Reason: {request.reason}</p>
              <p>Status: {request.status}</p>
              <p>Urgency: {request.urgency}</p>
            </li>
          ))
        ) : (
          <p>No requests found.</p>
        )}
      </ul>
    </div>
  );
};

export default EmployeeDashboard;

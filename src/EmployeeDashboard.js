import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequests } from '../redux/slices/requestSlice';

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const { requests, status } = useSelector((state) => state.requests);

  useEffect(() => {
    if (token) {
      dispatch(fetchRequests(token));
    }
  }, [dispatch, token]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading requests</div>;

  return (
    <div>
      <h1>My Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <div>{request.request_type} - {request.status}</div>
            <div>Urgency: {request.urgency}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardComponent;

import React from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateRequest } from '../redux/requestsSlice'; // Correct path

const PriorityRequests = ({ requests }) => {
  const dispatch = useDispatch();

  const handleReview = (requestId) => {
    // Example approval logic
    dispatch(updateRequest({
      id: requestId,
      status: 'approved'
    }));
  };

  return (
    <Table striped hover className="mb-0">
      <thead>
        <tr>
          <th>Asset</th>
          <th>User</th>
          <th>Urgency</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {requests.map(request => (
          <tr key={request.id}>
            <td>{request.assetName}</td>
            <td>{request.userName}</td>
            <td>
              <Badge bg={request.urgency === 'high' ? 'danger' : 'warning'}>
                {request.urgency}
              </Badge>
            </td>
            <td>
              <Button 
                variant="outline-primary" 
                size="sm"
                onClick={() => handleReview(request.id)}
              >
                Review
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PriorityRequests;
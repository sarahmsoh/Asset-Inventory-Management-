import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { updateRequest } from '../redux/requestsSlice';

const AdminRequests = () => {
  const dispatch = useDispatch();
  const requests = useSelector(state => state.requests.items || []);
  const users = useSelector(state => state.users.items || []);
  const assets = useSelector(state => state.assets.items || []);

  // Enhance requests with user and asset names
  const enhancedRequests = requests.map(request => ({
    ...request,
    userName: users.find(u => u.id === request.userId)?.name || 'Unknown',
    assetName: request.assetId
      ? assets.find(a => a.id === request.assetId)?.name
      : 'New Asset Request',
  }));

  // Separate requests by status
  const pendingRequests = enhancedRequests.filter(r => r.status === 'pending');
  const approvedRequests = enhancedRequests.filter(r => r.status === 'approved');
  const rejectedRequests = enhancedRequests.filter(r => r.status === 'rejected');

  const handleAction = (requestId, status) => {
    dispatch(updateRequest({ id: requestId, status }));
  };

  return (
    <div
      className="container-fluid p-4"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <h1 className="mb-4">Manage Requests</h1>
      <Row>
        {/* Pending Requests Card */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header style={{ backgroundColor: '#ffc107' }}>
              <h4 className="mb-0 text-center">Pending Requests</h4>
            </Card.Header>
            <Card.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {pendingRequests.length ? (
                pendingRequests.map(request => (
                  <Card key={request.id} className="mb-3">
                    <Card.Body>
                      <p>
                        <strong>ID:</strong> {request.id}
                      </p>
                      <p>
                        <strong>User:</strong> {request.userName}
                      </p>
                      <p>
                        <strong>Asset:</strong> {request.assetName}
                      </p>
                      <p>
                        <strong>Type:</strong> {request.type}
                      </p>
                      <p>
                        <strong>Urgency:</strong> {request.urgency}
                      </p>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => handleAction(request.id, 'approved')}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleAction(request.id, 'rejected')}
                        >
                          Reject
                        </Button>
                        <Button
                          variant="outline-info"
                          size="sm"
                          onClick={() => console.log(`Reassign ${request.id}`)}
                        >
                          Reassign
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="text-center">No pending requests.</p>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Approved Requests Card */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header style={{ backgroundColor: '#28a745' }}>
              <h4 className="mb-0 text-center">Approved Requests</h4>
            </Card.Header>
            <Card.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {approvedRequests.length ? (
                approvedRequests.map(request => (
                  <Card key={request.id} className="mb-3">
                    <Card.Body>
                      <p>
                        <strong>ID:</strong> {request.id}
                      </p>
                      <p>
                        <strong>User:</strong> {request.userName}
                      </p>
                      <p>
                        <strong>Asset:</strong> {request.assetName}
                      </p>
                      <p>
                        <strong>Type:</strong> {request.type}
                      </p>
                      <p>
                        <strong>Urgency:</strong> {request.urgency}
                      </p>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="text-center">No approved requests.</p>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Rejected Requests Card */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header style={{ backgroundColor: '#dc3545' }}>
              <h4 className="mb-0 text-center">Rejected Requests</h4>
            </Card.Header>
            <Card.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {rejectedRequests.length ? (
                rejectedRequests.map(request => (
                  <Card key={request.id} className="mb-3">
                    <Card.Body>
                      <p>
                        <strong>ID:</strong> {request.id}
                      </p>
                      <p>
                        <strong>User:</strong> {request.userName}
                      </p>
                      <p>
                        <strong>Asset:</strong> {request.assetName}
                      </p>
                      <p>
                        <strong>Type:</strong> {request.type}
                      </p>
                      <p>
                        <strong>Urgency:</strong> {request.urgency}
                      </p>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="text-center">No rejected requests.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminRequests;

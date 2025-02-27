import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import UserForm from '../components/UserForm';

const AdminUsers = () => {
  const users = useSelector(state => state.users.items || []);
  const assets = useSelector(state => state.assets.items || []);
  const requests = useSelector(state => state.requests.items || []);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div
      className="container-fluid p-4"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      {/* Header Card */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Manage Users</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                Onboard new employees, assign roles, and manage permissions.
              </Card.Subtitle>
              <UserForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main Content Area */}
      <Row>
        {/* User List Card */}
        <Col md={selectedUser ? 6 : 12} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header>
              <h3 className="mb-0">User List</h3>
            </Card.Header>
            <Card.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              {users.map(user => (
                <Card key={user.id} className="mb-3">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="mb-1">{user.name}</Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {user.username}
                      </Card.Subtitle>
                      <p className="mb-0">Role: {user.role}</p>
                      <p className="mb-0">Department: {user.department}</p>
                    </div>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => handleViewDetails(user)}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* User Details Card */}
        {selectedUser && (
          <Col md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Header>
                <h4 className="mb-0">User Details: {selectedUser.name}</h4>
              </Card.Header>
              <Card.Body>
                <p>
                  <strong>Role:</strong> {selectedUser.role}
                </p>
                <p>
                  <strong>Assigned Assets:</strong>{' '}
                  {assets.filter(a => a.assignedTo === selectedUser.id).length}
                </p>
                <p>
                  <strong>Request History:</strong>{' '}
                  {requests.filter(r => r.userId === selectedUser.id).length} requests
                </p>
                {/* You can add additional controls for editing roles, resetting passwords, etc. */}
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AdminUsers;

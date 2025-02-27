import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PendingRequests from './PendingRequests';
import ApprovedRequests from './ApprovedRequests';
import RejectedRequests from './RejectedRequests';
import RequestStatistics from './RequestStatistics';

const RequestsPage = () => {
  return (
    <Container className="py-4">
      <h1>Requests Management</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>Pending Requests</Card.Header>
            <Card.Body style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <PendingRequests />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>Approved Requests</Card.Header>
            <Card.Body style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <ApprovedRequests />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>Rejected Requests</Card.Header>
            <Card.Body style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <RejectedRequests />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>Request Statistics</Card.Header>
            <Card.Body>
              <RequestStatistics />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestsPage;
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import AssetForm from '../components/AssetForm';

const AdminAssets = () => {
  const assets = useSelector(state => state.assets.items || []);

  return (
    <div
      className="container-fluid p-4"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      {/* Header Card */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h1>Manage Assets</h1>
          <p>
            Add new assets, update existing assets, and assign assets to
            departments.
          </p>
          <AssetForm />
        </Card.Body>
      </Card>

      {/* Assets List Card */}
      <Card className="shadow-sm">
        <Card.Header style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <h3 className="mb-0">Asset List</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            {assets.length > 0 ? (
              assets.map(asset => (
                <Col key={asset.id} md={4} className="mb-4">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>{asset.name}</Card.Title>
                      <Card.Text>
                        <strong>ID:</strong> {asset.id} <br />
                        <strong>Category:</strong> {asset.category} <br />
                        <strong>Status:</strong> {asset.status} <br />
                        <strong>Assigned To:</strong>{' '}
                        {asset.assignedTo || 'Unassigned'}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <div className="d-flex justify-content-between">
                        <Button variant="outline-primary" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline-danger" size="sm">
                          Decommission
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center">No assets available.</p>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminAssets;

import React from 'react';
import { Card } from 'react-bootstrap';
import AssetChart from './AssetChart';

const AssetDistribution = ({ assets }) => (
  <Card>
    <Card.Body>
      <Card.Title>Asset Distribution</Card.Title>
      <AssetChart assets={assets} />
    </Card.Body>
  </Card>
);

export default AssetDistribution;
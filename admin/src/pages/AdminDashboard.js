import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import CriticalAlerts from './AdminDashboard/CriticalAlerts';
import DashboardMetrics from './AdminDashboard/DashboardMetrics';
import PriorityRequests from './AdminDashboard/PriorityRequests';
import AssetDistribution from './AdminDashboard/AssetDistribution';
import QuickActions from './AdminDashboard/QuickActions';
import ActivityLog from './AdminDashboard/ActivityLog';

const AdminDashboard = () => {
  const { assets, requests, users } = useSelector((state) => ({
    assets: state.assets.items || [],
    requests: state.requests.items || [],
    users: state.users.items || []
  }));

  // Calculate metrics
  const metricsData = [
    { 
      icon: 'faBox', 
      title: 'Total Assets', 
      value: assets.length, 
      variant: 'primary' 
    },
    { 
      icon: 'faTicketAlt', 
      title: 'Pending Requests', 
      value: requests.filter(r => r.status === 'pending').length, 
      variant: 'warning' 
    },
    { 
      icon: 'faExclamationTriangle', 
      title: 'Unassigned Assets', 
      value: assets.filter(a => !a.assignedTo).length, 
      variant: 'info' 
    },
    { 
      icon: 'faDollarSign', 
      title: 'Budget Used', 
      value: `$${assets.reduce((sum, a) => sum + (a.cost || 0), 0).toLocaleString()}`, 
      variant: 'success' 
    }
  ];

  // Enhance requests with user/asset data
  const enhancedRequests = requests.map(request => ({
    ...request,
    userName: users.find(u => u.id === request.userId)?.name || 'Unknown',
    assetName: request.assetId 
      ? assets.find(a => a.id === request.assetId)?.name 
      : 'New Asset Request'
  }));

  const criticalAlerts = [
    ...assets.filter(a => a.status === 'needs_repair'),
    ...enhancedRequests.filter(r => r.urgency === 'high')
  ].slice(0, 3);

  const recentRequests = enhancedRequests
    .filter(r => r.status === 'pending')
    .sort((a, b) => (b.urgency === 'high' ? 1 : -1))
    .slice(0, 5);

  return (
    <div className="container-fluid py-4">
      <CriticalAlerts alerts={criticalAlerts} />
      
      <DashboardMetrics metrics={metricsData} />

      <Row className="g-4">
        <Col lg={8}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Priority Requests</Card.Title>
              <PriorityRequests requests={recentRequests} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Row className="g-4">
            <Col xs={12}>
              <QuickActions />
            </Col>
            <Col xs={12}>
              <AssetDistribution assets={assets} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Activity</Card.Title>
              <ActivityLog activities={[]} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
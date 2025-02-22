import React from 'react';
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';

const FinancialInsights = ({ assets }) => {
  const departments = [...new Set(assets.map(a => a.assignedTo ? 'Assigned' : 'Unassigned'))];
  const budgetUtilization = departments.map(dep => ({
    name: dep,
    used: assets.filter(a => (a.assignedTo ? 'Assigned' : 'Unassigned') === dep).reduce((sum, a) => sum + (a.cost || 0), 0),
    total: 10000, // Mock total budget per department
  }));

  const topExpensive = [...assets].sort((a, b) => b.cost - a.cost).slice(0, 5);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Financial Insights</Card.Title>
        <h6>Budget Utilization</h6>
        {budgetUtilization.map((dep, i) => (
          <div key={i} className="mb-3">
            <small>{dep.name}: ${dep.used} / ${dep.total}</small>
            <ProgressBar now={(dep.used / dep.total) * 100} variant="success" />
          </div>
        ))}
        <h6 className="mt-4">Top 5 Expensive Assets</h6>
        <ul>
          {topExpensive.map(a => (
            <li key={a.id}>{a.name} - ${a.cost}</li>
          ))}
        </ul>
        {/* Add line graph and repair costs later */}
      </Card.Body>
    </Card>
  );
};

export default FinancialInsights;
import React from 'react';
import { Card } from 'react-bootstrap';

const ActivityLog = ({ activities }) => (
  <div className="list-group">
    {activities.map(activity => (
      <div key={activity.id} className="list-group-item">
        <small className="text-muted">{activity.timestamp}</small>
        <div>{activity.description}</div>
      </div>
    ))}
    {activities.length === 0 && (
      <div className="text-muted p-3">No recent activity</div>
    )}
  </div>
);

export default ActivityLog;
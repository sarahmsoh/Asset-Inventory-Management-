import React from 'react';

const Content = ({ primaryItem, secondaryItem }) => {
  // Here, you would implement conditional rendering based on primaryItem and secondaryItem
  return (
    <div className="content">
      <h2>Content for {primaryItem} - {secondaryItem || 'Overview'}</h2>
      {/* Example conditional rendering */}
      {primaryItem === 'Assets' && secondaryItem === 'All Assets' && <div>All Assets View</div>}
      {primaryItem === 'Users' && <div>User Management View</div>}
      {primaryItem === 'Requests' && secondaryItem === 'Pending' && <div>Pending Requests</div>}
      {/* Add more conditions as needed */}
    </div>
  );
};

export default Content;
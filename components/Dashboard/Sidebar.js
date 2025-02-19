import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><a href="/dashboard">Overview</a></li>
        <li><a href="/pending-requests">Pending Requests</a></li>
        <li><a href="/completed-requests">Completed Requests</a></li>
        <li><a href="/manage-assets">Manage Assets</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

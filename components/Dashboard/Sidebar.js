import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      <nav>
      <ul>
        <li><a href="/manage-assets">Manage Assets</a></li>
        <li><a href="/pending-requests">Pending Requests</a></li>
        <li><a href="/completed-requests">Completed Requests</a></li>
        <li><a href="/">Exit</a></li>

      </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

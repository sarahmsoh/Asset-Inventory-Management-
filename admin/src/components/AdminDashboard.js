// src/components/Admin/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AdminSidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">Asset Manager</div>
      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" end>Dashboard</NavLink>
        <NavLink to="/admin/users">Manage Users</NavLink>
        <NavLink to="/admin/assets">Assets Inventory</NavLink>
        <NavLink to="/admin/requests">All Requests</NavLink>
        <NavLink to="/admin/reports">Reports</NavLink>
        <button onClick={logout} className="logout-btn">
          Log Out
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
// src/views/Admin/DashboardHome.tsx
import { useGetDashboardStatsQuery } from '../../services/adminService';
import { StatsCard } from '../../components/Admin/StatsCard';

const AdminDashboardHome = () => {
  const { data: stats } = useGetDashboardStatsQuery();

  return (
    <div className="dashboard-home">
      <h1>Admin Dashboard</h1>
      <div className="stats-grid">
        <StatsCard 
          title="Total Assets"
          value={stats?.totalAssets}
          trend={stats?.assetTrend}
        />
        <StatsCard 
          title="Active Users"
          value={stats?.activeUsers}
          trend={stats?.userTrend}
        />
        <StatsCard 
          title="Pending Requests"
          value={stats?.pendingRequests}
          urgencyLevel={stats?.urgencyLevel}
        />
        <StatsCard 
          title="Maintenance Due"
          value={stats?.maintenanceDue}
          status="warning"
        />
      </div>
      
      <div className="charts-section">
        {/* Add charts for asset distribution and request trends */}
      </div>
    </div>
  );
};

export default AdminDashboardHome;
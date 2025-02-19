import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import NotificationBell from './NotificationBell';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Notification Bell */}
        <div className="absolute top-4 right-4">
          <NotificationBell />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
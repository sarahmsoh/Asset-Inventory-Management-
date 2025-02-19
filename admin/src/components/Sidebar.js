import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/admin/assets', label: 'Assets', icon: '💻' },
    { path: '/admin/users', label: 'Users', icon: '👥' },
    { path: '/admin/requests', label: 'Requests', icon: '📋' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 fixed h-full">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center p-3 mb-2 rounded-lg hover:bg-blue-50 ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
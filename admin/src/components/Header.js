import { useDispatch } from 'react-redux';
import { logout } from '../../slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">Asset Management System</h2>
      </div>
      
      <button
        onClick={() => dispatch(logout())}
        className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../slices/userSlice';
import { allocateAsset } from '../../slices/assetSlice';

const AssetAllocationForm = ({ assetId, onClose }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAllocate = () => {
    dispatch(allocateAsset({
      assetId,
      userId: selectedUser
    }));
    onClose();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <h3 className="text-lg font-semibold mb-4">Allocate Asset</h3>
      
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Select Employee</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} ({user.department})
          </option>
        ))}
      </select>

      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleAllocate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={!selectedUser}
        >
          Allocate
        </button>
      </div>
    </div>
  );
};

export default AssetAllocationForm;
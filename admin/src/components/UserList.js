import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../slices/userSlice';

const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserDetails(userId));
  }, [dispatch, userId]);

  if (!currentUser) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{currentUser.name}</h2>
          <p className="text-gray-600 mb-2">Email: {currentUser.email}</p>
          <p className="text-gray-600">
            Role: <span className="capitalize px-2 py-1 bg-blue-100 text-blue-800 rounded">
              {currentUser.role}
            </span>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Assigned Assets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentUser.assets?.map((asset) => (
            <div key={asset.id} className="border p-4 rounded-lg">
              <p className="font-medium">{asset.name}</p>
              <p className="text-sm text-gray-500">{asset.category}</p>
            </div>
          ))}
          {currentUser.assets?.length === 0 && (
            <p className="text-gray-500">No assets assigned</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
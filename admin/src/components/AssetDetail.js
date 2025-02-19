import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAssetDetails } from '../../slices/assetSlice';
import AllocationHistory from './AllocationHistory';

const AssetDetail = () => {
  const { assetId } = useParams();
  const dispatch = useDispatch();
  const { currentAsset } = useSelector((state) => state.assets);

  useEffect(() => {
    dispatch(fetchAssetDetails(assetId));
  }, [dispatch, assetId]);

  if (!currentAsset) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{currentAsset.name}</h2>
          <p className="text-gray-600 mb-2">
            Category: <span className="font-medium">{currentAsset.category}</span>
          </p>
          <p className="text-gray-600">
            Status: <span className={`px-2 py-1 rounded ${currentAsset.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {currentAsset.status}
            </span>
          </p>
        </div>
        <img 
          src={currentAsset.image} 
          alt={currentAsset.name}
          className="w-32 h-32 object-cover rounded-lg"
        />
      </div>

      <AllocationHistory allocations={currentAsset.allocations} />
    </div>
  );
};

export default AssetDetail;
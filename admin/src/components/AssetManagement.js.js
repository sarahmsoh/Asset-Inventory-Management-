// src/views/Admin/AssetManagement.tsx
import { useState } from 'react';
import { AssetForm } from '../../components/Admin/AssetForm';
import { useGetAssetsQuery } from '../../services/assetService';

const AssetManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const { data: assets, refetch } = useGetAssetsQuery();

  const handleEditAsset = (asset: any) => {
    setSelectedAsset(asset);
    setIsEditing(true);
  };

  const assetColumns = [
    { header: 'Asset Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { header: 'Status', accessor: 'status' },
    { header: 'Assigned To', accessor: 'assignedTo' },
    { header: 'Last Maintenance', accessor: 'lastMaintenance' },
    { 
      header: 'Actions',
      accessor: 'actions',
      cell: (row: any) => (
        <div className="actions">
          <button onClick={() => handleEditAsset(row)}>Edit</button>
          <button onClick={() => handleDeleteAsset(row.id)}>Retire</button>
        </div>
      )
    }
  ];

  return (
    <div className="asset-management">
      <div className="header">
        <h2>Asset Inventory</h2>
        <button onClick={() => setIsEditing(true)}>Add New Asset</button>
      </div>

      <DataTable
        columns={assetColumns}
        data={assets || []}
      />

      <AssetForm
        isOpen={isEditing}
        onClose={() => {
          setIsEditing(false);
          setSelectedAsset(null);
        }}
        existingAsset={selectedAsset}
        onSuccess={refetch}
      />
    </div>
  );
};

export default AssetManagement;
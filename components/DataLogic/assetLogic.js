// assetLogic.js
// assetLogic.js

export const getAssets = async () => {
  try {
    const response = await fetch('/api/assets');
    return await response.json();
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
};

export const addAsset = async (assetData) => {
  try {
    const response = await fetch('/api/assets', {
      method: 'POST',
      body: JSON.stringify(assetData),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding asset:', error);
  }
};

// Function to update an asset
const updateAsset = async (assetId, assetData) => {
  try {
    const response = await fetch(`/api/assets/${assetId}`, {
      method: 'PUT',
      body: JSON.stringify(assetData),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating asset:', error);
  }
};

// Function to delete an asset
const deleteAsset = async (assetId) => {
  try {
    const response = await fetch(`/api/assets/${assetId}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    console.error('Error deleting asset:', error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAssets, addAsset, updateAsset, deleteAsset };

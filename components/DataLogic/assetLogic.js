/* eslint-disable import/no-anonymous-default-export */
// assetLogic.js

// Function to fetch all assets
const getAssets = async () => {
  try {
    const response = await fetch('/api/assets');
    return await response.json();  // Return the JSON data from the response
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;  // Re-throw the error to handle it in the component
  }
};

// Function to add a new asset
const addAsset = async (assetData) => {
  try {
    const response = await fetch('/api/assets', {
      method: 'POST',
      body: JSON.stringify(assetData),  // Send the asset data in the body
      headers: { 'Content-Type': 'application/json' },  // Specify the content type
    });
    return await response.json();  // Return the JSON response from the backend
  } catch (error) {
    console.error('Error adding asset:', error);
    throw error;  // Re-throw the error to handle it in the component
  }
};

// Function to update an asset
const updateAsset = async (assetId, assetData) => {
  try {
    const response = await fetch(`/api/assets/${assetId}`, {
      method: 'PUT',  // HTTP method to update the resource
      body: JSON.stringify(assetData),  // Send the updated asset data
      headers: { 'Content-Type': 'application/json' },  // Specify the content type
    });
    return await response.json();  // Return the updated asset data
  } catch (error) {
    console.error('Error updating asset:', error);
    throw error;  // Re-throw the error to handle it in the component
  }
};

// Function to delete an asset
const deleteAsset = async (assetId) => {
  try {
    const response = await fetch(`/api/assets/${assetId}`, {
      method: 'DELETE',  // HTTP method to delete the resource
    });
    return await response.json();  // Return the response from the server after deletion
  } catch (error) {
    console.error('Error deleting asset:', error);
    throw error;  // Re-throw the error to handle it in the component
  }
};

// Exporting all functions as a default export
export default { getAssets, addAsset, updateAsset, deleteAsset };

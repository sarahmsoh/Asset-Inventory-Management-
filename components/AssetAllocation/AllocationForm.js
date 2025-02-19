import React, { useState, useEffect } from 'react';
import allocationLogic from '../DataLogic/allocationLogic'; // Import allocation logic
import assetLogic from '../DataLogic/assetLogic'; // Import asset logic
import './Allocate.css'
 
const AllocationForm = ({ onAllocationSuccess }) => {
  const [assets, setAssets] = useState([]); // State for storing assets
  const [employees, setEmployees] = useState([]); // State for storing employees
  const [selectedAsset, setSelectedAsset] = useState(''); // State for selected asset
  const [selectedEmployee, setSelectedEmployee] = useState(''); // State for selected employee
  const [quantity, setQuantity] = useState(1); // State for selected quantity

  useEffect(() => {
    // Fetch assets and employees for the form

    // Fetch assets from backend
    assetLogic.getAssets()
      .then((data) => setAssets(data || [])) // Ensure assets is always an array
      .catch((error) => console.error("Error fetching assets:", error));

    // Fetch employees from backend
    fetch('/api/employees')  // Assuming this is the endpoint to fetch employee data
      .then((response) => response.json())
      .then((data) => setEmployees(data || [])) // Ensure employees is always an array
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure selectedAsset and selectedEmployee are not empty before calling allocation
    if (selectedAsset && selectedEmployee) {
      allocationLogic.allocateAsset(selectedAsset, selectedEmployee, quantity)
        .then((response) => {
          if (response.success) {
            alert('Asset successfully allocated!');

            // Pass the new allocation back to the parent to update the table
            const newAllocation = {
              assetName: response.assetName,  // Assuming this data comes from the backend response
              employeeName: response.employeeName,
              quantity: response.quantity,
              id: response.id,  // Assuming an ID is returned for the new allocation
            };
            onAllocationSuccess(newAllocation);  // Pass new allocation to parent
          } else {
            alert('Error: ' + response.message);
          }
        })
        .catch((error) => {
          alert('Error allocating asset!');
          console.error("Error allocating asset:", error);
        });
    } else {
      alert("Please select both asset and employee.");
    }
  };

  return (
    <div>
      <h2>Allocate Asset</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Asset</label>
          <select value={selectedAsset} onChange={(e) => setSelectedAsset(e.target.value)} required>
            <option value="">Select Asset</option>
            {Array.isArray(assets) && assets.length > 0 ? (
              assets.map((asset) => (
                <option key={asset.id} value={asset.id}>
                  {asset.name}
                </option>
              ))
            ) : (
              <option disabled>No assets available</option>
            )}
          </select>
        </div>
        <div>
          <label>Employee</label>
          <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)} required>
            <option value="">Select Employee</option>
            {Array.isArray(employees) && employees.length > 0 ? (
              employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))
            ) : (
              <option disabled>No employees available</option>
            )}
          </select>
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Allocate Asset</button>
      </form>
    </div>
  );
};

export default AllocationForm;

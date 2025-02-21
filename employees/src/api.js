// src/services/api.js

// Function to create a new asset or repair request
export const createRequest = async (token, data) => {
    const response = await fetch('https://api.example.com/requests', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Request creation failed');
    return response.json();
  };

  // Function to get all requests for the logged-in employee
  export const getEmployeeRequests = async (token) => {
    const response = await fetch('https://api.example.com/requests', {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Failed to fetch requests');
    return response.json();
  };

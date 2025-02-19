// requestLogic.js

// Function to create a new request
const createRequest = async (requestData) => {
  try {
    const response = await fetch('/api/requests', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating request:', error);
  }
};

// Function to approve a request
const approveRequest = async (requestId) => {
  try {
    const response = await fetch(`/api/requests/approve/${requestId}`, {
      method: 'PUT',
    });
    return await response.json();
  } catch (error) {
    console.error('Error approving request:', error);
  }
};

// Function to reject a request
const rejectRequest = (requestId) => {
  return fetch(`/api/requests/reject/${requestId}`, {
    method: 'PUT',
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error rejecting request:', error);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { createRequest, approveRequest, rejectRequest };

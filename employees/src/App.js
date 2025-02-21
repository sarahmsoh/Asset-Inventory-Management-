import React from 'react';
import './App.css'; // Import any custom styling if needed
import RequestForm from './RequestForm'; // Import the RequestForm component
import EmployeeDashboard from './EmployeeDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Request Form</h1>
        <p>Please fill out the form below:</p>
      </header>

      <main>

        <EmployeeDashboard />
        <RequestForm />
        <p>Thank you for your request!</p>

      </main>
    </div>
  );
}

export default App;
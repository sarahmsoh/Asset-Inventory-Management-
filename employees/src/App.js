import React from 'react';
import './App.css'; // Import any custom styling if needed
import RequestForm from './RequestForm'; // Import the RequestForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Request Form</h1>
        <p>Please fill out the form below:</p>
      </header>

      <main>
        <RequestForm />
      </main>
    </div>
  );
}

export default App;

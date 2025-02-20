// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

// Create a root container with createRoot (React 18+)
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

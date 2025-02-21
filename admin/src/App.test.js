// frontend/src/tests/App.test.js
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const mockStore = configureStore([]);

test('renders login page when not authenticated', () => {
  const store = mockStore({ auth: { token: null, role: null } });
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('renders admin dashboard for admin', () => {
  const store = mockStore({ auth: { token: 'fake-token', role: 'admin' } });
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/admin']}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
});
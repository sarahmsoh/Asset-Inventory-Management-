import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './shared/Auth/LoginForm';
import AdminLayout from './admin/components/AdminLayout';
import ProtectedRoute from './shared/Auth/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/assets" element={<AssetList />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}
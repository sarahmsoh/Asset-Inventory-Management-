import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // src/App.tsx (Admin Routes)
<Route element={<ProtectedRoute allowedRoles={['admin']} />}>
  <Route path="/admin" element={<AdminDashboard />}>
    <Route index element={<AdminDashboardHome />} />
    <Route path="dashboard" element={<AdminDashboardHome />} />
    <Route path="users" element={<UserManagement />} />
    <Route path="assets" element={<AssetManagement />} />
    <Route path="requests" element={<AllRequests />} />
    <Route path="reports" element={<Reports />} />
  </Route>
</Route>
  );
}

export default App;

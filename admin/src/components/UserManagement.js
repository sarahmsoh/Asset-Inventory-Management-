// src/views/Admin/UserManagement.tsx
import { useState, useEffect } from 'react';
import { DataTable } from '../../components/Common/DataTable';
import { UserFormModal } from '../../components/Admin/UserFormModal';
import { useGetUsersQuery } from '../../services/adminService';

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data: users, isLoading } = useGetUsersQuery();

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
    { header: 'Department', accessor: 'department' },
    { 
      header: 'Actions',
      accessor: 'actions',
      cell: (row: any) => (
        <div className="actions">
          <button onClick={() => handleEdit(row)}>Edit</button>
          <button onClick={() => handleDelete(row.id)}>Delete</button>
        </div>
      )
    }
  ];

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId: string) => {
    // Delete logic
  };

  return (
    <div className="user-management">
      <div className="header">
        <h2>User Management</h2>
        <button onClick={() => setIsModalOpen(true)}>Add New User</button>
      </div>
      
      <DataTable 
        columns={columns}
        data={users || []}
        isLoading={isLoading}
      />

      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        userData={selectedUser}
      />
    </div>
  );
};

export default UserManagement;
// frontend/src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { mockUsers } from '../mocks/data';

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null,
    token: null,
    role: null
  },
  reducers: {
    setCredentials: (state, action) => {
      const user = mockUsers.find(u => u.id === action.payload.userId);
      state.user = user;
      state.role = user?.role;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
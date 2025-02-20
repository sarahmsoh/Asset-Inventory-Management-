// frontend/src/redux/adminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate adding a user without a backend.
export const addUser = createAsyncThunk('admin/addUser', async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...userData, id: Date.now() });
    }, 500);
  });
});

// Simulate adding an asset without a backend.
export const addAsset = createAsyncThunk('admin/addAsset', async (assetData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...assetData, id: Date.now() });
    }, 500);
  });
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: { users: [], assets: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(addAsset.fulfilled, (state, action) => {
      state.assets.push(action.payload);
    });
  },
});

export default adminSlice.reducer;

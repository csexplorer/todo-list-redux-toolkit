import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './authAPI';

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  token: token,
  status: 'idle',
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({username, password}) => {
    const {data} = await login({username, password});

    // The value we return becomes the `fulfilled` action payload
    return data.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const data = action.payload;

        localStorage.setItem('token', data.token)

        state.status = 'idle';
        state.isAuthenticated = true;
        state.token = data.token;
      });
  },
});


export default authSlice.reducer;

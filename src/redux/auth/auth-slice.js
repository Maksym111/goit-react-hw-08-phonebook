import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logIn, logOut } from './auth-operations';

const handleLoginFulfiled = (state, { payload: { data } }) => {
  state.user = data.user;
  state.token = data.token;
  state.isLoggedIn = true;
};

const handleLogoutFulfiled = state => {
  state.user = '';
  state.token = '';
  state.isLoggedIn = false;
};

const handleRejected = (state, { payload }) => {
  console.log('payload', payload);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, handleLoginFulfiled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogoutFulfiled);
  },
});

export const authReducer = authSlice.reducer;

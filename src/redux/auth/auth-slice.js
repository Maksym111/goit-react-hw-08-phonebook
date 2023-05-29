import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchThunkUser, logIn, logOut } from './auth-operations';

const handleLoginFulfiled = (state, { payload: { data } }) => {
  state.user = data.user;
  state.token = data.token;
  state.isLoggedIn = true;
};

const handleLogoutFulfiled = state => {
  state.user = '';
  state.token = null;
  state.isLoggedIn = false;
};

const handleRejected = (state, { payload }) => {};

const handleCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, handleLoginFulfiled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogoutFulfiled)
      .addCase(fetchThunkUser.fulfilled, handleCurrentUser);
  },
});

export const authReducer = authSlice.reducer;

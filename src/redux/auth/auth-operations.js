import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiContact } from 'fetch';

export const logIn = createAsyncThunk('auth/login', async userData => {
  return await ApiContact.logInUser(userData);
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  return await ApiContact.logOutUser();
});

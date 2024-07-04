import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearAuthToken,
  contactsApi,
  setAuthToken,
} from "../../api/contactsApi";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const { data } = await contactsApi.post("/users/signup", userData);
      console.log(data);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const { data } = await contactsApi.post("/users/login", userData);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.token) {
      return thunkApi.rejectWithValue("Not found token");
    }
    try {
      setAuthToken(auth.token);
      const { data } = await contactsApi.get("users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await contactsApi.post("users/logout");
      clearAuthToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

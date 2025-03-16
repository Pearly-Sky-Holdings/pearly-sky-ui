import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "../../../services/Auth/auth";

interface Login {
  customer_id: number;
  first_name: string;
  last_name: string;
  company: string;
  country: string;
  street_address: string;
  apartment_type: string;
  city: string;
  province: string;
  postal_code: string;
  contact: string;
  email: string;
  token: string;
  created_at: string;
  updated_at: string;
}

interface LoginState {
  login: {
    data: Login[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: LoginState = {
  login: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuth.pending, (state) => {
        state.login.isLoading = true;
        state.login.isSuccess = false;
        state.login.errorMessage = "";
      })
      .addCase(getAuth.fulfilled, (state, { payload }) => {
        state.login.isLoading = false;
        state.login.isSuccess = true;
        state.login.data = payload.user;
        localStorage.setItem('token', payload.token);
      })
      .addCase(getAuth.rejected, (state, { payload }) => {
        state.login.isLoading = false;
        state.login.isSuccess = false;
        state.login.errorMessage = payload as string;
      });
  },
});

export default authSlice.reducer;
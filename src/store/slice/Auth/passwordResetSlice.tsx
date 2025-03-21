import { createSlice } from "@reduxjs/toolkit";
import { getForgotPassword } from "../../../services/Auth/auth";

interface ResetPassword {
  email: string;
  password: string;
  otp: string;
  created_at: string;
  updated_at: string;
}

interface ResetPasswordState {
  resetPassword: {
    data: ResetPassword[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: ResetPasswordState = {
  resetPassword: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const passwordResetSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForgotPassword.pending, (state) => {
        state.resetPassword.isLoading = true;
        state.resetPassword.isSuccess = false;
        state.resetPassword.errorMessage = "";
      })
      .addCase(getForgotPassword.fulfilled, (state, { payload }) => {
        state.resetPassword.isLoading = false;
        state.resetPassword.isSuccess = true;
        state.resetPassword.data = payload.user;
        localStorage.setItem("token", payload.token);
      })
      .addCase(getForgotPassword.rejected, (state, { payload }) => {
        state.resetPassword.isLoading = false;
        state.resetPassword.isSuccess = false;
        state.resetPassword.errorMessage = payload as string;
      });
  },
});

export default passwordResetSlice.reducer;

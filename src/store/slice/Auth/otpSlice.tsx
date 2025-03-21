import { createSlice } from "@reduxjs/toolkit";
import { getOtp } from "../../../services/Auth/auth";

interface Otp {
  email: string;
  created_at: string;
  updated_at: string;
}

interface OtpState {
  otp: {
    data: Otp[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: OtpState = {
    otp: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const otpSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOtp.pending, (state) => {
        state.otp.isLoading = true;
        state.otp.isSuccess = false;
        state.otp.errorMessage = "";
      })
      .addCase(getOtp.fulfilled, (state, { payload }) => {
        state.otp.isLoading = false;
        state.otp.isSuccess = true;
        state.otp.data = payload.user;
        localStorage.setItem("token", payload.token);
      })
      .addCase(getOtp.rejected, (state, { payload }) => {
        state.otp.isLoading = false;
        state.otp.isSuccess = false;
        state.otp.errorMessage = payload as string;
      });
  },
});

export default otpSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getPackege } from "../../../services/CleaningServices/index";

interface Package {
  package_id: number;
  name: string;
  price: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface PackageState {
  package: {
    data: Package[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: PackageState = {
  package: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const packagesSlice = createSlice({
  name: "package",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPackege.pending, (state) => {
        state.package.isLoading = true;
        state.package.isSuccess = false;
        state.package.errorMessage = "";
      })
      .addCase(getPackege.fulfilled, (state, { payload }) => {
        state.package.isLoading = false;
        state.package.isSuccess = true;
        state.package.data = payload;
      })
      .addCase(getPackege.rejected, (state, { payload }) => {
        state.package.isLoading = false;
        state.package.isSuccess = false;
        state.package.errorMessage = payload as string;
      });
  },
});

export default packagesSlice.reducer;

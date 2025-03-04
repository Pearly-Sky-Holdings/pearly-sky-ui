import { createSlice } from "@reduxjs/toolkit";
import { getReStocking } from "../../../services/CleaningServices/index";

interface ReStocking {
  id: number;
  name: string;
  category: string;
  created_at: string;
  updated_at: string;
}

interface ReStockingState {
  reStocking: {
    data: ReStocking[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: ReStockingState = {
  reStocking: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const reStockingSlice = createSlice({
  name: "reStocking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReStocking.pending, (state) => {
        state.reStocking.isLoading = true;
        state.reStocking.isSuccess = false;
        state.reStocking.errorMessage = "";
      })
      .addCase(getReStocking.fulfilled, (state, { payload }) => {
        state.reStocking.isLoading = false;
        state.reStocking.isSuccess = true;
        state.reStocking.data = payload;
      })
      .addCase(getReStocking.rejected, (state, { payload }) => {
        state.reStocking.isLoading = false;
        state.reStocking.isSuccess = false;
        state.reStocking.errorMessage = payload as string;
      });
  },
});

export default reStockingSlice.reducer;
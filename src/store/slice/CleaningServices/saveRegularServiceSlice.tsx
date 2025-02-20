import { createSlice } from "@reduxjs/toolkit";
import { saveRegulrService } from "../../../services/CleaningServices/saveRegulrService";



const initialState ={ 
  service: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};


export const regularServiceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveRegulrService.pending, (state) => {
        state.service.isLoading = true;
        state.service.isSuccess = false;
        state.service.errorMessage = "";
      })
      .addCase(saveRegulrService.fulfilled, (state, { payload }) => {
        state.service.isLoading = false;
        state.service.isSuccess = true;
        state.service.data = payload;
      })
      .addCase(saveRegulrService.rejected, (state, { payload }) => {
        state.service.isLoading = false;
        state.service.isSuccess = false;
        state.service.errorMessage = payload as string;
      });
  },
});

export default regularServiceSlice.reducer;

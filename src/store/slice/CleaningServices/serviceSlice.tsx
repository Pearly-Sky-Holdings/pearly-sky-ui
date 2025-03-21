import { createSlice } from "@reduxjs/toolkit";
import { getServices } from "../../../services/CleaningServices/index";

interface Service {
  service_id: number;
  name: string;
  price: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ServiceState {
  service: {
    data: Service[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: ServiceState = {
  service: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const servicesSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.service.isLoading = true;
        state.service.isSuccess = false;
        state.service.errorMessage = "";
      })
      .addCase(getServices.fulfilled, (state, { payload }) => {
        state.service.isLoading = false;
        state.service.isSuccess = true;
        state.service.data = payload;
      })
      .addCase(getServices.rejected, (state, { payload }) => {
        state.service.isLoading = false;
        state.service.isSuccess = false;
        state.service.errorMessage = payload as string;
      });
  },
});

export default servicesSlice.reducer;

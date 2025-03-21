import { createSlice } from "@reduxjs/toolkit";
import { saveServices } from "../../../services/CleaningServices/saveService";

interface PackageDetail {
  package_id: number;
  price: number;
  qty: number;
}

interface ServiceDetails {
  status: string;
  service_id: string;
  price: number;
  date: string;
  time: string;
  property_size: string;
  duration: number;
  number_of_cleaners: number;
  note: string;
  person_type: string;
  language: string;
  business_property: string;
  cleaning_solvents: string;
  Equipment: string;
  package_details: PackageDetail[];
  customer: {
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    city: string;
    province: string;
    postalCode: string;
    contact: string;
    email: string;
    password: string;
  };
}

interface ServiceState {
  service: {
    data: ServiceDetails[];
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

export const serviceDetailsSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveServices.pending, (state) => {
        state.service.isLoading = true;
        state.service.isSuccess = false;
        state.service.errorMessage = "";
      })
      .addCase(saveServices.fulfilled, (state, { payload }) => {
        state.service.isLoading = false;
        state.service.isSuccess = true;
        state.service.data = payload;
      })
      .addCase(saveServices.rejected, (state, { payload }) => {
        state.service.isLoading = false;
        state.service.isSuccess = false;
        state.service.errorMessage = payload as string;
      });
  },
});

export default serviceDetailsSlice.reducer;

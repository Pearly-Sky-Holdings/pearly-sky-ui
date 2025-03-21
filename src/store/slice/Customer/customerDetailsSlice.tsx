import { createSlice } from '@reduxjs/toolkit';
import { getCustomerDetails } from "../../../services/CleaningServices/index";


interface Details {
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
  email : string;
  password : string;
  created_at: string;
  updated_at: string;
}

interface DetailsState {
    details:{
        data: Details[];
        isLoading: boolean;
        isSuccess: boolean;
        errorMessage: string;
    }  
}

const initialState: DetailsState = {
    details:{
        data: [],
        isLoading: false,
        isSuccess: false,
        errorMessage: "",
    }
  
};

export const customerDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerDetails.pending, (state) => {
        state.details.isLoading = true;
        state.details.isSuccess = false;
        state.details.errorMessage = "";
      })
      .addCase(getCustomerDetails.fulfilled, (state, { payload }) => {
              state.details.isLoading = false;
              state.details.isSuccess = true;
              state.details.data = payload;
            })
            .addCase(getCustomerDetails.rejected, (state, { payload }) => {
              state.details.isLoading = false;
              state.details.isSuccess = false;
              state.details.errorMessage = payload as string;
            });
  },
});

export default customerDetailsSlice.reducer;

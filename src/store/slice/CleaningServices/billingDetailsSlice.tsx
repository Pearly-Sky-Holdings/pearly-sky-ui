import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillingDetails {
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
}

const initialState = {
  billingDetails: null as BillingDetails | null,
};

export const billingDetailsSlice = createSlice({
  name: "billingDetails",
  initialState,
  reducers: {
    setBillingDetails: (state, action: PayloadAction<BillingDetails>) => {
      state.billingDetails = action.payload;
    },
    clearBillingDetails: (state) => {
      state.billingDetails = null;
    },
  },
});

export const { setBillingDetails, clearBillingDetails } = billingDetailsSlice.actions;
export default billingDetailsSlice.reducer;
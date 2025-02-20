// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface ServiceDetails {
//     selectedDate: string;
//     selectedTime: string;
//     propertySize: string;
//     duration: string;
//     numCleaners: string;
//     frequency: string;
//     selectedServices: string[];
//     totalPrice: number;
//     additionalNote: string;
//     contactType: string;
//     language: string;
//     propertyType: string;
//     solvents: string;
//     selectedEquipments: string[];
// }

// const initialState = {
//   serviceDetails: null as ServiceDetails | null,
// };

// export const serviceDetailsSlice = createSlice({
//   name: "serviceDetails",
//   initialState,
//   reducers: {
//     setServiceDetails: (state, action: PayloadAction<ServiceDetails>) => {
//       state.serviceDetails = action.payload;
//     },
//     clearServiceDetails: (state) => {
//       state.serviceDetails = null;
//     },
//   },
// });

// export const { setServiceDetails, clearServiceDetails } = serviceDetailsSlice.actions;
// export default serviceDetailsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { saveRegulrService } from "../../../services/CleaningServices/saveRegulrService";

interface ServiceDetails {
       service_id: number;
       date: string;
       time: string;
       property_size: string;
       duration: string;
       number_of_cleaners: string;
       frequency: string;
       package_details: string[];
       price: number;
       note: string;
       person_type: string;
       language: string;
       business_property: string;
       cleaning_solvents: string;
       Equipment: string[];
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

export default serviceDetailsSlice.reducer;

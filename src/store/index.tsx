import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";
import regularServiceSlice from "./slice/CleaningServices/saveRegularServiceSlice";
import serviceDetailsSlice from "./slice/CleaningServices/serviceDetailsSlice";
import billingDetailsSlice from "./slice/CleaningServices/billingDetailsSlice";


export default configureStore({
  reducer: {
   packagesSlice,
   regularServiceSlice,
   serviceDetailsSlice,
   billingDetailsSlice,
  },
});

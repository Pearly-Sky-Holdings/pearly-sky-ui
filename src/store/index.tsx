import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";
import serviceDetailsSlice from "./slice/CleaningServices/serviceDetailsSlice";
import servicesSlice  from "./slice/CleaningServices/serviceSlice";



export default configureStore({
  reducer: {
   packagesSlice,
   serviceDetailsSlice,
   servicesSlice,
  },
});

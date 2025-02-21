import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";
import serviceDetailsSlice from "./slice/CleaningServices/serviceDetailsSlice";



export default configureStore({
  reducer: {
   packagesSlice,
   serviceDetailsSlice,
  },
});
